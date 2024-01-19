import path from "path"
import fs from "fs"
import { promisify } from "util"
import semver from "semver"

const readFile = promisify(fs.readFile)
let originalUserConfig

export default async (req, res) => {
	// Get user data from request body
	const userConfig = req.body
	const userVersion = userConfig.version

	// If the user has an older version before migration was implemented,
	// return the default config and let the clientside handle the error
	if (!userVersion) {
		res.status(200).json(userConfig)
		return
	}

	// Load migrations
	const migrationsData = await readFile(path.join(process.cwd(), "migration", "migrations.json"))
	const migrations = JSON.parse(migrationsData)

	// Get all migration versions that are greater than the user version
	const migrationVersions = Object.keys(migrations).filter((version) =>
		semver.gt(version, userVersion)
	)

	// Sort versions in ascending order
	migrationVersions.sort(semver.compare)

	console.log("\n\nMIGRATION START\n")

	// Apply migrations sequentially
	for (const version of migrationVersions) {
		originalUserConfig = JSON.parse(JSON.stringify(userConfig)) // Create a copy of the user settings
		const migration = migrations[version]

		migration.forEach((change) => {
			const keys = change.path
			let userConf = userConfig

			for (let i = 0; i < keys.length - 1; i++) {
				const key = keys[i]
				if (userConf[key] === undefined) {
					userConf[key] = {}
				}
				userConf = userConf[key]
			}

			applyChange(userConf, change)
		})

		// Set the version to the current version from migrations.json
		userConfig.version = version
	}

	res.json(userConfig)
}

// Tries to migrate user values into changes and updates the user config
function applyChange(userConf, change) {
	const keys = change.path
	const lastKey = keys[keys.length - 1]

	switch (change.kind) {
		case "N": // New
			const value = findKey(originalUserConfig, lastKey)
			console.log(`New key: ${lastKey}, found value: ${value}, rhs value: ${change.rhs}`)
			userConf[lastKey] = value !== undefined ? value : change.rhs
			break
		case "D": // Deleted
			console.log(`Deleted key: ${lastKey}`)
			delete userConf[lastKey]
			break
		case "E": // Edited
			const editedValue = findKey(originalUserConfig, lastKey)
			console.log(
				`Edited key: ${lastKey}, found value: ${editedValue}, rhs value: ${change.rhs}`
			)
			userConf[lastKey] = editedValue !== undefined ? editedValue : change.rhs
			break
		case "A": // Array
			console.log(`\nArray key: ${lastKey}`)
			console.log(change)

			if (userConf[lastKey] === undefined) {
				userConf[lastKey] = []
			}
			if (change.item.kind === "N") {
				userConf[lastKey].push(change.item.rhs)
			} else if (change.item.kind === "D") {
				userConf[lastKey] = userConf[lastKey].filter(
					(item, index) => index !== change.index
				)
			} else if (change.item.kind === "E") {
				userConf[lastKey][change.index] = change.item.rhs
			}
			break
	}
}

// Function to find a key in an object
function findKey(obj, key) {
	// If the key exists at the current level, return its value
	if (obj.hasOwnProperty(key)) {
		return obj[key]
	}
	// If the key does not exist at the current level, search in the next level
	for (let i in obj) {
		if (typeof obj[i] === "object") {
			const found = findKey(obj[i], key)
			// If the key is found at the next level, return its value
			if (found !== undefined) {
				return found
			}
		}
	}
}

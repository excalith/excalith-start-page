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

	// If there are no migrations to apply, return the user config
	if (migrationVersions.length === 0) {
		const latestVersion = semver.maxSatisfying(Object.keys(migrations), "*")
		console.warn(
			` \x1b[33m[WARNING]\x1b[0m Nothing to migrate\n User Version  : \x1b[32m${userVersion}\x1b[0m\n Latest Version: \x1b[32m${latestVersion}\x1b[0m`
		)
		res.status(200).json(userConfig)
		return
	}

	// Sort versions in ascending order
	migrationVersions.sort(semver.compare)

	console.log("\n Migration Starting...")

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
		console.log(
			` \x1b[32m-\x1b[0m Migrating from \x1b[32m${userConfig.version}\x1b[0m -> \x1b[32m${version}\x1b[0m`
		)
		userConfig.version = version
	}

	console.log(" Migration Complete\n")
	res.json(userConfig)
}

// Tries to migrate user values into changes and updates the user config
function applyChange(userConf, change) {
	const keys = change.path
	const lastKey = keys[keys.length - 1]

	switch (change.kind) {
		case "N": // New
			const value = findOldValue(lastKey)
			userConf[lastKey] = value !== undefined ? value : change.rhs

			// console.log(`New key: ${lastKey}, found value: ${value}, rhs value: ${change.rhs}`)
			break
		case "D": // Deleted
			delete userConf[lastKey]

			// console.log(`Deleted key: ${lastKey}`)
			break
		case "E": // Edited
			const editedValue = findOldValue(lastKey)
			userConf[lastKey] = editedValue !== undefined ? editedValue : change.rhs

			// console.log(
			// 	`Edited key: ${lastKey}, found value: ${editedValue}, rhs value: ${change.rhs}`
			// )
			break
		case "A": // Array
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

			// console.log("\nArray Change:")
			// console.log(change)
			break
	}
}

// Tries to find old values in the original user config
function findOldValue(path) {
	let config = originalUserConfig
	for (let key of path) {
		if (config[key] === undefined) {
			return undefined
		}
		config = config[key]
	}
	return config
}

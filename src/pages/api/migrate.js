import { applyChange } from "deep-diff"
import path from "path"
import fs from "fs"
import { promisify } from "util"
import semver from "semver"

const readFile = promisify(fs.readFile)

export default async (req, res) => {
	// Get user data from request body
	const userConfig = req.body
	const userVersion = userConfig.version

	// Load migrations
	const migrationsData = await readFile(path.join(process.cwd(), "migration", "migrations.json"))
	const migrations = JSON.parse(migrationsData)

	// Get all migration versions that are greater than the user version
	const migrationVersions = Object.keys(migrations).filter((version) =>
		semver.gt(version, userVersion)
	)

	// Sort versions in ascending order
	migrationVersions.sort(semver.compare)

	// Apply migrations sequentially
	for (const version of migrationVersions) {
		const migration = migrations[version]

		migration.forEach((change) => {
			applyChange(userConfig, userConfig, change)
		})
	}

	res.json(userConfig)
}

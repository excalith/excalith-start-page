const fs = require("fs")
const diff = require("deep-diff").diff
const https = require("https")

const generateMigrationData = () => {
	printSuccess("\nGenerating Migration Data")

	const currentSettings = JSON.parse(fs.readFileSync("./data/settings.json", "utf8"))

	// The latest released version of the settings.json
	const url =
		"https://raw.githubusercontent.com/excalith/excalith-start-page/main/data/settings.json"

	// Request the latest settings.json from the repository
	https.get(url, (res) => {
		printItem("Reading latest settings.json")
		let previousSettings = ""

		res.on("data", (chunk) => {
			previousSettings += chunk
		})

		res.on("end", () => {
			previousSettings = JSON.parse(previousSettings)

			printItem("Comparing with settings.json")
			const differences = diff(previousSettings, currentSettings)

			if (!differences || differences.length === 0) {
				printWarning("\nNo differences found in settings.json\n")
			} else {
				let migrations
				const migrationsPath = "./migration/migrations.json"
				if (
					fs.existsSync(migrationsPath) &&
					fs.readFileSync(migrationsPath, "utf8").trim() !== ""
				) {
					migrations = JSON.parse(fs.readFileSync(migrationsPath, "utf8"))
				} else {
					migrations = {}
				}

				migrations[currentSettings.version] = differences

				printItem("Writing changes into migrations.json\n")
				printItem("Differences: ")
				console.log(migrations)
				fs.writeFileSync("./migration/migrations.json", JSON.stringify(migrations, null, 2))
			}
		})
	})
}

generateMigrationData()

function printLog(message) {
	console.log("%s", message)
}

function printItem(message) {
	console.log("\x1b[36m-\x1b[0m %s", message) // Cyan
}

function printError(message) {
	console.log("\x1b[31m%s\x1b[0m", message) // Red
}

function printWarning(message) {
	console.log("\x1b[33m%s\x1b[0m", message) // Yellow
}

function printSuccess(message) {
	console.log("\x1b[32m%s\x1b[0m", message) // Green
}

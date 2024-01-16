import fs from "fs"
import path from "path"

export default function loadSettings(req, res) {
	try {
		const filePath = path.join(process.cwd(), "data", "settings.json")
		let settings

		if (fs.existsSync(filePath)) {
			const fileContents = fs.readFileSync(filePath, "utf8")
			settings = JSON.parse(fileContents)
		} else {
			// Write the default settings to the file if it does not exist
			console.log("Settings file not found, creating default settings file instead.")
			settings = req.body
			fs.writeFileSync(filePath, JSON.stringify(settings, null, 2))
		}

		res.status(200).json(settings)
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: "An error occurred while loading settings" })
	}
}

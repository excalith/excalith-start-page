import fs from "fs"
import path from "path"

export default function handler(req, res) {
	const themeName = req.query.name
	const themesDirectory = path.join(process.cwd(), "data", "themes")

	if (!fs.existsSync(themesDirectory)) {
		res.status(200).json({
			message: "Themes folder does not exist. Please create one in the data folder"
		})
		return
	}

	if (themeName) {
		// If a theme name is provided, return the specified theme
		const filePath = path.join(themesDirectory, `${themeName}.json`)

		if (!fs.existsSync(filePath)) {
			res.status(200).json({ message: `Theme ${themeName} not found` })
			return
		}

		const fileContents = fs.readFileSync(filePath, "utf8")
		const theme = JSON.parse(fileContents)

		res.status(200).json(theme)
	} else {
		// If no theme name is provided, return all themes
		const fileNames = fs.readdirSync(themesDirectory)
		const themeNames = fileNames.map((fileName) => path.parse(fileName).name)

		if (themeNames.length === 0) {
			res.status(200).json({ message: "No themes found in theme folder" })
		} else {
			res.status(200).json(themeNames)
		}
	}
}

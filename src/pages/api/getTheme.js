import fs from "fs"
import path from "path"

export default function handler(req, res) {
	const themeName = req.query.name
	const themesDirectory = path.join(process.cwd(), "public", "themes")
	const filePath = path.join(themesDirectory, `${themeName}.json`)

	if (!fs.existsSync(filePath)) {
		res.status(404).json({ message: "Theme not found" })
		return
	}

	const fileContents = fs.readFileSync(filePath, "utf8")
	const theme = JSON.parse(fileContents)

	res.status(200).json(theme)
}

import fs from "fs"
import path from "path"

export default function handler(req, res) {
	const themesDirectory = path.join(process.cwd(), "public", "data", "themes")
	const fileNames = fs.readdirSync(themesDirectory)
	const themeNames = fileNames.map((fileName) => path.parse(fileName).name)
	res.status(200).json(themeNames)
}

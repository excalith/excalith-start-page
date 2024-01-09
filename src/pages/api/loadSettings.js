import fs from "fs"
import path from "path"

export default function handler(req, res) {
	const filePath = path.join(process.cwd(), "data", "settings.json")
	const fileContents = fs.readFileSync(filePath, "utf8")
	res.status(200).json(JSON.parse(fileContents))
}

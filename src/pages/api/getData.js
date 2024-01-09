import fs from "fs"
import path from "path"

export default function handler(req, res) {
	const { file } = req.query

	// Construct the full path to the file
	const filePath = path.join(process.cwd(), "data", file)

	// Determine the MIME type of the file based on its extension
	let mimeType
	const extension = path.extname(file).toLowerCase()
	switch (extension) {
		case ".json":
			mimeType = "application/json"
			break
		case ".svg":
			mimeType = "image/svg+xml"
			break
		case ".png":
			mimeType = "image/png"
			break
		case ".jpg":
		case ".jpeg":
			mimeType = "image/jpeg"
			break
		case ".webp":
			mimeType = "image/webp"
			break
		case ".gif":
			mimeType = "image/gif"
			break
		default:
			mimeType = "application/octet-stream" // Fallback MIME type
	}

	try {
		// Read the file
		const data = fs.readFileSync(filePath)

		// Set the Content-Type header to the appropriate value for the file
		if (mimeType) {
			res.setHeader("Content-Type", mimeType)
		}
		// Send the file data in the response
		res.end(data)
	} catch (err) {
		res.status(200).json({ warning: "File not found: " + file })
		res.end() // Send the response
	}
}

import fs from "fs/promises"
import path from "path"

const DATA_DIR = path.join(process.cwd(), "data")
const BACKUP_DIR = path.join(DATA_DIR, "backups")

export default async function handler(req, res) {
	const settings = req.body
	const save = req.query.save !== undefined
	const backup = req.query.backup !== undefined

	let fileName
	let filePath
	let message

	try {
		if (backup) {
			const version = !settings.version ? "premigrate" : settings.version
			fileName = `settings-${version}-backup.json`
			filePath = path.join(BACKUP_DIR, fileName)
			message = `Settings backup v${version} saved`

			// Ensure the backups directory exists
			await fs.mkdir(BACKUP_DIR, { recursive: true })

			await fs.writeFile(filePath, JSON.stringify(settings, null, 2))
		}

		if (save) {
			fileName = "settings.json"
			filePath = path.join(DATA_DIR, fileName)
			message = "Settings saved"

			await fs.writeFile(filePath, JSON.stringify(settings, null, 2))
		}

		res.status(200).json({ message: message })
	} catch (error) {
		console.error(error)
		res.status(500).json({ message: "An error occurred while saving settings" })
	}
}

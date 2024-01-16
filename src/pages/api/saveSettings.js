import fs from "fs"
import path from "path"

export default function handler(req, res) {
	const settings = req.body
	const isBackup = req.query.isBackup

	let fileName
	let message
	if (isBackup) {
		fileName = `settings-${settings.version}-backup.json`
		message = `Settings backup v${settings.version} saved`
	} else {
		fileName = "settings.json"
		message = "Settings saved"
	}

	const filePath = path.join(process.cwd(), "data", fileName)
	fs.writeFileSync(filePath, JSON.stringify(settings, null, 2))
	res.status(200).json({ message: message })
}

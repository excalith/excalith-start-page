import React, { useEffect, useState } from "react"
import { isURL } from "@/utils/isURL"
import Prompt from "@/components/Prompt"
import { openLink } from "@/utils/openLink"
let loaded = false

const Config = ({ commands }) => {
	const [command] = useState(commands.join(" "))
	const [consoleLog, setConsoleLog] = useState([])

	useEffect(() => {
		if (loaded) return
		loaded = true

		setConsoleLog([])

		if (
			commands[1] === "import" &&
			commands.length === 3 &&
			isURL(commands[2])
		) {
			importConfig(commands[2])
		} else if (commands[1] === "export") {
			exportConfig()
		} else if (commands[1] === "reset") {
			resetConfig()
		} else {
			appendToLog("Invalid config command: " + commands.join(" "), false)
			appendToLog("Press ESC to continue", true)
		}
	}, [commands])

	const importConfig = (url) => {
		appendToLog("Fetching settings from remote", true)
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					const message = "File not found on URL"
					appendToLog(message, false)
					throw Error(message)
				}

				return res.json()
			})
			.then((data) => {
				localStorage.setItem("settings", JSON.stringify(data))
				appendToLog("Successfully saved to local storage", true)
			})
			.catch((err) => {
				appendToLog(err, false)
			})
			.finally(() => {
				appendToLog("Press ESC to continue", true)
			})
	}

	const resetConfig = () => {
		appendToLog("Removed local configuration", true)
		localStorage.removeItem("settings")
		appendToLog("Press ESC to continue", true)
	}

	const exportConfig = () => {
		appendToLog("Exporting local configuration", true)
		const settings = localStorage.getItem("settings")

		if (settings) {
			const blob = new Blob([settings], { type: "application/json" })
			const url = URL.createObjectURL(blob)
			openLink(url)
		} else {
			appendToLog("No local configuration found", false)
		}

		appendToLog("Press ESC to continue", true)
	}

	const appendToLog = (text, status) => {
		const prefix = status ? "[✓] " : "[✖] "
		setConsoleLog((consoleLog) => [...consoleLog, prefix + text])
	}

	return (
		<div className="h-full overflow-y-auto text-white">
			<div className="row">
				<ul className="list-none mb-line">
					<li>
						<Prompt />
						{command}
					</li>
				</ul>
				<ul className="list-none">
					{consoleLog.map((data, index) => {
						return <li key={index}>{data}</li>
					})}
				</ul>
			</div>
		</div>
	)
}

export default Config

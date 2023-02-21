import React, { useEffect, useState } from "react"
import { isURL } from "@/utils/isURL"
import Prompt from "@/components/Prompt"
import { openLink } from "@/utils/openLink"

const Config = ({ commands, closeCallback }) => {
	const [command] = useState(commands.join(" "))
	const [consoleLog, setConsoleLog] = useState([])
	const [isDone, setDone] = useState(false)

	useEffect(() => {
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
			invalidCommand()
			setDone(true)
		}
	}, [commands])

	const importConfig = (url) => {
		appendToLog("Fetching settings from remote", "[✓]")
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					const message = "File not found on URL"
					appendToLog(message, "[✖]")
					throw Error(message)
				}

				return res.json()
			})
			.then((data) => {
				localStorage.setItem("settings", JSON.stringify(data))
				appendToLog("Successfully saved to local storage", "[✓]")
			})
			.catch((err) => {
				appendToLog(err, "[✖]")
			})
			.finally(() => {
				setDone(true)
			})
	}

	const resetConfig = () => {
		appendToLog("Removed local configuration", "[✓]")
		localStorage.removeItem("settings")
		setDone(true)
	}

	const exportConfig = () => {
		appendToLog("Exporting local configuration", "[✓]")
		const settings = localStorage.getItem("settings")

		if (settings) {
			const blob = new Blob([settings], { type: "application/json" })
			const url = URL.createObjectURL(blob)
			openLink(url)
		} else {
			appendToLog("No local configuration found", "[✖]")
		}

		setDone(true)
	}

	const invalidCommand = () => {
		appendToLog("Invalid config command: " + commands.join(" "), "[✖]")
		appendToLog("Usage:")
		appendToLog("config import <url>: Import remote config")
		appendToLog("config export: Export local config")
		appendToLog("config reset: Reset to default config")
	}

	const appendToLog = (text, symbol) => {
		const prefix = symbol ? symbol : ""
		setConsoleLog((consoleLog) => [...consoleLog, prefix + text])
	}

	return (
		<div
			className="h-full overflow-y-auto text-white"
			onClick={closeCallback}>
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
					{isDone && (
						<li className="mt-line">Press Enter to continue...</li>
					)}
				</ul>
			</div>
		</div>
	)
}

export default Config

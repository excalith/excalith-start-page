import React, { useEffect, useRef, useState } from "react"
import Prompt from "@/components/Prompt"
import { isURL } from "@/utils/isURL"
import { useSettings } from "@/context/settings"
import defaultConfig from "startpage.config"
import dynamic from "next/dynamic"

const Config = ({ commands, closeCallback }) => {
	const [command] = useState(commands.join(" "))
	const [consoleLog, setConsoleLog] = useState([])
	const [isDone, setDone] = useState(false)
	const [isEditMode, setIsEditMode] = useState(false)
	const { setSettings, resetSettings } = useSettings()

	const CodeEditor = dynamic(() => import("@/components/Editor"), {
		ssr: false
	})

	useEffect(() => {
		setConsoleLog([])

		if (
			commands[1] === "import" &&
			commands.length === 3 &&
			isURL(commands[2])
		) {
			importConfig(commands[2])
		} else if (commands[1] === "edit") {
			editConfig()
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
				setSettings(JSON.stringify(data))
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
		appendToLog("Reverted back to default configuration", "[✓]")
		resetSettings()
		setDone(true)
	}

	const editConfig = () => {
		setIsEditMode(true)
	}

	const invalidCommand = () => {
		appendToLog("Invalid config command: " + commands.join(" "), "[✖]")
		appendToLog("Usage:")
		appendToLog("config import <url>: Import remote config")
		appendToLog("config edit: Edit local config")
		appendToLog("config reset: Reset to default config")
	}

	const appendToLog = (text, symbol) => {
		const prefix = symbol ? symbol : ""
		setConsoleLog((consoleLog) => [...consoleLog, prefix + text])
	}

	function closeConfigWindow(forceClose) {
		if (isEditMode) return

		setIsEditMode(false)
		closeCallback()
	}

	return (
		<div
			className="h-full overflow-y-auto text-white"
			onClick={closeConfigWindow}>
			<div className="row">
				<ul className="list-none">
					<li>
						<Prompt />
						{command}
					</li>
				</ul>
				{isEditMode ? (
					<>
						<CodeEditor />
					</>
				) : (
					<ul className="list-none mt-line">
						{consoleLog.map((data, index) => {
							return <li key={index}>{data}</li>
						})}
						{isDone && (
							<li className="mt-line">
								Press Enter to continue...
							</li>
						)}
					</ul>
				)}
			</div>
		</div>
	)
}

export default Config

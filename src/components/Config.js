import React, { useEffect, useState } from "react"
import Prompt from "@/components/Prompt"
import { isURL } from "@/utils/isURL"
import { useSettings } from "@/context/settings"
import dynamic from "next/dynamic"

async function getTheme(themeName) {
	try {
		const theme = await fetch("/themes/" + themeName + ".json").then((res) => res.json())
		return theme
	} catch {
		return null
	}
}

const Config = ({ commands, closeCallback }) => {
	const [command] = useState(commands.join(" "))
	const [consoleLog, setConsoleLog] = useState([])
	const [isDone, setDone] = useState(false)
	const [isEditMode, setIsEditMode] = useState(false)
	const { settings, setSettings, resetSettings } = useSettings()
	const CodeEditor = dynamic(() => import("@/components/Editor"), {
		ssr: false
	})

	useEffect(() => {
		setConsoleLog([])

		const cmd = commands[1]
		if (cmd === "import" && commands.length === 3 && isURL(commands[2])) {
			importConfig(commands[2])
		} else if (cmd === "edit") {
			editConfig()
		} else if (cmd === "reset") {
			resetConfig()
		} else if (cmd === "theme") {
			if (commands.length === 3) {
				const themeName = commands[2]
				getTheme(themeName).then((theme) => {
					if (theme === null) {
						invalidTheme(theme)
					} else {
						setTheme(theme, themeName)
					}
				})
			} else {
				invalidTheme()
				setDone(true)
			}
		} else {
			invalidCommand()
			setDone(true)
		}
	}, [])

	const importConfig = (url) => {
		appendToLog("Fetching settings from remote", "success")
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					appendToLog("File not found on URL", "error")
					throw Error(message)
				}

				return res.json()
			})
			.then((data) => {
				setSettings(data)
				appendToLog("Successfully saved to local storage", "success")
			})
			.catch((err) => {
				appendToLog(err, true)
			})
			.finally(() => {
				setDone(true)
			})
	}

	const resetConfig = () => {
		appendToLog("Reverted back to default configuration", "success")
		resetSettings()
		setDone(true)
	}

	const editConfig = () => {
		setIsEditMode(true)
	}

	const invalidCommand = () => {
		appendToLog("Invalid config command: " + commands.join(" "), "error")
		appendToLog("Usage:")
		appendToLog("config import <url>: Import remote config")
		appendToLog("config theme <theme-name>: Switch theme")
		appendToLog("config edit: Edit local config")
		appendToLog("config reset: Reset to default config")
	}

	const invalidTheme = (themeName) => {
		appendToLog("Invalid theme: " + commands[2], "error")
		appendToLog("Usage:")
		appendToLog("config theme <theme>: Set theme")
		appendToLog("Available Themes:")
		appendToLog("default")
		appendToLog("catppuccin")
		appendToLog("dracula")
		appendToLog("nord")
	}

	function setTheme(themeData, themeName) {
		let newSettings = Object.assign({}, settings)
		newSettings.theme = themeData
		setSettings(newSettings)
		appendToLog("Theme set to " + themeName, "success")
		setDone(true)
	}

	const appendToLog = (text, type) => {
		setConsoleLog((consoleLog) => [...consoleLog, { type: type, text: text }])
	}

	function closeConfigWindow() {
		if (isEditMode) return

		setIsEditMode(false)
		closeCallback()
	}

	return (
		<div className="h-full overflow-y-auto text-white" onClick={closeConfigWindow}>
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
							return (
								<li key={index}>
									{data.type === "error" && (
										<p>
											<span className="text-red">[✖] </span>
											{data.text}
										</p>
									)}
									{data.type === "success" && (
										<p>
											<span className="text-green">[✓] </span>
											{data.text}
										</p>
									)}
									{data.type === undefined && <p>{data.text}</p>}
								</li>
							)
						})}
						{isDone && <li className="mt-line">Press ESC to continue...</li>}
					</ul>
				)}
			</div>
		</div>
	)
}

export default Config

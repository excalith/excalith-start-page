import React, { useEffect, useState } from "react"
import Prompt from "@/components/Prompt"
import { isURL } from "@/utils/isURL"
import { useSettings } from "@/context/settings"
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
		appendToLog("config edit: Edit local config")
		appendToLog("config reset: Reset to default config")
	}

	const appendToLog = (text, type) => {
		setConsoleLog((consoleLog) => [
			...consoleLog,
			{ type: type, text: text }
		])
	}

	function closeConfigWindow() {
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
							return (
								<li key={index}>
									{data.type === "error" && (
										<p>
											<span className="text-red">
												[✖]{" "}
											</span>
											{data.text}
										</p>
									)}
									{data.type === "success" && (
										<p>
											<span className="text-green">
												[✓]{" "}
											</span>
											{data.text}
										</p>
									)}
									{data.type === undefined && (
										<p>{data.text}</p>
									)}
								</li>
							)
						})}
						{isDone && (
							<li className="mt-line">
								Press ESC to continue...
							</li>
						)}
					</ul>
				)}
			</div>
		</div>
	)
}

export default Config

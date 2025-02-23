import React, { useEffect, useState, useRef } from "react"
import List from "@/components/List"
import Help from "@/components/Help"
import Config from "@/components/Config"
import Fetch from "@/components/Fetch"
import { useSettings } from "@/context/settings"
import { subscribe, unsubscribe } from "@/utils/event"
import { RunCommand } from "@/utils/command"

const Terminal = () => {
	const windowRef = useRef(null)
	const [commands, setCommands] = useState("list")
	const [windowHeight, setWindowHeight] = useState({})
	const { settings } = useSettings()

	useEffect(() => {
		if (settings.terminal.fixedHeight) {
			const clientHeight = windowRef.current.clientHeight
			setWindowHeight({
				height: clientHeight
			})
		}

		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				closeWindow()
			}
		}

		subscribe("command", (e) => setCommands(e.detail))
		document.addEventListener("keydown", handleKeyDown)
		return () => {
			unsubscribe("command", (e) => setCommands(e.detail))
			document.removeEventListener("keydown", handleKeyDown)
		}
		// eslint-disable-next-line
	}, [settings])

	const closeWindow = () => {
		RunCommand("list", settings)
	}

	const getWindow = () => {
		const cmd = commands[0]

		if (cmd === "help") {
			return <Help closeCallback={closeWindow} />
		} else if (cmd === "config" && commands.length >= 2) {
			return <Config commands={commands} closeCallback={closeWindow} />
		} else if (cmd === "fetch") {
			return <Fetch closeCallback={closeWindow} />
		} else {
			return <List />
		}
	}

	if (!settings) return

	return (
		<div
			className={`absolute w-full h-fit inset-x-0 inset-y-0 m-auto shadow-lg rounded-terminal bg-window-color max-w-terminal p-terminal ${
				settings.terminal.windowGlow && "window-glow"
			}`}
			style={windowHeight}
			ref={windowRef}>
			{getWindow()}
		</div>
	)
}

export default Terminal

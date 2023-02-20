import React, { useEffect, useState, useRef } from "react"
import Settings from "@/utils/settings"
import List from "@/components/List"
import Help from "@/components/Help"
import Config from "@/components/Config"
import Nfetch from "@/components/NFetch"
import { subscribe, unsubscribe } from "@/utils/event"
import { RunCommand } from "@/utils/command"

const Window = () => {
	const windowRef = useRef(null)
	const [commands, setCommands] = useState("list")
	const [windowHeight, setWindowHeight] = useState({})

	useEffect(() => {
		if (Settings.terminal.fixedheight) {
			const clientHeight = windowRef.current.clientHeight
			setWindowHeight({
				height: clientHeight
			})
		}

		const handleKeyDown = (event) => {
			if (
				event.key === "q" ||
				event.key === "Escape" ||
				event.key === "Enter" ||
				((event.altkey || event.ctrlKey) && event.code === "KeyD")
			) {
				closeWindow()
			}
		}

		subscribe("command", (e) => setCommands(e.detail))
		document.addEventListener("keydown", handleKeyDown)
		return () => {
			unsubscribe("command", (e) => setCommands(e.detail))
			document.removeEventListener("keydown", handleKeyDown)
		}
	}, [])

	const closeWindow = () => {
		RunCommand("list")
	}

	const getWindow = () => {
		const cmd = commands[0]

		if (cmd === "help") {
			return <Help closeCallback={closeWindow} />
		} else if (cmd === "config" && commands.length >= 2) {
			return <Config commands={commands} />
		} else if (cmd === "nfetch") {
			return <Nfetch closeCallback={closeWindow} />
		} else {
			return <List />
		}
	}

	return (
		<div
			id="window"
			className={`position-absolute top-50 start-50 translate-middle ${
				Settings.colors.glowcolor === "none" ? "shadow" : "glow"
			}`}
			style={windowHeight}
			ref={windowRef}>
			{getWindow()}
		</div>
	)
}

export default Window

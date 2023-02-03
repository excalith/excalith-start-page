import React, { useEffect, useState, useRef } from "react"
import Config from "@/startpage.config"
import List from "@/components/List"
import Help from "@/components/Help"
import Nfetch from "@/components/NFetch"
import { subscribe, unsubscribe } from "@/utils/event"

const Window = () => {
	const windowRef = useRef(null)
	const [windowMode, setWindowMode] = useState("showList")
	const [windowHeight, setWindowHeight] = useState({})

	useEffect(() => {
		if (Config.terminal.fixedheight) {
			const clientHeight = windowRef.current.clientHeight
			setWindowHeight({
				height: clientHeight
			})
		}

		subscribe("showList", () => setWindowMode("showList"))
		subscribe("showHelp", () => setWindowMode("showHelp"))
		subscribe("showNfetch", () => setWindowMode("showNfetch"))

		return () => {
			unsubscribe("showList", () => setWindowMode("showList"))
			unsubscribe("showHelp", () => setWindowMode("showList"))
			unsubscribe("showNfetch", () => setWindowMode("showNfetch"))
		}
	}, [])

	return (
		<div
			id="window"
			className={`position-absolute top-50 start-50 translate-middle ${
				Config.colors.glowcolor === "none" ? "shadow" : "glow"
			}`}
			style={windowHeight}
			ref={windowRef}>
			{windowMode === "showList" && <List />}
			{windowMode === "showHelp" && <Help />}
			{windowMode === "showNfetch" && <Nfetch />}
			{/* <Nfetch /> */}
		</div>
	)
}

export default Window

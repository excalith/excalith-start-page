import React, { useEffect, useState } from "react"
import Meta from "@/components/Meta"
import Terminal from "@/components/Terminal"
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import { useSettings } from "@/context/settings"

export default function Home() {
	const { settings, setSettings } = useSettings()
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		const info = `\u00A9 2022-${new Date().getFullYear()} Can Cellek\n\nStart Page designed by Can Cellek\nCheck out the source code at\nhttps://github.com/excalith/excalith-start-page`
		console.log(info)

		const localStorageSettings = localStorage.getItem("settings")
		if (localStorageSettings) setSettings(JSON.parse(localStorageSettings))
	}, [])

	useEffect(() => {
		// Get settings from context
		const loadedSettings = settings

		// Get variables from config
		const documentStyle = document.documentElement.style

		// Set Terminal
		documentStyle.setProperty("--color-glow", loadedSettings.terminal.glowColor)
		documentStyle.setProperty("--background-color", loadedSettings.terminal.backgroundColor)
		documentStyle.setProperty("--window-color", loadedSettings.terminal.windowColor)

		// Set Prompt Selection Color
		documentStyle.setProperty("--selection-fg", loadedSettings.prompt.selectionFg)
		documentStyle.setProperty("--selection-bg", loadedSettings.prompt.selectionBg)

		// Set Text Colors
		documentStyle.setProperty("--white", loadedSettings.colors.white)
		documentStyle.setProperty("--gray", loadedSettings.colors.gray)
		documentStyle.setProperty("--black", loadedSettings.colors.black)
		documentStyle.setProperty("--red", loadedSettings.colors.red)
		documentStyle.setProperty("--green", loadedSettings.colors.green)
		documentStyle.setProperty("--yellow", loadedSettings.colors.yellow)
		documentStyle.setProperty("--blue", loadedSettings.colors.blue)
		documentStyle.setProperty("--cyan", loadedSettings.colors.cyan)
		documentStyle.setProperty("--magenta", loadedSettings.colors.magenta)
		documentStyle.setProperty("--purple", loadedSettings.colors.purple)

		setIsReady(true)
	}, [settings])

	return (
		<main className={"transition-all duration-200 ease-in-out"}>
			{isReady && (
				<>
					<Meta />
					<Terminal />
				</>
			)}
		</main>
	)
}

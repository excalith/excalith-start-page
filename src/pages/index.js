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
		const glowColor = loadedSettings.terminal.glowColor
		const backgroundColor = loadedSettings.terminal.backgroundColor
		const windowColor = loadedSettings.terminal.windowColor
		documentStyle.setProperty("--color-glow", glowColor)
		documentStyle.setProperty("--background-color", backgroundColor)
		documentStyle.setProperty("--window-color", windowColor)

		// Set Prompt Selection Color
		const selectionfg = loadedSettings.prompt.selectionFg
		const selectionbg = loadedSettings.prompt.selectionBg
		documentStyle.setProperty("--selection-fg", selectionfg)
		documentStyle.setProperty("--selection-bg", selectionbg)

		// Set Text Colors
		const textWhite = loadedSettings.colors.white
		const textGray = loadedSettings.colors.gray
		const textBlack = loadedSettings.colors.black
		const textRed = loadedSettings.colors.red
		const textGreen = loadedSettings.colors.green
		const textYellow = loadedSettings.colors.yellow
		const textBlue = loadedSettings.colors.blue
		const textCyan = loadedSettings.colors.cyan
		const textMagenta = loadedSettings.colors.magenta
		const textPurple = loadedSettings.colors.purple
		documentStyle.setProperty("--white", textWhite)
		documentStyle.setProperty("--gray", textGray)
		documentStyle.setProperty("--black", textBlack)
		documentStyle.setProperty("--red", textRed)
		documentStyle.setProperty("--green", textGreen)
		documentStyle.setProperty("--yellow", textYellow)
		documentStyle.setProperty("--blue", textBlue)
		documentStyle.setProperty("--cyan", textCyan)
		documentStyle.setProperty("--magenta", textMagenta)
		documentStyle.setProperty("--purple", textPurple)

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

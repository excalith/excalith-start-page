import React, { useEffect, useState } from "react"
import Meta from "@/components/Meta"
import Terminal from "@/components/Terminal"
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import { useSettings } from "@/context/settings"

export default function Home() {
	const { settings } = useSettings()
	const [isReady, setIsReady] = useState(false)

	useEffect(() => {
		const info = `\u00A9 2022-${new Date().getFullYear()} Can Cellek\n\nStart Page designed by Can Cellek\nCheck out the source code at\nhttps://github.com/excalith/excalith-start-page`
		console.log(info)
	}, [])

	useEffect(() => {
		if (!settings) return

		// Get variables from config
		const documentStyle = document.documentElement.style

		// Set Terminal
		documentStyle.setProperty("--glow-color", settings.theme.glowColor)
		documentStyle.setProperty("--background-color", settings.theme.backgroundColor)
		documentStyle.setProperty("--window-color", settings.theme.windowColor)

		// Set Prompt Selection Color
		documentStyle.setProperty("--selection-fg", "var(--" + settings.prompt.selectionFg + ")")
		documentStyle.setProperty("--selection-bg", "var(--" + settings.prompt.selectionBg + ")")

		// Set Text Colors
		documentStyle.setProperty("--white", settings.theme.white)
		documentStyle.setProperty("--gray", settings.theme.gray)
		documentStyle.setProperty("--black", settings.theme.black)
		documentStyle.setProperty("--red", settings.theme.red)
		documentStyle.setProperty("--green", settings.theme.green)
		documentStyle.setProperty("--yellow", settings.theme.yellow)
		documentStyle.setProperty("--blue", settings.theme.blue)
		documentStyle.setProperty("--cyan", settings.theme.cyan)
		documentStyle.setProperty("--magenta", settings.theme.magenta)
		documentStyle.setProperty("--purple", settings.theme.purple)

		setIsReady(true)
	}, [settings])

	return (
		<main className={"transition-all duration-200 ease-in-out"}>
			{isReady && (
				<>
					<Meta />
					<div className={`animate-fadeIn`}>
						<Terminal />
					</div>
				</>
			)}
		</main>
	)
}

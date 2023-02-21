import React, { useEffect, useState } from "react"
import Settings from "@/utils/settings"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
	const [settings, setSettings] = useState()

	useEffect(() => {
		setSettings(Settings)

		// You can comment out this line and use the one below it for your own start page. Please do not remove the attribution to the original author.
		const info = `\u00A9 2022-${new Date().getFullYear()} Can Cellek\n\nStart Page designed by Can Cellek\nCheck out the source code at\nhttps://github.com/excalith/excalith-start-page`
		// const info = `${Settingsusername} Start Page\nForked from https://github.com/excalith/excalith-start-page\nModified by ${Config.username}`
		console.log(info)

		// Get variables from config
		const documentStyle = document.documentElement.style

		// Set Terminal
		const terminal = Settings.terminal
		const glowColor = terminal.glowColor
		const backgroundColor = terminal.backgroundColor
		const windowColor = terminal.windowColor
		documentStyle.setProperty("--color-glow", glowColor)
		documentStyle.setProperty("--background-color", backgroundColor)
		documentStyle.setProperty("--window-color", windowColor)

		// Set Prompt Selection Color
		const prompt = Settings.prompt
		const selectionfg = prompt.selectionFg
		const selectionbg = prompt.selectionBg
		documentStyle.setProperty("--selection-fg", selectionfg)
		documentStyle.setProperty("--selection-bg", selectionbg)

		// Set Text Colors
		const colors = Settings.colors
		const textWhite = colors.white
		const textGray = colors.gray
		const textBlack = colors.black
		const textRed = colors.red
		const textGreen = colors.green
		const textYellow = colors.yellow
		const textBlue = colors.blue
		const textCyan = colors.cyan
		const textMagenta = colors.magenta
		const textPurple = colors.purple
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
	}, [])

	if (!settings) return null

	return <Component {...pageProps} />
}

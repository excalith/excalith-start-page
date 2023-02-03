import React, { useEffect } from "react"
import Config from "@/startpage.config"
import "bootstrap/dist/css/bootstrap.css"
import "@/styles/globals.css"
import "@/styles/variables.css"
import "@/styles/window.css"
import "@/styles/search.css"
import "@/styles/section.css"
import "@/styles/link.css"
import "@/styles/help.css"
import "@/styles/nfetch.css"

export default function App({ Component, pageProps }) {
	useEffect(() => {
		// You can comment out this line and use the one below it for your own start page. Please do not remove the attribution to the original author.
		const info = `\u00A9 2022-${new Date().getFullYear()} Can Cellek\n\nStart Page designed by Can Cellek\nCheck out the source code at\nhttps://github.com/excalith/excalith-start-page`
		// const info = `${Config.username} Start Page\nForked from https://github.com/excalith/excalith-start-page\nModified by ${Config.username}`
		console.log(info)

		// Get variables from config
		const documentStyle = document.documentElement.style

		// Set Terminal
		const terminal = Config.terminal
		const glowColor = terminal.glowcolor
		const backgroundColor = terminal.backgroundcolor
		const windowColor = terminal.windowcolor
		documentStyle.setProperty("--color-glow", glowColor)
		documentStyle.setProperty("--background-color", backgroundColor)
		documentStyle.setProperty("--window-color", windowColor)

		// Set Prompt Selection Color
		const prompt = Config.prompt
		const selectionfg = prompt.selectionfg
		const selectionbg = prompt.selectionbg
		documentStyle.setProperty("--selection-fg", selectionfg)
		documentStyle.setProperty("--selection-bg", selectionbg)

		// Set Text Colors
		const colors = Config.colors
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

	return <Component {...pageProps} />
}

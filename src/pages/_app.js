import React, { useLayoutEffect } from "react"
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
	useLayoutEffect(() => {
		const colors = Config.colors
		const documentStyle = document.documentElement.style

		// Set Background Colors
		const glowColor = colors.glowcolor
		const backgroundColor = colors.backgroundcolor
		const windowColor = colors.windowcolor
		documentStyle.setProperty("--color-glow", glowColor)
		documentStyle.setProperty("--background-color", backgroundColor)
		documentStyle.setProperty("--window-color", windowColor)

		// Set Text Colors
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

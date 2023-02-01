import React, { useEffect } from "react"
import Config from "@/startpage.config"
import "bootstrap/dist/css/bootstrap.css"
import "@/styles/globals.css"
import "@/styles/variables.css"
import "@/styles/main.css"
import "@/styles/search.css"
import "@/styles/section.css"
import "@/styles/link.css"

export default function App({ Component, pageProps }) {
	useEffect(() => {
		const glowColor = Config.colors.glowcolor
		document.documentElement.style.setProperty("--color-glow", glowColor)

		const backgroundColor = Config.colors.backgroundcolor
		document.documentElement.style.setProperty(
			"--background-color",
			backgroundColor
		)

		const windowColor = Config.colors.windowcolor
		document.documentElement.style.setProperty(
			"--window-color",
			windowColor
		)
	}, [])

	return <Component {...pageProps} />
}

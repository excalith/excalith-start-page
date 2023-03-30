import React, { useEffect, useState } from "react"
import Image from "next/image"
import Meta from "@/components/Meta"
import Terminal from "@/components/Terminal"
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/600.css"
import { useSettings } from "@/context/settings"

export default function Home() {
	const { settings } = useSettings()
	const [isReady, setIsReady] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)

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
		documentStyle.setProperty(
			"--placeholder-color",
			"var(--" + settings.prompt.placeholderColor + ")"
		)

		// Set URL Color
		documentStyle.setProperty("--url-default", "var(--" + settings.urlLaunch.defaultColor + ")")
		documentStyle.setProperty("--url-hover", "var(--" + settings.urlLaunch.hoverColor + ")")

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
		documentStyle.setProperty("--violet", settings.theme.violet)

		// Check text glow
		if (settings.terminal.textGlow) {
			document.body.classList.add("text-glow")
		} else {
			document.body.classList.remove("text-glow")
		}

		setIsReady(true)
	}, [settings])

	const handleOnWallpaperLoad = () => {
		console.log("Wallpaper loaded")
		setIsLoaded(true)
	}

	return (
		<main className={"transition-all duration-200 ease-in-out"}>
			{isReady && (
				<>
					<Meta />
					<Image
						alt=""
						className={`transition-opacity ease-in-out duration-[${
							settings.wallpaper.transition
						}ms] w-screen h-screen -z-50 ${isLoaded ? "opacity-100" : "opacity-0"}`}
						src={"https://source.unsplash.com/1920x1080/?nature,fox"}
						fill
						objectFit="cover"
						onLoad={handleOnWallpaperLoad}
					/>
					<div className={`animate-fadeIn`}>
						<Terminal />
					</div>
				</>
			)}
		</main>
	)
}

import React, { useEffect, useState } from "react"
import Config from "@/startpage.config"
import Meta from "@/components/Meta"
import List from "@/components/List"
import Help from "@/components/Help"
import Nfetch from "@/components/NFetch"
import { subscribe, unsubscribe } from "@/utils/event"

export default function Home() {
	const [window, setWindow] = useState("showList")

	// You can comment out this line and use the one below it for your own start page. Please do not remove the attribution to the original author.
	const info = `\u00A9 2022-${new Date().getFullYear()} Can Cellek\n\nStart Page designed by Can Cellek\nCheck out the source code at\nhttps://github.com/excalith/excalith-start-page`
	// const info = `${Config.username} Start Page\nForked from https://github.com/excalith/excalith-start-page\nModified by ${Config.username}`
	console.log(info)

	useEffect(() => {
		subscribe("showList", () => setWindow("showList"))
		subscribe("showHelp", () => setWindow("showHelp"))
		subscribe("showNfetch", () => setWindow("showNfetch"))

		return () => {
			unsubscribe("showList", () => setWindow("showList"))
			unsubscribe("showHelp", () => setWindow("showList"))
			unsubscribe("showNfetch", () => setWindow("showNfetch"))
		}
	}, [])

	return (
		<>
			<Meta username={Config.username} />
			<div
				id="main"
				className={`position-absolute top-50 start-50 translate-middle ${
					Config.colors.glowcolor === "none" ? "shadow" : "glow"
				}`}>
				{window === "showList" && <List />}
				{window === "showHelp" && <Help />}
				{window === "showNfetch" && <Nfetch />}
			</div>
		</>
	)
}

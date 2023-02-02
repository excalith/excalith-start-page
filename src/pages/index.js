import React, { useEffect, useState } from "react"
import Config from "@/startpage.config"
import Meta from "@/components/Meta"
import List from "@/components/List"
import Help from "@/components/Help"
import Nfetch from "@/components/NFetch"
import { subscribe, unsubscribe } from "@/utils/event"

export default function Home() {
	const [window, setWindow] = useState("showList")

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
				className={`position-absolute top-50 start-50 translate-middle${
					Config.colors.golowcolor !== "" ? " glow" : " shadow"
				}`}>
				{window === "showList" && <List />}
				{window === "showHelp" && <Help />}
				{window === "showNfetch" && <Nfetch />}
			</div>
		</>
	)
}

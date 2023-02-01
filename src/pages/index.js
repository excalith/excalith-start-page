import React, { useEffect, useState, useCallback } from "react"
import Config from "@/startpage.config"
import Meta from "@/components/Meta"
import Search from "@/components/Search"
import Section from "@/components/Section"
import { isURL } from "@/utils/isURL"
import { openLink } from "@/utils/openLink"

export default function Home() {
	const [command, setCommand] = useState("")

	const handleCommandChange = (e) => {
		setCommand(e.target.value)
	}

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (command === "") return

			const { key } = event
			if (key !== "Enter") return
			if (isURL(command)) {
				openLink("https://" + command, "_blank")
			} else {
				{
					Config.sections.map((section, index) => {
						{
							section.links.map((link, index) => {
								{
									if (
										link.name
											.toLowerCase()
											.includes(command)
									) {
										openLink(link.url, link.target)
									}
								}
							})
						}
					})
				}
			}
		}

		document.addEventListener("keydown", handleKeyDown)
		return () => {
			document.removeEventListener("keydown", handleKeyDown)
		}
	})

	return (
		<>
			<Meta username={Config.username} />

			<div
				id="main"
				className="position-absolute top-50 start-50 translate-middle">
				<div id="sections" className="container-fluid .col-3">
					<div className="row">
						{Config.sections.map((section, index) => {
							{
								return (
									<Section
										key={index}
										section={section}
										filter={command}
									/>
								)
							}
						})}
					</div>
				</div>

				<Search
					username={Config.username}
					prompt={Config.prompt}
					commandChange={handleCommandChange}
				/>
			</div>
		</>
	)
}

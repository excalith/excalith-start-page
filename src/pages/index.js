import React, { useEffect, useState } from "react"
import Config from "@/startpage.config"
import Meta from "@/components/Meta"
import Search from "@/components/Search"
import Section from "@/components/Section"

export default function Home() {
	const [command, setCommand] = useState("")
	const handleCommand = (e) => {
		setCommand(e.target.value)
	}

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
									<>
										<Section
											key={index}
											section={section}
											command={command}
										/>
									</>
								)
							}
						})}
					</div>
				</div>

				<Search
					username={Config.username}
					prompt={Config.prompt}
					handleCommand={handleCommand}
				/>
			</div>
		</>
	)
}

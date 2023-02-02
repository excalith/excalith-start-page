import React, { useState } from "react"
import Config from "@/startpage.config"
import Search from "@/components/Search"
import Section from "@/components/Section"

const List = () => {
	const [command, setCommand] = useState("")

	const handleCommandChange = (e) => {
		setCommand(e.target.value)
	}

	return (
		<div id="list">
			<div id="sections" className="container-fluid .col-3">
				<div className="row">
					{Config.sections.map((section, index) => {
						return (
							<Section
								key={index}
								section={section}
								filter={command}
							/>
						)
					})}
				</div>
			</div>

			<Search
				username={Config.username}
				prompt={Config.prompt}
				commandChange={handleCommandChange}
			/>
		</div>
	)
}

export default List

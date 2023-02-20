import React, { useState } from "react"
import Settings from "@/utils/settings"
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
					{Settings.sections.map((section, index) => {
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
				username={Settings.username}
				prompt={Settings.prompt}
				commandChange={handleCommandChange}
			/>
		</div>
	)
}

export default List

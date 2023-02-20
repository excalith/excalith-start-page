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
			<div className="grid grid-cols-3 gap-4 p-2.5 mb-4">
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
			<Search
				prompt={Settings.prompt}
				commandChange={handleCommandChange}
			/>
		</div>
	)
}

export default List

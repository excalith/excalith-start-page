import React, { useState } from "react"
import Search from "@/components/Search"
import Section from "@/components/Section"
import { useSettings } from "@/context/settings"

const List = () => {
	const [command, setCommand] = useState("")
	const { settings } = useSettings()

	const handleCommandChange = (e) => {
		setCommand(e.target.value)
	}

	return (
		<div id="list">
			<div className="grid grid-cols-3 gap-4 px-3 py-2 mb-5">
				{settings.sections.map((section, index) => {
					return <Section key={index} section={section} filter={command} />
				})}
			</div>
			<Search prompt={settings.prompt} commandChange={handleCommandChange} />
		</div>
	)
}

export default List

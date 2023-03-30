import React, { useEffect, useState } from "react"
import Search from "@/components/Search"
import Link from "@/components/Link"
import { useSettings } from "@/context/settings"
import { clamp } from "@/utils/math"

const Section = ({ section, settings, filter }) => {
	const [gridSize, setGridSize] = useState(3)
	const [alignment, setAlignment] = useState("left")

	useEffect(() => {
		setAlignment(section.align || "left")
		const columns = clamp(settings.columns, 1, 4)
		setGridSize(`${columns}`)
	}, [section.align, settings.columns])

	return (
		<div className={`basis-${gridSize} mb-4 align-${alignment}`}>
			<h2 className={`text-title font-bold mt-0 mb-2 cursor-default text-${section.color}`}>
				{section.title}
			</h2>

			{section.links.map((link, index) => {
				{
					return (
						<Link className="font-normal" key={index} linkData={link} filter={filter} />
					)
				}
			})}
		</div>
	)
}

const List = () => {
	const [command, setCommand] = useState("")
	const { settings } = useSettings()
	const sections = settings.sections

	const handleCommandChange = (e) => {
		setCommand(e.target.value)
	}

	return (
		<div id="list">
			<div className={`flex flex-wrap items-center justify-center px-3 py-2 mb-5`}>
				{sections.list.map((section, index) => {
					return (
						<Section
							key={index}
							section={section}
							settings={sections.settings}
							filter={command}
						/>
					)
				})}
			</div>
			<Search prompt={settings.prompt} commandChange={handleCommandChange} />
		</div>
	)
}

export default List

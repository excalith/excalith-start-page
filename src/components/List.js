import React, { use, useEffect, useState } from "react"
import Link from "@/components/Link"
import Search from "@/components/Search"
import { useSettings } from "@/context/settings"

const Section = ({ section, filter, selection }) => {
	const alignment = section.align || "left"
	return (
		<div className={`mb-4 align-${alignment}`}>
			<h2 className={`text-title font-bold mt-0 mb-3 cursor-default text-${section.color}`}>
				{section.title}
			</h2>

			<ul>
				{section.links.map((link, index) => {
					{
						return (
							<Link
								className="font-normal"
								key={index}
								linkData={link}
								filter={filter}
								selection={selection}
							/>
						)
					}
				})}
			</ul>
		</div>
	)
}

const List = () => {
	const { settings } = useSettings()
	const [command, setCommand] = useState("")
	const [selection, setSelection] = useState("")

	const handleCommandChange = (str) => {
		setCommand(str)
	}

	const handleSelectionChange = (sel) => {
		setSelection(sel)
	}

	return (
		<div id="list">
			<div className="grid grid-cols-3 gap-4 px-3 py-2 mb-5">
				{settings.sections.list.map((section, index) => {
					return (
						<Section
							key={index}
							section={section}
							filter={command}
							selection={selection}
						/>
					)
				})}
			</div>
			<Search commandChange={handleCommandChange} selectionChange={handleSelectionChange} />
		</div>
	)
}

export default List

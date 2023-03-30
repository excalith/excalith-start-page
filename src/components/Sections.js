import React, { useState } from "react"
import Link from "@/components/Link"
import Search from "@/components/Search"
import { useSettings } from "@/context/settings"

const Section = ({ section, filter }) => {
	const alignment = section.align || "left"
	return (
		<div className={`mb-4 align-${alignment}`}>
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

const Sections = () => {
	const [command, setCommand] = useState("")
	const { settings } = useSettings()

	const handleCommandChange = (e) => {
		setCommand(e.target.value)
	}

	return (
		<div id="list">
			<div className="grid grid-cols-3 gap-4 px-3 py-2 mb-5">
				{settings.sections.list.map((section, index) => {
					return <Section key={index} section={section} filter={command} />
				})}
			</div>
			<Search prompt={settings.prompt} commandChange={handleCommandChange} />
		</div>
	)
}

export default Sections

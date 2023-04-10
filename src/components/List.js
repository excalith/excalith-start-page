import React, { use, useEffect, useState } from "react"
import Link from "@/components/Link"
import Search from "@/components/Search"
import { useSettings } from "@/context/settings"
import { openLink } from "@/utils/openLink"

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
	const { settings, items } = useSettings()
	const [command, setCommand] = useState("")
	const [filteredItems, setFilteredItems] = useState([])
	const [selection, setSelection] = useState("")

	useEffect(() => {
		if (filteredItems.length <= 1) {
			setSelection("")
		}

		const handleKeyDown = (event) => {
			if (command === "") return

			// Submit
			if (event.key === "Enter") {
				openFilteredLinks()
			}
			// Previous Selection
			else if (event.shiftKey && event.key === "Tab") {
				let idx = -1
				if (selection && selection !== "")
					idx = filteredItems.indexOf(selection.toLowerCase())
				idx = (idx + filteredItems.length - 1) % filteredItems.length
				setSelection(filteredItems[idx])
			}
			// Next Selection
			else if (event.key === "Tab") {
				let idx = -1
				if (selection && selection !== "")
					idx = filteredItems.indexOf(selection.toLowerCase())
				idx = (idx + 1) % filteredItems.length
				setSelection(filteredItems[idx])
			}
		}

		document.addEventListener("keydown", handleKeyDown)
		return () => {
			document.removeEventListener("keydown", handleKeyDown)
		}
	}, [filteredItems, selection])

	useEffect(() => {
		setFilteredItems([])
		if (command === "") {
			setSelection("")
			return
		}

		const lowerCommand = command.toLowerCase()
		const filtered = items.filter((item) => item.startsWith(lowerCommand))
		setFilteredItems(filtered)
	}, [items, command])

	const openFilteredLinks = () => {
		console.log("selection: " + selection)
		console.log(filteredItems)

		if (selection !== "") {
			settings.sections.list.map((section) => {
				{
					section.links.map((link) => {
						{
							if (link.name.toLowerCase() === selection) {
								openLink(link.url)
								return
							}
						}
					})
				}
			})
		} else {
			let filteredUrls = []
			settings.sections.list.map((section) => {
				{
					section.links.map((link) => {
						{
							if (link.name.toLowerCase().includes(command)) {
								filteredUrls.push(link.url)
							}
						}
					})
				}
			})

			let filterCount = filteredUrls.length
			if (filterCount === 0) {
				const defaultSerachEngine = settings.search.default
				const target = settings.search.target
				openLink(defaultSerachEngine + command, target)
			} else {
				filteredUrls.map((url, index) => {
					openLink(url, index === filterCount - 1 ? "_self" : "_blank")
				})
			}
		}
	}

	const handleCommandChange = (str) => {
		setCommand(str)
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
			<Search prompt={settings.prompt} commandChange={handleCommandChange} />
		</div>
	)
}

export default List

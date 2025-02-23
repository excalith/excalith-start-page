import React, { useEffect, useState } from "react"
import { useSettings } from "@/context/settings"
import { Icon } from "@iconify/react"

const Link = ({ linkData, filter, selection }) => {
	const { settings } = useSettings()
	const [isHidden, setHidden] = useState(false)
	const [isSelected, setSelected] = useState(false)

	const name = linkData.name
	const lower_name = linkData.name.toLowerCase()
	const url = linkData.url
	const icon = linkData.icon
	const target = settings.urlLaunch.target

	useEffect(() => {
		const lower_command = filter.toLowerCase()

		if (lower_command) {
			const isFiltered = lower_name.startsWith(lower_command)
			setHidden(!isFiltered)
		} else {
			setHidden(false)
		}
	}, [filter, lower_name, target, url]),
		[filter]

	useEffect(() => {
		setSelected(lower_name === selection)
		// eslint-disable-next-line
	}, [selection])

	return (
		<li className="-my-2 -ml-3">
			<a
				className={`ml-2 leading-2 my-1 ${isHidden && "opacity-20"} ${
					isSelected ? "selected" : ""
				} inline-block px-1 rounded-selection`}
				href={url}
				rel="noopener noreferrer nofollow"
				target={target}>
				<span className="inline-block w-4 h-4 align-middle">
					<Icon icon={icon} />
				</span>
				<span className="inline-block pl-2 font-light leading-8 align-middle">{name}</span>
			</a>
		</li>
	)
}

export default Link

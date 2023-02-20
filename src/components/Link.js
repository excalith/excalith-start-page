import React, { useEffect, useState } from "react"
import { Icon } from "@iconify/react"

const Link = ({ linkData, filter }) => {
	const [isHidden, setHidden] = useState(false)

	const name = linkData.name
	const lower_name = linkData.name.toLowerCase()
	const url = linkData.url
	const icon = linkData.icon
	const target = linkData.target

	useEffect(() => {
		const lower_command = filter.toLowerCase()

		if (lower_command) {
			const isSelected = lower_name.includes(lower_command)
			setHidden(!isSelected)
		} else {
			setHidden(false)
		}
	}, [filter, lower_name, target, url]),
		[filter]

	return (
		<a
			className={`link ${isHidden ? "hidden" : ""}`}
			href={url}
			rel="noopener noreferrer nofollow"
			target={target}>
			<span className="link-icon">
				<Icon icon={icon} />
			</span>
			<span className="link-name">{name}</span>
		</a>
	)
}

export default Link

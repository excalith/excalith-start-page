import React, { useRef, useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import { openLink } from "@/utils/openLink"

const Link = ({ linkData, command }) => {
	const [isHidden, setHidden] = useState(false)

	const name = linkData.name
	const url = linkData.url
	const icon = linkData.icon
	const target = linkData.target

	useEffect(() => {
		const lower_command = command.toLowerCase()
		const lower_name = linkData.name.toLowerCase()

		if (lower_command) {
			setHidden(!lower_name.includes(lower_command))
		} else {
			setHidden(false)
		}
	}, [command, linkData.name]),
		[command]

	useEffect(() => {
		const handleKeyDown = (event) => {
			const { key } = event
			if (command !== "" && key === "Enter" && !isHidden) {
				openLink(url, target)
			}
		}

		document.addEventListener("keydown", handleKeyDown)

		return () => {
			document.removeEventListener("keydown", handleKeyDown)
		}
	})

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

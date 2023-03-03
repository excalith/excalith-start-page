import React, { useEffect, useState } from "react"
import { browserName } from "react-device-detect"
import { useSettings } from "@/context/settings"

const Search = ({ command }) => {
	const [browser, setBrowser] = useState("unknown")
	const { settings } = useSettings()
	const lower_username = settings.username.toLowerCase()

	useEffect(() => {
		setBrowser(browserName.toLowerCase())
	}, [])

	return (
		<span>
			<span className={`text-${settings.prompt.userColor}`}>
				{lower_username}
			</span>
			<span className={`text-${settings.prompt.atColor}`}>@</span>
			<span className={`text-${settings.prompt.hostColor}`}>
				{browser}
			</span>
			<span className={`text-${settings.prompt.promptColor}`}>
				{" "}
				{settings.prompt.promptSymbol}{" "}
			</span>
			{command && <span className="text-white">{command}</span>}
		</span>
	)
}

export default Search

import React, { useEffect, useState } from "react"
import { browserName } from "react-device-detect"
import Settings from "@/utils/settings"

const Search = ({ command }) => {
	const [browser, setBrowser] = useState("unknown")
	const lower_username = Settings.username.toLowerCase()

	useEffect(() => {
		setBrowser(browserName.toLowerCase())
	}, [])

	return (
		<span>
			<span className={`text-${Settings.prompt.userColor}`}>
				{lower_username}
			</span>
			<span className={`text-${Settings.prompt.atColor}`}>@</span>
			<span className={`text-${Settings.prompt.hostColor}`}>
				{browser}
			</span>
			<span className={`text-${Settings.prompt.promptColor}`}>
				{" "}
				{Settings.prompt.promptSymbol}{" "}
			</span>
			{command && <span className="text-white">{command}</span>}
		</span>
	)
}

export default Search

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
			<span className={Settings.prompt.usercolor}>{lower_username}</span>
			<span className={Settings.prompt.atcolor}>@</span>
			<span className={Settings.prompt.hostcolor}>{browser}</span>
			<span className={Settings.prompt.promptcolor}>
				{" "}
				{Settings.prompt.promptsymbol}{" "}
			</span>
			{command && <span className="white">{command}</span>}
		</span>
	)
}

export default Search

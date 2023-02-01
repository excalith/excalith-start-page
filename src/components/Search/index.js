import React, { useRef, useEffect, useState } from "react"
import { getBrowser } from "@/utils/getBrowser"

const Search = ({ username, prompt, commandChange }) => {
	const inputElement = useRef(null)
	const [browser, setBrowser] = useState("unknown")
	const lower_username = username.toLowerCase()

	useEffect(() => {
		if (inputElement.current) {
			inputElement.current.focus()
		}

		setBrowser(getBrowser())
	}, [])

	return (
		<div id="search" className="d-flex">
			<span>
				<span className={prompt.usercolor}>{lower_username}</span>
				<span className={prompt.atcolor}>@</span>
				<span className={prompt.hostcolor}>{browser}</span>
				<span className={prompt.promptcolor}> {prompt.prompt} </span>
			</span>
			<input
				className="flex-grow-1"
				type="text"
				onChange={commandChange}
				placeholder="command..."
				autoFocus
				ref={inputElement}
			/>
		</div>
	)
}

export default Search

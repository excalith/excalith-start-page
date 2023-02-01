import React, { useRef, useEffect, useState } from "react"
import { getBrowser } from "@/utils/getBrowser"

const Search = ({ username, prompt, handleCommand }) => {
	const inputElement = useRef(null)
	const [browser, setBrowser] = useState("unknown")

	useEffect(() => {
		if (inputElement.current) {
			inputElement.current.focus()
		}

		setBrowser(getBrowser())
	}, [])

	return (
		<div id="search" className="d-flex">
			<span>
				<span className={prompt.usercolor}>{username}</span>
				<span className={prompt.atcolor}>@</span>
				<span className={prompt.hostcolor}>{browser}</span>
				<span className={prompt.promptcolor}> {prompt.prompt} </span>
			</span>
			<input
				className="flex-grow-1"
				type="text"
				onChange={handleCommand}
				placeholder="command..."
				autoFocus
				ref={inputElement}
			/>
		</div>
	)
}

export default Search

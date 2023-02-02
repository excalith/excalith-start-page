import React, { useRef, useEffect, useState } from "react"
import { getBrowser } from "@/utils/getBrowser"
import Config from "@/startpage.config"

const Search = ({ username, prompt, commandChange }) => {
	const [focus, setFocus] = useState(false)
	const [browser, setBrowser] = useState("unknown")
	const inputElement = useRef(null)
	const lower_username = username.toLowerCase()

	useEffect(() => {
		setTimeout(() => inputElement.current.focus(), 0)
	}, [focus])

	useEffect(() => {
		setBrowser(getBrowser())
	}, [browser])

	useEffect(() => {
		if (Config.prompt.ctrlc) {
			const handleKeyDown = (event) => {
				if ((event.metaKey || event.ctrlKey) && event.code === "KeyC") {
					inputElement.current.value = ""
					commandChange({ target: { value: "" } })
				}
			}

			document.addEventListener("keydown", handleKeyDown)
			return () => {
				document.removeEventListener("keydown", handleKeyDown)
			}
		}
	})

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
				onFocus={() => {
					setFocus(true)
				}}
				onBlur={() => {
					setFocus(false)
				}}
				ref={inputElement}
			/>
		</div>
	)
}

export default Search

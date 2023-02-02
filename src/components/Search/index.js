import React, { useRef, useEffect, useState } from "react"
import { getBrowser } from "@/utils/getBrowser"
import { RunCommand } from "@/utils/command"
import Config from "@/startpage.config"

const Search = ({ username, prompt, commandChange }) => {
	const [focus, setFocus] = useState(false)
	const [browser, setBrowser] = useState("unknown")
	const input = useRef(null)
	const lower_username = username.toLowerCase()

	useEffect(() => {
		setTimeout(() => input.current.focus(), 0)
	}, [focus])

	useEffect(() => {
		setBrowser(getBrowser())
	}, [browser])

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Enter") {
				RunCommand(input.current.value)
			} else if (Config.prompt.ctrlc) {
				if ((event.metaKey || event.ctrlKey) && event.code === "KeyC") {
					input.current.value = ""
					commandChange({ target: { value: "" } })
				}
			}
		}

		document.addEventListener("keydown", handleKeyDown)
		return () => {
			document.removeEventListener("keydown", handleKeyDown)
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
				ref={input}
			/>
		</div>
	)
}

export default Search

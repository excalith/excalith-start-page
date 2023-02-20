import React, { useRef, useEffect, useState } from "react"
import { RunCommand } from "@/utils/command"
import Prompt from "@/components/Prompt"
import Settings from "@/utils/settings"

const Search = ({ prompt, commandChange }) => {
	const [focus, setFocus] = useState(false)
	const input = useRef(null)

	useEffect(() => {
		setTimeout(() => input.current.focus(), 0)
	}, [focus])

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Enter") {
				RunCommand(input.current.value)
			} else if (Settings.prompt.ctrlc) {
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
			<Prompt />
			<input
				className={`flex-grow-1 ${prompt.caretcolor}-caret`}
				type="text"
				onChange={commandChange}
				placeholder={Settings.prompt.placeholder}
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

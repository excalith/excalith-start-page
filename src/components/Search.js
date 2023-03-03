import React, { useRef, useEffect, useState } from "react"
import { RunCommand } from "@/utils/command"
import Prompt from "@/components/Prompt"
import { useSettings } from "@/context/settings"

const Search = ({ prompt, commandChange }) => {
	const [focus, setFocus] = useState(false)
	const { settings } = useSettings()
	const input = useRef(null)

	useEffect(() => {
		setTimeout(() => input.current.focus(), 0)
	}, [focus])

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Enter") {
				RunCommand(input.current.value)
			} else if (settings.prompt.ctrlC) {
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
		<div id="search" className="flex">
			<Prompt />
			<input
				className={`grow inline-block bg-transparent text-white outline-none appearance-none shadow-none ml-2.5 caret-${prompt.caretcolor}`}
				type="text"
				onChange={commandChange}
				placeholder={settings.prompt.placeholder}
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

import React, { useRef, useEffect, useState } from "react"
import { RunCommand } from "@/utils/command"
import Prompt from "@/components/Prompt"
import { useSettings } from "@/context/settings"

const Search = ({ prompt, commandChange }) => {
	const [focus, setFocus] = useState(false)
	const { settings, filters } = useSettings()
	const [suggestion, setSuggestion] = useState()
	const input = useRef(null)
	const suggestionInput = useRef(null)

	useEffect(() => {
		setTimeout(() => input.current.focus(), 0)
	}, [focus])

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Enter") {
				RunCommand(input.current.value, settings)
			} else if (settings.prompt.ctrlC) {
				if ((event.metaKey || event.ctrlKey) && event.code === "KeyC") {
					input.current.value = ""
					commandChange("")
				}
			}
		}

		document.addEventListener("keydown", handleKeyDown)
		return () => {
			document.removeEventListener("keydown", handleKeyDown)
		}
	}, [])

	const handleInputChange = (e) => {
		const str = e.target.value
		commandChange(str)

		if (str === "") {
			setSuggestion("")
			return
		}

		const test = ["portfolio", "keybase", "gpt", "oci"]
		const result = filters.find((item) => item.startsWith(str))
		setSuggestion(result)
	}

	const handleAutocomplete = (e) => {
		if (e.key === "Tab") {
			e.preventDefault()
			if (suggestion.length !== 0) {
				input.current.value = suggestion
				setSuggestion("")
				commandChange(input.current.value)
			}
		}
	}

	return (
		<div id="search" className="flex">
			<Prompt />
			<div id="search-container">
				<input
					className={`z-10 absolute grow inline-block bg-transparent text-white outline-none appearance-none shadow-none ml-2.5 caret-${prompt.caretColor}`}
					type="text"
					onChange={handleInputChange}
					placeholder={settings.prompt.placeholder}
					autoFocus
					onFocus={() => {
						setFocus(true)
					}}
					onBlur={() => {
						setFocus(false)
					}}
					onKeyDown={handleAutocomplete}
					ref={input}
				/>
				<input
					className={`-z-10 opacity-50 absolute grow inline-block bg-transparent text-white outline-none appearance-none shadow-none ml-2.5 caret-${prompt.caretColor}`}
					type="text"
					placeholder={suggestion}
					disabled
					ref={suggestionInput}
				/>
			</div>
		</div>
	)
}

export default Search

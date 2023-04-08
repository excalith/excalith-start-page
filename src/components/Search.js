import React, { useRef, useEffect, useState } from "react"
import { RunCommand } from "@/utils/command"
import Prompt from "@/components/Prompt"
import { useSettings } from "@/context/settings"

const Search = ({ prompt, commandChange }) => {
	const [focus, setFocus] = useState(false)
	const [suggestion, setSuggestion] = useState()
	const { settings, filters } = useSettings()
	const suggestionInput = useRef(null)
	const input = useRef(null)

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
					setSuggestion("")
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
			<div id="search-container" className="flex grow ml-2.5">
				<input
					className={`z-10 w-full bg-transparent text-white outline-none appearance-none shadow-none caret-${prompt.caretColor}`}
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
					className={`-z-10 opacity-50 w-full -ml-full bg-transparent text-white outline-none appearance-none shadow-none caret-${prompt.caretColor}`}
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

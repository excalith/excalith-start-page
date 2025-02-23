import React, { useRef, useEffect, useState } from "react"
import { RunCommand, DefaultSearch } from "@/utils/command"
import Prompt from "@/components/Prompt"
import { useSettings } from "@/context/settings"

const Search = ({ commandChange, selectionChange }) => {
	const inputRef = useRef(null)
	const suggestionRef = useRef(null)

	const { settings, items } = useSettings()
	const [inputFocus, setInputFocus] = useState(false)

	const [command, setCommand] = useState("")
	const [filteredItems, setFilteredItems] = useState([])
	const [selection, setSelection] = useState("")
	const [suggestion, setSuggestion] = useState("")

	// Focus on input
	useEffect(() => {
		setTimeout(() => inputRef.current.focus(), 0)
	}, [inputFocus])

	// Key Down
	useEffect(() => {
		const handleKeyDown = (e) => {
			const isCtrlPressed = e.metaKey || e.ctrlKey
			// Submit prompt
			if (e.key === "Enter") {
				const search_function = isCtrlPressed ? DefaultSearch : RunCommand
				search_function(command, settings)
			}
			// Clear prompt
			else if (isCtrlPressed && e.code === "KeyC") {
				if (settings.prompt.ctrlC) {
					inputRef.current.value = ""
					selectionChange("")
					commandChange("")
					setSuggestion("")
				}
			}
			// Auto Complete
			else if (e.key === "ArrowRight") {
				if (suggestion !== "") {
					e.preventDefault()
					inputRef.current.value = suggestion
					setCommand(suggestion)
					commandChange(suggestion)
					selectionChange("")
					setSuggestion("")
				}
			}
			// Previous Selection
			else if (e.shiftKey && e.key === "Tab") {
				e.preventDefault()

				if (command === "") return
				if (filteredItems.length === 0) return

				let idx = -1
				if (selection && selection !== "")
					idx = filteredItems.indexOf(selection.toLowerCase())

				idx = (idx + filteredItems.length - 1) % filteredItems.length
				const selectedItem = filteredItems[idx]
				setSelection(selectedItem)
				setSuggestion(selectedItem)
				selectionChange(selectedItem)
			}
			// Next Selection
			else if (e.key === "Tab") {
				e.preventDefault()

				if (command === "") return
				if (filteredItems.length === 0) return

				let idx = -1
				if (selection && selection !== "")
					idx = filteredItems.indexOf(selection.toLowerCase())

				idx = (idx + 1) % filteredItems.length
				const selectedItem = filteredItems[idx]
				setSelection(selectedItem)
				setSuggestion(selectedItem)
				selectionChange(selectedItem)
			}
		}

		document.addEventListener("keydown", handleKeyDown)
		return () => {
			document.removeEventListener("keydown", handleKeyDown)
		}
		// eslint-disable-next-line
	}, [command, suggestion, selection, filteredItems, settings])

	// Filter possible items
	useEffect(() => {
		commandChange(command)

		// Set possible filtered items
		setFilteredItems([])
		if (command === "") {
			selectionChange("")
		} else {
			const filtered = items.filter((item) => item.startsWith(command))
			setFilteredItems(filtered)
		}
		// eslint-disable-next-line
	}, [command, items])

	// Set suggestions
	useEffect(() => {
		if (filteredItems.length <= 1) selectionChange("")

		// Set suggestion
		if (filteredItems.length === 0) {
			setSuggestion("")
		} else {
			setSuggestion(filteredItems[0])
		}
		// eslint-disable-next-line
	}, [filteredItems])

	return (
		<div id="search" className="flex">
			<Prompt />
			<div id="search-container" className="flex grow ml-2.5">
				<input
					className={`z-10 w-full bg-transparent text-textColor outline-none appearance-none shadow-none caret-${settings.prompt.caretColor}`}
					type="text"
					placeholder={settings.prompt.placeholder}
					ref={inputRef}
					autoFocus
					onChange={(e) => {
						setCommand(e.target.value.toLowerCase())
					}}
					onFocus={() => {
						setInputFocus(true)
					}}
					onBlur={() => {
						setInputFocus(false)
					}}
				/>
				<input
					className={`-z-10 opacity-50 w-full -ml-full bg-transparent text-textColor outline-none appearance-none shadow-none caret-${settings.prompt.caretColor}`}
					type="text"
					disabled
					placeholder={suggestion}
					ref={suggestionRef}
				/>
			</div>
		</div>
	)
}

export default Search

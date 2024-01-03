import React, { useEffect, useState, useRef } from "react"
import AceEditor from "react-ace"
import "ace-builds/src-noconflict/mode-json"
import "one-theme-ace/one-dark"
import { useSettings } from "@/context/settings"

const Editor = () => {
	const editor = useRef(null)
	const [hasError, setError] = useState(false)
	const { settings, setSettings } = useSettings()

	useEffect(() => {
		editor.current.editor.session.foldAll(
			1,
			editor.current.editor.session.doc.getAllLines().length
		)
	}, [])

	function onChange(changes) {
		try {
			JSON.parse(changes)
			setError(false)
		} catch (e) {
			setError(true)
		}
	}

	const handleSave = () => {
		const val = editor.current.editor.getValue()
		try {
			const data = JSON.parse(val)
			setSettings(data)
			setError(false)
		} catch (e) {
			setError(true)
		}
	}

	return (
		<>
			<div className="relative w-full mt-2">
				<AceEditor
					defaultValue={JSON.stringify(settings, null, "\t")}
					mode="json"
					onChange={onChange}
					name="json-editor"
					theme="one_dark"
					showPrintMargin={false}
					style={{
						width: "100%"
					}}
					setOptions={{
						showLineNumbers: true,
						tabSize: 2,
						useWorker: false,
						highlightActiveLine: false,
						highlightSelectedWord: false,
						highlightGutterLine: false
					}}
					ref={editor}
				/>
			</div>
			<div className="absolute z-50 align-middle bottom-3 right-3">
				<div className="flex flex-row">
					{hasError ? (
						<p className="py-2 mr-1 text-red">Invalid JSON</p>
					) : (
						<button
							className="p-2 border text-blue border-blue hover:text-textColor"
							onClick={handleSave}>
							Save
						</button>
					)}
				</div>
			</div>
		</>
	)
}

export default Editor

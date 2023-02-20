import React, { useEffect, useState } from "react"
import { isURL } from "@/utils/isURL"

const Config = ({ commands }) => {
	const [debugText, setDebugText] = useState("")

	useEffect(() => {
		console.log(commands)
		if (
			commands[1] === "import" &&
			commands.length === 3 &&
			isURL(commands[2])
		) {
			importConfig(commands[2])
		} else if (commands[1] === "reset") {
			resetConfig()
		} else {
			invalidConfig()
		}
	}, [commands])

	const importConfig = (url) => {
		setDebugText("import url: " + commands[2])
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem("settings", JSON.stringify(data))
			})
	}

	const resetConfig = () => {
		setDebugText("reset config")
		localStorage.removeItem("settings")
	}

	const invalidConfig = () => {
		setDebugText("invalid config command")
	}

	return (
		<div id="help" className="container-fluid">
			<div className="row">
				<h1>{debugText}</h1>
			</div>
		</div>
	)
}

export default Config

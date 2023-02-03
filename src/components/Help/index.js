import React, { useEffect } from "react"
import Config from "@/startpage.config"
import { publish } from "@/utils/event"

const Help = () => {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (
				event.key === "q" ||
				event.key === "Escape" ||
				event.key === "Enter" ||
				((event.altkey || event.ctrlKey) && event.code === "KeyD")
			) {
				publish("showList")
			}
		}

		document.addEventListener("keydown", handleKeyDown)
		return () => {
			document.removeEventListener("keydown", handleKeyDown)
		}
	})

	const closeWindow = () => {
		publish("showList")
	}

	return (
		<>
			<div id="help" className="container-fluid" onClick={closeWindow}>
				<div className="row">
					<h1>Help</h1>
					<p>Usage:</p>
					<ul>
						<li>Filter links by typing in the prompt</li>
						<li>
							Unfiltered prompt will search using default search
							engine
						</li>
						<li>Launch URL's directly from prompt</li>
						<li>Use CTRL+C to clear prompt</li>
						<li>
							Use custom commands to search using different
							services
						</li>
					</ul>
					<h1>Built-in Commands</h1>
					<ul>
						<li>
							<span>help:</span> Display this help
						</li>
						<li>
							<span>nfetch:</span> Display information
						</li>
					</ul>
					<h1>Custom Commands</h1>
					<ul>
						{Config.commands.map((cmd, index) => {
							return (
								<li key={index}>
									<span>{cmd.alias}:</span> {cmd.name}
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</>
	)
}

export default Help

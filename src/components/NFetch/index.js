import React, { useEffect } from "react"
import Config from "@/startpage.config"
import { publish } from "@/utils/event"

const Nfetch = () => {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (
				event.key === "q" ||
				event.key === "Escape" ||
				event.key === "Esc" ||
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
			<div id="nfetch" className="container-fluid" onClick={closeWindow}>
				<div className="row">
					<h1>Colors</h1>
					<div id="colorbox">
						<div className="black-bg"></div>
						<div className="red-bg"></div>
						<div className="green-bg"></div>
						<div className="yellow-bg"></div>
						<div className="purple-bg"></div>
						<div className="gray-bg"></div>

						<div className="blue-bg"></div>
						<div className="cyan-bg"></div>
						<div className="magenta-bg"></div>
						<div className="white-bg"></div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Nfetch

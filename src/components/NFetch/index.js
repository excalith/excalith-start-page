import React, { useEffect, useState } from "react"
import {
	osName,
	browserName,
	engineName,
	engineVersion,
	browserVersion
} from "react-device-detect"
import moment from "moment"
import Config from "@/startpage.config"
import { publish } from "@/utils/event"

const Nfetch = () => {
	const lower_username = Config.username.toLowerCase()
	const prompt = Config.prompt
	const [info, setInfo] = useState({})

	useEffect(() => {
		console.log(Config.nfetch.timeformat)
		setInfo({
			time: moment().format(Config.nfetch.timeformat),
			date: moment().format(Config.nfetch.dateformat),
			osName: osName.toLowerCase(),
			browser: browserName.toLowerCase(),
			browserVersion: browserVersion.toLowerCase(),
			engineName: engineName.toLowerCase(),
			engineVersion: engineVersion.toLowerCase()
		})
	}, [])

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
		<div id="nfetch" className="container" onClick={closeWindow}>
			<div className="row">
				<div className="col">
					<img
						id="icon"
						className="mx-auto"
						src="icon.svg"
						alt="NFetch Icon"
					/>
				</div>
				<div className="col">
					<div className="container-fluid" onClick={closeWindow}>
						<div className="row">
							{/* User*/}
							<span>
								<span className={prompt.usercolor}>
									{lower_username}
								</span>
								<span className={prompt.atcolor}>@</span>
								<span className={prompt.hostcolor}>
									{info.browser}
								</span>
								<span className={prompt.promptcolor}>
									{" "}
									{prompt.prompt}{" "}
								</span>
							</span>
							<hr />
							<ul>
								<li>
									<span className={Config.nfetch.titlecolor}>
										time:
									</span>{" "}
									{info.time}
								</li>
								<li>
									<span className={Config.nfetch.titlecolor}>
										date:
									</span>{" "}
									{info.date}
								</li>
							</ul>
							<ul>
								<li>
									<span className={Config.nfetch.titlecolor}>
										os:
									</span>{" "}
									{info.osName}
								</li>
								<li>
									<span className={Config.nfetch.titlecolor}>
										browser:
									</span>{" "}
									{info.browser}
								</li>
								<li>
									<span className={Config.nfetch.titlecolor}>
										version:
									</span>{" "}
									{info.browserVersion}
								</li>
								<li>
									<span className={Config.nfetch.titlecolor}>
										engine:
									</span>{" "}
									{info.engineName}
								</li>
							</ul>
							{/* Colors */}

							<div id="colorbox">
								{/* Top Row */}
								<div className="black-bg"></div>
								<div className="red-bg"></div>
								<div className="green-bg"></div>
								<div className="yellow-bg"></div>
								<div className="purple-bg"></div>
								{/* Bottom Row */}
								<div className="gray-bg"></div>
								<div className="blue-bg"></div>
								<div className="cyan-bg"></div>
								<div className="magenta-bg"></div>
								<div className="white-bg"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Nfetch

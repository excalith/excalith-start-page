import React, { useEffect, useState } from "react"
import {
	osName,
	browserName,
	engineName,
	engineVersion,
	browserVersion
} from "react-device-detect"
import moment from "moment"
import Settings from "@/utils/settings"

const Nfetch = ({ closeCallback }) => {
	const lower_username = Settings.username.toLowerCase()
	const prompt = Settings.prompt
	const [info, setInfo] = useState({})

	useEffect(() => {
		setInfo({
			time: moment().format(Settings.nfetch.timeformat),
			date: moment().format(Settings.nfetch.dateformat),
			osName: osName,
			browser: browserName,
			browserLower: browserName.toLowerCase(),
			browserVersion: browserVersion,
			engineName: engineName,
			engineVersion: engineVersion
		})
	}, [])

	return (
		<div id="nfetch" className="container" onClick={closeCallback}>
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
					<div className="container-fluid">
						<div className="row">
							{/* User*/}
							<span>
								<span className={prompt.usercolor}>
									{lower_username}
								</span>
								<span className={prompt.atcolor}>@</span>
								<span className={prompt.hostcolor}>
									{info.browserLower}
								</span>
							</span>
							<hr />
							<ul>
								<li>
									<span
										className={Settings.nfetch.titlecolor}>
										Time:
									</span>{" "}
									{info.time}
								</li>
								<li>
									<span
										className={Settings.nfetch.titlecolor}>
										Date:
									</span>{" "}
									{info.date}
								</li>
							</ul>
							<ul>
								<li>
									<span
										className={Settings.nfetch.titlecolor}>
										OS:
									</span>{" "}
									{info.osName}
								</li>
								<li>
									<span
										className={Settings.nfetch.titlecolor}>
										Browser:
									</span>{" "}
									{info.browser}
								</li>
								<li>
									<span
										className={Settings.nfetch.titlecolor}>
										Version:
									</span>{" "}
									{info.browserVersion}
								</li>
								<li>
									<span
										className={Settings.nfetch.titlecolor}>
										Engine:
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

import React, { useEffect, useState } from "react"
import {
	osName,
	browserName,
	engineName,
	engineVersion,
	browserVersion
} from "react-device-detect"
import moment from "moment"
import Prompt from "@/components/Prompt"
import { useSettings } from "@/context/settings"

const Fetch = ({ closeCallback }) => {
	const [info, setInfo] = useState({})
	const { settings } = useSettings()

	useEffect(() => {
		setInfo({
			time: moment().format(settings.fetch.timeFormat),
			date: moment().format(settings.fetch.dateFormat),
			osName: osName,
			browser: browserName,
			browserLower: browserName.toLowerCase(),
			browserVersion: browserVersion,
			engineName: engineName,
			engineVersion: engineVersion
		})
	}, [])

	return (
		<div className="h-full overflow-y-auto" onClick={closeCallback}>
			<span>
				<Prompt command="fetch" />
			</span>
			<div className="grid grid-cols-2 gap-4">
				<div>
					<img
						className="w-64 h-64 mx-auto"
						src="icon.svg"
						alt="Fetch Logo"
					/>
				</div>
				<div className="mt-4 text-white">
					<div className="mx-auto">
						<div className="row">
							{/* User*/}
							<Prompt />
							<hr className="border-dashed" />
							<ul className="mt-2">
								<li>
									<span
										className={`text-${settings.fetch.titleColor}`}>
										Time:
									</span>{" "}
									{info.time}
								</li>
								<li>
									<span
										className={`text-${settings.fetch.titleColor}`}>
										Date:
									</span>{" "}
									{info.date}
								</li>
							</ul>
							<ul className="mt-line">
								<li>
									<span
										className={`text-${settings.fetch.titleColor}`}>
										OS:
									</span>{" "}
									{info.osName}
								</li>
								<li>
									<span
										className={`text-${settings.fetch.titleColor}`}>
										Browser:
									</span>{" "}
									{info.browser}
								</li>
								<li>
									<span
										className={`text-${settings.fetch.titleColor}`}>
										Version:
									</span>{" "}
									{info.browserVersion}
								</li>
								<li>
									<span
										className={`text-${settings.fetch.titleColor}`}>
										Engine:
									</span>{" "}
									{info.engineName}
								</li>
							</ul>

							{/* Colors */}
							<div className="mt-line">
								<span className="inline-block w-1/5 h-5 bg-black"></span>
								<span className="inline-block w-1/5 h-5 bg-red"></span>
								<span className="inline-block w-1/5 h-5 bg-green"></span>
								<span className="inline-block w-1/5 h-5 bg-yellow"></span>
								<span className="inline-block w-1/5 h-5 bg-purple"></span>

								<span className="inline-block w-1/5 h-5 bg-gray"></span>
								<span className="inline-block w-1/5 h-5 bg-blue"></span>
								<span className="inline-block w-1/5 h-5 bg-cyan"></span>
								<span className="inline-block w-1/5 h-5 bg-magenta"></span>
								<span className="inline-block w-1/5 h-5 bg-white"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Fetch

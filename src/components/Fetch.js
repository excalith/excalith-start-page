import moment from "moment"
import Prompt from "@/components/Prompt"
import { useSettings } from "@/context/settings"
import useBrowserData from "@/hooks/useBrowserData"

const Fetch = ({ closeCallback }) => {
	const { settings } = useSettings()
	const [browserData] = useBrowserData()

	const titleColor = settings.fetch.titleColor
	const time = moment().format(settings.fetch.timeFormat)
	const date = moment().format(settings.fetch.dateFormat)

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
							<Prompt />
							<hr className="border-dashed" />
							<ul className="mt-2">
								<li>
									<span className={`text-${titleColor}`}>
										Time:
									</span>{" "}
									{time}
								</li>
								<li>
									<span className={`text-${titleColor}`}>
										Date:
									</span>{" "}
									{date}
								</li>
							</ul>
							<ul className="mt-line">
								<li>
									<span className={`text-${titleColor}`}>
										OS:
									</span>{" "}
									{browserData.osName}
								</li>
								<li>
									<span className={`text-${titleColor}`}>
										Browser:
									</span>{" "}
									{browserData.browser}
								</li>
								<li>
									<span className={`text-${titleColor}`}>
										Version:
									</span>{" "}
									{browserData.browserVersion}
								</li>
								<li>
									<span className={`text-${titleColor}`}>
										Engine:
									</span>{" "}
									{browserData.engineName}
								</li>
							</ul>

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

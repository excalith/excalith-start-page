import Prompt from "@/components/Prompt"
import { useSettings } from "@/context/settings"
import useFetchData from "@/hooks/useFetchData"
import getConfig from "next/config"

const Fetch = ({ closeCallback }) => {
	const { publicRuntimeConfig } = getConfig()
	const version = publicRuntimeConfig?.version
	console.log(version)
	const { settings } = useSettings()
	const [fetchData] = useFetchData()

	const titleColor = settings.fetch.titleColor

	return (
		<div className="h-full overflow-y-auto" onClick={closeCallback}>
			<span>
				<Prompt command="fetch" />
			</span>
			<div className="grid grid-cols-2 gap-4">
				<div className="mt-4">
					<img className="w-full h-full mx-auto" src={`${settings.fetch.image}`} alt="" />
				</div>
				<div className="mt-4 text-white">
					<div className="mx-auto">
						<div className="row">
							<Prompt showSymbol={false} />
							<span className="float-right text-gray">v{version}</span>
							<hr className="border-dashed" />
							<ul className="mt-2">
								<li>
									<span className={`text-${titleColor}`}>
										{settings.fetch.data[0]}
									</span>
								</li>
								<li>
									<span className={`text-${titleColor}`}>Time:</span>{" "}
									{fetchData.time}
								</li>
								<li>
									<span className={`text-${titleColor}`}>Date:</span>{" "}
									{fetchData.date}
								</li>
								<li className="mt-line"></li>
								<li>
									<span className={`text-${titleColor}`}>OS:</span>{" "}
									{fetchData.osName} {fetchData.osVersion}
								</li>
								<li>
									<span className={`text-${titleColor}`}>Browser:</span>{" "}
									{fetchData.browser} {fetchData.browserVersion}
								</li>
								<li>
									<span className={`text-${titleColor}`}>Engine:</span>{" "}
									{fetchData.engineName}
								</li>
								<li className="mt-line"></li>
								<li>
									<span className="inline-block w-1/5 h-5 -mb-2 bg-black"></span>
									<span className="inline-block w-1/5 h-5 -mb-2 bg-red"></span>
									<span className="inline-block w-1/5 h-5 -mb-2 bg-green"></span>
									<span className="inline-block w-1/5 h-5 -mb-2 bg-yellow"></span>
									<span className="inline-block w-1/5 h-5 -mb-2 bg-violet"></span>
								</li>
								<li>
									<span className="inline-block w-1/5 h-5 bg-gray"></span>
									<span className="inline-block w-1/5 h-5 bg-blue"></span>
									<span className="inline-block w-1/5 h-5 bg-cyan"></span>
									<span className="inline-block w-1/5 h-5 bg-magenta"></span>
									<span className="inline-block w-1/5 h-5 bg-white"></span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Fetch

{
	/* <ul className="mt-2">
	<li>
		<span className={`text-${titleColor}`}>Time:</span> {time}
	</li>
	<li>
		<span className={`text-${titleColor}`}>Date:</span> {date}
	</li>
	<li className="mt-line"></li>
	<li>
		<span className={`text-${titleColor}`}>OS:</span>{" "}
		{browserData.osName} {browserData.osVersion}
	</li>
	<li>
		<span className={`text-${titleColor}`}>Browser:</span>{" "}
		{browserData.browser} {browserData.browserVersion}
	</li>
	<li>
		<span className={`text-${titleColor}`}>Engine:</span>{" "}
		{browserData.engineName}
	</li>
	<li className="mt-line"></li>
	<li>
		<span className="inline-block w-1/5 h-5 -mb-2 bg-black"></span>
		<span className="inline-block w-1/5 h-5 -mb-2 bg-red"></span>
		<span className="inline-block w-1/5 h-5 -mb-2 bg-green"></span>
		<span className="inline-block w-1/5 h-5 -mb-2 bg-yellow"></span>
		<span className="inline-block w-1/5 h-5 -mb-2 bg-violet"></span>
	</li>
	<li>
		<span className="inline-block w-1/5 h-5 bg-gray"></span>
		<span className="inline-block w-1/5 h-5 bg-blue"></span>
		<span className="inline-block w-1/5 h-5 bg-cyan"></span>
		<span className="inline-block w-1/5 h-5 bg-magenta"></span>
		<span className="inline-block w-1/5 h-5 bg-white"></span>
	</li>
</ul> */
}

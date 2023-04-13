import Prompt from "@/components/Prompt"
import { useSettings } from "@/context/settings"
import useFetchData from "@/hooks/useFetchData"

const paramsPattern = /[^{}]+(?=})/g
const titlePattern = /[\w]+(:)/g

const Fetch = ({ closeCallback }) => {
	const { settings } = useSettings()
	const [fetchData] = useFetchData()

	const titleColor = settings.fetch.titleColor
	let mapping = {
		version: fetchData.version,
		time: fetchData.time,
		date: fetchData.date,
		osName: fetchData.osName,
		osVersion: fetchData.osVersion,
		browser: fetchData.browser,
		browserVersion: fetchData.browserVersion,
		engineName: fetchData.engineName,
		engineVersion: fetchData.engineVersion
	}

	function getFetchData(index, item) {
		const params = item.match(paramsPattern)
		let titleMatch = item.match(titlePattern)
		let title = ""
		if (titleMatch) title = item.match(titlePattern)[0]

		if (!params) {
			item = item.replace(title, "")
			return (
				<li key={index}>
					<span className={`text-${titleColor}`}>{title}</span>
					{item}
				</li>
			)
		}
		if (params[0] === "seperator") return <li key={index} className="mt-line"></li>
		if (params[0] === "colors") {
			return (
				<li key={index}>
					<span className="inline-block w-1/5 h-5 -mb-2 bg-black"></span>
					<span className="inline-block w-1/5 h-5 -mb-2 bg-red"></span>
					<span className="inline-block w-1/5 h-5 -mb-2 bg-green"></span>
					<span className="inline-block w-1/5 h-5 -mb-2 bg-yellow"></span>
					<span className="inline-block w-1/5 h-5 -mb-2 bg-violet"></span>
					<span className="inline-block w-1/5 h-5 bg-gray"></span>
					<span className="inline-block w-1/5 h-5 bg-blue"></span>
					<span className="inline-block w-1/5 h-5 bg-cyan"></span>
					<span className="inline-block w-1/5 h-5 bg-magenta"></span>
					<span className="inline-block w-1/5 h-5 bg-white"></span>
				</li>
			)
		}

		for (let i = 0; i < params.length; i++) {
			item = item.replace(title, "").replace(`{${params[i]}}`, mapping[params[i]])
		}
		return (
			<li key={index}>
				<span className={`text-${titleColor}`}>{title}</span>
				{item}
			</li>
		)
	}

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
							<span className="absolute float-right -mt-line right-3 text-gray">
								v{fetchData.version}
							</span>
							<hr className="border-dashed" />
							<ul className="mt-2">
								{settings.fetch.data.map((item, index) => {
									return getFetchData(index, item)
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Fetch

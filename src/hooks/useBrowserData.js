import { useState, useEffect } from "react"
import { osName, browserName, engineName, engineVersion, browserVersion } from "react-device-detect"

const DEFAULT_BROWSER_DATA = {
	osName: "Unknown",
	browser: "Unknown",
	browserLower: "unknown",
	browserVersion: "0",
	engineName: "Unknown",
	engineVersion: "0"
}

const useBrowserData = () => {
	const [browserData, setBrowserData] = useState(DEFAULT_BROWSER_DATA)

	useEffect(() => {
		const data = {
			osName: osName,
			browser: browserName,
			browserLower: browserName.toLowerCase(),
			browserVersion: browserVersion,
			engineName: engineName,
			engineVersion: engineVersion
		}

		setBrowserData(data)
	}, [])

	return [browserData]
}

export default useBrowserData

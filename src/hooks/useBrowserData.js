import { useEffect } from "react"
import { osName, browserName, engineName, engineVersion, browserVersion } from "react-device-detect"

let data = {
	osName: "Unknown",
	browser: "Unknown",
	browserLower: "unknown",
	browserVersion: "0",
	engineName: "Unknown",
	engineVersion: "0"
}

const useBrowserData = () => {
	useEffect(() => {
		data = {
			osName: osName,
			browser: browserName,
			browserLower: browserName.toLowerCase(),
			browserVersion: browserVersion,
			engineName: engineName,
			engineVersion: engineVersion
		}
	}, [])

	return [data]
}

export default useBrowserData

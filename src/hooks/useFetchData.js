import { useEffect } from "react"
import moment from "moment"
import getConfig from "next/config"
import { useSettings } from "@/context/settings"
import { UAParser } from "ua-parser-js"

let data = {
	version: "Unknown",
	theme: "Unknown",
	time: "Unknown",
	date: "Unknown",
	osName: "Unknown",
	osVersion: "Unknown",
	browser: "Unknown",
	browserLower: "unknown",
	browserVersion: "0",
	engineName: "Unknown",
	engineVersion: "0"
}

const useFetchData = () => {
	const { settings } = useSettings()
	const { publicRuntimeConfig } = getConfig()
	const version = publicRuntimeConfig?.version

	const uap = new UAParser()
	const result = uap?.getResult()

	useEffect(() => {
		uap.getOS()
			.withClientHints()
			.then((os) => {
				data.osName = os.name
				data.osVersion = os.version
			})

		data = {
			version: version,
			theme: settings.theme.name,
			time: moment().format(settings.fetch.timeFormat),
			date: moment().format(settings.fetch.dateFormat),
			browser: result.browser.name,
			browserLower: result.browser.name.toLowerCase(),
			browserVersion: result.browser.version,
			engineName: result.engine.name,
			engineVersion: result.engine.version
		}
		// eslint-disable-next-line
	}, [settings])

	return [data]
}

export default useFetchData

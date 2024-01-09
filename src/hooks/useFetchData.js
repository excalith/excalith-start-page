import { useEffect } from "react"
import moment from "moment"
import getConfig from "next/config"
import {
	osName,
	osVersion,
	browserName,
	engineName,
	engineVersion,
	browserVersion
} from "react-device-detect"
import { useSettings } from "@/context/settings"

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

	useEffect(() => {
		data = {
			version: version,
			theme: settings.theme.name,
			time: moment().format(settings.fetch.timeFormat),
			date: moment().format(settings.fetch.dateFormat),
			osName: osName,
			osVersion: osVersion,
			browser: browserName,
			browserLower: browserName.toLowerCase(),
			browserVersion: browserVersion,
			engineName: engineName,
			engineVersion: engineVersion
		}
	}, [settings])

	return [data]
}

export default useFetchData

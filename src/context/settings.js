import { createContext, useContext, useEffect, useState } from "react"
import defaultConfig from "startpage.config"
import { themes } from "@/utils/themes"

const SETTINGS_KEY = "settings"

export const SettingsContext = createContext({
	settings: undefined,
	setSettings: (settings) => {}
})

export const useSettings = () => useContext(SettingsContext)

export const SettingsProvider = ({ children }) => {
	const [settings, setSettings] = useState()
	const [items, setItems] = useState([])

	useEffect(() => {
		const settings = localStorage.getItem(SETTINGS_KEY)
		if (settings && settings !== "undefined") {
			try {
				setSettings(JSON.parse(settings))
			} catch (e) {
				setSettings(defaultConfig)
				console.log("Error parsing settings, resetting to default")
			}
		} else {
			setSettings(defaultConfig)
		}
	}, [])

	useEffect(() => {
		if (settings && settings !== "undefined") {
			localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))

			let filterArr = [
				"help",
				"fetch",
				"config",
				"config help",
				"config edit",
				"config import",
				"config reset",
				"config theme"
			]

			themes.map((theme) => {
				filterArr.push("config theme " + theme)
			})

			settings.sections.list.map((section) => {
				section.links.map((link) => {
					{
						filterArr.push(link.name.toLowerCase())
					}
				})
			})
			setItems(filterArr)
		}
	}, [settings])

	const updateSettings = async (newSettings) => {
		await setSettings(newSettings)
	}

	const resetSettings = () => {
		setSettings(defaultConfig)
		localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaultConfig))
	}

	return (
		<SettingsContext.Provider
			value={{ settings, setSettings: updateSettings, resetSettings, items }}>
			{children}
		</SettingsContext.Provider>
	)
}

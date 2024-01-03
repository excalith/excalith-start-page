import { createContext, useContext, useEffect, useState } from "react"
import defaultConfig from "public/data/settings"

const SETTINGS_KEY = "settings"

export const SettingsContext = createContext({
	settings: undefined,
	setSettings: (settings) => {}
})

export const useSettings = () => useContext(SettingsContext)

export const SettingsProvider = ({ children }) => {
	const [settings, setSettings] = useState()
	const [items, setItems] = useState([])
	const isDocker = true

	// Load settings
	useEffect(() => {
		let data

		if (isDocker) {
			data = defaultConfig
		} else {
			data = localStorage.getItem(SETTINGS_KEY)
		}

		// const settings = localStorage.getItem(SETTINGS_KEY)
		if (settings && settings !== "undefined") {
			try {
				setSettings(JSON.parse(data))
			} catch (e) {
				setSettings(defaultConfig)
				console.log("Error parsing settings, resetting to default")
			}
		} else {
			setSettings(defaultConfig)
		}
	}, [])

	// Save settings
	useEffect(() => {
		if (settings && settings !== "undefined") {

			if (isDocker) {
				// data = defaultConfig
				console.log("Docker mode, not saving settings")
			} else {
				localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
			}

			let filterArr = [
				"help",
				"fetch",
				"config",
				"config help",
				"config edit",
				"config import",
				"config reset"
			]

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

	// Update settings
	const updateSettings = async (newSettings) => {
		await setSettings(newSettings)
	}

	// Reset settings
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

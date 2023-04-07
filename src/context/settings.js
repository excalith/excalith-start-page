import { createContext, useContext, useEffect, useState } from "react"
import defaultConfig from "startpage.config"

const SETTINGS_KEY = "settings"

export const SettingsContext = createContext({
	settings: undefined,
	setSettings: (settings) => {}
})

export const useSettings = () => useContext(SettingsContext)

export const SettingsProvider = ({ children }) => {
	const [settings, setSettings] = useState()
	const [filters, setFilters] = useState([])

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

			let filterArr = []
			settings.sections.list.map((section, index) => {
				section.links.map((link, index) => {
					{
						filterArr.push(link.name.toLowerCase())
					}
				})
			})
			setFilters(filterArr)
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
			value={{ settings, setSettings: updateSettings, resetSettings, filters }}>
			{children}
		</SettingsContext.Provider>
	)
}

import { createContext, useContext, useEffect, useState } from "react"
import defaultConfig from "startpage.config"

const SETTINGS_KEY = "settings"

export const SettingsContext = createContext({
	settings: undefined,
	setSettings: (settings) => {}
})

export const useSettings = () => useContext(SettingsContext)

export const SettingsProvider = ({ children }) => {
	const [settings, setSettings] = useState(defaultConfig)

	useEffect(() => {
		if (JSON.stringify(settings) !== JSON.stringify(defaultConfig)) {
			localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
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
			value={{ settings, setSettings: updateSettings, resetSettings }}>
			{children}
		</SettingsContext.Provider>
	)
}

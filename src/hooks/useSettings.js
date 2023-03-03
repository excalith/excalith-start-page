import { useState } from "react"
import defaultConfig from "startpage.config"

const settingsKey = "settings"

export const useSettings = () => {
	const [storedSettings, setStoredSettings] = useState(() => {
		try {
			const config = window.localStorage.getItem(settingsKey)
			return config ? JSON.parse(config) : defaultConfig
		} catch (error) {
			console.error(error)
			return defaultConfig
		}
	})

	const setSettings = (value) => {
		try {
			setStoredValue(value)
			localStorage.setItem(settingsKey, JSON.stringify(value))
		} catch (error) {
			console.error(error)
		}
	}

	return [storedSettings, setSettings]
}

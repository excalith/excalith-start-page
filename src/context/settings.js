import { createContext, useContext, useEffect, useState } from "react"
import defaultConfig from "public/data/settings"

const SETTINGS_KEY = "settings"
const IS_DOCKER = process.env.BUILD_MODE === "docker"

export const SettingsContext = createContext({
	settings: undefined,
	setSettings: (settings) => {}
})

export const useSettings = () => useContext(SettingsContext)

export const SettingsProvider = ({ children }) => {
	const [settings, setSettings] = useState()
	const [items, setItems] = useState([])

	console.log("Is Docker: " + IS_DOCKER)
	// Load settings
	useEffect(() => {
		let data

		if (IS_DOCKER) {
			fetch("/api/loadSettings")
				.then((response) => response.json())
				.then((data) => setSettings(data))
				.catch(() => setSettings(defaultConfig))
		} else {
			data = localStorage.getItem(SETTINGS_KEY)
			setSettings(data ? JSON.parse(data) : defaultConfig)
		}
	}, [])

	// Save settings
	useEffect(() => {
		if (settings && settings !== "undefined") {
			if (IS_DOCKER) {
				fetch("/api/saveSettings", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(settings)
				})
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
				"config theme",
				"config reset"
			]

			fetch("/api/getThemeList")
				.then((response) => response.json())
				.then((themeNames) => {
					themeNames.forEach((theme) => {
						filterArr.push("config theme " + theme)
					})
				})
				.catch((error) => {
					appendToLog(`Error fetching themes: ${error.message}`, "error")
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

import { createContext, useContext, useEffect, useState } from "react"
import getConfig from "next/config"
import defaultConfig from "data/settings"

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

	// Load settings
	useEffect(() => {
		const loadSettings = async () => {
			let settings
			if (process.env.BUILD_MODE === "docker") {
				const res = await fetch("/api/settings")
				settings = await res.json()
			} else {
				settings = JSON.parse(localStorage.getItem("settings"))
			}

			setSettings(settings)

			// Perform the version check
			const { publicRuntimeConfig } = getConfig()
			const packageVersion = publicRuntimeConfig?.version
			const settingsVersion = settings?.version

			if (packageVersion !== settingsVersion) {
				console.warn(
					`The current version ${packageVersion} and settings version ${settingsVersion} do not match`
				)

				// TODO: Start migration here
			}
		}

		loadSettings()
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

			fetch("/api/getTheme")
				.then((response) => response.json())
				.then((data) => {
					if (!data.message) {
						data.forEach((theme) => {
							filterArr.push("config theme " + theme)
						})
					}
				})
				.catch((error) => console.log(`Error fetching themes: ${error.message}`))

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
	}

	return (
		<SettingsContext.Provider
			value={{ settings, setSettings: updateSettings, resetSettings, items }}>
			{children}
		</SettingsContext.Provider>
	)
}

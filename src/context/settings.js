import { createContext, useContext, useEffect, useState } from "react"
import defaultConfig from "data/settings"
import getConfig from "next/config"

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
			try {
				if (process.env.BUILD_MODE === "docker") {
					const res = await fetch("/api/loadSettings", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(defaultConfig)
					})
					settings = await res.json()
				} else {
					const storedSettings = localStorage.getItem("settings")
					settings = storedSettings ? JSON.parse(storedSettings) : defaultConfig
				}
			} catch (error) {
				settings = defaultConfig
				console.log(`Error loading settings: ${error.message}`)
			}

			return settings
		}

		loadSettings().then((settings) => {
			// Perform the version check
			const { publicRuntimeConfig } = getConfig()
			const packageVersion = publicRuntimeConfig?.version
			const settingsVersion = settings?.version

			if (packageVersion !== settingsVersion) {
				if (!settingsVersion) {
					console.warn(
						`Using a pre-migration version of the settings file, loading latest user settings instead. However, settings file may require manual resolving.`
					)

					setSettings(settings)
					return
				} else {
					console.warn(
						`The current version ${packageVersion} and user settings ${settingsVersion} do not match.`
					)
				}

				console.log(
					`Trying to migrate user settings from ${settingsVersion} to ${packageVersion}...`
				)

				// Backup current settings
				console.log(`Backing up ${settingsVersion} settings`)
				if (process.env.BUILD_MODE === "docker") {
					fetch("/api/saveSettings?backup", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(settings)
					})
				} else {
					const versionName = !settingsVersion ? "premigrate" : settings.version
					localStorage.setItem(
						SETTINGS_KEY + `-${versionName}` + "-backup",
						JSON.stringify(settings)
					)
				}

				// Start migration
				fetch("/api/migrate", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(settings)
				})
					.then((response) => response.json())
					.then((data) => {
						console.log("Migration successful.")
						setSettings(data)
					})
					.catch((err) => console.error("Migration failed:", err))
			} else {
				setSettings(settings)
			}
		})
	}, [])

	// Save settings
	useEffect(() => {
		if (settings && settings !== "undefined") {
			if (IS_DOCKER) {
				fetch("/api/saveSettings?save", {
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

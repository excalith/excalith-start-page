import React, { useContext } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { SettingsProvider, SettingsContext } from "@/context/settings"
import "@/styles/globals.css"

function fallbackRender({ error, resetErrorBoundary, data }) {
	const isDataError = error.message.includes("undefined")
	const isVersionError = !data.settings.version

	const handleForceMigrate = () => {
		const confirmation =
			"Are you sure you want to migrate your settings? Your settings will be backed up."

		if (confirm(confirmation) == true) {
			const IS_DOCKER = process.env.BUILD_MODE === "docker"
			let settings = data.settings
			if (!settings.version) {
				settings.version = "1.0.0"
			}

			console.log(settings)
			if (IS_DOCKER) {
				fetch("/api/saveSettings?save&backup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(settings)
				})
			} else {
				const SETTINGS_KEY = "settings"
				const versionName = !settings.version ? "premigrate" : settings.version
				localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
				localStorage.setItem(
					SETTINGS_KEY + `-${versionName}` + "-backup",
					JSON.stringify(settings)
				)
			}

			resetErrorBoundary()

			// Reload the page
			location.reload()
		}
	}

	return (
		<div className="absolute w-full h-auto py-4 transform -translate-x-1/2 -translate-y-1/2 shadow-lg text-textColor rounded-terminal bg-window-color max-w-terminal p-terminal top-1/2 left-1/2">
			<div role="alert">
				{isVersionError && (
					<>
						<p className="p-4 border rounded-lg border-yellow">
							You are using an older version where settings migration between versions
							were not implemented yet. Please update to the latest version and
							migrate your settings.
						</p>
						<br />
					</>
				)}
				<p>Oops! Something's not quite right on your side:</p>
				<p className="text-red mb-line">{error.message}</p>
				{isDataError ? (
					<>
						<p>This could be due to a faulty or outdated settings file.</p>
						<br />
						<p>
							No worries, though! You can migrate your current settings to the new
							version, and your current settings will be backed up.
						</p>
						<br />
						<p>
							For detailed instructions about migrating your data, please check out{" "}
							<a
								className="underline"
								href="https://github.com/excalith/excalith-start-page/wiki/Troubleshooting">
								troubleshooting
							</a>{" "}
							page.
						</p>
						<button
							className="px-4 py-2 text-white rounded-terminal mt-line bg-red hover:bg-yellow hover:text-black"
							onClick={handleForceMigrate}>
							Start Migrating
						</button>
					</>
				) : (
					<>
						<p>
							This is an unexpected error. Please refer to{" "}
							<a
								className="underline"
								href="https://github.com/excalith/excalith-start-page/wiki/Troubleshooting">
								troubleshooting
							</a>{" "}
							possible solutions.
						</p>
						<p className="mt-line">
							If nothing helps, please report this issue on{" "}
							<a
								className="underline"
								href="https://github.com/excalith/excalith-start-page/issues/new?assignees=excalith&labels=&template=bug-report.md&title=%5BBUG%5D+">
								issues
							</a>{" "}
							by filling out the form. Don't forget to include the error message and
							add console logs if possible.
						</p>
					</>
				)}
			</div>
		</div>
	)
}

export default function App({ Component, pageProps }) {
	const data = useContext(SettingsContext)

	return (
		<SettingsProvider>
			<SettingsContext.Consumer>
				{(data) => (
					<ErrorBoundary fallbackRender={(props) => fallbackRender({ ...props, data })}>
						<Component {...pageProps} />
					</ErrorBoundary>
				)}
			</SettingsContext.Consumer>
		</SettingsProvider>
	)
}

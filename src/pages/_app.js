import React from "react"
import { ErrorBoundary } from "react-error-boundary"
import { SettingsProvider } from "@/context/settings"
import "@/styles/globals.css"

function fallbackRender({ error, resetErrorBoundary }) {
	const isDataError = error.message.includes("undefined")

	const handleEraseClick = () => {
		if (
			confirm(
				"Are you sure you want to reset your configuration to defaults? If you made any customizations, you will lose them."
			) == true
		) {
			localStorage.clear()
			resetErrorBoundary()
			console.log("LocalStorage configuration reset to defaults.")
		}
	}

	return (
		<div className="absolute w-full h-fit inset-x-0 inset-y-0 m-auto py-4 shadow-lg text-textColor rounded-terminal bg-window-color max-w-terminal p-terminal">
			<div role="alert">
				<p>Something went wrong on your side:</p>
				<p className="text-red mb-line">{error.message}</p>
				{isDataError ? (
					<>
						<p>
							This is probably caused by faulty or obsolete local configuration,
							stored in localStorage. Please refer to{" "}
							<a
								className="underline"
								href="https://github.com/excalith/excalith-start-page/wiki/Troubleshooting">
								troubleshooting
							</a>{" "}
							page for more information about how to fix this, or click the button
							below to reset to defaults.
						</p>

						<button
							className="px-4 py-2 rounded-terminal mt-line bg-red"
							onClick={handleEraseClick}>
							Erase And Reset All Data
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
	return (
		<ErrorBoundary fallbackRender={fallbackRender}>
			<SettingsProvider>
				<Component {...pageProps} />
			</SettingsProvider>
		</ErrorBoundary>
	)
}

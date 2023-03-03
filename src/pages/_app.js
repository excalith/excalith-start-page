import React, { useEffect, useState } from "react"
import "@/styles/globals.css"
import { SettingsProvider } from "@/context/settings"

export default function App({ Component, pageProps }) {
	return (
		<SettingsProvider>
			<Component {...pageProps} />
		</SettingsProvider>
	)
}

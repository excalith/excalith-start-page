import React, { useEffect, useState, useContext } from "react"
import Head from "next/head"
import { useSettings } from "@/context/settings"

const Meta = () => {
	const [title, setTitle] = useState("Start Page")
	const { settings } = useSettings()

	useEffect(() => {
		setTitle(settings.username + " Start Page")
	}, [settings.username])

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={`Browser start page for ${title}`} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			<meta name="robots" content="noindex, nofollow"></meta>
		</Head>
	)
}

export default Meta

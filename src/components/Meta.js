import React, { useEffect, useState, useContext } from "react"
import Head from "next/head"
import { useSettings } from "@/context/settings"

const Meta = () => {
	const [title, setTitle] = useState("Start Page")
	const [iconType, setIconType] = useState("image/x-icon")
	const { settings } = useSettings()

	useEffect(() => {
		setTitle(settings.username + " Start Page")

		const iconExtension = settings.fetch.image.split(".").pop()
		switch (iconExtension) {
			case "svg":
				setIconType("image/svg+xml")
				break
			case "png":
				setIconType("image/png")
				break
			default:
				setIconType("na")
		}
	}, [settings.fetch.image, settings.username])

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={`Start page of ${settings.username}`} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			{iconType !== "na" && (
				<link rel="icon" type={iconType} href={`${settings.fetch.image}`} />
			)}
			<meta name="robots" content="noindex, nofollow"></meta>
		</Head>
	)
}

export default Meta

import React, { useEffect, useState } from "react"
import Head from "next/head"
import Settings from "@/utils/settings"

const Meta = () => {
	const [title, setTitle] = useState("Start Page")
	useEffect(() => {
		setTitle(Settings.username + " Start Page")
	}, [])

	return (
		<Head>
			<title>{title}</title>
			<meta
				name="description"
				content={`Browser start page for ${title}`}
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="icon" href="/favicon.ico" />
			<meta name="robots" content="noindex, nofollow"></meta>
		</Head>
	)
}

export default Meta

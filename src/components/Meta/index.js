import Head from "next/head"

const Meta = ({ username, keywords, description }) => {
	return (
		<Head>
			<title>{username} Start Page</title>
			<meta
				name="description"
				content={`Browser start page for ${username}`}
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

import Head from "next/head"

const Meta = ({ username, keywords, description }) => {
	return (
		<Head>
			<title>{username} start page</title>
			<meta
				name="description"
				content={`Browser start page for ${username}`}
			/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="icon" href="/favicon.ico" />
		</Head>
	)
}

export default Meta

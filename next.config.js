const { version } = require("./package.json")

const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	publicRuntimeConfig: {
		version
	},
	headers: () => [
		{
			source: "/:path*",
			headers: [
				{
					key: "Cache-Control",
					value: "no-store"
				}
			]
		}
	]
}

module.exports = nextConfig

const { version } = require("./package.json")

const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	publicRuntimeConfig: {
		version
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**"
			}
		]
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
	],
	webpack(config) {
		config.resolve.fallback = {
			// if you miss it, all the other options in fallback, specified
			// by next.js will be dropped.
			...config.resolve.fallback,

			fs: false // the solution
		}

		return config
	},
	env: {
		NEXT_PUBLIC_MODE: process.env.NEXT_PUBLIC_MODE
	}
}

module.exports = nextConfig

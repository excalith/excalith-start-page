const { version } = require("./package.json")

const rulesToProcess = [/\.m?js/, /\.(js|cjs|mjs)$/].map(String)
const dirToIgnore = /tools/

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

		config.module.rules = config.module.rules.map((rule) => {
			if (rule !== "..." && rulesToProcess.indexOf(String(rule.test)) > -1) {
				rule.exclude = [dirToIgnore]
			}
			return rule
		})

		return config
	},
	env: {
		BUILD_MODE: process.env.BUILD_MODE
	}
}

module.exports = nextConfig

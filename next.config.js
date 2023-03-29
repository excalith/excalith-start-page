/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
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

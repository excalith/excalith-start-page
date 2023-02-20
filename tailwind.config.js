/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		fontFamily: {
			mono: ["FiraCode", "ui-monospace", "SFMono-Regular"]
		},
		fontSize: {
			xs: ["14px", "20px"],
			sm: ["15px", "20px"],
			base: ["16px", "24px"],
			lg: ["18px", "28px"],
			xl: ["20px", "32px"],
			"2xl": ["30px", "36px"],
			"4xl": ["36px", "40px"]
		},
		borderRadius: {
			terminal: "0.625rem"
		},
		extend: {
			maxWidth: {
				terminal: "50rem"
			},
			padding: {
				terminal: "0.938rem"
			},
			margin: {
				line: "1.4rem"
			}
		}
	},
	plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: ["class", '[data-mode="dark"]'],
	// important: true,
	theme: {
		fontFamily: {
			mono: ["FiraCode", "ui-monospace", "SFMono-Regular"]
		},
		fontSize: {
			DEFAULT: ["1rem", "2em"],
			title: ["20px", "1.2"],
			sm: ["15px", "20px"],
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
				terminal: "0.9rem"
			},
			margin: {
				line: "1.4rem"
			},
			animation: {
				fadeIn: "fadeIn 0.15s ease-in-out"
			},
			keyframes: () => ({
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 }
				}
			})
		}
	},
	plugins: []
}

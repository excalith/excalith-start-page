const config = {
	username: "Excalith",
	prompt: {
		usercolor: "green",
		atcolor: "gray",
		hostcolor: "magenta",
		promptcolor: "magenta",
		prompt: "❯"
	},
	colors: {
		backgroundcolor: "#121317",
		windowcolor: "#1e212b",
		glowcolor: "#d1aff8",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		purple: "#d1aff8"
	},
	sections: [
		{
			title: "General",
			color: "green",
			links: [
				{
					name: "Portfolio",
					url: "https://google.com",
					icon: "mdi:web",
					target: "_blank"
				}
			]
		},
		{
			title: "Dev",
			color: "magenta",
			links: [
				{
					name: "GitHub",
					url: "https://github.com",
					icon: "mdi:github",
					target: "_blank"
				},
				{
					name: "GitLab",
					url: "https://gitlab.com",
					icon: "ph:gitlab-logo-simple-fill",
					target: "_blank"
				}
			]
		},
		{
			title: "Social",
			color: "blue",
			links: [
				{
					name: "Twitter",
					url: "https://twitter.com",
					icon: "mdi:twitter",
					target: "_blank"
				},
				{
					name: "Polywork",
					url: "https://polywork.com",
					icon: "simple-icons:polywork",
					target: "_blank"
				},
				{
					name: "LinkedIn",
					url: "https://linkedin.com",
					icon: "mdi:linkedin",
					target: "_blank"
				}
			]
		}
	]
}

module.exports = config

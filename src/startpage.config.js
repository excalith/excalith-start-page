const config = {
	username: "excalith",
	timezone: "America/New_York",
	prompt: {
		usercolor: "green",
		atcolor: "gray",
		hostcolor: "magenta",
		promptcolor: "magenta",
		prompt: ">"
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

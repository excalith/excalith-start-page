const config = {
	username: "Excalith",
	search: {
		default: "https://google.com/search?q=",
		target: "_self"
	},
	prompt: {
		usercolor: "green",
		atcolor: "gray",
		hostcolor: "magenta",
		promptcolor: "magenta",
		promptsymbol: "❯",
		caretcolor: "green",
		selectionbg: "#e8b195",
		selectionfg: "#16161e",
		ctrlc: true
	},
	colors: {
		backgroundcolor: "#121317",
		windowcolor: "#1e212b",
		glowcolor: "none",
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
	commands: [
		{
			alias: "g",
			name: "Google Search",
			url: "https://google.com/search?q={}"
		},
		{
			alias: "d",
			name: "DuckDuckGo Search",
			url: "https://duckduckgo.com/?q={}"
		},
		{
			alias: "b",
			name: "Brave Search",
			url: "https://search.brave.com/search?q={}"
		},
		{
			alias: "s",
			name: "Stack Overflow Search",
			url: "https://stackoverflow.com/search?q={}"
		},
		{
			alias: "w",
			name: "Wikipedia Search",
			url: "https://en.wikipedia.org/wiki/{}"
		}
	],
	sections: [
		{
			title: "General",
			color: "green",
			links: [
				{
					name: "Portfolio",
					url: "https://cancellek.com",
					icon: "mdi:web",
					target: "_blank"
				},
				{
					name: "Keybase",
					url: "https://keybase.io/",
					icon: "fa-brands:keybase",
					target: "_blank"
				},
				{
					name: "GPT",
					url: "https://chat.openai.com/",
					icon: "simple-icons:openai",
					target: "_blank"
				},
				{
					name: "OCI",
					url: "https://www.oracle.com/cloud/",
					icon: "simple-icons:oracle",
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
				},
				{
					name: "Dev.to",
					url: "https://dev.to",
					icon: "material-symbols:logo-dev",
					target: "_blank"
				},
				{
					name: "Stack Overflow",
					url: "https://stackoverflow.com/",
					icon: "mdi:stack-overflow",
					target: "_blank"
				}
			]
		},
		{
			title: "Social",
			color: "purple",
			links: [
				{
					name: "Twitter",
					url: "https://twitter.com",
					icon: "mdi:twitter",
					target: "_blank"
				},
				{
					name: "Mastodon",
					url: "https://mastodon.social/",
					icon: "ri:mastodon-fill",
					target: "_blank"
				},
				{
					name: "Reddit",
					url: "https://reddit.com",
					icon: "mdi:reddit",
					target: "_blank"
				},
				{
					name: "Polywork",
					url: "https://polywork.com",
					icon: "simple-icons:polywork",
					target: "_blank"
				}
			]
		},
		{
			title: "Gaming",
			color: "cyan",
			links: [
				{
					name: "Polygon",
					url: "https://polygon.com",
					icon: "uil:polygon",
					target: "_blank"
				},
				{
					name: "IGN",
					url: "https://ign.com",
					icon: "mdi:currency-sign",
					target: "_blank"
				},
				{
					name: "RPS",
					url: "https://rockpapershotgun.com/",
					icon: "ph:toilet-paper-bold",
					target: "_blank"
				},
				{
					name: "80lv",
					url: "https://80.lv/",
					icon: "tabler:hand-rock",
					target: "_blank"
				}
			]
		},
		{
			title: "Science",
			color: "blue",
			links: [
				{
					name: "PopSci",
					url: "https://popsci.com/",
					icon: "material-symbols:science",
					target: "_blank"
				},
				{
					name: "Space",
					url: "fa6-solid:user-astronaut",
					icon: "mdi:reddit",
					target: "_blank"
				},
				{
					name: "NASA",
					url: "https://blogs.nasa.gov/",
					icon: "simple-icons:nasa",
					target: "_blank"
				},
				{
					name: "ESA",
					url: "https://blogs.esa.int/",
					icon: "mdi:black-mesa",
					target: "_blank"
				}
			]
		},
		{
			title: "Tech",
			color: "yellow",
			links: [
				{
					name: "TechCrunch",
					url: "https://techcrunch.com/",
					icon: "game-icons:techno-heart",
					target: "_blank"
				},
				{
					name: "Verge",
					url: "https://www.theverge.com/",
					icon: "arcticons:verge",
					target: "_blank"
				},
				{
					name: "It's Foss",
					url: "https://itsfoss.com/",
					icon: "ri:mastodon-fill",
					target: "_blank"
				},
				{
					name: "9To5 Linux",
					url: "https://9to5linux.com/",
					icon: "uil:linux",
					target: "_blank"
				}
			]
		}
	]
}

module.exports = config

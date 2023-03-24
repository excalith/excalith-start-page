const defaultConfig = {
	username: "Excalith",
	theme: {
		backgroundColor: "#121317",
		windowColor: "#1e212b",
		glowColor: "#6b5cb157",
		white: "#e2e2e2",
		gray: "#97989d",
		black: "#16161e",
		red: "#ec6183",
		green: "#2ed8a2",
		yellow: "#e8b195",
		blue: "#2bc3de",
		cyan: "#62e0e2",
		magenta: "#e069aa",
		purple: "#d1aff8",
		orange: "#ff8800"
	},
	terminal: {
		fixedHeight: true,
		glowEnabled: true
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow"
	},
	urlLaunch: {
		target: "_self"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
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
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: [
		{
			title: "General",
			color: "green",
			links: [
				{
					name: "Portfolio",
					url: "https://cancellek.com",
					icon: "mdi:web"
				},
				{
					name: "Keybase",
					url: "https://keybase.io/",
					icon: "fa-brands:keybase"
				},
				{
					name: "GPT",
					url: "https://chat.openai.com/",
					icon: "simple-icons:openai"
				},
				{
					name: "OCI",
					url: "https://www.oracle.com/cloud/",
					icon: "simple-icons:oracle"
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
					icon: "mdi:github"
				},
				{
					name: "GitLab",
					url: "https://gitlab.com",
					icon: "ph:gitlab-logo-simple-fill"
				},
				{
					name: "Dev.to",
					url: "https://dev.to",
					icon: "material-symbols:logo-dev"
				},
				{
					name: "Stack Overflow",
					url: "https://stackoverflow.com/",
					icon: "mdi:stack-overflow"
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
					icon: "mdi:twitter"
				},
				{
					name: "Mastodon",
					url: "https://mastodon.social/",
					icon: "ri:mastodon-fill"
				},
				{
					name: "Reddit",
					url: "https://reddit.com",
					icon: "mdi:reddit"
				},
				{
					name: "Polywork",
					url: "https://polywork.com",
					icon: "simple-icons:polywork"
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
					icon: "uil:polygon"
				},
				{
					name: "IGN",
					url: "https://ign.com",
					icon: "mdi:currency-sign"
				},
				{
					name: "RPS",
					url: "https://rockpapershotgun.com/",
					icon: "ph:toilet-paper-bold"
				},
				{
					name: "80lv",
					url: "https://80.lv/",
					icon: "tabler:hand-rock"
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
					icon: "material-symbols:science"
				},
				{
					name: "Space",
					url: "fa6-solid:user-astronaut",
					icon: "mdi:reddit"
				},
				{
					name: "NASA",
					url: "https://blogs.nasa.gov/",
					icon: "simple-icons:nasa"
				},
				{
					name: "ESA",
					url: "https://blogs.esa.int/",
					icon: "mdi:black-mesa"
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
					icon: "game-icons:techno-heart"
				},
				{
					name: "Verge",
					url: "https://www.theverge.com/",
					icon: "arcticons:verge"
				},
				{
					name: "It's Foss",
					url: "https://itsfoss.com/",
					icon: "ri:mastodon-fill"
				},
				{
					name: "9To5 Linux",
					url: "https://9to5linux.com/",
					icon: "uil:linux"
				}
			]
		}
	]
}

export default defaultConfig

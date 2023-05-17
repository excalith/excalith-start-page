const defaultConfig = {
	username: "Avichal",
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
		violet: "#d1aff8",
		orange: "#ff8800"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: false,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
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
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "blue"
	},
	search: {
		default: "https://www.ecosia.org/search?q=",
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
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				align: "left",
				links: [
					{
						name: "Whatsapp",
						url: "https://web.whatsapp.com/",
						icon: "mdi:web"
					},
					{
						name: "GDrive",
						url: "http://drive.google.com/",
						icon: "fa-brands:keybase"
					},
					{
						name: "GPT",
						url: "https://chat.openai.com/",
						icon: "simple-icons:openai"
					},
					{
						name: "GMail",
						url: "http://gmail.com/",
						icon: "simple-icons:oracle"
					}
				]
			},
			{
				title: "Dev",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "GitHub",
						url: "https://github.com",
						icon: "mdi:github"
					},
					{
						name: "FirefoxCSS",
						url: "https://trickypr.github.io/FirefoxCSS-Store.github.io/#",
						icon: "ph:gitlab-logo-simple-fill"
					},
					{
						name: "Mozilla Addons",
						url: "https://addons.mozilla.org/en-US/firefox/",
						icon: "material-symbols:logo-dev"
					},
					{
						name: "Garuda Uptimes",
						url: "https://status.garudalinux.org/",
						icon: "mdi:stack-overflow"
					}
				]
			},
			{
				title: "Social",
				color: "violet",
				align: "left",
				links: [
					{
						name: "Discord",
						url: "https://discord.com/channels/@me",
						icon: "mdi:twitter"
					},
					{
						name: "Telegram",
						url: "https://web.telegram.org/k/",
						icon: "ri:mastodon-fill"
					},
					{
						name: "Reddit",
						url: "https://reddit.com",
						icon: "mdi:reddit"
					},
					{
						name: "ig:dm",
						url: "https://www.instagram.com/?theme=dark",
						icon: "simple-icons:polywork"
					}
				]
			},
			{
				title: "Studies/Productivity",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "Notion.so",
						url: "https://www.notion.so/",
						icon: "uil:polygon"
					},
					{
						name: "BT Forum",
						url: "https://btforum.bakliwaltutorialsiit.com/",
						icon: "mdi:currency-sign"
					},
					{
						name: "Google Keep",
						url: "https://keep.google.com/",
						icon: "ph:toilet-paper-bold"
					},
					{
						name: "Garuda Start",
						url: "https://start.garudalinux.org/",
						icon: "tabler:hand-rock"
					}
				]
			},
			{
				title: "Streaming",
				color: "blue",
				align: "left",
				links: [
					{
						name: "YouTube",
						url: "https://www.youtube.com/",
						icon: "material-symbols:science"
					},
					{
						name: "Netflix",
						url: "https://netflixery.com/",
						icon: "mdi:reddit"
					},
					{
						name: "Plaza.one",
						url: "https://plaza.one/",
						icon: "simple-icons:nasa"
					},
					{
						name: "Prime Video",
						url: "https://www.primevideo.com/storefront/home/ref=atv_dl_rdr",
						icon: "mdi:black-mesa"
					}
				]
			},
			{
				title: "Updates",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "NASA",
						url: "https://blog.nasa.gov/",
						icon: "simple-icons:nasa"
					},
					{
						name: "News",
						url: "https://news.google.com/",
						icon: "arcticons:verge"
					},
					{
						name: "It's Foss",
						url: "https://itsfoss.com/",
						icon: "uil:linux"
					},
					{
						name: "Sports news",
						url: "https://www.msn.com/en-in/sports?ocid=StripeOCID",
						icon: "uil:linux"
					}
				]
			}
		]
	}
}

export default defaultConfig

const defaultConfig = {
	username: "apetl",
	theme: {
		"backgroundColor": "#121317",
		"windowColor": "#181825",
		"glowColor": "#464c79",
		"white": "#bac2de",
		"gray": "#97989d",
		"black": "#45475A",
		"red": "#f38ba8",
		"green": "#a6e3a1",
		"blue": "#89b4fa",
		"yellow": "#f9e2af",
		"cyan": "#94e2d5",
		"magenta": "#f5c2e7",
		"violet": "#caa4f7",
		"orange": "#fbb185"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "$",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "hh:mm",
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
		hoverColor: "violet"
	},
	search: {
		default: "https://www.startpage.com/sp/search?query=",
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
						name: "Mail",
						url: "https://mail.proton.me",
						icon: "simple-icons:protonmail"
					},
					{
						name: "Habitica",
						url: "https://habitica.com",
						icon: "mdi:todo-add"
					},
					{
						name: "Calendar",
						url: "https://calendar.proton.me",
						icon: "simple-icons:protoncalendar"
					},
					{
						name: "Search",
						url: "https://www.startpage.com",
						icon: "fluent:search-16-filled"
					}
				]
			},
			{
				title: "Media",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "Youtube",
						url: "https://youtube.com",
						icon: "mdi:youtube"
					},
					{
						name: "Spotify",
						url: "https://open.spotify.com",
						icon: "mdi:spotify"
					},
					{
						name: "Anime",
						url: "https://aniwave.to/home/",
						icon: "tabler:brand-funimation"
					},
					{
						name: "Manga",
						url: "https://mangareader.to/home/",
						icon: "mdi:book"
					},
				]
			},
			{
				title: "Storage",
				color: "violet",
				align: "left",
				links: [
					{
						name: "Filen",
						url: "https://drive.filen.io",
						icon: "mdi:folder-key"
					},
					{
						name: "P Drive",
						url: "https://drive.proton.me",
						icon: "simple-icons:protondrive"
					},
					{
						name: "G Drive",
						url: "https://drive.google.com",
						icon: "mdi:google-drive"
					},
					{
						name: "Photos",
						url: "https://photos.google.com",
						icon: "simple-icons:googlephotos"
					}
				]
			},
			{
				title: "Study",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "Brightspace",
						url: "https://brightspace.brocku.ca/",
						icon: "uil:university"
					},
					{
						name: "Lofi",
						url: "https://www.youtube.com/@LofiGirl",
						icon: "ri:music-fill"
					},
					{
						name: "Flocus",
						url: "https://app.flocus.com/",
						icon: "mdi:tilde"
					},
					{
						name: "Office",
						url: "https://www.office.com/",
						icon: "mdi:microsoft-office"
					}
				]
			},
			{
				title: "Dev",
				color: "red",
				align: "left",
				links: [
					{
						name: "Github",
						url: "https://github.com/",
						icon: "mingcute:github-fill"
					},
					{
						name: "GPT",
						url: "https://chat.openai.com/",
						icon: "simple-icons:openai"
					},
					{
						name: "Oracle",
						url: "https://cloud.oracle.com/",
						icon: "simple-icons:oracle"
					},
					{
						name: "Daily Dev",
						url: "https://app.daily.dev",
						icon: "tabler:terminal"
					}
				]
			},
			{
				title: "Other",
				color: "blue",
				align: "left",
				links: [
					{
						name: "Catppuccin",
						url: "https://github.com/catppuccin/catppuccin",
						icon: "solar:cat-bold"
					},
					{
						name: "Reddit",
						url: "https://www.reddit.com",
						icon: "mdi:reddit"
					},
					{
						name: "Netflix",
						url: "https://www.netflix.com/browse",
						icon: "mdi:netflix"
					},
					{
						name: "Cloudflare",
						url: "https://dash.cloudflare.com",
						icon: "fa-brands:cloudflare"
					}
				]
			},
		]
	}
}

export default defaultConfig

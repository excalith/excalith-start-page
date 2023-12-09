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
		placeholder: "command...",
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
						name: "GPT",
						url: "https://chat.openai.com",
						icon: "simple-icons:openai"
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
				title: "Gaming",
				color: "cyan",
				align: "left",
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
				align: "left",
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
				color: "red",
				align: "left",
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
}

export default defaultConfig

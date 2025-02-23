import { isURL } from "@/utils/isURL"
import { openLink } from "@/utils/openLink"
import { publish } from "@/utils/event"

const registeredCommands = ["list", "help", "fetch", "config"]

export function RunCommand(command, settings) {
	if (command === "") return false
	const cmd_split = command.split(" ")

	if (registeredCommands.includes(cmd_split[0])) {
		publish("command", cmd_split)
	} else if (isURL(command)) {
		openLink(
			(/^https?:\/\//.test(command) ? "" : "https://") + command,
			settings.urlLaunch.target
		)
	} else if (tryParseSearchShortcut(command, settings)) {
		return
	} else {
		openFilteredLinks(command, settings)
	}
}

function openFilteredLinks(command, settings) {
	let filteredUrls = []
	settings.sections.list.map((section) => {
		{
			section.links.map((link) => {
				{
					if (link.name.toLowerCase().startsWith(command)) {
						filteredUrls.push(link.url)
					}
				}
			})
		}
	})

	let filterCount = filteredUrls.length
	if (filterCount === 0) {
		DefaultSearch(command, settings)
	} else {
		filteredUrls.map((url, index) => {
			const target = index === filterCount - 1 ? settings.urlLaunch.target : "_blank"
			openLink(url, target)
		})
	}
}

export function DefaultSearch(buffer, settings) {
	const searchEngine = settings.search.default
	const target = settings.search.target

	const encodedBuffer = encodeURIComponent(buffer)
	openLink(searchEngine.replace("{}", encodedBuffer), target)
}

function tryParseSearchShortcut(command, settings) {
	var commandPattern = new RegExp(settings.search.shortcutRegex, "g")
	let matchAll = command.matchAll(commandPattern)
	matchAll = Array.from(matchAll)

	if (matchAll.length === 0) return false

	let regex_cmd = matchAll[0]
	for (var i = 0; i < settings.search.shortcuts.length; i++) {
		const commandData = settings.search.shortcuts[i]
		const name = commandData.alias

		if (name === regex_cmd[1]) {
			const url = commandData.url

			const encodedBuffer = encodeURIComponent(regex_cmd[2])
			openLink(url.replace("{}", encodedBuffer), settings.urlLaunch.target)
			return true
		}
	}
	return false
}

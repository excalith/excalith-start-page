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
		openLink("https://" + command, settings.urlLaunch.target)
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
		const defaultSerachEngine = settings.search.default
		const target = settings.search.target
		openLink(defaultSerachEngine + command, target)
	} else {
		filteredUrls.map((url, index) => {
			openLink(url, index === filterCount - 1 ? "_self" : "_blank")
		})
	}
}

function tryParseSearchShortcut(command, settings) {
	// Split command and query seperated by shortcut regex
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
			openLink(url.replace("{}", regex_cmd[2]), settings.urlLaunch.target)
			return true
		}
	}
	return false
}

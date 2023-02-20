import Settings from "@/utils/settings"
import { isURL } from "@/utils/isURL"
import { openLink } from "@/utils/openLink"
import { publish } from "@/utils/event"

const registeredCommands = ["list", "help", "nfetch", "config"]

export function RunCommand(command) {
	if (command === "") return false

	const cmd = command.toLowerCase()
	const cmd_split = command.split(" ")

	if (registeredCommands.includes(cmd_split[0])) {
		publish("command", cmd_split)
	} else if (isURL(command)) {
		openLink("https://" + command, Settings.urlLaunch.target)
	} else if (tryParseSearchShortcut(command)) {
		return
	} else {
		openFilteredLinks(command)
	}
}

function openFilteredLinks(command) {
	let filterCount = 0
	Settings.sections.map((section) => {
		{
			section.links.map((link) => {
				{
					if (link.name.toLowerCase().includes(command)) {
						openLink(link.url, link.target)
						filterCount++
					}
				}
			})
		}
	})

	if (filterCount === 0) {
		const searchEngine = Settings.search.default
		const target = Settings.search.target
		openLink(searchEngine + command, target)
	}
}

function tryParseSearchShortcut(command) {
	// Split command and query seperated by shortcut regex
	var commandPattern = new RegExp(Settings.search.shortcutRegex, "g")
	let matchAll = command.matchAll(commandPattern)
	matchAll = Array.from(matchAll)

	if (matchAll.length === 0) return false

	let regex_cmd = matchAll[0]
	for (var i = 0; i < Settings.search.shortcuts.length; i++) {
		const commandData = Settings.search.shortcuts[i]
		const name = commandData.alias

		if (name === regex_cmd[1]) {
			const url = commandData.url
			openLink(url.replace("{}", regex_cmd[2]), "_blank")
			return true
		}
	}
	return false
}

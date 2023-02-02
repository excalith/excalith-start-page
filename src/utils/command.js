import Config from "@/startpage.config"
import { isURL } from "@/utils/isURL"
import { openLink } from "@/utils/openLink"

export function RunCommand(command) {
	if (isURL(command)) {
		openLink("https://" + command, "_blank")
	} else if (tryParseCommand(command)) {
		return
	} else {
		openFilteredLinks(command)
	}
}

function openFilteredLinks(command) {
	Config.sections.map((section) => {
		{
			section.links.map((link) => {
				{
					if (link.name.toLowerCase().includes(command)) {
						openLink(link.url, link.target)
					}
				}
			})
		}
	})
}

function tryParseCommand(command) {
	if (command === "") return false

	// Split command and query seperated by colon
	var commandPattern = new RegExp("([A-Za-z0-9]+): (.*)", "g")
	let matchAll = command.matchAll(commandPattern)
	matchAll = Array.from(matchAll)

	if (matchAll.length === 0) return false

	let regex_cmd = matchAll[0]
	for (var i = 0; i < Config.commands.length; i++) {
		const commandData = Config.commands[i]
		const name = commandData.name

		if (name === regex_cmd[1]) {
			const url = commandData.url
			openLink(url.replace("{}", regex_cmd[2]), "_blank")
			return true
		}
	}
	return false
}

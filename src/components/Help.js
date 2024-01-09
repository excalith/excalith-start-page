import Prompt from "@/components/Prompt"
import { useSettings } from "@/context/settings"

const Help = ({ closeCallback }) => {
	const { settings } = useSettings()

	return (
		<div className="h-full overflow-y-auto text-textColor" onClick={closeCallback}>
			<div>
				<span>
					<Prompt command="help" />
				</span>

				<span className="block mt-line text-green">Usage</span>
				<ul>
					<li>- Filter links by typing in the prompt</li>
					<li>- Unfiltered prompt will search using default search engine</li>
					<li>- Launch URL's directly from prompt</li>
				</ul>

				<span className="block mt-line text-green">Key Bindings</span>
				<ul>
					<li>
						- Use <span className="text-blue">→</span> key to complete suggestion
					</li>
					<li>
						- Search without auto-complete with <span className="text-blue">CTRL</span>+
						<span className="text-blue">ENTER</span>
					</li>
					<li>
						- Use <span className="text-blue">TAB</span> and{" "}
						<span className="text-blue">SHIFT</span>+
						<span className="text-blue">TAB</span> to cycle through filtered links
					</li>
					<li>
						- Use <span className="text-blue">CTRL</span>+
						<span className="text-blue">C</span> to clear prompt
					</li>
					<li>
						- Use <span className="text-blue">ESC</span> to exit windows
					</li>
				</ul>

				<span className="block mt-line text-green">Built-in Commands</span>
				<ul>
					<li>
						<span className="text-blue">help</span> Display this help
					</li>
					<li>
						<span className="text-blue">fetch</span> Display browser information
					</li>
					<li>
						<span className="text-blue">config</span> Configuration settings
						<ul className="ml-5">
							<li>
								<span className="text-blue">config help</span> Display config help
							</li>
							<li>
								<span className="text-blue">config theme</span> List available
								themes
							</li>
							<li>
								<span className="text-blue">config theme &#60;theme-name&#62;</span>{" "}
								Switches theme
							</li>
							<li>
								<span className="text-blue">config import &#60;url&#62;</span>{" "}
								Imports remote config JSON
							</li>
							<li>
								<span className="text-blue">config edit</span> Opens local config in
								editor
							</li>
							<li>
								<span className="text-blue">config reset</span> Resets to default
								config
							</li>
						</ul>
					</li>
				</ul>

				<span className="block mt-line text-green">Search Aliases</span>
				<ul>
					{settings.search.shortcuts.map((cmd, index) => {
						return (
							<li key={index}>
								<span className="text-blue">{cmd.alias} </span> {cmd.name}
							</li>
						)
					})}
				</ul>
				<ul>
					<li className="my-line">
						Press <span className="text-blue">ESC</span> to continue...
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Help

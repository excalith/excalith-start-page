import Settings from "@/utils/settings"
import Prompt from "@/components/Prompt"

const Help = ({ closeCallback }) => {
	return (
		<div id="help" className="container-fluid" onClick={closeCallback}>
			<div className="row">
				<span>
					<Prompt command="help" />
				</span>

				<span className="title">Usage</span>
				<ul>
					<li>- Filter links by typing in the prompt</li>
					<li>
						- Unfiltered prompt will search using default search
						engine
					</li>
					<li>- Launch URL's directly from prompt</li>
					<li>- Use CTRL+C to clear prompt</li>
					<li>- Use ENTER to exit windows</li>
				</ul>

				<span className="title">Built-in Commands</span>
				<ul>
					<li>
						<span className="accent">help</span> Display this help
					</li>
					<li>
						<span className="accent">fetch</span> Display browser
						information
					</li>
					<li>
						<span className="accent">config</span> Configuration
						menu
						<ul>
							<li>
								<span className="accent">
									config import [url]
								</span>{" "}
								Imports remote config JSON
							</li>
							<li>
								<span className="accent">config export</span>{" "}
								Exports local config
							</li>
							<li>
								<span className="accent">config reset</span>{" "}
								Resets to default config
							</li>
						</ul>
					</li>
				</ul>

				<span className="title">Custom Commands</span>
				<ul>
					{Settings.search.shortcuts.map((cmd, index) => {
						return (
							<li key={index}>
								<span className="accent">{cmd.alias}</span>{" "}
								{cmd.name}
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Help

import Settings from "@/utils/settings"

const Help = ({ closeCallback }) => {
	return (
		<div id="help" className="container-fluid" onClick={closeCallback}>
			<div className="row">
				<h1>Help</h1>
				<p>Usage:</p>
				<ul>
					<li>Filter links by typing in the prompt</li>
					<li>
						Unfiltered prompt will search using default search
						engine
					</li>
					<li>Launch URL's directly from prompt</li>
					<li>Use CTRL+C to clear prompt</li>
					<li>
						Use custom commands to search using different services
					</li>
				</ul>
				<h1>Built-in Commands</h1>
				<ul>
					<li>
						<span>help:</span> Display this help
					</li>
					<li>
						<span>nfetch:</span> Display information
					</li>
				</ul>
				<h1>Custom Commands</h1>
				<ul>
					{Settings.search.shortcuts.map((cmd, index) => {
						return (
							<li key={index}>
								<span>{cmd.alias}:</span> {cmd.name}
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Help

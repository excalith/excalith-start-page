function Error({ statusCode }) {
	return (
		<div
			className={`absolute w-full h-auto transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-terminal bg-window-color max-w-terminal p-terminal top-1/2 left-1/2 ${
				settings.terminal.windowGlow && "window-glow"
			}`}
			style={windowHeight}
			ref={windowRef}>
			<p>
				{statusCode
					? `An error ${statusCode} occurred on server`
					: "An error occurred on your end."}
			</p>
		</div>
	)
}

Error.getInitialProps = ({ res, err }) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404
	return { statusCode }
}

export default Error

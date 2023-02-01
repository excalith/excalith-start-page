import is from "is_js"

export function getBrowser() {
	// return "test"
	if (is.firefox()) return "firefox"
	else if (is.chrome()) return "chromium"
	else if (is.opera()) return "opera"
	else if (is.edge()) return "edge"
	else if (is.safari()) return "safari"
	else return "unknown"
}

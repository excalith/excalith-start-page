import { isURL } from "@/utils/isURL"

export async function fetchAsset(assetPath) {
	if (!assetPath) {
		// If assetPath is null or undefined, return an empty string
		return ""
	}
	if (isURL(assetPath)) {
		// If it's a URL, return it directly
		return assetPath
	} else {
		// If it's not a URL, make an API call to fetch the asset
		const response = await fetch(`/api/getData?file=${assetPath}`)
		const data = await response
			.clone()
			.json()
			.catch(() => response.blob())
		if (data.warning) {
			console.log("File not found: " + assetPath)
			return "" // Return an empty string
		}
		// Create a blob URL for the asset data
		const url = URL.createObjectURL(data)
		return url
	}
}

import { useSettings } from "@/context/settings"
import useFetchData from "@/hooks/useFetchData"

const Prompt = ({ command, showSymbol = true }) => {
	const { settings } = useSettings()
	const [browserData] = useFetchData()
	const lower_username = settings.username.toLowerCase()
	const promptSettings = settings.prompt

	return (
		<span className="cursor-default">
			<span className={`text-${promptSettings.userColor}`}>{lower_username}</span>
			<span className={`text-${promptSettings.atColor}`}>@</span>
			<span className={`text-${promptSettings.hostColor}`}>{browserData.browserLower}</span>
			{showSymbol && (
				<span className={`text-${promptSettings.promptColor}`}>
					{" "}
					{promptSettings.promptSymbol}{" "}
				</span>
			)}
			{command && <span className="text-white">{command}</span>}
		</span>
	)
}

export default Prompt

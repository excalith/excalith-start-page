import Meta from "@/components/Meta"
import Terminal from "@/components/Terminal"
import "@fontsource/fira-code/400.css"
import "@fontsource/fira-code/700.css"

export default function Home() {
	return (
		<main className={"transition-all duration-200 ease-in-out"}>
			<Meta />
			<Terminal />
		</main>
	)
}

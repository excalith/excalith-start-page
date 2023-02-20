import Meta from "@/components/Meta"
import Terminal from "@/components/Terminal"
import { Fira_Code } from "@next/font/google"

const firaCode = Fira_Code({
	weight: "500",
	subsets: ["latin"]
})

export default function Home() {
	return (
		<main
			className={`transition-all duration-200 ease-in-out ${firaCode.className}`}>
			<Meta />
			<Terminal />
		</main>
	)
}

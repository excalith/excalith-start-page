import Link from "@/components/Link"

const Section = ({ section, filter }) => {
	return (
		<div>
			<h1 className={`font-medium mt-1 mb-2 text-${section.color}`}>
				{section.title}
			</h1>

			{section.links.map((link, index) => {
				{
					return (
						<Link
							className="text-white"
							key={index}
							linkData={link}
							filter={filter}
						/>
					)
				}
			})}
		</div>
	)
}

export default Section

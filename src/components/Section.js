import Link from "@/components/Link"

const Section = ({ section, filter }) => {
	return (
		<div className="section col-sm-4">
			<h1 className={section.color}>{section.title}</h1>

			{section.links.map((link, index) => {
				{
					return (
						<Link
							className="white"
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

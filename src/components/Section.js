import Link from "@/components/Link"

const Section = ({ section, filter }) => {
	const alignment = section.align || "left"
	return (
		<div className={`mb-4 align-${alignment}`}>
			<h2 className={`text-title font-bold mt-0 mb-2 cursor-default text-${section.color}`}>
				{section.title}
			</h2>

			{section.links.map((link, index) => {
				{
					return (
						<Link className="font-normal" key={index} linkData={link} filter={filter} />
					)
				}
			})}
		</div>
	)
}

export default Section

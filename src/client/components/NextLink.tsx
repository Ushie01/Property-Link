import Link from "next/link";
import React from "react";
type Props = {
	items: string[];
	column: Boolean;
	href: string;
};

const NextLink = ({ items, column, href }: Props) => {
	return (
		<div
			className={`flex ${
				column ? `flex-col space-y-7` : `flex-row space-x-12 text-xs`
			}`}
		>
			{items.map((itemLink, index): any => (
				<Link
					className='raleway-normal translate-y-2 text-moon-16 hover:text-picollo-50 hover:scale-105 hover:duration-400'
					href={href}
					key={index}
				>
					{itemLink}
				</Link>
			))}
		</div>
	);
};

export default NextLink;

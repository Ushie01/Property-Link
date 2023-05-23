import { useState } from "react";
import Image, { StaticImageData } from "next/image";

type AgentProps = {
	img: string | StaticImageData;
	name: string;
	comment: string;
};

const Card = ({ img, name, comment }: AgentProps) => {
	return (
		<div className='relative w-96'>
			<Image src={img} alt='Image' />
			<div className='absolute top-0 bottom-5 left-0 flex h-full w-full flex-col items-start justify-end space-y-4 p-8 text-white'>
				<p className='raleway-normal text-2xl font-bold'>{name}</p>
				<p className='raleway-normal text-xl text-white'>{comment}</p>
			</div>
		</div>
	);
};

export default Card;

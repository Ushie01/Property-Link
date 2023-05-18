import { CLIENT_PROPERTY } from "../../../../../constants/data";
import { Button } from '@heathmont/moon-core-tw';
import Image from "next/image";


const Card = () => {
	return (
		<div className='flex flex-col justify-center lg:flex-row items-center mb-20 lg:justify-between'>
			{CLIENT_PROPERTY.map((value, index) => (
				<div
					key={index}
					className='flex flex-col items-center justify-center 2sm:mt-16 lg:mt-0 space-y-10 rounded-lg text-center'
				>
					<Image
						src={value.image}
						width={370}
						height={370}
						alt='svg'
						className='rounded-md duration-150 hover:scale-105'
					/>
					<p className='text-wrap m-auto mt-2 text-xl font-bold w-full'>
						{value.text}
					</p>
					<Button className='rounded-full border-2 w-52 p-7 text-md text-gray-400 duration-150 font-bold hover:scale-105'>
						263 Properties
					</Button>
				</div>
			))}
		</div>
	);
};

export default Card;

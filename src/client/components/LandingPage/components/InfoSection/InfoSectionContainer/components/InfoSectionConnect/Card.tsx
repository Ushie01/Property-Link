import Image from "next/image";
import { CONNECT_CLIENT_COMMENT } from "../../../../../constants/data";

const Card = () => {
	return (
		<div className='relative -mt-5 grid grid-cols-3 gap-10'>
			{CONNECT_CLIENT_COMMENT.map((value, index) => (
				<div
					key={index}
					className='flex flex-col items-center justify-center space-y-5 rounded-lg bg-white p-8 text-center shadow-md'
				>
					<div className='flex h-16 w-16 items-center justify-center rounded-full bg-picollo-50'>
						<Image src={value.image} width={30} height={30} alt='svg' />
					</div>
					<p className='text-2xl font-bold text-black'>{value.value}</p>
					<p>{value.text}</p>
				</div>
			))}
		</div>
	);
};

export default Card;

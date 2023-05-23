import Image, { StaticImageData } from "next/image";
import {
	OtherFlame,
	MapsMarker,
	SportSwimming,
	TravelBed,
	GenericHeart,
} from "@heathmont/moon-icons-tw";
import Rectangle13 from "./../contants/assets/Rectangle13.png";
import Shower from "@/client/components/Svg/Shower";
import Star from "./StarRating";

type CardProps = {
	image: string | StaticImageData;
	type: string;
	location: string;
	amount: string;
	bedroom: string;
	bathroom: string;
	swimpool: string;
};

const Card = ({
	image,
	type,
	location,
	amount,
	bedroom,
	bathroom,
	swimpool,
}: CardProps) => {
	return (
		<div className='relative flex flex-col rounded-lg bg-white shadow-lg'>
			<div className=' flex flex-col items-center justify-center space-y-3 p-4 '>
				<div className='flex w-full items-end justify-end'>
					<div className='flex h-10 w-10 items-center justify-end rounded-full border border-picollo-50'>
						<GenericHeart
							height={30}
							width={30}
							className='m-auto text-picollo-50 '
						/>
					</div>
				</div>
				<Image src={image} alt='image' height={288} width={383} />
			</div>

			<div className='-mt-6 -ml-10 flex w-full items-end justify-start p-6'>
				<Image src={Rectangle13} alt='rectangaleImage' />
				<div className='-ml-32 flex flex-row items-center justify-end space-x-2 text-white '>
					<OtherFlame height={30} width={30} className='mb-3 ml-2' />
					<p className='text-md mb-3 font-extrabold'>Popular</p>
				</div>
			</div>

			<div className='-mt-12 flex flex-col items-start justify-start p-6'>
				<h2 className='text-xl font-bold'>{type}</h2>
				<div className='flex flex-row items-center justify-center'>
					<div className='w-34'>
						<MapsMarker height={45} width={45} />
					</div>
					<p className='2sm:w-76 p-2 lg:w-72'>{location}</p>
				</div>

				<div className='flex w-full flex-row items-center justify-between space-x-4 2sm:mt-1'>
					<Star rating={4} />
					<div className='flex flex-row items-center justify-between space-x-1 p-2 2sm:-ml-10'>
						<p className='font-bold text-picollo-50 2sm:text-xl lg:text-xl'>
							{amount}
						</p>
						<p className='text-gray-500'> / Year</p>
					</div>
				</div>
			</div>
			<hr className='-mt-5' />
			<div className='flex flex-row items-center justify-between p-6'>
				<div className='flex flex-col items-center justify-between space-y-1'>
					<TravelBed height={40} width={40} className='text-picollo-50' />
					<p className='lg:text-md font-extrabold 2sm:text-sm'>{`${bedroom} Bedroom`}</p>
				</div>
				<div className='flex flex-col items-center justify-between space-y-3'>
					<Shower height={30} width={30} color='text-picollo-50' />
					<p className='lg:text-md font-extrabold 2sm:text-sm'>{`${bathroom} Bathroom`}</p>
				</div>
				<div className='flex flex-col items-center justify-between space-y-1'>
					<SportSwimming height={40} width={40} className='text-picollo-50' />
					<p className='lg:text-md font-extrabold 2sm:text-sm'>{`${swimpool} Swin Pool`}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;

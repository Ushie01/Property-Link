import Image, { StaticImageData } from 'next/image';
import {
    OtherFlame,
    MapsMarker,
    SportSwimming,
    TravelBed,
    GenericHeart,
    GenericStar
} from '@heathmont/moon-icons-tw';
import Rectangle13 from './../contants/assets/Rectangle13.png';
import Shower from '@/client/components/Svg/Shower';
import Star from './StarRating'


type CardProps = {
    image: string | StaticImageData,
    type: string,
    location: string,
    amount: string,
    bedroom: string,
    bathroom: string,
    swimpool: string
}

const Card = ({image, type, location, amount, bedroom, bathroom, swimpool}: CardProps) => {
    return (
        <div className='relative flex flex-col shadow-lg bg-white rounded-lg'>
            <div className=" flex flex-col items-center justify-center p-4 space-y-3 ">
                <div className='flex items-end justify-end w-full'>
                    <div className='flex items-center justify-end h-10 w-10 rounded-full border border-picollo-50'>
                        <GenericHeart height={30} width={30} className='text-picollo-50 m-auto '/>
                    </div>
                </div>
                <Image src={image} alt='image' height={288} width={383} />
            </div>

            <div className='flex items-end justify-start p-6 -mt-6 w-full -ml-10'>
                <Image src={Rectangle13} alt='rectangaleImage' />
                <div className='flex flex-row items-center justify-end space-x-2 text-white -ml-32 '>
                    <OtherFlame height={30} width={30} className='mb-3 ml-2' />  
                    <p className='text-md font-extrabold mb-3'>Popular</p>  
                </div>
            </div>

            <div className='flex flex-col items-start justify-start p-6 -mt-12'>
                <h2 className='text-xl font-bold'>{type}</h2>
                <div className="flex flex-row items-center justify-center">
                    <div className='w-34'>
                       <MapsMarker height={45} width={45} />
                    </div>
                    <p className='p-2 lg:w-72 2sm:w-76'>{location}</p>
                </div>

                <div className='flex flex-row items-center justify-between w-full space-x-4 2sm:mt-1'>   
                    <Star size="14" rating={4} />
                    <div className='flex flex-row items-center justify-between 2sm:-ml-10 space-x-1 p-2'>
                        <p className='text-picollo-50 lg:text-xl 2sm:text-xl font-bold'>{amount}</p>
                        <p className='text-gray-500'> / Year</p>
                    </div>
                </div>
            </div>
            <hr className='-mt-5'/>
            <div className='flex flex-row items-center justify-between p-6'>
                <div className='flex flex-col items-center justify-between space-y-1'>
                    <TravelBed height={40} width={40} className='text-picollo-50' />
                    <p className="lg:text-md 2sm:text-sm font-extrabold">{`${bedroom} Bedroom`}</p>
                </div>
                <div className='flex flex-col items-center justify-between space-y-3'>
                    <Shower height={30} width={30} color='text-picollo-50' />
                    <p className="lg:text-md 2sm:text-sm font-extrabold">{`${bathroom} Bathroom`}</p>
                </div>
                <div className='flex flex-col items-center justify-between space-y-1'>
                    <SportSwimming height={40} width={40} className='text-picollo-50' />
                    <p className="lg:text-md 2sm:text-sm font-extrabold">{ `${swimpool} Swin Pool`}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
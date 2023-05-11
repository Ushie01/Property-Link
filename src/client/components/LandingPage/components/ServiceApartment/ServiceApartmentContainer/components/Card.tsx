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
    value: string | StaticImageData;
}

const Card = ({value}: CardProps) => {
    return (
        <div className='relative flex flex-col shadow-lg bg-white rounded-lg'>
            <div className=" flex flex-col items-center justify-center p-6 space-y-3 ">
                <div className='flex items-end justify-end w-full'>
                    <div className='flex items-center justify-end h-10 w-10 rounded-full border border-picollo-50'>
                        <GenericHeart height={40} width={40} className='text-picollo-50'/>
                    </div>
                </div>
                <Image src={value} alt='image' />
            </div>

            <div className='flex items-end justify-start p-6 -mt-4 w-full -ml-10'>
                <Image src={Rectangle13} alt='rectangaleImage' />
                <div className='flex flex-row items-center justify-end space-x-2 text-white -ml-32 '>
                    <OtherFlame height={30} width={30} className='mb-3 ml-2' />  
                    <p className='text-md font-extrabold mb-3'>Popular</p>  
                </div>
            </div>

            <div className='flex flex-col items-start justify-start -mt-10 p-6 space-y-3'>
                <h1 className='text-xl font-bold'>Service Apartment</h1>
                <div className="flex flex-row">
                    <MapsMarker height={50} width={50} />
                    <p className=''>146, Bourdillion Road, Banana Island ikoyi <br /> Lagos</p>
                </div>

                <div className='flex flex-row items-center justify-between w-full space-x-4 mt-4'>
                    <Star />
                    <div className='flex flex-row items-center justify-between space-x-1'>
                        <p className='text-picollo-50 text-2xl font-bold'>₦6,000,000.00</p>
                        <p className='text-gray-500 ml-1'> / Year</p>
                    </div>
                </div>
            </div>
            <hr className='' />
            <div className='flex flex-row items-center justify-between p-6'>
                <div className='flex flex-col items-center justify-between space-y-1'>
                    <TravelBed height={40} width={40} className='text-picollo-50' />
                    <p className="text-md font-bold">5 Bedroom</p>
                </div>
                <div className='flex flex-col items-center justify-between space-y-1'>
                    <Shower height={40} width={40} color='text-picollo-50' />
                    <p className="text-md font-bold">4 Bathrooms</p>
                </div>
                <div className='flex flex-col items-center justify-between space-y-1'>
                    <SportSwimming height={40} width={40} className='text-picollo-50' />
                    <p className="text-md font-bold">2 Swin Pools</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
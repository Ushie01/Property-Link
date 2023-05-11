import Image from 'next/image';
import {
    OtherFlame,
    MapsMarker,
    SportSwimming,
    TravelBed,
    GenericHeart
} from '@heathmont/moon-icons-tw';
import { SERVICE_APARTMENT_DATA } from '../../../../constants/data';
import Shower from './../contants/assets/shower.svg';


const Card = () => {
    return (
        <>  
            {
                SERVICE_APARTMENT_DATA.map((value, index) => (
                    <div key={index} className="flex flex-col items-center justify-center bg-white space-y-3 p-6 rounded-lg">
                        <div className='flex items-end justify-end'>
                            <div className='flex items-center justify-center h-10 w-10 rounded-full border border-picollo-50'>
                                <GenericHeart height={40} width={40} className='text-picollo-50'/>
                            </div>
                        </div>
                        <Image src={value.image} alt='image'  />
                    </div>
                ))
            }
        </>
    )
}

export default Card;
import Image from "next/image";
import { Button } from '@heathmont/moon-core-tw';
import GridDots from "@/client/components/Svg/GridDots";
import Card from "./ContactUsContainer/components/Card";
import apartmentview from '../ContactUs/ContactUsContainer/assets/Group1.png';


const ContactUs = () => {
    return (
        <div className="bg-white lg:p-16 p-4">
            <div className='flex flex-row items-center'>
                <div className="hidden lg:block w-1/3" >
                    <GridDots width='64' height='64' color='#424141' />
                </div>
                <p className='ml-6 lg:text-4xl text-2xl font-bold text-picollo-50 text-center lg:w-2/3 2sm:w-full'>Contact Us</p>
                <div className="hidden lg:block w-1/3"></div>
            </div>
            <div className="flex flex-col lg:items-start lg:justify-start items-center justify-center lg:mt-16 mt-6">
                <p className="font-bold lg:text-2xl text-xl">Reach Us With Ease 247</p>
                <p className="lg:w-1/3 text-xl 2sm:text-center lg:text-start mt-7 w-80">Is there a problem finding your own safe-haven? need a guide in buying or renting a property or you have residential issues, You can reach us here</p>
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-between lg:mt-24 mt-36">
                <div className="lg:grid lg:grid-cols-2 lg:gap-5 2sm:space-y-10 lg:space-y-0 lg:w-1/2 w-3/4 -mt-24 lg:p-10">
                    <Card />
                </div>
				<div className='lg:-mt-10 flex lg:flex-col lg:m-auto 2sm:mt-16 lg:w-1/2 w-96 p-2'>
					<Image
						src={apartmentview}
						alt='Image'
						className='w-[1200px] hover:scale-105 duration-125'
					/>
				</div>
            </div>
            <div className="flex flex-col items-center justify-center m-auto lg:w-[1000px] p-8 bg-picollo-50 rounded-lg">
                <h1 className="font-extrabold lg:text-4xl text-2xl text-white">Get Started with us Today</h1>
                <p className="text-center text-white mt-4 text-md">We are a full-fledge real estate platform that ensure you get the best housing deals <br /> for rent or lease or sale </p>
                <Button size={'xl'} className="text-picollo-50 font-bold mt-12 bg-white rounded-xl w-64">Get Started</Button>
            </div>
        </div>
    )
}

export default ContactUs;
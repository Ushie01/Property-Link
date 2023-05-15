import Image from "next/image";
import { Button } from '@heathmont/moon-core-tw';
import GridDots from "@/client/components/Svg/GridDots";
import Card from "./ContactUsContainer/components/Card";
import apartmentview from '../ContactUs/ContactUsContainer/assets/Group1.png';


const ContactUs = () => {
    return (
        <div className="bg-white p-16">
            <div className='flex flex-row items-center'>
                <div className="w-1/3" >
                    <GridDots width='64' height='64' color='#424141' />
                </div>
                <p className='ml-6 text-4xl font-bold text-picollo-50 text-center w-2/3'>Contact Us</p>
                <div className="w-1/3"></div>
            </div>
            <div className="flex flex-col items-start justify-start mt-16">
                <p className="font-bold text-2xl">Reach Us With Ease 247</p>
                <p className="w-1/3 text-md mt-7">Is there a problem finding your own safe-haven? need a guide in buying or renting a property or you have residential issues, You can reach us here</p>
            </div>
            <div className="flex flex-row items-center justify-between mt-24">
                <div className="grid grid-cols-2 gap-5 w-1/2 -mt-24 p-10">
                    <Card />
                </div>
				<div className='-mt-10 flex flex-col m-auto w-1/2 p-2'>
					<Image
						src={apartmentview}
						alt='Image'
						className='w-1200px hover:scale-105 duration-125'
					/>
				</div>
            </div>
            <div className="flex flex-col items-center justify-center m-auto w-[1000px] p-8 bg-picollo-50 rounded-lg">
                <h1 className="font-bold text-4xl text-white">Get Started with us Today</h1>
                <p className="text-center text-white mt-4">We are a full-fledge real estate platform that ensure you get the best housing deals <br /> for rent or lease or sale </p>
                <Button size={'xl'} className="text-picollo-50 font-bold mt-12 bg-white rounded-xl w-64">Get Started</Button>
            </div>
        </div>
    )
}

export default ContactUs;
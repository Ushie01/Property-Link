import Image from "next/image";
import { Button } from "@heathmont/moon-core-tw";
import GridDots from "@/client/components/Svg/GridDots";
import Card from "./ContactUsContainer/components/Card";
import apartmentview from "../ContactUs/ContactUsContainer/assets/Group1.png";

const ContactUs = () => {
	return (
		<div className='bg-white p-4 lg:p-16'>
			<div className='flex flex-row items-center'>
				<div className='hidden w-1/3 lg:block'>
					<GridDots width='64' height='64' color='#424141' />
				</div>
				<p className='raleway-bold ml-6 text-center text-2xl text-picollo-50 2sm:w-full lg:w-2/3 lg:text-4xl'>
					Contact Us
				</p>
				<div className='hidden w-1/3 lg:block'></div>
			</div>
			<div className='mt-6 flex flex-col items-center justify-center lg:mt-16 lg:items-start lg:justify-start'>
				<p className='raleway-bold text-xl lg:text-2xl'>
					Reach Us With Ease 247
				</p>
				<p className='raleway-light mt-7 w-80 text-xl 2sm:text-center lg:w-1/3 lg:text-start'>
					Is there a problem finding your own safe-haven? need a guide in buying
					or renting a property or you have residential issues, You can reach us
					here
				</p>
			</div>
			<div className='mt-36 flex flex-col items-center justify-between lg:mt-24 lg:flex-row'>
				<div className='-mt-24 w-3/4 2sm:space-y-10 lg:grid lg:w-1/2 lg:grid-cols-2 lg:gap-5 lg:space-y-0 lg:p-10'>
					<Card />
				</div>
				<div className='flex w-96 p-2 2sm:mt-16 lg:m-auto lg:-mt-10 lg:w-1/2 lg:flex-col'>
					<Image
						src={apartmentview}
						alt='Image'
						className='duration-125 w-[1200px] hover:scale-105'
					/>
				</div>
			</div>
			<div className='m-auto flex flex-col items-center justify-center rounded-lg bg-picollo-50 p-8 lg:w-[1000px]'>
				<h1 className='raleway-bold text-2xl text-white lg:text-4xl'>
					Get Started with us Today
				</h1>
				<p className='raleway-light text-md mt-4 text-center text-white'>
					We are a full-fledge real estate platform that ensure you get the best
					housing deals <br /> for rent or lease or sale{" "}
				</p>
				<Button
					size={"xl"}
					className='raleway-bold mt-12 w-64 rounded-xl bg-white text-picollo-50'
				>
					Get Started
				</Button>
			</div>
		</div>
	);
};

export default ContactUs;

import React from "react";
import Image from "next/image";
import apartmentview from "@/client/components/LandingPage/components/Header/assets/apartmentView.png";
import ratingImg from "@/client/components/LandingPage/components/Header/assets/ratingImg.png";
import HeaderSearchSection from "./HeaderSectionSearch";
import Rating from "./Rating";
import { Button } from "@heathmont/moon-core-tw";

const HeaderSection = () => {
	return (
		<>
			<div className=' relative mt-16 flex flex-row items-center justify-between'>
				<div className='mt-12 flex h-max w-6/12 flex-col items-start justify-start '>
					<p className='helvetica-bold text-4xl font-bold text-white'>
						Discover The Most Affordable <br /> Real Estate Deals
					</p>
					<p className='raleway-normal mt-8 text-xl text-white'>
						The best platform to find suitable house units for <br /> rent,
						lease or sale in the best environment beyond <br /> your wildest
						dreams
					</p>
					<div className='mt-8'>
						<Button className='rounded-xl bg-picollo-50 px-8 py-8 lg:w-[215px]'>
							<p className='text-xl'>Get Started</p>
						</Button>
					</div>
					<div className='mt-28'>
						<Rating />
					</div>
				</div>
				<Image
					src={ratingImg}
					alt='Rating image'
					className='-ml-12 mt-44 h-[80px] w-[80px]'
				/>
				<div className='-mt-10 flex w-5/12 flex-col items-start justify-start p-2'>
					<Image
						src={apartmentview}
						alt='Image'
						className='h-[500px] w-[500px]'
					/>
				</div>
			</div>
			<HeaderSearchSection />
		</>
	);
};

export default HeaderSection;

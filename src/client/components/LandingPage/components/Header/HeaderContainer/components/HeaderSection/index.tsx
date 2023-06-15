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
			<div className='relative mt-16 flex lg:flex-row flex-col items-center justify-between'>
				<div className='lg:mt-12 flex h-max lg:w-6/12 flex-col lg:items-start lg:justify-start items-center justify-center lg:text-start 2sm:text-center'>
					<p className='hidden lg:block helvetica-bold text-4xl font-bold text-white'>
						Discover The Most Affordable <br /> Real Estate Deals
					</p>
					<p className='lg:hidden helvetica-bold text-2xl  font-bold text-white'>
						Discover The Most <br /> Affordable Real Estate Deals
					</p>
					<Image
						src={ratingImg}
						alt='Rating image'
						className='lg:hidden lg:-ml-12 -mr-60  lg:mt-44 mt-8 h-[60px] w-[60px]'
					/>
					<div className='lg:hidden -mt-5 flex flex-col items-start justify-start p-10'>
						<Image
							src={apartmentview}
							alt='Image'
							className='h-[250px] w-[500px] '
						/>
					</div>
					<p className='hidden lg:block raleway-normal mt-8 text-xl text-white'>
						The best platform to find suitable house units for <br /> rent,
						lease or sale in the best environment beyond <br /> your wildest
						dreams
					</p>
					<p className='lg:hidden raleway-normal mt-5 text-xl text-white font-thin'>
						The best platform to find suitable house units for rent,
						lease or sale in the best environment beyond your wildest dreams
					</p>
					<div className='lg:mt-8 mt-20'>
						<Button className='rounded-xl bg-picollo-50 px-8 py-8 lg:w-[215px] w-[300px]'>
							<p className='text-xl text-white'>Get Started</p>
						</Button>
					</div>
					<div className='lg:mt-28 mt-12 mb-12'>
						<Rating />
					</div>
				</div>
				<Image
					src={ratingImg}
					alt='Rating image'
					className='hidden lg:block -ml-12 mt-44 h-[80px] w-[80px]'
				/>
				<div className='-mt-10 flex w-5/12 flex-col items-start justify-start p-2'>
					<Image
						src={apartmentview}
						alt='Image'
						className='hidden h-[500px] w-[500px] lg:block'
					/>
				</div>
			</div>
			<HeaderSearchSection />
		</>
	);
};

export default HeaderSection;

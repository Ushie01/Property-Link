import React from "react";
import Image from "next/image";
import apartmentview from "@/client/components/LandingPage/components/Header/assets/apartmentView.png";
import ratingImg from "@/client/components/LandingPage/components/Header/assets/ratingImg.png";
import HeaderSearchSection from "./HeaderSectionSearch";
import Rating from "./Rating";
import { Button } from "@heathmont/moon-core-tw";
import SignUpButton from "../HeaderNavbar/SignupButton";

const HeaderSection = () => {
	return (
		<>
			<div className='relative mt-16 flex flex-col items-center justify-between lg:flex-row'>
				<div className='flex h-max flex-col items-center justify-center 2sm:text-center lg:mt-12 lg:w-6/12 lg:items-start lg:justify-start lg:text-start'>
					<p className='helvetica-bold hidden text-4xl font-bold text-white lg:block'>
						Discover The Most Affordable <br /> Real Estate Deals
					</p>
					<p className='helvetica-bold text-2xl font-bold  text-white lg:hidden'>
						Discover The Most <br /> Affordable Real Estate Deals
					</p>
					<Image
						src={ratingImg}
						alt='Rating image'
						className='-mr-60 mt-8 h-[60px]  w-[60px] lg:-ml-12 lg:mt-44 lg:hidden'
					/>
					<div className='-mt-5 flex flex-col items-start justify-start p-10 lg:hidden'>
						<Image
							src={apartmentview}
							alt='Image'
							className='h-[250px] w-[500px] '
						/>
					</div>
					<p className='raleway-normal mt-8 hidden text-xl text-white lg:block'>
						The best platform to find suitable house units for <br /> rent,
						lease or sale in the best environment beyond <br /> your wildest
						dreams
					</p>
					<p className='raleway-normal mt-5 text-xl font-thin text-white lg:hidden'>
						The best platform to find suitable house units for rent, lease or
						sale in the best environment beyond your wildest dreams
					</p>
					<div className='mt-20 lg:mt-8'>
						<SignUpButton
							title='Get Started'
							className='w-[300px] rounded-xl bg-picollo-50 py-6 text-lg text-white lg:w-[215px]'
						/>
					</div>
					<div className='mt-12 mb-12 lg:mt-28'>
						<Rating />
					</div>
				</div>
				<Image
					src={ratingImg}
					alt='Rating image'
					className='-ml-12 mt-44 hidden h-[80px] w-[80px] lg:block'
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

import Card from "./Card";
import Image from "next/image";
import Frame24 from "./../../assests/Frame24.svg";
import GridDots from "@/client/components/Svg/GridDots";
import { InfoSectionTitle } from "../InfoSectionTitle";
import Ellipse from "@/client/components/Svg/Ellipse";
import GriddotsVertical from "@/client/components/Svg/GriddotsVertical";

const InfoSectionConnect = () => {
	return (
		<div className='lg:mt-12 lg:rounded-md 2sm:w-full bg-lightPicollo-100 lg:p-12 p-6 2sm:pt-12 2sm:pb-16'>
			<div className='2sm:hidden lg:block -mt-20 ml-[750px] flex lg:justify-end justify-center'>
				<GriddotsVertical />
			</div>
			<InfoSectionTitle text={"What we do"} />
			<div className='flex lg:flex-row flex-col items-center justify-between 2sm:mt-7 2sm:space-y-12 lg:space-y-1'>
				<p className='lg:w-1/2 2sm:text-center lg:text-start'>
					We connect clients with housing agents that post housing unit for
					rent, lease or sale on our platform at the best rate.{" "}
				</p>
				<button className='h-12 w-40 rounded-md bg-[#D8D4FF] font-bold text-picollo-50 shadow-lg duration-150 hover:scale-105'>
					See More
				</button>
			</div>
			<div className='relative'>
				<div className='2sm:hidden lg:flex lg:items-center lg:justify-center'>
					<Ellipse />
				</div>
				<div className='lg:hidden flex lg:justify-center justify-center 2sm:mt-8'>
					<GriddotsVertical />
				</div>
				<Card />
			</div>
		</div>
	);
};

export default InfoSectionConnect;

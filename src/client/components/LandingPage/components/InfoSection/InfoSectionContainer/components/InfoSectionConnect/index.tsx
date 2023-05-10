import Card from "./Card";
import Image from "next/image";
import Frame24 from "./../../assests/Frame24.svg";
import { InfoSectionTitle } from "../InfoSectionTitle";
import Ellipse from "@/client/components/Svg/Ellipse";
import GriddotsVertical from "@/client/components/Svg/GriddotsVertical";

const InfoSectionConnect = () => {
	return (
		<div className='mt-12 space-y-5 rounded-md bg-lightPicollo-100 p-12'>
			<div className='-mt-20 mr-40 flex justify-end'>
				<GriddotsVertical />
			</div>
			<InfoSectionTitle text={"What we do"} />
			<div className='flex flex-row items-center justify-between'>
				<p className='w-1/2'>
					We connect clients with housing agents that post housing unit for
					rent, lease or sale on our platform at the best rate.{" "}
				</p>
				<button className='h-12 w-40 rounded-md bg-[#D8D4FF] font-bold text-picollo-50 shadow-lg duration-150 hover:scale-105'>
					See More
				</button>
			</div>
			<div className='relative'>
				<div className='flex items-center justify-center'>
					<Ellipse />
				</div>
				<Card />
			</div>
		</div>
	);
};

export default InfoSectionConnect;

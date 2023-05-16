import { InfoSectionTitle } from "../InfoSectionTitle";
import Card from "./Card";
import GridDots from "@/client/components/Svg/GridDots";

const InfoSectionProperties = () => {
	return (
		<div className='lg:mt-28 mt-10 rounded-md 2sm:p-6 lg:p-0'>
			<div className='flex flex-row items-center justify-between'>
				<div className="2sm:hidden lg:block">
			     	<GridDots width='64' height='64' color='#424141' />
				</div>
				<InfoSectionTitle text={"Move To What Moves You"} />
			</div>
			<p className="lg:hidden text-center mt-12">We connect clients with housing agents that post housing unit for rent, lease or sale on our platform at the best rate. </p>
			<div className='lg:mt-16'>
				<Card />
			</div>
			<div className='lg:mt-20 2sm:hidden lg:block'>
				<InfoSectionTitle text={"Top Reviewed House Units"} />
			</div>
		</div>
	);
};

export default InfoSectionProperties;

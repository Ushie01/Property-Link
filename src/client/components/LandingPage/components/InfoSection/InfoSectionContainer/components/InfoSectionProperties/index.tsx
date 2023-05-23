import useInfoSection from "../../hooks/useInfoSection";
import { InfoSectionTitle } from "../InfoSectionTitle";
import Card from "./Card";
import GridDots from "@/client/components/Svg/GridDots";

const InfoSectionProperties = () => {
	useInfoSection();
	return (
		<div className='mt-10 rounded-md 2sm:p-6 lg:mt-28 lg:p-0'>
			<div className='flex flex-row items-center justify-end lg:justify-between'>
				<div className='2sm:hidden lg:block'>
					<GridDots width='64' height='64' color='#424141' />
				</div>
				<InfoSectionTitle text='Move To What Moves You' color='bg-picollo-50' />
			</div>
			<p className='mt-12 text-center text-xl lg:hidden'>
				We connect clients with housing agents that post housing unit for rent,
				lease or sale on our platform at the best rate.{" "}
			</p>
			<div className='lg:mt-16'>
				<Card />
			</div>
			<div className='2sm:hidden lg:mt-20 lg:block'>
				<InfoSectionTitle
					text='Top Reviewed House Units'
					color='bg-picollo-50'
				/>
			</div>
		</div>
	);
};

export default InfoSectionProperties;

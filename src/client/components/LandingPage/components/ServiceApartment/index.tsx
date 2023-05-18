import ServiceCarousel from "./ServiceApartmentContainer/components/Carousel";
import GridDots from "@/client/components/Svg/GridDots";
import { InfoSectionTitle } from "../InfoSection/InfoSectionContainer/components/InfoSectionTitle";


const ServiceApartment = () => {
    return (
        <div className="2sm:p-3 lg:p-16 bg-lightPicollo-100">
			<div className='lg:hidden 2sm:block flex flex-row items-center justify-between p-4'>
				<div className="2sm:hidden lg:block">
			     	<GridDots width='64' height='64' color='#424141' />
				</div>
				<InfoSectionTitle text={"Move To What Moves You"} />
			</div>
           <ServiceCarousel />
        </div>
    )
}

export default ServiceApartment;
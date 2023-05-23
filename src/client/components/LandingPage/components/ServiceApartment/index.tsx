import ServiceCarousel from "./ServiceApartmentContainer/components/Carousel";
import GridDots from "@/client/components/Svg/GridDots";
import { InfoSectionTitle } from "../InfoSection/InfoSectionContainer/components/InfoSectionTitle";


const ServiceApartment = () => {
    return (
        <div className="2sm:p-3 bg-lightPicollo-100">
			<div className='lg:hidden 2sm:block flex flex-row items-center justify-between pt-10 pb-10'>
				<div className="2sm:hidden lg:block">
			     	<GridDots width='64' height='64' color='bg-picollo-50' />
				</div>
				<InfoSectionTitle text={"Move To What Moves You"} color="bg-picollo-50" />
			</div>
			<div className="2sm:mb-10 lg:mt-0">
                <ServiceCarousel />
			</div>
        </div>
    )
}

export default ServiceApartment;
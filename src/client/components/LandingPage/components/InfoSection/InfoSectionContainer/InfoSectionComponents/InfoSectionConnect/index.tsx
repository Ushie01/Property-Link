import Card from "./Card";
import Image from "next/image";
import Ellipse from './../../assests/Ellipse.svg';
import Frame24 from './../../assests/Frame24.svg';
import { InfoSectionTitle } from "../../constant/InfoSectionTitle";


const InfoSectionConnect = () => {
    return (
        <div className="p-12 bg-lightPicollo-100 rounded-md mt-12 space-y-5">
            <div className="flex flex-row justify-end">
                <Image src={Frame24} alt="ellipse" width={40} height={72} className="-mt-24 top-0 mr-80"/>
            </div>
            <InfoSectionTitle text={'What we do'}/>
            <div className="flex flex-row items-center justify-between">
                <p className="w-1/2">We connect clients with housing agents that post housing unit for rent, lease or sale on our platform at the best rate. </p>
                <button className="h-12 w-40 shadow-lg text-picollo-50 font-bold rounded-md bg-[#D8D4FF] hover:scale-105 duration-150">See More</button>
            </div>
            <div className="relative">
                <div className="flex items-center justify-center">
                    <Image src={Ellipse} alt="ellipse" width={72} height={72} />
                </div>
                <Card />
            </div>
        </div>
    )
}

export default InfoSectionConnect;
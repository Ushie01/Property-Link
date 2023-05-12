import Image from "next/image";
import { Button } from '@heathmont/moon-core-tw';
import { InfoSectionTitle } from "../InfoSection/InfoSectionContainer/components/InfoSectionTitle";
import Ellipse54 from "./WayToRentContainer/constants/assets/Ellipse54.png";
import Ellipse55 from "./WayToRentContainer/constants/assets/Ellipse55.png";
import Ellipse56 from "./WayToRentContainer/constants/assets/Ellipse56.png";


const WayToRent = () => {
    return (
        <div className="p-16">
            <div className='flex flex-row items-start justify-start'>
				<InfoSectionTitle text={"Trusted Way to Rent, Lease or Sell your Property"} />
            </div>
            <div className="flex flex-row items-center justify-between mt-2">
                <div className="w-3/6 text-2xl font-thin">
                    <p>
                        Unlock endless possibilities and unleash your full potential with a career as a real estate agent with us today, gain access to a wide variety of clients as well as resources to position you for success whether your looking to rent, lease or sell. With flexibility to set your own schedule, the potential for high earnings and the satisfaction of helping people own their homes.
                    </p>
                    <Button className='h-12 w-64 mt-66 rounded-xl bg-black text-white font-bold'>Sign up as an House Agent</Button>
                </div>
                <div className="flex flex-col items-end justify-end space-y-5 w-2/5">
                    <div className="flex flex-row items-center justify-end w-full space-x-12">
                        <Image src={Ellipse54} alt="Ellipse54" height={150} width={150} className="mt-32" />
                        <Image src={Ellipse55} alt="Ellipse55" height={250} width={250} />
                    </div>
                    <div>
                        <Image src={Ellipse56} alt="Ellipse56" height={350} width={350} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WayToRent;
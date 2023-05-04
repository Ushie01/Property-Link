import { ControlsClose } from "@heathmont/moon-icons-tw";
import NextLink from "@/client/components/NextLink";
import SecondButton from "@/client/shared/secondButton";
import Rating from "../HeaderComponents/ratingHeader";
import Image from "next/image";
import Frame13 from "../../../../../../../assets/Frame13.png";
import Group1 from "../../../../../../../assets/Group1.png";

const HeaderItems = () => {
    const nav = ['Agent', 'Properties', 'Services', 'Contact Us'];
    return (
        <>
            <div className="relative flex flex-row items-center justify-between mt-16">
                <div className="flex flex-col items-start justify-start w-6/12 h-max ">
                    <p className="font-bold text-3xl text-white">
                        Discover The Most Affordable <br /> Real Estate Deals
                    </p>
                    <p className='text-gray-500 text-md mt-8'>The best platform to find suitable house units for <br /> rent, lease or sale in the best environment beyond <br /> your wildest dreams</p>
                    <div className='mt-16'>
                        <SecondButton text='Get Started' />                            
                    </div>
                    <div className='mt-28'>
                        <Rating />
                    </div>
                </div>
                <Image src={Frame13} alt='Image' className="-ml-12 mt-44 h-[80px] w-[80px]" />
                <div className="flex flex-col items-start justify-start p-2 w-5/12 -mt-10">
                    <Image src={Group1} alt='Image' className="h-[500px] w-[500px]" />
                </div>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden">
                 <div className="flex flex-col text-xl text-white p-8 space-y-8  bg-[#424141]">
                     <div className="flex flex-row items-center justify-end">
                         <ControlsClose fontSize={44}/>
                     </div>
                     <NextLink
                         items={nav}
                         column={true}
                         href='#'
                     />
                 </div>
            </div>
        </>
    )
}

export default HeaderItems;
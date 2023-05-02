import cancel from "./../../../assets/x-lg.svg";
import ButtonOne from "@/client/shared/buttonOne";
import Image from "next/image";


const Header = () => {
    return (
        <>
            <div className="hidden lg:block bg-[#424141] p-8">
                <div className="flex flex-row items-center justify-between text-white">
                    <p className="text-xl font-bold">LOGO.</p>
                    <div className="flex flex-row items-center justify-center text-sm space-x-3">
                        <p>Agents</p>
                        <p>Properties</p>
                        <p>Services</p>
                        <p>Contact Us</p>
                    </div>
                    <ButtonOne width={'28'} text={'Sign Up'} />
                </div>
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-start justify-start">
                            <p className="text-2xl font-bold">Discover The Most Affordable <br />Real Estate Deals</p>
                            <p></p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="lg:hidden">
                <div className="flex flex-col text-xl text-white p-8 space-y-12 bg-[#424141]">
                    <div className="flex flex-row items-center justify-end">
                        <Image src={cancel} alt={cancel} className="h-8 w-8" />
                    </div>
                    <p>Agents</p>
                    <p>Properties</p>
                    <p>Services</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </>
    )
}

export default Header;
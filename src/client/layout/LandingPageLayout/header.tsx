import cancel from "../../../assest/x-lg.svg";
import ButtonOne from "@/client/shared/buttonOne";
import Image from "next/image";


const Header = () => {
    return (
        <>
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between text-white p-8 bg-[#424141]">
                    <p className="text-xl font-bold">LOGO.</p>
                    <div className="flex flex-row items-center justify-center text-sm space-x-3">
                        <p>Agents</p>
                        <p>Properties</p>
                        <p>Services</p>
                        <p>Contact Us</p>
                    </div>
                    <ButtonOne width={'28'}/>
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
import Image from 'next/image';
import arrowUp from './../../../assets/arrow-up.svg';
import arrowUpMobile from './../../../assets/arrow-upMobile.svg'


const Footer = () => {
    return (
        <div className="lg:p-8 lg:block  lg:bg-black lg:text-white p-7">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-start justify-center">
                    <p className="text-picollo-50 w-12 font-extrabold -mt-1">_______</p>
                    <p className="text-xl font-bold ml-3">LOGO.</p>
                </div>
                <div className="text-xs text-[#D8D4FF]">
                    <p>●●●●●●</p>
                    <p className="-mt-2">●●●●●●</p>
                    <p className="-mt-2">●●●●●●</p>
                    <p className="-mt-2">●●●●●●</p>
                </div>
            </div>
            <div className="lg:text-xs mt-5 text-md">
                <p>Our vision is to provide people with a safe-</p>
                <p>haven at it best prices</p>
            </div>
            <div className="lg:flex lg:flex-row grid grid-cols-2 items-start lg:justify-center md:justify-start lg:text-sm text-lg lg:space-x-24 mt-20">
                <div className="flex flex-col items-start justify-center space-y-1">
                    <p className="text-picollo-50 font-bold">About Us</p>
                    <p>About Us</p>
                    <p>Features</p>
                    <p>News & Blog</p>
                    <p>Projects</p>
                    <p>Partnerships</p>
                </div>
                <div className="flex flex-col items-start justify-center space-y-1">
                    <p className="text-picollo-50 font-bold">Properties</p>
                    <p>Bungalow</p>
                    <p>Detached Buildings</p>
                    <p>Duplex</p>
                    <p>Mansion</p>
                    <p>Penthouse</p>
                    <p>Serviced Apartment</p>
                    <p>Semi-Detached Building</p>
                </div>
                <div className="flex flex-col items-start justify-center space-y-1 lg:mt-0 mt-5">
                    <p className="text-picollo-50 font-bold">Support Channel</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Whatsapp</p>
                </div>
            </div>
            <div className="flex flex-row items-center justify-between mt-12">
                <div className="text-xs text-[#D8D4FF]">
                    <p>●●●●●●</p>
                    <p className="-mt-2">●●●●●●</p>
                    <p className="-mt-2">●●●●●●</p>
                    <p className="-mt-2">●●●●●●</p>
                </div>
                <div className='hidden lg:block'>
                    <div className='flex items-center justify-center w-16 h-16 border-picollo-50 border rounded-full mr-4 lg:-mt-5 -mt-12'>
                        <Image src={arrowUp} alt={arrowUp} className='h-10 w-8' />
                    </div>
                </div>
                <div className='lg:hidden'>
                    <div className='flex items-center justify-center w-16 h-16 border-picollo-50 border rounded-full mr-4 lg:-mt-5 -mt-12'>
                        <Image src={arrowUpMobile} alt={arrowUpMobile} className='h-10 w-7' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
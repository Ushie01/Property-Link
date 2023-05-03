import NextLink from '@/client/components/NextLink';
import { ArrowsUp } from '@heathmont/moon-icons-tw';
import GridDots from '@/client/components/Svg/GridDots';
import data from '@/client/components/data.json';



const Footer = () => {
    return (
        <div className="lg:p-8 lg:block  lg:bg-black lg:text-white p-7">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-start justify-center">
                    <p className="text-picollo-50 w-12 font-extrabold -mt-1">_______</p>
                    <p className="text-xl font-bold ml-3">LOGO.</p>
                </div>
                <GridDots
                    width='64'
                    height='64'
                    color='#424141'
                />
            </div>

            <div className="lg:text-xs mt-5 text-md">
                <p>Our vision is to provide people with a safe-</p>
                <p>haven at it best prices</p>
            </div>
            
            <div className="lg:flex lg:flex-row grid grid-cols-2 items-start lg:justify-center md:justify-start lg:text-sm text-lg lg:space-x-24 mt-20">
                <div className="flex flex-col items-start justify-center space-y-4">
                    <p className="text-picollo-50 font-bold">About Us</p>
                    <NextLink
                        items={data.aboutUs}
                        column={true} 
                        href='#'
                    />
                </div>
                <div className="flex flex-col items-start justify-center space-y-4">
                    <p className="text-picollo-50 font-bold">Properties</p>
                    <NextLink 
                        items={data.properties} 
                        column={true}
                        href='#'
                    />
                </div>
                <div className="flex flex-col items-start justify-center space-y-4 lg:mt-0 mt-5">
                    <p className="text-picollo-50 font-bold">Support Channel</p>
                    <NextLink
                        items={data.channels}
                        column={true}
                        href='#'
                    />
                </div>
            </div>
            
            <div className="flex flex-row items-center justify-between mt-12">
                <GridDots
                    width='64'
                    height='64'
                    color='#424141'
                />
                <div className=''>
                    <div className='flex items-center justify-center w-16 h-16 border-picollo-50 border rounded-full mr-4 lg:-mt-5 -mt-12'>
                        <ArrowsUp fontSize={48}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
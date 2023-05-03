import { ControlsClose } from '@heathmont/moon-icons-tw';
import NextLink from '@/client/components/NextLink';
import Button from "@/client/shared/button";


const Header = () => {
    const nav = ['Agent', 'Properties', 'Services', 'Contact Us'];
    return (
        <>
            <div className="hidden lg:block bg-[#424141] p-8">
                <div className="flex flex-row items-center justify-between text-white">
                    <p className="text-xl font-bold">LOGO.</p>
                    <NextLink
                        items={nav}
                        column={false}
                    />
                    <div>
                        <Button width='32' text='Sign Up' />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-col items-start justify-start">
                            <p className="text-2xl font-bold">Discover The Most Affordable <br />Real Estate Deals</p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className="lg:hidden">
                <div className="flex flex-col text-xl text-white p-8 space-y-8  bg-[#424141]">
                    <div className="flex flex-row items-center justify-end">
                        <ControlsClose fontSize={44}/>
                    </div>
                    <NextLink
                        items={nav}
                        column={true}
                    />
                </div>
            </div>
        </>
    )
}

export default Header;
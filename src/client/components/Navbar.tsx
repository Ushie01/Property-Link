import NextLink from "./NextLink";
import Button from "../shared/button";


const Navbar = () => {
    const nav = ['Agent', 'Properties', 'Services', 'Contact Us'];
    return ( 
        <>
            <div className="flex flex-row items-center justify-between text-white">
                <p className="text-xl font-bold">LOGO.</p>
                <NextLink
                    items={nav}
                    column={false}
                    href='#'
                />
                <div>
                    <Button text='Sign Up' />
                </div>
            </div>
        </>
    )
}

export default Navbar;
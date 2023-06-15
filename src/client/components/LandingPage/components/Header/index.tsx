import HeaderNavbar from "./HeaderContainer/components/HeaderNavbar";
import HeaderSection from "./HeaderContainer/components/HeaderSection";

const Header = () => {
	return (
		<div className='bg-gradient-to-tl from-black to-[#23222F] lg:p-7 2sm:p-5 lg:text-white'>
			<div className='lg:pl-12 lg:pr-12 lg:block 2sm:w-full'>
				<HeaderNavbar />
				<HeaderSection />
			</div>
		</div>
	);
};
export default Header;

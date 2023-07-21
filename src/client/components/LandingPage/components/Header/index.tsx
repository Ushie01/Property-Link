import HeaderNavbar from "./HeaderContainer/components/HeaderNavbar";
import HeaderSection from "./HeaderContainer/components/HeaderSection";

const Header = () => {
	return (
		<div className='bg-gradient-to-tl from-black to-[#23222F] 2sm:p-5 lg:p-7 lg:text-white'>
			<div className='2sm:w-full lg:block lg:pl-12 lg:pr-12'>
				<HeaderNavbar />
				<HeaderSection />
			</div>
		</div>
	);
};
export default Header;

import HeaderNavbar from "./HeaderContainer/components/HeaderNavbar";
import HeaderSection from "./HeaderContainer/components/HeaderSection";

const Header = () => {
	return (
		<div className='bg-gradient-to-tl from-black  to-[#23222F] p-7 lg:block lg:p-8 lg:text-white'>
			<div className='hidden p-7 pl-20 pr-20 lg:block'>
				<HeaderNavbar />
				<HeaderSection />
			</div>
		</div>
	);
};
export default Header;

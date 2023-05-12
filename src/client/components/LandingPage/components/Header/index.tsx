import HeaderNavbar from "./HeaderContainer/components/HeaderNavbar";
import HeaderSection from "./HeaderContainer/components/HeaderSection";

const Header = () => {
	return (
		<div className='bg-gradient-to-tl from-black  to-[#23222F] p-7 lg:block lg:text-white'>
			<div className='hidden pl-12 pr-12 lg:block'>
				<HeaderNavbar />
				<HeaderSection />
			</div>
		</div>
	);
};
export default Header;

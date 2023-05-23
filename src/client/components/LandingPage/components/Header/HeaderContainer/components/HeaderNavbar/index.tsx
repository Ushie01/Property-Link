import NextLink from "@/client/components/NextLink";
import { Button } from "@heathmont/moon-core-tw";
import { HEADER_NAVBAR_DATA } from "../../../../../constants/data";
import { MobileNavbar } from "./MobileNavbar";
import useDeviceType from "@/client/shared/hooks/useDeviceType";

const HeaderNavbar = () => {
	const { isMobile } = useDeviceType();

	if (isMobile) {
		return <MobileNavbar />;
	}

	return (
		<div className='flex flex-row items-center justify-between text-white'>
			<p className='text-center text-xl font-bold 2sm:text-picollo-50 lg:text-white'>
				LOGO.
			</p>
			<div className='flex w-[480px] flex-row  items-center 2sm:hidden lg:block'>
				<NextLink items={HEADER_NAVBAR_DATA} column={false} href='#' />
			</div>
			<Button className='hidden h-[50px] w-[148px] rounded-xl  bg-picollo-50 px-6 py-4 lg:block'>
				<p className='text-md font-bold'>Sign Up</p>
			</Button>
		</div>
	);
};

export default HeaderNavbar;

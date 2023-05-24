import NextLink from "@/client/components/NextLink";
import { HEADER_NAVBAR_DATA } from "../../../../../constants/data";
import { MobileNavbar } from "./MobileNavbar";
import useDeviceType from "@/client/shared/hooks/useDeviceType";
import useHeader from "./useHeader";
import SignUpButton from "./SignupButton";

const HeaderNavbar = () => {
	const { isMobile } = useDeviceType();
	const { handleOpenModal } = useHeader();

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
			<div className='flex justify-end'>
				<SignUpButton
					title='Sign up'
					className='raleway-bold rounded-xl bg-picollo-50 px-6 py-2 text-sm text-white shadow-xl lg:block'
				/>
			</div>
		</div>
	);
};

export default HeaderNavbar;

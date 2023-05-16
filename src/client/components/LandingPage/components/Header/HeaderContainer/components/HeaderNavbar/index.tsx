import { GenericBurgerRegular } from '@heathmont/moon-icons-tw';
import NextLink from "@/client/components/NextLink";
import { Button } from "@heathmont/moon-core-tw";
import { HEADER_NAVBAR_DATA } from "../../../../../constants/data";
import Image from 'next/image';


const HeaderNavbar = () => {
	return (
		<div className='flex flex-row items-center justify-between text-white'>
			<p className='text-center text-xl 2sm:text-picollo-50 lg:text-white font-bold'>LOGO.</p>
			<div className='flex w-[480px] flex-row items-center 2sm:hidden lg:block'>
				<NextLink items={HEADER_NAVBAR_DATA} column={false} href='#' />
			</div>
			<Button className='hidden lg:block h-[50px] w-[148px]  rounded-xl bg-picollo-50 px-6 py-4'>
				<p className='text-md font-bold'>Sign Up</p>
			</Button>
			<GenericBurgerRegular width={40} height={40} color='white' className='lg:hidden' />
		</div>
	);
};

export default HeaderNavbar;

import NextLink from "@/client/components/NextLink";
import { Button } from "@heathmont/moon-core-tw";
import { HEADER_NAVBAR_DATA } from "../../../../../constants/data";

const HeaderNavbar = () => {
	return (
		<div className='flex w-full flex-row items-center justify-between text-white'>
			<p className='text-xl font-bold'>LOGO.</p>
			<div className='justify-cneter flex w-[480px] flex-row items-center'>
				<NextLink items={HEADER_NAVBAR_DATA} column={false} href='#' />
			</div>
			<Button className='h-[50px] w-[148px]  rounded-[13px] bg-picollo-50 px-6 py-4'>
				<p className='text-md font-bold'>Sign Up</p>
			</Button>
		</div>
	);
};

export default HeaderNavbar;

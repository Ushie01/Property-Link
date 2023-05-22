import { HEADER_NAVBAR_DATA } from "../../../../../constants/data";
import { ControlsClose, GenericBurgerRegular } from "@heathmont/moon-icons-tw";
import NextLink from "@/client/components/NextLink";
import useMobileHeader from "./useMobileHeader";
import { Drawer } from "@heathmont/moon-core-tw";

export const MobileNavbar = () => {
	const { handleToggle, toggle, setToggle } = useMobileHeader();
	if (!toggle) {
		return (
			<div className='flex flex-row items-center justify-between text-white'>
				<p className='text-center text-xl font-bold 2sm:text-picollo-50 lg:text-white'>
					LOGO.
				</p>
				<GenericBurgerRegular
					width={40}
					height={40}
					color='white'
					className='lg:hidden'
					onClick={handleToggle}
				/>
			</div>
		);
	}
	return (
		<div className='h-screen w-full'>
			<div className='flex flex-col items-end justify-start'>
				<Hamburguer
					props={{
						width: 40,
						height: 40,
						color: "white",
						className: "lg:hidden",
						onClick: handleToggle,
					}}
					toggle={toggle}
				/>
			</div>
			<Drawer
				open={toggle}
				setOpen={setToggle}
				className='flex w-full flex-col items-center justify-start  text-white '
			>
				<Drawer.Panel className='mt-20 items-center justify-start space-y-5  p-5'>
					<NextLink items={HEADER_NAVBAR_DATA} column={true} href='#' />
				</Drawer.Panel>
			</Drawer>
		</div>
	);
};

type Props = {
	toggle: boolean;
	props: React.SVGProps<SVGSVGElement>;
};

const Hamburguer = (props: Props) => {
	if (props.toggle) {
		return <ControlsClose {...props.props} />;
	}
	return <GenericBurgerRegular {...props.props} />;
};

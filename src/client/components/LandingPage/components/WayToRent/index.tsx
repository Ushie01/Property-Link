import Image from "next/image";
import { Button } from "@heathmont/moon-core-tw";
import { InfoSectionTitle } from "../InfoSection/InfoSectionContainer/components/InfoSectionTitle";
import Ellipse54 from "./WayToRentContainer/constants/assets/Ellipse54.png";
import Ellipse55 from "./WayToRentContainer/constants/assets/Ellipse55.png";
import Ellipse56 from "./WayToRentContainer/constants/assets/Ellipse56.png";

const WayToRent = () => {
	return (
		<div className='hidden p-16 lg:block'>
			<div className='flex flex-row items-start justify-start'>
				<InfoSectionTitle
					text='Trusted Way to Rent, Lease or Sell your Property'
					color='bg-picollo-50'
				/>
			</div>
			<div className='-mt-20 flex flex-row items-center justify-between'>
				<div className='w-1/2 space-y-40 '>
					<p className='raleway-light text-2xl tracking-wide'>
						Unlock endless possibilities and unleash your full potential with a
						career as a real estate agent with us today, gain access to a wide
						variety of clients as well as resources to position you for success
						whether your looking to rent, lease or sell. With flexibility to set
						your own schedule, the potential for high earnings and the
						satisfaction of helping people own their homes.
					</p>
					<Button className='h-12 w-64 rounded-xl bg-black font-bold text-white'>
						Sign up as an House Agent
					</Button>
				</div>
				<div className='flex w-1/2 flex-col items-end justify-end space-y-5'>
					<div className='flex w-full flex-row items-center justify-end space-x-12'>
						<Image
							src={Ellipse54}
							alt='Ellipse54'
							height={200}
							width={200}
							className='mt-44'
						/>
						<Image src={Ellipse55} alt='Ellipse55' height={300} width={300} />
					</div>
					<div>
						<Image
							src={Ellipse56}
							alt='Ellipse56'
							height={400}
							width={400}
							className=''
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WayToRent;

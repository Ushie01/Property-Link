import { Button } from "@heathmont/moon-core-tw";
import Card from "./TopAgentsContainer/components/Card";
import { TOP_AGENTS } from "../../constants/data";
import GridDots from "@/client/components/Svg/GridDots";
import { InfoSectionTitle } from "../InfoSection/InfoSectionContainer/components/InfoSectionTitle";

const TopAgent = () => {
	return (
		<div>
			<div className='flex flex-col p-4 lg:p-16'>
				<div className='flex flex-row items-center justify-between 2sm:pt-8'>
					<div className=''>
						<GridDots width='54' height='54' color='text-hit-100' />
					</div>
					<InfoSectionTitle text={"Top House Agents"} color='bg-hit-50' />
				</div>
				<div className='mt-12 flex flex-col items-center justify-between 2sm:space-y-5 lg:flex-row lg:space-y-0'>
					{TOP_AGENTS.map((value, index) => (
						<div key={index}>
							<Card
								img={value.image}
								name={value.name}
								comment={value.comment}
							/>
						</div>
					))}
				</div>
				<div className=' mt-16 flex flex-col items-center justify-center text-center text-black'>
					<p className='raleway-bold text-3xl'>Become An Agent</p>
					<p className='raleway-normal mt-10 w-96 p-2 text-2xl lg:w-[1070px]'>
						Unlock endless possibilities and unleash your full potential with a
						career as a real estate agent with us today, gain access to a wide
						variety of clients as well as resources to position you for success
						whether your looking to rent, lease or sell. With flexibility to set
						your own schedule, the potential for high earnings and the
						satisfaction of helping people own their homes.
					</p>
					<Button className='mt-16 mb-4 h-16 w-64 rounded-xl bg-hit-50 text-white 2sm:mb-16'>
						Sign up as an Agent
					</Button>
				</div>
			</div>
		</div>
	);
};

export default TopAgent;

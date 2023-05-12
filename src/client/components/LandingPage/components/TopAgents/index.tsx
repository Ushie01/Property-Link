import { Button } from '@heathmont/moon-core-tw';
import Card from "./TopAgentsContainer/components/Card";
import { TOP_AGENTS } from "../../constants/data";
import GridDots from "@/client/components/Svg/GridDots";
import { InfoSectionTitle } from "../InfoSection/InfoSectionContainer/components/InfoSectionTitle";


const TopAgent = () => {
    return (
        <div className="flex flex-col p-16">
            <div className='flex flex-row items-center justify-between'>
				<GridDots width='64' height='64' color='#424141' />
				<InfoSectionTitle text={"Top House Agents"} />
            </div>
            <div className="flex flex-row items-center justify-between mt-12">
            {
                TOP_AGENTS.map((value, index) => (
                    <div key={index}>
                        <Card
                            img={value.image}
                            name={value.name}
                            comment={value.comment}
                        />
                    </div>
                ))
            }
            </div>
            <div className="flex flex-col items-center justify-center text-black mt-16 text-center">
                <p className="text-extrabold text-3xl">Become An Agent</p>
                <p className="w-[1070px] mt-10">Unlock endless possibilities and unleash your full potential with a career as a real estate agent with us today, gain access to a wide variety of clients as well as resources to position you for success whether your looking to rent, lease or sell. With flexibility to set your own schedule, the potential for high earnings and the satisfaction of helping people own their homes.</p>
                <Button className='h-12 w-64 mt-16 rounded-xl bg-hit-50 text-white'>Sign up as an Agent</Button>
            </div>
        </div>
    )
}

export default TopAgent;
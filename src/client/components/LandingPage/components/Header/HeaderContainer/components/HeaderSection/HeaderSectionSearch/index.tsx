import { Button } from "@heathmont/moon-core-tw";
import HeaderFilter from "./HeaderFilter";
import { SERACH_FILTER_TEXT } from "../../../../../../constants/data";

const SearchConatiner = () => {
	return (
		<div className='mt-16 flex lg:h-[136px] lg:flex-row flex-col  lg:items-center lg:justify-center 
		     items-start 2sm:p-5 lg:p-0 justify-start 2sm:space-y-10 lg:space-y-0 lg:space-x-8 rounded-lg border border-white bg-ghost-50'
		>
			{SERACH_FILTER_TEXT.map((value, index) => (
				<HeaderFilter
					key={index}
					title={value.title}
					options={value.options}
					selectOption={value.labelText}
				/>
			))}
			<div className='flex lg:w-1/6 w-full 2sm:p-5 items-center justify-center pr-8'>
				<Button className='h-12 w-full rounded-xl bg-picollo-50 text-white font-bold'>
					Search
				</Button>
			</div>
		</div>
	);
};

export default SearchConatiner;

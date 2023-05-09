import { Button } from "@heathmont/moon-core-tw";
import HeaderFilter from "./HeaderFilter";
import { SERACH_FILTER_TEXT } from "../../../../constants/data";

const SearchConatiner = () => {
	return (
		<div className='mt-16 flex h-[136px] flex-row items-center justify-center space-x-8 rounded-lg border border-white bg-ghost-50'>
			{SERACH_FILTER_TEXT.map((value, index) => (
				<HeaderFilter
					key={index}
					title={value.title}
					options={value.options}
					selectOption={value.labelText}
				/>
			))}
			<div className='flex w-1/6 items-center pr-8'>
				<Button className='h-12 w-full rounded-[13px] bg-picollo-50'>
					Search
				</Button>
			</div>
		</div>
	);
};

export default SearchConatiner;

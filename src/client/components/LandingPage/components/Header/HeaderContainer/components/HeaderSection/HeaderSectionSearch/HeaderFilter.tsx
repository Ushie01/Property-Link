import { Button, Dropdown, MenuItem } from "@heathmont/moon-core-tw";
import { ControlsChevronDown } from "@heathmont/moon-icons-tw";

type Props = {
	title: string;
	selectOption: string;
	options: string[];
};

const HeaderFilter = ({ title, selectOption, options }: Props) => {
	return (
		<div className='mx-6 flex h-full lg:w-1/4 flex-col items-start justify-center space-y-4 border-slate-700 lg:[&:not(:last-child)]:border-r-[1px]'>
			<p className='helvetica-bold text-left text-2xl text-picollo-50'>
				{title}
			</p>
			<div className='flex flex-row'>
				<Dropdown value={options} onChange={() => {}}>
					<Dropdown.Trigger>
						<div className='flex w-full flex-row items-center justify-between space-x-4'>
							<p className='raleway-light text-lg font-thin text-white'>{selectOption}</p>
							<ControlsChevronDown fontSize={24} color="white"/>
						</div>
					</Dropdown.Trigger>
					<Dropdown.Options className='rounded-xl bg-picollo-50 text-white'>
						{options.map((opt, index) => (
							<Dropdown.Option value={opt} key={index}>
								{({ selected, active }) => (
									<MenuItem isActive={active} isSelected={selected}>
										{opt}
										<MenuItem.Title>{opt}</MenuItem.Title>
										<MenuItem.Checkbox />
									</MenuItem>
								)}
							</Dropdown.Option>
						))}
					</Dropdown.Options>
				</Dropdown>
			</div>
		</div>
	);
};

export default HeaderFilter;

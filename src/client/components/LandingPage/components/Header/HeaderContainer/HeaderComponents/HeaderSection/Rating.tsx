import { RATING_DATA } from "../../../constants/data";

const Rating = () => (
	<div className='flex flex-row items-start justify-center space-x-12'>
		{RATING_DATA.map((value, index) => (
			<div key={index} className='flex flex-col items-start justify-start'>
				<p className='text-3xl font-bold text-picollo-50'>{value.value}</p>
				<p className='raleway-light mt-4 text-lg font-light text-white'>
					{value.text}
				</p>
			</div>
		))}
	</div>
);
export default Rating;

import { GenericStar } from "@heathmont/moon-icons-tw";

type StarProps = {
	rating: number;
};

const Star = ({ rating }: StarProps) => {
	const fullStarCount = Math.floor(rating);
	const emptyStarCount = 5 - fullStarCount;

	return (
		<div className='flex flex-row'>
			{[...Array(fullStarCount)].map((_, index) => (
				<GenericStar
					key={index}
					fill='#FFB319'
					color='#ffb319'
					height='24'
					width='24'
				/>
			))}
			{[...Array(emptyStarCount)].map((_, index) => (
				<GenericStar
					className='bi bi-star-fill'
					key={index}
					height='24'
					width='24'
					color='#FFB319'
				/>
			))}
		</div>
	);
};

export default Star;

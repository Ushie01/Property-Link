type Props = {
	text: string;
	color: string;
};

export const InfoSectionTitle = ({ text, color }: Props) => {
	return (
		<div className='flex flex-row items-center justify-start'>
			<div className={`mt-3 h-1 lg:w-16 w-10 ${color}`} />
			<p className='ml-6 lg:text-3xl text-xl font-extrabold'>{text}</p>
		</div>
	);
};

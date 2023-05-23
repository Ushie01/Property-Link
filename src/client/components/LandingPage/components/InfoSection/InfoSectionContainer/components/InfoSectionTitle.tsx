type Props = {
	text: string;
	color: string;
};

export const InfoSectionTitle = ({ text, color }: Props) => {
	return (
		<div className='flex flex-row items-center justify-start'>
			<div className={`mt-3 h-1 w-10 lg:w-16 ${color}`} />
			<p className='raleway-bold ml-6 text-xl lg:text-3xl'>{text}</p>
		</div>
	);
};

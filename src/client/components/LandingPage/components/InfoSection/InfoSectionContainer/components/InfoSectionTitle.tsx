type Props = {
	text: String;
};

export const InfoSectionTitle = ({ text }: Props) => {
	return (
		<div className='flex flex-row items-start justify-start'>
			<div className='mt-5 h-1 lg:w-16 w-10 bg-picollo-50' />
			<p className='ml-6 lg:text-3xl text-xl font-bold'>{text}</p>
		</div>
	);
};

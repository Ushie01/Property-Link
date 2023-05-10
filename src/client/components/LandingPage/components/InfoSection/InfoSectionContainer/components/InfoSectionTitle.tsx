type Props = {
	text: String;
};

export const InfoSectionTitle = ({ text }: Props) => {
	return (
		<div className='flex flex-row items-start justify-start'>
			<div className='mt-5 h-1 w-16 bg-picollo-50' />
			<p className='ml-6 text-3xl font-bold'>{text}</p>
		</div>
	);
};

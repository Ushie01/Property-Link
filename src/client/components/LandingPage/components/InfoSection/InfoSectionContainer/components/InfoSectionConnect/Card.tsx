import React from 'react';
import { useState, useEffect } from 'react';
import { CONNECT_CLIENT_COMMENT } from "../../../../../constants/data";
import Ellipse from "@/client/components/Svg/Ellipse";


const Card = () => {
	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		const handleResize = () => {
		setIsMobileView(window.innerWidth < 640);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
	    	window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div className='relative -mt-10 flex flex-col lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-10'>
			{CONNECT_CLIENT_COMMENT.map((value, index) => (
				<React.Fragment key={index}>
				{index === 1 && (
					<div className='lg:hidden -mb-12 mt-4 flex items-center justify-center'>
					<Ellipse />
					</div>
				)}

				<div
					className={`${
					index === 2 && isMobileView ? 'mt-12' : ''
					} flex flex-col items-center justify-center space-y-5 rounded-lg bg-white p-8 text-center shadow-md`}
				>
					<div className='flex h-16 w-16 items-center justify-center rounded-full bg-picollo-50'>
					<value.image width={50} height={50} color='white' />
					</div>
					<p className='text-2xl font-bold text-black'>{value.value}</p>
					<p>{value.text}</p>
				</div>
				</React.Fragment>
			))}
		</div>
	);
};

export default Card;

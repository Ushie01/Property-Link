import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

type AgentProps = {
    img: string | StaticImageData,
    name: string,
    comment: string
}

const Card = ({ img, name, comment }: AgentProps) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    return (
        <div className="relative w-96">
            <Image
                src={img}
                alt='Image'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='hover:bg-gray-200 hover:opacity-95 hover:scale-110 hover:duration-300'
            />
            <div

                className={`absolute flex flex-col items-start justify-start p-8 top-0 bottom-5 left-0 space-y-4 w-full h-full mt-72 ${isHovering ? 'text-picollo-50' : 'text-white'}`}>
                <p className={`text-2xl font-bold ${isHovering ? 'text-3xl' : 'text-white'}`}>{name}</p>
                <p className={isHovering ? 'text-xl' : 'text-white'}>{comment}</p>
            </div>
        </div>

    )
}

export default Card;
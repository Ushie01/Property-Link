import { CLIENT_PROPERTY } from "../../constant/data";
import Image from 'next/image'


const Card = () => {
    return (
        <div className="flex flex-row items-center justify-between">
            {
                CLIENT_PROPERTY.map((value, index) => (
                     <div key={index} className="flex flex-col items-center justify-center rounded-lg text-center space-y-10">
                        <Image src={value.image} width={370} height={370} alt="svg" className="rounded-md hover:scale-105 duration-150"/>
                        <p className="font-bold m-auto text-xl text-wrap mt-2">{ value.text}</p>
                        <button className="p-5 rounded-full hover:scale-105 duration-150 border-2 text-gray-500">263 Properties</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Card;
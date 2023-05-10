import Image from "next/image";
import { CONNECT_CLIENT_COMMENT } from "../../constant/data";


const Card = () => {
    return (
        <div className="relative -mt-5 grid grid-cols-3 gap-10">
            {
                CONNECT_CLIENT_COMMENT.map((value, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md text-center space-y-5">
                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-picollo-50">
                           <div>{value.image}</div>
                        </div>
                        <p className="text-black text-2xl font-bold">{value.value}</p>
                        <p>{value.text}</p>
                    </div>
                ))
            }
        </div>

    )
}

export default Card;
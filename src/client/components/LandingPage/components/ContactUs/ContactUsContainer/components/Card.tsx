import { CONTACT_US_DATA } from "./../../../../constants/data";
import { Button } from '@heathmont/moon-core-tw';


const Card = () => {
    return (
        <>
            {
                CONTACT_US_DATA.map((value, index) => (
                    <div key={index} className="flex flex-col items-center justify-center border p-4 space-y-5 rounded-lg">
                        <div className="flex flex-row items-center justify-center space-x-5">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-lightPicollo-100">
                                <div >{value.image}</div>
                            </div>
                            <p className="font-bold text-xl text-picollo-50">{value.text}</p>
                        </div>
                        <p className="text-lg font-bold">{value.phone}</p>
                        <Button size={'xl'} className="bg-lightPicollo-50 text-picollo-50 font-bold bg-lightPicollo-100 rounded-xl w-40">Call Now</Button>
                   </div>
                ))
            }
        </>
    )
}

export default Card;
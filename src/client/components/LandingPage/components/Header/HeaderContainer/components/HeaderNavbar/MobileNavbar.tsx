import { useState } from "react";
import { HEADER_NAVBAR_DATA } from "../../../../../constants/data";
import { ControlsClose  } from '@heathmont/moon-icons-tw';
import NextLink from "@/client/components/NextLink";


type Props = {
    onClick: () => void;
}

export const MobileNavbar = ({ onClick }: Props) => {
    
    return (
        <div className='h-screen w-full'>
            <div className='flex flex-col items-end justify-start'>
                <ControlsClose 
                    width={40}
                    height={40}
                    color='white'
                    className='lg:hidden'
                    onClick={onClick}
                />							
            </div>	
            <div className='flex flex-col items-start justify-start space-y-5 w-full text-white p-5 '>
                <NextLink items={HEADER_NAVBAR_DATA} column={true} href='#' />
            </div>
        </div>	
    )
}


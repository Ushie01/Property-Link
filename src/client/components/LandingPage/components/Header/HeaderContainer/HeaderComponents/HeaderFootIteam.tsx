import { ControlsChevronDown } from "@heathmont/moon-icons-tw";

type footItemProps = {
    title: string,
    selectOption: string
}

const HeaderFootItem = ({title, selectOption} : footItemProps) => {
    return (
        <>
            <div className='flex flex-col space-y-4 text-2xl'>
                <p className='font-bold text-picollo-50'>{title}</p>
                <div className='flex flex-row space-x-3'>
                    <p className='font-thin'>{selectOption}</p>
                    <ControlsChevronDown fontSize={36}/>
                </div>
            </div> 
        </>
    )
}

export default HeaderFootItem;
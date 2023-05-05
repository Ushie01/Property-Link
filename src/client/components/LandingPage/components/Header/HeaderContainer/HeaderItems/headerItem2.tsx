import { ControlsChevronDown } from '@heathmont/moon-icons-tw';
import HeaderFootItem from './HeaderItem1';
import Button from '../../../../../../shared/button'


const HeaderFoot = () => {
    const johnClass = 'border border-gray-400 h-40'
    return (
        <>
            <div className="flex flex-row items-center justify-center space-x-8 bg-ghost-50 border border-white rounded-lg mt-16">
                <HeaderFootItem title='Location' selectOption='Select Your Location' />
                <hr className={johnClass} />
                <HeaderFootItem title='Property Type' selectOption='Select Your Property Type' />
                <hr className={johnClass} />
                <HeaderFootItem title='Price Range' selectOption='Select Your Range' />
                <Button text='Search'/>
            </div>
        </>
    )
}

export default HeaderFoot;
import StarFill from '@/client/components/Svg/StarFill';
import StarEmpty from '@/client/components/Svg/StarEmpty';

const Star = () => {
    return (
        <div className='flex flex-row space-x-1'>
            <StarFill height='20' width='20' color='#FFB319' />
            <StarFill height='20' width='20' color='#FFB319' />
            <StarFill height='20' width='20' color='#FFB319' />
            <StarFill height='20' width='20' color='#FFB319' />
            <StarFill height='20' width='20' color='#FFB319' />
            <StarEmpty height='20' width='20' color='#FFB319' />
        </div>
    )
}

export default Star;
import { InfoSectionTitle } from '../../constant/InfoSectionTitle';
import Card from './Card';
import GridDots from '@/client/components/Svg/GridDots';


const InfoSectionProperties = () => {
    return (
        <div className='rounded-md mt-28'>
            <div className='flex flex-row items-center justify-between'>
                <GridDots width="64" height="64" color="#424141" />
                <InfoSectionTitle text={'Move To What Moves You'}/>
            </div>
            <div className='mt-16'>
                <Card/>
            </div>
            <div className="mt-20">
                <InfoSectionTitle text={'Top Reviewed House Units'} />
            </div>
        </div>
    )
}

export default InfoSectionProperties;
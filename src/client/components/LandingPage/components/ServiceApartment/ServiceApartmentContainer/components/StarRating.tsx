import StarFill from '@/client/components/Svg/StarFill';
import StarEmpty from '@/client/components/Svg/StarEmpty';

type StarProps = {
  size: string;
}

const Star = ({ size }: StarProps) => {
  return (
    <div className='flex flex-row space-x-1'>
      <StarFill height={size} width={size} color='#FFB319' />
      <StarFill height={size} width={size} color='#FFB319' />
      <StarFill height={size} width={size} color='#FFB319' />
      <StarFill height={size} width={size} color='#FFB319' />
      <StarFill height={size} width={size} color='#FFB319' />
      <StarEmpty height={size} width={size} color='#FFB319' />
    </div>
  );
};

export default Star;

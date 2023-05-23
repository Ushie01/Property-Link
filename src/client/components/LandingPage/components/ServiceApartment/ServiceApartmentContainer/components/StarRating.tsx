import StarFill from '@/client/components/Svg/StarFill';
import StarEmpty from '@/client/components/Svg/StarEmpty';

type StarProps = {
  size: string;
  starFill: number;
};

const Star = ({ size, starFill }: StarProps) => {
  // Calculate the number of empty stars
  const starEmpty = 5 - starFill; 

  return (
    <div className="flex flex-row space-x-1">
      {[...Array(starFill)].map((_, index) => (
        <StarFill key={index} height={size} width={size} color="#FFB319" />
      ))}
      {[...Array(starEmpty)].map((_, index) => (
        <StarEmpty key={index} height={size} width={size} color="#FFB319" />
      ))}
    </div>
  );
};

export default Star;


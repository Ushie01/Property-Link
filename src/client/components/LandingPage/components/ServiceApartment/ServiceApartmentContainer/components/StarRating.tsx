import StarFill from '@/client/components/Svg/StarFill';
import StarEmpty from '@/client/components/Svg/StarEmpty';

type StarProps = {
  size: string;
  rating: number;
};

const Star = ({ size, rating }: StarProps) => {
  // Calculate the number of empty stars
  const starEmpty = 5 - rating; 

  return (
    <div className="flex flex-row space-x-1">
      {[...Array(rating)].map((_, index) => (
        <StarFill key={index} height={size} width={size} color="#FFB319" />
      ))}
      {[...Array(starEmpty)].map((_, index) => (
        <StarEmpty key={index} height={size} width={size} color="#FFB319" />
      ))}
    </div>
  );
};

export default Star;


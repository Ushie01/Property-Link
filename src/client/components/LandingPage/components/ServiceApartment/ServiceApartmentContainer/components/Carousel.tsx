import useDeviceType from '@/client/shared/hooks/useDeviceType';
import {SERVICE_APARTMENT_DATA} from './../../../../constants/data';
import Card from './Card';

const ServiceCarousel = () => {
  const { isMobile } = useDeviceType();
  const apartment = SERVICE_APARTMENT_DATA[0];

  if (isMobile) {
    const { image, type, location, amount, bedroom, bathroom, swimpool } = apartment;
    return (
      <div className='flex items-center justify-center'>
        <Card
          image={image}
          type={type}
          location={location}
          amount={amount}
          bedroom={bedroom}
          bathroom={bathroom}
          swimpool={swimpool}
        />
      </div>
    )
  }
  return (
      <div className='lg:p-16 flex lg:flex-row lg:space-x-5 items-center justify-between'>
        {SERVICE_APARTMENT_DATA.map((value, index) => (
          <div key={index}>
            <Card
              image={value.image}
              type={value.type}
              location={value.location}
              amount={value.amount}
              bedroom={value.bedroom}
              bathroom={value.bathroom}
              swimpool={value.swimpool}
            />
          </div>
        ))}
      </div>

  );
};

export default ServiceCarousel;

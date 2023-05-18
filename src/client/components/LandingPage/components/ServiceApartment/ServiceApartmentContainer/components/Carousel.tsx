import { Carousel } from '@heathmont/moon-core-tw';
import {SERVICE_APARTMENT_DATA} from './../../../../constants/data';
import Card from './Card';

const ServiceCarousel = () => {

  return (
    <Carousel autoSlideDelay={4000} step={1}>
      <Carousel.Reel className='lg:p-12 space-x-3'>
        {SERVICE_APARTMENT_DATA.map((value, index) => (
          <Carousel.Item key={index}>
            <Card
              image={value.image}
              type={value.type}
              location={value.location}
              amount={value.amount}
              bedroom={value.bedroom}
              bathroom={value.bathroom}
              swimpool={value.swimpool}
            />
          </Carousel.Item>
        ))}
      </Carousel.Reel>
    </Carousel>
  );
};

export default ServiceCarousel;

import { Carousel } from '@heathmont/moon-core-tw';
import {SERVICE_APARTMENT_DATA} from './../../../../constants/data';
import Card from './Card';

const ServiceCarousel = () => {

  return (
    <Carousel autoSlideDelay={4000} step={1}>
      <Carousel.Reel className='p-12 space-x-3'>
        {SERVICE_APARTMENT_DATA.map((value, index) => (
          <Carousel.Item key={index} >
                <Card value={value.image} />
          </Carousel.Item>
        ))}
      </Carousel.Reel>
    </Carousel>
  );
};

export default ServiceCarousel;

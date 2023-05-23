import { ArrowsUp } from '@heathmont/moon-icons-tw';
import GridDots from '@/client/components/Svg/GridDots';
import FooterLogo from '@/client/shared/Logo/FooterLogo';
import FooterContainer from './FooterContainer/FooterContainer';
import { IconButton } from '@heathmont/moon-core-tw';
import FooterLogoContainer from './FooterContainer/FooterLogoContainer';
import FooterItems from './FooterItems';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogoContainer>
        <FooterLogo />
        <GridDots width="64" height="64" color="#424141" />
     </FooterLogoContainer>
      <div className="mt-5 lg:w-1/2">
        <p className='text-moon-16 raleway-normal lg:w-1/2'>Our vision is to provide people with a safe- haven at it best prices</p>
      </div>
      <FooterItems/>
      <FooterLogoContainer>
        <div className='mt-12'>
         <GridDots width="64" height="64" color="#424141" />
        </div>
        <IconButton className='rounded-full h-16 border border-picollo-50 border-solid' variant='secondary'  icon={<ArrowsUp fontSize={48}/>} />
     </FooterLogoContainer> 
    </FooterContainer>
  );
};

export default Footer;

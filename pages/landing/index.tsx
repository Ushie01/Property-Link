import LandingPage from '@/client/components/LandingPage';
import type { GetServerSideProps, NextPage } from 'next';


const LandingPages: NextPage = (props) => (
  <LandingPage {...props}/> 
);

export default LandingPages;

import LandingPage from '@/client/components/LandingPage';
import type { GetServerSideProps, NextPage } from 'next';

const LandingPages: NextPage = (props) => (
  <div>
    <LandingPage {...props}/> 
  </div>
);

export default LandingPages;

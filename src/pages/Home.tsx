import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import CaseShowcase from '../components/sections/CaseShowcase';
import Awards from '../components/sections/Awards';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>The Brooklyn Brothers - Creative Agency</title>
        <meta name="description" content="Creative agency specializing in digital development and innovative solutions" />
      </Helmet>
      
      <Hero />
      <CaseShowcase />
      <Awards />
    </>
  );
};

export default Home;

import React from 'react';
import HomepageHero from '../components/HomepageHero';
import CompanyCore from '../components/CompanyCore'; 
import ServiceSection from '../components/ServiceSection';
import HowWeWork from '../components/HowWeWork';
import ScreenSolutions from '../components/ScreenSolutions'; // Component import kiya
import StatsCounter from '../components/StatsCounter'; 
import CorePillars from '../components/CorePillars'; 
// import AboutAgency from '../components/AboutAgency'; 
import DigitalPartners from '../components/DigitalPartners';
import AboutContactForm from '../components/AboutContactForm';
import ModernHero from '../components/ModernHero';

const Home = () => {
  return (
    <>
      <HomepageHero />
      <CompanyCore /> 
      <ServiceSection />
      <ModernHero />
      <StatsCounter /> 
      <CorePillars /> 
      {/* <AboutAgency />  */}
      <DigitalPartners />
      <ScreenSolutions />
      <AboutContactForm />
      
    </>
  );
};

export default Home;
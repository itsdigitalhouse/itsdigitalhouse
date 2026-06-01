import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CompanyCore from '../components/CompanyCore'; 
import ServiceSection from '../components/ServiceSection';
import StatsCounter from '../components/StatsCounter'; 
import CorePillars from '../components/CorePillars'; 
import AboutAgency from '../components/AboutAgency'; // Import added
import DigitalPartners from '../components/DigitalPartners';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <CompanyCore /> 
      <ServiceSection />
      <StatsCounter /> 
      <CorePillars /> 
      <AboutAgency /> {/* Section added after CorePillars */}
      <DigitalPartners />
    </>
  );
};

export default Home;
import React from 'react';
import HeroSlider from '../components/HeroSlider';
import CompanyCore from '../components/CompanyCore'; 
import ServiceSection from '../components/ServiceSection';
import HowWeWork from '../components/HowWeWork';
import ScreenSolutions from '../components/ScreenSolutions'; // Component import kiya
import StatsCounter from '../components/StatsCounter'; 
import CorePillars from '../components/CorePillars'; 
import AboutAgency from '../components/AboutAgency'; 
import DigitalPartners from '../components/DigitalPartners';
import ModernHero from '../components/ModernHero';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <CompanyCore /> 
      <ServiceSection />
      <ModernHero />
      <StatsCounter /> 
      <ScreenSolutions />
      <CorePillars /> 
      <AboutAgency /> 
      <DigitalPartners />
    </>
  );
};

export default Home;
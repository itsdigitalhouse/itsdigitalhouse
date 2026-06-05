import React from 'react';
import ServicesHero from '../components/ServicesHero';
import ServicesGrid from '../components/ServicesGrid';
import PortfolioPage from '../components/portfolio';
import CaseStudiesSlider from '../components/CaseStudiesSlider';

const ServicesPage = () => {
  return (
    // Yahan 'pt-24' add kiya hai jo header ki height (h-24) jitni jagah chhod dega
    <div className="w-full bg-white min-h-screen pt-24"> 
      <ServicesHero />
      <ServicesGrid />
      <PortfolioPage />
      <CaseStudiesSlider />
    </div>
  );
};

export default ServicesPage;
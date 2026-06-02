import React from 'react';
import ServicesHero from '../components/ServicesHero';
import ServicesGrid from '../components/ServicesGrid';
import PortfolioPage from '../components/portfolio';
import CaseStudiesSlider from '../components/CaseStudiesSlider';

const ServicesPage = () => {
  return (
    <div className="w-full bg-black min-h-screen block">
      <ServicesHero />
      <ServicesGrid />
      <PortfolioPage />
      <CaseStudiesSlider />
    </div>
  );
};

export default ServicesPage;
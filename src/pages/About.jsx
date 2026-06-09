import React from 'react';
import AboutHero from '../components/AboutHero';
import AgencyVision from '../components/AgencyVision';
import GlobalReach from '../components/GlobalReach';
import AboutTimelineWave from '../components/AboutTimelineWave';
import SEOEngine from '../components/SEOEngine';
import AboutContactForm from '../components/AboutContactForm';
// import TechStackMatrix from '../components/TechStackMatrix';
// import WhyChooseUs from '../components/WhyChooseUs';
import FoundersNote from '../components/FoundersNote';
import OurTeam from '../components/OurTeam';

const About = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-[#d24a8a] selection:text-white">
      <AboutHero />
      <AgencyVision />
      <GlobalReach />
      <AboutTimelineWave />
      <SEOEngine />
      
      {/* <TechStackMatrix />
      <WhyChooseUs /> */}
      <FoundersNote />
      <OurTeam />
      <AboutContactForm />
    </div>
  );
};

export default About;
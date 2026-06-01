import React from 'react';
import AboutHero from '../components/AboutHero';
import AgencyVision from '../components/AgencyVision';
import OurTeam from '../components/OurTeam';

const About = () => {
  return (
    // Navbar fixed hai, isliye pt-24 (padding-top) lazmi hai
    <div className="bg-white min-h-screen">
      <AboutHero />
      <AgencyVision />
      <OurTeam />
    </div>
  );
};

export default About;
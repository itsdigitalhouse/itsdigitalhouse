import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero from '../components/AboutHero';
import AgencyVision from '../components/AgencyVision';
import GlobalReach from '../components/GlobalReach';
import AboutTimelineWave from '../components/AboutTimelineWave';
import SEOEngine from '../components/SEOEngine';
import AboutContactForm from '../components/AboutContactForm';
import FoundersNote from '../components/FoundersNote';
import OurTeam from '../components/OurTeam';

const About = () => {
  return (
    <div className="bg-white min-h-screen selection:bg-[#d24a8a] selection:text-white">
      <Helmet>
        <title>About Us | Its Digital House - Creative Digital Agency</title>
        <meta name="description" content="Discover Its Digital House—a global creative agency building iconic digital experiences through high-end design, strategy, and modern technology." />
        <meta name="keywords" content="about digital agency, creative agency team, digital house agency, agency vision, global digital agency, digital marketing experts, web design company, agency founders, digital transformation company" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Its Digital House" />
        <link rel="canonical" href="https://www.itsdigitalhouse.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Us | Its Digital House - Creative Digital Agency" />
        <meta property="og:description" content="Discover Its Digital House—a global creative agency building iconic digital experiences through high-end design, strategy, and modern technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itsdigitalhouse.com/about" />
        <meta property="og:site_name" content="Its Digital House" />
        <meta property="og:image" content="https://www.itsdigitalhouse.com/og-about.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Its Digital House" />
        <meta name="twitter:description" content="Discover Its Digital House—a global creative agency building iconic digital experiences through high-end design, strategy, and modern technology." />
        <meta name="twitter:site" content="@Itsdigitalhouse" />
        <meta name="twitter:image" content="https://www.itsdigitalhouse.com/og-about.jpeg" />
      </Helmet>

      <AboutHero />
      <AgencyVision />
      <GlobalReach />
      <AboutTimelineWave />
      <SEOEngine />
      <FoundersNote />
      <OurTeam />
      <AboutContactForm />
    </div>
  );
};

export default About;

import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomepageHero from '../components/HomepageHero';
import CompanyCore from '../components/CompanyCore'; 
import ServiceSection from '../components/ServiceSection';
import ScreenSolutions from '../components/ScreenSolutions';
import StatsCounter from '../components/StatsCounter'; 
import CorePillars from '../components/CorePillars'; 
import DigitalPartners from '../components/DigitalPartners';
import AboutContactForm from '../components/AboutContactForm';
import ModernHero from '../components/ModernHero';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Its Digital House | Digital Creative Agency</title>
        <meta name="description" content="Its Digital House is a digital creative agency offering web design, SEO, branding, AI solutions, and digital marketing worldwide." />
        <meta name="keywords" content="digital agency, creative agency, web design agency, digital marketing agency, SEO agency, branding agency, social media marketing, mobile app development, AI solutions, custom software development, digital agency" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Its Digital House" />
        <meta property="og:image" content="https://www.itsdigitalhouse.com/og-home.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://www.itsdigitalhouse.com/og-home.jpeg" />
        <link rel="canonical" href="https://www.itsdigitalhouse.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Its Digital House | Digital Creative Agency" />
        <meta property="og:description" content="Its Digital House is a digital creative agency offering web design, SEO, branding, AI solutions, and digital marketing worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itsdigitalhouse.com/" />
        <meta property="og:site_name" content="Its Digital House" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Its Digital House | Digital Creative Agency" />
        <meta name="twitter:description" content="Its Digital House is a digital creative agency offering web design, SEO, branding, AI solutions, and digital marketing worldwide." />
        <meta name="twitter:site" content="@Itsdigitalhouse" />

        {/* Schema / Structured Data */}
        {/* Schema / Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Its Digital House",
            "url": "https://www.itsdigitalhouse.com",
            "logo": "https://www.itsdigitalhouse.com/logo.png",
            "description": "Its Digital House is a digital creative agency offering web design, SEO, branding, AI solutions, and digital marketing worldwide.",
            "areaServed": "Worldwide",
            "sameAs": [
              "https://twitter.com/Itsdigitalhouse",
              "https://www.linkedin.com/company/itsdigitalhouse"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": "English",
              "areaServed": "Worldwide"
            },
            "founder": {
              "@type": "Person",
              "name": "Its Digital House Team"
            },
            "knowsAbout": [
              "Web Design",
              "SEO",
              "Digital Marketing",
              "AI Solutions",
              "Branding",
              "Mobile App Development"
            ]
          }
        `}</script>
      </Helmet>

      <HomepageHero />
      <ServiceSection />
      <CompanyCore /> 
      <ModernHero />
      <StatsCounter /> 
      <CorePillars /> 
      <ScreenSolutions />
      <DigitalPartners />
      <AboutContactForm />
    </>
  );
};

export default Home;
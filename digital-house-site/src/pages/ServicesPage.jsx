import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesHero from '../components/ServicesHero';
import ServicesGrid from '../components/ServicesGrid';
import PortfolioPage from '../components/portfolio';
import CaseStudiesSlider from '../components/CaseStudiesSlider';

const ServicesPage = () => {
  return (
    <div className="w-full bg-white min-h-screen pt-24">
      <Helmet>
        <title>Our Services | Its Digital House - SEO, Web Dev, AI & More</title>
        <meta name="description" content="Explore Its Digital House's premium services including SEO, Web Development, Social Media Marketing, Creative Branding, and AI Solutions worldwide." />
        <meta name="keywords" content="SEO services, paid media agency, social media marketing, web development services, mobile app development, custom software development, artificial intelligence agency, digital marketing services, PPC agency, ecommerce development, UI UX design agency" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Its Digital House" />
        <link rel="canonical" href="https://www.itsdigitalhouse.com/services" />

        {/* Open Graph */}
        <meta property="og:title" content="Our Services | Its Digital House - SEO, Web Dev, AI & More" />
        <meta property="og:description" content="Explore Its Digital House's premium services including SEO, Web Development, Social Media Marketing, Creative Branding, and AI Solutions worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itsdigitalhouse.com/services" />
        <meta property="og:site_name" content="Its Digital House" />
        <meta property="og:image" content="https://www.itsdigitalhouse.com/og-services.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | Its Digital House" />
        <meta name="twitter:description" content="Explore Its Digital House's premium services including SEO, Web Development, Social Media Marketing, Creative Branding, and AI Solutions worldwide." />
        <meta name="twitter:site" content="@Itsdigitalhouse" />
        <meta name="twitter:image" content="https://www.itsdigitalhouse.com/og-services.jpeg" />
      </Helmet>

      <ServicesHero />
      <ServicesGrid />
      <PortfolioPage />
      <CaseStudiesSlider />
    </div>
  );
};

export default ServicesPage;
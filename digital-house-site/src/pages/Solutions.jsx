import React from 'react';
import { Helmet } from 'react-helmet-async';
import SolutionHero from '../components/SolutionHero';
import SolutionGrid from '../components/SolutionGrid';
import SolutionProcess from '../components/SolutionProcess';
import SolutionFAQ from '../components/SolutionFAQ';
import SolutionCTA from '../components/SolutionCTA';

const Solutions = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Helmet>
        <title>Digital Solutions | Its Digital House - Transform Your Business</title>
        <meta name="description" content="Its Digital House delivers end-to-end digital solutions including ERP systems, POS software, eCommerce platforms, CRM tools, AI automation, and custom enterprise software for businesses worldwide." />
        <meta name="keywords" content="digital solutions, ERP solutions, POS system, ecommerce solutions, CRM software, AI automation, enterprise software, business digital transformation, custom software solutions, retail technology, SaaS solutions, cloud solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Its Digital House" />
        <link rel="canonical" href="https://www.itsdigitalhouse.com/solutions" />

        {/* Open Graph */}
        <meta property="og:title" content="Digital Solutions | Its Digital House - Transform Your Business" />
        <meta property="og:description" content="End-to-end digital solutions for businesses worldwide — ERP, POS, eCommerce, CRM, AI automation and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itsdigitalhouse.com/solutions" />
        <meta property="og:site_name" content="Its Digital House" />
        <meta property="og:image" content="https://www.itsdigitalhouse.com/og-solutions.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Solutions | Its Digital House" />
        <meta name="twitter:description" content="Transform your business with our end-to-end digital solutions. ERP, AI, eCommerce & more worldwide." />
        <meta name="twitter:site" content="@Itsdigitalhouse" />
        <meta name="twitter:image" content="https://www.itsdigitalhouse.com/og-solutions.jpeg" />
      </Helmet>

      <SolutionHero />
      <SolutionGrid />
      <SolutionProcess />
      <SolutionFAQ />
      <SolutionCTA />
    </div>
  );
};

export default Solutions;

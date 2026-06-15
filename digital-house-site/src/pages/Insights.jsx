import React from 'react';
import { Helmet } from 'react-helmet-async';
import InsightHero from '../components/InsightHero';
import InsightTicker from '../components/InsightTicker';
import InsightFeatured from '../components/InsightFeatured';
import InsightGrid from '../components/InsightGrid';
import AboutContact from '../components/AboutContactForm';

const Insights = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Helmet>
        <title>Insights & Blog | Its Digital House - Digital Marketing Tips & Trends</title>
        <meta name="description" content="Stay ahead with the latest digital marketing insights, SEO tips, web development trends, AI updates, branding strategies, and industry news from the experts at Its Digital House." />
        <meta name="keywords" content="digital marketing blog, SEO tips, web design trends, AI in marketing, branding insights, social media strategy, digital agency blog, marketing insights, content marketing tips, ecommerce trends, digital transformation insights" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Its Digital House" />
        <link rel="canonical" href="https://www.itsdigitalhouse.com/insights" />

        {/* Open Graph */}
        <meta property="og:title" content="Insights & Blog | Its Digital House" />
        <meta property="og:description" content="Latest digital marketing insights, SEO tips, AI trends, and branding strategies from Its Digital House." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.itsdigitalhouse.com/insights" />
        <meta property="og:site_name" content="Its Digital House" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Insights & Blog | Its Digital House" />
        <meta name="twitter:description" content="Digital marketing tips, SEO insights, AI trends and more from Its Digital House experts." />
        <meta name="twitter:site" content="@Itsdigitalhouse" />
      </Helmet>

      <InsightsHero />
      <InsightTicker />
      <InsightFeatured />
      <InsightGrid />
      <AboutContact />
    </div>
  );
};

export default Insights;

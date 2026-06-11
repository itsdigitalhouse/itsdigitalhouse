import React from 'react';
import InsightHero from '../components/InsightHero';
import InsightTicker from '../components/InsightTicker'; // <- Naya Text Ticker Component Linked
import InsightFeatured from '../components/InsightFeatured';
import InsightGrid from '../components/InsightGrid';
import InsightsHero from '../components/InsightsHero'
import AboutContact from '../components/AboutContactForm';

const Insights = () => {
  return (
    <div className="w-full min-h-screen bg-white">

      <InsightsHero />
      <InsightTicker />
      <InsightFeatured />
      <InsightGrid />
      <AboutContact />
    </div>
  );
};

export default Insights;
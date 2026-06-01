import React from 'react';
import InsightHero from '../components/InsightHero';
import InsightTicker from '../components/InsightTicker'; // <- Naya Text Ticker Component Linked
import InsightFeatured from '../components/InsightFeatured';
import InsightGrid from '../components/InsightGrid';
import InsightNewsletter from '../components/InsightNewsletter';

const Insights = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 1. Page Anchor Intro Typography */}
      <InsightHero />

      {/* 2. Infinite Automated Technology Text Ticker (Edge-to-Edge) */}
      <InsightTicker />

      {/* 3. Landscape Highlighted Featured Banner */}
      <InsightFeatured />

      {/* 4. Categorized Resource Architecture Grid */}
      <InsightGrid />

      {/* 5. Wide Deep-Dark Lead Subscriptions Terminal */}
      <InsightNewsletter />
    </div>
  );
};

export default Insights;
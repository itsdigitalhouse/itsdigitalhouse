import React from 'react';
import SolutionHero from '../components/SolutionHero';
import SolutionGrid from '../components/SolutionGrid';
import SolutionProcess from '../components/SolutionProcess';
import SolutionFAQ from '../components/SolutionFAQ'; // <- FAQ Import
import SolutionCTA from '../components/SolutionCTA';

const Solutions = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 1. Page Header & Intro Hook */}
      <SolutionHero />

      {/* 2. Core Offerings & Services Matrix */}
      <SolutionGrid />

      {/* 3. Actionable Methodology Framework */}
      <SolutionProcess />

      {/* 4. Objection Handling Loop (FAQs) */}
      <SolutionFAQ />

      {/* 5. Final Conversion Engine */}
      <SolutionCTA />
    </div>
  );
};

export default Solutions;
import React from 'react';
import coreDigitalVideo from '../assets/the-core-digital-agency.mp4';

const HeroSlider = () => {
  return (
    <div className="relative w-full h-[100vh] sm:h-screen bg-black overflow-hidden">
      
      {/* Background Media Container - Fully Responsive Containment */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={coreDigitalVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Premium Dark Glassmorphism Overlay - Stronger on Mobile for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/30 sm:from-black/80 sm:via-black/40 sm:to-black/20"></div>
        <div className="absolute inset-0 bg-black/40 sm:bg-black/30"></div>
      </div>

      {/* Left-Aligned Responsive Content Grid */}
      <div className="relative z-10 max-w-screen-2xl mx-auto h-full px-4 sm:px-6 lg:px-12 flex items-center">
        <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl text-left space-y-5 sm:space-y-6 md:space-y-8 pt-16 sm:pt-0">
          
          {/* Heading - Fluid Text sizing for all breakpoints */}
          <h1 className="font-redhat-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.1] uppercase drop-shadow-md">
            BUILDING NEXT GEN <br className="hidden sm:inline" />DIGITAL EXPERIENCES
          </h1>
          
          {/* Paragraph - Responsive widths and tracking */}
          <p className="font-redhat-text text-xs sm:text-sm md:text-base md:text-lg text-slate-300 font-medium tracking-wide max-w-md sm:max-w-xl leading-relaxed drop-shadow-sm">
            We engineer custom software solutions, scalable cloud applications, and high-performance websites tailored to accelerate your business growth.
          </p>
          
          {/* Button Section - Mobile tap target friendly sizing */}
          <div className="pt-2 sm:pt-0">
            <button className="group relative w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-slate-950 border border-white font-redhat-display font-black text-xs sm:text-[13px] tracking-widest uppercase rounded-full overflow-hidden transition-colors duration-300 shadow-lg backface-visibility-hidden transform-gpu">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Schedule Free Consultation
              </span>
              <span className="absolute inset-0 bg-slate-950 scale-x-0 group-hover:scale-x-105 origin-left transition-transform duration-500 ease-out rounded-full pointer-events-none"></span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default HeroSlider;
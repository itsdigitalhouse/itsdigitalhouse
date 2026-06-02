import React from 'react';
import { motion } from 'framer-motion';
import coreDigitalVideo from '../assets/the-core-digital-agency.mp4';

const HeroSlider = () => {
  // Framer Motion Animation Variants for staggering elements on load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Ek ke baad ek element loading sequence
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    }
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* Background Media Container */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={coreDigitalVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dynamic Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/80"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content Area wrapped with Motion Container */}
      <motion.div 
        className="relative z-10 max-w-screen-2xl mx-auto h-full px-4 sm:px-6 lg:px-12 flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-4xl text-center space-y-8 flex flex-col items-center mt-[-2vh]">
          
          {/* Motion Animated Heading */}
          <motion.h1 
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-widest text-white leading-[1.2] sm:leading-[1.15] uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] w-full break-words"
            variants={itemVariants}
          >
            WHERE IDEAS <br className="hidden sm:block" />
            <span className="block sm:inline-block sm:whitespace-nowrap mt-1 sm:mt-0 tracking-wide bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              MADE DIGITAL
            </span>
          </motion.h1>
          
          {/* Motion Animated Paragraph */}
          <motion.p 
            className="text-xs sm:text-base md:text-lg text-slate-300 font-normal tracking-wide max-w-xl leading-relaxed drop-shadow-sm mx-auto px-4 sm:px-0"
            variants={itemVariants}
          >
            We design, develop, and grow brands in the digital world from visual identity to full-stack software, social media, and performance marketing.
          </motion.p>
          
          {/* Motion Animated Button */}
          <motion.div 
            className="pt-4 w-full sm:w-auto px-6 sm:px-0"
            variants={itemVariants}
          >
            <button className="w-full sm:w-auto group relative px-10 py-5 bg-white text-slate-950 border border-white font-black text-[12px] sm:text-[14px] tracking-widest uppercase rounded-full overflow-hidden transition-all duration-300 shadow-xl backface-visibility-hidden transform-gpu hover:shadow-2xl">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                GET A FREE CONSULTATION
              </span>
              <span className="absolute inset-0 bg-slate-950 scale-x-0 group-hover:scale-x-105 origin-left transition-transform duration-500 ease-out rounded-full pointer-events-none"></span>
            </button>
          </motion.div>

        </div>
      </motion.div>

    </div>
  );
};

export default HeroSlider;
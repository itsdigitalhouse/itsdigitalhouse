import React from 'react';
import { motion } from 'framer-motion';
import bgVideo from '../assets/background-animation.mp4';

const HeroSlider = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 90, damping: 22 } 
    }
  };

  return (
    <div className="relative w-full h-screen bg-[#f5f2ee] overflow-hidden flex flex-col justify-start z-10">
      
      {/* ========================================================================
        DYNAMIC VIDEO BACKGROUND INFRASTRUCTURE
        ========================================================================
      */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0 overflow-hidden">
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Subtle overlay to maintain interface depth */}
      <div className="absolute inset-0 bg-black/[0.03] pointer-events-none z-5" />

      {/* ========================================================================
        MAIN TYPOGRAPHY STATEMENT SECTION
        ========================================================================
      */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-start pt-[24vh]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-5xl text-center space-y-6">
          
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-[1000] tracking-tighter text-[#0a0a0a] leading-[0.95] uppercase break-words px-2"
            variants={itemVariants}
          >
            Dynamic Creative <br />
            Studio, Merging The <br />
            Realms Of Design With <br />
            Technical Innovation.
          </motion.h1>
          
          <motion.p 
            className="text-xs sm:text-sm text-gray-500 font-bold tracking-widest max-w-lg uppercase mx-auto pt-2"
            variants={itemVariants}
          >
            // Elevating Digital Identities Through Code & Media
          </motion.p>

        </div>
      </motion.div>

    </div>
  );
};

export default HeroSlider;
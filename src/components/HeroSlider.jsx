import React from 'react';
import { motion } from 'framer-motion';
import bgVideo from '../assets/anime-vedio.mp4';

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
    // Mobile par height 50vh, desktop par h-screen
    <div className="relative w-full h-[50vh] sm:h-screen bg-[#f5f2ee] overflow-hidden flex flex-col justify-start z-10">
      
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none z-0 overflow-hidden">
        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' 
          }}
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Heading Section */}
      <motion.div 
        // Mobile par pt-24 (navbar height) + mt-4 (extra gap)
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center justify-start pt-24 mt-4 lg:pt-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-5xl text-center">
          <motion.h1 
            // Mobile par text chhota (28px) taake navbar ke neeche fit ho
            className="text-[22px] sm:text-[50px] md:text-[65px] lg:text-[70px] font-[1000] tracking-[-0.03em] text-[#0a0a0a] leading-[0.9] uppercase"
            variants={itemVariants}
          >
            <span className="block mb-1 sm:mb-2">Creative Digital Agency</span>
            <span className="block mb-1 sm:mb-2">Transforming Ideas into</span>
            <span className="block mb-1 sm:mb-2">Powerful Brands Through</span>
            <span className="block">Design, Strategy & Technology.</span>
          </motion.h1>
        </div>
      </motion.div>

    </div>
  );
};

export default HeroSlider;
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import heroImg from '../assets/services-hero.png';

const ServicesHero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-30, 30]), springConfig);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const x = (clientX / innerWidth) - 0.5;
    const y = (clientY / innerHeight) - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-[87vh] lg:h-[87vh] bg-[#1D0727] text-white flex items-center overflow-hidden font-sans pt-24"
    >
      
      {/* Bottom to Top Smooth Gradient Shade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#1D0727]/80 to-[#1D0727] z-0 pointer-events-none" />
      
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4a154b_1px,transparent_1px)] [background-size:20px_20px] z-0 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10 w-full">
        
        <div className="lg:col-span-4 flex flex-col justify-end h-full order-1 z-30 relative pointer-events-none lg:mr-[-100px] pt-48 lg:pt-64 pb-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col uppercase italic font-[1000] tracking-tighter leading-[0.7]" 
            style={{ fontFamily: "'Unbounded', 'League Spartan', sans-serif" }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-[2.6rem] text-left block whitespace-nowrap text-white">
              CREATIVE SOLUTIONS
            </h1>
            
            <h1 className="text-2xl md:text-4xl lg:text-[2.6rem] text-left block whitespace-nowrap pl-[12%] md:pl-[15%] lg:pl-[18%] text-white mt-1">
              BUILDING BRANDS
            </h1>
          </motion.div>
        </div>

        <div className="lg:col-span-4 flex justify-center items-center relative w-full min-h-[420px] lg:min-h-[580px] order-2 z-10 overflow-visible cursor-pointer">
          <div className="absolute w-96 h-96 bg-[#d24a8a] blur-[160px] rounded-full opacity-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
          
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
              x: moveX, 
              y: moveY,
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d"
            }}
            src={heroImg} 
            alt="Creative Solutions Digital House" 
            className="w-full max-w-[520px] lg:max-w-[650px] md:max-w-[520px] h-auto object-contain relative z-10 transform scale-145 lg:scale-155 origin-center select-none pointer-events-none" 
          />
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end h-full order-3 lg:text-left text-right pt-48 lg:pt-64 lg:pl-4 z-20 pb-10">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-center lg:flex-wrap gap-x-3 gap-y-1 w-full" 
          >
            <span className="text-[10px] lg:text-[11px] tracking-[0.22em] text-gray-400 font-normal uppercase whitespace-nowrap">
              Design. Develop. Scale Digital Experiences
            </span>
            
            <span className="hidden lg:inline text-gray-600"></span>

            <span className="text-xs lg:text-[13px] font-normal text-gray-300 tracking-wide uppercase whitespace-nowrap">
              HELPING BRANDS GROW WITH CONFIDENCE IN DIGITAL HOUSE
            </span>
          </motion.div>
        </div>

      </div>

    </div>
  );
};

export default ServicesHero;
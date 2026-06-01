import React from 'react';
import { motion } from 'framer-motion';

const MarqueeSkills = () => {
  const skills = [
    "E-COMMERCE", "REAL ESTATE", "RESTAURANTS", "UI UX DESIGN", 
    "3D ANIMATION", "BRANDING", "DIGITAL MARKETING", "WEB DEVELOPMENT"
  ];

  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  const MarqueeRow = ({ items, direction, bgStyle, textColorClass, tiltClass, zIndex, useGradientText }) => (
    /* Shadow removed from here as well */
    <div className={`absolute w-[180%] ${tiltClass} ${zIndex} overflow-hidden`}>
      <div 
        className="flex items-center border-y-[1.5px] border-black/10"
        style={bgStyle}
      >
        <motion.div
          animate={{ x: direction === "left" ? [0, -1500] : [-1500, 0] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center py-6 md:py-10"
        >
          {[...items, ...items, ...items].map((item, index) => (
            <span
              key={index}
              className={`text-4xl md:text-[100px] font-[1000] uppercase italic tracking-tighter flex items-center leading-none ${textColorClass}`}
              style={useGradientText ? { 
                backgroundImage: neonGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              } : {}}
            >
              {item} 
              <span 
                className={`ml-12 md:ml-24 w-5 h-5 md:w-10 md:h-10 rounded-full ${useGradientText ? '' : 'bg-black'}`} 
                style={useGradientText ? { background: neonGradient } : {}}
              />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );

  return (
    /* Section Container - Pure Clean Look */
    <section className="relative bg-white h-[250px] md:h-[250px] w-full overflow-hidden flex items-center justify-center my-8">
      
      {/* Back Row (Black) */}
      <MarqueeRow 
        items={skills} 
        direction="left" 
        bgStyle={{ backgroundColor: "#111111" }} 
        textColorClass="" 
        useGradientText={true}
        tiltClass="rotate-[-6deg] origin-center translate-y-[-10px]" 
        zIndex="z-10"
      />

      {/* Front Row (Full Gradient) */}
      <MarqueeRow 
        items={skills} 
        direction="right" 
        bgStyle={{ background: neonGradient }} 
        textColorClass="text-black" 
        useGradientText={false}
        tiltClass="rotate-[6deg] origin-center translate-y-[10px]" 
        zIndex="z-20"
      />

      {/* Saaray gradient overlays aur white shadows remove kar diye hain */}
      
    </section>
  );
};

export default MarqueeSkills;
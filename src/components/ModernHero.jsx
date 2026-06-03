import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Icons Pattern
import bgPattern from '../assets/digital_icons_pattern.jpg'; 

const ModernHero = () => {
  const containerRef = useRef(null);

  // 6 Custom Colors Brand Gradient String
  const gradientColors = "linear-gradient(45deg, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 350, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 350, damping: 30 });

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const spotlightSize = 120; // Spotlight Radius
  const maskImage = useTransform(
    [springX, springY],
    ([x, y]) => `circle(${spotlightSize}px at ${x}px ${y}px)`
  );

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#070707] flex items-center overflow-hidden cursor-none select-none px-4 sm:px-8 md:px-16 lg:px-24"
    >
      {/* 1. BASE LAYER: Dark Low-Opacity Grey Pattern Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: '480px',
          backgroundRepeat: 'repeat',
          filter: 'grayscale(100%) brightness(0.4)',
        }}
      />

      {/* 2. COLOR LAYER / FOREGROUND MASKED TEXT (Gole ke andar jo solid layout reveal karega) */}
      <motion.div
        className="absolute inset-0 z-40 pointer-events-none"
        style={{
          clipPath: maskImage,
          WebkitClipPath: maskImage,
        }}
      >
        <div className="relative min-h-screen w-full flex items-center px-4 sm:px-8 md:px-16 lg:px-24">
          
          <div 
            className="absolute inset-0 z-0"
            style={{
              background: gradientColors,
              WebkitMaskImage: `url(${bgPattern})`,
              maskImage: `url(${bgPattern})`,
              WebkitMaskSize: '480px',
              maskSize: '480px',
              WebkitMaskRepeat: 'repeat',
              maskRepeat: 'repeat',
            }}
          />

          <div className="relative z-50 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-12">
            {/* Left Box Mirror Spacer */}
            <div className="lg:col-span-3 opacity-0 select-none pointer-events-none">
              <span style={{ fontFamily: "'Unbounded', sans-serif" }}>"</span>
            </div>

            {/* RIGHT COLUMN: Active Exact Alignment Layout Match */}
            <div className="lg:col-span-9 flex flex-col items-start lg:items-end text-left w-full space-y-12">
              <div className="relative w-full text-left">
                <h1 className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-[120px] xl:text-[135px] leading-[0.85] tracking-tighter uppercase whitespace-nowrap text-[#f5f5f0]">
                  {/* Ideas Made: Aligned Right indent */}
                  <span className="block mb-2 translate-x-20 xl:translate-x-32 transition-transform duration-300">
                    IDEAS MADE
                  </span>
                  {/* Digital: Flushed Left indent */}
                  <span className="block translate-x-0 transition-transform duration-300">
                    DIGITAL
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3. CINEMATIC ORB BORDER */}
      <motion.div
        className="absolute z-50 pointer-events-none border border-white/20 rounded-full bg-white/[0.02] shadow-[0_0_50px_rgba(255,255,255,0.05)]"
        style={{
          width: spotlightSize * 2,
          height: spotlightSize * 2,
          left: springX,
          top: springY,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* 4. BASE GROUND LAYOUT CONTAINER (Static Wireframe Base) */}
      <div className="relative z-30 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-12">
        
        {/* LEFT COLUMN: 3 Lines Text Structure */}
        <div className="lg:col-span-3 flex flex-col items-start space-y-6 md:space-y-8 z-30 lg:mt-24">
          <div className="space-y-1">
            <div className="text-[#f5f5f0] font-black text-[10px] tracking-[0.35em] uppercase opacity-40 leading-normal">
              YOUR
            </div>
            <div className="text-[#f5f5f0] font-black text-[10px] tracking-[0.35em] uppercase opacity-40 leading-normal">
              GATEWAY TO
            </div>
            <div className="text-[#f5f5f0] font-black text-[10px] tracking-[0.35em] uppercase opacity-40 leading-normal">
              THE DIGITAL WORLD
            </div>
          </div>
          
          <span 
            className="text-[#f5f5f0] text-[120px] md:text-[150px] font-black leading-none select-none opacity-100 h-16 flex items-center pl-1 tracking-tighter"
            style={{ fontFamily: "'Unbounded', sans-serif" }}
          >
            "
          </span>
        </div>

        {/* RIGHT COLUMN: Static Wireframe Layout Alignment matching exactly */}
        <div className="lg:col-span-9 flex flex-col items-start lg:items-end text-left w-full space-y-12">
          
          <div className="relative w-full text-left">
            <h1 className="font-black text-4xl sm:text-6xl md:text-7xl lg:text-[120px] xl:text-[135px] leading-[0.85] tracking-tighter uppercase whitespace-nowrap">
              {/* Wireframe Top Line: Right Indented Shift */}
              <span 
                className="block text-transparent mb-2 translate-x-20 xl:translate-x-32" 
                style={{ WebkitTextStroke: '1.5px rgba(245,245,240,0.18)' }}
              >
                IDEAS MADE
              </span>
              
              {/* Wireframe Bottom Line: Base Left Aligned */}
              <span 
                className="block bg-clip-text text-transparent pb-2 translate-x-0"
                style={{ backgroundImage: gradientColors }}
              >
                DIGITAL
              </span>
            </h1>
          </div>

          {/* BOTTOM ALIGNED PARAGRAPH */}
          <div className="w-full max-w-xl lg:text-left mt-8 lg:self-start lg:ml-auto">
            <p className="text-[#f5f5f0]/50 text-[10px] md:text-[11px] leading-relaxed tracking-[0.22em] uppercase font-bold">
              DIGITAL HOUSE IS A DESIGN DRIVEN, DEVELOPMENT FOCUSED AGENCY DEDICATED TO HELPING BRANDS GROW BY BLENDING CREATIVITY WITH SMART DIGITAL STRATEGIES TO CREATE MEANINGFUL EXPERIENCES FROM STANDOUT BRANDING TO HIGH PERFORMING WEBSITES & RESULT ORIENTED MARKETING.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ModernHero;
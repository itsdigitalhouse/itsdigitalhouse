import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Icons Pattern
import bgPattern from '../assets/digital_icons_pattern.jpg'; 

const ModernHero = () => {
  const containerRef = useRef(null);

  // Aapke 6 colors ka string
  const gradientColors = "linear-gradient(45deg, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 35 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 35 });

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const spotlightSize = 140; 
  const maskImage = useTransform(
    [springX, springY],
    ([x, y]) => `circle(${spotlightSize}px at ${x}px ${y}px)`
  );

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full bg-[#050505] flex flex-col justify-center items-center overflow-hidden cursor-none"
    >
      {/* 1. BASE LAYER: Grey Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: '450px',
          backgroundRepeat: 'repeat',
          filter: 'grayscale(100%) brightness(0.5)',
        }}
      />

      {/* 2. COLOR LAYER: Revealed by Spotlight */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          clipPath: maskImage,
          WebkitClipPath: maskImage,
        }}
      >
        {/* Is div mein background gradient hai aur mask mein pattern */}
        <div 
          className="absolute inset-0"
          style={{
            background: gradientColors,
            WebkitMaskImage: `url(${bgPattern})`,
            maskImage: `url(${bgPattern})`,
            WebkitMaskSize: '450px',
            maskSize: '450px',
          }}
        />
      </motion.div>

      {/* 3. SPOTLIGHT BORDER */}
      <motion.div
        className="absolute z-20 pointer-events-none border-[1px] border-white/20 rounded-full"
        style={{
          width: spotlightSize * 2,
          height: spotlightSize * 2,
          left: springX,
          top: springY,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* 4. CONTENT AREA */}
      <div className="relative z-30 container mx-auto px-6 flex flex-col items-center">
        
        {/* Quote */}
        <div className="w-full max-w-5xl flex items-center justify-start gap-6 mb-[-10px] lg:ml-[-110px]">
          <span className="text-[#f5f5f0] text-[130px] lg:text-[190px] font-serif leading-none pt-10 select-none opacity-90">“</span>
          <div className="text-[#f5f5f0] font-bold text-[10px] lg:text-[11px] leading-tight tracking-[0.4em] mt-24 uppercase opacity-70">
            YOUR GATEWAY TO<br /> THE DIGITAL WORLD
          </div>
        </div>

        {/* Headlines */}
        <div className="text-center relative select-none">
          {/* Background Text (Outline + Gradient) */}
          <h1 className="font-black text-6xl lg:text-[155px] leading-[0.78] tracking-tighter uppercase">
            <span 
              className="block text-transparent" 
              style={{ WebkitTextStroke: '1.2px rgba(245,245,240,0.15)' }}
            >
              IDEAS MADE
            </span>
            <span 
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: gradientColors }}
            >
              DIGITAL
            </span>
          </h1>

          {/* Foreground Text (Revealed by spotlight - Solid Beige) */}
          <motion.h1
            style={{ 
                clipPath: maskImage,
                WebkitClipPath: maskImage 
            }}
            className="absolute inset-0 font-black text-6xl lg:text-[155px] leading-[0.78] tracking-tighter uppercase pointer-events-none text-[#f5f5f0] z-40"
          >
            <span className="block">IDEAS MADE</span>
            <span className="block">DIGITAL</span>
          </motion.h1>
        </div>

        {/* Footer Text */}
        <div className="max-w-4xl text-center mt-20">
          <p className="text-[#f5f5f0]/40 text-[10px] lg:text-[12px] leading-relaxed tracking-[0.25em] uppercase font-bold max-w-2xl mx-auto">
            Its Digital House is a design driven, development focused agency dedicated to helping brands grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
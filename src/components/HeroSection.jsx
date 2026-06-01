import React from 'react';

// --- Image Imports ---
// In images ka path apne project ke mutabiq set kar lein
import bgPattern from '../assets/bg-pattern.png'; // Wo black icons wala pattern
import whatsappIcon from '../assets/whatsapp-icon.png'; // Bottom left icon

const HeroSection = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden flex flex-col justify-center items-center">
      
      {/* 1. Background Icon Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-40"
        style={{ 
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: '400px', // Pattern ko thora dense rakhne ke liye
          backgroundRepeat: 'repeat'
        }}
      />

      {/* 2. Center Gradient Circle */}
      <div className="absolute z-10 w-[500px] h-[500px] rounded-full blur-[80px] opacity-60"
        style={{
          background: 'radial-gradient(circle, #ff007a 0%, #00d4ff 100%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* 3. Main Content Wrapper */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center">
        
        {/* Upper Part: Quote and Small Text */}
        <div className="flex items-start gap-4 mb-4 mr-auto lg:ml-20">
            <span className="text-white text-8xl font-serif leading-none">"</span>
            <div className="text-white font-unbounded font-bold text-[10px] leading-tight tracking-widest mt-6">
                YOUR GATEWAY TO<br/> THE DIGITAL WORLD
            </div>
        </div>

        {/* Headline Section */}
        <div className="text-center mb-10">
            <h1 className="font-unbounded font-black text-6xl lg:text-9xl leading-none">
                {/* Outline Text */}
                <span className="block text-transparent stroke-white" 
                      style={{ WebkitTextStroke: '2px white' }}>
                    IDEAS MADE
                </span>
                {/* Gradient Text */}
                <span className="block bg-gradient-to-r from-[#ff007a] to-[#00d4ff] bg-clip-text text-transparent">
                    DIGITAL
                </span>
            </h1>
        </div>

        {/* Description Paragraph */}
        <div className="max-w-2xl text-center">
            <p className="text-white/80 font-league-spartan text-sm lg:text-base leading-relaxed tracking-wide uppercase">
                Digital House is a design driven, development focused agency dedicated to 
                helping brands grow by blending creativity with smart digital strategies 
                to create meaningful experiences from standout branding to high 
                performing websites & result oriented marketing.
            </p>
        </div>

      </div>

      {/* WhatsApp Float Icon */}
      <div className="absolute bottom-10 left-10 z-30 cursor-pointer hover:scale-110 transition-transform">
        <img src={whatsappIcon} alt="Contact" className="w-12 h-12" />
      </div>

    </div>
  );
};

export default HeroSection;
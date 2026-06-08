import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Imports ---
import webDev from '../assets/web-dev.jpg';
import brandingImg from '../assets/branding.jpg';
import uiuxImg from '../assets/uiux.jpg';
import digitalImg from '../assets/digital-marketing.png';
import contentImg from '../assets/content-strategy.png';
import ecommerceImg from '../assets/ecommerce.jpg';

const ServiceSection = () => {
  const [active, setActive] = useState(null);

  const services = [
    { id: 1, title: "WEBSITE DEVELOPMENT", sub: "WEB & APP", img: webDev },
    { id: 2, title: "BRANDING & IDENTITY", sub: "VISUALS", img: brandingImg },
    { id: 3, title: "UI/UX EXPERIENCE", sub: "DESIGN", img: uiuxImg },
    { id: 4, title: "DIGITAL MARKETING", sub: "GROWTH", img: digitalImg },
    { id: 5, title: "CONTENT STRATEGY", sub: "COPYWRITING", img: contentImg },
    { id: 6, title: "E-COMMERCE", sub: "SCALABLE", img: ecommerceImg }
  ];

  return (
    <section className="bg-white h-[100dvh] w-full flex items-center justify-center relative overflow-hidden">
      
      {/* Background Cinematic Image - Darker & More Intense */}
      <AnimatePresence mode="wait">
        {active && (
          <motion.img
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }} // Opacity barha di
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            src={active.img}
            className="absolute inset-0 w-full h-full object-cover z-0 blur-[2px] scale-105"
          />
        )}
      </AnimatePresence>
      
      {/* Dark Overlay - Image ko mazeed dark aur readable banane ke liye */}
      <div className="absolute inset-0 bg-white/70 z-0" />

      {/* Main Container */}
      <div className="w-full max-w-7xl mx-auto z-10 flex items-center justify-center gap-16 px-10 h-full">
        
        {/* Left Side: 6 Headings */}
        <div className="flex flex-col justify-center gap-5 w-1/2">
          {services.map((s, index) => (
            <div 
              key={s.id} 
              onMouseEnter={() => setActive(s)} 
              onMouseLeave={() => setActive(null)} 
              className="cursor-pointer group flex items-baseline gap-4"
            >
              <span className="text-black/40 text-2xl font-bold transition-colors group-hover:text-[#f0544f]">0{index + 1}.</span>
              <div className="flex flex-col">
                <h1 className="text-3xl font-black text-black group-hover:text-[#f0544f] transition-all duration-300">
                  {s.title}
                </h1>
                <span className="text-black/60 text-[10px] tracking-[0.3em] mt-1 uppercase font-bold">{s.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side: Phone */}
        <div className="w-[240px] h-[480px] bg-black rounded-[40px] border-[8px] border-black shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden relative flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={active?.id || 'default'}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.3 }}
              src={active ? active.img : webDev} 
              className="w-full h-full object-cover" 
            />
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;
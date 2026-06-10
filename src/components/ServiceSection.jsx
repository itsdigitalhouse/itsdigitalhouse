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
  const [mobileActive, setMobileActive] = useState(null);

  const services = [
    { id: 1, title: "WEBSITE DEVELOPMENT", sub: "WEB & APP",       img: webDev       },
    { id: 2, title: "BRANDING & IDENTITY",  sub: "VISUALS",         img: brandingImg  },
    { id: 3, title: "UI/UX EXPERIENCE",     sub: "DESIGN",          img: uiuxImg      },
    { id: 4, title: "DIGITAL MARKETING",    sub: "GROWTH",          img: digitalImg   },
    { id: 5, title: "CONTENT STRATEGY",     sub: "COPYWRITING",     img: contentImg   },
    { id: 6, title: "E-COMMERCE",           sub: "SCALABLE",        img: ecommerceImg }
  ];

  const handleMobileTap = (s) => {
    setMobileActive(prev => prev?.id === s.id ? null : s);
  };

  return (
    <section className="bg-white w-full relative overflow-hidden">

      {/* ===================== DESKTOP LAYOUT (lg+) ===================== */}
      <div className="hidden lg:flex items-center justify-center h-[100dvh] relative overflow-hidden">

        {/* BG cinematic image */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.img
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={active.img}
              className="absolute inset-0 w-full h-full object-cover z-0 blur-[2px] scale-105"
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-white/70 z-0" />

        {/* Content */}
        <div className="w-full max-w-7xl mx-auto z-10 flex items-center justify-center gap-16 px-10 h-full">

          {/* Left: 6 Headings */}
          <div className="flex flex-col justify-center gap-5 w-1/2">
            {services.map((s, index) => (
              <div
                key={s.id}
                onMouseEnter={() => setActive(s)}
                onMouseLeave={() => setActive(null)}
                className="cursor-pointer group flex items-baseline gap-4"
              >
                <span className="text-black/40 text-2xl font-bold transition-colors group-hover:text-[#f0544f]">
                  0{index + 1}.
                </span>
                <div className="flex flex-col">
                  <h2 className="text-3xl font-black text-black group-hover:text-[#f0544f] transition-all duration-300">
                    {s.title}
                  </h2>
                  <span className="text-black/60 text-[10px] tracking-[0.3em] mt-1 uppercase font-bold">
                    {s.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Phone mockup */}
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
      </div>

      {/* ===================== MOBILE / TABLET LAYOUT (< lg) ===================== */}
      <div className="lg:hidden w-full py-14 px-5 sm:px-8">

        {/* Section label */}
        <p className="text-[10px] tracking-[0.35em] font-bold text-black/40 uppercase mb-3">
          Our Services
        </p>
        <h2 className="text-3xl sm:text-4xl font-black text-black uppercase leading-tight mb-10">
          What We Do
        </h2>

        {/* Service accordion cards */}
        <div className="flex flex-col gap-3">
          {services.map((s, index) => {
            const isOpen = mobileActive?.id === s.id;
            return (
              <motion.div
                key={s.id}
                layout
                onClick={() => handleMobileTap(s)}
                className={`rounded-2xl overflow-hidden cursor-pointer border transition-all duration-300 ${
                  isOpen
                    ? 'border-[#f0544f]'
                    : 'border-black/10'
                }`}
              >
                {/* Header row */}
                <div className={`flex items-center justify-between px-5 py-4 transition-colors duration-300 ${
                  isOpen ? 'bg-[#f0544f]' : 'bg-white'
                }`}>
                  <div className="flex items-baseline gap-3">
                    <span className={`text-base font-bold transition-colors duration-300 ${
                      isOpen ? 'text-white/60' : 'text-black/30'
                    }`}>
                      0{index + 1}.
                    </span>
                    <div>
                      <p className={`text-base sm:text-lg font-black uppercase transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-black'
                      }`}>
                        {s.title}
                      </p>
                      <p className={`text-[9px] tracking-[0.3em] font-bold uppercase mt-0.5 transition-colors duration-300 ${
                        isOpen ? 'text-white/70' : 'text-black/40'
                      }`}>
                        {s.sub}
                      </p>
                    </div>
                  </div>

                  {/* Plus / Minus icon */}
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`text-2xl font-thin leading-none transition-colors duration-300 ${
                      isOpen ? 'text-white' : 'text-black/40'
                    }`}
                  >
                    +
                  </motion.span>
                </div>

                {/* Expandable image */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 200, opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <img
                        src={s.img}
                        alt={s.title}
                        className="w-full h-[200px] object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default ServiceSection;

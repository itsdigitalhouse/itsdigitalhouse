import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Imports ---
import webDev from '../assets/web-dev.jpg';
import brandingImg from '../assets/branding.jpg';
import uiuxImg from '../assets/uiux.jpg';
import digitalImg from '../assets/digital-marketing.png';
import contentImg from '../assets/content-strategy.png';
import ecommerceImg from '../assets/ecommerce.jpg';
import animationVideo from '../assets/animation.mp4';

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
    <section className="w-full h-[100dvh] relative overflow-hidden">

      {/* ===================== DESKTOP LAYOUT (lg+) ===================== */}
      <div className="hidden lg:flex items-center justify-center w-full h-full relative overflow-hidden">

        {/* ── LAYER 1: Dark base ── */}
        <div className="absolute inset-0 z-0 bg-[#0a0a1a] pointer-events-none" />

        {/* ── LAYER 2: Video — sirf tab jab koi hover nahi ── */}
        <motion.div
          animate={{ opacity: active ? 0 : 1 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 z-[1] pointer-events-none"
        >
          <video
            src={animationVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
          />
        </motion.div>

        {/* ── LAYER 3: Hover image — video ki jagah aata hai ── */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.img
              key={active.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              src={active.img}
              className="absolute inset-0 w-full h-full object-cover z-[2] scale-105 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* ── LAYER 4: Dark tint overlay (FIXED HERE) ── */}
        {/* Is layer mein strong background aur blur laga diya hai taake text clearly visible rahay */}
        <div className={`absolute inset-0 z-[3] pointer-events-none transition-all duration-500 ${
          active ? 'bg-[#0a0a1a]/75 backdrop-blur-sm' : 'bg-transparent backdrop-blur-none'
        }`} />

        {/* ── LAYER 5: Content ── */}
        <div className="w-full max-w-7xl mx-auto z-[4] flex items-center justify-center gap-16 px-10 h-full">

          {/* Left: 6 Headings */}
          <div className="flex flex-col justify-center gap-5 w-1/2">
            {services.map((s, index) => (
              <div
                key={s.id}
                onMouseEnter={() => setActive(s)}
                onMouseLeave={() => setActive(null)}
                className="cursor-pointer group flex items-baseline gap-4"
              >
                <span className={`text-2xl font-bold transition-colors duration-300 ${
                  active?.id === s.id ? 'text-[#f0544f]' : 'text-white/40 group-hover:text-white/80'
                }`}>
                  0{index + 1}.
                </span>
                <div className="flex flex-col">
                  <h2 className={`text-3xl font-black transition-all duration-300 ${
                    active?.id === s.id ? 'text-[#f0544f] translate-x-2' : 'text-white group-hover:text-white/90'
                  }`}>
                    {s.title}
                  </h2>
                  <span className={`text-[10px] tracking-[0.3em] mt-1 uppercase font-bold transition-colors duration-300 ${
                    active?.id === s.id ? 'text-white/90 translate-x-2' : 'text-white/50'
                  }`}>
                    {s.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Phone mockup */}
          <div className="w-[240px] h-[480px] bg-black rounded-[40px] border-[8px] border-white/20 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden relative flex-shrink-0">
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
      <div className="lg:hidden w-full h-full relative overflow-hidden">

        {/* Mobile video background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[#0a0a1a]" />
          <video
            src={animationVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover scale-[1.05]"
          />
          {/* Mobile Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/90 via-[#0a0a1a]/80 to-[#0a0a1a]/95 backdrop-blur-[2px]" />
        </div>

        {/* Mobile content — scroll andar hoga, section bahar nahi jaega */}
        <div className="relative z-10 h-full overflow-y-auto py-14 px-5 sm:px-8">
          {/* Section label */}
          <p className="text-[10px] tracking-[0.35em] font-bold text-white/70 uppercase mb-3">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase leading-tight mb-10">
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
                      : 'border-white/20'
                  }`}
                >
                  {/* Header row */}
                  <div className={`flex items-center justify-between px-5 py-4 transition-colors duration-300 ${
                    isOpen ? 'bg-[#f0544f]' : 'bg-white/10 backdrop-blur-md'
                  }`}>
                    <div className="flex items-baseline gap-3">
                      <span className={`text-base font-bold transition-colors duration-300 ${
                        isOpen ? 'text-white/60' : 'text-white/40'
                      }`}>
                        0{index + 1}.
                      </span>
                      <div>
                        <p className={`text-base sm:text-lg font-black uppercase transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-white'
                        }`}>
                          {s.title}
                        </p>
                        <p className={`text-[9px] tracking-[0.3em] font-bold uppercase mt-0.5 transition-colors duration-300 ${
                          isOpen ? 'text-white/80' : 'text-white/60'
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
                        isOpen ? 'text-white' : 'text-white/50'
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
        </div>{/* overflow-y-auto scroll wrapper end */}

      </div>{/* mobile layout wrapper end */}

    </section>
  );
};

export default ServiceSection;
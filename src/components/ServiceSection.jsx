import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Image Imports ---
import iconWeb from '../assets/icon-web.png';
import iconBranding from '../assets/icon-branding.png';
import iconUiUx from '../assets/icon-uiux.png';
import iconDigital from '../assets/icon-digital.png';
import iconContent from '../assets/icon-content.png';
import iconEcommerce from '../assets/icon-ecommerce.png';
import mobileFrame from '../assets/mobile-frame.png';
import defaultService from '../assets/default-service.jpg';
import webDev from '../assets/web-dev.jpg';
import brandingImg from '../assets/branding.jpg';
import uiuxImg from '../assets/uiux.jpg';
import digitalImg from '../assets/digital-marketing.png';
import contentImg from '../assets/content-strategy.png';
import ecommerceImg from '../assets/ecommerce.jpg';

const ServiceSection = () => {
  const defaultState = {
    id: 0,
    title: "ITS DIGITAL HOUSE",
    img: defaultService,
    desc: "Transforming online identities with premium solutions.",
    bgColor: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)"
  };

  const [activeService, setActiveService] = useState(defaultState);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mobile active accordion state tracker
  const [mobileActiveId, setMobileActiveId] = useState(1);

  const handleMouseEnter = (service) => {
    setActiveService(service);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setActiveService(defaultState);
    setIsHovered(false);
  };

  const services = [
    { id: 1, title: "WEBSITE DEVELOPMENT", side: "left", desc: "Custom, responsive, high performance websites built to attract, engage and convert.", icon: iconWeb, img: webDev, bgColor: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" },
    { id: 2, title: "BRANDING & DESIGN", side: "left", desc: "Visual identities and creative systems that make brands unforgettable.", icon: iconBranding, img: brandingImg, bgColor: "linear-gradient(135deg, #581c87 0%, #1e1b4b 100%)" },
    { id: 3, title: "UI/UX EXPERIENCE DESIGN", side: "left", desc: "Intuitive digital experiences that keep users engaged and inspired.", icon: iconUiUx, img: uiuxImg, bgColor: "linear-gradient(135deg, #034f84 0%, #0f172a 100%)" },
    { id: 4, title: "DIGITAL MARKETING", side: "right", desc: "SEO, social strategy, and paid campaigns that deliver real business impact.", icon: iconDigital, img: digitalImg, bgColor: "linear-gradient(135deg, #065f46 0%, #022c22 100%)" },
    { id: 5, title: "CONTENT & STRATEGY", side: "right", desc: "Data driven content that boosts engagement and tells your brand story.", icon: iconContent, img: contentImg, bgColor: "linear-gradient(135deg, #7c2d12 0%, #431407 100%)" },
    { id: 6, title: "E-COMMERCE SOLUTIONS", side: "right", desc: "Online stores built for seamless experience and scalable revenue growth.", icon: iconEcommerce, img: ecommerceImg, bgColor: "linear-gradient(135deg, #991b1b 0%, #450a0a 100%)" }
  ];

  return (
    <section className="bg-[#f0544f] min-h-screen py-12 lg:py-0 flex items-center justify-center overflow-hidden relative z-0">
      
      {/* ========================================================================= */}
      {/* DESKTOP MODE: 3-Column Layout with central phone                         */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex container mx-auto px-6 lg:px-10 flex-row items-center justify-between gap-4 relative z-10 w-full h-screen">
        
        {/* Left Column */}
        <div className="flex flex-col gap-16 w-[35%] items-end">
          {services.filter(s => s.side === "left").map((service) => (
            <div 
              key={service.id} 
              className="w-full max-w-[320px] cursor-pointer flex flex-col items-end group transition-transform duration-300 hover:scale-105" 
              onMouseEnter={() => handleMouseEnter(service)} 
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-white font-unbounded font-bold text-lg xl:text-xl mb-2 tracking-wide uppercase text-right w-full">{service.title}</h3>
              <div className="w-full h-[3px] bg-white mb-5 shadow-sm group-hover:bg-slate-900 transition-colors" /> 
              <div className="flex items-start gap-5 flex-row-reverse text-right">
                <img src={service.icon} alt="icon" className="w-12 h-12 object-contain flex-shrink-0" />
                <p className="text-white font-league-spartan text-[15px] xl:text-[16px] leading-snug font-medium opacity-90">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Space Center */}
        <div className="w-[30%] h-full flex items-center justify-center" />

        {/* Right Column */}
        <div className="flex flex-col gap-16 w-[35%] items-start text-left">
          {services.filter(s => s.side === "right").map((service) => (
            <div 
              key={service.id} 
              className="w-full max-w-[320px] cursor-pointer flex flex-col items-start group transition-transform duration-300 hover:scale-105" 
              onMouseEnter={() => handleMouseEnter(service)} 
              onMouseLeave={handleMouseLeave}
            >
              <h3 className="text-white font-unbounded font-bold text-lg xl:text-xl mb-2 tracking-wide uppercase text-left w-full">{service.title}</h3>
              <div className="w-full h-[3px] bg-white mb-5 shadow-sm group-hover:bg-slate-900 transition-colors" />
              <div className="flex items-start gap-5 flex-row text-left">
                <img src={service.icon} alt="icon" className="w-12 h-12 object-contain flex-shrink-0" />
                <p className="text-white font-league-spartan text-[15px] xl:text-[16px] leading-snug font-medium opacity-90">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Mobile display frame */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <div className="relative w-[340px] h-[680px] xl:w-[380px] xl:h-[760px] flex items-center justify-center">
            <img src={mobileFrame} alt="frame" className="absolute inset-0 w-full h-full object-contain z-10" />
            
            <div className="relative z-20 overflow-hidden bg-slate-950 rounded-[36px]" style={{ width: '66.5%', height: '63.2%', marginTop: '-12.5%', marginLeft: '-2.1%' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex flex-col justify-between p-4 text-white"
                  style={{ background: activeService.bgColor || '#0f172a' }}
                >
                  <div className="flex justify-between items-center opacity-40 text-[9px] font-unbounded tracking-widest border-b border-white/10 pb-2">
                    <span>AGENCY INTERFACE</span>
                    <span>v2.06</span>
                  </div>

                  {/* Desktop Image with sharp edges */}
                  <div className="w-full h-[45%] overflow-hidden shadow-lg border border-white/10 my-2 relative">
                    <img src={activeService.img} className="w-full h-full object-cover" alt="Mockup view" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="flex-1 flex flex-col justify-center space-y-1.5 px-1">
                    <h4 className="font-unbounded font-black text-xs xl:text-sm tracking-wide uppercase leading-tight text-white">{activeService.title}</h4>
                    <p className="font-league-spartan text-[11px] xl:text-[12px] leading-snug font-normal text-slate-200">{activeService.desc}</p>
                  </div>

                  <div className="w-full bg-white text-slate-950 font-unbounded text-[8px] font-bold py-2 rounded-lg text-center tracking-wider shadow-md uppercase">
                    Launch Solution &rarr;
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* MOBILE & TABLET MODE: High-End Premium Interactive Accordion List          */}
      {/* ========================================================================= */}
      <div className="block lg:hidden w-full container mx-auto px-4 relative z-10 max-w-md md:max-w-xl">
        <div className="flex flex-col gap-3 w-full">
          {services.map((service) => {
            const isOpen = mobileActiveId === service.id;
            return (
              <div 
                key={service.id} 
                className="w-full bg-slate-950/90 border border-white/10 overflow-hidden transition-all duration-300"
                style={{ background: isOpen ? service.bgColor : 'rgba(2, 6, 23, 0.95)' }}
              >
                {/* Accordion Toggle Bar Trigger */}
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer"
                  onClick={() => setMobileActiveId(isOpen ? null : service.id)}
                >
                  <div className="flex items-center gap-3">
                    <img src={service.icon} alt="icon" className="w-6 h-6 object-contain" />
                    <h3 className="text-white font-unbounded font-bold text-xs tracking-wider uppercase">{service.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/20 font-unbounded text-[10px]">0{service.id}</span>
                    <motion.span 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="text-white text-xs block font-mono"
                    >
                      ↓
                    </motion.span>
                  </div>
                </div>

                {/* Smooth Expandable Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-4 pb-5 pt-1 border-t border-white/5 flex flex-col gap-4">
                        {/* Mobile Image Content - Completely clean square sharp edges (rounded-xl removed) */}
                        <div className="w-full h-44 overflow-hidden relative shadow-md">
                          <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        </div>

                        {/* Text description details */}
                        <p className="text-slate-200 font-league-spartan text-sm leading-relaxed">{service.desc}</p>

                        {/* CTA button wrapper */}
                        <div className="w-full bg-white text-slate-950 font-unbounded text-[10px] font-bold py-3 text-center tracking-wider uppercase active:scale-95 transition-transform">
                          Launch Solution &rarr;
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default ServiceSection;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Imports ---
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
  const [activeMobileService, setActiveMobileService] = useState(null);

  const services = [
    { id: 1, title: "WEBSITE DEVELOPMENT", sub: "REACT / NEXT.JS | WORDPRESS | CUSTOM CMS | SEO", side: "left", desc: "Custom, responsive, high performance websites built to attract, engage and convert.", icon: iconWeb, img: webDev, bgColor: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" },
    { id: 2, title: "BRANDING & DESIGN", sub: "LOGO DESIGN | BRAND GUIDELINES | VISUAL IDENTITY", side: "left", desc: "Visual identities and creative systems that make brands unforgettable.", icon: iconBranding, img: brandingImg, bgColor: "linear-gradient(135deg, #581c87 0%, #1e1b4b 100%)" },
    { id: 3, title: "UI/UX EXPERIENCE DESIGN", sub: "FIGMA | WIREFRAMING | PROTOTYPING", side: "left", desc: "Intuitive digital experiences that keep users engaged and inspired.", icon: iconUiUx, img: uiuxImg, bgColor: "linear-gradient(135deg, #034f84 0%, #0f172a 100%)" },
    { id: 4, title: "DIGITAL MARKETING", sub: "META ADS | GOOGLE ADS | CONTENT | SEO", side: "right", desc: "SEO, social strategy, and paid campaigns that deliver real business impact.", icon: iconDigital, img: digitalImg, bgColor: "linear-gradient(135deg, #065f46 0%, #022c22 100%)" },
    { id: 5, title: "CONTENT & STRATEGY", sub: "CONTENT CREATION | COPYWRITING | STRATEGY", side: "right", desc: "Data driven content that boosts engagement and tells your brand story.", icon: iconContent, img: contentImg, bgColor: "linear-gradient(135deg, #7c2d12 0%, #431407 100%)" },
    { id: 6, title: "E-COMMERCE SOLUTIONS", sub: "SHOPIFY | WOOCOMMERCE | PAYMENT GATEWAYS", side: "right", desc: "Online stores built for seamless experience and scalable revenue growth.", icon: iconEcommerce, img: ecommerceImg, bgColor: "linear-gradient(135deg, #991b1b 0%, #450a0a 100%)" }
  ];

  const handleMobileToggle = (service) => {
    setActiveMobileService(prev => prev?.id === service.id ? null : service);
  };

  return (
    <section className="bg-[#f0544f] min-h-screen flex items-center justify-center overflow-hidden relative z-0">

      {/* ─── DESKTOP LAYOUT (lg+) ─── */}
      <div className="hidden lg:flex container mx-auto px-10 items-center justify-between gap-8 relative z-10 w-full py-16 min-h-screen">

        {/* Left Column */}
        <div className="flex flex-col gap-10 xl:gap-12 w-[35%] items-end">
          {services.filter(s => s.side === "left").map((service) => (
            <div
              key={service.id}
              className="w-full max-w-[340px] cursor-pointer group flex flex-col items-end transition-transform duration-200 hover:-translate-y-1"
              onMouseEnter={() => setActiveService(service)}
              onMouseLeave={() => setActiveService(defaultState)}
            >
              <span className="text-[10px] font-bold tracking-widest text-white/60 mb-1 w-full">{service.sub}</span>
              <h3 className="w-full text-white font-unbounded font-extrabold text-base xl:text-lg mb-2 text-left">{service.title}</h3>
              <div className="w-full h-[3px] bg-white opacity-90 mb-4 rounded-full" />
              <div className="flex items-start gap-4 xl:gap-5 flex-row text-left">
                <img src={service.icon} alt="icon" className="w-8 xl:w-10 h-8 xl:h-10 object-contain flex-shrink-0" />
                <p className="text-white font-league-spartan text-[13px] xl:text-[15px] opacity-95 text-left leading-relaxed max-w-[260px]">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Frame */}
        <div className="w-[28%] xl:w-[30%] flex items-center justify-center">
          <div className="relative w-[300px] xl:w-[360px] h-[550px] xl:h-[660px]">
            <img src={mobileFrame} alt="frame" className="absolute inset-0 w-full h-full object-contain z-10" />
            <div
              className="relative z-20 overflow-hidden bg-transparent"
              style={{ width: '68.5%', height: '68.5%', marginTop: '24%', marginLeft: '13.9%' }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeService.id}
                  src={activeService.img}
                  alt="Mockup"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.35 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10 xl:gap-12 w-[35%] items-start">
          {services.filter(s => s.side === "right").map((service) => (
            <div
              key={service.id}
              className="w-full max-w-[340px] cursor-pointer group flex flex-col items-start transition-transform duration-200 hover:-translate-y-1"
              onMouseEnter={() => setActiveService(service)}
              onMouseLeave={() => setActiveService(defaultState)}
            >
              <span className="text-[10px] font-bold tracking-widest text-white/60 mb-1">{service.sub}</span>
              <h3 className="text-white font-unbounded font-extrabold text-base xl:text-lg mb-2 text-left">{service.title}</h3>
              <div className="w-full h-[3px] bg-white opacity-90 mb-4 rounded-full" />
              <div className="flex items-start gap-4 xl:gap-5 flex-row text-left">
                <img src={service.icon} alt="icon" className="w-8 xl:w-10 h-8 xl:h-10 object-contain flex-shrink-0" />
                <p className="text-white font-league-spartan text-[13px] xl:text-[15px] opacity-95 leading-relaxed max-w-[260px]">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── TABLET LAYOUT (md to lg) ─── */}
      <div className="hidden md:flex lg:hidden container mx-auto px-8 py-16 flex-col items-center gap-10 w-full">

        {/* Mobile Frame Top */}
        <div className="relative w-[220px] h-[400px] flex-shrink-0">
          <img src={mobileFrame} alt="frame" className="absolute inset-0 w-full h-full object-contain z-10" />
          <div
            className="relative z-20 overflow-hidden bg-transparent"
            style={{ width: '68.5%', height: '68.5%', marginTop: '24%', marginLeft: '13.9%' }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeService.id}
                src={activeService.img}
                alt="Mockup"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* 2-column grid of services */}
        <div className="grid grid-cols-2 gap-6 w-full">
          {services.map((service) => (
            <div
              key={service.id}
              className="cursor-pointer flex flex-col transition-transform duration-200 hover:-translate-y-1"
              onMouseEnter={() => setActiveService(service)}
              onMouseLeave={() => setActiveService(defaultState)}
            >
              <span className="text-[9px] font-bold tracking-widest text-white/60 mb-1">{service.sub}</span>
              <h3 className="text-white font-unbounded font-extrabold text-[13px] mb-2">{service.title}</h3>
              <div className="w-full h-[2px] bg-white opacity-90 mb-3 rounded-full" />
              <div className="flex items-start gap-3">
                <img src={service.icon} alt="icon" className="w-7 h-7 object-contain flex-shrink-0 mt-0.5" />
                <p className="text-white font-league-spartan text-[12px] opacity-95 leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── MOBILE LAYOUT (< md) ─── */}
      <div className="flex md:hidden flex-col items-center w-full px-5 py-12 gap-4">

        {/* Mobile Frame */}
        <div className="relative w-[180px] h-[330px] flex-shrink-0 mb-2">
          <img src={mobileFrame} alt="frame" className="absolute inset-0 w-full h-full object-contain z-10" />
          <div
            className="relative z-20 overflow-hidden bg-transparent"
            style={{ width: '68.5%', height: '68.5%', marginTop: '24%', marginLeft: '13.9%' }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeMobileService?.id ?? 0}
                src={activeMobileService?.img ?? defaultState.img}
                alt="Mockup"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Service Accordion Cards */}
        <div className="flex flex-col w-full gap-3">
          {services.map((service) => {
            const isOpen = activeMobileService?.id === service.id;
            return (
              <div
                key={service.id}
                className="w-full cursor-pointer"
                onClick={() => handleMobileToggle(service)}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between gap-3 py-3 border-b border-white/30">
                  <div className="flex items-center gap-3">
                    <img src={service.icon} alt="icon" className="w-7 h-7 object-contain flex-shrink-0" />
                    <h3 className="text-white font-unbounded font-extrabold text-[11px] leading-tight">{service.title}</h3>
                  </div>
                  <span className={`text-white text-lg font-light transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>+</span>
                </div>

                {/* Expandable Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pb-2 pl-10">
                        <span className="block text-[9px] font-bold tracking-widest text-white/55 mb-2">{service.sub}</span>
                        <p className="text-white font-league-spartan text-[13px] opacity-90 leading-relaxed">{service.desc}</p>
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

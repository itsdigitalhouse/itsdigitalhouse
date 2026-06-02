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

  const services = [
    { id: 1, title: "WEBSITE DEVELOPMENT", sub: "REACT / NEXT.JS | WORDPRESS | CUSTOM CMS | SEO", side: "left", desc: "Custom, responsive, high performance websites built to attract, engage and convert.", icon: iconWeb, img: webDev, bgColor: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)" },
    { id: 2, title: "BRANDING & DESIGN", sub: "LOGO DESIGN | BRAND GUIDELINES | VISUAL IDENTITY", side: "left", desc: "Visual identities and creative systems that make brands unforgettable.", icon: iconBranding, img: brandingImg, bgColor: "linear-gradient(135deg, #581c87 0%, #1e1b4b 100%)" },
    { id: 3, title: "UI/UX EXPERIENCE DESIGN", sub: "FIGMA | WIREFRAMING | PROTOTYPING", side: "left", desc: "Intuitive digital experiences that keep users engaged and inspired.", icon: iconUiUx, img: uiuxImg, bgColor: "linear-gradient(135deg, #034f84 0%, #0f172a 100%)" },
    { id: 4, title: "DIGITAL MARKETING", sub: "META ADS | GOOGLE ADS | CONTENT | SEO", side: "right", desc: "SEO, social strategy, and paid campaigns that deliver real business impact.", icon: iconDigital, img: digitalImg, bgColor: "linear-gradient(135deg, #065f46 0%, #022c22 100%)" },
    { id: 5, title: "CONTENT & STRATEGY", sub: "CONTENT CREATION | COPYWRITING | STRATEGY", side: "right", desc: "Data driven content that boosts engagement and tells your brand story.", icon: iconContent, img: contentImg, bgColor: "linear-gradient(135deg, #7c2d12 0%, #431407 100%)" },
    { id: 6, title: "E-COMMERCE SOLUTIONS", sub: "SHOPIFY | WOOCOMMERCE | PAYMENT GATEWAYS", side: "right", desc: "Online stores built for seamless experience and scalable revenue growth.", icon: iconEcommerce, img: ecommerceImg, bgColor: "linear-gradient(135deg, #991b1b 0%, #450a0a 100%)" }
  ];

  return (
    <section className="bg-[#f0544f] min-h-screen py-12 lg:py-0 flex items-center justify-center overflow-hidden relative z-0">
      
      {/* HEADER */}
      <div className="absolute top-10 w-full text-center text-white px-6 z-20">
        <h2 
          className="font-unbounded font-black text-4xl lg:text-5xl uppercase mb-6 text-transparent bg-clip-text"
          style={{ backgroundImage: `linear-gradient(white)` }}
        >
          END-TO-END DIGITAL SERVICES
        </h2>
        <p className="font-league-spartan text-md opacity-90">Everything your business needs to dominate the digital landscape under one roof.</p>
      </div>

      <div className="hidden lg:flex container mx-auto px-10 items-center justify-between gap-4 relative z-10 w-full h-screen mt-20">
        
        {/* Left Column */}
        <div className="flex flex-col gap-16 w-[35%] items-end">
          {services.filter(s => s.side === "left").map((service) => (
            <div key={service.id} className="w-full max-w-[320px] cursor-pointer group flex flex-col items-end" onMouseEnter={() => setActiveService(service)}>
              <span className="text-[9px] font-bold tracking-widest text-white/50 mb-1">{service.sub}</span>
              <h3 className="text-white font-unbounded font-bold text-lg mb-2 text-right">{service.title}</h3>
              <div className="w-full h-[3px] bg-white mb-5" />
              <div className="flex items-start gap-5 flex-row text-right">
                <img src={service.icon} alt="icon" className="w-10 h-10 object-contain" />
                <p className="text-white font-league-spartan text-[15px] opacity-90 text-right">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Frame - Smaller Size */}
        <div className="w-[30%] h-full flex items-center justify-center">
          <div className="relative w-[320px] h-[600px]">
            <img src={mobileFrame} alt="frame" className="absolute inset-0 w-full h-full object-contain z-10" />
            <div className="relative z-20 overflow-hidden bg-slate-950 rounded-[30px]" style={{ width: '68.5%', height: '64.2%', marginTop: '28.5%', marginLeft: '13.9%' }}>
              <AnimatePresence mode="wait">
                <motion.div key={activeService.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col justify-between p-4 text-white" style={{ background: activeService.bgColor }}>
                  <img src={activeService.img} className="w-full h-[45%] object-cover" alt="Mockup" />
                  <div className="px-1">
                    <h4 className="font-unbounded font-black text-sm uppercase">{activeService.title}</h4>
                    <p className="text-[10px] text-slate-200">{activeService.desc}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-16 w-[35%] items-start">
          {services.filter(s => s.side === "right").map((service) => (
            <div key={service.id} className="w-full max-w-[320px] cursor-pointer group flex flex-col items-start" onMouseEnter={() => setActiveService(service)} onMouseLeave={() => setActiveService(defaultState)}>
              <span className="text-[9px] font-bold tracking-widest text-white/50 mb-1">{service.sub}</span>
              <h3 className="text-white font-unbounded font-bold text-lg mb-2 text-left">{service.title}</h3>
              <div className="w-full h-[3px] bg-white mb-5" />
              <div className="flex items-start gap-5 flex-row text-left">
                <img src={service.icon} alt="icon" className="w-10 h-10 object-contain" />
                <p className="text-white font-league-spartan text-[15px] opacity-90">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default ServiceSection;
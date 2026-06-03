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
      
      {/* HEADER removed as requested */}

      <div className="hidden lg:flex container mx-auto px-10 items-center justify-between gap-8 relative z-10 w-full min-h-[80vh]">
        
        {/* Left Column */}
        <div className="flex flex-col gap-12 w-[35%] items-end">
          {services.filter(s => s.side === "left").map((service) => (
            <div key={service.id} className="w-full max-w-[340px] cursor-pointer group flex flex-col items-end transition-transform duration-200 hover:-translate-y-1" onMouseEnter={() => setActiveService(service)} onMouseLeave={() => setActiveService(defaultState)}>
              <span className="text-[10px] font-bold tracking-widest text-white/60 mb-1 w-full">{service.sub}</span>
              <h3 className="w-full text-white font-unbounded font-extrabold text-lg mb-2 text-left">{service.title}</h3>
              <div className="w-full h-[3px] bg-white opacity-90 mb-5 rounded-full" />
              <div className="flex items-start gap-5 flex-row text-left">
                <img src={service.icon} alt="icon" className="w-10 h-10 object-contain" />
                <p className="text-white font-league-spartan text-[15px] opacity-95 text-left leading-relaxed max-w-[260px]">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Frame - Slightly Larger */}
        <div className="w-[30%] h-full flex items-center justify-center">
          <div className="relative w-[360px] h-[660px]">
            <img src={mobileFrame} alt="frame" className="absolute inset-0 w-full h-full object-contain z-10" />
            <div className="relative z-20 overflow-hidden bg-transparent" style={{ width: '68.5%', height: '68.5%', marginTop: '24%', marginLeft: '13.9%' }}>
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
        <div className="flex flex-col gap-12 w-[35%] items-start">
          {services.filter(s => s.side === "right").map((service) => (
            <div key={service.id} className="w-full max-w-[340px] cursor-pointer group flex flex-col items-start transition-transform duration-200 hover:-translate-y-1" onMouseEnter={() => setActiveService(service)} onMouseLeave={() => setActiveService(defaultState)}>
              <span className="text-[10px] font-bold tracking-widest text-white/60 mb-1">{service.sub}</span>
              <h3 className="text-white font-unbounded font-extrabold text-lg mb-2 text-left">{service.title}</h3>
              <div className="w-full h-[3px] bg-white opacity-90 mb-5 rounded-full" />
              <div className="flex items-start gap-5 flex-row text-left">
                <img src={service.icon} alt="icon" className="w-10 h-10 object-contain" />
                <p className="text-white font-league-spartan text-[15px] opacity-95 leading-relaxed max-w-[260px]">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default ServiceSection;
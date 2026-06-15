import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================================
// 1️⃣ ASSETS IMPORTS
// ==========================================
import iphoneFrame from '../assets/iphone7.png';

// Slide 1 Assets
import brandIdentityIcon from '../assets/brandidentity.png';
import hippoLogo from '../assets/hippo-cement.png';
import hippoScreen from '../assets/1.jpeg';

// Slide 2 Assets
import appExperienceIcon from '../assets/appexperience.png';
import portcityLogo from '../assets/portcity-traders.png';
import portcityScreen from '../assets/2.jpeg'; 

// Slide 3 Assets
import smmExperienceIcon from '../assets/smmexperience.png';
import printProLogo from '../assets/print-pro.png';
import printProScreen from '../assets/3.jpeg';

// Slide 4 Assets
import webPerformanceIcon from '../assets/brandidentity.png'; 
import bogLogo from '../assets/bog.png';
import bogScreen from '../assets/4.png';

// ==========================================
// 2️⃣ SLIDES DATA CONFIGURATION
// ==========================================
const slidesData = [
  {
    id: 1,
    tag: "Brand Identity",
    tagIcon: brandIdentityIcon,
    title: "Brand Identity",
    subtitle: "Consistency, Clarity & Visual Impact",
    description: "We evaluate your brand's visual identity, messaging, and market positioning to ensure consistency across all touchpoints. Our assessment helps strengthen brand recall and align your identity with your business goals.",
    logo: hippoLogo,
    testimonial: "“Our brand finally feels consistent & professional across all platforms”",
    clientName: "Hippo Cement",
    mobileImg: hippoScreen,
    bgColor: "#f1574d" 
  },
  {
    id: 2,
    tag: "App Experience",
    tagIcon: appExperienceIcon,
    title: "App Experience",
    subtitle: "Seamless Global Trade Operations",
    description: "Streamlining digital interactions for complex agro-commodity and raw material supply chains. We designed an intuitive mobile interface that optimizes supply tracking, trade documentation, and international client workflows seamlessly.",
    logo: portcityLogo,
    testimonial: "“The mobile architecture completely transformed how our global clients track raw shipments”",
    clientName: "Portcity Traders",
    mobileImg: portcityScreen,
    bgColor: "#2e7d32" 
  },
  {
    id: 3,
    tag: "SMM Performance",
    tagIcon: smmExperienceIcon,
    title: "SMM Performance",
    subtitle: "Targeted Engagement & Creative Scaling",
    description: "Driving commercial print and production visibility via robust cross-channel content funnels. Our metrics-driven social media management focuses on high-intent lead acquisition, corporate ordering automation, and premium brand perception.",
    logo: printProLogo,
    testimonial: "“Our dynamic ad spends started delivering consistent B2B pipeline growth within weeks”",
    clientName: "Print Pro",
    mobileImg: printProScreen,
    bgColor: "#7361a7" 
  },
  {
    id: 4,
    tag: "Website Performance",
    tagIcon: webPerformanceIcon,
    title: "Website Performance",
    subtitle: "Luxury UX for Precious Metals & Mining",
    description: "Engineered a high-performance, secure digital showcase for gold, silver, and mineral mining operations. Merging robust security protocols with elegant, ultra-fast interface animations to maintain absolute trust and high institutional engagement.",
    logo: bogLogo,
    testimonial: "“A majestic and highly responsive platform matching the real scale of luxury mineral mining”",
    clientName: "Bathia Ocean Gold (BOG)",
    mobileImg: bogScreen,
    bgColor: "#e1b054" 
  }
];

const CaseStudiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = window.setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const currentSlide = slidesData[currentIndex];

  const textVariants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 50 : -50 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -50 : 50, transition: { duration: 0.4, ease: "easeIn" } })
  };

  // Simplest fade animation taake image render tree par crash na kare
  const fadeInVariants = {
    enter: { opacity: 0 },
    center: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="w-full bg-white block relative font-sans overflow-hidden select-none">
      
      {/* BACKGROUND BAR SECTION */}
      <div 
        className="w-full min-h-[900px] lg:min-h-[680px] flex items-center justify-center transition-colors duration-700 ease-in-out py-12 lg:py-0 px-4 sm:px-12 md:px-16"
        style={{ backgroundColor: currentSlide.bgColor }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-full max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative">
          
          {/* LEFT SIDE: TEXT CARD */}
          <div className="col-span-1 lg:col-span-6 flex justify-center lg:justify-start z-10 w-full order-2 lg:order-1">
            <div className="bg-white rounded-[32px] p-6 sm:p-10 md:p-12 shadow-2xl max-w-[720px] w-full min-h-[580px] flex flex-col justify-between relative overflow-hidden">
              <div className="pointer-events-none absolute -left-10 top-16 hidden lg:block h-[260px] w-[260px] rounded-[48px] bg-[#ffffff] opacity-10 blur-2xl" />
              <div className="pointer-events-none absolute right-0 top-10 hidden lg:block h-36 w-36 rounded-[40px] bg-[#f1574d] opacity-10" />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentSlide.id}
                  custom={direction}
                  variants={textVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full flex flex-col justify-between flex-grow relative"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-100 shadow-sm">
                        <img src={currentSlide.tagIcon} alt="" className="w-6 h-6 object-contain" />
                      </div>
                      <span className="text-xs uppercase tracking-[0.32em] text-slate-400 font-semibold">
                        {currentSlide.tag}
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-[42px] md:text-[48px] font-[800] tracking-tight text-slate-950 mb-3 leading-tight">
                      {currentSlide.title}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 font-[500] mb-8 max-w-2xl">
                      {currentSlide.subtitle}
                    </p>

                    <p className="text-sm sm:text-[15px] md:text-base leading-[1.75] text-slate-600 font-medium mb-8">
                      {currentSlide.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-6 mt-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 border border-slate-100 rounded-[22px] flex items-center justify-center p-2 bg-white shadow-sm">
                        <img src={currentSlide.logo} alt={currentSlide.clientName} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div>
                        <p className="text-slate-600 italic text-[12px] sm:text-sm font-[500] leading-snug mb-1">
                          {currentSlide.testimonial}
                        </p>
                        <h5 className="text-slate-950 font-[700] text-sm sm:text-base">
                          {currentSlide.clientName}
                        </h5>
                      </div>
                    </div>
                    <button className="self-start sm:self-auto rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-[0_20px_50px_rgba(15,23,42,0.15)] transition hover:bg-slate-800">
                      View Case Study
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

          {/* RIGHT SIDE: IPHONE SLIDER MOCKUP */}
          <div className="col-span-1 lg:col-span-6 flex items-center justify-center relative min-h-[480px] sm:min-h-[560px] md:min-h-[620px] w-full order-1 lg:order-2">
            
            {/* Left Nav Arrow */}
            <button 
              onClick={slidePrev}
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-slate-900 bg-white/95 shadow-lg shadow-slate-900/10 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-95"
              aria-label="Previous Slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Main Interactive Screen Area */}
            <div className="relative overflow-hidden w-[290px] sm:w-[320px] md:w-[360px] xl:w-[400px] h-[580px] sm:h-[660px] md:h-[720px] xl:h-[780px] mx-auto">
              <img
                src={iphoneFrame}
                alt="iPhone Frame Overlay"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
              />
              <div className="absolute left-[14%] right-[18%] top-[16%] bottom-[22%] overflow-hidden bg-black">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.img
                    key={currentSlide.id}
                    src={currentSlide.mobileImg}
                    alt={`${currentSlide.clientName} Preview`}
                    custom={direction}
                    variants={{
                      enter: (dir) => ({ opacity: 0, x: dir > 0 ? 30 : -30, scale: 0.98 }),
                      center: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
                      exit: (dir) => ({ opacity: 0, x: dir > 0 ? -30 : 30, scale: 0.98, transition: { duration: 0.3, ease: 'easeIn' } })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button 
              onClick={slideNext}
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center text-slate-900 bg-white/95 shadow-lg shadow-slate-900/10 rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-95"
              aria-label="Next Slide"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default CaseStudiesSlider;
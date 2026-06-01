import React from 'react';
import { motion } from 'framer-motion';

// IMAGES IMPORTED DIRECTLY FROM ASSETS FOLDER
import contentStrategyImg from '../assets/content-strategy.png';
import uiuxImg from '../assets/uiux.jpg';
import ecommerceImg from '../assets/ecommerce.jpg';
import brandingImg from '../assets/branding.jpg';
import digitalMarketingImg from '../assets/digital-marketing.png';

const portfolioData = [
  { id: 1, title: "CONTENT STRATEGY", image: contentStrategyImg },
  { id: 2, title: "UI / UX DESIGN", image: uiuxImg },
  { id: 3, title: "E-COM SOLUTIONS", image: ecommerceImg },
  { id: 4, title: "BRANDING", image: brandingImg },
  { id: 5, title: "DIGITAL MARKETING", image: digitalMarketingImg }
];

// Array ko duplicate sirf loop transition chalane ke liye kar rahe hain
const infiniteData = [...portfolioData, ...portfolioData];

const PortfolioPage = () => {
  return (
    <section className="w-full bg-black text-white py-0 my-0 relative overflow-hidden block">
      <div className="w-full max-w-[100vw] overflow-hidden relative">
        
        {/* HAR CANVAS KE HISAB SE CLEAN RESPONSIVE MARQUEE */}
        <motion.div 
          className="flex gap-0 w-max overflow-visible"
          animate={{
            // Pure array ki actual original length jitna perfectly shift hoga bina double reflection ke
            x: [0, "-50%"]
          }}
          transition={{
            ease: "linear",
            duration: 35, // Slow premium animation speed
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          {infiniteData.map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              // Fixed exact dynamic layout ratios for every canvas resolution
              className="relative flex-shrink-0 
                         w-[100vw] 
                         sm:w-[50vw] 
                         md:w-[50vw] 
                         lg:w-[33.333vw] 
                         xl:w-[33.333vw] 
                         h-[60vh] sm:h-[70vh] md:h-[80vh]
                         overflow-hidden group block bg-neutral-900 border-none"
            >
              {/* IMAGE COVER */}
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none transform scale-100 group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-95 pointer-events-none" />

              {/* TYPOGRAPHY BOTTOM ALIGN */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 lg:p-10 z-10 flex flex-col justify-end">
                <h3 
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-[900] tracking-tight uppercase italic text-white leading-tight"
                  style={{ fontFamily: "'Unbounded', sans-serif" }}
                >
                  {project.title}
                </h3>
                
                <div className="mt-2.5 flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase text-neutral-400 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <span>View Project</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PortfolioPage;
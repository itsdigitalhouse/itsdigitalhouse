import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CorePillars = () => {
  const projects = [
    {
      id: 1,
      title: 'PROPER WHISKEY',
      image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=1200&auto=format&fit=crop',
      tags: ['DESIGN', 'UX']
    },
    {
      id: 2,
      title: 'FURNITURE HUB',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
      tags: ['DEVELOPMENT', 'UI']
    },
    {
      id: 3,
      title: 'VIDEO GAME WORLD',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      tags: ['DESIGN', '3D']
    },
    {
      id: 4,
      title: 'CYBER SECURITY DASHBOARD',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
      tags: ['WEB APP', 'SAAS']
    },
    {
      id: 5,
      title: 'LUXURY JEWELS TRADING',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
      tags: ['E-COMMERCE', 'UX']
    },
    {
      id: 6,
      title: 'MINERALS & AGRO LOGISTICS',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      tags: ['SUPPLY CHAIN', 'WEB']
    },
    {
      id: 7,
      title: 'CREATIVE DIGITAL HOUSE',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      tags: ['MARKETING', 'BRANDING']
    },
    {
      id: 8,
      title: 'VIBRANT FOOTWEAR',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
      tags: ['DESIGN', 'UI']
    },
    {
      id: 9,
      title: 'REAL ESTATE BUILDERS',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop',
      tags: ['ARCHITECTURE', 'WEB']
    },
    {
      id: 10,
      title: 'PREMIUM COLD BEVERAGES',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1200&auto=format&fit=crop',
      tags: ['BRANDING', 'UX']
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoSlideTimer = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // SPEED SPEED ACCELERATION SYSTEM
  useEffect(() => {
    if (!isPaused) {
      autoSlideTimer.current = setInterval(() => {
        handleNext();
      }, 2200); // Badha kar 2.2 seconds kar diya hai fast sliding k liye
    }

    return () => {
      if (autoSlideTimer.current) {
        clearInterval(autoSlideTimer.current);
      }
    };
  }, [isPaused]);

  const getCardStatus = (index) => {
    if (index === currentIndex) return 'center';
    if ((currentIndex + 1) % projects.length === index) return 'right';
    if ((currentIndex - 1 + projects.length) % projects.length === index) return 'left';
    return 'hidden';
  };

  return (
    <section className="w-full bg-[#f5f2ee] px-0 py-24 flex flex-col items-center overflow-hidden select-none">
      
      {/* HEADER SECTION */}
      <div className="w-full max-w-7xl text-center space-y-3 mb-16 px-4 sm:px-6 lg:px-12">
        <span className="text-xs sm:text-sm text-gray-500 font-bold tracking-widest uppercase">
          Selected Work
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-[1000] tracking-tighter text-[#0a0a0a] leading-[0.95] uppercase max-w-5xl mx-auto">
          DIGITAL EXPERIENCES <br className="hidden md:inline" /> THAT BLOW PEOPLE’S MINDS
        </h2>
      </div>

      {/* DYNAMIC SLIDER CONTAINER */}
      <div 
        className="relative w-full h-[65vh] md:h-[80vh] flex items-center justify-center overflow-visible"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        <div className="relative w-full max-w-[100vw] h-full flex items-center justify-center overflow-visible">
          {projects.map((project, index) => {
            const status = getCardStatus(index);

            let positionStyles = {};
            if (status === 'center') {
              positionStyles = { 
                width: window.innerWidth < 768 ? '85%' : '60%', 
                zIndex: 30, 
                opacity: 1, 
                transform: 'translateX(0%) scale(1)' 
              };
            } else if (status === 'left') {
              positionStyles = { 
                width: window.innerWidth < 768 ? '85%' : '60%', 
                zIndex: 20, 
                opacity: 0.85, 
                transform: window.innerWidth < 768 ? 'translateX(-95%) scale(0.9)' : 'translateX(-74%) scale(0.94)' 
              };
            } else if (status === 'right') {
              positionStyles = { 
                width: window.innerWidth < 768 ? '85%' : '60%', 
                zIndex: 20, 
                opacity: 0.85, 
                transform: window.innerWidth < 768 ? 'translateX(95%) scale(0.9)' : 'translateX(74%) scale(0.94)' 
              };
            } else {
              positionStyles = { 
                width: window.innerWidth < 768 ? '85%' : '60%', 
                zIndex: 10, 
                opacity: 0, 
                transform: 'translateX(0%) scale(0.6)', 
                pointerEvents: 'none' 
              };
            }

            return (
              <div
                key={project.id}
                style={positionStyles}
                className="absolute h-full transition-all duration-700 ease-out flex flex-col bg-[#141414] rounded-[24px] overflow-hidden shadow-2xl border border-black/5 cursor-pointer"
                onClick={() => {
                  if (status === 'left') handlePrev();
                  if (status === 'right') handleNext();
                }}
              >
                {/* Image Wrap */}
                <div className="relative w-full h-full overflow-hidden flex-grow">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  
                  {status !== 'center' && (
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.2px] transition-opacity duration-300" />
                  )}
                </div>

                {/* Bottom Metadata Info Bar */}
                <div className="w-full p-6 md:p-8 bg-[#0f0f0f] flex items-center justify-between mt-auto z-10">
                  <h3 className="text-white font-[950] tracking-tight text-lg sm:text-2xl md:text-3xl uppercase break-words max-w-[65%]">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 flex-wrap justify-end">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[10px] md:text-xs font-black tracking-widest text-gray-400 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* NAVIGATION CONTROLS */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 md:left-16 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#141414]/90 text-white flex items-center justify-center border border-white/10 hover:bg-black transition-all z-40 shadow-lg"
          aria-label="Previous Slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-4 md:right-16 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#141414]/90 text-white flex items-center justify-center border border-white/10 hover:bg-black transition-all z-40 shadow-lg"
          aria-label="Next Slide"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>

    </section>
  );
};

export default CorePillars;
import React, { useState, useEffect, useRef } from 'react';

const CorePillars = () => {
  // Words rotation list
  const rotatingWords = ['Development.', 'Digital Marketing.', 'Data Science.', 'Digital Identity.', 'Creative Design.'];
  const marqueeWords = [...rotatingWords, ...rotatingWords];

  // 8 Complete Projects Data Block
  const projects = [
    {
      id: 1,
      client: 'YorkTest',
      category: 'PPC',
      headline: '63% More PPC Revenue for Leading Health Brand',
      mockupImage: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=1200&auto=format&fit=crop',
      bgColor: 'linear-gradient(135deg, #1d2b64 0%, #2a5298 100%)',
      waveColor: '#ee3444'
    },
    {
      id: 2,
      client: 'Ideal4Finance',
      category: 'PPC & CRO',
      headline: <>70% More Conversions for <br />SME Finance Broker</>,
      mockupImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop',
      bgColor: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      waveColor: '#00B4A4'
    },
    {
      id: 3,
      client: 'XOX Jewels',
      category: 'UX/UI Architecture',
      headline: 'Luxury Interactive E-Commerce Experience Built with Fabric.js',
      mockupImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
      bgColor: 'linear-gradient(135deg, #7F00FF 0%, #E100FF 100%)',
      waveColor: '#ee3444'
    },
    {
      id: 4,
      client: 'Bathia Ocean Gold',
      category: 'Agro-Mining Portal',
      headline: 'Global Asset Tracking & Logistics Framework Architecture',
      mockupImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
      bgColor: 'linear-gradient(135deg, #0f2027 0%, #203a43 100%)',
      waveColor: '#75b0d2'
    },
    {
      id: 5,
      client: 'Portcity Traders',
      category: 'Agro Import-Export',
      headline: 'Raw Materials & Agro Supply Chain Enterprise System',
      mockupImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
      bgColor: 'linear-gradient(135deg, #e65c00 0%, #F9D423 100%)',
      waveColor: '#F9D423'
    },
    {
      id: 6,
      client: 'Its Digital House',
      category: 'Agency Portfolio',
      headline: 'Premium Next-Gen Digital Strategy & Web Experiences',
      mockupImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      bgColor: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
      waveColor: '#00c6ff'
    },
    {
      id: 7,
      client: 'Khaki & Co',
      category: 'Real Estate & Building',
      headline: 'Interactive Infrastructure Commercial Portal Engine',
      mockupImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1200&auto=format&fit=crop',
      bgColor: 'linear-gradient(135deg, #30475e 0%, #f05454 100%)',
      waveColor: '#f05454'
    },
    {
      id: 8,
      client: 'BOG Minerals',
      category: 'Agro-Mining',
      headline: 'Precious Minerals & Metals Logistics Management Portal',
      mockupImage: 'https://images.unsplash.com/photo-1610374792793-f016b77ca51a?q=80&w=1200&auto=format&fit=crop',
      bgColor: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
      waveColor: '#f3b05a'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isSliderTransitioning, setIsSliderTransitioning] = useState(true);
  const autoSlideTimer = useRef(null);

  const dragStartX = useRef(0);
  const isDragging = useRef(false);
  const displayProjects = [...projects, projects[0]];

  const handleNext = () => {
    setIsSliderTransitioning(true);
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, projects.length));
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setIsSliderTransitioning(false);
      setCurrentIndex(projects.length);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsSliderTransitioning(true);
          setCurrentIndex(projects.length - 1);
        });
      });
      return;
    }

    setIsSliderTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (!isPaused) {
      autoSlideTimer.current = setInterval(() => {
        handleNext();
      }, 4000);
    }
    return () => {
      if (autoSlideTimer.current) clearInterval(autoSlideTimer.current);
    };
  }, [isPaused, currentIndex]);

  useEffect(() => {
    if (currentIndex !== projects.length) return undefined;

    const resetTimer = setTimeout(() => {
      setIsSliderTransitioning(false);
      setCurrentIndex(0);
      requestAnimationFrame(() => setIsSliderTransitioning(true));
    }, 680);

    return () => clearTimeout(resetTimer);
  }, [currentIndex, projects.length]);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    const diff = dragStartX.current - e.clientX;
    if (diff > 50) handleNext();  
    if (diff < -50) handlePrev(); 
    isDragging.current = false;
  };

  const activeProjectIndex = currentIndex % projects.length;
  const currentProject = projects[activeProjectIndex];

  return (
    <section className="w-full bg-[#F4F6F8] px-0 py-12 md:py-20 flex flex-col items-center overflow-hidden select-none font-sans relative">
      
      {/* ==================== HEADER SECTION (PERFECTLY CENTERED ROTATOR) ==================== */}
      <div className="w-full max-w-5xl text-center space-y-4 mb-12 md:mb-14 px-6 relative z-30 flex flex-col items-center justify-center">
        {/* ── UPDATED GLOBAL HEADING SIZE ── */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111111] leading-tight flex flex-col items-center justify-center">
          <span>We are Your Partner in</span>
          
          {/* Centered Vertical Slider Block */}
          <span className="block relative overflow-hidden h-[45px] sm:h-[65px] lg:h-[75px] w-full text-center mt-1">
            <span className="core-pillars-word-marquee absolute inset-x-0 top-0 flex flex-col items-center justify-start">
              {marqueeWords.map((word, idx) => (
                <span 
                  key={idx} 
                  // UPDATED GRADIENT COLOR FOR SLIDING WORDS
                  className="h-[45px] sm:h-[65px] lg:h-[75px] flex items-center justify-center text-center w-full bg-clip-text text-transparent bg-gradient-to-r from-[#e1b054] via-[#ee3444] to-[#7361a7]"
                >
                  {word}
                </span>
              ))}
            </span>
          </span>
        </h2>

        <div className="space-y-2 mt-4">
          {/* ── UPDATED GLOBAL PARAGRAPH SIZE ── */}
          <p className="text-base sm:text-lg text-slate-700 font-semibold tracking-wide">
            Wash away your doubt and bathe in our glory!
          </p>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
            Explore some of our recent projects and see how we could make your brand shine...
          </p>
        </div>
        
        {/* ==================== CENTERED ACTION BUTTON WITH VERTICAL FILL ANIMATION ==================== */}
        <div className="mt-8 flex justify-center w-full relative z-30">
          <a
            href="/contact"
            className="group relative px-8 py-4 bg-slate-950 text-white rounded-full font-black uppercase text-xs tracking-[0.2em] overflow-hidden shadow-lg hover:shadow-xl active:scale-95 transition-transform duration-200 cursor-pointer outline-none inline-block"
          >
            {/* Bottom-to-Top Slide Fill Layer */}
            <span 
              className="absolute bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0"
              style={{
                backgroundImage: `linear-gradient(to right, #e1b054, #d24a8a, #ee3444)`
              }}
            ></span>
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2">
              <span>VIEW ALL CASE STUDIES</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </span>
          </a>
        </div>
      </div>

      {/* ==================== MASTER TRACK STAGE ==================== */}
      <div 
        className="w-full max-w-7xl mx-auto px-4 relative flex items-center justify-center h-[380px] sm:h-[440px] md:h-[480px] cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { setIsPaused(false); isDragging.current = false; }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        
        {/* BACKGROUND SLATE WAVE DECORATION VECTOR */}
        <div className="absolute inset-x-0 top-[50%] -translate-y-1/2 w-full h-24 md:h-32 pointer-events-none opacity-60 z-0 overflow-hidden">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-full stroke-slate-300/40 stroke-[7] stroke-linecap-round">
            <path d="M0,60 Q180,5 360,60 T720,60 T1080,60 T1440,60" />
          </svg>
        </div>

        {/* LAYER 1: FIXED CARD WALL */}
        <div 
          style={{ backgroundImage: currentProject.bgColor }}
          className="w-[92%] sm:w-[580px] md:w-[670px] h-full rounded-[30px] md:rounded-[40px] absolute top-0 left-1/2 -translate-x-1/2 z-10 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.22)] md:shadow-[0_35px_70px_-20px_rgba(15,23,42,0.25)] overflow-hidden p-6 md:p-12 flex flex-col justify-between border border-white/10 transition-all duration-500 ease-in-out"
        >
          <div className="absolute top-4 right-4 w-24 h-24 md:w-36 md:h-36 rounded-full border border-white/10 pointer-events-none z-0" />
          <div className="absolute top-20 right-20 w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/5 pointer-events-none z-0" />

          {/* TOP METADATA ROW */}
          <div className="w-full flex items-center justify-between relative z-10 -mt-5 md:-mt-8">
            <span className="text-xl md:text-2xl font-black tracking-tight text-white transition-opacity duration-300">
              {currentProject.client}
            </span>
            <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-bold text-white/30">
              Operational Showcase
            </span>
          </div>

          {/* Bottom Fixed Area Context Info */}
          <div className="w-full text-left space-y-2 md:space-y-3 relative z-10 mt-auto">
            <div className="w-12 h-2 flex items-center justify-start">
              <svg viewBox="0 0 40 10" fill="none" className="w-full h-full stroke-[5] stroke-linecap-round transition-colors duration-300" style={{ stroke: currentProject.waveColor }}>
                <path d="M2,5 Q7,1 12,5 T22,5 T32,5" />
              </svg>
            </div>

            <div className="block">
              <span className="text-[9px] md:text-xs font-black tracking-widest uppercase bg-white/15 px-2 py-0.5 md:px-2.5 md:py-1 rounded text-white inline-block">
                {currentProject.category}
              </span>
            </div>

            <h3 className="font-black text-lg sm:text-2xl md:text-[26px] tracking-tight leading-snug max-w-2xl text-white drop-shadow-sm transition-all duration-300">
              {currentProject.headline}
            </h3>
          </div>
        </div>

        {/* LAYER 2: FOREGROUND CAROUSEL OVERLAP TRACK */}
        <div className="w-full h-[200px] sm:h-[240px] absolute top-[20%] sm:top-[15%] left-0 z-20 pointer-events-none flex items-center justify-center md:justify-between px-4 sm:px-6 gap-4">
          
          {/* 1. Left Side Screen Frame */}
          <div 
            onClick={handlePrev}
            style={{ width: '40%', height: '200px' }}
            className="hidden md:block rounded-2xl overflow-hidden bg-slate-950 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.6)] border border-white/20 pointer-events-auto cursor-pointer transform hover:scale-[1.01] transition-all duration-500 ease-in-out relative"
          >
            <div 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              className={`w-full h-full flex ${isSliderTransitioning ? 'transition-transform duration-[650ms] ease-[cubic-bezier(0.25,1,0.5,1)]' : 'transition-none'}`}
            >
              {displayProjects.map((p, idx) => (
                <img 
                  key={`left-img-${p.id}-${idx}`}
                  src={projects[(idx - 1 + projects.length) % projects.length].mockupImage} 
                  alt="Prev Mockup" 
                  className="w-full h-full object-cover flex-shrink-0 select-none pointer-events-none"
                  style={{ minWidth: '100%' }}
                />
              ))}
            </div>
          </div>

          {/* 2. Center Active Slider Window */}
          <div 
            className="w-[85%] sm:w-[60%] md:w-[40%] h-[180px] sm:h-[240px] rounded-2xl overflow-hidden bg-slate-950 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] md:shadow-[0_35px_70px_-12px_rgba(0,0,0,0.8)] border-2 border-white/40 pointer-events-auto transform transition-all duration-500 ease-in-out relative z-30"
          >
            <div 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              className={`w-full h-full flex ${isSliderTransitioning ? 'transition-transform duration-[650ms] ease-[cubic-bezier(0.25,1,0.5,1)]' : 'transition-none'}`}
            >
              {displayProjects.map((p, idx) => (
                <img 
                  key={`center-img-${p.id}-${idx}`}
                  src={p.mockupImage} 
                  alt="Active Mockup" 
                  className="w-full h-full object-cover flex-shrink-0 select-none pointer-events-none"
                  style={{ minWidth: '100%' }}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
          </div>

          {/* 3. Right Side Screen Frame */}
          <div 
            onClick={handleNext}
            style={{ width: '40%', height: '200px' }}
            className="hidden md:block rounded-2xl overflow-hidden bg-slate-950 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.6)] border border-white/20 pointer-events-auto cursor-pointer transform hover:scale-[1.01] transition-all duration-500 ease-in-out relative"
          >
            <div 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              className={`w-full h-full flex ${isSliderTransitioning ? 'transition-transform duration-[650ms] ease-[cubic-bezier(0.25,1,0.5,1)]' : 'transition-none'}`}
            >
              {displayProjects.map((p, idx) => (
                <img 
                  key={`right-img-${p.id}-${idx}`}
                  src={projects[(idx + 1) % projects.length].mockupImage} 
                  alt="Next Mockup" 
                  className="w-full h-full object-cover flex-shrink-0 select-none pointer-events-none"
                  style={{ minWidth: '100%' }}
                />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* CONTROL NAVIGATION PILL SWITCHER */}
      <div className="mt-10 md:mt-16 z-30 relative">
        <div className="inline-flex items-center gap-4 md:gap-6 bg-[#111111] text-white rounded-full px-5 py-2.5 md:px-6 md:py-3.5 shadow-xl border border-white/5">
          <button 
            onClick={handlePrev}
            className="text-white/50 hover:text-white transition-colors cursor-pointer border-none bg-transparent outline-none font-bold text-xl md:text-2xl leading-none"
            aria-label="Previous Slide"
          >
            &lsaquo;
          </button>
          
          <span className="text-[11px] md:text-xs font-black tracking-[0.2em] md:tracking-[0.25em] font-mono text-white/90">
            {activeProjectIndex + 1} / {projects.length}
          </span>
          
          <button 
            onClick={handleNext}
            className="text-white/50 hover:text-white transition-colors cursor-pointer border-none bg-transparent outline-none font-bold text-xl md:text-2xl leading-none"
            aria-label="Next Slide"
          >
            &rsaquo;
          </button>
        </div>
      </div>

      <style>{`
        @keyframes corePillarsWordMarquee {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }

        .core-pillars-word-marquee {
          animation: corePillarsWordMarquee 14s linear infinite;
          will-change: transform;
        }
      `}</style>

    </section>
  );
};

export default CorePillars;
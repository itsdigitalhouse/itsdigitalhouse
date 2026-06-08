import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Globe, Code, Cpu, Megaphone, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import logo from '../assets/logo.png';
import balloon from '../assets/balloon.png';
import WelcomePopup from './WelcomePopup';

const duckQuotes = [
  { question: "What did the duck detective say to his partner?", answer: "\"Let's quack this case.\"" },
  { question: "Why do ducks make great programmers?", answer: "\"Because they always debug with a quack.\"" },
  { question: "What do you call a duck that loves web design?", answer: "\"A pixel-quacker.\"" },
  { question: "What did the duck say at the business meeting?", answer: "\"Let's get down to duck-ness.\"" },
  { question: "Why was the duck so good at marketing?", answer: "\"Because his campaigns always made a big splash.\"" },
  { question: "What do you call a smart duck?", answer: "\"A wise-quacker.\"" },
  { question: "What did the duck entrepreneur say?", answer: "\"I've got a beak for business.\"" },
  { question: "Why do ducks never miss deadlines?", answer: "\"Because they always get their ducks in a row.\"" },
];

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState('seo');
  
  // Mobile Navigation Level Tracker
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMenuScreen, setMobileMenuScreen] = useState('main'); // 'main', 'services', 'subservice'
  const [selectedSubService, setSelectedSubService] = useState(null);

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isDuckOpen, setIsDuckOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(duckQuotes[0]);
  const duckPopupRef = useRef(null);

  const location = useLocation();
  const timeoutsRef = useRef({ Services: null, Solutions: null });

  // Scroll Lock for overlay states (both Desktop and Mobile overlays)
  useEffect(() => {
    if (isServicesOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isServicesOpen, isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset states on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsMobileMenuOpen(false);
    setMobileMenuScreen('main');
    setSelectedSubService(null);
    setIsDuckOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (duckPopupRef.current && !duckPopupRef.current.contains(e.target)) {
        setIsDuckOpen(false);
      }
    };
    if (isDuckOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDuckOpen]);

  const handleDuckClick = () => {
    const others = duckQuotes.filter(q => q.question !== currentQuote.question);
    const next = others[Math.floor(Math.random() * others.length)];
    setCurrentQuote(next);
    setIsDuckOpen(prev => !prev);
  };

  const handleMouseEnter = (name) => {
    if (timeoutsRef.current[name]) clearTimeout(timeoutsRef.current[name]);
    if (name === 'Services') { 
      setIsSolutionsOpen(false); 
      setIsServicesOpen(true); 
    } else if (name === 'Solutions') { 
      setIsServicesOpen(false); 
      setIsSolutionsOpen(true); 
    }
  };

  const handleMouseLeave = (name) => {
    if (timeoutsRef.current[name]) clearTimeout(timeoutsRef.current[name]);
    timeoutsRef.current[name] = setTimeout(() => {
      if (name === 'Services') setIsServicesOpen(false);
      if (name === 'Solutions') setIsSolutionsOpen(false);
    }, 150);
  };

  const forceCloseAllDropdowns = () => {
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
  };

  const isHeaderWhite = isScrolled || isServicesOpen || isSolutionsOpen;

  const leftNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
  ];

  const rightNavLinks = [
    { name: 'Solutions', path: '/solutions', hasDropdown: true },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  const nestedServices = {
    seo: {
      title: "SEO",
      icon: Megaphone,
      caseStudyTitle: "Organic Search Growth",
      caseStudyImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80",
      pages: ["Keyword Research & Strategy", "On-Page SEO Optimization", "Technical Audit & Fixes", "Link Building Services", "Local SEO Optimization"]
    },
    "paid-media": {
      title: "Paid Media",
      icon: Megaphone,
      caseStudyTitle: "PPC & Meta Campaign ROI",
      caseStudyImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
      pages: ["Google PPC Campaigns", "Meta Advertising (FB & Insta)", "LinkedIn B2B Ads", "Retargeting Frameworks"]
    },
    "social-media": {
      title: "Social Media",
      icon: Megaphone,
      caseStudyTitle: "Brand Community Building",
      caseStudyImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=500&q=80",
      pages: ["Social Media Strategy", "Content Calendar Creation", "Community Management", "Influencer Marketing"]
    },
    web: {
      title: "Web Development",
      icon: Globe,
      caseStudyTitle: "Interactive Enterprise Platforms",
      caseStudyImage: "https://images.unsplash.com/photo-1547658719-da2b81169bf4?auto=format&fit=crop&w=500&q=80",
      pages: ["Web Portal Development", "E-Commerce Development", "CMS Development", "Integration Services"]
    },
    mobile: {
      title: "Mobile Development",
      icon: Smartphone,
      caseStudyTitle: "Fluid Native Applications",
      caseStudyImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80",
      pages: ["iOS App Development", "Android App Development", "Cross Platform App Development"]
    },
    custom: {
      title: "Custom Software",
      icon: Code,
      caseStudyTitle: "Scalable Operations Infrastructure",
      caseStudyImage: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=500&q=80",
      pages: ["ERP Solution", "CRM Solution", "LMS Solution"]
    },
    ai: {
      title: "Artificial Intelligence",
      icon: Cpu,
      caseStudyTitle: "Cognitive Workflow Automation",
      caseStudyImage: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=500&q=80",
      pages: ["AI Development", "AI Chatbot Development", "Generative AI Development", "Machine Learning", "Computer Vision"]
    }
  };

  const solutionsData = [
    { name: "Legal Management", path: "/solutions/legal-management" },
    { name: "Restaurant - ERP", path: "/solutions/restaurant-erp" },
    { name: "Retail - Zakya POS", path: "/solutions/retail-zakya-pos" },
    { name: "Retail - ERP", path: "/solutions/retail-erp" },
    { name: "PR Agency - ERP", path: "/solutions/pr-agency-erp" },
    { name: "Manufacturing - ERP", path: "/solutions/manufacturing-erp" },
    { name: "CarRental - ERP", path: "/solutions/car-rental-erp" }
  ];

  const headingGradientStyle = {
    background: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  // Mobile Slide Variants
  const panelVariants = {
    initial: { x: '100vw' },
    animate: { x: 0 },
    exit: { x: '-100vw' }
  };

  return (
    <>
      {/* DESKTOP FULL-PAGE OVERLAY TAKE-OVER */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            onMouseEnter={() => handleMouseEnter('Services')}
            onMouseLeave={() => handleMouseLeave('Services')}
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ type: 'spring', stiffness: 65, damping: 16, mass: 0.9 }}
            className="fixed inset-0 w-screen h-screen bg-white z-[990] hidden lg:flex flex-col pt-32 pb-12 overflow-y-auto"
          >
            <div className="absolute top-0 left-0 w-full h-24 border-b border-slate-100 flex items-center max-w-screen-2xl mx-auto px-12 relative">
              <div className="flex items-center gap-x-8 xl:gap-x-12 pr-[160px] w-1/2 justify-end">
                {leftNavLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    onMouseEnter={() => { if (!link.hasDropdown) forceCloseAllDropdowns(); }}
                    className={`font-extrabold uppercase tracking-wider text-[16px] transition-colors ${link.name === 'Services' ? 'text-[#ee3444]' : 'text-slate-950 hover:text-black'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[992]">
                <Link to="/" onClick={forceCloseAllDropdowns}>
                  <img src={logo} alt="Logo" className="h-16 w-auto" />
                </Link>
              </div>

              <div className="flex items-center w-1/2 h-full pl-[160px] justify-between">
                <div className="flex items-center gap-x-8 xl:gap-x-12 justify-start">
                  {rightNavLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.path} 
                      onMouseEnter={() => {
                        if (link.name === 'Solutions') handleMouseEnter('Solutions');
                        else forceCloseAllDropdowns();
                      }}
                      className="font-extrabold uppercase tracking-wider text-[16px] text-slate-950 hover:text-black transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full max-w-screen-2xl mx-auto flex px-12 flex-1 mt-10 items-stretch min-h-[480px]">
              <div className="w-[30%] border-r border-slate-100 pr-10 flex flex-col justify-center gap-2">
                {Object.entries(nestedServices).map(([key, value]) => {
                  const TabIcon = value.icon;
                  const isCurrent = activeServiceTab === key;
                  return (
                    <div
                      key={key}
                      onMouseEnter={() => setActiveServiceTab(key)}
                      className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition-all duration-200 ${
                        isCurrent 
                          ? 'bg-slate-950 text-white shadow-xl translate-x-3 font-black scale-[1.02]' 
                          : 'text-slate-500 hover:text-slate-950 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        {TabIcon && <TabIcon className={`w-4 h-4 ${isCurrent ? 'text-[#ee3444]' : 'text-slate-400'}`} />}
                        <span className="text-[14px] font-extrabold uppercase tracking-wider">{value.title}</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transition-transform ${isCurrent ? 'opacity-100 text-[#ee3444] translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                    </div>
                  );
                })}
              </div>

              <div className="w-[45%] px-16 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeServiceTab}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-8"
                  >
                    <h4 style={headingGradientStyle} className="text-[13px] font-black tracking-widest uppercase">
                      {nestedServices[activeServiceTab].title} Hub Network
                    </h4>
                    <div className="flex flex-col gap-2">
                      {nestedServices[activeServiceTab].pages.map((page) => (
                        <Link
                          key={page}
                          to={`/services/${page.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
                          className="group flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                        >
                          <span className="text-[15px] font-bold text-slate-700 group-hover:text-black transition-colors">
                            {page}
                          </span>
                          <ArrowRight className="w-4 h-4 text-[#ee3444] opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-200" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="w-[25%] pl-10 flex flex-col justify-center border-l border-slate-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeServiceTab}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.18 }}
                    className="h-full flex flex-col justify-between py-4"
                  >
                    <div className="space-y-4">
                      <div className="w-full h-[220px] rounded-3xl overflow-hidden shadow-lg relative group">
                        <img
                          src={nestedServices[activeServiceTab].caseStudyImage}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt="Track Showcase Asset"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">// Live Operations Case</span>
                        <h5 className="text-[17px] font-black text-slate-950 mt-1 leading-snug">
                          {nestedServices[activeServiceTab].caseStudyTitle}
                        </h5>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="mt-8 flex items-center justify-between p-4 bg-slate-950 text-white rounded-2xl font-bold text-[12px] uppercase tracking-wider hover:bg-[#ee3444] transition-colors shadow-md"
                    >
                      <span>Initiate Strategy Call</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CORE BASE NAVBAR LAYOUT CONTAINER */}
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-300 ease-out z-[985] ${
          isHeaderWhite
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100/50 h-24'
            : 'bg-transparent h-24'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-full relative">
          
          {/* Desktop Links Grid Row */}
          <div className="hidden lg:flex items-center justify-between h-full w-full">
            <div className="flex items-center gap-x-8 xl:gap-x-12 pr-[160px] w-1/2 justify-end h-full">
              {leftNavLinks.map((link) => (
                <div key={link.name} className="relative h-full flex items-center" onMouseEnter={() => { if (link.hasDropdown) handleMouseEnter(link.name); else forceCloseAllDropdowns(); }} onMouseLeave={() => link.hasDropdown && handleMouseLeave(link.name)}>
                  <Link to={link.path} className="font-extrabold uppercase tracking-wider text-[16px] text-slate-950 hover:text-black flex items-center gap-1.5 transition-colors whitespace-nowrap">
                    {link.name}
                    {link.hasDropdown && <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>}
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex items-center w-1/2 h-full pl-[160px] justify-between">
              <div className="flex items-center gap-x-8 xl:gap-x-12 justify-start h-full">
                {rightNavLinks.map((link) => (
                  <div key={link.name} className="relative h-full flex items-center" onMouseEnter={() => { if (link.hasDropdown) handleMouseEnter(link.name); else forceCloseAllDropdowns(); }} onMouseLeave={() => link.hasDropdown && handleMouseLeave(link.name)}>
                    <Link to={link.path} className="font-extrabold uppercase tracking-wider text-[16px] text-slate-950 hover:text-black flex items-center gap-1.5 transition-colors whitespace-nowrap">
                      {link.name}
                      {link.hasDropdown && <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>}
                    </Link>
                    {link.name === 'Solutions' && isSolutionsOpen && (
                      <motion.div onMouseEnter={() => handleMouseEnter('Solutions')} onMouseLeave={() => handleMouseLeave('Solutions')} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="absolute left-0 w-[280px] bg-white shadow-xl p-5 rounded-2xl top-20 border border-slate-100 z-[999]">
                        <div className="flex flex-col gap-1">
                          {solutionsData.map(item => (
                            <Link key={item.name} to={item.path} className="text-[13px] font-bold text-slate-600 hover:text-[#ee3444] p-2.5 rounded-lg hover:bg-slate-50 transition-all">{item.name}</Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <div className="relative ml-auto flex items-center h-full" ref={duckPopupRef}>
                <button onClick={handleDuckClick} className={`flex items-center justify-center transition-all duration-200 hover:scale-110 ${isDuckOpen ? 'scale-110' : ''}`}>
                  <img src={balloon} alt="Duck" className="w-auto h-9 object-contain" />
                </button>
                <AnimatePresence>
                  {isDuckOpen && (
                    <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} className="absolute right-0 top-[calc(100%+16px)] w-[320px] bg-white rounded-2xl shadow-xl z-[1000] border-2 border-[#e91e8c]">
                      <div className="p-5">
                        <p className="font-black text-[14px] mb-2 text-[#e91e8c]">{currentQuote.question}</p>
                        <p className="text-slate-700 font-medium text-[14px] text-center">{currentQuote.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* DESKTOP CENTER LOGO VECTOR ACCENT */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[986] pointer-events-auto">
            <Link to="/">
              <img src={logo} alt="Logo" className={`w-auto transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'}`} />
            </Link>
          </div>

          {/* MOBILE RESPONSIVE TRIGGER HEADER BAR (Logo Centered, Balloon Hidden) */}
          <div className="lg:hidden flex items-center justify-between h-full w-full relative">
            {/* Empty placeholder to force absolute balance */}
            <div className="w-10 h-10" />
            
            {/* LOGO ALWAYS IN THE CENTER */}
            <Link to="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={logo} alt="Logo" className={`w-auto transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`} />
            </Link>

            {/* HAMBURGER TRIGGER ICON (Balloon Hidden on Mobile) */}
            <div className="flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="text-slate-900 focus:outline-none p-2 relative z-[2005]"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-7 h-7 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* NATIVE MOBILE MULTI-LEVEL SLIDE CANVAS ROUTER */}
        {/* NATIVE MOBILE MULTI-LEVEL SLIDE CANVAS */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-[2000] bg-white w-full h-screen overflow-y-auto"
    >
      {/* Header with Logo and Close button */}
      <div className="w-full h-24 flex items-center justify-between px-6 border-b border-slate-100">
        <div className="w-10"></div> {/* Spacer for alignment */}
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logo} alt="Logo" className="h-12 w-auto" />
        </Link>
        <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div className="p-8">
        <AnimatePresence mode="wait">
          {/* LEVEL 1: MAIN MENU */}
          {mobileMenuScreen === 'main' && (
            <motion.div key="main" variants={panelVariants} initial="initial" animate="animate" exit="exit">
              <h3 className="text-slate-400 text-[11px] font-black uppercase tracking-widest mb-8">// MAIN MENU</h3>
              <div className="flex flex-col gap-6">
                {allNavLinks.map((link) => (
                  <button 
                    key={link.name}
                    onClick={() => {
                      if (link.name === 'Services') setMobileMenuScreen('services');
                      else if (link.name === 'Solutions') setMobileMenuScreen('solutions'); // Added Solutions flow
                      else window.location.href = link.path;
                    }}
                    className="flex justify-between items-center text-[20px] font-extrabold uppercase text-slate-900"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronRight className="w-5 h-5 text-slate-400" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* LEVEL 2: SERVICES */}
          {mobileMenuScreen === 'services' && (
            <motion.div key="services" variants={panelVariants} initial="initial" animate="animate" exit="exit">
              <button onClick={() => setMobileMenuScreen('main')} className="flex items-center text-slate-400 text-[11px] font-bold uppercase mb-6"><ChevronLeft className="w-4 h-4"/> Back</button>
              <h3 className="text-[#ee3444] text-[11px] font-black uppercase tracking-widest mb-6">// SERVICES</h3>
              <div className="flex flex-col gap-4">
                {Object.entries(nestedServices).map(([key, val]) => (
                  <button key={key} onClick={() => { setSelectedSubService(key); setMobileMenuScreen('subservice'); }} className="flex justify-between text-[18px] font-bold py-2 border-b border-slate-100">
                    {val.title} <ChevronRight className="w-5 h-5 text-slate-400" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* LEVEL 2: SOLUTIONS (Naya add kiya hai) */}
          {mobileMenuScreen === 'solutions' && (
            <motion.div key="solutions" variants={panelVariants} initial="initial" animate="animate" exit="exit">
              <button onClick={() => setMobileMenuScreen('main')} className="flex items-center text-slate-400 text-[11px] font-bold uppercase mb-6"><ChevronLeft className="w-4 h-4"/> Back</button>
              <h3 className="text-[#ee3444] text-[11px] font-black uppercase tracking-widest mb-6">// SOLUTIONS</h3>
              <div className="flex flex-col gap-4">
                {solutionsData.map((item) => (
                  <Link key={item.name} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="text-[18px] font-bold py-2 border-b border-slate-100 block">
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* LEVEL 3: SUB-SERVICES */}
          {mobileMenuScreen === 'subservice' && selectedSubService && (
            <motion.div key="sub" variants={panelVariants} initial="initial" animate="animate" exit="exit">
              <button onClick={() => setMobileMenuScreen('services')} className="flex items-center text-slate-400 text-[11px] font-bold uppercase mb-6"><ChevronLeft className="w-4 h-4"/> Back to Services</button>
              <h3 className="text-[#ee3444] text-[11px] font-black uppercase tracking-widest mb-6">// {nestedServices[selectedSubService].title}</h3>
              <div className="flex flex-col gap-4">
                {nestedServices[selectedSubService].pages.map((page) => (
                  <Link key={page} to={`/services/${page.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] text-slate-600 font-medium py-2 border-b border-slate-100 block">
                    {page}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </nav>

      <WelcomePopup isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </>
  );
};

export default Navbar;
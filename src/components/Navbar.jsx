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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // 'direction' tracks if we're going forward (1) or backward (-1) for slide animation
  const [mobileMenuScreen, setMobileMenuScreen] = useState('main');
  const [direction, setDirection] = useState(1);
  const [selectedSubService, setSelectedSubService] = useState(null);

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isDuckOpen, setIsDuckOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(duckQuotes[0]);
  const duckPopupRef = useRef(null);

  const location = useLocation();
  const timeoutsRef = useRef({ Services: null, Solutions: null });

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
    if (name === 'Services') { setIsSolutionsOpen(false); setIsServicesOpen(true); }
    else if (name === 'Solutions') { setIsServicesOpen(false); setIsSolutionsOpen(true); }
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

  // ── Mobile nav helpers ────────────────────────────────────────────
  const goTo = (screen, dir = 1) => {
    setDirection(dir);
    setMobileMenuScreen(screen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      setMobileMenuScreen('main');
      setDirection(1);
      setSelectedSubService(null);
    }, 400);
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
      title: "SEO", icon: Megaphone,
      pages: [
        { label: "Keyword Research & Strategy", desc: "Find high-impact keywords that drive qualified traffic to your site." },
        { label: "On-Page SEO Optimization", desc: "Optimize content, meta tags, and structure for maximum search visibility." },
        { label: "Technical Audit & Fixes", desc: "Identify and resolve crawl errors, speed issues, and indexing problems." },
        { label: "Link Building Services", desc: "Build authoritative backlinks that strengthen your domain ranking." },
        { label: "Local SEO Optimization", desc: "Dominate local search results and attract nearby customers." },
        { label: "SEO Reporting & Analytics", desc: "Track rankings, traffic, and ROI with detailed monthly reports." },
      ]
    },
    "paid-media": {
      title: "Paid Media", icon: Megaphone,
      pages: [
        { label: "Google PPC Campaigns", desc: "Data-driven ad campaigns that maximize clicks and minimize cost-per-lead." },
        { label: "Meta Advertising", desc: "Precision-targeted Facebook & Instagram ads that convert audiences." },
        { label: "LinkedIn B2B Ads", desc: "Reach decision-makers and professionals with high-intent B2B campaigns." },
        { label: "Retargeting Frameworks", desc: "Re-engage past visitors and recover lost conversions at scale." },
      ]
    },
    "social-media": {
      title: "Social Media", icon: Megaphone,
      pages: [
        { label: "Social Media Strategy", desc: "Custom roadmaps aligned to your brand voice and business goals." },
        { label: "Content Calendar Creation", desc: "Planned, on-brand content scheduled for peak engagement times." },
        { label: "Community Management", desc: "Active audience engagement that builds loyalty and brand trust." },
        { label: "Influencer Marketing", desc: "Connect with creators who authentically amplify your message." },
      ]
    },
    web: {
      title: "Web Development", icon: Globe,
      pages: [
        { label: "Web Portal Development", desc: "Scalable, secure portals built for enterprise-level user management." },
        { label: "E-Commerce Development", desc: "High-converting online stores with seamless checkout experiences." },
        { label: "CMS Development", desc: "Flexible content management systems your team can run independently." },
        { label: "Integration Services", desc: "Connect your website to CRMs, ERPs, and third-party APIs effortlessly." },
      ]
    },
    mobile: {
      title: "Mobile Development", icon: Smartphone,
      pages: [
        { label: "iOS App Development", desc: "Polished native iPhone and iPad apps built for App Store success." },
        { label: "Android App Development", desc: "Robust Android applications optimized for diverse device ecosystems." },
        { label: "Cross Platform Apps", desc: "One codebase, two platforms — fast delivery without sacrificing quality." },
        { label: "App UI/UX Design", desc: "Intuitive mobile interfaces designed around real user behavior." },
      ]
    },
    custom: {
      title: "Custom Software", icon: Code,
      pages: [
        { label: "ERP Solution", desc: "Unified enterprise systems that streamline operations across departments." },
        { label: "CRM Solution", desc: "Customer relationship tools built around your unique sales workflow." },
        { label: "LMS Solution", desc: "Engaging learning platforms for training teams or selling courses." },
        { label: "Process Automation", desc: "Eliminate repetitive tasks with intelligent workflow automation." },
      ]
    },
    ai: {
      title: "Artificial Intelligence", icon: Cpu,
      pages: [
        { label: "AI Development", desc: "Custom AI systems engineered to solve your specific business challenges." },
        { label: "AI Chatbot Development", desc: "Conversational agents that handle support, sales, and lead capture 24/7." },
        { label: "Generative AI Solutions", desc: "Leverage LLMs to automate content, code, and creative workflows." },
        { label: "Machine Learning", desc: "Predictive models trained on your data to unlock actionable insights." },
        { label: "Computer Vision", desc: "Visual AI systems for detection, classification, and quality inspection." },
        { label: "AI Integration", desc: "Embed AI capabilities into your existing platforms and products." },
      ]
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

  // ── FIX 3: Page-slide variants using direction state ───────────────
  const panelVariants = {
    initial: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    animate: { x: 0, opacity: 1, transition: { duration: 0.32, ease: [0.32, 0, 0.67, 0] } },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0, transition: { duration: 0.28, ease: [0.33, 1, 0.68, 1] } }),
  };

  return (
    <>
      {/* ── DESKTOP FULL-PAGE OVERLAY ─────────────────────────────── */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            onMouseEnter={() => handleMouseEnter('Services')}
            onMouseLeave={() => handleMouseLeave('Services')}
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ type: 'spring', stiffness: 65, damping: 16, mass: 0.9 }}
            className="fixed inset-0 w-screen h-screen bg-white z-[990] hidden lg:flex flex-col overflow-y-auto"
          >
            {/* ── Overlay Navbar row — mirrors base navbar exactly ── */}
            <div className="w-full h-24 border-b border-slate-100 flex-shrink-0 relative flex items-center">
              <div className="max-w-screen-2xl mx-auto px-12 w-full flex items-center h-full relative">

                {/* Left links */}
                <div className="flex items-center gap-x-8 xl:gap-x-12 pr-[160px] w-1/2 justify-end h-full">
                  {leftNavLinks.map((link) => (
                    <Link key={link.name} to={link.path}
                      onMouseEnter={() => { if (!link.hasDropdown) forceCloseAllDropdowns(); }}
                      className={`font-extrabold uppercase tracking-wider text-[16px] transition-colors ${link.name === 'Services' ? 'text-[#ee3444]' : 'text-slate-950 hover:text-black'}`}
                    >{link.name}</Link>
                  ))}
                </div>

                {/* Center logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[992]">
                  <Link to="/" onClick={forceCloseAllDropdowns}>
                    <img src={logo} alt="Logo" className="h-16 w-auto" />
                  </Link>
                </div>

                {/* Right links + balloon */}
                <div className="flex items-center w-1/2 h-full pl-[160px] justify-between">
                  <div className="flex items-center gap-x-8 xl:gap-x-12 justify-start h-full">
                    {rightNavLinks.map((link) => (
                      <Link key={link.name} to={link.path}
                        onMouseEnter={() => { if (link.name === 'Solutions') handleMouseEnter('Solutions'); else forceCloseAllDropdowns(); }}
                        className="font-extrabold uppercase tracking-wider text-[16px] text-slate-950 hover:text-black transition-colors"
                      >{link.name}</Link>
                    ))}
                  </div>
                  {/* Balloon — same position as base navbar */}
                  <div className="relative ml-auto flex items-center h-full">
                    <button onClick={handleDuckClick} className={`flex items-center justify-center transition-all duration-200 hover:scale-110 ${isDuckOpen ? 'scale-110' : ''}`}>
                      <img src={balloon} alt="Duck" className="w-auto h-9 object-contain" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Services content area — two columns only (no image panel) ── */}
            <div className="w-full max-w-screen-2xl mx-auto flex px-12 flex-1 mt-6 items-start">

              {/* Left col — service tabs, bigger font */}
              <div className="w-[35%] border-r border-slate-100 pr-10 flex flex-col justify-start pt-4 gap-1">
                <p className="text-[11px] font-black tracking-widest text-slate-400 uppercase mb-4">// Our Services</p>
                {Object.entries(nestedServices).map(([key, value]) => {
                  const TabIcon = value.icon;
                  const isCurrent = activeServiceTab === key;
                  return (
                    <div key={key} onMouseEnter={() => setActiveServiceTab(key)}
                      className={`flex items-center justify-between px-5 py-4 rounded-2xl cursor-pointer transition-all duration-200 ${
                        isCurrent
                          ? 'bg-slate-950 text-white shadow-xl translate-x-2 font-black'
                          : 'text-slate-500 hover:text-slate-950 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        {TabIcon && <TabIcon className={`w-5 h-5 ${isCurrent ? 'text-[#ee3444]' : 'text-slate-400'}`} />}
                        {/* FIX: bigger font for service category titles */}
                        <span className="text-[17px] font-extrabold uppercase tracking-wide">{value.title}</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform ${isCurrent ? 'opacity-100 text-[#ee3444]' : 'opacity-0'}`} />
                    </div>
                  );
                })}
              </div>

              {/* Right col — sub-pages, shifted right, bigger content */}
              <div className="w-[65%] pl-16 pt-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeServiceTab}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* FIX: bigger heading for active service */}
                    <h4 style={headingGradientStyle} className="text-[15px] font-black tracking-widest uppercase mb-6">
                      {nestedServices[activeServiceTab].title}
                    </h4>
                    {/* 2x2 grid layout with descriptions */}
                    <div className="grid grid-cols-2 gap-3">
                      {nestedServices[activeServiceTab].pages.map((page) => (
                        <Link key={page.label}
                          to={`/services/${page.label.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
                          className="group flex flex-col gap-1.5 px-5 py-4 rounded-xl hover:bg-slate-50 transition-all border border-slate-100 hover:border-slate-200 hover:shadow-sm"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[15px] font-extrabold text-slate-800 group-hover:text-black transition-colors leading-tight">
                              {page.label}
                            </span>
                            <ArrowRight className="w-4 h-4 text-[#ee3444] opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200 flex-shrink-0" />
                          </div>
                          <p className="text-[12px] text-slate-400 font-medium leading-relaxed group-hover:text-slate-500 transition-colors">
                            {page.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom CTA strip */}
            <div className="w-full max-w-screen-2xl mx-auto px-12 py-6 flex justify-end">
              <Link to="/contact" onClick={forceCloseAllDropdowns}
                className="flex items-center gap-3 px-6 py-3 bg-slate-950 text-white rounded-2xl font-bold text-[13px] uppercase tracking-wider hover:bg-[#ee3444] transition-colors shadow-md"
              >
                <span>Initiate Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── BASE NAVBAR ───────────────────────────────────────────── */}
      <nav className={`fixed top-0 left-0 w-full transition-all duration-300 ease-out z-[985] ${isHeaderWhite ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100/50 h-24' : 'bg-transparent h-24'}`}>
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-full relative">

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-between h-full w-full">
            <div className="flex items-center gap-x-8 xl:gap-x-12 pr-[160px] w-1/2 justify-end h-full">
              {leftNavLinks.map((link) => (
                <div key={link.name} className="relative h-full flex items-center"
                  onMouseEnter={() => { if (link.hasDropdown) handleMouseEnter(link.name); else forceCloseAllDropdowns(); }}
                  onMouseLeave={() => link.hasDropdown && handleMouseLeave(link.name)}
                >
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
                  <div key={link.name} className="relative h-full flex items-center"
                    onMouseEnter={() => { if (link.hasDropdown) handleMouseEnter(link.name); else forceCloseAllDropdowns(); }}
                    onMouseLeave={() => link.hasDropdown && handleMouseLeave(link.name)}
                  >
                    <Link to={link.path} className="font-extrabold uppercase tracking-wider text-[16px] text-slate-950 hover:text-black flex items-center gap-1.5 transition-colors whitespace-nowrap">
                      {link.name}
                      {link.hasDropdown && <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>}
                    </Link>
                    {link.name === 'Solutions' && isSolutionsOpen && (
                      <motion.div onMouseEnter={() => handleMouseEnter('Solutions')} onMouseLeave={() => handleMouseLeave('Solutions')}
                        initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 w-[280px] bg-white shadow-xl p-5 rounded-2xl top-20 border border-slate-100 z-[999]"
                      >
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
                    <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 top-[calc(100%+16px)] w-[320px] bg-white rounded-2xl shadow-xl z-[1000] border-2 border-[#e91e8c]"
                    >
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

          {/* Desktop Center Logo */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[986] pointer-events-auto">
            <Link to="/">
              <img src={logo} alt="Logo" className={`w-auto transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'}`} />
            </Link>
          </div>

          {/* ── FIX 1: MOBILE HEADER BAR — Logo bigger ────────────── */}
          <div className="lg:hidden flex items-center justify-between h-full w-full relative">
            <div className="w-10 h-10" />

            {/* FIX 1: Logo is now h-14 (was h-10/h-12), centered */}
            <Link to="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src={logo}
                alt="Logo"
                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12' : 'h-14'}`}
              />
            </Link>

            {/* Hamburger — only visible when drawer is CLOSED */}
            {!isMobileMenuOpen && (
              <div className="flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="text-slate-900 focus:outline-none p-2"
                  aria-label="Open menu"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            )}
            {/* Placeholder to keep layout balanced when hamburger is hidden */}
            {isMobileMenuOpen && <div className="w-[44px]" />}
          </div>
        </div>

        {/* ── FIX 2 & 3: MOBILE DRAWER — top slide-down + page-slide ── */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={closeMobileMenu}
                className="fixed inset-0 z-[1999] bg-black/20 lg:hidden"
              />

              {/* FIX 2: Drawer slides from y: '-100%' to y: 0 (true top-down) */}
              <motion.div
                key="drawer"
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.45, ease: [0.32, 0, 0.67, 0] }}
                className="fixed top-0 left-0 right-0 z-[2000] bg-white lg:hidden shadow-2xl"
                style={{ height: '100dvh' }}
              >
                {/* Drawer Header */}
                <div className="w-full h-24 flex items-center justify-between px-6 border-b border-slate-100 flex-shrink-0">
                  <div className="w-10" />
                  {/* FIX 1: Logo inside drawer also bigger */}
                  <Link to="/" onClick={closeMobileMenu}>
                    <img src={logo} alt="Logo" className="h-14 w-auto" />
                  </Link>
                  <button onClick={closeMobileMenu} className="text-slate-900 p-2" aria-label="Close menu">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* FIX 3: Panels container — overflow:hidden so slide stays clipped */}
                <div className="relative overflow-hidden" style={{ height: 'calc(100dvh - 96px)' }}>
                  <AnimatePresence custom={direction} mode="popLayout">

                    {/* LEVEL 1: MAIN MENU */}
                    {mobileMenuScreen === 'main' && (
                      <motion.div
                        key="main"
                        custom={direction}
                        variants={panelVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0 overflow-y-auto p-8"
                      >
                        <p className="text-slate-400 text-[11px] font-black uppercase tracking-widest mb-8">// Main Menu</p>
                        <div className="flex flex-col gap-1">
                          {allNavLinks.map((link, i) => (
                            <React.Fragment key={link.name}>
                              <button
                                onClick={() => {
                                  if (link.name === 'Services') { goTo('services', 1); }
                                  else if (link.name === 'Solutions') { goTo('solutions', 1); }
                                  else { closeMobileMenu(); window.location.href = link.path; }
                                }}
                                className="flex justify-between items-center py-5 text-left w-full"
                              >
                                <span className="text-[26px] font-black uppercase tracking-tight text-slate-900 leading-none">
                                  {link.name}
                                </span>
                                {link.hasDropdown
                                  ? <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                  : <ArrowRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
                                }
                              </button>
                              {i < allNavLinks.length - 1 && <div className="h-px bg-slate-100" />}
                            </React.Fragment>
                          ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-10">
                          <Link
                            to="/contact"
                            onClick={closeMobileMenu}
                            className="flex items-center justify-between w-full p-5 bg-slate-950 text-white rounded-2xl font-bold text-[13px] uppercase tracking-widest hover:bg-[#ee3444] transition-colors"
                          >
                            <span>Get In Touch</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}

                    {/* LEVEL 2: SERVICES */}
                    {mobileMenuScreen === 'services' && (
                      <motion.div
                        key="services"
                        custom={direction}
                        variants={panelVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0 overflow-y-auto p-8"
                      >
                        <button
                          onClick={() => goTo('main', -1)}
                          className="flex items-center gap-1 text-slate-400 text-[11px] font-black uppercase tracking-widest mb-6 hover:text-slate-700 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" /> Back
                        </button>
                        <h2 className="text-[28px] font-black uppercase tracking-tight text-slate-900 mb-8 leading-none">
                          Services
                        </h2>
                        <div className="flex flex-col gap-1">
                          {Object.entries(nestedServices).map(([key, val], i, arr) => (
                            <React.Fragment key={key}>
                              <button
                                onClick={() => { setSelectedSubService(key); goTo('subservice', 1); }}
                                className="flex justify-between items-center py-5 w-full text-left"
                              >
                                <span className="text-[20px] font-extrabold text-slate-800 leading-none">{val.title}</span>
                                <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
                              </button>
                              {i < arr.length - 1 && <div className="h-px bg-slate-100" />}
                            </React.Fragment>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* LEVEL 2: SOLUTIONS */}
                    {mobileMenuScreen === 'solutions' && (
                      <motion.div
                        key="solutions"
                        custom={direction}
                        variants={panelVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0 overflow-y-auto p-8"
                      >
                        <button
                          onClick={() => goTo('main', -1)}
                          className="flex items-center gap-1 text-slate-400 text-[11px] font-black uppercase tracking-widest mb-6 hover:text-slate-700 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" /> Back
                        </button>
                        <h2 className="text-[28px] font-black uppercase tracking-tight text-slate-900 mb-8 leading-none">
                          Solutions
                        </h2>
                        <div className="flex flex-col gap-1">
                          {solutionsData.map((item, i) => (
                            <React.Fragment key={item.name}>
                              <Link
                                to={item.path}
                                onClick={closeMobileMenu}
                                className="flex justify-between items-center py-5"
                              >
                                <span className="text-[20px] font-extrabold text-slate-800 leading-none">{item.name}</span>
                                <ArrowRight className="w-4 h-4 text-slate-300 flex-shrink-0" />
                              </Link>
                              {i < solutionsData.length - 1 && <div className="h-px bg-slate-100" />}
                            </React.Fragment>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* LEVEL 3: SUB-SERVICE PAGES */}
                    {mobileMenuScreen === 'subservice' && selectedSubService && (
                      <motion.div
                        key="subservice"
                        custom={direction}
                        variants={panelVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0 overflow-y-auto p-8"
                      >
                        <button
                          onClick={() => goTo('services', -1)}
                          className="flex items-center gap-1 text-slate-400 text-[11px] font-black uppercase tracking-widest mb-6 hover:text-slate-700 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" /> Back to Services
                        </button>
                        <h2 className="text-[28px] font-black uppercase tracking-tight text-slate-900 mb-8 leading-none">
                          {nestedServices[selectedSubService].title}
                        </h2>
                        <div className="flex flex-col gap-1">
                          {nestedServices[selectedSubService].pages.map((page, i, arr) => (
                            <React.Fragment key={page.label}>
                              <Link
                                to={`/services/${page.label.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-')}`}
                                onClick={closeMobileMenu}
                                className="flex flex-col py-4 group"
                              >
                                <div className="flex justify-between items-center">
                                  <span className="text-[18px] font-bold text-slate-700 group-hover:text-slate-900 transition-colors leading-none">{page.label}</span>
                                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#ee3444] transition-colors flex-shrink-0" />
                                </div>
                                <p className="text-[12px] text-slate-400 mt-1 leading-relaxed">{page.desc}</p>
                              </Link>
                              {i < arr.length - 1 && <div className="h-px bg-slate-100" />}
                            </React.Fragment>
                          ))}
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>

      <WelcomePopup isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
    </>
  );
};

export default Navbar;

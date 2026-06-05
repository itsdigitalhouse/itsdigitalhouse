import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false); 
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  
  // State to track scroll for transparent to blur transition
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const timeoutsRef = useRef({ Services: null, Solutions: null });

  // Scroll handle karne k liye effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileSolutionsOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (name) => {
    if (timeoutsRef.current[name]) {
      clearTimeout(timeoutsRef.current[name]);
    }

    if (name === 'Services') {
      setIsSolutionsOpen(false);
      setIsServicesOpen(true);
    } else if (name === 'Solutions') {
      setIsServicesOpen(false);
      setIsSolutionsOpen(true);
    }
  };

  const handleMouseLeave = (name) => {
    if (timeoutsRef.current[name]) {
      clearTimeout(timeoutsRef.current[name]);
    }

    timeoutsRef.current[name] = setTimeout(() => {
      if (name === 'Services') setIsServicesOpen(false);
      if (name === 'Solutions') setIsSolutionsOpen(false);
    }, 150);
  };

  const isHeaderWhite = isScrolled || isServicesOpen || isSolutionsOpen;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Solutions', path: '/solutions', hasDropdown: true },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const servicesData = {
    mobile: { title: "MOBILE DEVELOPMENT", items: ["iOS App Development", "Android App Development", "Cross Platform App Development"] },
    web: { title: "WEB DEVELOPMENT", items: ["Web Portal Development", "E-Commerce Development", "CMS Development", "Integration Services"] },
    custom: { title: "CUSTOM SOFTWARE DEVELOPMENT", items: ["ERP Solution", "CRM Solution", "LMS Solution"] },
    ai: { title: "ARTIFICIAL INTELLIGENCE", items: ["AI Development", "AI Chatbot Development", "Generative AI Development", "Machine Learning", "Computer Vision", "Natural Language Processing"] },
    cloud: { title: "CLOUD SERVICES", items: ["Cloud Migration", "Cloud Support & Maintenance"] },
    marketing: { title: "DIGITAL MARKETING SERVICES", items: ["SEO", "SMM", "Paid Ads Management", "Content Creation"] }
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

  return (
    /* CRITICAL FIX: 
      Jab user top par hoga toh 'absolute bg-transparent' apply hoga taake slider top touch kare.
      Scroll karne par 'fixed bg-white/80 backdrop-blur-md' hojayega tab baki sections iske pichay scroll honge.
    */
    <nav className={`fixed top-0 left-0 w-full z-[999] transition-colors duration-300 ease-out ${
    isHeaderWhite
      ? 'bg-white/80 backdrop-blur-md shadow-none border-b border-transparent h-24' 
      : 'bg-transparent h-24'
    }`}>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 h-full">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`} />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <div key={link.name} className="relative h-full flex items-center" 
                onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)} 
                onMouseLeave={() => link.hasDropdown && handleMouseLeave(link.name)}
              >
                <Link to={link.path} className="font-bold uppercase tracking-widest text-[13px] text-slate-950 hover:text-black flex items-center gap-1 transition-colors py-4">
                  {link.name} {link.hasDropdown && <svg className="w-3 h-3" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>}
                </Link>

                {/* Services Mega Menu */}
                {link.name === 'Services' && isServicesOpen && (
                  <motion.div 
                    onMouseEnter={() => handleMouseEnter('Services')}
                    onMouseLeave={() => handleMouseLeave('Services')}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.36, ease: 'easeOut' }}
                    className={`fixed left-0 w-screen bg-white border-t border-transparent shadow-lg flex z-[999] transition-all duration-300 top-24`}
                  >
                    <div className="w-[25%] p-6">
                      <div className="w-full h-[350px] rounded-3xl overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="Services" />
                      </div>
                    </div>
                    <div className="w-[75%] p-16 grid grid-cols-3 gap-12">
                      {Object.values(servicesData).map(s => (
                        <div key={s.title}>
                          <h4 style={headingGradientStyle} className="text-[14px] font-black uppercase mb-4 tracking-wider">{s.title}</h4>
                          <div className="space-y-3">
                            {s.items.map(i => (
                              <Link key={i} to={`/services/${i.toLowerCase().replace(/\s+/g, '-')}`} className="block text-[13px] font-semibold text-slate-600 hover:text-slate-950 transition-colors">• {i}</Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Solutions Dropdown */}
                {link.name === 'Solutions' && isSolutionsOpen && (
                  <motion.div 
                    onMouseEnter={() => handleMouseEnter('Solutions')}
                    onMouseLeave={() => handleMouseLeave('Solutions')}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, ease: 'easeOut' }}
                    className={`absolute left-0 w-[300px] bg-white border border-transparent shadow-lg p-6 rounded-3xl z-[999] ${isHeaderWhite ? 'top-24' : 'top-[100%]'}`}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {solutionsData.map(item => (
                        <Link key={item.name} to={item.path} className="text-[13px] font-semibold text-slate-600 hover:text-[#ee3444] p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          
          {/* Desktop Consultation Button */}
          <button className="hidden lg:block font-black uppercase text-[11px] border-2 border-slate-950 rounded-full px-6 py-2 hover:bg-slate-950 hover:text-white transition-all transform-gpu active:scale-95">
            Get A Consultation
          </button>

          {/* HAMBURGER BUTTON */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-900 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU SIDEBAR */}
      <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div 
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed inset-0 z-[1000] bg-white flex flex-col lg:hidden" // Full screen white
    >
      {/* Header inside Menu */}
      <div className="flex justify-between items-center p-6 border-b border-slate-100">
        <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
        <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900 p-2">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>

      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <div key={link.name} className="border-b border-slate-50 pb-3">
              {!link.hasDropdown ? (
                <Link to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="font-bold uppercase tracking-wider text-[14px] text-slate-700 block py-1">
                  {link.name}
                </Link>
              ) : (
                <div>
                  <button 
                    onClick={() => link.name === 'Services' ? setMobileServicesOpen(!mobileServicesOpen) : setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className="w-full flex justify-between items-center font-bold uppercase tracking-wider text-[14px] text-slate-700 py-1"
                  >
                    {link.name}
                    <svg className={`w-4 h-4 transform transition-transform ${((link.name === 'Services' && mobileServicesOpen) || (link.name === 'Solutions' && mobileSolutionsOpen)) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </button>

                  {/* Sub-menu container inside flow */}
                  <AnimatePresence initial={false}>
                    {((link.name === 'Services' && mobileServicesOpen) || (link.name === 'Solutions' && mobileSolutionsOpen)) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        {link.name === 'Services' ? (
                          <div className="pl-4 mt-3 space-y-4 bg-slate-50 p-4 rounded-xl">
                            {Object.values(servicesData).map(s => (
                              <div key={s.title}>
                                <h5 style={headingGradientStyle} className="text-[11px] font-black tracking-wider mb-2">{s.title}</h5>
                                <div className="space-y-2 pl-2">
                                  {s.items.map(i => (
                                    <Link key={i} to={`/services/${i.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsMobileMenuOpen(false)} className="block text-[12px] font-medium text-slate-600">• {i}</Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="pl-2 mt-2 flex flex-col gap-1 bg-slate-50 p-3 rounded-xl">
                            {solutionsData.map(item => (
                              <Link key={item.name} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="text-[12px] font-semibold text-slate-600 p-2">{item.name}</Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;
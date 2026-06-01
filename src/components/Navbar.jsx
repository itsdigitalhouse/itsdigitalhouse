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
  
  const location = useLocation();
  const timeoutsRef = useRef({ Services: null, Solutions: null });

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

  // UPDATED TO OBJECTS FOR DYNAMIC ROUTING PATHS
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
    <nav className="fixed top-0 left-0 w-full bg-white z-[999] shadow-sm">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/"><img src={logo} alt="Logo" className="h-16 w-auto" /></Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative py-6" 
                onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.name)} 
                onMouseLeave={() => link.hasDropdown && handleMouseLeave(link.name)}
              >
                <Link to={link.path} className="font-semibold uppercase tracking-widest text-[13px] text-slate-600 hover:text-slate-950 flex items-center gap-1">
                  {link.name} {link.hasDropdown && <svg className="w-3 h-3" viewBox="0 0 24 24" stroke="currentColor" fill="none"><path strokeWidth="2.5" d="M19 9l-7 7-7-7"/></svg>}
                </Link>

                {/* Services Mega Menu */}
                {link.name === 'Services' && isServicesOpen && (
                  <motion.div 
                    onMouseEnter={() => handleMouseEnter('Services')}
                    onMouseLeave={() => handleMouseLeave('Services')}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
                    className="fixed left-0 top-24 w-screen bg-white border-t border-slate-100 shadow-2xl flex z-[999]"
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
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
                    className="absolute left-0 top-full w-[300px] bg-white border border-slate-100 shadow-2xl p-6 rounded-3xl z-[999]"
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {solutionsData.map(item => (
                        <Link key={item.name} to={item.path} className="text-[13px] font-semibold text-slate-600 hover:text-[#ee3444] p-3 bg-slate-50 rounded-xl hover:bg-slate-100">
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
          <button className="hidden lg:block font-black uppercase text-[11px] border-2 border-slate-950 rounded-full px-6 py-2 hover:bg-slate-950 hover:text-white transition-all">Get A Consultation</button>

          {/* HAMBURGER BUTTON */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800 focus:outline-none p-2"
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
            className="fixed right-0 top-24 w-full sm:w-[350px] h-[calc(100vh-6rem)] bg-white border-l border-slate-100 shadow-2xl p-6 overflow-y-auto lg:hidden z-[998]"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-slate-50 pb-3">
                  {!link.hasDropdown ? (
                    <Link to={link.path} className="font-bold uppercase tracking-wider text-[14px] text-slate-700 hover:text-slate-950 block py-1">
                      {link.name}
                    </Link>
                  ) : (
                    <div>
                      <button 
                        onClick={() => link.name === 'Services' ? setMobileServicesOpen(!mobileServicesOpen) : setMobileSolutionsOpen(!mobileSolutionsOpen)}
                        className="w-full flex justify-between items-center font-bold uppercase tracking-wider text-[14px] text-slate-700 hover:text-slate-950 py-1"
                      >
                        {link.name}
                        <svg className={`w-4 h-4 transform transition-transform ${((link.name === 'Services' && mobileServicesOpen) || (link.name === 'Solutions' && mobileSolutionsOpen)) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                      </button>

                      {/* Mobile Services Items */}
                      {link.name === 'Services' && mobileServicesOpen && (
                        <div className="pl-4 mt-3 space-y-4 bg-slate-50 p-4 rounded-xl">
                          {Object.values(servicesData).map(s => (
                            <div key={s.title}>
                              <h5 style={headingGradientStyle} className="text-[11px] font-black tracking-wider mb-2">{s.title}</h5>
                              <div className="space-y-2 pl-2">
                                {s.items.map(i => (
                                  <Link key={i} to={`/services/${i.toLowerCase().replace(/\s+/g, '-')}`} className="block text-[12px] font-medium text-slate-600 hover:text-slate-950">• {i}</Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Mobile Solutions Items */}
                      {link.name === 'Solutions' && mobileSolutionsOpen && (
                        <div className="pl-2 mt-2 flex flex-col gap-1 bg-slate-50 p-3 rounded-xl">
                          {solutionsData.map(item => (
                            <Link key={item.name} to={item.path} className="text-[12px] font-semibold text-slate-600 hover:text-[#ee3444] p-2 hover:bg-slate-100 rounded-lg">{item.name}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <button className="mt-4 font-black uppercase text-[11px] border-2 border-slate-950 rounded-full px-6 py-3 bg-slate-950 text-white text-center">Get A Consultation</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
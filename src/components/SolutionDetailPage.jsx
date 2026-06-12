import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { solutionsData } from '../data/solutionsData';
import animationVideo from '../assets/animation.mp4';
import { ArrowRight } from 'lucide-react';

const SolutionDetailPage = () => {
  const { slug } = useParams();
  const solution = solutionsData.find((p) => p.slug === slug);
  const [isVideoReady, setIsVideoReady] = useState(false);
  
  const fallbackBackground = 'linear-gradient(135deg, #e1b054 0%, #ee3444 44%, #75b0d2 100%)';

  if (!solution) return <div className="text-center py-40 text-2xl font-bold text-slate-800">Solution Not Found</div>;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      {/* HERO SECTION - FULL HEIGHT & BOTTOM CURVED */}
      <section 
        className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pb-24" 
        style={{ 
          borderBottomLeftRadius: '50% 10%',
          borderBottomRightRadius: '50% 10%',
          isolation: 'isolate',
          background: fallbackBackground
        }}
      >
        {/* Full-Width Background Video Container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay z-10" />
          <video
            src={animationVideo}
            autoPlay loop muted playsInline preload="auto"
            onLoadedData={() => setIsVideoReady(true)}
            onCanPlay={() => setIsVideoReady(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Content Area */}
        <div className="text-center max-w-5xl relative z-10 text-white mt-12 px-4 flex flex-col items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-[80px] font-black uppercase tracking-tight mb-4 leading-none"
          >
            {solution.label}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-10 font-medium"
          >
            Our tailored solution is specifically engineered to streamline your core operations
            , eliminate inefficiencies, and drive sustainable long-term growth. By combining modern architecture with secure, data-driven strategies, 
            we empower your enterprise to stay agile and ready for future challenges.
          </motion.p>

          {/* Pill Button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full flex justify-center"
          >
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-950 rounded-full font-bold uppercase text-[13px] tracking-widest shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Let's Build Together <ArrowRight className="w-4 h-4 text-slate-950" />
              
            </Link>
          </motion.div>
        </div>
      </section>

      {/* "WHAT IS..." SECTION (FULL WIDTH & ANIMATED GREEN BLOB) */}
      <section className="w-full bg-white py-24 md:py-32 border-b border-slate-50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start gap-16 xl:gap-28">
          
          {/* Left Side: Morphing & Floating Green Shape */}
          <div className="w-full lg:w-[40%] flex justify-center items-center relative min-h-[320px] md:min-h-[420px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              animate={{
                y: [0, -20, 0],
                borderRadius: [
                  "42% 58% 70% 30% / 45% 45% 55% 55%",
                  "70% 30% 52% 48% / 60% 40% 60% 40%",
                  "50% 50% 30% 70% / 50% 60% 40% 50%",
                  "42% 58% 70% 30% / 45% 45% 55% 55%"
                ]
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                default: { duration: 0.8 }
              }}
              className="w-64 h-64 md:w-[380px] md:h-[380px] bg-[#00a99d] shadow-[0_20px_50px_rgba(0,169,157,0.3)] flex-shrink-0"
            />
          </div>

          {/* Right Side: Content Area */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[60%] flex flex-col items-start pt-2"
          >
            <h2 className="text-4xl sm:text-5xl md:text-[60px] font-black text-slate-950 tracking-tight leading-none mb-6 uppercase">
              What Is {solution.label}?
            </h2>

            <svg className="mb-8" width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 8C6.5 8 6.5 2 11 2C15.5 2 15.5 8 20 8C24.5 8 24.5 14 29 14C33.5 14 33.5 8 38 8C42.5 8 42.5 2 47 2C51.5 2 51.5 8 56 8C60.5 8 60.5 14 65 14C69.5 14 69.5 8 74 8C78.5 8 78.5 2 83 2" stroke="#e91e8c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <p className="text-xl sm:text-2xl text-slate-900 font-bold leading-snug mb-5">
              {solution.desc}
            </p>

            <p className="text-[16px] sm:text-[17px] text-slate-500 font-medium leading-relaxed mb-8 max-w-3xl">
              {solution.longDesc}
            </p>

            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 px-8 py-4 border-[3px] border-slate-950 text-slate-950 font-black uppercase text-[14px] tracking-wider rounded-xl hover:bg-slate-950 hover:text-white transition-all duration-300 transform active:scale-95"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* STATS & FEATURE SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* STATS BANNER */}
        {solution.stats && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 mb-20 shadow-sm"
          >
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Proven Outcome</span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">Impact Powered by Innovation</h3>
            </div>
            <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
              <span className="text-5xl sm:text-6xl font-black text-[#ee3444] tracking-tight leading-none mb-1">{solution.stats.metric}</span>
              <span className="text-sm font-bold text-slate-500 max-w-[200px] leading-tight">{solution.stats.label}</span>
            </div>
          </motion.div>
        )}

        {/* CORE FEATURES TITLE */}
        <div className="text-center mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-[#ee3444]">Core Architecture</span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-slate-900 tracking-tight mt-2">Engineered Key Modules</h2>
        </div>

        {/* FEATURES GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {solution.features.map((feat, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-100 group-hover:bg-[#e91e8c] transition-colors duration-300" />
              <h4 className="text-[19px] font-black uppercase text-slate-800 tracking-tight mb-3 group-hover:text-[#e91e8c] transition-colors duration-300">
                {feat.title}
              </h4>
              <p className="text-slate-500 text-[14px] leading-relaxed">
                {feat.detail}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default SolutionDetailPage;
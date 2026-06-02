import React from 'react';
import { motion } from 'framer-motion';

const FoundersNote = () => {
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-gray-50">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto max-w-5xl bg-gray-50/50 rounded-3xl border border-gray-100 p-8 sm:p-12 md:p-16 relative"
      >
        <div className="absolute top-6 left-6 text-6xl sm:text-8xl font-[1000] text-gray-200/60 font-serif pointer-events-none select-none">“</div>
        
        <div className="relative z-10 text-center flex flex-col items-center">
          <p className="text-xs font-black tracking-[0.3em] uppercase mb-6" style={{ backgroundImage: neonGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            FOUNDER'S STATEMENT
          </p>
          
          <blockquote className="text-lg sm:text-2xl md:text-3xl font-light text-gray-700 italic max-w-3xl leading-relaxed mb-8 text-center px-4">
            "We built Its Digital House to bridge the gap between high-end digital aesthetics and raw engineering power. Our goal is simple: to transform complex visions into scalable, future-proof global authorities."
          </blockquote>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "48px" }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="h-[2px] mb-4" 
            style={{ background: neonGradient }} 
          />
          <h4 className="text-sm font-black uppercase text-[#0a0a0a] tracking-widest">Ibtisham</h4>
          <p className="text-xs text-gray-400 font-medium mt-1 uppercase tracking-wider">Founder & Lead Engineer</p>
        </div>
      </motion.div>
    </section>
  );
};

export default FoundersNote;
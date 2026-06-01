import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center bg-white overflow-hidden">
      {/* Background Abstract Shapes */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-[#e1b054]/20 to-transparent rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gradient-to-tr from-[#7361a7]/20 to-transparent rounded-full blur-3xl z-0" />

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h2 className="text-[11px] font-black tracking-[0.4em] uppercase text-slate-400 mb-6">
          Driven by Innovation
        </h2>
        <h1 className="text-5xl md:text-7xl font-black uppercase text-slate-950 leading-[0.9]">
          Redefining <br/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1b054] via-[#ee3444] to-[#7361a7]">
            Digital Identity
          </span>
        </h1>
        <p className="mt-8 text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          We don't just build websites; we craft digital experiences that empower businesses to thrive in a competitive landscape.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
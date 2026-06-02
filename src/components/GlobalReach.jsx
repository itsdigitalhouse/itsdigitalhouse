import React from 'react';
import { motion } from 'framer-motion';

const GlobalReach = () => {
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs sm:text-sm font-black tracking-[0.3em] uppercase mb-4" style={{ backgroundImage: neonGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Cross-Border Footprint
            </p>
            <h2 className="text-3xl sm:text-5xl font-[1000] uppercase tracking-tighter text-[#0a0a0a] leading-[1.1] mb-8">
              Bridging Brands Across <br />
              <span className="italic font-light text-gray-400">UK & Middle East</span>
            </h2>
            <p className="text-gray-600 font-medium leading-relaxed mb-8 text-base">
              From the fast-paced corporate landscapes of the United Kingdom to the hyper-scaling digital economy of the Middle East, Its Digital House engineers solutions that transcend geographical boundaries. We understand region-specific user psychology and compliance frameworks seamlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border-l-4 pl-4" style={{ borderColor: '#75b0d2' }}>
                <h4 className="text-sm font-black tracking-widest text-[#0a0a0a] uppercase mb-2">UK Ecosystem</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Crafting high-converting UX layouts, compliance-ready enterprise architectures, and premium brand positionings tailored for the British consumer base.</p>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: '#7361a7' }}>
                <h4 className="text-sm font-black tracking-widest text-[#0a0a0a] uppercase mb-2">Middle East Expansion</h4>
                <p className="text-xs text-gray-500 font-medium leading-relaxed">Architecting multi-lingual enterprise software layouts and hyper-scale growth modules to catalyze regional digital transformation initiatives.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 70 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.06)] group border border-gray-100"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e1b054]/10 via-[#ee3444]/5 to-transparent z-10 transition-opacity duration-500 opacity-60 group-hover:opacity-100" />
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Global" className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  const values = [
    { title: "Customized Strategies", desc: "No generic templates. Every blueprint is architected to align with your absolute scaling requirements." },
    { title: "Transparent Synergy", desc: "Complete delivery pipelines engineered with radical visibility and time-zone aligned interaction models." },
    { title: "Long-Term Alignment", desc: "We focus on building sustainable market authorities that continuously compound your digital presence value." },
    { title: "Premium Global Quality", desc: "Elite enterprise-grade architectural engineering delivered with sleek global layout standards." }
  ];

  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1"
          >
            <p className="text-xs sm:text-sm font-black tracking-[0.3em] uppercase mb-4" style={{ backgroundImage: neonGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-5xl font-[1000] uppercase tracking-tighter text-[#0a0a0a] leading-[1.1] mb-6">Why Global Giants Trust Us</h2>
            <p className="text-gray-600 font-medium leading-relaxed text-sm sm:text-base">We stand apart by completely refusing compromised code. Our execution paradigm merges high-fidelity aesthetics with complex architectural layers seamlessly.</p>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {values.map((val, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                className="p-6 bg-gray-50/30 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white mb-4" style={{ background: neonGradient }}>
                  {idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#0a0a0a] uppercase tracking-tight mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import React from 'react';
import { motion } from 'framer-motion';

const SEOEngine = () => {
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  const features = [
    { title: "Advanced Technical SEO", desc: "Deep schema deployment, systemic crawl budget optimization, and elite core web vitals performance matrices.", accent: "#ee3444" },
    { title: "Algorithmic Authority", desc: "Engineered search relevance vectors and programmatic link-building strategies that outlast core algorithm shift patterns.", accent: "#75b0d2" },
    { title: "ROI-Driven Visibility", desc: "Eliminating vanity tracking loops. Focused purely on driving commercial-intent organic traffic that converts directly into scale metrics.", accent: "#f1574d" }
  ];

  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.07)] border border-gray-100 h-[400px] md:h-[500px]"
            >
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" alt="SEO" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 md:right-6 bg-white border border-gray-100 p-6 rounded-2xl shadow-xl z-20 hidden sm:block max-w-[220px]"
            >
              <span className="text-xs font-mono font-black text-gray-400 tracking-widest uppercase block mb-1">// Visibility Index</span>
              <span className="text-3xl font-black tracking-tight" style={{ color: '#ee3444' }}>+314%</span>
              <p className="text-[11px] text-gray-500 font-medium mt-1 leading-tight">Organic enterprise domain capture rate scale velocity.</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex flex-col justify-center"
          >
            <p className="text-sm font-bold tracking-[0.2em] uppercase mb-4" style={{ backgroundImage: neonGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Performance Engineering
            </p>
            
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-[#0a0a0a] leading-[1.05] mb-8">
              Next-Level SEO: <br />
              <span className="italic font-light text-gray-400">Built For Dominance</span>
            </h2>
            
            <p className="text-slate-500 font-medium leading-relaxed mb-8 text-base sm:text-lg">
              We do not track vanity trends; we engineer total search engine authority. Our algorithmic framework shifts search paradigms, placing your enterprise layout directly in front of premier global corporate leads.
            </p>

            <div className="space-y-6">
              {features.map((feat, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-2.5 h-2.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: feat.accent }} />
                  <div>
                    <h3 className="text-base font-black text-[#0a0a0a] uppercase tracking-tight mb-1">{feat.title}</h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed">{feat.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SEOEngine;
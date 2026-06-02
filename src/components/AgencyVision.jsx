import React from 'react';
import { motion } from 'framer-motion';

const AgencyVision = () => {
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  const pillars = [
    { title: "OUR MISSION", desc: "To build meaningful digital experiences that elevate businesses and connect brands with their audience through modern digital solutions that enhance visibility, strengthen branding, and accelerate growth in international markets.", borderColor: "#e1b054" },
    { title: "OUR VISION", desc: "To become a leading digital agency recognized for creativity, innovation, and impactful solutions that help businesses thrive online and dominate their digital spaces globally.", borderColor: "#d24a8a" },
    { title: "OUR APPROACH", desc: "We understand the brand, strategize & plan, create & execute, and constantly optimize & improve. A strict focus on high-fidelity quality, absolute creativity, and long-term success is in our DNA.", borderColor: "#ee3444" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative w-full bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-5xl font-[1000] uppercase tracking-tighter inline-block text-center"
              style={{ backgroundImage: neonGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            FOUNDATIONAL PILLARS
          </h2>
          <div className="h-[1px] w-32 bg-gray-200 mx-auto mt-4" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.01, boxShadow: "0px 30px 60px rgba(0,0,0,0.05)" }}
              className="bg-gray-50/50 rounded-2xl p-8 lg:p-10 border border-gray-100 flex flex-col justify-between transition-all duration-300"
              style={{ borderTop: `5px solid ${pillar.borderColor}` }}
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-black text-[#0a0a0a] uppercase tracking-tight mb-6">{pillar.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed text-sm lg:text-base">{pillar.desc}</p>
              </div>
              <div className="mt-8 text-right font-mono text-xs font-black text-gray-300 tracking-widest">// 0{idx + 1}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyVision;
import React from 'react';
import { motion } from 'framer-motion';

const CorePillars = () => {
  const pillars = [
    { id: "01", title: "RELENTLESS INNOVATION", desc: "We don't just build technology; we reinvent it. Our approach is to view every project through a fresh lens, creating digital solutions that lead the future." },
    { id: "02", title: "UNCOMPROMISING QUALITY", desc: "Quality is our identity. Every line of code undergoes rigorous refinement. We refuse to compromise on the details that define your brand’s credibility." },
    { id: "03", title: "PASSION FOR PERFECTION", desc: "Obsession with detail is in our DNA. We believe in pixel-perfect execution because we understand that the smallest nuance distinguishes the extraordinary." },
    { id: "04", title: "COMMITMENT TO DEADLINE", desc: "Time is the most valuable currency. We realize that your project is vital to your growth, which is why we commit to delivering every milestone on schedule." }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-24 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-tight">
            The Core Pillars <br /> 
            <span className="text-zinc-500">That drive Perfection</span>
          </h2>
        </motion.div>

        {/* Animated Responsive Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16"
        >
          {pillars.map((pillar) => (
            <motion.div 
              key={pillar.id}
              variants={itemVariants}
              className="flex flex-col border-t border-zinc-800 pt-8 hover:border-zinc-500 transition-colors duration-500"
            >
              <span className="text-xs font-mono text-zinc-600 mb-6">{pillar.id}</span>
              <h3 className="text-lg font-semibold uppercase tracking-wide mb-6">
                {pillar.title}
              </h3>
              <p className="text-zinc-400 font-light leading-relaxed text-sm">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};

export default CorePillars;
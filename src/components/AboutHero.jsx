import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] bg-white text-[#0a0a0a] flex flex-col justify-center items-center overflow-hidden pt-28 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(117,176,210,0.04)_0%,transparent_70%)]" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto text-center max-w-5xl relative z-10"
      >
        <motion.p 
          variants={itemVariants}
          className="text-xs sm:text-sm font-black tracking-[0.25em] uppercase mb-6"
          style={{ backgroundImage: neonGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
        >
          Intellectual Digital Architecture
        </motion.p>

        <motion.h1 
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[1000] uppercase tracking-tighter leading-[0.95] sm:leading-[0.9] mb-8 text-[#0a0a0a]"
        >
          We Build, Grow, <br className="hidden sm:block" />
          <span className="italic font-light text-gray-400">And Transform</span> <br />
          Online Identities.
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
        >
          Its Digital House is a full-service creative digital agency dedicated to empowering ambitious brands. We seamlessly bridge the gap between high-end digital aesthetics, advanced technology, and performance growth ecosystems.
        </motion.p>

        <motion.div variants={itemVariants} className="w-full flex justify-center">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "96px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="h-[2px] rounded-full" 
            style={{ background: neonGradient }} 
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;
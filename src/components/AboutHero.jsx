import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  // Vibrant pink gradient for the section background
  const bgGradient = "linear-gradient(135deg, #FF6B6B 0%, #FF0080 50%, #FF00CC 100%)";
  
  // Sequence of your 6 colors for the button
  const gradientColors = "#e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d";

  return (
    <section 
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pb-20" 
      style={{ 
        background: bgGradient,
        borderBottomLeftRadius: '50% 10%',
        borderBottomRightRadius: '50% 10%'
      }}
    >
      {/* Content Container */}
      <div className="text-center max-w-4xl relative z-10 text-white">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-8xl font-black uppercase tracking-tighter mb-8"
        >
          About us
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          We are one of the UK’s first full-service digital agencies. Powered by passion for nearly two decades, we redefine digital and put businesses on the path to success.
        </motion.p>
        
        {/* Updated Button with Bottom-to-Top Slide Fill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center w-full relative z-30"
        >
          <button 
            onClick={() => console.log('Action Triggered')}
            className="group relative px-10 py-5 bg-white text-slate-950 rounded-full font-black uppercase text-xs tracking-[0.2em] overflow-hidden shadow-lg hover:shadow-xl active:scale-95 transition-transform duration-200 cursor-pointer outline-none"
          >
            {/* Bottom-to-Top Slide Fill Layer */}
            <span 
              className="absolute bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0"
              style={{
                backgroundImage: `linear-gradient(to right, ${gradientColors})`
              }}
            ></span>
            
            {/* Button Content */}
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              <span>Let's Build Together</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-20 right-20 w-64 h-64 border-2 border-white/10 rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-20 w-40 h-40 border-2 border-white/10 rounded-full pointer-events-none" />
    </section>
  );
};

export default AboutHero;
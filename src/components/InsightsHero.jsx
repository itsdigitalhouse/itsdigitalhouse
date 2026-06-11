import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Video import path apne assets folder ke mutabiq check kar lena bhae
import animationVideo from '../assets/animation.mp4'; 

const InsightsHero = () => {
  const [isVideoReady, setIsVideoReady] = useState(false);
  // Sequence of your 6 colors for the button
  const gradientColors = "#e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d";
  const fallbackBackground = 'linear-gradient(135deg, #e1b054 0%, #ee3444 44%, #75b0d2 100%)';

  return (
    <section 
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pb-20" 
      style={{ 
        borderBottomLeftRadius: '50% 10%',
        borderBottomRightRadius: '50% 10%',
        // Ensures the absolute video perfectly clips to the curved border
        isolation: 'isolate',
        background: fallbackBackground
      }}
    >
      
      {/* ── VIDEO BACKGROUND LAYER (With Scale Fix & Bottom Curve) ── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: fallbackBackground }} />
        <video
          src={animationVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setIsVideoReady(true)}
          onCanPlay={() => setIsVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover scale-[1.15] transition-opacity duration-700 ${
            isVideoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Dark overlay so the white text stands out beautifully */}
        <div className="absolute inset-0" />
      </div>

      {/* Content Container */}
      <div className="text-center max-w-4xl relative z-10 text-white mt-12">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-8xl font-black uppercase tracking-tighter mb-8 drop-shadow-md"
        >
          Insights
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-12 drop-shadow-sm"
        >
          Explore our latest thoughts, deep dives, and agency updates. We share industry trends and core digital strategies to power your business growth.
        </motion.p>
        
        {/* Button with Bottom-to-Top Slide Fill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center w-full relative z-30"
        >
          <button 
            onClick={() => console.log('Insights Triggered')}
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
              <span>View All Articles</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Decorative Circles */}
      {/* <div className="absolute top-20 right-20 w-64 h-64 border-2 border-white/10 rounded-full pointer-events-none z-10" />
      <div className="absolute bottom-40 left-20 w-40 h-40 border-2 border-white/10 rounded-full pointer-events-none z-10" /> */}
    </section>
  );
};

export default InsightsHero;

import React from 'react'
import { motion } from 'framer-motion'
import digitalVideo from '../assets/digital-house-vedio.mp4'

const AboutSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-screen overflow-hidden flex items-center py-12 lg:py-0 bg-white">
      
      {/* --- ANIMATED SHAPES (Back to Original Specs) --- */}
      
      {/* Blue Shape - Wapis original blur aur size par */}
      <div className="absolute bottom-[10%] left-[-2%] w-[100px] h-[100px] lg:w-[130px] lg:h-[130px] bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 hidden lg:block animate-pulse-fast"></div>
      
      {/* Blue Accent - Wapis original curve par */}
      <div className="absolute bottom-0 left-[-1%] w-20 h-32 bg-blue-700 rounded-full opacity-90 hidden lg:block animate-pulse-slow"></div>

      {/* Yellow Shape - Wapis apni original width aur shape par */}
      <div className="absolute top-0 right-0 h-full w-[35%] lg:w-[300px] bg-[#FFD700] rounded-l-[80px] lg:rounded-l-full opacity-100 z-0 animate-float-yellow origin-right"></div>

      {/* WRAPPER: Responsive spacing with max-width limit */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* LEFT: Video Area (Original Sizing) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-start z-10"
          >
            <div className="relative w-full max-w-[400px] md:max-w-[450px] aspect-square flex items-center justify-center overflow-hidden">
              <video 
                src={digitalVideo} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-4 w-[60%] h-3 bg-black/5 blur-xl rounded-full"></div>
            </div>
          </motion.div>

          {/* RIGHT: Content (The 6-Color Premium Heading) */}
          <div className="w-full lg:w-1/2 flex flex-col space-y-6 text-left z-20">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-unbounded text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-[800] leading-[1.1] tracking-tighter uppercase flex flex-wrap items-center"
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#f1574d] to-[#7361a7] pr-2 mr-1">
                ITS
              </span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#7361a7] via-[#75b0d2] to-[#ee3444] pr-2 mr-1">
                DIGITAL
              </span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#ee3444] via-[#d24a8a] to-[#e1b054] pr-2">
                HOUSE
              </span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-lg"
            >
              <p className="font-spartan text-slate-900 text-[12px] md:text-sm lg:text-[14px] font-bold uppercase tracking-[0.12em] leading-relaxed">
                ITS DIGITAL HOUSE IS A CREATIVE AGENCY FOCUSED ON BUILDING STRONG 
                DIGITAL FOUNDATIONS FOR MODERN BRANDS. WE COMBINE THOUGHTFUL 
                DESIGN, RELIABLE DEVELOPMENT, AND PRACTICAL STRATEGY TO CREATE 
                DIGITAL EXPERIENCES THAT ACTUALLY WORK.
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false }}
               transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button className="px-8 py-3 border-2 border-black text-black font-bold uppercase tracking-widest text-[11px] hover:bg-black hover:text-white transition-all duration-300">
                Company Profile
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float-yellow {
          0%, 100% { transform: translateX(0) scaleX(1); }
          50% { transform: translateX(-10px) scaleX(1.01); }
        }
        @keyframes pulse-fast {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.1); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.9; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-float-yellow {
          animation: float-yellow 6s ease-in-out infinite;
        }
        .animate-pulse-fast {
          animation: pulse-fast 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default AboutSection
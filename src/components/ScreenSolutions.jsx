import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// Assets Imports
import laptopFrame from '../assets/laptop-frame.png'; 
import laptopScreen from '../assets/laptop-screen.jpg'; 
import tabletFrame from '../assets/tablet-frame.png';
import tabletScreen from '../assets/tablet-screen.jpg';
import mobileFrame from '../assets/mobile-frame1.png'; 
import mobileScreen from '../assets/mobile-screen.jpg'; 

const ScreenSolutions = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 20 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]); 
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]); 

  const translateMobile = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const translateTablet = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPos = (event.clientX - rect.left) / rect.width - 0.5;
    const yPos = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-white overflow-hidden font-sans cursor-default py-16 lg:py-0"
      style={{ perspective: "1500px" }}
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        <div className="w-full px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center gap-12 relative">
          
          {/* UPDATED WIDTH: lg:w-[50%] for more space */}
          <div 
            className="w-full lg:w-[50%] text-center lg:text-left z-[100]"
            style={{ transform: "translateZ(50px)" }}
          >
            {/* Heading text wrapping adjusted */}
            <h2 className="text-3xl sm:text-5xl lg:text-[64px] font-black text-slate-950 tracking-tighter uppercase leading-[0.9]">
              <span className="block">SEAMLESS</span>
              <span 
                className="block py-1 whitespace-nowrap" 
                style={{ 
                  background: 'linear-gradient(to right, #11b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                DIGITAL SOLUTIONS
              </span>
              <span className="block -mt-1 lg:-mt-2 whitespace-nowrap">
                ACROSS EVERY SCREEN
              </span>
            </h2>

            {/* Increased max-w for paragraph */}
            <p className="text-gray-500 text-base sm:text-lg font-medium max-w-lg mx-auto lg:mx-0 mt-6 mb-8 leading-relaxed">
              Its Digital House is a full-service creative digital agency dedicated to helping businesses build, grow, and transform their online identity.
            </p>

            <button className="group relative px-8 py-4 bg-slate-950 text-white rounded-full font-black uppercase text-xs tracking-[0.2em] overflow-hidden shadow-lg hover:shadow-xl active:scale-95 transition-transform duration-200 cursor-pointer outline-none">
              <span 
                className="absolute bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0"
                style={{ backgroundImage: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444)' }}
              ></span>
              <span className="relative z-10 flex items-center gap-2">
                <span>GET STARTED TODAY</span>
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </span>
            </button>
          </div>

          {/* RIGHT SIDE: 3D DEVICES (Sizes further optimized) */}
          <div 
            className="relative w-full lg:w-[50%] h-[400px] md:h-[600px] lg:h-[700px] flex items-center justify-center lg:justify-end"
            style={{ transformStyle: "preserve-3d" }}
          >
            
            <motion.div 
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 3.0, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{ transform: "translateZ(0px)" }}
              className="absolute z-10 w-[300px] md:w-[600px] lg:w-[750px] left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[-5%] pointer-events-none"
            >
              <div className="relative">
                <div className="absolute top-[10%] left-[14%] w-[72%] h-[78%] z-[25] overflow-hidden">
                  <img src={laptopScreen} alt="Screen" className="w-full h-full object-cover scale-90" />
                </div>
                <img src={laptopFrame} alt="Frame" className="w-full h-auto relative z-20" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{ transform: "translateZ(80px)", x: translateTablet }}
              className="absolute z-30 w-[150px] md:w-[350px] left-[45%] -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[30%] bottom-[5%] drop-shadow-2xl"
            >
              <div className="relative">
                <div className="absolute top-[8%] left-[8%] w-[84%] h-[87%] z-[35] overflow-hidden">
                  <img src={tabletScreen} alt="Screen" className="w-full h-full object-cover scale-80" />
                </div>
                <img src={tabletFrame} alt="Frame" className="w-full h-auto relative z-30" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{ transform: "translateZ(150px)", x: translateMobile }}
              className="absolute z-40 w-[80px] md:w-[200px] left-[25%] -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[60%] bottom-[5%] drop-shadow-2xl"
            >
              <div className="relative">
                <div className="absolute top-[4.5%] left-[8%] w-[84%] h-[88%] z-[45] overflow-hidden rounded-[1rem] lg:rounded-[2.8rem]">
                  <img src={mobileScreen} alt="Screen" className="w-full h-full object-cover scale-[0.765]" />
                </div>
                <img src={mobileFrame} alt="Frame" className="w-full h-auto relative z-40" />
              </div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default ScreenSolutions;
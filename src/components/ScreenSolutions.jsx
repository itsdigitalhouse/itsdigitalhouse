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

  // Mouse tilt values
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]); 
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]); 

  // Parallax movement for depth
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
      className="relative w-full bg-white py-12 lg:py-24 overflow-hidden font-sans cursor-default"
      style={{ perspective: "1500px" }} // Increased perspective for deeper 3D
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full"
      >
        <div className="w-full px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12 relative">
          
          {/* LEFT SIDE: CONTENT */}
          <div 
            className="w-full lg:w-[40%] text-center lg:text-left z-[100]"
            style={{ transform: "translateZ(50px)" }} // Content floats slightly forward
          >
            <h2 className="font-[1000] text-black tracking-tighter uppercase italic leading-[0.8]">
              <span className="block text-3xl lg:text-[38px]">SEAMLESS</span>
              <span 
                className="block text-3xl lg:text-[38px] -mt-1 lg:-mt-2 py-1" 
                style={{ 
                  background: 'linear-gradient(to right, #11b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block',
                }}
              >
                DIGITAL SOLUTIONS
              </span>
              <span className="block text-3xl lg:text-[38px] text-gray-900 -mt-1 lg:-mt-2">
                ACROSS EVERY SCREEN
              </span>
            </h2>

            <p className="text-gray-500 text-[13px] lg:text-sm font-medium max-w-xs mx-auto lg:mx-0 mt-6 mb-8 leading-relaxed">
              Its Digital House is a full-service creative digital agency dedicated to helping businesses build, grow, and transform their online identity.
            </p>

            <button className="px-16 py-3 border-2 border-black text-black font-normal uppercase tracking-widest text-[12px] hover:bg-black hover:text-white transition-all duration-300 shadow-xl">
              GET STARTED TODAY
            </button>
          </div>

          {/* RIGHT SIDE: 3D DEVICES */}
          <div 
            className="relative w-full lg:w-[60%] h-[400px] md:h-[600px] lg:h-[700px] flex items-center justify-center lg:justify-end"
            style={{ transformStyle: "preserve-3d" }}
          >
            
            {/* 3. LAPTOP (Furthest back) */}
            <motion.div 
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 3.0, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{ transform: "translateZ(0px)" }}
              className="absolute z-10 w-[450px] md:w-[850px] lg:w-[1050px] left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[-22%] pointer-events-none"
            >
              <div className="relative">
                <div className="absolute top-[10%] left-[14%] w-[72%] h-[78%] z-[25] overflow-hidden">
                  <img src={laptopScreen} alt="Screen" className="w-full h-full object-cover scale-90" />
                </div>
                <img src={laptopFrame} alt="Frame" className="w-full h-auto relative z-20" />
              </div>
            </motion.div>

            {/* 2. TABLET (Middle layer) */}
            <motion.div 
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{ transform: "translateZ(80px)", x: translateTablet }}
              className="absolute z-30 w-[220px] md:w-[480px] left-[45%] -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[42%] bottom-[5%] drop-shadow-2xl"
            >
              <div className="relative">
                <div className="absolute top-[8%] left-[8%] w-[84%] h-[87%] z-[35] overflow-hidden">
                  <img src={tabletScreen} alt="Screen" className="w-full h-full object-cover scale-80" />
                </div>
                <img src={tabletFrame} alt="Frame" className="w-full h-auto relative z-30" />
              </div>
            </motion.div>

            {/* 1. MOBILE (Closest to user) */}
            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{ transform: "translateZ(150px)", x: translateMobile }}
              className="absolute z-40 w-[120px] md:w-[280px] left-[25%] -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[78%] bottom-[5%] drop-shadow-2xl"
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
import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

// Assets Imports
import laptopFrame  from '../assets/laptop-frame.png';
import laptopScreen from '../assets/laptop-screen.jpg';
import tabletFrame  from '../assets/tablet-frame.png';
import tabletScreen from '../assets/tablet-screen.jpg';
import mobileFrame  from '../assets/mobile-frame1.png';
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
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top)  / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full bg-[white] overflow-hidden font-sans cursor-default
                 py-14 sm:py-16 md:py-20 lg:py-0 lg:min-h-screen lg:flex lg:items-center"
      style={{ perspective: '1500px' }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="w-full h-full"
      >
        {/* ── Main flex row ── */}
        <div className="w-full px-5 sm:px-8 md:px-10 lg:px-10 xl:px-16
                        flex flex-col-reverse lg:flex-row
                        items-center
                        gap-8 sm:gap-10 md:gap-12 lg:gap-6 xl:gap-10
                        relative">

          {/* ── LEFT: Text ── */}
          <div
            className="w-full lg:w-[48%] xl:w-[50%]
                       text-center lg:text-left z-[100]"
            style={{ transform: 'translateZ(50px)' }}
          >
            {/* Heading */}
            <h2 className="font-black text-slate-950 tracking-tighter uppercase leading-[0.9]
                           text-[9vw] sm:text-[7vw] md:text-[6vw] lg:text-[4.5vw] xl:text-[4vw] 2xl:text-[3.6vw]">
              <span className="block">SEAMLESS</span>
              <span
                className="block py-1"
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
              <span className="block -mt-1 lg:-mt-2">
                ACROSS EVERY SCREEN
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-500 font-medium leading-relaxed
                          text-[3.5vw] sm:text-base md:text-base lg:text-base xl:text-lg
                          max-w-[90%] sm:max-w-lg mx-auto lg:mx-0
                          mt-4 sm:mt-5 md:mt-6 mb-6 sm:mb-7 md:mb-8">
              Its Digital House is a full-service creative digital agency dedicated to
              helping businesses build, grow, and transform their online identity.
            </p>

            {/* CTA */}
            <button>
              <a href="/contact" 
             className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4
             bg-slate-950 text-white rounded-full
             font-black uppercase tracking-[0.2em]
             text-[10px] sm:text-xs
             overflow-hidden shadow-lg hover:shadow-xl
             active:scale-95 transition-transform duration-200
             cursor-pointer outline-none text-center decoration-none"
>
  <span
    className="absolute bottom-0 left-0 w-full h-full translate-y-full
               group-hover:translate-y-0 transition-transform duration-500
               ease-[cubic-bezier(0.25,1,0.5,1)] z-0"
    style={{ backgroundImage: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444)' }}
  />
  <span className="relative z-10 flex items-center gap-2">
    <span>GET STARTED TODAY</span>
    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
  </span>
</a>
            </button>
          </div>

          {/* ── RIGHT: Devices ── */}
          <div
            className="relative w-full lg:w-[52%] xl:w-[50%]
                       flex items-center justify-center lg:justify-end
                       h-[280px] sm:h-[380px] md:h-[480px] lg:h-[600px] xl:h-[680px] 2xl:h-[720px]"
            style={{ transformStyle: 'preserve-3d' }}
          >

            {/* Laptop */}
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 3.0, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{ transform: 'translateZ(0px)' }}
              className="absolute z-10 pointer-events-none
                         w-[420px] sm:w-[420px] md:w-[560px] lg:w-[680px] xl:w-[750px] 2xl:w-[820px]
                         left-1/2 -translate-x-1/2
                         lg:left-auto lg:translate-x-0 lg:right-[-4%] xl:right-[-15%]"
            >
              <div className="relative">
                <div className="absolute top-[10%] left-[14%] w-[72%] h-[78%] z-[25] overflow-hidden">
                  <img src={laptopScreen} alt="Laptop Screen" className="w-full h-full object-cover scale-90" />
                </div>
                <img src={laptopFrame} alt="Laptop Frame" className="w-full h-auto relative z-20" />
              </div>
            </motion.div>

            {/* Tablet */}
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{ transform: 'translateZ(80px)', x: translateTablet }}
              className="absolute z-30 drop-shadow-2xl
                         w-[180px] sm:w-[220px] md:w-[290px] lg:w-[340px] xl:w-[380px] 2xl:w-[420px]
                         left-[42%] -translate-x-1/2 bottom-[4%]
                         lg:left-auto lg:translate-x-0 lg:right-[28%] lg:bottom-[5%]"
            >
              <div className="relative">
                <div className="absolute top-[8%] left-[8%] w-[84%] h-[87%] z-[35] overflow-hidden">
                  <img src={tabletScreen} alt="Tablet Screen" className="w-full h-full object-cover" style={{ transform: 'scale(0.8)' }} />
                </div>
                <img src={tabletFrame} alt="Tablet Frame" className="w-full h-auto relative z-30" />
              </div>
            </motion.div>

            {/* Mobile */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              style={{ transform: 'translateZ(150px)', x: translateMobile }}
              className="absolute z-40 drop-shadow-2xl
                         w-[100px] sm:w-[110px] md:w-[150px] lg:w-[185px] xl:w-[210px] 2xl:w-[230px]
                         left-[20%] -translate-x-1/2 bottom-[4%]
                         lg:left-auto lg:translate-x-0 lg:right-[57%] lg:bottom-[5%]"
            >
              <div className="relative">
                <div className="absolute top-[4.5%] left-[8%] w-[84%] h-[88%] z-[45] overflow-hidden
                                rounded-[0.5rem] sm:rounded-[1rem] md:rounded-[1.8rem] lg:rounded-[2.5rem] xl:rounded-[2.8rem]">
                  <img src={mobileScreen} alt="Mobile Screen" className="w-full h-full object-cover" style={{ transform: 'scale(0.765)' }} />
                </div>
                <img src={mobileFrame} alt="Mobile Frame" className="w-full h-auto relative z-40" />
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ScreenSolutions;

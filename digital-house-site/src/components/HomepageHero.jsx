import React from 'react';
import { motion } from 'framer-motion';
import balloonImage from '../assets/balloon.png';

const HomepageHero = () => {
  const handleScroll = () => {
    const element = document.getElementById('next-section');
    if (!element) return;

    const start = window.scrollY;
    const target = element.getBoundingClientRect().top + window.scrollY;
    const duration = 1500;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutCubic(timeElapsed, start, target - start, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
  };

  return (
    <section className="relative w-full h-[100svh] bg-[#FAFAFA] text-[#1A1A1A] overflow-hidden">

      {/* Background Typo - pt-5 se pt-10 kiya, thora neeche */}
      <div className="absolute inset-0 flex items-start justify-center pt-18 md:pt-5 pointer-events-none">
        <div className="text-[28vw] sm:text-[26vw] lg:text-[30vw] font-black uppercase text-[#F0F0F0] leading-none select-none tracking-tighter">
  DIGITAL
</div>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden relative z-10 w-full h-full flex flex-col items-center pt-24 xs:pt-28 px-5 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.img
            src={balloonImage}
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[75vw] xs:w-[70vw] sm:w-[65vw] max-w-[320px]"
          />
        </motion.div>

        {/* Heading + Paragraph */}
        <div className="mt-auto flex flex-col gap-2 w-full pb-14">
          <h1 className="font-black uppercase tracking-tighter leading-[0.9]
            text-[11vw] xs:text-[10.5vw] sm:text-[9vw]">
            Where Ideas <br /> Made Digital.
          </h1>
          <p className="font-medium leading-relaxed opacity-70
            text-[11px] xs:text-[12px] sm:text-[13px] max-w-[300px]">
            BUILDING POWERFUL DIGITAL EXPERIENCES THAT DRIVE GROWTH THROUGH DESIGN, DEVELOPMENT & STRATEGY.
          </p>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:flex relative z-10 w-full h-full flex-col justify-between px-10 lg:px-12 py-12">

        {/* Balloon */}
        <div className="absolute bottom-[15%] left-0 w-full flex justify-center z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={balloonImage}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-[45vw] min-w-[350px] max-w-[500px]"
            />
          </motion.div>
        </div>

        {/* Bottom text */}
        <div className="mt-auto grid grid-cols-2 items-end z-30 pb-20">
          <h1 className="font-black uppercase tracking-tighter leading-[0.9] text-[6vw] lg:text-[4vw]">
            Where Ideas <br /> Made Digital.
          </h1>
          <div className="flex justify-end">
            <p className="text-[15px] max-w-[450px] font-medium leading-relaxed opacity-70 text-right mb-10">
              BUILDING POWERFUL DIGITAL EXPERIENCES THAT DRIVE GROWTH THROUGH DESIGN, DEVELOPMENT & STRATEGY.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute left-0 w-full flex justify-center z-50 bottom-5 md:bottom-10">
        <button onClick={handleScroll} className="focus:outline-none cursor-pointer border-none bg-transparent" aria-label="Scroll to next section">
          <motion.div
            className="border-2 border-[#1A1A1A] rounded-full flex justify-center bg-white
              w-[30px] h-[56px] p-[6px]
              sm:w-[34px] sm:h-[62px] sm:p-[7px]
              md:w-[40px] md:h-[75px] md:p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, 22, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="bg-[#1A1A1A] rounded-full
                w-[9px] h-[9px]
                sm:w-[10px] sm:h-[10px]
                md:w-[12px] md:h-[12px]"
            />
          </motion.div>
        </button>
      </div>
    </section>
  );
};

export default HomepageHero;

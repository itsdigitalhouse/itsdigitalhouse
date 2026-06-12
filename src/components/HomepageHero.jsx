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
    <section className="relative w-full h-screen bg-[#FAFAFA] text-[#1A1A1A] overflow-hidden">

      {/* Background Typo - Shifted Upward */}
      <div className="absolute inset-0 flex items-start justify-center pt-5 pointer-events-none">
        <h1 className="text-[28vw] sm:text-[26vw] lg:text-[30vw] font-black uppercase text-[#F0F0F0] leading-none select-none tracking-tighter">
          DIGITAL
        </h1>
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="md:hidden relative z-10 w-full h-full flex flex-col items-center pt-20 px-5 pb-20">
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
            className="w-[62vw] max-w-[260px]"
          />
        </motion.div>

        {/* Heading + Paragraph — Floated Upward */}
        <div className="mt-auto flex flex-col gap-3 w-full pb-16">
          <h2 className="font-black uppercase tracking-tighter leading-[0.9] text-[11vw] sm:text-[9vw]">
            Where Ideas <br /> Made Digital.
          </h2>
          <p className="font-medium leading-relaxed opacity-70 text-[13px] max-w-[300px]">
            Building powerful digital experiences that drive growth through design, development & strategy.
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

        {/* Bottom text — Floated Upward */}
        <div className="mt-auto grid grid-cols-2 items-end z-30 pb-20">
          <h2 className="font-black uppercase tracking-tighter leading-[0.9] text-[6vw] lg:text-[4vw]">
            Where Ideas <br /> Made Digital.
          </h2>
          <div className="flex justify-end">
            <p className="text-[12px] max-w-[250px] font-medium leading-relaxed opacity-70 text-right">
              Building powerful digital experiences that drive growth through design, development & strategy
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute left-0 w-full flex justify-center z-50 bottom-5 md:bottom-10">
        <button onClick={handleScroll} className="focus:outline-none cursor-pointer border-none bg-transparent" aria-label="Scroll to next section">
          <motion.div
            className="border-2 border-[#1A1A1A] rounded-full flex justify-center bg-white w-[34px] h-[62px] p-[7px] md:w-[40px] md:h-[75px] md:p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, 22, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="bg-[#1A1A1A] rounded-full w-[10px] h-[10px] md:w-[12px] md:h-[12px]"
            />
          </motion.div>
        </button>
      </div>
    </section>
  );
};

export default HomepageHero;
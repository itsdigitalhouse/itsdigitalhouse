import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import patternImg from '../assets/digital_icons_pattern.jpg';

const Footer = () => {
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-white w-full overflow-hidden flex flex-col items-center justify-center border-t border-white/5">

      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        whileInView={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="absolute inset-0 pointer-events-none bg-repeat bg-center"
        style={{ backgroundImage: `url(${patternImg})`, backgroundSize: '550px' }}
      />

      {/* ── MAIN CONTENT ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto px-5 sm:px-8 relative z-10 w-full flex flex-col items-center justify-center pt-14 sm:pt-20 lg:pt-28 pb-10 sm:pb-14 lg:pb-20"
      >

        {/* Hello label */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-xl font-medium mb-3 sm:mb-5 md:mb-6 text-gray-400 tracking-[0.2em] uppercase text-center"
        >
          Hello, Lets Talk
        </motion.p>

        {/* ── BIG HEADING with hover underline ── */}
        <motion.div
          variants={itemVariants}
          className="relative inline-block group cursor-pointer mb-8 sm:mb-12 md:mb-16 text-center w-fit mx-auto overflow-hidden"
          initial="initial"
          whileHover="hovered"
        >
          <h2 className="text-[2rem] xs:text-4xl sm:text-5xl md:text-7xl lg:text-[100px] xl:text-[130px] font-[1000] uppercase tracking-tighter leading-[0.9] sm:leading-[0.85] mb-4 sm:mb-6 md:mb-8 px-1">
            <span
              style={{
                backgroundImage: neonGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}
            >
              TELL US ABOUT <br /> YOUR PROJECT
            </span>
          </h2>

          {/* Animated underline */}
          <motion.div
            className="rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            style={{
              background: neonGradient,
              height: '6px',
              width: '100%',
              margin: '0 auto'
            }}
            variants={{
              initial: { scaleX: 0, opacity: 0 },
              hovered: { scaleX: 1, opacity: 1 }
            }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* ── SOCIAL ICONS ── */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-14 lg:mb-16">
          {[
            { icon: <FaFacebookF />, color: "#1877F2" },
            { icon: <FaInstagram />, color: "#E4405F" },
            { icon: <FaLinkedinIn />, color: "#0A66C2" },
            { icon: <FaPinterestP />, color: "#BD081C" }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ scale: 1.25, color: item.color, y: -8 }}
              className="text-lg sm:text-xl md:text-3xl p-3 sm:p-3.5 md:p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm border border-white/5"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

      </motion.div>

      {/* ── WHATSAPP BUTTON ── */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        href="https://wa.me/yournumber"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 z-[999] bg-[#25D366] p-3 sm:p-3.5 md:p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
        />
      </motion.a>

    </footer>
  );
};

export default Footer;

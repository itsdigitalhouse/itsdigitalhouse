import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Logo Imports
import maahir from '../assets/maahir-contractor.png';
import zakabu from '../assets/zakabu.png';
import madagascar from '../assets/best-medagascar.png';
import sagar from '../assets/sagar.png';
import gne from '../assets/gne.png';
import ocean from '../assets/ocean-crest.png';
import kinshuk from '../assets/kinshuk.png';
import printpro from '../assets/print-pro.png';
import khaki from '../assets/khaki.png';
import bog from '../assets/bog.png';
import portcity from '../assets/portcity-traders.png';
import hippo from '../assets/hippo-cement.png';
import aldo from '../assets/aldo-partners.png';

const testimonials = [
  { id: 1, text: "Its Digital House transformed our online presence. Their strategic approach to branding helped us stand out in a crowded market.", author: "Maxwell Ogwang" },
  { id: 2, text: "The material calculator and showcase built for our brand were game-changers for our digital reach.", author: "Client Representative" },
  { id: 3, text: "Professional and creative! They delivered a modern digital solution that exceeded our expectations.", author: "Business Partner" }
];

const DigitalPartners = () => {
  const [index, setIndex] = useState(0);
  const neonGradient = "linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const partners = [
    { name: 'Maahir', img: maahir }, { name: 'Zakabu', img: zakabu },
    { name: 'Madagascar', img: madagascar }, { name: 'Sagar', img: sagar },
    { name: 'GNE', img: gne }, { name: 'Ocean Crest', img: ocean },
    { name: 'Kinshuk', img: kinshuk }, { name: 'Print Pro', img: printpro },
    { name: 'Khaki', img: khaki }, { name: 'BOG', img: bog },
    { name: 'PortCity', img: portcity }, { name: 'Hippo Cement', img: hippo },
    { name: 'Aldo Partners', img: aldo }
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col justify-center items-center py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center w-full">

        {/* ── HEADING ── */}
        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-[1000] uppercase tracking-tighter italic text-center leading-[1.3] mb-10 sm:mb-14 lg:mb-16 px-2"
          style={{
            backgroundImage: neonGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          OUR PARTNERS IN DIGITAL JOURNEY
        </motion.h2>

        {/* ── TESTIMONIAL SLIDER ── */}
        <div className="w-full flex flex-col items-center justify-center mb-12 sm:mb-16 lg:mb-24">

          {/* Quote mark — smaller on mobile */}
          <span className="text-[#D24A8A] text-4xl sm:text-6xl md:text-8xl font-serif text-center w-full leading-none">
            "
          </span>

          <div className="max-w-4xl w-full px-2 sm:px-4 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                {/* Testimonial text — smaller on mobile */}
                <p className="text-gray-700 text-base sm:text-xl md:text-2xl lg:text-3xl italic font-medium mb-6 sm:mb-8 leading-relaxed px-2">
                  {testimonials[index].text}
                </p>

                {/* Author */}
                <h4 className="text-black font-black uppercase tracking-widest text-xs sm:text-sm border-t-4 border-[#D24A8A] pt-3 sm:pt-4">
                  {testimonials[index].author}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot indicators for mobile */}
          <div className="flex gap-2 mt-6 sm:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-[#D24A8A] w-5' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* ── MARQUEE ── */}
        <div className="relative w-full max-w-7xl overflow-hidden py-6 sm:py-8 lg:py-10 border-y border-gray-100 bg-gray-50/30 rounded-xl sm:rounded-2xl">

          {/* Fade edges — narrower on mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center w-max px-6 sm:px-10"
            style={{ gap: '3rem' }}
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {duplicatedPartners.map((partner, i) => (
              <div
                key={i}
                className="
                  w-28 h-14
                  sm:w-40 sm:h-20
                  md:w-52 md:h-24
                  lg:w-64 lg:h-32
                  flex items-center justify-center flex-shrink-0
                  transition-transform duration-300 hover:scale-105
                "
              >
                <img
                  src={partner.img}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DigitalPartners;

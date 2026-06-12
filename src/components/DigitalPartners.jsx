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
  const neonGradient = "linear-gradient(to right, #11b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)";

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
    <section className="relative w-full min-h-screen bg-white flex flex-col justify-center items-center py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-10 flex flex-col items-center w-full">

        {/* ── HEADING: Single line requirement ── */}
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-black text-slate-950 uppercase tracking-tighter text-center mb-16 whitespace-nowrap">
          OUR PARTNERS IN {' '}
          <span 
            className="py-1" 
            style={{ 
              background: neonGradient,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            DIGITAL JOURNEY
          </span>
        </h2>

        {/* ── TESTIMONIAL SLIDER ── */}
        <div className="w-full flex flex-col items-center justify-center mb-24">
          <span className="text-[#D24A8A] text-6xl font-serif leading-none mb-4">"</span>
          <div className="max-w-3xl w-full px-4 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {/* Paragraph: Standardized Size */}
                <p className="text-gray-500 text-base sm:text-lg font-medium leading-relaxed mb-8">
                  {testimonials[index].text}
                </p>
                <h4 className="text-black font-black uppercase tracking-[0.2em] text-xs border-t-2 border-black inline-block pt-4">
                  {testimonials[index].author}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── DUAL MARQUEE SECTION: Logo Sizes restored ── */}
        <div className="relative w-full max-w-7xl overflow-hidden py-10">
          <motion.div
            className="flex items-center w-max px-10 mb-8"
            style={{ gap: '5rem' }}
            animate={{ x: ["-50%", 0] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {duplicatedPartners.map((partner, i) => (
              <div key={i} className="w-40 h-20 sm:w-56 sm:h-28 md:w-72 md:h-36 lg:w-80 lg:h-40 flex items-center justify-center flex-shrink-0">
                <img src={partner.img} alt={partner.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center w-max px-10"
            style={{ gap: '5rem' }}
            animate={{ x: [0, "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {duplicatedPartners.map((partner, i) => (
              <div key={i} className="w-40 h-20 sm:w-56 sm:h-28 md:w-72 md:h-36 lg:w-80 lg:h-40 flex items-center justify-center flex-shrink-0">
                <img src={partner.img} alt={partner.name} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DigitalPartners;
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
    <section className="relative w-full min-h-screen bg-white flex flex-col justify-center items-center py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* HEADING */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-[1000] uppercase tracking-tighter italic text-center leading-[1.4] mb-16"
          style={{ 
            backgroundImage: neonGradient, 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          OUR PARTNERS IN DIGITAL JOURNEY
        </motion.h2>

        {/* TESTIMONIAL SLIDER */}
        <div className="w-full flex flex-col items-center justify-center mb-24">
          <span className="text-[#D24A8A] text-5xl md:text-8xl font-serif text-center w-full">"</span>
          <div className="max-w-4xl w-full px-4 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <p className="text-gray-700 text-lg md:text-3xl italic font-medium mb-8 leading-relaxed">
                  {testimonials[index].text}
                </p>
                <h4 className="text-black font-black uppercase tracking-widest border-t-4 border-[#D24A8A] pt-4">
                  {testimonials[index].author}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* MARQUEE CONTAINER */}
        <div className="relative w-full max-w-7xl overflow-hidden py-10 border-y border-gray-100 bg-gray-50/30 rounded-2xl">
          
          {/* Deep Left Shadow Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Deep Right Shadow Effect */}
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div 
            className="flex space-x-16 md:space-x-24 w-max items-center px-10"
            animate={{ x: [0, "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30, 
              repeat: Infinity,
            }}
          >
            {duplicatedPartners.map((partner, i) => (
              <div 
                key={i} 
                className="w-40 h-20 md:w-56 md:h-28 flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <img 
                  src={partner.img} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain opacity-90 hover:opacity-100 transition-all duration-300" 
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
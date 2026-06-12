  import React, { useState } from 'react';
  import { motion } from 'framer-motion';
  import { useParams, Link } from 'react-router-dom';
  import { nestedServices } from '../data/servicesData';
  import animationVideo from '../assets/animation.mp4';
  import { ArrowRight } from 'lucide-react';

  const ServiceDetailPage = () => {
    const { category, slug } = useParams();
    const [isVideoReady, setIsVideoReady] = useState(false);

    // Category ke andar se slug wala page dhundo
    const categoryData = nestedServices[category];
    const service = categoryData?.pages.find(p => p.slug === slug);

    const fallbackBackground = 'linear-gradient(135deg, #e1b054 0%, #ee3444 44%, #75b0d2 100%)';

    if (!service) return <div className="text-center py-40 text-2xl font-bold text-slate-800">Service Not Found</div>;

    const containerVariants = {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    // Hardcoded features - same sab pages mein
    const features = [
      { title: "In-Depth Research & Analysis", detail: "We begin every engagement with thorough market research, competitor analysis, and audience profiling to build a strategy rooted in real data." },
      { title: "Custom Strategy Development", detail: "No templates. Every plan is crafted specifically around your business goals, industry dynamics, and target audience behavior." },
      { title: "Expert Execution & Delivery", detail: "Our specialized team executes with precision — on time, on budget, and aligned to the highest industry standards." },
      { title: "Performance Tracking & Reporting", detail: "We provide transparent, detailed reporting so you always know exactly how your investment is performing." },
      { title: "Continuous Optimization", detail: "We don't set and forget. Our team continuously monitors, tests, and refines to maximize results over time." },
      { title: "Dedicated Support & Communication", detail: "You get a dedicated point of contact and regular check-ins to ensure complete alignment throughout the project." },
    ];

    console.log("URL Params:", { category, slug });
  console.log("Available Categories:", Object.keys(nestedServices));

    return (
      <div className="bg-white w-full min-h-screen overflow-x-hidden">

        {/* ── HERO SECTION ── */}
        <section
          className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden px-6 pb-24"
          style={{
            borderBottomLeftRadius: '50% 10%',
            borderBottomRightRadius: '50% 10%',
            isolation: 'isolate',
            background: fallbackBackground
          }}
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute inset-0 bg-red-600/5 mix-blend-overlay z-10" />
            <video
              src={animationVideo}
              autoPlay loop muted playsInline preload="auto"
              onLoadedData={() => setIsVideoReady(true)}
              onCanPlay={() => setIsVideoReady(true)}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isVideoReady ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          <div className="text-center max-w-5xl relative z-10 text-white mt-12 px-4 flex flex-col items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-5xl lg:text-[52px] font-black uppercase tracking-tight mb-4 leading-none"
            >
              {service.label}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-base sm:text-lg text-white/90 max-w-md mx-auto leading-relaxed mb-10 font-medium"
            >
              {service.desc}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full flex justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-950 rounded-full font-bold uppercase text-[13px] tracking-widest shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Let's Build Together <ArrowRight className="w-4 h-4 text-slate-950" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── WHAT IS SECTION ── */}
        <section className="w-full bg-white py-24 md:py-32 border-b border-slate-50">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start gap-16 xl:gap-28">

            {/* Left: Morphing Blob */}
            <div className="w-full lg:w-[40%] flex justify-center items-center relative min-h-[320px] md:min-h-[420px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                animate={{
                  y: [0, -20, 0],
                  borderRadius: [
                    "42% 58% 70% 30% / 45% 45% 55% 55%",
                    "70% 30% 52% 48% / 60% 40% 60% 40%",
                    "50% 50% 30% 70% / 50% 60% 40% 50%",
                    "42% 58% 70% 30% / 45% 45% 55% 55%"
                  ]
                }}
                transition={{
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  borderRadius: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  default: { duration: 0.8 }
                }}
                className="w-64 h-64 md:w-[380px] md:h-[380px] bg-[#ee3444] shadow-[0_20px_50px_rgba(238,52,68,0.3)] flex-shrink-0"
              />
            </div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-[60%] flex flex-col items-start pt-2"
            >
              <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-950 tracking-tight leading-none mb-6 uppercase">
                What Is {service.label}?
              </h2>

              <svg className="mb-8" width="80" height="16" viewBox="0 0 80 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 8C6.5 8 6.5 2 11 2C15.5 2 15.5 8 20 8C24.5 8 24.5 14 29 14C33.5 14 33.5 8 38 8C42.5 8 42.5 2 47 2C51.5 2 51.5 8 56 8C60.5 8 60.5 14 65 14C69.5 14 69.5 8 74 8C78.5 8 78.5 2 83 2" stroke="#e91e8c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>

              <p className="text-xl sm:text-2xl text-slate-900 font-bold leading-snug mb-5">
                {service.desc}
              </p>

              <p className="text-[16px] sm:text-[17px] text-slate-500 font-medium leading-relaxed mb-8 max-w-3xl">
                Our {service.label} service is built to deliver measurable results for your business. 
                We combine cutting-edge tools, proven methodologies, and deep industry expertise 
                to craft solutions that not only meet your current needs but scale with your future ambitions. 
                From strategy to execution, every step is designed with precision and purpose.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 border-[3px] border-slate-950 text-slate-950 font-black uppercase text-[14px] tracking-wider rounded-xl hover:bg-slate-950 hover:text-white transition-all duration-300 transform active:scale-95"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

  {/* ── 3RD SECTION: STICKY APPROACH ── */}
  <section className="w-full bg-[#f8f8f8] py-24 md:py-32">
    <div className="max-w-screen-2xl mx-auto px-6 lg:px-16">
      
      {/* Yeh 'relative' parent hona zaruri hai taake 'sticky' iske andar hi rahe */}
      <div className="flex flex-col lg:flex-row gap-16 xl:gap-28 items-start relative">

        {/* Left: Sticky Box (Ab yeh scroll karte waqt fixed rahega) */}
        <div className="w-full lg:w-[35%] lg:sticky lg:top-32 self-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#ee3444] mb-4 block">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-950 uppercase tracking-tight leading-none mb-6">
              How We Deliver Results
            </h2>
            <svg className="mb-8" width="80" height="16" viewBox="0 0 80 16" fill="none">
              <path d="M2 8C6.5 8 6.5 2 11 2C15.5 2 15.5 8 20 8C24.5 8 24.5 14 29 14C33.5 14 33.5 8 38 8C42.5 8 42.5 2 47 2C51.5 2 51.5 8 56 8C60.5 8 60.5 14 65 14C69.5 14 69.5 8 74 8C78.5 8 78.5 2 83 2" stroke="#e91e8c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-slate-500 text-[16px] leading-relaxed">
              Every service we offer is backed by a structured, battle-tested process designed to maximize impact and minimize risk for your business.
            </p>
          </motion.div>
        </div>

        {/* Right: Scrollable Cards (Yeh move honge jab left fixed rahega) */}
        <div className="w-full lg:w-[65%]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group flex items-start gap-6 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <span className="text-[42px] font-black text-slate-100 group-hover:text-[#ee3444]/20 transition-colors duration-300 leading-none select-none flex-shrink-0">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <svg className="mb-3" width="40" height="8" viewBox="0 0 80 16" fill="none">
                    <path d="M2 8C6.5 8 6.5 2 11 2C15.5 2 15.5 8 20 8C24.5 8 24.5 14 29 14C33.5 14 33.5 8 38 8C42.5 8 42.5 2 47 2C51.5 2 51.5 8 56 8C60.5 8 60.5 14 65 14C69.5 14 69.5 8 74 8C78.5 8 78.5 2 83 2" stroke="#e91e8c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h4 className="text-[18px] font-black uppercase text-slate-800 tracking-tight mb-2 group-hover:text-[#ee3444] transition-colors duration-300">
                    {feat.title}
                  </h4>
                  <p className="text-slate-500 text-[14px] leading-relaxed">
                    {feat.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  </section>

        {/* ── CTA SECTION ── */}
        <section className="w-full bg-white py-24 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#ee3444] mb-4 block">
                Ready To Start?
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-slate-950 uppercase tracking-tight leading-none mb-6">
                Let's Build Something Great Together
              </h2>
              <p className="text-slate-500 text-[16px] leading-relaxed max-w-md mx-auto mb-10">
                Our team is ready to help you achieve your goals. Get in touch today and let's create something extraordinary.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#ee3444] text-white font-black uppercase text-[13px] tracking-widest rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Start Your Project <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    );
  };

  export default ServiceDetailPage;
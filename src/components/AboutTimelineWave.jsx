import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const COLORS = ['#e1b054', '#d24a8a', '#ee3444', '#75b0d2', '#7361a7', '#f1574d'];

const HouseImage = ({ size = 100 }) => (
  <img
    src="https://media.base44.com/images/public/6a2809f99c0342de4d812d56/cd00b77e6_home.png"
    alt="house"
    width={size}
    height={size}
    style={{ objectFit: 'contain' }}
  />
);

const timelineData = [
  { year: "2024", title: "The Genesis & Core Ideology", desc: "Its Digital House shuru hui ek highly dedicated full-service creative digital agency ke taur par. Humara structural vision bilkul clear tha: design, technology, aur analytical digital strategy ko use karke brands ki online identity aur visibility ko completely optimize kiya jaye.", itemType: "balloon", color: '#e1b054' },
  { year: "2025", title: "Strategic Frameworks & Global Reach", desc: "Humne scaling strategies deploy karke international markets (UK aur Middle East) ko target kiya. Internal team matrices mein modern engineering specialists, website developers, custom product engineers, aur dedicated content creators add hue.", itemType: "bubble-group", color: '#d24a8a' },
  { year: "Early 2026", title: "Industrial Trading Systems", desc: "PortCity Traders enterprise network ke liye modern cross-border import aur export system construct kiya. Framework specifically agro products aur industrial raw materials flow structures ko load-balanced clusters par maintain karta hai.", itemType: "bubble-group", color: '#ee3444' },
  { year: "Mid 2026", title: "Precious Minerals Infrastructure", desc: "Bathia Ocean Gold (BOG) global scale asset system design kiya jo precious gold, silver, aur heavy copper extraction modules handle karta hai. Platform explicitly mineral mining operations data processing structures ko seamlessly streamline karta hai.", itemType: "balloon-large", color: '#75b0d2' },
  { year: "Mid 2026 (Engineering Upgrade)", title: "Luxury Interactive Commerce", desc: "XOX Jewels digital architecture ke liye unique synchronization algorithm implement kiya. Canvas builder architecture ensure karti hai ke complex layout assets dynamic parallel rendering logic ke sath seamlessly publish karein.", itemType: "balloon", color: '#7361a7' },
  { year: "Late 2026", title: "Structural Material Matrix", desc: "Khaki & Co corporate web system build kiya jo high-volume Real Estate development datasets aur industrial Building Materials supplies ko handle karta hai. Structural item specifications aur property pricing models map kiye gaye hain.", itemType: "bubble-group", color: '#f1574d' },
  { year: "2027 Blueprint", title: "Enterprise SaaS Platforms & Cloud Systems", desc: "Hum advanced multi-tenant SaaS engineering web architectures deploy kar rahe hain. High-fidelity web performance metrics, cloud automation pipelines, aur extensive deep analytics integration panels humari tech stack scalability ko future-ready banate hain.", itemType: "balloon", color: '#e1b054' },
  { year: "Future Vision", title: "Global Leadership & Brand Dominance", desc: "Its Digital House ka absolute vision leading global authority banna hai jo high-end automation engines aur modern technological solutions ke through modern digital ecosystems design kare. Hum meaningful digital experiences build kar rahe hain.", itemType: "balloon-large", color: '#d24a8a' }
];

const AboutTimelineWave = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-74%"]);

  const handleSkip = () => {
    if (targetRef.current) {
      const sectionBottom = targetRef.current.offsetTop + targetRef.current.offsetHeight;
      window.scrollTo({ top: sectionBottom, behavior: 'smooth' });
    }
  };

  return (
    <div>

      {/* ── SECTION 1: HEADING + PARAGRAPH ── */}
      <section className="w-full bg-white py-24 px-6">
        <div className="h-0.5 w-full mb-0" style={{ background: `linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)` }} />
        <div className="max-w-5xl mx-auto text-center pt-16 pb-4">

          <div className="inline-flex items-center gap-3 mb-5">
            <div className="h-px w-10" style={{ background: '#e1b054' }} />
            <span className="text-[10px] uppercase font-bold tracking-[0.45em]" style={{ color: '#e1b054' }}>Our Journey</span>
            <div className="h-px w-10" style={{ background: '#e1b054' }} />
          </div>

          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none" style={{ color: '#0a0a0a' }}>
            HOW WE{' '}
            <span style={{
              background: `linear-gradient(135deg, #e1b054, #d24a8a, #ee3444)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              BUILT THE HOUSE
            </span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#64748b' }}>
            From a tight-knit team of creators to a full-service digital authority — driven by relentless innovation, bridging creative vision with high-performance execution across global markets.
          </p>

          {/* Decorative dots row */}
          <div className="flex justify-center gap-2 mt-10">
            {COLORS.map((c, i) => (
              <div key={i} className="w-2 h-2 rounded-full" style={{ background: c }} />
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 2: SCROLL/SKIP + WAVE + CARDS ── */}
      <section ref={targetRef} className="relative w-full h-[750vh]" style={{ background: '#fafafa' }}>
        <div className="sticky top-20 h-screen w-full flex flex-col justify-center overflow-hidden">

          {/* Scroll / Skip Controller */}
          <div className="max-w-3xl mx-auto w-full px-6 relative z-30 mb-8">
            <div
              className="w-full flex justify-between items-center select-none py-4 px-6 rounded-2xl border"
              style={{ borderColor: '#ebebeb', background: '#ffffff', boxShadow: '0 2px 20px 0 rgba(0,0,0,0.05)' }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-lg font-bold shadow"
                  style={{ background: `linear-gradient(135deg, #7361a7, #d24a8a)` }}
                >→</div>
                <span className="text-sm font-black tracking-[0.25em] uppercase" style={{ color: '#7361a7' }}>Scroll</span>
              </div>

              <div className="flex gap-1.5">
                {COLORS.map((c, i) => (
                  <div key={i} className="w-2 h-2 rounded-full" style={{ background: c, opacity: 0.45 }} />
                ))}
              </div>

              <button onClick={handleSkip} className="flex items-center gap-3 group border-none bg-transparent outline-none cursor-pointer">
                <span className="text-sm font-black tracking-[0.25em] uppercase transition-opacity group-hover:opacity-60" style={{ color: '#ee3444' }}>Skip</span>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white text-lg font-bold shadow group-hover:scale-105 transition-transform"
                  style={{ background: `linear-gradient(135deg, #ee3444, #f1574d)` }}
                >
                  <span className="rotate-90 inline-block">→</span>
                </div>
              </button>
            </div>
          </div>

          {/* WAVE + CARDS */}
          <div className="relative w-full overflow-hidden h-[480px]">
            <motion.div style={{ x }} className="absolute left-0 top-0 flex items-center h-full pl-[10vw]">

              {/* WAVE SVG */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none w-[11500px] z-0">
                <svg viewBox="0 0 11500 200" fill="none" className="w-full">
                  <defs>
                    <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e1b054" />
                      <stop offset="17%" stopColor="#d24a8a" />
                      <stop offset="34%" stopColor="#ee3444" />
                      <stop offset="50%" stopColor="#75b0d2" />
                      <stop offset="67%" stopColor="#7361a7" />
                      <stop offset="83%" stopColor="#f1574d" />
                      <stop offset="100%" stopColor="#e1b054" />
                    </linearGradient>
                    <filter id="waveShadow">
                      <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#d24a8a" floodOpacity="0.15" />
                    </filter>
                  </defs>
                  <path
                    d="M0,100 C375,300 375,-100 750,100 C1125,300 1125,-100 1500,100 C1875,300 1875,-100 2250,100 C2625,300 2625,-100 3000,100 C3375,300 3375,-100 3750,100 C4125,300 4125,-100 4500,100 C4875,300 4875,-100 5250,100 C5625,300 5625,-100 6000,100 C6375,300 6375,-100 6750,100 C7125,300 7125,-100 7500,100 C7875,300 7875,-100 8250,100 C8625,300 8625,-100 9000,100 C9375,300 9375,-100 9750,100 C10125,300 10125,-100 10500,100 C10875,300 10875,-100 11250,100"
                    stroke="url(#waveGrad)"
                    strokeWidth="3"
                    filter="url(#waveShadow)"
                  />
                  <path
                    d="M0,108 C375,308 375,-92 750,108 C1125,308 1125,-92 1500,108 C1875,308 1875,-92 2250,108 C2625,308 2625,-92 3000,108 C3375,308 3375,-92 3750,108 C4125,308 4125,-92 4500,108 C4875,308 4875,-92 5250,108 C5625,308 5625,-92 6000,108 C6375,308 6375,-92 6750,108 C7125,308 7125,-92 7500,108 C7875,308 7875,-92 8250,108 C8625,308 8625,-92 9000,108 C9375,308 9375,-92 9750,108 C10125,308 10125,-92 10500,108 C10875,308 10875,-92 11250,108"
                    stroke="url(#waveGrad)"
                    strokeWidth="1"
                    opacity="0.2"
                  />
                </svg>
              </div>

              {/* CARDS */}
              <div className="flex gap-[14vw] relative z-10 pr-[400px]">
                {timelineData.map((node, index) => (
                  <div key={index} className="inline-block w-[400px] flex-shrink-0 text-center relative">

                    {/* FLOATING ICON */}
                    <div className="h-32 flex items-center justify-center mb-4">
                      {node.itemType === "balloon" && (
                        <motion.div
                          animate={{ y: [0, -14, 0], rotate: [0, 4, -4, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <HouseImage size={90} />
                        </motion.div>
                      )}
                      {node.itemType === "balloon-large" && (
                        <motion.div
                          animate={{ y: [0, -22, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                          className="flex flex-col items-center"
                        >
                          <HouseImage size={175} />
                        </motion.div>
                      )}
                      {node.itemType === "bubble-group" && (
                        <div className="relative w-24 h-24">
                          <motion.div
                            className="absolute top-1 left-3 w-12 h-12 rounded-full"
                            style={{ background: node.color + '18', border: `1.5px solid ${node.color}40` }}
                            animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <motion.div
                            className="absolute bottom-1 right-2 w-8 h-8 rounded-full"
                            style={{ background: node.color + '25', border: `1.5px solid ${node.color}50` }}
                            animate={{ y: [0, -10, 0], x: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                          />
                          <motion.div
                            className="absolute top-8 right-6 w-5 h-5 rounded-full"
                            style={{ background: node.color + '30', border: `1px solid ${node.color}40` }}
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          />
                        </div>
                      )}
                    </div>

                    {/* CARD */}
                    <div
                      className="p-7 rounded-3xl text-left transition-all duration-300 hover:-translate-y-1"
                      style={{
                        background: '#ffffff',
                        border: `1px solid #f0f0f0`,
                        boxShadow: `0 4px 32px 0 rgba(0,0,0,0.06)`,
                      }}
                      onMouseEnter={e => e.currentTarget.style.boxShadow = `0 8px 40px 0 ${node.color}28, 0 2px 8px 0 rgba(0,0,0,0.04)`}
                      onMouseLeave={e => e.currentTarget.style.boxShadow = `0 4px 32px 0 rgba(0,0,0,0.06)`}
                    >
                      <span
                        className="inline-block text-[10px] font-black tracking-[0.3em] uppercase px-3 py-1 rounded-full mb-3"
                        style={{ background: node.color + '15', color: node.color }}
                      >
                        {node.year}
                      </span>
                      <div className="w-8 h-0.5 rounded-full mb-3" style={{ background: node.color }} />
                      <h3 className="text-lg font-black uppercase tracking-tight mb-3 leading-tight" style={{ color: '#0a0a0a' }}>
                        {node.title}
                      </h3>
                      <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
                        {node.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>

            </motion.div>
          </div>

          {/* Bottom line */}
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(to right, transparent, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d, transparent)` }} />
        </div>
      </section>

    </div>
  );
};

export default AboutTimelineWave;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What services does Digital House offer?',
    answer:
      'We are a full service creative digital agency. Our core services include Website Development & Design, Social Media Management, Content Creation, Branding & Creative Design, and Digital Marketing & Growth Solutions.',
  },
  {
    question: 'How can Digital House help my business grow?',
    answer:
      'We help brands grow through targeted digital strategy, creative campaigns, and performance-led marketing designed to increase visibility, leads, and customer engagement.',
  },
  {
    question: 'Why should I choose Digital House over other agencies?',
    answer:
      'Our team combines strategy, storytelling, and high-impact design to create campaigns built for results. We focus on clear value, fast collaboration, and measurable digital growth.',
  },
  {
    question: 'Does Digital House focus on long term branding or just short term marketing?',
    answer:
      'We build both long-term brand identity and short-term marketing momentum, so your campaigns look great now and keep delivering value over time.',
  },
  {
    question: 'What makes Digital House’s digital solutions unique?',
    answer:
      'Our digital solutions are tailored to each brand, combining creative storytelling, modern UX, and conversion optimization to deliver standout experiences and measurable business outcomes.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  // Top Heading Gradient Style
  const customGradientStyle = {
    background: 'linear-gradient(to right, #e1b054, #d24a8a, #ee3444, #75b0d2, #7361a7, #f1574d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  return (
    <section className="bg-white text-slate-950 px-4 py-16 sm:py-24 sm:px-6 lg:px-12 xl:px-16 w-full overflow-hidden">
      <div className="mx-auto max-w-[1320px]">
        
        {/* Top Header - Multi Hex Sequence Gradient */}
        <div className="w-full text-center mb-12 lg:mb-16">
          <h2 
            style={customGradientStyle}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight inline-block bg-clip-text text-transparent"
          >
            FREQUENTLY ASK QUESTIONS (FAQS)
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:items-start">
          
          {/* Left Column Content */}
          <div className="w-full max-w-xl">
            <p className="text-sm font-bold uppercase tracking-wider text-rose-500">Support</p>
            <h3 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-slate-950 font-sans">
              FAQs
            </h3>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg font-light">
              Have a question? We've got answers! Check out our Frequently Asked Questions (FAQs) to find quick solutions to common queries. Save time and get the information you need right here.
            </p>
          </div>

          {/* Right Column Accordion List */}
          <div className="w-full space-y-2">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className="border-b border-slate-100 bg-white transition duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left group"
                  >
                    {/* Hover aur Active state dono par gradient style inject kiya hai */}
                    <span 
                      style={isOpen ? customGradientStyle : undefined}
                      className={`text-base sm:text-lg font-bold tracking-tight transition-all duration-300 inline-block bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-[#e1b054] group-hover:via-[#ee3444] group-hover:to-[#f1574d]`}
                      // Fallback logic classes text rendering handle karne ke liye (safeguard)
                      {...(!isOpen && { className: "text-base sm:text-lg font-bold tracking-tight text-slate-900 transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#e1b054] group-hover:via-[#ee3444] group-hover:to-[#f1574d] bg-clip-text" })}
                    >
                      {item.question}
                    </span>
                    <span className="text-slate-800 text-sm sm:text-base font-medium flex-shrink-0">
                      {isOpen ? (
                        <svg className="w-4 h-4 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
                      ) : (
                        <svg className="w-4 h-4 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
                      )}
                    </span>
                  </button>

                  {/* Smooth Framer Motion Accordion Dropdown Height Animation */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pt-2 pr-4">
                          <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal max-w-3xl">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
import React, { useState, useEffect } from 'react';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => { const timer = setTimeout(() => setIsOpen(true), 1500); return () => clearTimeout(timer); }, []);
  const handleClose = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-white/80 backdrop-blur-2xl animate-fade-in">

      {/* Container */}
      <div className="relative bg-white w-full max-w-[1200px] max-h-[95vh] flex flex-col rounded-2xl sm:rounded-[2rem] lg:rounded-[3rem] shadow-2xl overflow-hidden box-border">

        {/* Close Button */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-50">
          <button
            onClick={handleClose}
            className="p-2 sm:p-3 bg-slate-100 rounded-xl sm:rounded-2xl hover:bg-slate-200 transition-all"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">

          {/* Mobile & Tablet: Stack vertically | Desktop: Side by side */}
          <div className="p-5 sm:p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 w-full">

            {/* ── Left Column ── */}
            <div className="w-full lg:w-[45%] flex-shrink-0 pt-6 sm:pt-4 lg:pt-0">
              <span className="text-[9px] sm:text-[10px] font-black tracking-[0.25em] sm:tracking-[0.3em] text-slate-400 uppercase">
                ITS DIGITAL HOUSE • BRIEFING
              </span>

              <h3 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-950 mt-3 sm:mt-4 mb-4 sm:mb-6 leading-[1.1]">
                Book A Free.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1b054] via-[#ee3444] to-[#75b0d2]">
                  Consultant
                </span>
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-[480px]">
                Most digital projects fail because they lack structured strategy. Drop your details to connect directly with our core architecture team.
              </p>

              {/* Trust badges — hidden on smallest screens, shown sm+ */}
              <div className="hidden sm:flex flex-wrap gap-3 mt-6">
                {['Free Consultation', '24hr Response', 'No Commitment'].map((badge) => (
                  <span key={badge} className="text-[11px] font-bold text-slate-500 border border-slate-200 px-3 py-1.5 rounded-full">
                    ✦ {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right Column: Form ── */}
            <div className="w-full lg:w-[50%] bg-slate-50 p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-[2rem] border border-slate-100 flex-shrink-0">
              <h4 className="text-lg sm:text-xl font-black mb-4 sm:mb-5">Book Strategy Sync</h4>

              <form className="space-y-3 sm:space-y-4">
                {/* Full Name */}
                <input
                  className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-xl border border-slate-200 bg-white outline-none focus:border-slate-400 transition-colors"
                  placeholder="Full Name"
                />

                {/* Email + Phone — stacked on mobile, 2-col on sm+ */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-xl border border-slate-200 bg-white outline-none focus:border-slate-400 transition-colors"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-xl border border-slate-200 bg-white outline-none focus:border-slate-400 transition-colors"
                    placeholder="Phone"
                    type="tel"
                  />
                </div>

                {/* Textarea */}
                <textarea
                  className="w-full p-3 sm:p-4 text-sm sm:text-base rounded-xl border border-slate-200 bg-white h-20 sm:h-24 resize-none outline-none focus:border-slate-400 transition-colors"
                  placeholder="Project Objective"
                />

                {/* Submit */}
                <button
                  type="button"
                  className="w-full py-4 sm:py-5 bg-slate-950 text-white text-sm sm:text-base font-black rounded-xl hover:bg-[#ee3444] transition-all tracking-wider"
                >
                  INITIATE BREAKOUT LOOP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        body { overflow: hidden !important; }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
};

export default WelcomePopup;

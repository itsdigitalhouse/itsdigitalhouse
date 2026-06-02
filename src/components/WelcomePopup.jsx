import React, { useState, useEffect } from 'react';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => { const timer = setTimeout(() => setIsOpen(true), 1500); return () => clearTimeout(timer); }, []);
  const handleClose = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 bg-white/80 backdrop-blur-2xl animate-fade-in">
      
      {/* Container - box-border property add ki hai */}
      <div className="relative bg-white w-[95%] lg:w-[80%] max-w-[1200px] max-h-[90vh] flex flex-col rounded-[3rem] shadow-2xl overflow-hidden box-border">
        
        {/* Sticky Header */}
        <div className="absolute top-8 right-8 z-50">
          <button onClick={handleClose} className="p-3 bg-slate-100 rounded-2xl hover:bg-slate-200 transition-all">
            <svg className="w-6 h-6 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Content Area - overflow-hidden add kiya hai */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 w-full">
            
            {/* Left Column */}
            <div className="w-full lg:w-[45%] flex-shrink-0">
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">ITS DIGITAL HOUSE • BRIEFING</span>
              <h3 className="text-4xl lg:text-7xl font-black text-slate-950 mt-4 mb-6 leading-[1.1]">
                Book A Free.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1b054] via-[#ee3444] to-[#75b0d2]">Consultant</span>
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Most digital projects fail because they lack structured strategy. Drop your details to connect directly with our core architecture team.
              </p>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-[50%] bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex-shrink-0">
               <form className="space-y-4">
                  <h4 className="text-xl font-black mb-4">Book Strategy Sync</h4>
                  <input className="w-full p-4 rounded-xl border border-slate-200 bg-white" placeholder="Full Name" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input className="w-full p-4 rounded-xl border border-slate-200 bg-white" placeholder="Email" />
                    <input className="w-full p-4 rounded-xl border border-slate-200 bg-white" placeholder="Phone" />
                  </div>
                  <textarea className="w-full p-4 rounded-xl border border-slate-200 bg-white h-24 resize-none" placeholder="Project Objective" />
                  <button type="button" className="w-full py-5 bg-slate-950 text-white font-black rounded-xl hover:bg-[#ee3444] transition-all">INITIATE BREAKOUT LOOP</button>
               </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Global scrollbar hiding */
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Force body scroll lock */
        body { overflow: hidden !important; }
        
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default WelcomePopup;
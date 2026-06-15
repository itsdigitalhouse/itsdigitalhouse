import React from 'react';

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white select-none overflow-hidden animate-loader-wrapper px-4">
      
      {/* Structural Minimalist Ambient Core Light Flare */}
      <div className="absolute inset-0 pointer-events-none opacity-50 flex items-center justify-center">
        <div className="w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-tr from-[#ee3444]/10 via-[#e1b054]/5 to-transparent blur-[60px] sm:blur-[100px] md:blur-[140px] animate-pulse" />
      </div>

      {/* Main Brand Content Frame */}
      <div className="relative flex flex-col items-center w-full max-w-2xl mx-auto text-center px-2">
        
        {/* Elite Shutter/Mask Typography Animation Wrapper */}
        <div className="overflow-hidden mb-5 h-[28px] xs:h-[36px] sm:h-[46px] md:h-[56px] lg:h-[64px] flex items-center justify-center w-full max-w-full">
          <h1 className="text-base xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-slate-950 uppercase animate-text-slide-up relative whitespace-nowrap tracking-[0.2em] xs:tracking-[0.3em] sm:tracking-[0.35em] md:tracking-[0.4em] pr-[0.2em] xs:pr-[0.3em] sm:pr-[0.35em] md:pr-[0.4em] block w-auto mx-auto header-text-fix">
            ITS DIGITAL HOUSE
            {/* Shimmer Light Lens Sweep Effect across the text */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full animate-shimmer-lens" />
          </h1>
        </div>

        {/* Premium Geometric Loading Tracker Bar */}
        <div className="w-24 xs:w-32 md:w-40 h-[2px] bg-slate-100 rounded-full overflow-hidden relative">
          <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#e1b054] via-[#ee3444] to-[#75b0d2] w-full rounded-full animate-progress-loop" />
        </div>

        {/* Technical Sub-Attribute Tagging */}
        <div className="mt-5 overflow-hidden h-[14px] xs:h-[18px] flex items-center justify-center w-full">
          <p className="text-[7.5px] xs:text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase animate-sub-fade-up tracking-[0.15em] xs:tracking-[0.25em] pr-[0.15em] xs:pr-[0.25em] whitespace-nowrap block w-auto mx-auto">
            ENGINEERING DIGITAL IDENTITY
          </p>
        </div>

      </div>

      {/* Embedded High Fidelity Custom Keyframe Mechanics */}
      <style>{`
        /* Lettering Fix: To counter overflow on giant screens */
        .header-text-fix {
          padding-left: 0.1em !important; 
          box-sizing: border-box;
        }

        /* Text Mask Slide Up from Absolute Zero Bottom */
        @keyframes textSlideUp {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        .animate-text-slide-up {
          animation: textSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Subtle delay and fade up for subtitle text */
        @keyframes subFadeUp {
          0% { opacity: 0; transform: translateY(5px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-sub-fade-up {
          animation: subFadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }

        /* Continuous High-Performance Progress Tracking Loop */
        @keyframes progressLoop {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        .animate-progress-loop {
          animation: progressLoop 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        /* Cinematic Shimmer Sweep across the main brand lettering */
        @keyframes shimmerLens {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer-lens {
          animation: shimmerLens 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          mix-blend-mode: overlay;
        }

        /* Custom Exit Scale/Fade Mesh for the loader container when unmounted */
        @keyframes loaderWrapper {
          from { opacity: 1; }
          to { opacity: 1; }
        }
        .animate-loader-wrapper {
          animation: loaderWrapper 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

    </div>
  );
};

export default GlobalLoader;
import React from 'react';

const SolutionFAQ = () => {
  const faqs = [
    { 
      q: "What types of businesses do you work with?", 
      a: "We collaborate with businesses across all scales—from ambitious startups building their online ecosystem from scratch to established enterprises seeking high-end digital transformation." 
    },
    { 
      q: "Are your digital solutions standardized or customized?", 
      a: "Every blueprint we engineer is 100% customized. We never believe in templates. Our frameworks are custom-tailored to align precisely with your specific operations and revenue targets." 
    },
    { 
      q: "What is the typical timeline for a web development system?", 
      a: "Timelines vary depending on project complexity and feature requirements. However, we maintain strict agile milestones to ensure rapid, high-quality deployment with transparent communication." 
    },
    { 
      q: "Do you offer post-launch optimization and technical support?", 
      a: "Yes, deployment is just the beginning. We provide dedicated performance optimization, scaling strategy adjustments, and continuous enhancement support to maximize your traction." 
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-50 w-full overflow-hidden px-4 sm:px-6 md:px-12 border-t border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        <div className="lg:col-span-4 w-full lg:sticky lg:top-32 h-fit">
          <span className="inline-block text-[#ee3444] font-bold tracking-[0.3em] text-[10px] sm:text-[11px] uppercase mb-4">
            Clear Doubts
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 leading-tight mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Have different questions or specific technical constraints? Book a dedicated strategy session with our core team.
          </p>
        </div>

        <div className="lg:col-span-8 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200/60 transition-all duration-300 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40">
              <h3 className="text-base sm:text-lg font-black text-slate-950 mb-3 flex items-start gap-2">
                <span className="text-[#ee3444] font-bold">Q.</span>
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionFAQ;
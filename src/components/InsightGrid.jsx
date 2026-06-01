import React, { useState } from 'react';

const InsightGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Development', 'Branding', 'Marketing'];

  const articles = [
    { category: "Development", date: "May 28, 2026", title: "Why Modern Businesses are Migrating to Next.js Architecture", desc: "Explore how server-side rendering and static optimization loop accelerate application performance and skyrocket SEO rankings.", readTime: "5 min read" },
    { category: "Marketing", date: "May 15, 2026", title: "The Core Framework of High-Converting B2B Lead Automation", desc: "An inside look into deploying data-driven marketing loops and structured systems to capture and convert enterprise clients efficiently.", readTime: "7 min read" },
    { category: "Branding", date: "May 02, 2026", title: "Engineered Identity: Designing Logos That Dominate the Market Noise", desc: "How structured visual guidelines and precise brand identity systems build emotional authority and instant customer trust.", readTime: "4 min read" },
    { category: "Development", date: "April 20, 2026", title: "The Impact of Premium UI/UX Animation on Retention Loops", desc: "Analyzing how high-end micro-interactions and interactive canvas engineering hold user attention and enhance conversion rates.", readTime: "6 min read" }
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-slate-50 w-full overflow-hidden border-t border-slate-200/60 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Animated Filtering Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3 mb-16 border-b border-slate-200/60 pb-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-300 transform active:scale-95 ${
                activeCategory === cat
                  ? 'bg-slate-950 text-white shadow-lg shadow-slate-950/10 -translate-y-0.5'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:border-slate-300 hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Staggered Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transition-all duration-500">
          {filteredArticles.map((article, index) => (
            <article 
              key={index}
              className="group bg-white rounded-3xl border border-slate-200/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#ee3444]/30 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-200"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-100 group-hover:text-[#ee3444] group-hover:bg-[#ee3444]/5 group-hover:border-[#ee3444]/20 transition-all duration-300">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{article.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-950 mb-4 tracking-tight leading-snug group-hover:text-[#ee3444] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                  {article.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                <span className="text-xs font-semibold text-slate-400">{article.readTime}</span>
                <div className="flex items-center gap-1 text-slate-950 font-bold text-sm group-hover:text-[#ee3444] transition-colors duration-300">
                  <span>Read Article</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default InsightGrid;
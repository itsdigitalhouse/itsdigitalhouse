import React, { useState } from 'react';

const InsightGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Development', 'Branding', 'Marketing'];

  const articles = [
    { category: "Development", date: "April 20, 2026", title: "Scalable App Architecture: Building for the Next Billion Users", desc: "Explore how leveraging modern frameworks like React Native and Flutter enables cross-platform performance without compromising on native-like speed.", readTime: "5 min read" },
    { category: "Development", date: "April 28, 2026", title: "The Power of Server-Side Rendering in Modern SaaS", desc: "An analysis of why Next.js architecture is the industry standard for creating fast, SEO-optimized, and high-performance digital products.", readTime: "5 min read" },
    { category: "Development", date: "May 11, 2026", title: "Custom Tooling: Why Off-the-Shelf Plugins Aren't Always Enough", desc: "A look at how building custom solutions, like product customization builders, empowers businesses to offer unique experiences to their customers.", readTime: "5 min read" },
    { category: "Development", date: "May 19, 2026", title: "Automating Infrastructure: The Role of Master Starter Kits", desc: "How we deploy standardized, high-performance starter kits to manage and scale multiple client websites simultaneously with maximum efficiency.", readTime: "5 min read" },

    { category: "Marketing", date: "April 20, 2026", title: "Automating Your Sales Pipeline: The Digital Hunter Advantage", desc: "Discover how we integrate custom Python scripts to scale lead generation and streamline outreach for international markets.", readTime: "7 min read" },    
    { category: "Marketing", date: "April 28, 2026", title: "Data-Driven Outreach: Targeting UK & Middle East Markets", desc: "Insights into building efficient lead tracking systems and strategic marketing campaigns that resonate with international audiences.", readTime: "7 min read" },
    { category: "Marketing", date: "May 11, 2026", title: "Turning Digital Footprints into Revenue Streams", desc: "A strategic look at how our agency uses full-service digital marketing solutions to transform online identity into measurable business growth.", readTime: "7 min read" },
    { category: "Marketing", date: "May 19, 2026", title: "The Science of Lead Conversion for Enterprise Clients", desc: "Breaking down the systems and processes we use to capture, nurture, and convert high-value prospects into long-term clients.", readTime: "7 min read" },

    { category: "Branding", date: "April 20, 2026", title: "The Art of Premium Motion: Elevating Brands with GSAP", desc: "Learn how high-end web animations and interactive design elements transform a standard interface into a memorable, premium brand identity.", readTime: "4 min read" },
    { category: "Branding", date: "April 28, 2026", title: "Crafting a High-Tech Aesthetic for Modern Brands", desc: "How we combine minimal design, 3D effects, and smooth transitions to help brands stand out in a competitive digital world.", readTime: "4 min read" },
    { category: "Branding", date: "May 11, 2026", title: "Identity Beyond the Logo: Building a Cohesive Digital Presence", desc: "An exploration of how design, technology, and strategy work together to create seamless experiences that strengthen branding.", readTime: "4 min read" },
    { category: "Branding", date: "May 19, 2026", title: "Visual Authority: Why Aesthetics Impact Conversion Rates", desc: "Analyzing the link between premium digital design and user trust, specifically for businesses looking to project growth and innovation.", readTime: "4 min read" },

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
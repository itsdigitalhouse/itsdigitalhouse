import React, { useState, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { serviceContent } from '../data/servicesData';

// Centralized Image Mapping
const serviceImages = {
  "ai-chatbot-development": "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
  "generative-ai-development": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
  "machine-learning-development": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
  "computer-vision-development": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  "nlp-development": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
  "cloud-migration": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  "cloud-support-maintenance": "https://images.unsplash.com/photo-1558494949-ef010bbbb317?auto=format&fit=crop&w=1200&q=80",
  "seo-optimization": "https://images.unsplash.com/photo-1571566888602-ed11e1564756?auto=format&fit=crop&w=1200&q=80",
  "social-media-management": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
  "paid-ads-management": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  "content-creation": "https://images.unsplash.com/photo-1542435503-956c4696c7f4?auto=format&fit=crop&w=1200&q=80",
  "default": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const data = useMemo(() => serviceContent[serviceId], [serviceId]);
  const [activeTab, setActiveTab] = useState(0);

  if (!data) return <Navigate to="/" replace />;

  const tabs = data.customTabs || [
    { title: "Discovery", content: "We dive deep into your business ecosystem. Our process begins with stakeholder interviews, technical audits of your existing infrastructure, and competitive landscape analysis to ensure our strategy aligns perfectly with your revenue goals." },
    { title: "Strategy", content: "We don't just plan; we architect solutions. We define the user journey, select the optimal tech stack, and create a scalable roadmap that balances immediate impact with long-term digital transformation." },
    { title: "Execution", content: "Using a component-based modular architecture, we build high-performance, pixel-perfect solutions. We prioritize clean, maintainable code, rapid iterations, and CI/CD pipelines to keep development agile and transparent." },
    { title: "QA", content: "Quality is non-negotiable. We conduct rigorous multi-stage testing including unit testing, cross-browser compatibility checks, security vulnerability scans, and stress testing to ensure zero downtime and maximum reliability." },
    { title: "Launch", content: "We manage the entire deployment lifecycle. From server configuration and domain mapping to final production smoke testing, we ensure a seamless transition that minimizes risk and gets you live without a hitch." },
    { title: "Growth", content: "Our engagement doesn't end at launch. We provide ongoing performance monitoring, real-time analytics tracking, and scheduled optimization cycles to scale your traffic, engagement, and conversion rates." }
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-slate-950 font-sans">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">{data.title}</h1>
            <p className="text-xl text-slate-600 leading-relaxed">{data.description}</p>
          </div>
          <div className="h-[450px] rounded-[2rem] overflow-hidden shadow-2xl">
            <img src={serviceImages[serviceId] || serviceImages["default"]} alt={data.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <div className="sticky top-28 bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h2 className="text-2xl font-black mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">{data.techStack?.map((t, i) => <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold uppercase tracking-wider">{t}</span>)}</div>
          </div>
        </div>
        <div className="lg:col-span-8">
          <h3 className="text-4xl font-black mb-12">The Journey</h3>
          <div className="space-y-12">{data.process?.map((p, i) => <div key={i} className="group border-l-4 border-slate-100 pl-8 hover:border-slate-950 transition-colors"><span className="text-sm font-black text-slate-400 group-hover:text-slate-950">STEP 0{p.step || i + 1}</span><h4 className="text-2xl font-bold mt-1 mb-2">{p.title}</h4><p className="text-slate-600 leading-relaxed">{p.desc}</p></div>)}</div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-12">{tabs.map((tab, idx) => <button key={idx} onClick={() => setActiveTab(idx)} className={`px-6 py-3 rounded-full font-bold text-sm border transition-all ${activeTab === idx ? 'bg-slate-950 text-white' : 'bg-white border-slate-200 hover:border-slate-400'}`}>{tab.title}</button>)}</div>
          <div className="min-h-[200px] p-10 bg-white rounded-3xl shadow-sm border border-slate-100 text-left"><p className="text-xl font-medium text-slate-800 leading-relaxed">{tabs[activeTab].content}</p></div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-24 bg-slate-950 text-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 text-center">
          <div><h3 className="text-2xl font-bold mb-4">Scalability First</h3><p className="text-slate-400">Our solutions are architected to handle high-traffic environments, ensuring your digital presence grows seamlessly.</p></div>
          <div><h3 className="text-2xl font-bold mb-4">Security Focused</h3><p className="text-slate-400">We implement enterprise-grade security protocols, protecting your data and user privacy from the ground up.</p></div>
          <div><h3 className="text-2xl font-bold mb-4">Result-Driven</h3><p className="text-slate-400">Every decision is measured against your KPIs, ensuring we focus on what drives real growth and revenue.</p></div>
        </div>
      </section>

      {/* Animated CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-32 text-center px-6 bg-slate-50"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tighter">Ready to transform your digital identity?</motion.h2>
          <motion.p className="text-xl text-slate-600 mb-10">Let's discuss how we can build a tailor-made solution for your business.</motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-950 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-[#ee3444] transition-colors shadow-xl"
          >
            Book Your Strategy Session
          </motion.button>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-t border-slate-100">
        <h2 className="text-4xl font-black mb-12">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {data.faqs?.map((faq, index) => (
            <div key={index} className="border-b border-slate-100 pb-8">
              <h4 className="text-xl font-bold mb-3">{faq.q}</h4>
              <p className="text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LegalManagement = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { value: "40%", label: "Reduction in Document Drafting Time" },
    { value: "99.99%", label: "Cloud Encryption System Uptime" },
    { value: "15,000+", label: "Corporate Legal Matters Automated" },
    { value: "0%", label: "Regulatory Compliance Failure Rate" }
  ];

  const features = [
    { title: "Case Matter Tracking", desc: "Manage court dates, legal digital case files, historic research archives, and opposition defense profiles in a centralized secure enterprise vault." },
    { title: "Document Lifecycle Automation", desc: "Draft complex corporate contracts, legal notices, NDAs, and partnership resolutions instantly using AI-driven intelligent templates." },
    { title: "Legal Billing & Timesheets", desc: "Precision tracking for lawyers' billable hours with automated legal invoicing workflows, multi-currency support, and trust account audits." },
    { title: "Compliance & Risk Audit", desc: "Automate statutory compliance trackers, corporate governance checkpoints, and mitigate multi-jurisdictional legal operational risks." },
    { title: "Client Portal Sync", desc: "Securely share real-time case dockets, cross-examination updates, and execute legally binding digital signatures seamlessly." },
    { title: "AI Advanced Search Analytics", desc: "Natural Language Processing (NLP) search engines optimized across internal firm archives, past precedents, and active judicial filings." }
  ];

  const useCases = [
    { sector: "Corporate Legal Departments", application: "Contract lifecycle management, intellectual property tracking, dynamic board governance, and automated corporate compliance tracking dashboards." },
    { sector: "Independent Law Firms", application: "High-volume litigation planning, legal timesheet billing optimization, secure multi-client data chambers, and legal research collaboration vaults." },
    { sector: "Financial Compliance Squads", application: "Anti-money laundering (AML) tracking, regulatory reporting audits, dynamic risk matrix scoring, and instantaneous policy enforcement alerts." }
  ];

  const techSpecs = [
    { category: "Security Architecture", details: "AES-256 end-to-end data encryption at rest and in transit, TLS 1.3 protocols, and mandatory multi-factor hardware handshake authentication." },
    { category: "Integration Capacity", details: "Restful API engine natively compatible with Microsoft Office 365, Google Workspace, Adobe Sign, Slack, and legacy ERP frameworks." },
    { category: "Deployment Model", details: "Available via secure Multi-Tenant Public Cloud, Dedicated Sovereign Single-Tenant Cloud, or highly secure On-Premises Bare Metal architecture." }
  ];

  const steps = [
    { num: "01", title: "Intake & Triage", desc: "Capture structured legal queries, execute instant conflict-of-interest checks, and auto-route case files to specialized legal subject experts." },
    { num: "02", title: "Strategy & Drafting", desc: "Collaborate on structural legal briefs, manage secure version controls, analyze historical judicial precedents, and lock secure legal discovery data." },
    { num: "03", title: "Execution & Resolution", desc: "Track automated real-time court dockets, execute blockchain-grade immutable digital signatures, and successfully archivate closed legal cases." }
  ];

  const faqs = [
    { q: "What is an enterprise Legal Management System (LMS)?", a: "An enterprise Legal Management System is a centralized software architecture designed to streamline operations for law firms and corporate legal departments. It integrates case tracking, automated document drafting, legal billing, and compliance monitoring into a secure digital workflow." },
    { q: "How does the system ensure data security and regulatory compliance?", a: "The software employs military-grade AES-256 encryption protocols for data at rest and in transit. It adheres strictly to global compliance standards including GDPR, HIPAA, and ISO 27001, featuring automated audit trails and role-based access permissions to prevent unauthorized leaks." },
    { q: "Can this platform integrate with existing ERP solutions and accounting tools?", a: "Yes, our Legal Management platform features a comprehensive RESTful API layer. This enables native, bidirectional data syncing with enterprise ERP platforms, customer relationship managers (CRMs), and industry-standard accounting tools like QuickBooks, SAP, and Oracle." },
    { q: "Does it support automated document generation for complex legal contracts?", a: "Absolutely. The system features a powerful Document Automation engine. Users can convert standard legal templates into smart, dynamic forms that auto-populate case data, reducing the manual drafting lifecycle for contracts and briefs by up to 40%." }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 selection:bg-[#ee3444]/10">
      
      {/* 1. HERO SECTION (SEO Optimized H1) */}
      <section className="relative overflow-hidden py-20 lg:py-32 bg-slate-50">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#ee3444]/5 blur-[120px]" />
          <div className="absolute top-1/2 -left-40 w-[600px] h-[600px] rounded-full bg-[#e1b054]/5 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-start"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#ee3444]" />
                <span className="text-[11px] font-black tracking-[0.3em] text-slate-400 uppercase">Enterprise Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 leading-[1.1] mb-6">
                Next-Gen <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1b054] via-[#ee3444] to-[#75b0d2]">
                  Legal Management System
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
                Optimize corporate legal operations. Streamline complex case tracking, automate contract lifecycle workflows, log precision billing timesheets, and eliminate regulatory compliance risks on a highly audited enterprise framework.
              </p>
              <button className="font-black uppercase text-[12px] bg-slate-950 text-white rounded-full px-8 py-4 hover:bg-slate-900 transition-all shadow-xl shadow-slate-950/10 hover:scale-[1.02]">
                Request Architecture Demo
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-[350px] sm:h-[450px] rounded-[3rem] overflow-hidden shadow-2xl relative border border-slate-100"
            >
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80" 
                alt="Enterprise Grade Corporate Legal Management Software Layout" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. STATS / METRICS SECTION */}
      <section className="py-12 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center lg:text-left flex flex-col items-center lg:items-start"
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight mb-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee3444] to-[#e1b054]">
                    {stat.value}
                  </span>
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-short max-w-[220px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE MODULES SECTION */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-4">Architectural Blueprint & Modules</h2>
            <p className="text-slate-600 text-sm sm:text-base">Engineered specifically for corporate legal councils, law firms, and defense squads demanding extreme analytical precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {features.map((f, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-100 p-8 rounded-[2rem] hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col items-start group"
              >
                <div className="text-xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#e1b054] via-[#ee3444] to-[#75b0d2] group-hover:scale-110 transition-transform duration-300">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-black text-slate-950 tracking-tight mb-3">{f.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. INDUSTRY USE-CASES SECTION (NEW KEYWORD DETAILED VALUE) */}
      <section className="py-20 lg:py-32 bg-slate-950 text-white rounded-[3rem] sm:rounded-[4rem] mx-4 sm:mx-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#e1b054] uppercase block mb-3">Versatile Target Operations</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">Tailored Operational Use Cases</h2>
            <p className="text-slate-400 text-sm sm:text-base">Discover how our specialized legal parameters map across your custom industry vertical.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {useCases.map((uc, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-black text-[#75b0d2] mb-4 tracking-tight">{uc.sector}</h4>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{uc.application}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WORKFLOW PROCESS PIPELINE */}
      <section className="py-20 lg:py-32 bg-slate-50/70 mt-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#75b0d2]" />
                <span className="text-[11px] font-black tracking-[0.3em] text-slate-400 uppercase">Operational Flow</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-4">System Execution Lifecycle</h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our modern software workflow ensures completely frictionless interaction monitoring across judicial data processing chambers.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-start bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                  <span className="text-4xl font-black text-slate-100 absolute top-6 right-6 select-none">{step.num}</span>
                  <h4 className="text-base font-black text-slate-950 uppercase tracking-wide mb-3 mt-4">{step.title}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. TECHNICAL SPECIFICATIONS MODULE (NEW FOR HIGH-VALUE SEARCH INDEXING) */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-4">Technical Specifications Architecture</h2>
            <p className="text-slate-600 text-sm sm:text-base">Deep architectural insights built for tech leads, security executives, and compliance auditors.</p>
          </div>

          <div className="border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
              {techSpecs.map((spec, idx) => (
                <div key={idx} className="p-8 sm:p-12 bg-white flex flex-col items-start">
                  <span className="w-8 h-1 bg-[#ee3444] rounded-full mb-6" />
                  <h4 className="text-base font-black text-slate-950 uppercase tracking-wide mb-3">{spec.category}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{spec.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. ENTERPRISE GRADE SECURITY CTA BANNER */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="w-full bg-slate-950 text-white rounded-[3rem] p-8 sm:p-16 relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-[#ee3444]/30 blur-[100px]" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase block mb-3">Defense-Grade Auditing</span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-[1.15] mb-4">Impenetrable Security for Total Corporate Confidentiality.</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">Equipped with automated AES-256 cloud encryption, multi-tenant network partitioning, and global digital audit tracking controllers.</p>
            </div>
            <div className="relative z-10 whitespace-nowrap">
              <button className="font-black uppercase text-[12px] tracking-wider bg-white text-slate-950 rounded-full px-8 py-4 hover:bg-slate-100 transition-all shadow-xl hover:scale-[1.02]">Deploy Secure Instance</button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION (CRITICAL FOR ON-PAGE SEO SCHEMA RATING) */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#ee3444] uppercase block mb-3">FAQ Knowledge Vault</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-sm sm:text-base">Get instantaneous clarity on architectural protocols, integration speeds, and technical safety standards.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className="border border-slate-100 rounded-2xl overflow-hidden bg-white transition-colors duration-300">
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-slate-950 text-sm sm:text-base tracking-tight">{faq.q}</span>
                    <span className={`text-xl font-bold ml-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ee3444]' : 'text-slate-400'}`}>
                      ▼
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 border-t border-slate-50 text-slate-500 text-xs sm:text-sm leading-relaxed bg-white">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default LegalManagement;
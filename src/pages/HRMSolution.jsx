import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HRMSolution = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const stats = [
    { value: "100%", label: "Automated Payroll Calculations" },
    { value: "10x", label: "Faster Leave & Shift Approval Velocity" },
    { value: "0%", label: "Compliance & Tax Audit Discrepancies" },
    { value: "24/7", label: "Self-Service Employee Portal Access" }
  ];

  const features = [
    { num: "01", title: "Smart Payroll Architecture", desc: "Execute multi-tier regional salary disbursements with absolute precision. Automated calculation metrics for localized taxes, provident funds, insurance brackets, and custom bonuses with absolute zero manual verification." },
    { num: "02", title: "Dynamic Shift & Roster Engine", desc: "Build intricate organizational schedules with intelligent shift swapping, cross-department allocation constraints, automated over-time logging loops, and real-time operational roster syncing." },
    { num: "03", title: "Automated Attendance Systems", desc: "Sync direct data streams from biometric field terminals, geofenced mobile check-ins, central remote tracking hooks, and instant missing punch correction processing queues." },
    { num: "04", title: "Performance & Appraisal Metrics", desc: "Govern company OKRs, structure structured key-results matrices, track historical evaluation distributions, deploy custom multi-tier reviews, and plot accurate continuous growth vectors." },
    { num: "05", title: "Employee Self-Service Node", desc: "Empower staff to securely view itemized payslips, submit complex expense reimbursements, initiate leave requests, modify personal bio-data profiles, and audit individual attendance history." },
    { num: "06", title: "Lifecycle & Onboarding Control", desc: "Automate technical asset handovers, coordinate compliance documentation sign-offs, manage offboarding exit clearance pipelines, and archive institutional workspace history safely." }
  ];

  const useCases = [
    { sector: "Enterprise Tech Corporates", application: "Complex global tax matching layers, multi-country standardizations, automated agile asset handovers, and performance evaluation pipelines linked directly to technical OKR nodes." },
    { sector: "Manufacturing & Factory Plants", application: "High-volume rotational roster allocation matrices, multi-tiered overtime billing calculation setups, geo-independent biometric synchronization loops, and strict worker labor compliance audits." },
    { sector: "Distributed Remote Structures", application: "Secure IP-whitelisted virtual check-ins, automated currency conversion layers, flexible global time-zone roster mapping, and unified collaborative workspace resource hubs." }
  ];

  const techSpecs = [
    { category: "Security & Encryption Protocols", details: "Enterprise-grade AES-256 data payload encryption, secure multi-factor authentication (MFA) constraints, role-based granular access control (RBAC), and audited access log archives." },
    { category: "Integration Framework Interfaces", details: "Bi-directional data loops supporting external biometric hardware integrations, enterprise accounting ledgers, communication hooks (Slack/Teams), and global banking network arrays." },
    { category: "Compliance & Localization Architectures", details: "Dynamically updatable legal rules structures to automatically map state labor laws, local income tax brackets, unified provident fund codes, and statutory reporting forms." }
  ];

  const steps = [
    { num: "I", title: "Capture Data", desc: "Employee workflows trigger real-time attendance logs, biometric parameters, expense submittals, or appraisal check-ins into safe database queues." },
    { num: "II", title: "Process Engine", desc: "The analytical core evaluates current parameters against compliance rules, applying specific multi-tier payroll rules and generating structural records." },
    { num: "III", title: "Disburse & Report", desc: "Secure cryptographic handshakes push automated bank transfers, dispatch individual ledger slips, and update centralized management analytics." }
  ];

  const faqs = [
    { q: "How secure is employee data within this HRM system architecture?", a: "Our architecture enforces a rigorous zero-trust framework. All personal files, payroll matrices, and legal identification structures are encrypted both at rest and in transit using advanced AES-256 protocols. Role-Based Access Control (RBAC) locks down views so administrators only access explicitly approved configuration modules." },
    { q: "Can the platform support multi-currency payroll frameworks for remote workers?", a: "Yes, the core data layer features an integrated multi-currency localization system. It tracks live conversion variables, processes baseline base rates into regional payouts, and calculates cross-border compliance values to keep records clean for international audits." },
    { q: "What happens if biometric hardware loses connection with the main server?", a: "Local biometric terminal endpoints pool data safely in an offline state. The instant the network layer regains connectivity, micro-sync workers parse background queues, resolve entry conflicts, and populate central attendance sheets smoothly without data loss." },
    { q: "Does the appraisal engine support anonymous peer review workflows?", a: "Absolutely. The performance module allows complete layout control over reviews. Administrators can deploy standard 360-degree appraisal parameters, anonymize individual peer evaluations, block metadata tracking, and export finalized visual appraisal curves securely." }
  ];

  // Animation Framework Configs
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: "-100px" }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 pt-24 selection:bg-[#ee3444]/10 overflow-hidden">
      
      {/* 1. PREMIUM ASYMMETRIC HERO SECTION */}
      <section className="relative py-28 lg:py-40 border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white">
        {/* Animated Ambient Orbs */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1], 
              x: [0, 30, 0], 
              y: [0, -20, 0] 
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#ee3444]/5 blur-[160px]" 
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1], 
              x: [0, -40, 0], 
              y: [0, 30, 0] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-slate-200/50 blur-[160px]" 
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-[11px] font-black tracking-[0.4em] text-[#ee3444] uppercase bg-white px-5 py-2.5 rounded-full border border-slate-200/80 shadow-sm"
            >
              Enterprise Workforce Hub
            </motion.span>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mt-8 mb-6 max-w-5xl mx-auto leading-[1.05] text-slate-950">
              Optimize Workforce Lifecycle Management with{' '}
              <span 
                className="text-transparent bg-clip-text relative"
                style={{
                  backgroundImage: 'linear-gradient(to right, #e1b054 0%, #d24a8a 20%, #ee3444 40%, #75b0d2 60%, #7361a7 80%, #f1574d 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Quantum HRM
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-[4px] bg-[#ee3444]/20 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.6, duration: 1 }}
                />
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
              Automate accurate payroll calculations. Govern intricate workforce rosters, streamline employee requests, and maintain pristine compliance reporting parameters automatically.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
              <motion.button 
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto font-black uppercase text-[12px] tracking-wider bg-slate-950 text-white rounded-xl px-9 py-4 hover:bg-slate-900 transition-colors shadow-xl shadow-slate-950/10"
              >
                Initialize Setup Audit
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto font-black uppercase text-[12px] tracking-wider bg-white text-slate-900 rounded-xl px-9 py-4 hover:bg-slate-50 transition-colors border border-slate-200"
              >
                System Architecture Specs
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. HUD-STYLE ANIMATED METRICS LAYER */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50/50 border border-slate-100 p-8 rounded-3xl"
          >
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,1)', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.04)' }}
                className="flex flex-col items-start p-6 border-l-2 border-[#ee3444]/40 rounded-r-2xl transition-all duration-300"
              >
                <span className="text-3xl sm:text-4xl font-black text-slate-950 mb-1 tracking-tight">{stat.value}</span>
                <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. CORE FEATURES GRID */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-2xl mb-24">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#75b0d2] uppercase block mb-3">Enterprise Modularity Engine</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">Core Module Infrastructure</h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((f, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.01 }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col justify-between hover:border-slate-200 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
              >
                <div>
                  <div className="text-xs font-black text-slate-400 tracking-widest uppercase mb-6 group-hover:text-[#ee3444] transition-colors duration-300">
                    Module Asset {f.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight text-slate-950">{f.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. PREMIUM SECTOR BLOCKS (SOLID DEEP BLACK TEXT SECTORS) */}
      <section className="py-24 lg:py-36 bg-slate-50 border-y border-slate-100 rounded-[3rem] lg:rounded-[5rem] mx-4 sm:mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-950 uppercase block mb-3">Target Ecosystems</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 mb-4">Vertical Scaling Deployments</h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Our HRM core customizes database rules and interface parameters across complex industry sectors seamlessly to scale workforce potential.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {useCases.map((uc, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ x: 10, scale: 1.005 }}
                  className="bg-white border border-slate-100 p-8 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h4 className="text-xl font-black text-slate-950 tracking-tight min-w-[240px]">
                    {uc.sector}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xl">{uc.application}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. MINIMAL LINEAR TIMELINE PROCESS */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-24">
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 mb-4">The Workforce Management Cycle</h2>
            <p className="text-slate-500 text-xs sm:text-sm">Real-time optimization pipelines running from entry event triggers directly down to payroll compliance settlement balances.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative"
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="relative flex flex-col items-start border-l border-slate-100 pl-6 lg:border-l-0 lg:pl-0 group"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="text-5xl font-black text-slate-100 group-hover:text-[#ee3444]/20 transition-colors duration-300 mb-4 select-none"
                >
                  {step.num}
                </motion.div>
                <h4 className="text-lg font-bold text-slate-950 tracking-tight mb-2">{step.title}</h4>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. TECHNICAL SYSTEM AUDIT CARD */}
      <section className="py-24 lg:py-36 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mb-20">
            <span className="text-[10px] font-black tracking-[0.3em] text-[#ee3444] uppercase block mb-3">Enterprise Protocols</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">Technical Architecture Specifications</h2>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="bg-white border border-slate-100 rounded-3xl overflow-hidden p-6 sm:p-12 shadow-sm relative"
          >
            <div className="space-y-12 relative z-10">
              {techSpecs.map((spec, idx) => (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-12 pb-12 border-b border-slate-100 last:pb-0 last:border-b-0">
                  <h4 className="text-sm font-black text-slate-950 uppercase tracking-wider">{spec.category}</h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{spec.details}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. IMMERSIVE SOLID CTA CONTROL */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            whileHover={{ scale: 0.995 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-slate-950 text-white rounded-3xl p-8 sm:p-16 text-center relative overflow-hidden flex flex-col items-center"
          >
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <div className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full bg-[#ee3444]/30 blur-[100px]" />
            </div>
            <span className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase block mb-4">Enterprise Scaling Deployments</span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight max-w-2xl mb-4 leading-snug">Ready to Eradicate Human Resource Friction & Payroll Gaps?</h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed mb-8">Deploy your dedicated HRM instances. Accelerate organizational workflow processing speeds while anchoring modern biometric metrics securely.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="font-black uppercase text-[12px] tracking-wider bg-white text-slate-950 rounded-xl px-10 py-4 hover:bg-slate-100 transition-all shadow-xl"
            >
              Initialize Enterprise Demo Instance
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ INTERACTIVE MODULE */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#ee3444] uppercase block mb-3">FAQ Database Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <motion.div 
                  key={idx} 
                  {...fadeInUp}
                  className="border border-slate-100 rounded-2xl overflow-hidden bg-white shadow-sm"
                >
                  <button 
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50 transition-colors duration-300"
                  >
                    <span className="font-bold text-slate-950 text-sm sm:text-base tracking-tight">{faq.q}</span>
                    <motion.span 
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`text-sm font-bold ml-4 ${isOpen ? 'text-[#ee3444]' : 'text-slate-400'}`}
                    >
                      ▼
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-6 pt-0 text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-slate-50 bg-slate-50/30">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HRMSolution;
import React, { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiShield, FiFileText, FiLock, FiGlobe, FiAlertCircle, FiMail, FiArrowRight } from "react-icons/fi";

export default function LightCorporateTerms() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sections = [
    { id: "scope", title: "Scope of Services", icon: <FiGlobe /> },
    { id: "user", title: "User Responsibilities", icon: <FiShield /> },
    { id: "ip", title: "Intellectual Property", icon: <FiLock /> },
    { id: "liability", title: "Limitation of Liability", icon: <FiAlertCircle /> },
    { id: "governing", title: "Governing Law", icon: <FiFileText /> },
  ];

  return (
    <section className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ===== TOP PROGRESS BAR ===== */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* ===== BACKGROUND DECOR ===== */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="relative mb-20 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <FiShield className="animate-pulse" /> Legal & Compliance
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
            Terms & <span className="text-blue-600">Conditions.</span>
          </h1>
          
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-slate-500 font-medium">
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" /> Active Protocol
            </p>
            <p>Last Modified: <span className="text-slate-900">July 15, 2025</span></p>
            <p>Ref: <span className="text-slate-900 underline decoration-blue-200">FK-LEGAL-2025</span></p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-start">
          
          {/* ===== SIDEBAR NAVIGATION ===== */}
          <aside className="hidden lg:block sticky top-32">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm shadow-blue-100/50">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 px-2">Navigation Map</p>
              <div className="space-y-1">
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-all text-sm font-semibold border border-transparent"
                  >
                    <span className="text-lg opacity-40">{item.icon}</span>
                    {item.title}
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* ===== MAIN LEGAL CONTENT ===== */}
          <div className="space-y-16">
            
            <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
              <p className="text-xl text-slate-600 leading-relaxed font-light mb-12 italic">
                These terms constitute a legally binding agreement between you and <span className="text-slate-900 font-bold">FKode Solution</span>. 
                By utilizing our engineering frameworks, you signify your unreserved acceptance of these operational boundaries.
              </p>

              <TermsBlock id="scope" title="01. Scope of Digital Services">
                FKode Solution specializes in full-cycle software architecture, including scalable web platforms, 
                cross-platform mobile ecosystems, and technical mentorship. Our engagement is defined by milestone-driven 
                deliverables as outlined in the signed Project Charter.
              </TermsBlock>

              <TermsBlock id="user" title="02. User Conduct & Security">
                System integrity is paramount. Users are strictly prohibited from attempting unauthorized 
                penetration testing, scraping proprietary data structures, or deploying automated bots 
                without written consensus from our security division.
              </TermsBlock>

              <TermsBlock id="ip" title="03. Ownership of Intellectual Assets">
                Unless otherwise specified in a custom contract, all UI blueprints, source code logic, 
                and brand iconography remain the exclusive property of FKode Solution. Any redistribution 
                without a valid license will result in immediate legal cease-and-desist procedures.
              </TermsBlock>

              <TermsBlock id="liability" title="04. Responsibility Disclaimer">
                Our systems are engineered for 99.9% uptime; however, FKode Solution is not liable for 
                unforeseen downtime, third-party API failures, or data loss occurring outside our 
                direct server infrastructure.
              </TermsBlock>

              <TermsBlock id="governing" title="05. Regulatory Jurisdiction">
                The operations of FKode Solution are governed by the IT laws of India. Any arbitration 
                or legal disputes shall be handled within the jurisdiction of the courts in Tamil Nadu.
              </TermsBlock>
            </div>

            {/* ===== CONTACT HELP DESK ===== */}
            <div className="bg-blue-600 rounded-[2rem] p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">Need legal clarification?</h3>
                <p className="text-blue-100 text-sm opacity-80">Our legal desk is available for all corporate inquiries.</p>
              </div>

              <a 
                href="mailto:fkode.careers@gmail.com"
                className="relative z-10 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-50 transition-all shadow-xl shadow-blue-900/20"
              >
                Email Support <FiArrowRight />
              </a>
            </div>

            <p className="text-center text-xs font-bold text-slate-400 tracking-[0.3em] uppercase">
              © 2025 FKode Solution • Engineering the Future
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== REUSABLE LEGAL COMPONENT ===== */
function TermsBlock({ id, title, children }) {
  return (
    <motion.div 
      id={id}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="scroll-mt-32 mb-12 last:mb-0"
    >
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{title}</h2>
      </div>
      <div className="pl-6 border-l-2 border-blue-100 text-slate-600 leading-relaxed text-lg font-light">
        {children}
      </div>
    </motion.div>
  );
}
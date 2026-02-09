import React from "react";
import { motion } from "framer-motion";
import { 
  FiEye, FiLock, FiDatabase, FiUserCheck, 
  FiShield, FiInfo, FiMail, FiPhoneCall, FiChevronRight 
} from "react-icons/fi";

export default function PrivacyPolicy() {
  const sections = [
    { title: "Information We Collect", icon: <FiDatabase />, id: "collect" },
    { title: "Use of Information", icon: <FiEye />, id: "use" },
    { title: "Data Security", icon: <FiLock />, id: "security" },
    { title: "Sharing Policies", icon: <FiUserCheck />, id: "sharing" },
  ];

  return (
    <section className="min-h-screen bg-[#fcfdfe] text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* ===== HEADER SECTION ===== */}
      <div className="relative bg-white border-b border-slate-200 pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
              Security & Privacy Hub
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6">
              Privacy <span className="text-blue-600">Protocol.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-2xl leading-relaxed">
              Transparent data management is the core of FKode Solution. We engineer 
              trust through rigorous security standards and open communication.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[320px_1fr] gap-16">
          
          {/* ===== SIDEBAR NAV ===== */}
          <aside className="hidden lg:block sticky top-32 h-fit">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm shadow-blue-100/20">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Table of Contents</h4>
              <nav className="space-y-4">
                {sections.map((s, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer font-semibold text-sm group">
                    <span className="p-2 rounded-lg bg-slate-50 group-hover:bg-blue-50 transition-colors">{s.icon}</span>
                    {s.title}
                  </div>
                ))}
              </nav>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <div className="p-5 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                  <FiShield className="text-2xl mb-3" />
                  <p className="text-xs font-bold uppercase mb-1">Data Status</p>
                  <p className="text-sm font-medium opacity-90 text-blue-50">Fully Compliant & Encrypted</p>
                </div>
              </div>
            </div>
          </aside>

          {/* ===== MAIN CONTENT ===== */}
          <div className="space-y-12">
            
            <div className="prose prose-slate max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed font-light mb-16 italic border-l-4 border-blue-500 pl-8">
                At <span className="text-slate-900 font-bold font-sans not-italic">FKode Solution</span>, 
                privacy isn't just a policy—it's a foundational feature of our software architecture. 
                Below is a breakdown of how we handle your digital footprints.
              </p>

              <PolicySection title="01. Information We Collect" icon={<FiDatabase />}>
                We collect personal identifiers such as your full name, professional email address, 
                and communication logs. Our infrastructure also logs technical metadata including 
                geographical data, device hardware profiles, and interaction timestamps to ensure 
                optimized service delivery.
              </PolicySection>

              <PolicySection title="02. Use of Information" icon={<FiEye />}>
                Data is utilized exclusively for service synchronization, user authentication, and 
                enterprise communication. We perform anonymized behavioral analytics to refine our 
                UI/UX patterns, ensuring a friction-less experience for all our stakeholders.
              </PolicySection>

              <PolicySection title="03. Data Security Measures" icon={<FiLock />}>
                Our security stack utilizes AES-256 bit encryption at rest and TLS 1.3 for data 
                in transit. We conduct regular automated penetration tests and maintain restricted 
                access logs to prevent unauthorized data exposure.
              </PolicySection>

              <PolicySection title="04. Sharing & Disclosure" icon={<FiUserCheck />}>
                FKode Solution strictly prohibits the monetization of user data. We do not sell, 
                trade, or lease your personal information. Disclosure only occurs during legal 
                mandates or to facilitate critical third-party integrations as defined in your SLA.
              </PolicySection>
              
              <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-200 mt-20">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                   <FiInfo className="text-blue-600" /> Your Digital Rights
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Under global data protection standards, you maintain the right to data portability, 
                  rectification, and the "Right to be Forgotten." Contact our data protection officer 
                  to initiate these protocols.
                </p>
              </div>
            </div>

            {/* ===== CONTACT COMPONENT ===== */}
<div className="flex flex-col md:flex-row items-stretch gap-6 mt-20">
  
  {/* ===== EMAIL ===== */}
  <a
    href="mailto:fkode.careers@gmail.com"
    className="flex-1 p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 transition-all group cursor-pointer"
  >
    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <FiMail size={24} />
    </div>
    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
      Email us
    </p>
    <p className="text-slate-900 font-bold text-lg">
      fkode.careers@gmail.com
    </p>
  </a>

  {/* ===== PHONE ===== */}
  <a
    href="tel:+919150282859"
    className="flex-1 p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 transition-all group cursor-pointer"
  >
    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <FiPhoneCall size={24} />
    </div>
    <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">
      Call Support
    </p>
    <p className="text-slate-900 font-bold text-lg">
      +91 91502 82859
    </p>
  </a>

</div>


            <div className="pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.4em]">
                © 2025 FKode Solution • Secure Infrastructure
              </p>
              <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
  <a
    href="/TermsConditions"
    className="hover:text-blue-600 cursor-pointer"
  >
    Terms
  </a>

  <a
    href="/PrivacyPolicy"
    className="hover:text-blue-600 cursor-pointer"
  >
    Privacy
  </a>

  <a
    href="/CookiePolicy"
    className="hover:text-blue-600 cursor-pointer"
  >
    Cookies
  </a>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== REUSABLE POLICY SECTION ===== */
function PolicySection({ title, icon, children }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="mb-16 last:mb-0"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-100">
          {icon}
        </div>
        <h2 className="text-2xl font-black text-slate-900 tracking-tight">{title}</h2>
      </div>
      <div className="text-slate-500 leading-relaxed text-lg font-light">
        {children}
      </div>
    </motion.div>
  );
}
import React, { useRef, useState } from "react";
import { FiArrowRight, FiSend, FiCpu, FiGlobe, FiTrendingUp, FiShield, FiCheckCircle } from "react-icons/fi";

export default function CareerPage() {
  const formRef = useRef(null);
  const [role, setRole] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const applyScroll = (job) => {
    setRole(job);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleApply = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
      
      {/* HERO & ABOUT SPLIT - NO GAP */}
      <section className="grid lg:grid-cols-2 min-h-screen">
        <div className="bg-blue-900 text-white p-12 md:p-24 flex flex-col justify-center items-start">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-8 opacity-80">Career Portal</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-10">
            Join <br /> FKode.
          </h1>
          <p className="max-w-md text-blue-100 text-sm font-medium leading-relaxed mb-12">
            Build high-performance SaaS, cloud automation, and enterprise engineering 
            solutions for a global client base. We don't just code; we architect the future.
          </p>
          <button 
            onClick={() => applyScroll("")}
            className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition-all"
          >
            Current Openings <FiArrowRight />
          </button>
        </div>
        <div className="bg-white p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-900 mb-6">Our Ecosystem</h2>
          <div className="space-y-12">
            <p className="text-3xl font-bold tracking-tighter leading-tight text-slate-900 italic">
              "We operate at the intersection of high-velocity engineering and 
              strategic business transformation."
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              <div>
                <h4 className="text-[10px] font-black uppercase mb-2">Stack</h4>
                <p className="text-xs text-slate-500 font-medium">React, Node.js, AWS, Kubernetes, PostgreSQL</p>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase mb-2">Impact</h4>
                <p className="text-xs text-slate-500 font-medium">50+ Global Enterprises & Scaling Startups</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE STATS & BENEFITS - TIGHT GRID */}
      <section className="grid md:grid-cols-4 bg-slate-950 text-white">
        {[
          { icon: <FiGlobe />, title: "Remote First", desc: "Global work culture." },
          { icon: <FiCpu />, title: "Premium Tech", desc: "M3 MacBooks & Tools." },
          { icon: <FiTrendingUp />, title: "Growth", desc: "Fast-track promotions." },
          { icon: <FiShield />, title: "Security", desc: "Enterprise stability." },
        ].map((item, i) => (
          <div key={i} className="p-12 border-r border-b border-white/10 hover:bg-blue-900 transition-colors group">
            <div className="text-2xl mb-6 text-blue-500 group-hover:text-white transition-colors">{item.icon}</div>
            <h3 className="text-xs font-black uppercase tracking-widest mb-2">{item.title}</h3>
            <p className="text-[10px] text-slate-500 group-hover:text-blue-100 uppercase font-bold">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* HIRING PROCESS - COMPACT FULL WIDTH */}
      <section className="bg-slate-50 py-24 px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-12 text-center">Interview Workflow</h2>
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {[
              { n: "01", t: "Portfolio Review", d: "GitHub & Project evaluation." },
              { n: "02", t: "Deep Tech", d: "Architecture & Problem solving." },
              { n: "03", t: "Culture Fit", d: "Founder & Team alignment." },
              { n: "04", t: "Onboarding", d: "Hardware setup & Welcome." },
            ].map((s, i) => (
              <div key={i} className="flex-1">
                <span className="block text-4xl font-black text-blue-200 mb-4">{s.n}</span>
                <h4 className="text-[11px] font-black uppercase tracking-widest mb-2 text-slate-900">{s.t}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOBS & FORM - SPLIT CONTENT - NO GAP */}
      <section className="grid lg:grid-cols-2 border-t border-slate-100">
        {/* Left: Openings List */}
        <div className="p-12 md:p-24 border-r border-slate-100">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 italic">Open Roles</h2>
          <div className="space-y-1">
            {[
              { role: "Senior Frontend Engineer", team: "Engineering", loc: "Remote" },
              { role: "Backend Architect", team: "Cloud", loc: "Hybrid" },
              { role: "DevOps Engineer", team: "Infrastructure", loc: "USA / India" },
              { role: "UI/UX Product Designer", team: "Design", loc: "Remote" },
            ].map((j, i) => (
              <div 
                key={i} 
                onClick={() => applyScroll(j.role)}
                className="group p-6 -mx-6 hover:bg-blue-600 transition-all cursor-pointer flex justify-between items-center"
              >
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-tight group-hover:text-white transition-colors">{j.role}</h4>
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-200 transition-colors">{j.team} • {j.loc}</p>
                </div>
                <FiArrowRight className="text-slate-300 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Application Form */}
        <div ref={formRef} className="p-12 md:p-24 bg-white">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-12">Apply Now</h2>
          {isSubmitted ? (
            <div className="bg-blue-50 p-12 text-center rounded-2xl">
              <FiCheckCircle className="text-4xl text-blue-600 mx-auto mb-4" />
              <h3 className="text-xs font-black uppercase tracking-widest">Success</h3>
              <p className="text-[11px] text-slate-500 mt-2">We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleApply} className="space-y-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="border-b border-slate-200 py-2 focus-within:border-blue-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Name</label>
                  <input required className="w-full bg-transparent outline-none text-xs py-1 font-bold" />
                </div>
                <div className="border-b border-slate-200 py-2 focus-within:border-blue-600 transition-all">
                  <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Email</label>
                  <input required type="email" className="w-full bg-transparent outline-none text-xs py-1 font-bold" />
                </div>
              </div>
              <div className="border-b border-slate-200 py-2 focus-within:border-blue-600 transition-all">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">Role Interested In</label>
                <input required value={role} onChange={(e)=>setRole(e.target.value)} className="w-full bg-transparent outline-none text-xs py-1 font-bold" />
              </div>
              <div className="border-b border-slate-200 py-2 focus-within:border-blue-600 transition-all">
                <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest block">GitHub / Portfolio Link</label>
                <input required className="w-full bg-transparent outline-none text-xs py-1 font-bold" />
              </div>
              <button className="w-full bg-blue-900 text-white py-5 font-black uppercase tracking-[0.3em] text-[10px] hover:bg-slate-950 transition-all flex justify-center items-center gap-4">
                Send Application <FiSend />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER INFO - NO GAP */}
      <footer className="bg-slate-950 text-white p-12 text-center border-t border-white/5">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-500">
          FKode Solutions • 2026 • Building Global Standards
        </p>
      </footer>
    </div>
  );
}
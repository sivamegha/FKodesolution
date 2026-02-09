import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";
import { Link } from "react-router-dom";
import servicesImg from "../pictures/service-img.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function FKodeStory() {
  const sectionRef = useRef(null);

  const stats = useMemo(() => [
    { value: "100", suffix: "+", label: "Client Engagements" },
    { value: "07", suffix: " Days", label: "MVP Protocol" },
    { value: "99", suffix: "%", label: "Reliability" },
    { value: "24", suffix: "/7", label: "Global Support" },
  ], []);

  const capabilities = [
    { title: "Infrastructure Engineering", desc: "Building high-available distributed systems that handle millions of requests with zero latency.", icon: "🌐" },
    { title: "Strategic Consulting", desc: "Expert technical roadmaps designed to align with long-term business and revenue objectives.", icon: "💎" },
    { title: "Legacy Modernization", desc: "Refactoring and migrating outdated systems into modern, scalable cloud architectures.", icon: "⚙️" },
    { title: "Security Governance", desc: "Enterprise-grade security protocols integrated into every layer of the software lifecycle.", icon: "🛡️" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".floating-blob", {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(-15, 15)",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      stats.forEach((s, i) => {
        gsap.fromTo(`.stat-${i}`, { innerText: 0 }, {
          innerText: s.value,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: { trigger: ".stats-section", start: "top 90%" },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [stats]);

  return (
    <section ref={sectionRef} className="relative py-20 bg-[#f8faff] text-slate-900 overflow-hidden font-sans">
      
      {/* --- REINFORCED GEOMETRIC BACKGROUND --- */}
      <div className="floating-blob absolute top-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] z-0" />
      <div className="floating-blob absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] z-0" />
      
      {/* Visible Technical Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-0" 
           style={{ backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* HEADER SECTION - NO GAP DENSE DESIGN */}
        <div className="max-w-4xl mb-12">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-md mb-6 text-[9px] font-black uppercase tracking-widest">
              Corporate Intelligence
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] text-slate-900 mb-6">
              Engineering <br />
              <span className="text-blue-600 italic">Accountability.</span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed max-w-2xl border-l-4 border-blue-600 pl-6 bg-white/50 backdrop-blur-sm py-4 rounded-r-xl">
              FKode Solution provides the technical foundation for modern enterprise. We bridge the gap between complex requirements and rapid execution through logic-driven engineering.
            </p>
          </ScrollReveal>
        </div>

        {/* CONTENT BENTO GRID - DENSE POINTS */}
        <div className="grid lg:grid-cols-12 gap-6 mb-20">
          
          {/* Main Visual Block */}
          <div className="lg:col-span-7 relative group overflow-hidden rounded-[2rem] h-[500px] shadow-2xl">
            <img src={servicesImg} alt="Technical Team" className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent p-10 flex flex-col justify-end">
               <h3 className="text-white text-3xl font-black uppercase tracking-tighter">Mission Critical <br /> System Delivery</h3>
            </div>
          </div>

          {/* Points Section - No Bullets, Full Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {capabilities.map((item, idx) => (
              <ScrollReveal key={idx} direction="right">
                <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-500 hover:shadow-xl transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl bg-blue-50 w-14 h-14 flex items-center justify-center rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 uppercase tracking-tight mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-snug">{item.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* DETAILED CONTENT SECTION - ADDED CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 p-10 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white">
           <ScrollReveal direction="left">
              <h2 className="text-3xl font-black text-slate-900 uppercase mb-4 tracking-tighter">Strategic Growth Through <span className="text-blue-600">Reliable Tech</span></h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                At FKode, we understand that software is a business asset, not just a line of code. Our approach integrates <strong>Predictive Architecture</strong> with <strong>Agile Project Management</strong> to ensure every release contributes to your bottom line.
              </p>
              <ul className="space-y-3">
                 {['Performance Optimized', 'Future-Proof Codebase', 'Security Compliant'].map((tag, i) => (
                   <li key={i} className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 w-fit px-3 py-1 rounded-md italic">
                     ✓ {tag}
                   </li>
                 ))}
              </ul>
           </ScrollReveal>
           <ScrollReveal direction="right">
              <div className="space-y-6">
                 <p className="text-slate-600 leading-relaxed">
                   We specialize in high-load environments where performance is non-negotiable. From FinTech to Enterprise ERPs, our engineers apply a disciplined protocol that eliminates the guesswork from software delivery.
                 </p>
                 <div className="p-6 bg-slate-900 rounded-2xl border-l-8 border-blue-600 shadow-2xl">
                    <p className="text-white italic font-medium leading-relaxed">
                      "Our goal is to build technical legacies. We don't just ship features; we build foundations that last for decades."
                    </p>
                    <p className="text-blue-400 text-[10px] font-black uppercase mt-4 tracking-widest">— FKode Engineering Protocol</p>
                 </div>
              </div>
           </ScrollReveal>
        </div>

       {/* ===== STATS SECTION ===== */}
<div className="stats-section 
                grid grid-cols-2 md:grid-cols-4 
                gap-4 sm:gap-6 
                mb-16 sm:mb-20">

  {stats.map((s, i) => (
    <div
      key={i}
      className="p-6 sm:p-8 md:p-10
                 bg-white/90 backdrop-blur
                 border border-slate-100
                 rounded-[1.75rem] sm:rounded-[2.5rem]
                 text-center
                 shadow-md sm:shadow-lg
                 hover:border-blue-200
                 hover:-translate-y-1
                 transition-all duration-300"
    >
      <h3 className="text-3xl sm:text-4xl md:text-5xl 
                     font-black 
                     text-slate-900 
                     mb-1 sm:mb-2">
        <span className={`stat-${i}`}>{s.value}</span>
        <span className="text-blue-600">{s.suffix}</span>
      </h3>

      <p className="text-[9px] sm:text-[10px]
                    font-black
                    uppercase
                    tracking-[0.25em] sm:tracking-[0.3em]
                    text-slate-400">
        {s.label}
      </p>
    </div>
  ))}

</div>


        {/* REFINED CORPORATE CTA */}
        <div className="relative p-12 md:p-24 bg-slate-950 rounded-[4rem] text-center overflow-hidden border border-white/5 shadow-3xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1.5px, transparent 1.5px)', backgroundSize: '40px 40px' }} />
          
          <ScrollReveal>
            <p className="text-blue-400 text-xs font-black uppercase tracking-[0.5em] mb-6">Execution is Everything</p>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-none">
              Build with the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Next Powerhouse.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <Link to="/contact">
                <button className="px-12 py-5 bg-blue-600 text-white font-black rounded-xl hover:bg-white hover:text-blue-600 transition-all shadow-xl active:scale-95 uppercase text-xs tracking-widest">
                  Consult our Experts →
                </button>
              </Link>
              <div className="text-left border-l border-slate-800 pl-6 hidden md:block">
                <p className="text-white text-xs font-bold uppercase tracking-widest">Guaranteed Response</p>
                <p className="text-slate-500 text-[10px]">Technical review within 24 hours.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lokesh from "../pictures/Lokesh.JPG";

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fast Floating Elements
      gsap.to(".tech-shape", {
        y: 20,
        x: 10,
        rotation: 360,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "none",
        stagger: 0.5
      });

      // Background Blobs
      gsap.to(".blob-animate", {
        scale: 1.2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // Reveal Animations
      gsap.from(".reveal-up", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Stats counter
      statsRef.current.forEach((el) => {
        const value = el.dataset.value;
        gsap.fromTo(el, { innerText: 0 }, {
          innerText: value,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-16 md:py-20 text-slate-900 overflow-hidden"
    >
      {/* --- RICH DYNAMIC BACKGROUND --- */}
      <div className="blob-animate absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -z-0" />
      <div className="blob-animate absolute bottom-0 -right-20 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[80px] -z-0" />
      
      {/* Floating Code Symbols & Shapes */}
      <div className="tech-shape absolute top-40 left-[5%] text-blue-200 text-6xl border-indigo-500/10 rotate-45"></div>
      <div className="tech-shape absolute bottom-20 left-[10%] text-blue-200 text-6xl font-mono opacity-40">{"</>"}</div>
      <div className="tech-shape absolute top-20 right-[10%] w-12 h-12 border-4 border-blue-500/20 rounded-full" />
      <div className="tech-shape absolute bottom-40 right-[8%] w-16 h-16 border-4 border-indigo-500/10 rotate-45" />

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#2563eb 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* HEADER SECTION - NO GAP */}
        <div className="reveal-up grid lg:grid-cols-2 gap-8 items-end border-b border-blue-100 pb-12 mb-12">
          <div>
            
            <h2 className="mt-4 text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
              The Founder's <span className="text-blue-600">Commitment.</span>
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-md pb-2">
            FKode Solution might be the new name in tech, but our standards for engineering excellence are already set in stone.
          </p>
        </div>

        {/* PROFILE CONTENT */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: IMAGE SECTION */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-8 border-l-8 border-blue-600 -z-0" />
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group">
              <img
                src={Lokesh}
                alt="Lokesh Poongavanam"
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <p className="text-white text-sm font-medium">Lokesh Poongavanam — Driving FKode to new heights.</p>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT SECTION */}
          <div className="lg:col-span-7 space-y-8">
            <div className="reveal-up">
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Fresh Energy. <span className="text-blue-600 underline decoration-blue-200">Decade-Level Expertise.</span>
              </h3>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                I founded <span className="text-blue-600 font-bold">FKode Solution</span> with one goal: to prove that you don't need a legacy company to get world-class technology. You need a team that cares.
              </p>
              <div className="p-6 bg-blue-50 rounded-3xl border-l-8 border-blue-600">
                <p className="text-lg text-slate-800 font-medium italic">
                  “For our early clients, we aren't just a service provider. We are your technical partners, working twice as hard to ensure your success is our proof of concept.”
                </p>
              </div>
            </div>

            {/* TRUST STATS - TIGHT GAP */}
            <div className="reveal-up grid grid-cols-3 gap-4">
              {[
                { label: "Hours of Coding", value: 15000 },
                { label: "Early Adopters", value: 15 },
                { label: "Commitment %", value: 100 },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-white border border-blue-50 rounded-2xl shadow-sm hover:border-blue-300 transition-colors">
                  <div ref={(el) => (statsRef.current[i] = el)} data-value={stat.value} className="text-2xl font-black text-blue-600">0</div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* WHY TRUST US PILLS */}
            <div className="reveal-up flex flex-wrap gap-3">
              {["Personalized Attention", "Agile Execution", "Zero Legacy Baggage", "Direct Founder Access"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-600 text-[11px] font-bold uppercase tracking-wider rounded-lg border border-slate-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* QUOTE SECTION - COMPACT */}
        <div className="reveal-up mt-12 p-10 bg-blue-900 rounded-[3rem] text-center relative overflow-hidden group">
          {/* Animated Background shapes inside quote */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
          
          <p className="text-2xl md:text-3xl font-bold text-white leading-tight relative z-10 italic">
            “Trust is built one line of code at a time. <br className="hidden md:block" />
            Let’s build yours <span className="text-blue-200">perfectly.”</span>
          </p>
          <div className="mt-6 flex justify-center items-center gap-4 text-blue-100 uppercase tracking-widest text-[10px] font-bold">
            <span className="h-[1px] w-12 bg-blue-400" />
            Lokesh Poongavanam
            <span className="h-[1px] w-12 bg-blue-400" />
          </div>
        </div>

      </div>
    </section>
  );
}
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaServer, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Replace these paths with your actual picture locations
import client1 from "../pictures/client1.JPG";
import client2 from "../pictures/client2.png";
import client3 from "../pictures/client3.png";

const data = [
  {
    name: "Ravi Kumar",
    role: "Founder, TechScale SaaS",
    image: client1,
    headline: "Engineering with Long-Term Vision",
    text: "FKode delivered an enterprise-grade platform with precision and discipline. Their systems scale effortlessly and feel future-ready.",
    stats: ["99.9% Uptime", "Secure Arch", "Scalable"]
  },
  {
    name: "Anitha Raj",
    role: "CEO, Creative Hub",
    image: client2,
    headline: "Design that Commands Trust",
    text: "The interface feels intentional and refined. Every interaction communicates credibility and confidence — exactly what our brand needed.",
    stats: ["Brand Authority", "Clean UX", "High Retention"]
  },
  {
    name: "Suresh M",
    role: "Director of Marketing",
    image: client3,
    headline: "A True Technology Partner",
    text: "Their approach goes beyond delivery. FKode understands business outcomes and builds systems that support long-term growth.",
    stats: ["Global Reach", "Strategic", "Reliable"]
  }
];

export default function EditorialTestimonials() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const isAnimating = useRef(false);

  // Reusable animation function for slide changes
  const animateSlide = (newIndex) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    gsap.to(".reveal", {
      opacity: 0,
      y: -20,
      duration: 0.4,
      stagger: 0.05,
      onComplete: () => {
        setIndex(newIndex);
        gsap.fromTo(
          ".reveal",
          { opacity: 0, y: 20 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.6, 
            stagger: 0.1, 
            ease: "power2.out",
            onComplete: () => { isAnimating.current = false; }
          }
        );
      }
    });
  };

  const handleNext = () => {
    const next = (index + 1) % data.length;
    animateSlide(next);
  };

  const handlePrev = () => {
    const prev = (index - 1 + data.length) % data.length;
    animateSlide(prev);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Load Animation
      gsap.fromTo(
        ".reveal",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" }
      );
    }, sectionRef);

    // Auto-play (optional)
    const timer = setInterval(handleNext, 8000);
    
    return () => {
      ctx.revert();
      clearInterval(timer);
    };
  }, [index]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-300/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:80px_80px] pointer-events-none" />

      {/* Watermark */}
      <div className="absolute top-10 left-4 text-[5rem] md:text-[15rem] font-black text-slate-900/[0.03] select-none leading-none tracking-tighter pointer-events-none">
        VOICES
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        
        {/* HEADER & ARROWS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
              <span className="w-6 md:w-8 h-[2px] bg-blue-600"></span>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Testimonials</p>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase">
              Trusted by <br className="hidden sm:block" />
              <span className="text-transparent inline-block mt-2" 
                    style={{ WebkitTextStroke: "1px #2563eb", WebkitTextStrokeWidth: "clamp(1px, 2vw, 2px)" }}>
                Market Leaders
              </span>
            </h2>
          </div>

        
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* IMAGE */}
          <div className="reveal flex justify-center lg:justify-start">
            <div className="w-full max-w-[450px] h-[400px] md:w-[480px] md:h-[560px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white relative">
              <img
                src={data[index].image}
                alt={data[index].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg flex items-center gap-2">
                <FaServer className="text-blue-600 text-xs" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Verified Client</span>
              </div>
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="relative space-y-8 md:space-y-12">
            <div className="relative reveal">
              <div className="rounded-[32px] border border-blue-300 p-[6px] bg-white/50 backdrop-blur-sm">
                <div className="relative rounded-[26px] border border-blue-500 bg-white px-6 py-10 md:px-12 md:py-14 shadow-sm">
                  <span className="absolute -top-4 left-6 text-6xl text-blue-600/100 font-serif">❝</span>
                  <h3 className="text-xl md:text-3xl font-bold text-blue-900 leading-snug">{data[index].headline}</h3>
                  <p className="mt-4 text-sm md:text-lg text-slate-600 leading-relaxed font-medium">{data[index].text}</p>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 reveal">
              {data[index].stats.map((stat, i) => (
                <div key={i} className="group">
                  <div className="h-[2px] w-6 md:w-10 bg-blue-600 mb-2 transition-all group-hover:w-16" />
                  <p className="text-[9px] md:text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">{stat}</p>
                </div>
              ))}
            </div>

            {/* BIO & PROGRESS DOTS */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 reveal border-t border-slate-100 pt-8">
              <div className="flex items-center gap-4">
                <img src={data[index].image} className="w-12 h-12 rounded-full object-cover border-2 border-blue-100 p-0.5" alt="" />
                <div className="text-left">
                  <h4 className="text-base md:text-lg font-black text-slate-900 tracking-tight">{data[index].name}</h4>
                  <p className="text-[9px] md:text-xs uppercase tracking-widest text-blue-600 font-bold">{data[index].role}</p>
                </div>
              </div>
                {/* ARROW BUTTONS */}
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={handlePrev}
              className="group p-4 rounded-full border border-slate-200 bg-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-slate-600 group-hover:text-white transition-colors" />
            </button>
            <button 
              onClick={handleNext}
              className="group p-4 rounded-full border border-slate-200 bg-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-slate-600 group-hover:text-white transition-colors" />
            </button>
          </div>

              <div className="flex items-center gap-2">
                {data.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => animateSlide(i)}
                    className={`h-[4px] transition-all duration-500 rounded-full ${i === index ? "w-10 md:w-14 bg-blue-600" : "w-3 md:w-4 bg-slate-200"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

/* Images */
import retail from "../pictures/retail.jpg";
import hospital from "../pictures/image.png";
import startups from "../pictures/starup.png";
import clinic from "../pictures/clinic.jpg";
import education from "../pictures/Education.jpg";
import ecommerce from "../pictures/E-Commerce.avif";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { title: "Retail & Consumer Businesses", tag: "RETAIL", desc: "We help retail brands build strong identities, streamline operations, and drive consistent sales growth.", points: ["Brand identity", "POS & billing", "Digital marketing", "Promotional materials"], image: retail },
  { title: "Hospitality & Food Services", tag: "HOSPITALITY", desc: "From local cafés to restaurants, we deliver solutions that enhance customer experience and brand recall.", points: ["Menu design", "Ordering systems", "Social media", "Event gifting"], image: hospital },
  { title: "Startups & Entrepreneurs", tag: "VENTURES", desc: "We partner with founders from idea stage to scale, covering both business setup and technology.", points: ["Product design", "App development", "GST support", "Growth strategy"], image: startups },
  { title: "Healthcare & Clinics", tag: "HEALTHCARE", desc: "We support healthcare businesses with secure systems, professional branding, and patient experiences.", points: ["Clinic branding", "Appointment systems", "Online visibility", "Branded stationery"], image: clinic },
  { title: "Education & Institutions", tag: "EDUCATION", desc: "We help educational organizations modernize operations and strengthen trust with students and parents.", points: ["Institution branding", "Learning platforms", "Admissions campaigns", "Event kits"], image: education },
  { title: "E-Commerce & Online Brands", tag: "E-COMM", desc: "We empower online brands with end-to-end solutions that convert traffic into loyal customers.", points: ["UI/UX design", "Automation", "Performance marketing", "Custom Packaging"], image: ecommerce },
];

export default function Industries() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Background Geometric Float
      gsap.to(".bg-shape-float", {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(-20, 20)",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 2. Section Revel Animation
      industries.forEach((_, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.industry-row-${i}`,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        });

        tl.fromTo(`.img-box-${i}`, { opacity: 0, scale: 0.9, x: i % 2 === 0 ? -50 : 50 }, { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power3.out" })
          .fromTo(`.content-box-${i}`, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6")
          .fromTo(`.point-item-${i}`, { opacity: 0, x: -20 }, { opacity: 1, x: 0, stagger: 0.1, duration: 0.5 }, "-=0.4");
      });

      // 3. Image Parallax
      gsap.utils.toArray(".parallax-img").forEach((img) => {
        gsap.to(img, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: { trigger: img, scrub: 1 }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 bg-[#f8faff] overflow-hidden">
      
      {/* --- ENHANCED BACKGROUND ANIMATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bg-shape-float absolute top-20 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="bg-shape-float absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(90deg, #2563eb 1px, transparent 1px), linear-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
    {/* ================= ULTRA-STYLIZED FULL COVER HEADER (MOBILE RESPONSIVE) ================= */}
<div className="relative min-h-[90vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-[#f0f4ff] mb-16 lg:mb-30 px-4 lg:pl-8">
  
  {/* 1. LAYERED BACKGROUND DESIGN */}
  <div className="absolute inset-0 z-0">
    {/* Large Animated Gradient Glow - Adjusted for mobile */}
    <div className="absolute -top-[5%] -left-[10%] w-[80%] lg:w-[60%] h-[40%] lg:h-[60%] bg-blue-600/10 rounded-full blur-[80px] lg:blur-[120px] animate-pulse" />
    <div className="absolute top-[20%] right-[-10%] w-[60%] lg:w-[40%] h-[40%] lg:h-[50%] bg-indigo-500/10 rounded-full blur-[80px] lg:blur-[100px]" />
    
    {/* Technical Matrix Grid */}
    <div className="absolute inset-0 opacity-[0.05]" 
         style={{ backgroundImage: 'linear-gradient(#2563eb 2px, transparent 2px), linear-gradient(90deg, #2563eb 2px, transparent 2px)', backgroundSize: '60px 60px lg:100px 100px' }} />
    
    {/* Large Outlined Year - Hidden or smaller on mobile to avoid overlap */}
    <div className="absolute bottom-5 right-5 text-[8rem] lg:text-[20rem] font-black text-slate-900/[0.03] select-none leading-none">
      2026
    </div>
  </div>

  <div className="max-w-[1500px] mx-auto px-4 lg:px-8 w-full relative z-10 pt-20 lg:pt-0">
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-16">
      
      {/* LEFT CONTENT: THE STATEMENT */}
      <div className="flex-1">
        {/* Modern Label */}
        <div className="flex items-center gap-4 lg:gap-6 mb-8 lg:mb-12">
          <div className="h-[2px] w-12 lg:w-24 bg-blue-600" />
          <p className="text-[10px] lg:text-xs font-black uppercase tracking-[0.4em] lg:tracking-[0.6em] text-blue-600">Global Tech Architect</p>
        </div>



        

        {/* The "Impact" Headline - Adjusted font size for mobile */}
        <div className="relative mt-4 lg:mt-0">
         <h1 className="flex flex-col text-slate-900 font-black uppercase tracking-[-0.05em] leading-[0.9] lg:leading-[0.75]">
    
    {/* "Market" - Responsively Sized */}
    <span className="text-[15vw] sm:text-[12vw] lg:text-[8rem]">
      Market
    </span>

    {/* "Definers." - Fixed Stroke for Mobile vs Desktop */}
    <span 
      className="text-[14vw] sm:text-[12vw] lg:text-[8rem] text-transparent"
      style={{ 
        /* Mobile-la 1px stroke, Desktop (lg) la 2.5px stroke auto-va maarum */
        WebkitTextStroke: 'var(--stroke-width) #2563eb',
        display: 'block',
        width: '100%',
        overflow: 'visible'
      }}
    >
      Definers.
    </span>
  </h1>

  {/* CSS Variable to handle stroke width responsively */}
  <style>{`
    :root { --stroke-width: 1px; }
    @media (min-width: 1024px) { :root { --stroke-width: 2.5px; } }
  `}</style>
  
  {/* Floating Geometric Frame - Properly positioned for all screens */}
  <div className="absolute -top-4 -left-4 lg:-top-10 lg:-left-10 w-12 h-12 lg:w-32 lg:h-32 border-t-[3px] border-l-[3px] border-blue-600 opacity-40 pointer-events-none" />
          
          {/* Floating Geometric Frame - Smaller on mobile */}
          <div className="absolute -top-5 -left-5 w-16 h-16 lg:w-32 lg:h-32 border-t-2 border-l-2 border-blue-600 opacity-30" />
        </div>

        <div className="mt-10 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-20">
          <p className="text-slate-500 text-lg lg:text-2xl font-medium leading-tight tracking-tight border-l-4 border-blue-600 pl-6 lg:pl-8">
            We don't just adapt to industries; we <span className="text-slate-900 font-bold">engineer the frameworks</span> that others follow.
          </p>
          
          <div className="flex items-center gap-6 lg:gap-8">
             <div className="group cursor-pointer">
                <p className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors">99.9%</p>
                <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-slate-400">System Uptime</p>
             </div>
             <div className="w-[1px] h-10 lg:h-12 bg-slate-200" />
             <div className="group cursor-pointer">
                <p className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter group-hover:text-blue-600 transition-colors">50+</p>
                <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest text-slate-400">Global Deployments</p>
             </div>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT: THE ACTION BOX - Stacks at bottom on mobile */}
      <div className="w-full lg:w-[350px] pb-10 lg:pb-20">
        <div className="relative group">
          {/* Background Decor */}
          <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] lg:rounded-[3rem] rotate-3 lg:rotate-6 group-hover:rotate-0 transition-transform duration-500 -z-10 opacity-10" />
          
          <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl border border-blue-50 relative overflow-hidden">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-16 h-16 lg:w-20 lg:h-20 bg-blue-50 rounded-bl-[2.5rem] lg:rounded-bl-[3rem]" />
            
            <p className="text-slate-900 font-black text-lg lg:text-xl mb-6 leading-tight">
              Ready to claim your digital territory?
            </p>
            
            <Link to="/contact">
              <button className="w-full py-5 lg:py-6 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] lg:tracking-[0.3em] hover:bg-blue-600 transition-all shadow-xl shadow-blue-100 mb-6">
                Consultation →
              </button>
            </Link>
            
            <p className="text-slate-400 text-[8px] lg:text-[9px] font-bold uppercase tracking-widest text-center leading-loose">
              Enterprise Grade // Secure // Scalable
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>

  {/* BOTTOM DECORATIVE STRIP - Adjusted marquee speed for mobile */}
  <div className="absolute bottom-0 left-0 w-full bg-slate-900 py-3 lg:py-4 overflow-hidden whitespace-nowrap z-20">
    <div className="flex animate-marquee gap-10">
      {[1,2,3,4].map((i) => (
        <p key={i} className="text-white/20 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.6em] lg:tracking-[1em]">
          FKODE SOLUTIONS • INNOVATING ACROSS SECTORS • FKODE SOLUTIONS • INNOVATING ACROSS SECTORS •
        </p>
      ))}
    </div>
  </div>
</div>
        {/* INDUSTRIES LIST */}
        <div className="space-y-40">
          {industries.map((item, i) => (
            <div key={i} className={`industry-row-${i} grid lg:grid-cols-12 gap-16 items-center`}>
              
              {/* IMAGE BLOCK WITH ANIMATED CORNERS */}
              <div className={`lg:col-span-6 relative ${i % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className={`img-box-${i} relative group`}>
                  
                  {/* Neenga ketta Animated Image Corners */}
                  <div className="absolute -top-8 -right-8 w-40 h-40 border-t-[14px] border-r-[14px] border-blue-900/50 rounded-tr-[5rem] group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-500" />
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-indigo-600/10 rounded-3xl rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                  
                  <div className="relative overflow-hidden rounded-[3.5rem] shadow-3xl border-[10px] border-white h-[450px]">
                    {/* Corner Gradient Shimmer */}
                    <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-blue-600/30 via-transparent to-transparent z-10 opacity-60" />
                    
                    <img src={item.image} alt={item.title} className="parallax-img w-full h-[120%] object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000" />
                    
                    {/* Badge */}
                    <div className="absolute bottom-8 right-8 z-20 bg-slate-900 px-6 py-2.5 rounded-2xl shadow-2xl">
                       <p className="text-[10px] font-black text-white uppercase tracking-widest">{item.tag}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CONTENT BLOCK */}
              <div className={`content-box-${i} lg:col-span-6` }>
                <h3 className="text-4xl md:text-5xl font-black text-blue-900 mb-6 tracking-tighter leading-none uppercase italic">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xl mb-10 leading-relaxed font-medium">
                  {item.desc}
                </p>

               {/* DENSE BENTO POINTS (NO BULLETS) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                  {item.points.map((p, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-blue-500 hover:shadow-md transition-all group">
                      <div className="w-1.5 h-6 bg-blue-100 group-hover:bg-blue-600 transition-colors rounded-full" />
                      <span className="text-slate-700 font-bold text-xs uppercase tracking-tight leading-none">{p}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                   <button className="group relative px-12 py-5 bg-slate-900 text-white font-black rounded-2xl overflow-hidden shadow-2xl">
                      <span className="relative z-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                        View Solution <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                   </button>
                </Link>
              </div>

            </div>
          ))}
        </div>

       {/* REFINED FINAL CTA */}
        <div className="mt-40 p-12 md:p-24 bg-slate-900 rounded-[4rem] text-center relative overflow-hidden shadow-3xl">
          {/* Background Grid for CTA */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Custom Tech For <br /> Your Industry.
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 px-12 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-white hover:text-blue-600 transition-all shadow-2xl uppercase tracking-widest text-xs"
            >
              Consult Our Team <FaArrowRight />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
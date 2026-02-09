import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import heroImage from "../pictures/Home.jpg";
import fkodeLogo from "../pictures/fkode.jpg";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

/* ================= BACKGROUND ================= */
function ExecutiveBackground() {
  return (
    <div className="absolute inset-0 -z-10 bg-[#fbfcff] overflow-hidden">
      <div className="absolute -top-48 -left-48 w-[650px] h-[650px] bg-blue-100/40 rounded-full blur-[160px]" />
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-indigo-100/30 rounded-full blur-[140px]" />
    </div>
  );
}

export default function FKodeCorporateHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen font-sans text-slate-900 overflow-hidden">
      <ExecutiveBackground />

      {/* ================= HERO ================= */}
      <section className="pt-32 pb-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6 hero-anim">
            

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Transform Your Business From Idea to Success
            </h1>

            <p className="text-lg text-slate-600 max-w-xl">
              Chennai based Complete Business Solution Provider delivering
              branding, software engineering, automation, marketing and
              scalable digital infrastructure for global businesses.
            </p>

            <div className="flex gap-6">
              <Link to="/contact">
                <button className="px-10 py-4 bg-blue-600 text-white rounded-full">
                  Start Project
                </button>
              </Link>
              <Link to="/services">
                <button className="px-10 py-4 border border-slate-300 rounded-full">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          <div className="relative hero-anim">
            <img src={heroImage} alt="" className="rounded-3xl shadow-xl" />
          </div>
        </div>
      </section>

     {/* ================= ABOUT - MINIMALIST PREMIUM ================= */}
<section className="py-32 bg-white px-6 lg:px-24">
  <div className="max-w-7xl mx-auto">
    
    {/* Heading with Side-Line */}
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
      <div className="max-w-2xl">
        <h4 className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">
          Establishment — 2026
        </h4>
       <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 leading-[1.1] md:leading-[0.9] uppercase tracking-tighter">
  Your End-to-End 
  <br className="hidden sm:block" /> {/* Desktop-la mattum break pannum */}
  <span className="text-slate-300 block sm:inline mt-2 sm:mt-0">
    Technology Partner
  </span>
</h2>
      </div>
      <div className="md:text-right">
        <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px] leading-relaxed">
          Strategy • Engineering <br /> Automation • Scaling
        </p>
      </div>
    </div>

    <div className="grid lg:grid-cols-12 gap-20 items-start">
      
      {/* LEFT SIDE - LOGO & CORE TEXT */}
      <div className="lg:col-span-5">
        <img src={fkodeLogo} className="w-80 mb-12 " alt="FKode Logo" />
        
        <h3 className="text-3xl font-bold text-slate-900 mb-8 leading-tight">
          Technology Driven <br /> Business Execution.
        </h3>

        <p className="text-xl text-slate-500 leading-relaxed font-light">
          FKode Solution builds scalable digital ecosystems for startups,
          enterprises and global brands through integrated strategy,
          automation, software engineering and digital transformation.
        </p>

        <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200"></div>
                ))}
            </div>
            <p className="text-sm font-bold text-slate-900 uppercase tracking-tighter">
                Trusted by 50+ Global Entities
            </p>
        </div>
      </div>

      {/* RIGHT SIDE - CONTENT LIST (NO BOXES) */}
      <div className="lg:col-span-7 pt-4">
        <p className="text-2xl text-slate-800 leading-snug mb-16 font-medium">
          Branding, legal setup, enterprise software development,
          cloud automation, performance marketing and global scaling —
          executed through one unified technology driven workflow.
        </p>

        {/* CLEAN LIST ALIGNMENT */}
        <div className="space-y-12">
          
          <div className="flex items-start gap-8 group">
            <span className="text-4xl font-black text-slate-100 group-hover:text-blue-600 transition-colors duration-500">01</span>
            <div className="pt-2">
              <h4 className="text-xl font-black uppercase tracking-widest text-slate-900 mb-3">Enterprise Engineering</h4>
              <p className="text-slate-500 leading-relaxed max-w-md">
                High-performance Software Engineering & SaaS Platforms designed for global scalability.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 group">
            <span className="text-4xl font-black text-slate-100 group-hover:text-indigo-600 transition-colors duration-500">02</span>
            <div className="pt-2">
              <h4 className="text-xl font-black uppercase tracking-widest text-slate-900 mb-3">Launch Infrastructure</h4>
              <p className="text-slate-500 leading-relaxed max-w-md">
                Complete Startup Launch systems including Company Registration, Branding, and Legal setup.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 group">
            <span className="text-4xl font-black text-slate-100 group-hover:text-purple-600 transition-colors duration-500">03</span>
            <div className="pt-2">
              <h4 className="text-xl font-black uppercase tracking-widest text-slate-900 mb-3">Automation & Scaling</h4>
              <p className="text-slate-500 leading-relaxed max-w-md">
                Advanced DevOps, Cloud Automation and Global Technology Scaling strategies.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>


     {/* ================= STARTUP STATS ================= */}
<section className="py-24 bg-slate-50 px-6 lg:px-24">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <p className="uppercase tracking-widest text-blue-600 text-sm mb-3">
      Startup Growth Journey
    </p>
    <h2 className="text-4xl font-semibold text-slate-900">
      Building Momentum Step by Step 🚀
    </h2>
  </div>

  <div className="grid md:grid-cols-4 gap-10 text-center">
    
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-4xl font-bold text-blue-600">25+</h3>
      <p className="text-slate-700 font-medium mt-2">MVP Projects Launched</p>
      <p className="text-sm text-slate-500 mt-2">
        Startup ideas converted into working digital products.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-4xl font-bold text-blue-600">12+</h3>
      <p className="text-slate-700 font-medium mt-2">Early Stage Clients</p>
      <p className="text-sm text-slate-500 mt-2">
        Founders and small businesses supported from day one.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-4xl font-bold text-blue-600">6+</h3>
      <p className="text-slate-700 font-medium mt-2">Startup Industries</p>
      <p className="text-sm text-slate-500 mt-2">
        SaaS, Ecommerce, Branding, Automation & Digital Services.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
      <h3 className="text-4xl font-bold text-blue-600">100%</h3>
      <p className="text-slate-700 font-medium mt-2">Founder Focused</p>
      <p className="text-sm text-slate-500 mt-2">
        Agile workflow with rapid iteration & fast delivery cycles.
      </p>
    </div>

  </div>
</section>


    {/* ================= ENTERPRISE CORPORATE SERVICES ================= */}
<section className="py-32 px-6 lg:px-24 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <div className="text-center mb-28">
      <p className="uppercase tracking-[0.35em] text-blue-600 text-sm mb-4">
        Enterprise Solutions
      </p>

      <h2 className="text-5xl font-semibold mb-6">
        Complete Technology & Business Infrastructure
      </h2>

      <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
        FKode Solution delivers integrated technology, branding,
        compliance and growth systems designed to help startups,
        entrepreneurs and enterprises operate, scale and expand
        across global markets with clarity and confidence.
      </p>
    </div>

    <div className="space-y-32">

      {/* SOFTWARE ENGINEERING */}
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-2 text-8xl font-bold text-slate-100">01</div>
        <div className="md:col-span-10 space-y-6">
          <h3 className="text-3xl font-semibold text-blue-600">
            Enterprise Software Engineering
          </h3>

          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
            We design and develop scalable digital platforms including
            enterprise dashboards, SaaS products, automation systems,
            CRM solutions and full-stack web applications engineered
            for performance, security and long-term scalability.
          </p>

          <p className="text-slate-600 leading-relaxed max-w-4xl">
            Our engineering process combines modern frameworks,
            cloud infrastructure and API-driven architecture to build
            reliable systems that streamline operations, improve
            efficiency and enable business intelligence through
            data-driven workflows.
          </p>
        </div>
      </div>

      {/* BRANDING */}
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-2 text-8xl font-bold text-slate-100">02</div>
        <div className="md:col-span-10 space-y-6">
          <h3 className="text-3xl font-semibold text-blue-600">
            Brand Systems & Digital Experience Engineering
          </h3>

          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
            We create strategic brand identities, UI/UX frameworks
            and modern digital experiences designed to position
            businesses as premium, trustworthy and future-ready.
          </p>

          <p className="text-slate-600 leading-relaxed max-w-4xl">
            From visual identity systems and website architecture
            to product interface design and marketing assets,
            our team ensures brand consistency across all
            customer touchpoints and digital channels.
          </p>
        </div>
      </div>

      {/* DIGITAL GROWTH */}
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-2 text-8xl font-bold text-slate-100">03</div>
        <div className="md:col-span-10 space-y-6">
          <h3 className="text-3xl font-semibold text-blue-600">
            Digital Growth & Automation Systems
          </h3>

          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
            Our growth division builds scalable marketing ecosystems
            powered by automation, analytics and data-driven strategy
            to help companies increase visibility, customer acquisition
            and global reach.
          </p>

          <p className="text-slate-600 leading-relaxed max-w-4xl">
            We integrate SEO architecture, campaign analytics,
            CRM automation, conversion funnels and performance
            tracking dashboards to drive measurable business growth.
          </p>
        </div>
      </div>

      {/* REGISTRATION */}
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-2 text-8xl font-bold text-slate-100">04</div>
        <div className="md:col-span-10 space-y-6">
          <h3 className="text-3xl font-semibold text-blue-600">
            Startup Registration & Corporate Compliance
          </h3>

          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
            FKode simplifies business incorporation, GST registration,
            compliance documentation and structured legal onboarding
            for startups and growing companies.
          </p>

          <p className="text-slate-600 leading-relaxed max-w-4xl">
            Our workflow ensures regulatory alignment, document
            automation and operational clarity so founders can focus
            on growth rather than administrative complexity.
          </p>
        </div>
      </div>

      {/* CORPORATE GIFTS */}
      <div className="grid md:grid-cols-12 gap-12">
        <div className="md:col-span-2 text-8xl font-bold text-slate-100">05</div>
        <div className="md:col-span-10 space-y-6">
          <h3 className="text-3xl font-semibold text-blue-600">
            Corporate Branding Kits & Executive Gifts
          </h3>

          <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
            We design premium corporate gifting solutions including
            onboarding kits, executive merchandise, branded
            promotional materials and client engagement packages.
          </p>

          <p className="text-slate-600 leading-relaxed max-w-4xl">
            These assets strengthen brand presence, elevate customer
            experience and enhance corporate identity during events,
            onboarding processes and business collaborations.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

     {/* ================= GLOBAL CTA ================= */}
<section className="py-28 bg-white px-6 lg:px-24 border-t">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="space-y-6">
      <p className="uppercase tracking-widest text-blue-600 text-sm">
        Global Growth Partnership
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
        Ready to Scale Your Business
        <span className="text-blue-600"> Globally?</span>
      </h2>

      <p className="text-lg text-slate-600 max-w-xl">
        FKode delivers strategy, technology and automation driven solutions
        to help startups and enterprises expand into global markets with
        confidence and speed.
      </p>
    </div>

    {/* RIGHT CTA CARD */}
    <div className="bg-slate-50 p-10 rounded-3xl shadow-lg text-center lg:text-left space-y-6">
      <h3 className="text-2xl font-semibold text-slate-900">
        Start Your Global Expansion Today
      </h3>

      <p className="text-slate-600">
        Talk with our strategy team and transform your business into a
        scalable digital brand.
      </p>

     <Link to="/contact" className="block mt-12"> 
  <button className="w-full lg:w-auto px-12 py-4 bg-blue-600 text-white rounded-full text-lg hover:scale-105 transition shadow-lg">
    Start a Conversation
  </button>
</Link>
    </div>

  </div>
</section>

    </div>
  );
}

import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiArrowRight, FiPlus, FiSquare, FiActivity, FiLayers } from "react-icons/fi";
/* Images */
import gift from "../pictures/gift.jpg";
import software from "../pictures/software.jpg";
import digital from "../pictures/digital.jpg";
import registration from "../pictures/registration.jpg";
import branding from "../pictures/branding.jpg";

/* ================= ENHANCED SERVICES DATA ================= */
export const services = [
  {
    id: "branding",
    title: "FK Branding & Narrative Design",
    year: "EST. 2024",
    tag: "branding",
    description: "We architect visual authority. From color psychology to high-fidelity design systems, we ensure your brand speaks premium.",
    image: branding,
    skills: [
      { name: "Brand Architecture", level: "100%" },
      { name: "Visual Identity", level: "100%" }
    ],
    items: [
      { name: "Logo Systems", icon: "🖋️" },
      { name: "Brand Manuals", icon: "📖" },
    ],
  },
  {
    id: "software",
    title: "FK Scalable Software Engineering",
    year: "EST. 2024",
    tag: "software",
    description: "High-performance web and mobile applications built for scale using modern cloud-native architectures.",
    image: software,
    skills: [
      { name: "Full Stack Dev", level: "100%" },
      { name: "Cloud Infra", level: "100%" }
    ],
    items: [
      { name: "Enterprise CRM", icon: "⚙️" },
      { name: "API Ecosystems", icon: "🔗" },
    ],
  },
  {
    id: "marketing",
    title: "FK Performance Digital Marketing",
    year: "EST. 2024",
    tag: "digital",
    description: "Data-driven growth strategies that convert. We optimize your digital presence to dominate the market.",
    image: digital,
    skills: [
      { name: "SEO / SEM", level: "100%" },
      { name: "Conversion Rate", level: "100%" }
    ],
    items: [
      { name: "Lead Generation", icon: "📈" },
      { name: "Content Strategy", icon: "🎯" },
    ],
  },
  {
    id: "registration",
    title: "FK Business Compliance & Legal",
    year: "EST. 2024",
    tag: "registration",
    description: "Fast-track your business setup. We handle GST, MSME, and all legal registrations efficiently.",
    image: registration,
    skills: [
      { name: "Documentation", level: "100%" },
      { name: "Tax Compliance", level: "100%" }
    ],
    items: [
      { name: "GST / MSME", icon: "📑" },
      { name: "Trademark", icon: "🛡️" },
    ],
  },
  {
    id: "gifting",
    title: "FK Luxury Corporate Gifting",
    year: "EST. 2024",
    tag: "gift",
    description: "Elevate your relationships with premium, customized gifting solutions that reflect your excellence.",
    image: gift,
    skills: [
      { name: "Curation", level: "100%" },
      { name: "Sourcing", level: "100%" }
    ],
    items: [
      { name: "Client Hampers", icon: "🎁" },
      { name: "Event Gifts", icon: "✨" },
    ],
  },
];

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      {/* 1. BLUEPRINT GRID BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] " 
           style={{ backgroundImage: 'linear-gradient(#2563eb 1.5px, transparent 1.5px), linear-gradient(90deg, #2563eb 1.5px, transparent 1.5px)', backgroundSize: '80px 80px' }} />

      <div className="max-w-[1300px] mx-auto px-6 relative z-10">

    {/* HEADER SECTION - THE SWISS TECH EDIT */}
        <div className="mb-32 flex flex-col md:flex-row md:items-start justify-between border-t-2 border-slate-950 pt-12 relative group">
          <style>
            {`
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;400;900&family=JetBrains+Mono:wght@300&display=swap');
              .font-swiss { font-family: 'Inter', sans-serif; }
              .font-mono-tech { font-family: 'JetBrains Mono', monospace; }
            `}
          </style>

          <ScrollReveal variant="up">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 bg-blue-600 rounded-full" />
                <span className="font-mono-tech text-[10px] text-slate-400 uppercase tracking-[0.5em]">System Core / Portfolio v2</span>
              </div>
              
              <h2 className="font-swiss text-6xl md:text-[6.8rem] font-black text-slate-950 tracking-[-0.08em] leading-[0.82] uppercase overflow-hidden">
                <motion.span initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.8, ease: "circOut" }} className="block">Innovation </motion.span>
                <motion.span initial={{ y: "100%" }} whileInView={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "circOut" }} className="text-blue-900 "> Services.</motion.span>
              </h2>
            </div>
          </ScrollReveal>

         <div className="mt-16 md:mt-6 md:max-w-[380px] flex flex-col items-start md:items-end">
  
  <div className="text-left md:text-right space-y-6">

    {/* Main Text */}
    <p className="font-swiss text-slate-600 text-lg leading-relaxed tracking-tight">
      Engineering{" "}
      <span className="text-slate-900 font-semibold italic relative">
        absolute market authority
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600"></span>
      </span>{" "}
      through multi-disciplinary innovation & precision execution.
    </p>

    {/* Info Cards */}
    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">

      <div className="space-y-1">
        <span className="font-mono-tech text-[10px] tracking-widest text-slate-400 uppercase">
          Protocol
        </span>
        <p className="text-sm font-extrabold text-slate-900">
          FK-2024
        </p>
      </div>

      <div className="space-y-1">
        <span className="font-mono-tech text-[10px] tracking-widest text-slate-400 uppercase">
          Response
        </span>
        <p className="text-sm font-extrabold text-blue-600">
          Operational
        </p>
      </div>

    </div>

  </div>

</div>

        </div>

        {/* 3. SERVICES LIST */}
        <div className="space-y-48">
          {services.map((service, i) => (
            <div key={service.id} className="grid lg:grid-cols-12 gap-16 items-center">
              
              {/* IMAGE BLOCK */}

              <div className={`lg:col-span-5 relative ${i % 2 !== 0 ? "lg:order-last" : ""}`}>

                <ScrollReveal variant={i % 2 === 0 ? "left" : "right"}>

                  <div className="relative group">

                   

                    {/* Floating Bold Label */}

                    <div className="absolute -left-10 top-10 bottom-10 w-16 bg-slate-900 z-20 flex items-center justify-center border-r-4 border-blue-600 shadow-2xl">

                       <span className="text-white font-black text-xl uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">

                         {service.tag}

                       </span>

                    </div>



                    {/* Main Image Frame */}

                    <div className="relative z-10 border-[15px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden">

                      <img

                        src={service.image}

                        alt={service.title}

                        className="w-full h-[550px] object-cover "

                      />

                      <div className="absolute top-6 right-6 bg-blue-600 p-4 shadow-xl">

                         <FiPlus className="text-white text-3xl animate-pulse" />

                      </div>

                    </div>



                    {/* Backdrop Shape */}

                    <div className={`absolute -z-10 -bottom-12 -right-12 w-full h-full border-[3px] border-blue-600/30 bg-slate-50`} />

                  </div>

                </ScrollReveal>

              </div>

              {/* CONTENT BLOCK: REFINED & COMPACT */}
              <div className={`lg:col-span-7 ${i % 2 === 0 ? "lg:pl-12" : "lg:pr-12"}`}>
                <ScrollReveal variant="up">
                  <div className="flex items-center gap-3 mb-4 text-blue-600">
                    <FiSquare className="fill-blue-600 text-[10px]" />
                    <span className="font-bold text-[10px] uppercase tracking-[0.3em]">Module 0{i + 1}</span>
                  </div>

                  <div className="flex justify-between items-end mb-8 border-b border-blue-900 pb-6">
                    <h3 className="text-3xl md:text-4xl font-black text-blue-900 uppercase tracking-tight">{service.title}</h3>
                  </div>
                  
                  <p className="text-slate-500 text-lg mb-10 leading-relaxed border-l-4 border-blue-900 pl-6 italic max-w-xl">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                    {/* Metrics */}
                    <div className="space-y-5">
                       <p className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest"><FiActivity className="text-blue-600" /> Efficiency</p>
                       {service.skills.map((skill, idx) => (
                         <div key={idx} className="space-y-2">
                            <div className="flex justify-between text-[10px] font-bold text-slate-600 uppercase">
                               <span>{skill.name}</span>
                               <span className="text-white">{skill.level}</span>
                            </div>
                            <div className="h-1 w-full bg-slate-100 overflow-hidden">
                               <motion.div initial={{ width: 0 }} whileInView={{ width: skill.level }} transition={{ duration: 1 }} className="h-full bg-blue-600" />
                            </div>
                         </div>
                       ))}
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-3">
                       <p className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4"><FiLayers className="text-blue-600" /> Artifacts</p>
                       {service.items.map((item, idx) => (
                         <div key={idx} className="flex items-center gap-3 p-3 border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-600 transition-all">
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-bold text-slate-800 text-[10px] uppercase tracking-wider">{item.name}</span>
                         </div>
                       ))}
                    </div>
                  </div>

                  <Link to={`/services/${service.id}`} className="group inline-flex items-center gap-4">
                    <div className="h-12 px-8 bg-slate-900 text-white font-bold text-[10px] uppercase tracking-[0.3em] flex items-center group-hover:bg-blue-600 transition-all">
                      View Specs
                    </div>
                    <div className="w-12 h-12 border border-slate-200 flex items-center justify-center group-hover:border-blue-600 group-hover:text-blue-600 transition-all">
                      <FiArrowUpRight className="text-xl group-hover:rotate-45 transition-transform" />
                    </div>
                  </Link>
                </ScrollReveal>
              </div>

            </div>
          ))}
        </div>

{/* 4. FINAL CTA - TIGHT SPLIT ALIGNMENT */}
<div className="mt-20 relative py-16 overflow-hidden bg-slate-50/50">
  
  {/* Minimalist Background Gradients */}
  <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <ScrollReveal variant="up">
      <div className="grid lg:grid-cols-2 gap-8 items-center border-t border-slate-200 pt-12">
        
        {/* Left: Messaging */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-6 bg-blue-600"></span>
            <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em]">
              Next Phase: 2024 Deployment
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none uppercase">
            Let's build <br />
            <span className="text-blue-600">something real.</span>
          </h2>
          
          <p className="text-slate-500 text-sm md:text-base max-w-md font-medium leading-relaxed">
            From architecture to legal compliance, FK provides the end-to-end 
            infrastructure your business needs to dominate.
          </p>
        </div>

        {/* Right: Actions (Aligned Right for Balance) */}
        <div className="flex flex-col sm:flex-row lg:justify-end items-center gap-6">
          <Link to="/contact" className="group w-full sm:w-auto">
            <div className="flex items-center justify-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-none transition-all duration-300 hover:bg-blue-600 hover:shadow-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Start Phase 01</span>
              <FiArrowRight className="text-lg group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>

          <Link to="/portfolio" className="group py-2">
            <div className="flex items-center gap-3 border-b border-transparent group-hover:border-blue-600 transition-all pb-1">
              <span className="text-slate-400 group-hover:text-slate-900 text-[10px] font-black uppercase tracking-[0.3em]">
                Browse Work
              </span>
              <FiArrowUpRight className="text-slate-400 group-hover:text-blue-600 transition-colors" />
            </div>
          </Link>
        </div>

      </div>
    </ScrollReveal>

    {/* Footer Detail Line */}
    <div className="mt-12 flex justify-between items-center opacity-20 grayscale text-[10px] font-black uppercase tracking-widest text-slate-900">
      <span>FK Systems &copy; 2024</span>
      <div className="h-[1px] flex-1 mx-8 bg-slate-900"></div>
      <span>All Systems Operational</span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}
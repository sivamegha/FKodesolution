import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import serviceDetailsData from "../data/serviceDetailsData";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCheckCircle,
  FiArrowRight,
  FiArrowLeft,
  FiZap,
} from "react-icons/fi";

export default function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const service = serviceDetailsData[id];
  const serviceKeys = Object.keys(serviceDetailsData); 
  const currentKeyIndex = serviceKeys.indexOf(id);

  const prevKey = serviceKeys[currentKeyIndex - 1];
  const nextKey = serviceKeys[currentKeyIndex + 1];
  const prevService = prevKey ? serviceDetailsData[prevKey] : null;
  const nextService = nextKey ? serviceDetailsData[nextKey] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8fbff]">
        <motion.div initial={{scale:0.9}} animate={{scale:1}} className="text-center">
          <h2 className="text-4xl font-black text-slate-900 mb-6">Service Not Found</h2>
          <button onClick={() => navigate('/services')} className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold shadow-lg">
            Back to Ecosystem
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="relative bg-[#f8fbff] min-h-screen pt-32 pb-20 overflow-visible">
      
      {/* ===== BACKGROUND DECOR ===== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-400/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-indigo-400/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.07] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <AnimatePresence mode="wait">
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] mb-8">
                <FiZap className="animate-bounce" /> Enterprise Grade Solution
              </div>
              
<h1 className="
  text-4xl 
  sm:text-5xl 
  md:text-6xl 
  lg:text-7xl 
  font-black text-slate-900 mb-8 leading-[1] tracking-tighter italic uppercase
">
                {service.h1.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? "text-blue-600 not-italic" : ""}>{word} </span>
                ))}
              </h1>

              <p className="text-xl text-slate-500 leading-relaxed mb-10 border-l-4 border-blue-600 pl-8">
                {service.intro}
              </p>

              <button onClick={() => navigate("/contact")} className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all shadow-2xl">
                Start Project
              </button>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <img
                src={service.image}
                alt={service.h1}
                className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover border-[12px] border-white group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* DETAILS GRID */}
        <div className="mt-32 grid lg:grid-cols-3 gap-12 items-start"> {/* items-start is crucial for sticky */}
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-20">
            {service.sections.map((section, i) => (
              <motion.div 
                initial={{opacity:0, x:-20}} 
                whileInView={{opacity:1, x:0}}
                viewport={{once:true}}
                key={i} 
                className="relative"
              >
                <h2 className="text-4xl font-black  text-blue-900  mb-6 uppercase tracking-tight flex items-center gap-4">
                  {section.title}
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-2xl border-l-4 border-blue-600 pl-8">
                  {section.description || section.content}
                </p>
                
                {section.list && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.list.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 p-5 bg-white/50 backdrop-blur-md rounded-2xl border border-white shadow-sm hover:border-blue-200 hover:shadow-md transition-all group">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                            <FiCheckCircle className="text-blue-600 group-hover:text-white" />
                        </div>
                        <span className="text-slate-800 font-bold text-sm tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDEBAR - FIXED STICKY LOGIC */}
          <div className="lg:col-span-1 relative h-full">
            <div className="sticky top-32 self-start">
              <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden shadow-2xl border border-white/5 group transition-transform duration-500 hover:-translate-y-2">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-3xl rounded-full" />
                
                <h3 className="relative z-10 text-3xl font-black mb-6 leading-tight tracking-tighter uppercase">
                  Ready to scale your enterprise?
                </h3>

                <p className="relative z-10 text-slate-400 mb-8 text-sm leading-relaxed uppercase">
                  Schedule a technical discovery call with our engineering leads today.
                </p>

                <button
                  onClick={() => navigate("/contact")}
                  className="relative z-10 w-full py-4 bg-blue-600 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-blue-600 transition-all shadow-lg"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION AREA */}
        <div className="mt-40 border-t border-slate-200 pt-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="w-full md:w-1/3">
              {prevService ? (
                <button
                  onClick={() => navigate(`/services/${prevKey}`)}
                  className="group flex flex-col p-8 rounded-[2rem] border border-slate-100 hover:border-blue-200 hover:bg-white transition-all text-left w-full shadow-sm"
                >
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                    <FiArrowLeft /> Previous
                  </span>
                  <span className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{prevService.h1}</span>
                </button>
              ) : <div className="hidden md:block w-full" />}
            </div>

            <div className="w-full md:w-auto flex justify-center order-first md:order-none">
              <button
                onClick={() => navigate("/services")}
                className="group relative px-10 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-blue-600 transition-all shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-3">
                  All Services <FiZap className="text-yellow-400" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>

            <div className="w-full md:w-1/3 text-right">
              {nextService ? (
                <button
                  onClick={() => navigate(`/services/${nextKey}`)}
                  className="group flex flex-col p-8 rounded-[2rem] border border-slate-100 hover:border-blue-200 hover:bg-white transition-all text-right items-end w-full shadow-sm"
                >
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-2 flex items-center gap-2">
                    Next <FiArrowRight />
                  </span>
                  <span className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">{nextService.h1}</span>
                </button>
              ) : <div className="hidden md:block w-full" />}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
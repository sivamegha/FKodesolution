import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Background from "../pictures/Background3.png";
import { motion } from "framer-motion";

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Reveal Animation for Text and Cards
      gsap.fromTo(
        ".reveal",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // 2. Floating Animation for Orbs & Background Rings
      gsap.to(".floating-shape", {
        y: "random(-50, 60)",
        x: "random(-30, 40)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

      // 3. Slow Rotation for the Big Rings
      gsap.to(".big-ring", {
        rotate: 360,
        duration: 40,
        repeat: -1,
        ease: "none"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contacts = [
    { label: "Location", value: "Arumbakkam, Chennai – 600106", link: "#", icon: MapPinIcon },
    { label: "WhatsApp", value: "+91 82487 98337", link: "https://wa.me/918248798337", icon: PhoneIcon },
    { label: "Email", value: "fkodesolution@gmail.com", link: "mailto:fkodesolution@gmail.com", icon: EnvelopeIcon },
    { label: "Website", value: "www.fkodesolution.com", link: "https://www.fkodesolution.com", icon: GlobeAltIcon },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMessage("Thank you! Your message has been sent.");
    e.target.reset();
    setTimeout(() => setFormMessage(""), 5000);
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 bg-[#f8faff] text-gray-900 overflow-hidden">
      
      {/* ===== ⭕ DYNAMIC BACKGROUND WITH BIG RINGS ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Main Background Texture */}
        <div 
          className="absolute inset-0 opacity-[0.3] " 
          style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover' }} 
        />
        
     
        {/* Colorful Gradients & Floating Orbs */}
        <div className="floating-shape absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/10 rounded-full blur-[80px]" />
        <div className="floating-shape absolute top-1/4 -right-20 w-80 h-80 bg-gradient-to-tr from-cyan-300/20 to-blue-500/10 rounded-full blur-[100px]" />
        
        {/* Center Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent" />

        {/* Mesh Dotted Pattern */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-[0.1]" 
             style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "32px 32px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-24 reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-blue-600"></span>
            <h4 className="text-blue-600 font-bold tracking-[0.3em] uppercase text-sm">Get in Touch</h4>
          </div>
<h2
  className="
    text-4xl 
    sm:text-5xl 
    md:text-6xl 
    lg:text-8xl 
    font-black 
    text-slate-900 
    leading-[1] 
    tracking-tighter
  "
>
            LET'S BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic">
              SOMETHING GREAT.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
         <div className="lg:col-span-5 reveal">
            <div className="bg-white/70 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-xs font-black text-blue-600 mb-10 uppercase tracking-[0.3em]">
                Contact Channels
              </h3>

              <div className="space-y-8">
                {contacts.map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="flex items-center gap-5 group"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                        {item.label}
                      </p>
                      <p className="text-base sm:text-lg font-bold text-slate-800 group-hover:text-blue-600">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT – FORM */}
          <div className="lg:col-span-7 reveal">
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-14 rounded-[3rem] shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                {["Name", "Email"].map((field) => (
                  <div key={field} className="relative">
                    <input
                      required
                      type={field === "Email" ? "email" : "text"}
                      placeholder=" "
                      className="peer w-full border-b-2 border-slate-200 py-3 sm:py-4 bg-transparent outline-none text-base sm:text-lg font-bold focus:border-blue-600"
                    />
                    <label className="absolute left-0 top-4 text-slate-400 text-[10px] uppercase tracking-widest peer-focus:-top-4 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 transition-all">
                      {field}
                    </label>
                  </div>
                ))}
              </div>

              <div className="relative mb-12">
                <textarea
                  required
                  rows="4"
                  placeholder=" "
                  className="peer w-full border-b-2 border-slate-200 py-3 sm:py-4 bg-transparent outline-none text-base sm:text-lg font-bold focus:border-blue-600 resize-none"
                />
                <label className="absolute left-0 top-4 text-slate-400 text-[10px] uppercase tracking-widest peer-focus:-top-4 peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 transition-all">
                  Brief us about your project
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-10 sm:px-16 py-5 sm:py-6 bg-slate-900 text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl"
              >
                Submit Proposal
              </button>

              {formMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 p-4 bg-blue-600 text-white rounded-xl text-center font-bold text-sm"
                >
                  {formMessage}
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
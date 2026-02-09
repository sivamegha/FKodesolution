import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiTarget, FiActivity, FiSettings, FiExternalLink, FiMail, FiCheckCircle } from "react-icons/fi";

export default function CookiePolicy() {
  const [loading, setLoading] = useState(true);

  // Loader logic: Content-ah 0.5s delay panni smooth-ah kaata
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const cookieTypes = [
    {
      title: "Essential Cookies",
      description: "Required for core functions like secure login, authentication, and page navigation.",
      icon: <FiTarget className="text-blue-600" />,
      tag: "Required"
    },
    {
      title: "Analytics Cookies",
      description: "Aggregates data to help us understand how users interact with our platform for performance tuning.",
      icon: <FiActivity className="text-indigo-600" />,
      tag: "Performance"
    },
    {
      title: "Preference Cookies",
      description: "Remembers your personalized settings like language, theme, and dashboard layouts.",
      icon: <FiSettings className="text-cyan-600" />,
      tag: "Experience"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-blue-100 selection:text-blue-900">
      <AnimatePresence>
        {loading ? (
          /* ===== LOADER ===== */
          <motion.div
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          >
            <div className="w-12 h-12 border-4 border-slate-100 border-t-blue-600 rounded-full animate-spin mb-4" />
            <p className="text-slate-500 font-bold tracking-widest text-xs uppercase animate-pulse">
              Syncing Policies...
            </p>
          </motion.div>
        ) : (
          /* ===== MAIN CONTENT ===== */
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative py-24 px-6"
          >
            {/* Background Gradient Decor */}
            <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />

            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-20">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
                >
                  Transparency Report
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
                  Cookie <span className="text-blue-600">Policy.</span>
                </h1>
                <p className="text-slate-500 font-medium">
                  Effective Date: <span className="text-slate-900 font-bold">15 July 2025</span>
                </p>
              </div>

              {/* Main Content Card */}
              <div className="bg-white border border-slate-200 rounded-[2.5rem] shadow-sm p-8 md:p-14 mb-16">
                <p className="text-xl text-slate-600 leading-relaxed font-light mb-16 italic border-l-4 border-blue-500 pl-8">
                  At <span className="text-slate-900 font-bold not-italic font-sans">FKode Solution</span>, we utilize small data files (cookies) to create a more fluid, secure, and personalized engineering ecosystem for our users.
                </p>

                <h2 className="text-3xl font-bold text-slate-900 mb-8">What are Cookies?</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-16">
                  Cookies are industry-standard text files stored on your hardware. They act as a memory for the browser, 
                  allowing us to recognize your session, secure your account, and optimize the delivery of assets.
                </p>

                {/* Cookie Types Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                  {cookieTypes.map((cookie, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-2xl">
                        {cookie.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded-md mb-4 inline-block">
                        {cookie.tag}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mb-3">{cookie.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{cookie.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-12">
                  <PolicySection title="Managing Your Settings">
                    You have total control over your data. Most browsers allow you to block or delete cookies through 
                    their settings panel. However, please note that disabling essential cookies may degrade the 
                    performance of our web-based solutions.
                  </PolicySection>

                  <PolicySection title="Third-Party Integration">
                    We may integrate trusted third-party analytics tools (like Google Cloud Analytics) to monitor traffic 
                    patterns. These partners are strictly prohibited from utilizing your personal data for their 
                    own marketing purposes.
                  </PolicySection>

                  <PolicySection title="Your Implicit Consent">
                    By navigating the <span className="font-semibold text-slate-900">FKode Solution</span> ecosystem, 
                    you signify your understanding of these data tracking protocols. You may opt-out at any time 
                    through your device's security preferences.
                  </PolicySection>
                </div>
              </div>

              {/* Contact Footer Card */}
              <div className="bg-slate-900 rounded-[2.5rem] p-10 md:p-14 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="max-w-md">
                    <h3 className="text-3xl font-bold mb-4">Questions regarding data tracking?</h3>
                    <p className="text-slate-400 text-sm">
                      Our data protection desk is available for technical clarifications.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 w-full md:w-auto">
                    <a href="mailto:fkode.careers@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all rounded-2xl font-bold text-center justify-center shadow-lg shadow-blue-900/40">
                      <FiMail /> fkode.careers@gmail.com
                    </a>
                    <div className="flex items-center gap-2 text-slate-500 text-xs justify-center uppercase tracking-widest">
                      <FiCheckCircle className="text-green-500" /> Responses within 24 Hours
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center mt-16 text-xs font-bold text-slate-400 tracking-[0.4em] uppercase">
                © 2025 FKode Solution • Privacy Verified
              </p>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ===== REUSABLE POLICY COMPONENT ===== */
function PolicySection({ title, children }) {
  return (
    <div className="group">
      <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-3">
        <FiExternalLink className="text-blue-500 text-sm opacity-0 group-hover:opacity-100 transition-all" />
        {title}
      </h3>
      <div className="pl-6 border-l-2 border-slate-100 group-hover:border-blue-600 transition-colors">
        <p className="text-slate-500 leading-relaxed text-lg font-light">
          {children}
        </p>
      </div>
    </div>
  );
}
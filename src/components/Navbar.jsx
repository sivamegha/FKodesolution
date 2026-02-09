import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FKLogo from "./FKLogo";
import { FiArrowRight, FiMenu, FiX,FiChevronDown, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import serviceDetailsData from "../data/serviceDetailsData"; 


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu-vai close seiya
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  // Dynamic Navigation - Intha function thaan dynamic id-yai anuppum
  const goToService = (serviceId) => {
    navigate(`/services/${serviceId}`);
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  };

  // Object keys-ai array-ah maathugirom (branding, software, etc.)
  const serviceKeys = Object.keys(serviceDetailsData);

  return (
    <nav
      onMouseLeave={() => setIsMegaMenuOpen(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMegaMenuOpen || isMobileMenuOpen ? "bg-white shadow-xl py-4" : "bg-black/40 backdrop-blur-md py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <FKLogo size={0.8} showText={false} />
         <span
  className={`hidden md:block text-xl font-automata display ${
    isScrolled || isMegaMenuOpen || isMobileMenuOpen
      ? "text-slate-950"
      : "text-white"
  }`}
>
 <div className="font-automata flex items-center text-1xl uppercase tracking-widest">
  {/* F - Blue */}
  <span className="text-blue-600 font-bold">F</span>
  
  {/* K - Orange */}
  <span className="text-orange-500 font-bold">K</span>
  
  {/* ode Solution - Silver/Grey */}
  <span className="text-slate-700 ">
    ode Solution
  </span>
</div></span>

        </NavLink>

       {/* DESKTOP MENU */}
<div className="hidden md:flex items-center gap-8">
  
  {/* HOME */}
  <NavLink 
    to="/" 
    className={({ isActive }) => 
        isActive 
          ? "text-blue-600 font-black scale-110" 
          : `font-bold ${isScrolled || isMegaMenuOpen ? "text-slate-900" : "text-white"}`
      
    }
  >
    Home
  </NavLink>

 {/* SERVICES - High-End Mega Menu Logic */}
<div
  className="relative group" // added group for easier styling if needed
  onMouseEnter={() => setIsMegaMenuOpen(true)}
  onMouseLeave={() => setIsMegaMenuOpen(false)}
>
  {/* Trigger Link */}
  <div className="py-2 cursor-pointer"> {/* Padding increased to bridge the gap */}
   <NavLink
  to="/Services"
  className={({ isActive }) =>
    `flex items-center gap-1 text-[11px] uppercase tracking-widest transition-all duration-300 ${
      isActive 
        ? "text-blue-600 font-black scale-110" // Click panna (Active-a iruntha) mattum blue color
        : `font-bold ${isScrolled || isMegaMenuOpen ? "text-slate-900" : "text-white"}` 
        // Hover-la color change aagaamal irukka 'hover' class-ai remove panniyachu
    }`
  }
>
  Services
  <FiChevronDown
    className={`text-[14px] transition-transform duration-300 ${
      isMegaMenuOpen ? "rotate-180" : ""
    }`}
  />
</NavLink>
  </div>

  {/* MEGA MENU */}
  <AnimatePresence>
    {isMegaMenuOpen && (
      <motion.div
        initial={{ opacity: 0, y: 15 }} // Reduced y offset for smoother transition
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        // Added pointer-events-auto to ensure clicks work
        className="fixed top-[70px] left-0 w-full bg-white border-t border-slate-100 shadow-2xl hidden md:block z-[999] pointer-events-auto"
      >
        {/* Bridge: Intha div menu-vukkum navbar-ukkum naduvula gap-ai fill pannum */}
        <div className="absolute -top-[20px] left-0 w-full h-[20px] bg-transparent" />

        <div className="max-w-7xl mx-auto grid grid-cols-12 p-12">
          {/* Left Column */}
          <div className="col-span-4 border-r border-slate-100 pr-8">
            <h3 className="text-3xl font-black uppercase text-slate-900 leading-tight">
              Our Core <br /> Expertise
            </h3>
            <p className="mt-4 text-slate-500 text-sm italic border-l-2 border-blue-600 pl-4">
              Choose a service to see details.
            </p>
          </div>
          
          {/* Right Column (Services List) */}
          <div className="col-span-8 pl-12 grid grid-cols-2 gap-x-8 gap-y-2">
            {serviceKeys && serviceKeys.length > 0 ? (
              serviceKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    goToService(key);
                    setIsMegaMenuOpen(false); 
                  }}
                  className="group/item flex items-center justify-between py-4 border-b border-slate-50 hover:border-blue-600 transition-all text-left"
                >
                  <span className="font-bold uppercase tracking-widest text-[12px] text-slate-800 group-hover/item:text-blue-600">
                    {key.split('-').join(' ')}
                  </span>
                  <FiArrowRight className="text-blue-600 opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                </button>
              ))
            ) : (
              <p className="text-slate-400">No services found.</p>
            )}
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</div>

  {/* WHY FKODE */}
  <NavLink 
    to="/why-fkode" 
    className={({ isActive }) => 
        isActive 
          ? "text-blue-600 font-black scale-110" 
          : `font-bold ${isScrolled || isMegaMenuOpen ? "text-slate-900" : "text-white"}`
    }
  >
    Why FKode
  </NavLink>

  <NavLink to="/industries" className={({ isActive }) => isActive ? "text-blue-600 font-black scale-110 text-[11px] uppercase tracking-widest" : `text-[11px] uppercase tracking-widest font-bold ${isScrolled || isMegaMenuOpen ? "text-slate-900" : "text-white"}`}>Industries</NavLink>
  <NavLink to="/founder" className={({ isActive }) => isActive ? "text-blue-600 font-black scale-110 text-[11px] uppercase tracking-widest" : `text-[11px] uppercase tracking-widest font-bold ${isScrolled || isMegaMenuOpen ? "text-slate-900" : "text-white"}`}>Founder</NavLink>
  <NavLink to="/testimonials" className={({ isActive }) => isActive ? "text-blue-600 font-black scale-110 text-[11px] uppercase tracking-widest" : `text-[11px] uppercase tracking-widest font-bold ${isScrolled || isMegaMenuOpen ? "text-slate-900" : "text-white"}`}>Reviews</NavLink>
   <NavLink to="/career" className={({ isActive }) => isActive ? "text-blue-600 font-black scale-110 text-[11px] uppercase tracking-widest" : `text-[11px] uppercase tracking-widest font-bold ${isScrolled || isMegaMenuOpen ? "text-slate-900" : "text-white"}`}>Career</NavLink>

  {/* CONTACT */}
  <NavLink 
    to="/contact" 
    className="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-[11px] font-bold uppercase tracking-widest shadow hover:scale-105 transition"
  >
    Contact
  </NavLink>

</div>
        {/* MOBILE MENU BUTTON */}
        <button className={`md:hidden text-2xl ${isScrolled || isMobileMenuOpen ? "text-slate-900" : "text-white"}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      

    {/* MOBILE MENU PANEL */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed inset-0 top-[70px] bg-white z-[60] md:hidden overflow-y-auto px-8 py-12 flex flex-col"
    >
      <div className="flex flex-col space-y-8 text-slate-900">
        
        {/* Home Button */}
        <button 
          onClick={() => {
            navigate('/');
            setIsMobileMenuOpen(false); 
          }} 
          className="text-left text-4xl font-black uppercase"
        >
          Home
        </button>
        
     <div className="border-b pb-6">

  {/* SERVICES ROW */}
  <div className="flex items-center justify-between w-full">

    {/* PAGE NAVIGATION */}
    <button
      onClick={() => navigate("/services")}
      className="text-4xl font-black uppercase"
    >
      Services
    </button>

    {/* DROPDOWN TOGGLE */}
    <button
      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
    >
      <FiChevronDown
        className={`transition-transform duration-300 ${
          isMobileServicesOpen ? "rotate-180" : ""
        }`}
      />
    </button>

  </div>

  {/* DROPDOWN MENU */}
  {isMobileServicesOpen && (
    <div className="mt-6 flex flex-col space-y-4 pl-4 border-l-2 border-blue-600">
      {serviceKeys.map((key) => (
        <button
          key={key}
          onClick={() => {
            goToService(key);
            setIsMobileMenuOpen(false);
          }}
          className="text-left text-xl font-bold text-slate-500 uppercase"
        >
          {key.replace(/-/g, " ")}
        </button>
      ))}
    </div>
  )}

</div>

        {/* Other Pages */}
        <button 
          onClick={() => {
            navigate("/why-fkode");
            setIsMobileMenuOpen(false);
          }} 
          className="text-left text-4xl font-black text-slate-900 uppercase"
        >
          Why FKode
        </button>

        <button 
          onClick={() => {
            navigate("/industries");
            setIsMobileMenuOpen(false);
          }} 
          className="text-left text-4xl font-black text-slate-900 uppercase"
        >
          Industries
        </button>

        <button 
          onClick={() => {
            navigate("/founder");
            setIsMobileMenuOpen(false);
          }} 
          className="text-left text-4xl font-black text-slate-900 uppercase"
        >
          Founder
        </button>

        {/* CTA Button */}
        <button 
          onClick={() => {
            navigate("/contact");
            setIsMobileMenuOpen(false);
          }} 
          className="mt-4 py-5 w-full bg-blue-600 text-white text-center text-xl font-bold rounded-2xl shadow-lg uppercase active:scale-95 transition-transform"
        >
          Get In Touch
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>
</nav>
  );
}
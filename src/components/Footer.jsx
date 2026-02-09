import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaGlobe,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const bubbleRefs = useRef([]);
  const logoRef = useRef(null);

  useEffect(() => {
    bubbleRefs.current.forEach((bubble, i) => {
      if (!bubble) return;
      gsap.to(bubble, {
        y: "+=30",
        x: "+=20",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 6 + i * 2,
      });
    });

    const letters = logoRef.current.querySelectorAll("span");
    gsap.fromTo(
      letters,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1.1,
        ease: "power4.out",
      }
    );
  }, []);

  const openWhatsApp = () =>
    window.open("https://wa.me/918248798337", "_blank");

  return (
    <footer className="relative bg-black text-white overflow-hidden pt-20 pb-8">
      {/* Background bubbles */}
      <div
        ref={(el) => (bubbleRefs.current[0] = el)}
        className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"
      />
      <div
        ref={(el) => (bubbleRefs.current[1] = el)}
        className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-orange-500/20 rounded-full blur-[140px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="inline-block">
            <div
              ref={logoRef}
              className="text-2xl font-extrabold mb-4 flex flex-wrap gap-1"
            >
              {"FKode Solution".split("").map((c, i) => (
                <span
                  key={i}
                  className={
                    c !== " "
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400"
                      : ""
                  }
                >
                  {c}
                </span>
              ))}
            </div>
          </Link>

          <p className="text-gray-400 text-sm">
            Your Complete Business Solution Partner.
          </p>
          <p className="text-gray-500 text-xs mt-1">
            Branding • Registration • Software • Marketing • Corporate Gifting
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 text-blue-400">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
            <li><Link to="/services" className="hover:text-blue-500">Services</Link></li>
            <li><Link to="/why-fkode" className="hover:text-blue-500">Why FKode</Link></li>
            <li><Link to="/industries" className="hover:text-blue-500">Industries</Link></li>
            <li><Link to="/founder" className="hover:text-blue-500">Founder</Link></li>
            <li><Link to="/testimonials" className="hover:text-blue-500">Reviews</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>

               </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4 text-blue-400">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/services/branding" className="hover:text-blue-500">Branding & Design</Link></li>
            <li><Link to="/services/registration" className="hover:text-blue-500">Business Registration</Link></li>
            <li><Link to="/services/marketing" className="hover:text-blue-500">Digital Marketing</Link></li>
            <li><Link to="/services/software" className="hover:text-blue-500">Software Development</Link></li>
            <li><Link to="/services/gifting" className="hover:text-blue-500">Corporate Gifting</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4 text-blue-400">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              <a
                href="https://www.google.com/maps?q=Arumbakkam,Chennai,India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                Arumbakkam, Chennai, India
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FaPhone className="text-green-400" />
              <a
                href="https://wa.me/918248798337"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                +91 82487 98337
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FaGlobe className="text-blue-500" />
              <a
                href="https://www.fkodesolution.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400"
              >
                www.fkodesolution.com
              </a>
            </li>
          </ul>

          <button
            onClick={openWhatsApp}
            className="mt-5 flex items-center gap-2 px-5 py-2.5
                       bg-gradient-to-r from-blue-400 to-orange-400
                       rounded-full font-semibold shadow-lg
                       hover:scale-105 transition"
          >
            <FaWhatsapp /> Chat on WhatsApp
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-14 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} FKode Solution. All rights reserved.
        <div className="mt-2 flex justify-center gap-4 text-xs">
          <Link to="/TermsConditions" className="hover:text-orange-400">Terms</Link>
          <span>|</span>
          <Link to="/PrivacyPolicy" className="hover:text-orange-400">Privacy</Link>
           <span>|</span>
          <Link to="/CookiePolicy" className="hover:text-orange-400">Cookie</Link>
       
        </div>
      </div>
    </footer>
  );
}

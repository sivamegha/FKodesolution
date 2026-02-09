import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseFKode from "./components/WhyChooseFKode";
import Industries from "./components/Industries";
import Founder from "./components/Founder";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetails from "./components/ServiceDetails";
import servicesData from "./components/servicesData";
import ScrollToTop from "./components/ScrollToTop";
import TermsConditions from "./components/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";
import CareerPage from "./components/CareerPage"; 



import MagneticCursor from "./components/MagneticCursor";


import "./App.css";

function App() {
  return (
    <div className="App bg-mesh unique-bg-animate relative">
      <MagneticCursor />

      {/* ONE Navbar only */}
      <Navbar />
<ScrollToTop />
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Hero />} />

        {/* SECTIONS – click pannina mattum varum */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/why-fkode" element={<WhyChooseFKode />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/cta" element={<CTA />} />
                <Route path="/career" element={<CareerPage />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/CookiePolicy" element={<CookiePolicy />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;

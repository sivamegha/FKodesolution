import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Tunnel() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.z += 0.002;
  });

  return (
    <mesh ref={ref}>
      <cylinderGeometry args={[5, 5, 30, 64, 1, true]} />
      <meshStandardMaterial
        color="#4f46e5"
        emissive="#6366f1"
        emissiveIntensity={1.5}
        side={2}
      />
    </mesh>
  );
}

export default function HeroLightTunnel() {
  return (
    <section id="home" className="relative h-screen text-white">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        className="absolute inset-0"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 10]} intensity={2} />
        <Tunnel />
      </Canvas>

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 md:px-10">
        <div className="max-w-5xl text-center">
          <p className="text-sm md:text-base uppercase tracking-widest text-indigo-400 mb-4">
            FKode Solution – Complete Business Solution Provider
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-6 italic">
            "We Build Businesses. Not Just Software."
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Transform Your Business From <br />
            <span className="text-indigo-400">Idea to Success</span> — All Under One Roof.
          </h1>
          <p className="mt-6 text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            FKode Solution is India's all-in-one Complete Business Solution Provider.
            From branding to registration, software to marketing, and corporate gifting to scaling,
            we help you start, grow, and digitalize your business — effortlessly.
          </p>
          <p className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl mx-auto">
            Empowering Entrepreneurs, Startups & Companies to Launch, Grow & Scale.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/50"
            >
              ➡ Start Your Business
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById("what-we-offer");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              ➡ Explore Full Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaHandsHelping, FaShoppingCart, FaLock } from "react-icons/fa";
import { MdMovieCreation, MdGroups } from "react-icons/md";
import { RiFilmFill } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

function SubtleGridMotion() {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.002;
    }
  });
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <planeGeometry args={[30, 30, 30, 30]} />
      <meshBasicMaterial wireframe color="#1e40af" opacity={0.03} transparent />
    </mesh>
  );
}

const offerings = [
  {
    title: "Thunaivan",
    status: "Live",
    desc: "A people-first digital support platform designed to assist and empower users.",
    points: [
      "iOS & Android mobile apps",
      "Flutter & React Native",
      "Secure API architecture",
      "Enterprise-grade performance",
      "Real-time chat & AI assistance",
    ],
    icon: <FaHandsHelping className="text-cyan-500 w-6 h-6" />,
  },
  {
    title: "Shopping",
    status: "In Progress",
    desc: "Smart commerce solution focused on trust, usability, and seamless experiences.",
    points: [
      "React / Next.js frontend",
      "SEO & Performance Optimized",
      "Cloud-ready architecture",
      "Scalable UI systems",
      "Payment gateway integration",
    ],
    icon: <FaShoppingCart className="text-blue-500 w-6 h-6" />,
  },
  {
    title: "Cinematography",
    status: "Coming Soon",
    desc: "Platform for creators who value cinematic excellence and collaboration.",
    points: [
      "ERP / CRM Systems",
      "Process automation",
      "Role-based access",
      "Advanced reporting",
      "Secure media library",
    ],
    icon: <MdMovieCreation className="text-purple-500 w-6 h-6" />,
  },
  {
    title: "Iyer Connect",
    status: "Live",
    desc: "Culturally aligned connection platform built with transparency and trust.",
    points: [
      "AI Assistants & Chatbots",
      "Workflow automation",
      "Predictive analytics",
      "24/7 Intelligent Systems",
      "Community engagement tools",
    ],
    icon: <MdGroups className="text-green-500 w-6 h-6" />,
  },
  {
    title: "Cinekaran",
    status: "Locked",
    desc: "Professional collaboration space connecting cinema talents with structured workflows.",
    points: [
      "AI-powered project tracking",
      "Automated workflow & task assignment",
      "Predictive analytics",
      "24/7 monitoring",
      "Role-based access & permissions",
    ],
    icon: <RiFilmFill className="text-pink-500 w-6 h-6" />,
  },
];

export default function DigitalProductsCorporate() {
  const containerRef = useRef();

  useEffect(() => {
    const items = containerRef.current.querySelectorAll(".offering-item");
    items.forEach((item, i) => {
      gsap.fromTo(
        item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative bg-gray-50 overflow-hidden py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Canvas camera={{ position: [0, 3, 6] }}>
          <ambientLight intensity={0.6} />
          <SubtleGridMotion />
        </Canvas>
        <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-200/20 to-blue-400/20 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 space-y-32">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs tracking-[0.35em] uppercase text-gray-500">
            Our Digital Product Suite
          </p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Comprehensive Solutions <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
              For Modern Enterprises
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            FKode develops innovative digital products that support growth, reliability, and operational efficiency.
          </p>
        </div>

        {/* Offerings */}
        <div ref={containerRef} className="grid md:grid-cols-2 gap-16">
          {offerings.map((item, i) => (
            <div
              key={i}
              className="offering-item relative group p-6 transition hover:scale-105 hover:shadow-lg"
            >
              {/* Icon + Status */}
              <div className="flex items-center gap-3 mb-2">
                {item.icon}
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1 ${
                    item.status === "Live"
                      ? "bg-green-100 text-green-600"
                      : item.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {item.status}
                  {(item.status === "Locked" || item.status === "Coming Soon") && (
                    <FaLock className="ml-1 w-3 h-3" />
                  )}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-3">{item.desc}</p>

              {/* Key Points */}
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {item.points.map((p, idx) => (
                  <li
                    key={idx}
                    className={`${item.status === "Locked" ? "line-through text-gray-400" : ""}`}
                  >
                    {p}
                  </li>
                ))}
              </ul>

              {/* Animated underline gradient */}
              <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-400 to-blue-600 mt-4 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 mt-16">
          <h3 className="text-4xl font-bold text-gray-900">
            Let's Build Meaningful Digital Products
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you are launching new initiatives or scaling existing platforms, FKode serves as your long-term corporate technology partner.
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <button className="px-12 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold hover:scale-105 hover:shadow-lg transition">
              Start a Conversation
            </button>
            <button className="px-12 py-4 rounded-full border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

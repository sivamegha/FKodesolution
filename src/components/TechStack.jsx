import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { name: "React", desc: "Component-based UI development for scalable web apps" },
  { name: "Flutter", desc: "Single codebase mobile apps for Android & iOS" },
  { name: "Node.js", desc: "High-performance backend APIs and services" },
  { name: "Django", desc: "Secure backend framework with rapid development" },
  { name: "PostgreSQL", desc: "Reliable relational database for business data" },
  { name: "MongoDB", desc: "Flexible NoSQL database for dynamic content" },
  { name: "TypeScript", desc: "Type-safe JavaScript for large-scale systems" },
  { name: "Python", desc: "APIs, automation, and business logic" },
  { name: "AWS", desc: "Cloud infrastructure and scalable deployment" },
  { name: "Docker", desc: "Consistent builds and containerized deployments" },
  { name: "Firebase", desc: "Realtime database, auth, and notifications" },
  { name: "Three.js", desc: "Interactive 3D and visual web experiences" },
];

export default function TechStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stack-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".stack-desc", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".tech-row", {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".tech-list",
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-40 text-gray-900 overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-200/30 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="max-w-3xl mb-28">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-400 mb-6">
            Technology Stack
          </p>

          <h2 className="stack-title text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Technologies We Use to Build
            <span className="block text-indigo-600">
              Scalable Digital Products
            </span>
          </h2>

          <p className="stack-desc text-lg text-gray-500 leading-relaxed">
            Our development process relies on proven tools and modern frameworks
            that enable performance, maintainability, and long-term growth.
          </p>
        </div>

        {/* Tech list */}
        <div className="tech-list border-t border-gray-200">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="tech-row group relative grid md:grid-cols-3 gap-10 py-12 border-b border-gray-200"
            >
              {/* Animated underline */}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-indigo-600 transition-all duration-500 group-hover:w-full" />

              <div className="text-3xl font-medium tracking-tight transition-all duration-300 group-hover:translate-x-2 group-hover:text-indigo-600">
                {tech.name}
              </div>

              <div className="md:col-span-2 text-gray-500 text-lg leading-relaxed transition-all duration-300 group-hover:translate-x-2">
                {tech.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-32 max-w-3xl">
          <h3 className="text-3xl md:text-4xl font-semibold mb-6">
            Built with technologies developers trust.
          </h3>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our stack supports fast development, clean architecture, and smooth
            scaling — whether it’s a startup product or an enterprise platform.
          </p>
        </div>
      </div>
    </section>
  );
}

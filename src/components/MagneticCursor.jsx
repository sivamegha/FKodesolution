import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MagneticCursor() {
  const glowRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const { clientX, clientY } = e;

      gsap.to(glowRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        fixed top-0 left-0
        w-[450px] h-[450px]
        -translate-x-1/2 -translate-y-1/2
        pointer-events-none
        z-[9998]
        rounded-full
        blur-[150px]
        opacity-80
        animate-gradient
        bg-[radial-gradient(circle_at_center,
          rgba(249,115,22,0.35),
          rgba(56,189,248,0.25),
          rgba(0,0,0,0)_70%
        )]
      "
    />
  );
}

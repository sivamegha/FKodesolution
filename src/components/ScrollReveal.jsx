import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  let hiddenClasses = "opacity-0 translate-y-10 scale-[0.98]";
  let shownClasses = "opacity-100 translate-y-0 scale-100";

  if (variant === "left") {
    hiddenClasses = "opacity-0 -translate-x-12";
    shownClasses = "opacity-100 translate-x-0";
  } else if (variant === "right") {
    hiddenClasses = "opacity-0 translate-x-12";
    shownClasses = "opacity-100 translate-x-0";
  } else if (variant === "scale") {
    hiddenClasses = "opacity-0 scale-90";
    shownClasses = "opacity-100 scale-100";
  } else if (variant === "flip") {
    hiddenClasses = "opacity-0 [transform:rotateX(90deg)]";
    shownClasses = "opacity-100 [transform:rotateX(0deg)]";
  } else if (variant === "zoom-in") {
    hiddenClasses = "opacity-0 scale-110";
    shownClasses = "opacity-100 scale-100";
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.2,0,0,1)] will-change-transform will-change-opacity ${
        visible ? shownClasses : hiddenClasses
      } ${className}`}
    >
      {children}
    </div>
  );
}



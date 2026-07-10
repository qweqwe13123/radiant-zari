import { useRef, useState, useEffect, CSSProperties } from "react";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "zoom-in" | "flip-up" | "blur-in" | "slide-rotate";

interface Options {
  type?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const useAnimatedReveal = (options: Options = {}) => {
  const { type = "fade-up", delay = 0, duration = 800, threshold = 0.15 } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const hidden: CSSProperties = (() => {
    switch (type) {
      case "fade-up": return { opacity: 0, transform: "translateY(40px)" };
      case "fade-left": return { opacity: 0, transform: "translateX(-40px)" };
      case "fade-right": return { opacity: 0, transform: "translateX(40px)" };
      case "zoom-in": return { opacity: 0, transform: "scale(0.9)" };
      case "flip-up": return { opacity: 0, transform: "perspective(600px) rotateX(15deg) translateY(30px)" };
      case "blur-in": return { opacity: 0, filter: "blur(8px)", transform: "translateY(20px)" };
      case "slide-rotate": return { opacity: 0, transform: "translateY(30px) rotate(-2deg)" };
      default: return { opacity: 0 };
    }
  })();

  const shown: CSSProperties = { opacity: 1, transform: "none", filter: "none" };

  const style: CSSProperties = {
    ...(visible ? shown : hidden),
    transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: "opacity, transform, filter",
  };

  return { ref, style, visible };
};

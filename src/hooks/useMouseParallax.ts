import { useState, useEffect } from "react";

export const useMouseParallax = (intensity = 0.3) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 100 * intensity,
        y: (e.clientY / window.innerHeight - 0.5) * 100 * intensity,
      });
    };
    window.addEventListener("mousemove", handler, { passive: true });
    return () => window.removeEventListener("mousemove", handler);
  }, [intensity]);

  return pos;
};

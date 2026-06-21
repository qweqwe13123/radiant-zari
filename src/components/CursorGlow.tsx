import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, gx = 0, gy = 0;
    const handleMouse = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };

    const animate = () => {
      gx += (mx - gx) * 0.1;
      gy += (my - gy) * 0.1;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${gx - 200}px, ${gy - 200}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    const id = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", handleMouse); cancelAnimationFrame(id); };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[9999] mix-blend-soft-light hidden md:block"
      style={{
        background: "radial-gradient(circle, hsl(8 55% 62% / 0.12) 0%, transparent 70%)",
        filter: "blur(40px)",
      }}
      aria-hidden="true"
    />
  );
};

export default CursorGlow;

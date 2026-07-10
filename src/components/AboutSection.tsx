import { useMouseParallax } from "@/hooks/useMouseParallax";

const AboutSection = () => {
  const p = useMouseParallax(0.3);

  return (
    <section id="about" className="py-24 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.08) 0%, transparent 70%)",
          transform: `translate(${p.x}px, ${p.y}px)`,
          transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.06) 0%, transparent 70%)",
          transform: `translate(${-p.x * 0.8}px, ${-p.y * 0.8}px)`,
          transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
          filter: "blur(50px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div>
            <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-4">
              О нас
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Мы верим, что скромность —{" "}
              <span className="italic gradient-text">это сила</span>
            </h2>
          </div>

          <div>
            <p className="font-body text-primary-foreground/70 text-base md:text-lg leading-relaxed">
              Наш Сайт — это пространство для мусульманских женщин, которые хотят выглядеть
              стильно и элегантно, не жертвуя своими ценностями. Мы создаём гайды,
              проводим курсы и подбираем идеальные образы, чтобы каждая из вас чувствовала
              себя уверенно и красиво.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

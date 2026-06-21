import { useEffect, useState } from "react";
import heroModel from "@/assets/hero-model.jpg";
import { ArrowDownRight } from "lucide-react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
      {/* Full-screen static image — contain so the whole photo is visible */}
      <div className="absolute inset-0 flex items-center justify-center bg-background/90">
        <img
          src={heroModel}
          alt="Элегантная исламская мода"
          className="max-h-full max-w-full object-contain"
        />
        {/* Vignette / readability overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
        {/* Film grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.14] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-2xl">
          {/* Label */}
          <div className={`transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-rose" />
              <span className="text-[10px] font-body font-semibold tracking-[0.4em] uppercase text-rose">
                Senorita.chili_
              </span>
            </div>
          </div>

          {/* Title */}
          <div className={`transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground mb-2">
              Скромный
            </h1>
          </div>
          <div className={`transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-6">
              <span className="italic gradient-rose">стиль</span>
              <span className="text-foreground"> для</span>
            </h1>
          </div>
          <div className={`transition-all duration-1000 delay-[850ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground mb-6">
              мусульманок
            </h1>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-[1000ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mb-10">
              Утончённая элегантность, современный дизайн и уважение к традициям — всё в одном месте.
            </p>
          </div>

          {/* CTA */}
          <div className={`flex flex-wrap items-center gap-4 transition-all duration-1000 delay-[1200ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a
              href="#services"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-body text-[11px] font-medium tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 hover:shadow-2xl rounded-full"
            >
              <span className="relative z-10">Узнать больше</span>
              <ArrowDownRight size={14} className="relative z-10 group-hover:rotate-45 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-rose to-terra translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

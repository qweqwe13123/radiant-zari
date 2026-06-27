import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import serviceHijab from "@/assets/service-hijab.jpg";
import serviceIstanbul from "@/assets/service-istanbul.jpg";
import { useAnimatedReveal } from "@/hooks/useAnimatedReveal";
import { useTilt } from "@/hooks/useTilt";

const services = [
  {
    title: "Шоппинг-тур в Стамбул",
    subtitle: "Со стилистом · 3–5 дней",
    description: "Полноценный гардероб за несколько дней в Стамбуле: персональный шоппинг-лист, сопровождение и фотолокации.",
    image: serviceIstanbul,
    tag: "АВТОРСКИЙ ТУР",
    num: "01",
    link: "/istanbul",
  },
  {
    title: "Подбор хиджаба",
    subtitle: "По форме лица",
    description: "Профессиональный подбор идеального хиджаба с учётом формы вашего лица.",
    image: serviceHijab,
    price: "4 990 ₽",
    tag: "ПОДБОР",
    num: "02",
  },
];

const animationTypes = ["fade-left", "fade-right"] as const;

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const navigate = useNavigate();
  const { ref: tiltRef, handleMouseMove, handleMouseLeave } = useTilt<HTMLDivElement>(10);
  const reveal = useAnimatedReveal({
    type: animationTypes[index] as any,
    delay: 100,
    duration: 900,
  });

  const handleClick = () => {
    if ((service as any).link) {
      navigate((service as any).link);
    }
  };

  return (
    <div
      ref={reveal.ref}
      style={reveal.style}
      onClick={handleClick}
      className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center cursor-pointer"
    >
      {/* Image with 3D tilt */}
      <div
        ref={tiltRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden ${index % 2 !== 0 ? "md:order-2" : ""}`}
        style={{ transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={800}
          height={600}
          className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />
        {/* Animated shine on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
        {/* Color overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 glass px-3 py-1.5 group-hover:bg-gold group-hover:border-gold transition-all duration-500">
          <span className="text-[10px] font-body font-semibold tracking-[0.2em] uppercase text-foreground group-hover:text-gold-foreground transition-colors">
            {service.tag}
          </span>
        </div>
        <span className="absolute bottom-4 right-4 font-display text-6xl md:text-8xl font-black text-primary-foreground/5 select-none leading-none group-hover:text-gold/10 transition-colors duration-700">
          {service.num}
        </span>
      </div>

      {/* Content */}
      <div className={`space-y-4 ${index % 2 !== 0 ? "md:order-1 md:text-right" : ""}`}>
        <div>
          <span className="font-body text-[10px] font-semibold tracking-[0.3em] uppercase text-gold">
            {service.subtitle}
          </span>
          <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mt-2 group-hover:text-gold transition-colors duration-500">
            {service.title}
          </h3>
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
          {service.description}
        </p>
        <div className={`flex items-center gap-4 pt-4 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
          {(service as any).price && (
            <span className="font-display text-2xl font-bold text-foreground">{(service as any).price}</span>
          )}
          <div className="p-3 border border-border group-hover:border-gold group-hover:bg-gold group-hover:text-gold-foreground transition-all duration-500 group-hover:rotate-[360deg] group-hover:shadow-[0_8px_30px_hsl(var(--gold)/0.3)]">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const header = useAnimatedReveal({ type: "flip-up", duration: 1000 });

  return (
    <section id="services" className="py-24 md:py-36 bg-background relative overflow-hidden">
      {/* Animated decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold/30 animate-grow-line" />
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gold/3 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-gold/3 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={header.ref} style={header.style} className="mb-20 md:mb-28">
          <p className="text-xs font-body font-medium tracking-[0.3em] uppercase text-gold mb-3">
            Что мы предлагаем
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground">
            Наши <span className="italic gradient-text">услуги</span>
          </h2>
        </div>

        <div className="space-y-20 md:space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

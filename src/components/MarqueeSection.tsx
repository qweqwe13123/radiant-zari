import { useAnimatedReveal } from "@/hooks/useAnimatedReveal";

const items = [
  "ХИДЖАБЫ", "✦", "СТИЛЬ", "✦", "ЭЛЕГАНТНОСТЬ", "✦",
  "ГАРМОНИЯ", "✦", "КУРСЫ", "✦", "МОДА", "✦", "КРАСОТА", "✦",
];

const MarqueeSection = () => {
  const reveal = useAnimatedReveal({ type: "zoom-in", duration: 600 });

  return (
    <div ref={reveal.ref} style={reveal.style} className="py-8 bg-primary overflow-hidden relative">
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      {/* Double marquee for seamless loop */}
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`font-display text-base md:text-lg font-medium tracking-[0.3em] uppercase mx-4 md:mx-8 flex-shrink-0 ${
              item === "✦" ? "text-rose" : "text-primary-foreground/80"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;

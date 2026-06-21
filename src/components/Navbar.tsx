import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const links = [
  { label: "Главная", href: "#" },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "/about", isRoute: true },
  { label: "Контакты", href: "/contacts", isRoute: true },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ["contact", "about", "services", "shop"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 300) {
          setActiveSection(`#${id}`);
          return;
        }
      }
      setActiveSection("#");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled ? "glass-panel shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between" style={{ height: scrolled ? 64 : 80 }}>
          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
            <div className="relative w-5 h-5">
              <span className={`absolute left-0 w-5 h-px bg-foreground transition-all duration-300 ${open ? "top-2.5 rotate-45" : "top-1"}`} />
              <span className={`absolute left-0 w-5 h-px bg-foreground transition-all duration-300 ${open ? "opacity-0" : "top-2.5 opacity-100"}`} />
              <span className={`absolute left-0 w-5 h-px bg-foreground transition-all duration-300 ${open ? "top-2.5 -rotate-45" : "top-4"}`} />
            </div>
          </button>

          {/* Desktop links left */}
          <div className="hidden md:flex items-center gap-8">
            {links.slice(0, 2).map((l) => (
              <a
                key={l.label}
                href={(l as any).isRoute ? undefined : l.href}
                onClick={(l as any).isRoute ? (e: React.MouseEvent) => { e.preventDefault(); navigate(l.href); } : undefined}
                className={`relative text-[11px] font-body font-medium tracking-[0.25em] uppercase transition-colors duration-300 cursor-pointer ${
                  activeSection === l.href ? "text-rose" : "text-foreground hover:text-rose"
                }`}
              >
                {l.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-rose transition-all duration-500 ${
                  activeSection === l.href ? "w-full" : "w-0"
                }`} />
              </a>
            ))}
          </div>

          {/* Logo center */}
          <a href="#" className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group">
            <span className="font-display text-lg md:text-xl font-light tracking-[0.15em] uppercase text-foreground group-hover:text-rose transition-colors duration-500" style={{ fontWeight: 400 }}>
              ZARIFA
            </span>
            <span className="text-[7px] font-body tracking-[0.4em] uppercase text-muted-foreground mt-[-1px]">
              collection
            </span>
          </a>

          {/* Right section */}
          <div className="flex items-center gap-3 md:gap-5">
            <div className="hidden md:flex items-center gap-8 mr-6">
              {links.slice(2).map((l) => (
                <a
                  key={l.label}
                  href={(l as any).isRoute ? undefined : l.href}
                  onClick={(l as any).isRoute ? (e: React.MouseEvent) => { e.preventDefault(); navigate(l.href); } : undefined}
                  className={`relative text-[11px] font-body font-medium tracking-[0.25em] uppercase transition-colors duration-300 cursor-pointer ${
                    activeSection === l.href ? "text-rose" : "text-foreground hover:text-rose"
                  }`}
                >
                  {l.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-rose transition-all duration-500 ${
                    activeSection === l.href ? "w-full" : "w-0"
                  }`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${open ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-foreground/20 backdrop-blur-sm transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`} onClick={() => setOpen(false)} />
        <div className={`absolute top-0 left-0 w-[280px] h-full bg-background shadow-2xl transition-transform duration-500 ${open ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="p-8 pt-20 space-y-6">
            {links.map((l, i) => (
              <a
                key={l.label}
                href={(l as any).isRoute ? undefined : l.href}
                onClick={() => { setOpen(false); if ((l as any).isRoute) navigate(l.href); }}
                className="block font-display text-2xl font-light text-foreground hover:text-rose transition-colors cursor-pointer"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {l.label}
              </a>
            ))}
            <hr className="hr-animated my-6" />
            <p className="text-[10px] font-body tracking-[0.3em] uppercase text-muted-foreground">
              © 2026 ZARIFA COLLECTION
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

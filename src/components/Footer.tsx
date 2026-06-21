import { Instagram, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1 space-y-4">
            <h3 className="font-display text-2xl font-bold tracking-[0.15em]">ZARIFA COLLECTION</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Элегантная исламская мода и персональный стиль для современных мусульманок.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/senorita.chili_?igsh=MTE4cTQxdHRydjRwNw==" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold transition-all duration-300 hover:-translate-y-1" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://t.me/senorita_chilli" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold transition-all duration-300 hover:-translate-y-1" aria-label="Telegram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.942z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@senorita.chilli_?_r=1&_d=ee4d3g79a1lhfl&sec_uid=MS4wLjABAAAA6OgTXi0fj2FHRh-ta5lhshchzMn8NUzmJpG4hycncUsrrOGwNtErumJFxAXKnfh0&share_author_id=6842622528831243269&sharer_language=ru&source=h5_m&u_code=dd5bm47lcka6ji&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=F1CF3EF6-F866-4385-9ED6-7E9490B55DB7&user_id=6842622528831243269&sec_user_id=MS4wLjABAAAA6OgTXi0fj2FHRh-ta5lhshchzMn8NUzmJpG4hycncUsrrOGwNtErumJFxAXKnfh0&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-gold transition-all duration-300 hover:-translate-y-1" aria-label="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a href="mailto:mega.zafira@mail.ru" className="text-primary-foreground/70 hover:text-gold transition-all duration-300 hover:-translate-y-1" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {[
            { title: "Магазин", items: ["Хиджабы", "Абайи", "Аксессуары", "Новинки"] },
            { title: "Услуги", items: ["Стайл-гайд", "Онлайн-курс", "Разбор гардероба", "Подбор хиджаба"] },
            { title: "Поддержка", items: ["Доставка", "Возврат", "Контакты", "FAQ"] },
          ].map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase">{col.title}</h4>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={(e) => {
                        if (item === "Контакты") { e.preventDefault(); navigate("/contacts"); }
                        else if (item === "Разбор гардероба") { e.preventDefault(); navigate("/wardrobe"); }
                      }}
                      className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-all duration-300 inline-block hover:translate-x-1"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-primary-foreground/50">
              © 2026 ZARIFA COLLECTION. Все права защищены.
            </p>
            <div className="flex gap-6">
              {["Политика конфиденциальности", "Условия использования"].map((item) => (
                <a key={item} href="#" className="font-body text-xs text-primary-foreground/50 hover:text-gold transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Big brand name - static */}
      <div className="overflow-hidden pb-4">
        <h2 className="font-display text-[15vw] font-black leading-none text-primary-foreground/[0.03] text-center tracking-[0.1em] select-none">
          ZARIFA
        </h2>
      </div>
    </footer>
  );
};

export default Footer;

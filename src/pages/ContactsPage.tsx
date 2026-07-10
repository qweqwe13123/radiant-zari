import { ArrowLeft, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Instagram } from "lucide-react";

const ContactsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDDCB5' }}>
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: 'rgba(253, 220, 181, 0.9)', borderColor: 'rgba(180, 130, 80, 0.15)' }}>
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <button onClick={() => navigate("/")} className="p-2 rounded-full transition-colors" style={{ color: '#5C3D2E' }}>
            <ArrowLeft size={20} />
          </button>
          <h1 className="font-display text-lg font-semibold" style={{ color: '#5C3D2E' }}>ZARIFA COLLECTION</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-16 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="font-display text-4xl font-bold" style={{ color: '#5C3D2E' }}>Контакты</h2>
          <div className="w-16 h-[3px] mx-auto rounded-full" style={{ background: 'linear-gradient(to right, transparent, #C4956A, transparent)' }} />
          <p className="font-body text-sm" style={{ color: '#A0714E' }}>Свяжитесь со мной любым удобным способом</p>
        </div>

        <div className="space-y-6">
          {/* Telegram */}
          <a
            href="https://t.me/senorita_chilli"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid rgba(196, 149, 106, 0.2)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(196, 149, 106, 0.2)' }}>
              <svg viewBox="0 0 24 24" fill="#5C3D2E" className="w-7 h-7">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
            <div>
              <p className="font-display text-lg font-bold" style={{ color: '#5C3D2E' }}>Telegram</p>
              <p className="font-body text-sm" style={{ color: '#A0714E' }}>@senorita_chilli</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/senorita.chili_?igsh=MTE4cTQxdHRydjRwNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid rgba(196, 149, 106, 0.2)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(196, 149, 106, 0.2)' }}>
              <Instagram size={28} style={{ color: '#5C3D2E' }} />
            </div>
            <div>
              <p className="font-display text-lg font-bold" style={{ color: '#5C3D2E' }}>Instagram</p>
              <p className="font-body text-sm" style={{ color: '#A0714E' }}>@senorita.chili_</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:mega.zafira@mail.ru"
            className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid rgba(196, 149, 106, 0.2)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(196, 149, 106, 0.2)' }}>
              <Mail size={28} style={{ color: '#5C3D2E' }} />
            </div>
            <div>
              <p className="font-display text-lg font-bold" style={{ color: '#5C3D2E' }}>Почта</p>
              <p className="font-body text-sm" style={{ color: '#A0714E' }}>mega.zafira@mail.ru</p>
            </div>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@senorita.chilli_?_r=1&_d=ee4d3g79a1lhfl&sec_uid=MS4wLjABAAAA6OgTXi0fj2FHRh-ta5lhshchzMn8NUzmJpG4hycncUsrrOGwNtErumJFxAXKnfh0&share_author_id=6842622528831243269&sharer_language=ru&source=h5_m&u_code=dd5bm47lcka6ji&item_author_type=1&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=F1CF3EF6-F866-4385-9ED6-7E9490B55DB7&user_id=6842622528831243269&sec_user_id=MS4wLjABAAAA6OgTXi0fj2FHRh-ta5lhshchzMn8NUzmJpG4hycncUsrrOGwNtErumJFxAXKnfh0&social_share_type=4&ug_btm=b8727,b0&utm_campaign=client_share&share_app_id=1233"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid rgba(196, 149, 106, 0.2)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(196, 149, 106, 0.2)' }}>
              <svg viewBox="0 0 24 24" fill="#5C3D2E" className="w-7 h-7">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
            <div>
              <p className="font-display text-lg font-bold" style={{ color: '#5C3D2E' }}>TikTok</p>
              <p className="font-body text-sm" style={{ color: '#A0714E' }}>@senorita.chilli_</p>
            </div>
          </a>
        </div>

        <div className="text-center pt-8">
          <p className="font-body text-xs tracking-widest uppercase" style={{ color: '#A0714E' }}>
            © 2026 ZARIFA COLLECTION
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;

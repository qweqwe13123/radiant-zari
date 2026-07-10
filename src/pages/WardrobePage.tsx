import { ArrowLeft, Play, VolumeX, Volume2, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import stylistPhoto from "@/assets/stylist-photo.jpg";

const videos = [
  { src: "/videos/look-1.mp4", title: "Elegant look" },
  { src: "/videos/look-2.mp4", title: "Classic style" },
  { src: "/videos/look-3.mp4", title: "Modern abaya" },
];

const VideoCard = ({ src, title, isSelected, onSelect }: { src: string; title: string; isSelected: boolean; onSelect: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  // Pause video when deselected
  useEffect(() => {
    if (!isSelected && videoRef.current && playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [isSelected]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div
      onClick={onSelect}
      className="relative flex-shrink-0 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
      style={{
        width: isSelected ? '300px' : '220px',
        aspectRatio: '9/16',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        transform: isSelected ? 'scale(1)' : 'scale(0.92)',
        opacity: isSelected ? 1 : 0.6,
        filter: isSelected ? 'none' : 'brightness(0.7)',
        zIndex: isSelected ? 10 : 1,
      }}
    >
      <video
        ref={videoRef}
        src={src}
        muted={muted}
        loop
        playsInline
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      {isSelected && (
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <button onClick={togglePlay} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
            {playing ? (
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="flex gap-1">
                  <div className="w-1.5 h-4 bg-white rounded-sm" />
                  <div className="w-1.5 h-4 bg-white rounded-sm" />
                </div>
              </div>
            ) : (
              <Play size={20} className="text-white ml-0.5" fill="white" />
            )}
          </button>
          <button onClick={(e) => { e.stopPropagation(); setMuted(!muted); }} className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
            {muted ? <VolumeX size={20} className="text-white" /> : <Volume2 size={20} className="text-white" />}
          </button>
        </div>
      )}
      {isSelected && (
        <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-body font-semibold tracking-widest uppercase" style={{ backgroundColor: 'rgba(196, 149, 106, 0.8)', color: '#fff' }}>
          ▶ Выбрано
        </div>
      )}
    </div>
  );
};

const WardrobePage = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  const handleSelectVideo = (index: number) => {
    setSelectedVideo(index);
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cards = container.children;
      if (cards[index]) {
        const card = cards[index] as HTMLElement;
        const containerWidth = container.offsetWidth;
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const scrollLeft = cardCenter - containerWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

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

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-12">
        {/* Stylist intro */}
        <div className="text-center space-y-6">
          <div className="flex items-stretch justify-center gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg" style={{ maxWidth: '260px' }}>
              <img src={stylistPhoto} alt="Зарифа" className="w-full h-auto object-cover" />
            </div>
            <div className="flex items-center">
              <div className="w-[3px] h-full rounded-full" style={{ background: 'linear-gradient(to bottom, transparent, #C4956A, #A0714E, #C4956A, transparent)' }} />
            </div>
          </div>
          <div className="mt-6">
           <h2 className="font-display text-3xl font-bold" style={{ color: '#5C3D2E' }}>Зарифа</h2>
            <p className="font-body text-lg mt-2" style={{ color: '#A0714E' }}>персональный стилист</p>
          </div>

          <div className="font-body text-sm leading-relaxed space-y-4 text-left px-2" style={{ color: '#7A5C45' }}>
            <p className="text-center italic" style={{ color: '#B8865A' }}>
              Экспертный разбор стиля с опытом в бьюти-сфере
            </p>
            <p>Мой подход основан не только на теории, но и на многолетнем опыте работы с внешностью женщин.</p>
            <p className="font-display font-bold" style={{ color: '#5C3D2E' }}>Я работала:</p>
            <ul className="space-y-1 pl-2">
              <li>— парикмахером</li>
              <li>— мастером маникюра</li>
              <li>— специалистом по наращиванию ресниц</li>
              <li>— в сфере ухода и красоты</li>
            </ul>
            <p className="font-display font-bold" style={{ color: '#5C3D2E' }}>Благодаря этому я умею с первого взгляда определить, что подходит именно вам:</p>
            <ul className="space-y-1 pl-2">
              <li>— по форме лица</li>
              <li>— по типу фигуры</li>
              <li>— по общему образу и энергетике</li>
            </ul>
            <p className="text-center italic" style={{ color: '#B8865A' }}>
              Я вижу, какой стиль подчеркнет вашу красоту и сделает вас уверенной ещё до детального разбора.
            </p>
          </div>
          <p className="font-body text-sm italic" style={{ color: '#B8865A' }}>
            <span style={{ color: '#C4956A' }}>━━</span> одену тебя красиво <span style={{ color: '#C4956A' }}>━━</span>
          </p>
          <div className="w-[3px] h-12 mx-auto rounded-full" style={{ background: 'linear-gradient(to bottom, #C4956A, transparent)' }} />
        </div>

        {/* Экспресс разбор */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block border-2 px-6 py-3 rounded-lg" style={{ borderColor: '#C4956A', backgroundColor: 'rgba(196, 149, 106, 0.1)' }}>
              <h3 className="font-display text-xl font-bold tracking-wider" style={{ color: '#5C3D2E' }}>
                экспресс разбор
              </h3>
            </div>
          </div>
          <div className="text-center">
            <span className="inline-block px-4 py-1.5 rounded-md font-body text-sm font-medium" style={{ backgroundColor: 'rgba(196, 149, 106, 0.2)', color: '#A0714E' }}>
              (видеозвонок)
            </span>
          </div>
          <div className="font-body text-sm leading-relaxed text-center" style={{ color: '#7A5C45' }}>
            <p>определяю тип фигуры и сразу в звонке рассказываю что стоит менять, что подчеркнуть, что скрыть.</p>
          </div>
          <div className="p-4 rounded-lg text-center" style={{ backgroundColor: 'rgba(255,255,255,0.4)', border: '1px solid rgba(196, 149, 106, 0.2)' }}>
            <p className="font-body text-sm italic" style={{ color: '#7A5C45' }}>
              Редко будет, его нужно поймать в сторис, но доступно для многих.
            </p>
          </div>
          <div className="text-center">
            <span className="font-display text-2xl font-bold" style={{ color: '#C0392B' }}>4.000₽</span>
          </div>
          <a href="https://t.me/senorita_chilli" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full text-white py-4 px-6 rounded-xl transition-colors"
            style={{ backgroundColor: '#7B5B3A' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6a4e32')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B5B3A')}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="font-body text-base font-semibold tracking-wider uppercase">ЗАПИСАТЬСЯ</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-1/2 h-px" style={{ backgroundColor: 'rgba(196, 149, 106, 0.3)' }} />
        </div>

        {/* Разбор в сторис */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block border-2 px-6 py-3 rounded-lg" style={{ borderColor: '#C4956A', backgroundColor: 'rgba(196, 149, 106, 0.1)' }}>
              <h3 className="font-display text-xl font-bold tracking-wider" style={{ color: '#5C3D2E' }}>
                разбор в сторис
              </h3>
            </div>
          </div>
          <div className="font-body text-sm leading-relaxed text-center" style={{ color: '#7A5C45' }}>
            <p>Пишете свой запрос в директ, кидаете своё фото, я его выложу в сторис (могу закрыть лицо) и покажу ошибки и дам маленькие советы</p>
          </div>
          <div className="text-center">
            <span className="font-display text-2xl font-bold" style={{ color: '#C0392B' }}>Бесплатно</span>
            <p className="font-body text-sm mt-1" style={{ color: '#A0714E' }}>(Но вы разрешаете публикацию)</p>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-1/2 h-px" style={{ backgroundColor: 'rgba(196, 149, 106, 0.3)' }} />
        </div>

        {/* Полный разбор */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block border-2 px-6 py-3 rounded-lg" style={{ borderColor: '#C4956A', backgroundColor: 'rgba(196, 149, 106, 0.1)' }}>
              <h3 className="font-display text-xl font-bold tracking-wider" style={{ color: '#5C3D2E' }}>
                полный разбор
              </h3>
            </div>
          </div>
          <div className="text-center">
            <span className="font-body text-sm font-medium" style={{ color: '#A0714E' }}>
              ( 2 видеозвонка по 20/30минут)
            </span>
          </div>
          <div className="font-body text-sm leading-relaxed space-y-2" style={{ color: '#7A5C45' }}>
            <p>•определяю тип фигуры</p>
            <p>•подбираю цвета по вашему цветотипу</p>
            <p>•составляю капсулы</p>
            <p>•подбор платка</p>
          </div>
          <div className="p-4 rounded-lg text-center" style={{ backgroundColor: 'rgba(255,255,255,0.4)', border: '1px solid rgba(196, 149, 106, 0.2)' }}>
            <p className="font-body text-sm italic" style={{ color: '#7A5C45' }}>
              Полностью фокусируюсь на вас, и все подробно рассказываю. По времени дольше всех разборов. После разбора я на связи.
            </p>
          </div>
          <div className="text-center">
            <span className="font-display text-2xl font-bold" style={{ color: '#C0392B' }}>15.000₽</span>
          </div>
          <a href="https://t.me/senorita_chilli" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full text-white py-4 px-6 rounded-xl transition-colors"
            style={{ backgroundColor: '#7B5B3A' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6a4e32')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B5B3A')}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="font-body text-base font-semibold tracking-wider uppercase">ЗАПИСАТЬСЯ</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-1/2 h-px" style={{ backgroundColor: 'rgba(196, 149, 106, 0.3)' }} />
        </div>

        {/* Подбор платка */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block border-2 px-6 py-3 rounded-lg" style={{ borderColor: '#C4956A', backgroundColor: 'rgba(196, 149, 106, 0.1)' }}>
              <h3 className="font-display text-xl font-bold tracking-wider" style={{ color: '#5C3D2E' }}>
                подбор платка
              </h3>
            </div>
          </div>
          <div className="text-center">
            <span className="font-body text-sm font-medium" style={{ color: '#A0714E' }}>
              (видеозвонок 10 минут)
            </span>
          </div>
          <div className="p-4 rounded-lg text-center" style={{ backgroundColor: 'rgba(255,255,255,0.4)', border: '1px solid rgba(196, 149, 106, 0.2)' }}>
            <p className="font-body text-sm italic" style={{ color: '#7A5C45' }}>
              присылаете свое фото без хиджаба, я определяю форму вашего лица
            </p>
          </div>
          <div className="font-body text-sm leading-relaxed space-y-2" style={{ color: '#7A5C45' }}>
            <p>•определяю тон кожи</p>
            <p>•лучший способ повязывания платка</p>
            <p>•даю ссылки на самые актуальные для вас модели</p>
          </div>
          <div className="text-center">
            <span className="font-display text-2xl font-bold" style={{ color: '#C0392B' }}>5.000₽</span>
          </div>
          <a href="https://t.me/senorita_chilli" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full text-white py-4 px-6 rounded-xl transition-colors"
            style={{ backgroundColor: '#7B5B3A' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6a4e32')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B5B3A')}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="font-body text-base font-semibold tracking-wider uppercase">ЗАПИСАТЬСЯ</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-1/2 h-px" style={{ backgroundColor: 'rgba(196, 149, 106, 0.3)' }} />
        </div>

        {/* Разбор гардероба онлайн - kept from original */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block border-2 px-6 py-3" style={{ borderColor: '#5C3D2E' }}>
              <h3 className="font-display text-xl font-bold tracking-wider uppercase" style={{ color: '#5C3D2E' }}>
                Разбор гардероба
              </h3>
            </div>
          </div>

          <div className="space-y-4 font-body text-sm leading-relaxed" style={{ color: '#7A5C45' }}>
            <h4 className="font-display text-lg font-bold text-center" style={{ color: '#5C3D2E' }}>В РАЗБОР ВХОДИТ:</h4>
            <ul className="space-y-3">
              <li>• одежда – 50 предметов</li>
              <li>• обувь по сезону, сумки, ремни, головные уборы – до 20 предметов; украшения в разбор не входят</li>
              <li>• составляется шопинг-лист недостающих позиций, которые требуются в гардероб, показывая на слайде как выглядит вещь</li>
            </ul>
          </div>

          <div className="p-6 space-y-3 text-center rounded-xl" style={{ backgroundColor: 'rgba(196, 149, 106, 0.1)', borderTop: '2px solid rgba(196, 149, 106, 0.3)' }}>
            <p className="font-body text-sm font-medium italic" style={{ color: '#B8865A' }}>
              Включает поддержку в чате со мной по стилистическим вопросам в течение 14 дней
            </p>
            <p className="font-display text-sm font-bold uppercase tracking-wider" style={{ color: '#5C3D2E' }}>
              СРОК ВЫПОЛНЕНИЯ 5 ДНЕЙ
            </p>
            <p className="font-body text-xs" style={{ color: '#A0714E' }}>
              Вся информация оформляется в презентацию и предоставляется на 6й день в течение дня.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block border-2 px-8 py-4" style={{ borderColor: '#5C3D2E' }}>
              <span className="font-display text-2xl font-bold" style={{ color: '#5C3D2E' }}>16 900 руб.</span>
            </div>
          </div>

          <p className="font-body text-xs text-center italic" style={{ color: '#A0714E' }}>
            *Ссылки из шопинг-листа не предоставляются. Всю одежду вы можете купить самостоятельно, имея мои подсказки в презентации, или обратиться за последующим онлайн – шопингом
          </p>

          <div className="p-6 space-y-2 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.4)' }}>
            <h4 className="font-display text-lg font-bold" style={{ color: '#5C3D2E' }}>Как подготовиться к разбору гардероба:</h4>
            <p className="font-body text-sm leading-relaxed" style={{ color: '#7A5C45' }}>
              фотографировать одежду и предметы гардероба желательно на однотонном фоне; стараться не держать обувь / сумки в руке при фотографировании, а фотографировать их самостоятельно.
            </p>
          </div>

          <a href="https://t.me/senorita_chilli" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 w-full text-white py-4 px-6 rounded-xl transition-colors"
            style={{ backgroundColor: '#7B5B3A' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6a4e32')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B5B3A')}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 flex-shrink-0">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="font-body text-base font-semibold tracking-wider uppercase">ЗАПИСАТЬСЯ</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-1/2 h-px" style={{ backgroundColor: 'rgba(196, 149, 106, 0.3)' }} />
        </div>

        {/* Онлайн капсула */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block border-2 px-6 py-3" style={{ borderColor: '#5C3D2E' }}>
              <h3 className="font-display text-xl font-bold tracking-wider uppercase" style={{ color: '#5C3D2E' }}>
                ОНЛАЙН КАПСУЛА
              </h3>
            </div>
          </div>

          <div className="space-y-3 font-body text-sm leading-relaxed" style={{ color: '#7A5C45' }}>
            <p>• Подбор 10-15 предметов гардероба сочетаемых друг с другом, включая аксессуарную группу: обувь, сумки, ремни по необходимости, очки по индивидуальному запросу; аксессуары в подбор не входят</p>
            <p>В соответствии с вашей фигурой, внешностью и образом жизни</p>
            <p>• Составление комплектов. Количество готовых комплектов не менее 20</p>
            <p>• Предоставляются все ссылки по позициям и по аксессуарной группе</p>
          </div>

          <div className="p-6 space-y-3 text-center rounded-xl" style={{ backgroundColor: 'rgba(196, 149, 106, 0.1)', borderTop: '2px solid rgba(196, 149, 106, 0.3)' }}>
            <div className="w-[3px] h-8 mx-auto mb-3 rounded-full" style={{ background: 'linear-gradient(to bottom, #C4956A, transparent)' }} />
            <h4 className="font-display text-base font-bold uppercase tracking-wider" style={{ color: '#5C3D2E' }}>
              ТАКЖЕ В УСЛУГУ ВХОДИТ:
            </h4>
            <p className="font-body text-sm font-medium italic" style={{ color: '#B8865A' }}>
              Поддержка в чате со мной по стилистическим вопросам в течение 14 дней
            </p>
            <p className="font-display text-sm font-bold uppercase tracking-wider" style={{ color: '#5C3D2E' }}>
              СРОК ВЫПОЛНЕНИЯ 5 ДНЕЙ
            </p>
            <p className="font-body text-xs" style={{ color: '#A0714E' }}>
              Вся информация оформляется в презентацию и предоставляется на 6 день в течении дня.
            </p>
            <p className="font-body text-xs italic" style={{ color: '#A0714E' }}>
              *возможна корректировка до 3х позиций из капсулы
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block border-2 px-8 py-4" style={{ borderColor: '#5C3D2E' }}>
              <span className="font-display text-2xl font-bold" style={{ color: '#5C3D2E' }}>16 900 руб.</span>
            </div>
          </div>

          <a href="https://t.me/senorita_chilli" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 w-full text-white py-4 px-6 rounded-xl transition-colors"
            style={{ backgroundColor: '#7B5B3A' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6a4e32')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B5B3A')}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 flex-shrink-0">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="font-body text-base font-semibold tracking-wider uppercase">ЗАПИСАТЬСЯ</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-1/2 h-px" style={{ backgroundColor: 'rgba(196, 149, 106, 0.3)' }} />
        </div>

        {/* Комплекс */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="inline-block border-2 px-6 py-3" style={{ borderColor: '#5C3D2E' }}>
              <h3 className="font-display text-xl font-bold tracking-wider uppercase" style={{ color: '#5C3D2E' }}>
                КОМПЛЕКС:
              </h3>
            </div>
            <div className="inline-block border-2 px-6 py-3 mt-3" style={{ borderColor: '#5C3D2E' }}>
              <p className="font-display text-base font-bold" style={{ color: '#5C3D2E' }}>
                разбор гардероба и капсула онлайн
              </p>
            </div>
          </div>

          <div className="font-body text-sm leading-relaxed text-center space-y-3" style={{ color: '#7A5C45' }}>
            <p>Обе услуги объединены в презентацию. Разбирается гардероб в рамках услуги «разбор гардероба», и подбираются позиции, необходимые в гардероб, с предоставлением всех ссылок.</p>
            <p className="font-display text-sm font-bold uppercase tracking-wider" style={{ color: '#5C3D2E' }}>
              СРОК ВЫПОЛНЕНИЯ 7 ДНЕЙ
            </p>
            <p className="font-body text-xs" style={{ color: '#A0714E' }}>
              Вся информация оформляется в презентацию и предоставляется на 8 день в течении дня.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block border-2 px-8 py-4" style={{ borderColor: '#5C3D2E' }}>
              <span className="font-display text-2xl font-bold" style={{ color: '#5C3D2E' }}>24 900 руб.</span>
            </div>
          </div>

          <a href="https://t.me/senorita_chilli" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 w-full text-white py-4 px-6 rounded-xl transition-colors"
            style={{ backgroundColor: '#7B5B3A' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#6a4e32')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#7B5B3A')}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 flex-shrink-0">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <span className="font-body text-base font-semibold tracking-wider uppercase">ЗАПИСАТЬСЯ</span>
          </a>
        </div>

        {/* Divider */}
        <div className="flex justify-center">
          <div className="w-1/2 h-px" style={{ backgroundColor: 'rgba(196, 149, 106, 0.3)' }} />
        </div>

        {/* Video Carousel */}
        <div className="space-y-4">
          <h3 className="font-display text-xl font-bold text-center tracking-wider" style={{ color: '#5C3D2E' }}>
            ОБРАЗЫ
          </h3>
          <div className="relative">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg backdrop-blur-sm transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
            >
              <ChevronLeft size={20} style={{ color: '#5C3D2E' }} />
            </button>
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide py-2 px-8 snap-x snap-mandatory items-center justify-center"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {videos.map((v, i) => (
                <div key={i} className="snap-center">
                  <VideoCard
                    src={v.src}
                    title={v.title}
                    isSelected={selectedVideo === i}
                    onSelect={() => handleSelectVideo(i)}
                  />
                </div>
              ))}
            </div>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full shadow-lg backdrop-blur-sm transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
            >
              <ChevronRight size={20} style={{ color: '#5C3D2E' }} />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pb-8">
          <p className="font-body text-xs tracking-widest uppercase mb-4" style={{ color: '#A0714E' }}>
            © 2026 ZARIFA COLLECTION
          </p>
        </div>
      </div>
    </div>
  );
};

export default WardrobePage;

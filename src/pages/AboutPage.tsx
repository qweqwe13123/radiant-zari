import { ArrowLeft, Play, VolumeX, Volume2, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import stylistPhoto from "@/assets/stylist-photo.jpg";

const carouselItems = [
  { type: 'photo' as const, src: stylistPhoto, title: "Зарифа" },
  { type: 'video' as const, src: "/videos/look-1.mp4", title: "Elegant look" },
  { type: 'video' as const, src: "/videos/look-2.mp4", title: "Classic style" },
  { type: 'video' as const, src: "/videos/look-3.mp4", title: "Modern abaya" },
];

const CarouselCard = ({ item, isSelected, onSelect }: { item: typeof carouselItems[number]; isSelected: boolean; onSelect: () => void }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (!isSelected && videoRef.current && playing) {
      videoRef.current.pause();
      setPlaying(false);
    }
  }, [isSelected]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (playing) { videoRef.current.pause(); } else { videoRef.current.play(); }
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
      {item.type === 'photo' ? (
        <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
      ) : (
        <video ref={videoRef} src={item.src} muted={muted} loop playsInline className="w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      {isSelected && item.type === 'video' && (
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
          {item.type === 'photo' ? '📷 Фото' : '▶ Выбрано'}
        </div>
      )}
    </div>
  );
};

const AboutPage = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
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

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        {/* Unified Carousel */}
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
            className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-8 snap-x snap-mandatory items-center justify-center"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {carouselItems.map((item, i) => (
              <div key={i} className="snap-center">
                <CarouselCard
                  item={item}
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

        <div className="w-16 h-[3px] mx-auto rounded-full" style={{ background: 'linear-gradient(to right, transparent, #C4956A, transparent)' }} />

        <div className="space-y-6 font-body text-sm leading-relaxed" style={{ color: '#7A5C45' }}>
          <h3 className="font-display text-xl font-bold text-center" style={{ color: '#5C3D2E' }}>
            Всем Привет! Я Зарифа
          </h3>

          <p className="text-center">
            Я делаю экспертный разбор стиля с опытом в бьюти-сфере
          </p>

          <div className="p-6 rounded-2xl space-y-4" style={{ backgroundColor: 'rgba(255,255,255,0.4)', border: '1px solid rgba(196, 149, 106, 0.2)' }}>
            <p>
              Мой подход основан не только на теории, но и на многолетнем опыте работы с внешностью женщин.
            </p>
            <p className="font-display font-bold" style={{ color: '#5C3D2E' }}>Я работала:</p>
            <ul className="space-y-2 pl-2">
              <li>— парикмахером</li>
              <li>— мастером маникюра</li>
              <li>— специалистом по наращиванию ресниц</li>
              <li>— в сфере ухода и красоты</li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl space-y-4" style={{ backgroundColor: 'rgba(255,255,255,0.4)', border: '1px solid rgba(196, 149, 106, 0.2)' }}>
            <p className="font-display font-bold" style={{ color: '#5C3D2E' }}>Благодаря этому я умею с первого взгляда определить, что подходит именно вам:</p>
            <ul className="space-y-2 pl-2">
              <li>— по форме лица</li>
              <li>— по типу фигуры</li>
              <li>— по общему образу и энергетике</li>
            </ul>
          </div>

          <p className="text-center italic" style={{ color: '#B8865A' }}>
            Я вижу, какой стиль подчеркнет вашу красоту и сделает вас уверенной ещё до детального разбора.
          </p>
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

export default AboutPage;

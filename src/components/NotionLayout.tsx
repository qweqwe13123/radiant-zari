import { ArrowLeft, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

type Nav = { to: string; label: string } | null;

interface Props {
  emoji?: string;
  coverColor?: string;
  title: string;
  children: ReactNode;
  prev: Nav;
  next: Nav;
  pageIndex: number;
  totalPages: number;
}

const NotionLayout = ({
  emoji,
  coverColor,
  title,
  children,
  prev,
  next,
  pageIndex,
  totalPages,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(1200px 600px at 10% -10%, #fdf6ee 0%, transparent 60%), radial-gradient(1000px 500px at 100% 0%, #f5efe6 0%, transparent 55%), linear-gradient(180deg, #fbf7f1 0%, #f7f2ea 100%)",
        color: "rgb(55, 53, 47)",
        fontFamily:
          'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
      }}
    >
      {/* Top utility bar with integrated prev/next */}
      <div
        className="sticky top-0 z-50 backdrop-blur-xl border-b"
        style={{
          backgroundColor: "rgba(251, 247, 241, 0.78)",
          borderColor: "rgba(55,53,47,0.08)",
        }}
      >
        <div className="max-w-[920px] mx-auto px-3 sm:px-5 py-2.5 flex items-center gap-2 sm:gap-3">
          {/* Home */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full transition-all hover:bg-black/5 active:scale-95"
            style={{ color: "rgb(55, 53, 47)" }}
            aria-label="На главную"
          >
            <Home size={15} />
            <span className="text-[13px] hidden sm:inline">На главную</span>
          </button>

          {totalPages > 1 && (
            <div className="flex items-center gap-1.5 mx-auto">
              {Array.from({ length: totalPages }).map((_, i) => (
                <span
                  key={i}
                  className="block rounded-full transition-all duration-500"
                  style={{
                    width: i === pageIndex ? "22px" : "6px",
                    height: "6px",
                    backgroundColor:
                      i === pageIndex ? "rgb(55, 53, 47)" : "rgba(55,53,47,0.22)",
                  }}
                />
              ))}
            </div>
          )}

          {(prev || next) && (
            <div className="flex items-center gap-1">
              <button
                onClick={() => prev && navigate(prev.to)}
                disabled={!prev}
                title={prev?.label || ""}
                aria-label="Предыдущая"
                className="w-9 h-9 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 flex items-center justify-center gap-1.5 rounded-full border transition-all hover:bg-black/5 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{ borderColor: "rgba(55,53,47,0.12)" }}
              >
                <ChevronLeft size={16} />
                <span className="hidden sm:inline text-[12px]">Назад</span>
              </button>
              <button
                onClick={() => next && navigate(next.to)}
                disabled={!next}
                title={next?.label || ""}
                aria-label="Следующая"
                className="w-9 h-9 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 flex items-center justify-center gap-1.5 rounded-full transition-all active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed text-white"
                style={{ backgroundColor: "rgb(55, 53, 47)" }}
              >
                <span className="hidden sm:inline text-[12px]">Дальше</span>
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Cover */}
      {coverColor && (
        <div
          style={{
            backgroundColor: coverColor,
            height: "clamp(140px, 22vh, 240px)",
          }}
        />
      )}

      <article
        className="max-w-[720px] mx-auto px-4 sm:px-6 md:px-8 pb-12"
        style={{ paddingTop: coverColor ? "0" : "48px" }}
      >
        {emoji && (
          <div
            style={{
              marginTop: coverColor ? "-44px" : "0",
              marginBottom: "12px",
            }}
          >
            <span style={{ fontSize: "clamp(56px, 9vw, 78px)", lineHeight: 1 }}>
              {emoji}
            </span>
          </div>
        )}
        <h1
          className="font-bold tracking-tight"
          style={{
            fontSize: "clamp(28px, 5.2vw, 40px)",
            lineHeight: 1.2,
            color: "rgb(55, 53, 47)",
            fontWeight: 700,
            marginBottom: "28px",
            wordBreak: "break-word",
          }}
        >
          {title}
        </h1>

        {children}
      </article>

      {(prev || next) && (
        <div className="max-w-[720px] mx-auto px-4 sm:px-6 md:px-8 pb-16">
          <div className="flex items-center justify-between">
            {prev ? (
              <Link
                to={prev.to}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-black/[0.06] active:scale-95 border"
                style={{
                  backgroundColor: "rgba(255,255,255,0.7)",
                  borderColor: "rgba(55,53,47,0.12)",
                  color: "rgb(55, 53, 47)",
                }}
                aria-label="Назад"
              >
                <ChevronLeft size={18} />
              </Link>
            ) : (
              <div className="w-10 h-10" />
            )}

            {next ? (
              <Link
                to={next.to}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-95"
                style={{
                  backgroundColor: "rgb(55, 53, 47)",
                  color: "#fff",
                }}
                aria-label="Дальше"
              >
                <ChevronRight size={18} />
              </Link>
            ) : (
              <div className="w-10 h-10" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

/* — Notion-style typography primitives — */

interface TypographyProps {
  children: ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const P = ({ children, style, className }: TypographyProps) => (
  <p
    className={className}
    style={{
      fontSize: "clamp(15px, 1.6vw, 16px)",
      lineHeight: 1.6,
      color: "rgb(55, 53, 47)",
      margin: 0,
      padding: "3px 2px",
      ...style,
    }}
  >
    {children}
  </p>
);

export const H2 = ({ children, style, className }: TypographyProps) => (
  <h2
    className={className}
    style={{
      fontSize: "clamp(20px, 3.2vw, 24px)",
      lineHeight: 1.3,
      fontWeight: 600,
      color: "rgb(55, 53, 47)",
      marginTop: "32px",
      marginBottom: "4px",
      padding: "3px 2px",
      ...style,
    }}
  >
    {children}
  </h2>
);

export const H3 = ({ children }: { children: ReactNode }) => (
  <h3
    style={{
      fontSize: "clamp(18px, 2.6vw, 20px)",
      lineHeight: 1.3,
      fontWeight: 600,
      color: "rgb(55, 53, 47)",
      marginTop: "28px",
      marginBottom: "4px",
      padding: "3px 2px",
    }}
  >
    {children}
  </h3>
);

export const Img = ({ src, alt = "" }: { src: string; alt?: string }) => (
  <figure
    style={{
      marginTop: "14px",
      marginBottom: "14px",
      borderRadius: "12px",
      overflow: "hidden",
    }}
  >
    <img src={src} alt={alt} loading="lazy" className="w-full h-auto block" />
  </figure>
);

export default NotionLayout;

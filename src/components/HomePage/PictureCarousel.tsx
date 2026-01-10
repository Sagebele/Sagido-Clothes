import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

/* ===================== TYPES ===================== */

type Slide = {
  front: string;
  back: string;
  altFront: string;
  altBack: string;
};

/* ===================== SLIDES ===================== */
/* Images are inline URLs (no imports) */

const slides: Slide[] = [
  {
    front:
      "https://images.pexels.com/photos/34489595/pexels-photo-34489595.jpeg?auto=compress&cs=tinysrgb&w=1200",
    back:
        "https://images.pexels.com/photos/19359950/pexels-photo-19359950.jpeg?auto=compress&cs=tinysrgb&w=1200",
    altFront: "Women street fashion front",
    altBack: "Women street fashion back",
  },
  {
    front:
      "https://images.pexels.com/photos/29198177/pexels-photo-29198177.jpeg?auto=compress&cs=tinysrgb&w=1200",
    back:
      "https://images.pexels.com/photos/35568297/pexels-photo-35568297.jpeg?auto=compress&cs=tinysrgb&w=1200",
    altFront: "Men urban fashion front",
    altBack: "Men urban fashion back",
  },
  {
    front:
      "https://images.pexels.com/photos/6261901/pexels-photo-6261901.jpeg?auto=compress&cs=tinysrgb&w=1200",
    back:
      "https://images.pexels.com/photos/4626731/pexels-photo-4626731.jpeg?auto=compress&cs=tinysrgb&w=1200",
    altFront: "Junior fashion front",
    altBack: "Junior fashion back",
  },
];


const mod = (n: number, m: number) => ((n % m) + m) % m;


function FlipCard({
  front,
  back,
  altFront,
  altBack,
  className = "",
}: {
  front: string;
  back: string;
  altFront: string;
  altBack: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-lg shadow-xl group/card ${className}`}>
      <img
        src={front}
        alt={altFront}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover/card:opacity-0"
        draggable={false}
      />
      <img
        src={back}
        alt={altBack}
        className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        draggable={false}
      />
    </div>
  );
}


export default function PictureCarousel() {
  const total = slides.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* ---------- autoplay ---------- */
  useEffect(() => {
    if (isPaused || total <= 1) return;

    const id = window.setInterval(() => {
      setCurrentIndex((i) => mod(i + 1, total));
    }, 3000);

    return () => window.clearInterval(id);
  }, [isPaused, total]);

  const goPrev = () => setCurrentIndex((i) => mod(i - 1, total));
  const goNext = () => setCurrentIndex((i) => mod(i + 1, total));


  const visible = useMemo(() => {
    const prev = mod(currentIndex - 1, total);
    const next = mod(currentIndex + 1, total);
    return {
      prev: { slide: slides[prev], index: prev },
      current: { slide: slides[currentIndex], index: currentIndex },
      next: { slide: slides[next], index: next },
    };
  }, [currentIndex, total]);

  if (total === 0) return null;


  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-16 w-full">
      <h3 className="text-zinc-900 text-2xl font-bold mb-8 text-center">
        Featured Looks
      </h3>

      <div
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ---------- PREV BUTTON ---------- */}
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full
            bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300
            opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-zinc-700 text-xl" />
        </button>

        {/* ---------- MOBILE + TABLET ---------- */}
        <div className="lg:hidden flex justify-center">
          <FlipCard
            {...visible.current.slide}
            className="w-full max-w-[520px] aspect-[4/5]"
          />
        </div>

        {/* ---------- DESKTOP ---------- */}
        <div className="hidden lg:flex items-center justify-center h-[720px]">
          <div className="flex items-center justify-center gap-10  overflow-hidden">
            <div
              onClick={() => setCurrentIndex(visible.prev.index)}
              className="cursor-pointer opacity-60 scale-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
            >
              <FlipCard
                {...visible.prev.slide}
                className="w-[440px] h-[600px]"
              />
            </div>

            <div className="z-20 hover:scale-105 transition-transform duration-500">
              <FlipCard
                {...visible.current.slide}
                className="w-[560px] h-[720px]"
              />
            </div>

            <div
              onClick={() => setCurrentIndex(visible.next.index)}
              className="cursor-pointer opacity-60 scale-90 hover:opacity-100 hover:scale-105 transition-all duration-500"
            >
              <FlipCard
                {...visible.next.slide}
                className="w-[440px] h-[600px]"
              />
            </div>
          </div>
        </div>

        {/* ---------- NEXT BUTTON ---------- */}
        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full
            bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300
            opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
          aria-label="Next"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-zinc-700 text-xl" />
        </button>
      </div>

      {/* ---------- DOTS ---------- */}
      <div className="flex justify-center mt-6 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={[
              "w-3 h-3 rounded-full transition-all duration-300 cursor-pointer",
              i === currentIndex
                ? "bg-zinc-900 scale-125"
                : "bg-zinc-400 hover:bg-zinc-600",
            ].join(" ")}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

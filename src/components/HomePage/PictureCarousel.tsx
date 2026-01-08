import { useEffect, useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import manFrontImg from "../../assets/images/HomePage/carousel/man-front.png";
import manBackImg from "../../assets/images/HomePage/carousel/man-back.jpg";
import womanFrontImg from "../../assets/images/HomePage/carousel/woman-front.jpg";
import womanBackImg from "../../assets/images/HomePage/carousel/woman-back.jpg";
import juniorFrontImg from "../../assets/images/HomePage/carousel/junior-front.jpg";
import juniorBackImg from "../../assets/images/HomePage/carousel/junior-back.jpg";

type Slide = {
  front: string;
  back: string;
  altFront: string;
  altBack: string;
};

const slides: Slide[] = [
  { front: womanFrontImg, back: womanBackImg, altFront: "Woman Front", altBack: "Woman Back" },
  { front: manFrontImg, back: manBackImg, altFront: "Man Front", altBack: "Man Back" },
  { front: juniorFrontImg, back: juniorBackImg, altFront: "Junior Front", altBack: "Junior Back" },
];

const mod = (n: number, m: number) => ((n % m) + m) % m;

export default function PictureCarousel() {
  const total = slides.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  if (total === 0) return null;

  useEffect(() => {
    if (isPaused || total <= 1) return;

    const id = window.setInterval(() => {
      setCurrentIndex((i) => mod(i + 1, total));
    }, 3000);

    return () => window.clearInterval(id);
  }, [isPaused, total]);

  const goToPrevious = () => setCurrentIndex((i) => mod(i - 1, total));
  const goToNext = () => setCurrentIndex((i) => mod(i + 1, total));

  const visible = useMemo(() => {
    const prev = mod(currentIndex - 1, total);
    const next = mod(currentIndex + 1, total);
    return {
      prev: { slide: slides[prev], actualIndex: prev },
      current: { slide: slides[currentIndex], actualIndex: currentIndex },
      next: { slide: slides[next], actualIndex: next },
    };
  }, [currentIndex, total]);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-4 py-16 w-full">
      <h3 className="text-zinc-900 text-2xl font-bold mb-8 text-center">
        Featured Looks
      </h3>

      <div
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button
          type="button"
          onClick={goToPrevious}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm
           hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-zinc-700 text-xl" />
        </button>

        <div className="md:hidden flex justify-center">
          <div className="relative w-full max-w-[520px] h-[520px] rounded-lg overflow-hidden shadow-xl group/card">
            <img
              src={visible.current.slide.front}
              alt={visible.current.slide.altFront}
              className="w-full h-full object-cover transition-opacity duration-300 group-hover/card:opacity-0"
              draggable={false}
            />
            <img
              src={visible.current.slide.back}
              alt={visible.current.slide.altBack}
              className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
              draggable={false}
            />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center h-[720px]">
          <div className="flex items-center justify-center gap-8 lg:gap-12">
            <div
              onClick={() => setCurrentIndex(visible.prev.actualIndex)}
              className="relative rounded-lg overflow-hidden shadow-xl transition-all duration-500 cursor-pointer hover:scale-105 hover:z-30 opacity-60 scale-90
                         w-[420px] lg:w-[480px] h-[600px] group/card"
            >
              <img
                src={visible.prev.slide.front}
                alt={visible.prev.slide.altFront}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover/card:opacity-0"
                draggable={false}
              />
              <img
                src={visible.prev.slide.back}
                alt={visible.prev.slide.altBack}
                className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                draggable={false}
              />
            </div>

            <div
              onClick={() => setCurrentIndex(visible.current.actualIndex)}
              className="relative rounded-lg overflow-hidden shadow-xl transition-all duration-500 cursor-pointer hover:scale-105 hover:z-30
                         w-[560px] lg:w-[560px] h-[720px] z-20 opacity-100 scale-100 group/card"
            >
              <img
                src={visible.current.slide.front}
                alt={visible.current.slide.altFront}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover/card:opacity-0"
                draggable={false}
              />
              <img
                src={visible.current.slide.back}
                alt={visible.current.slide.altBack}
                className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                draggable={false}
              />
            </div>

            <div
              onClick={() => setCurrentIndex(visible.next.actualIndex)}
              className="relative rounded-lg overflow-hidden shadow-xl transition-all duration-500 cursor-pointer hover:scale-105 hover:z-30 opacity-60 scale-90
                         w-[420px] lg:w-[480px] h-[600px] group/card"
            >
              <img
                src={visible.next.slide.front}
                alt={visible.next.slide.altFront}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover/card:opacity-0"
                draggable={false}
              />
              <img
                src={visible.next.slide.back}
                alt={visible.next.slide.altBack}
                className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                draggable={false}
              />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={goToNext}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-zinc-700 text-xl" />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={[
              "w-3 h-3 rounded-full transition-all duration-300 cursor-pointer",
              i === currentIndex ? "bg-zinc-900 scale-125" : "bg-zinc-400 hover:bg-zinc-600",
            ].join(" ")}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

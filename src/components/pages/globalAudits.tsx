import { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Women's Fashion",
    subtitle: "Get Special Discount Today",
    price: 9999,
    originalPrice: 24999,
    discount: 60,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000&auto=format", // Women's fashion model
  },
  {
    id: 2,
    title: "Men's Streetwear",
    subtitle: "Limited Time Offer",
    price: 2999,
    originalPrice: 9999,
    discount: 70,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1000&auto=format", // Men's casual wear
  },
  {
    id: 3,
    title: "Kids Collection",
    subtitle: "Exclusive Deal",
    price: 4999,
    originalPrice: 15999,
    discount: 68,
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=1000&auto=format", // Happy kids in colorful clothes
  },
  {
    id: 4,
    title: "Premium Beauty",
    subtitle: "New Arrival Sale",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1000&auto=format", // Makeup application
  },
  {
    id: 5,
    title: "Winter Essentials",
    subtitle: "Best Seller Deal",
    price: 15999,
    originalPrice: 21999,
    discount: 27,
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=1000&auto=format", // Winter coat model
  },
  {
    id: 6,
    title: "Evenwear Collection",
    subtitle: "Flash Sale Today",
    price: 7499,
    originalPrice: 9999,
    discount: 25,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1000&auto=format", // Evening dress
  },
];

const useVisible = () => {
  const [v, setV] = useState(3);
  useEffect(() => {
    const check = () =>
      setV(window.innerWidth < 480 ? 1 : window.innerWidth < 768 ? 2 : 3);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return v;
};

// ── Single Card — exactly like reference image ──
const SlideCard = ({
  slide,
  h, m, s,
}: {
  slide: Slide;
  h: string;
  m: string;
  s: string;
}) => (
  <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">

    {/* ── TOP: tagline ── */}
<div className="px-4 py-3 text-center border-b border-gray-100">
  <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-gray-500 relative inline-block shimmer-pink">
    {slide.subtitle}
  </p>
</div>

<style>{`
  @keyframes shimmerPink {
    0% {
      background-position: -200% 0;
      text-shadow: none;
    }
    50% {
      text-shadow: 0 0 5px rgba(240, 76, 156, 0.5);
    }
    100% {
      background-position: 200% 0;
      text-shadow: none;
    }
  }
  
  .shimmer-pink {
    background: linear-gradient(
      90deg,
      #9ca3af 0%,
      #9ca3af 30%,
      #dc586d 50%,
      #f472b6 70%,
      #9ca3af 100%
    );
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    animation: shimmerPink 2.5s linear infinite;
  }
`}</style>

    {/* ── MIDDLE: image — shorter height ── */}
    <div className="relative overflow-hidden" style={{ height: "250px" }}>
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-103"
      />

      {/* Very light gradient only at bottom of image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

      {/* ── SALE + % text on image bottom-left like reference ── */}
      <div className="absolute bottom-3 left-4">
        <div className="flex items-end gap-1 leading-none">
          <span
            className="text-white font-black leading-none"
            style={{
              fontSize: "clamp(2rem, 5vw, 2.8rem)",
              fontFamily: "'Playfair Display', serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            SALE
          </span>
        </div>
        <div className="flex items-start gap-1 leading-none mt-0.5">
          <span
            className="text-white font-black leading-none"
            style={{
              fontSize: "clamp(2.2rem, 6vw, 3.2rem)",
              fontFamily: "'Playfair Display', serif",
              textShadow: "0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            {slide.discount}
          </span>
          <div className="flex flex-col mt-1">
            <span className="text-white font-bold text-sm leading-none">%</span>
            <span className="text-white font-bold text-sm leading-none">OFF</span>
          </div>
        </div>
      </div>
    </div>

    {/* ── BOTTOM: price + timer + CTA ── */}
    <div className="px-4 pt-3 pb-4">

      {/* Product name */}
      <p
        className="text-gray-800 font-semibold text-sm line-clamp-1 mb-2 font-google"
    
      >
        {slide.title}
      </p>

      {/* Price row */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-gray-900 text-base font-bold">
          ₹{slide.price.toLocaleString()}
        </span>
        <span className="text-gray-400 text-xs line-through">
          ₹{slide.originalPrice.toLocaleString()}
        </span>
        <span className="ml-auto text-[10px] font-bold font-google text-pink-600 bg-pink-50 px-2 py-0.5 rounded-[15px] border border-pink-100">
          Save {slide.discount}%
        </span>
      </div>

 
    </div>
  </div>
);

// ── Main Component ──
const GlobalAudit = () => {
  const [cur, setCur] = useState(0);
  const [secs, setSecs] = useState(23 * 3600 + 59 * 59);
  const visible = useVisible();
  const maxIdx = Math.max(0, slides.length - visible);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (n: number) => setCur(Math.max(0, Math.min(n, maxIdx))),
    [maxIdx]
  );

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(
      () => setCur((p) => (p >= maxIdx ? 0 : p + 1)),
      5000
    );
  }, [maxIdx]);

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [startAuto]);

  useEffect(() => { goTo(cur); }, [visible, goTo]);

  useEffect(() => {
    const t = setInterval(
      () => setSecs((s) => (s > 0 ? s - 1 : 0)),
      1000
    );
    return () => clearInterval(t);
  }, []);

  const h = String(Math.floor(secs / 3600)).padStart(2, "0");
  const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
  const s = String(secs % 60).padStart(2, "0");
  const offset = cur * (100 / visible);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
      `}</style>

      <div className="py-8 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* ── Section Header ── */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div
                className="w-[3px] h-8 rounded-full"
                style={{ background: "linear-gradient(180deg,#db2777,#9333ea)" }}
              />
              <div> 
                <h2
                  className="text-2xl md:text-3xl font-light text-gray-900 font-google"
                 
                >
                  Deals of the{" "}
                  <span className="text-transparent font-bold  bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                    Day
                  </span>
                </h2>
                <p className="text-[11px] text-gray-400 font-medium tracking-wide hidden md:block mt-0.5">
                  Flash sale · Prices drop every 24 hours
                </p>
              </div>
            </div>

          </div>

          {/* ── Slider ── */}
          <div
            className="relative group"
            onMouseEnter={() => { if (autoRef.current) clearInterval(autoRef.current); }}
            onMouseLeave={startAuto}
          >
            <div className="overflow-hidden">
              <div
                className="flex gap-4 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${offset}%)` }}
              >
                {slides.map((slide) => (
                  <div
                    key={slide.id}
                    className="flex-shrink-0"
                    style={{
                      width: `calc(${100 / visible}% - ${(4 * (visible - 1)) / visible}px)`,
                    }}
                  >
                    <SlideCard slide={slide} h={h} m={m} s={s} />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            {maxIdx > 0 && (
              <>
                <button
                  onClick={() => goTo(cur - 1)}
                  disabled={cur === 0}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 disabled:opacity-0 shadow-md hover:border-pink-300"
                >
                  <FaChevronLeft size={12} className="text-gray-600" />
                </button>
                <button
                  onClick={() => goTo(cur + 1)}
                  disabled={cur >= maxIdx}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 disabled:opacity-0 shadow-md hover:border-pink-300"
                >
                  <FaChevronRight size={12} className="text-gray-600" />
                </button>
              </>
            )}
          </div>

          {/* Dots */}
          {maxIdx > 0 && (
            <div className="flex justify-center gap-1.5 mt-5">
              {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{
                    width: i === cur ? "20px" : "6px",
                    background:
                      i === cur
                        ? "linear-gradient(90deg,#db2777,#9333ea)"
                        : "#d1d5db",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GlobalAudit;
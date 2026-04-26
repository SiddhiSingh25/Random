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

const slides = [
  {
    id: 1,
    country: "South Korea",
    clientName: "Global Tech Corp",
    headline: "Foreign Manufacturer FMCS License Secured",
    standard: "IS 13252 (PART 1) : 2010",
    description: "Successfully facilitated end-to-end BIS FMCS certification for high-end server motherboards, including factory audit and sample testing coordination.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format", // Factory Inspection
    date: "MARCH 2026",
  },
  {
    id: 2,
    country: "Germany",
    clientName: "Precision Automotive Ltd",
    headline: "Successful BIS ISI Mark Audit Completed",
    standard: "IS 15298 : PART 2",
    description: "Managed the complete certification process for safety footwear. Verified compliance through rigorous on-site audit and laboratory validation.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&auto=format", // Corporate Handshake
    date: "FEBRUARY 2026",
  },
  {
    id: 3,
    country: "Taiwan",
    clientName: "Alpha Semiconductor",
    headline: "CRS Registration for Electronics Secured",
    standard: "IS 13252 : 2010",
    description: "Streamlined the Compulsory Registration Scheme (CRS) for advanced computing peripherals, ensuring rapid market entry for the Indian territory.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format", // Electronics Lab
    date: "JANUARY 2026",
  },
  {
    id: 4,
    country: "China",
    clientName: "Zhong Lighting Systems",
    headline: "ISI Certification Milestone Achieved",
    standard: "IS 10322 : PART 5",
    description: "Directed the BIS licensing process for LED self-ballasted lamps, covering factory quality control evaluation and technical documentation.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&auto=format", // Professional Meeting
    date: "DECEMBER 2025",
  },
  {
    id: 5,
    country: "United Arab Emirates",
    clientName: "Emirates Steel Ind.",
    headline: "Product Compliance & BIS License Renewal",
    standard: "IS 1786 : 2008",
    description: "Successfully renewed the BIS certification for structural steel products through a comprehensive remote audit and testing protocol.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&auto=format", // Industrial Site
    date: "NOVEMBER 2025",
  },
  {
    id: 6,
    country: "Vietnam",
    clientName: "South Asia Footwear",
    headline: "BIS Certification for Global Export",
    standard: "IS 6721 : 2023",
    description: "Supported the implementation of BIS quality control orders for the footwear industry, ensuring compliance with newly updated standards.",
    image: "https://images.unsplash.com/photo-1513135557534-682d53fd7046?w=1000&auto=format", // Manufacturing floor
    date: "OCTOBER 2025",
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
import { FaGlobe, FaCheckCircle, FaAward, FaBuilding, FaPhoneAlt, FaGlobeAmericas } from "react-icons/fa";

interface AchievementSlide {
  id: number;
  country: string;
  clientName: string;
  headline: string;
  standard: string; // e.g., IS 13252
  description: string;
  image: string;
  date: string;
}

const SlideCard = ({ slide }: { slide: AchievementSlide }) => (
  <div className="bg-white rounded-xl overflow-hidden border border-primary-100 shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
    
    {/* 1. TOP STRIP: Country & Achievement Status */}
    <div className="px-5 py-3 bg-primary-950 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <FaGlobeAmericas className="text-secondary-400 text-xs" />
        <span className="text-white text-[10px] tracking-[0.2em] family-semibold uppercase">
          {slide.country}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] text-primary-200 family-medium uppercase">Audit Verified</span>
      </div>
    </div>

    {/* 2. CENTER: Featured Audit Image with Watermark */}
    <div className="relative h-60 overflow-hidden bg-primary-900">
      <img
        src={slide.image}
        alt={slide.headline}
        className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* 3. Logo/Client Watermark Overlay */}
      <div className="absolute top-4 left-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded flex items-center gap-2">
          <FaBuilding className="text-white/70 text-xs" />
          <span className="text-white/80 text-[10px] family-medium tracking-wider uppercase">
            {slide.clientName}
          </span>
        </div>
      </div>

      {/* Elegant Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent opacity-60" />
      
      {/* Bottom badge on Image */}
      <div className="absolute bottom-4 left-5">
        <div className="bg-secondary-600 text-white text-[9px] family-bold px-2 py-1 rounded shadow-lg uppercase tracking-widest">
          {slide.standard}
        </div>
      </div>
    </div>

    {/* 4 & 5. CONTENT SECTION */}
    <div className="p-6 flex-grow flex flex-col">
      <div className="mb-3">
        <h3 className="text-primary-900 family-mainheading text-lg md:text-xl leading-snug group-hover:text-primary-600 transition-colors">
          {slide.headline}
        </h3>
      </div>

      <p className="text-gray-600 family-medium text-sm leading-relaxed mb-6">
        Successfully facilitated the <span className="family-semibold text-primary-800">BIS Certification</span> for {slide.clientName} in {slide.country}. 
        Complete factory audit, documentation, and sample testing were managed under {slide.standard}, ensuring 100% regulatory compliance for the Indian market.
      </p>

      {/* Decorative Compliance Seal Motif */}
      <div className="mt-auto pt-6 border-t border-primary-50 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] text-primary-400 uppercase tracking-widest family-bold">Completion Date</span>
          <span className="text-primary-800 family-semibold text-xs">{slide.date}</span>
        </div>
        
        {/* Certification Icon Group */}
        <div className="flex gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
          <FaCheckCircle className="text-primary-600 text-xl" />
          <FaAward className="text-secondary-600 text-xl" />
        </div>
      </div>
    </div>

    {/* 6. BOTTOM INFO STRIP */}
    <div className="bg-primary-50 px-5 py-3 flex items-center justify-between border-t border-primary-100">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <FaGlobe className="text-primary-400 text-[10px]" />
          <span className="text-[10px] text-primary-700 family-medium">www.yourconsultancy.com</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        <FaPhoneAlt className="text-secondary-600 text-[10px]" />
        <span className="text-[10px] text-primary-900 family-bold tracking-tighter">+91 000-000-0000</span>
      </div>
    </div>
  </div>
);

/** * PLACEHOLDER CONTENT SUGGESTION:
 * slide: {
 * country: "South Korea",
 * clientName: "Samsung Electronics",
 * headline: "Foreign Manufacturer FMCS License Secured",
 * standard: "IS 13252 (PART 1): 2010",
 * description: "End-to-end audit support...",
 * image: "/images/factory-audit.jpg",
 * date: "MARCH 2024"
 * }
 */

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
        <div className="max-w-8xl mx-auto  px-4 md:px-16 lg:px-28 ">

          {/* ── Section Header ── */}
         <div className="flex items-center justify-between mb-8">
  <div className="flex items-center gap-4">
    <div
      className="w-[3px] h-10 rounded-full"
      style={{ background: "linear-gradient(180deg,#1d4ed8,#0f172a)" }}
    />
    <div>
      <h2 className="text-2xl md:text-4xl font-light text-primary-950 family-mainheading leading-tight">
        Our Signature{" "}
        <span className="text-primary-600 family-bold">
          Compliance Services
        </span>
      </h2>
      <p className="text-[12px] md:text-sm text-gray-500 family-medium tracking-wide mt-1">
        BIS Certifications · Global Market Approvals · Regulatory Documentation
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
                    <SlideCard slide={slide} />
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
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 disabled:opacity-0 shadow-md hover:border-primary-300"
                >
                  <FaChevronLeft size={12} className="text-gray-600" />
                </button>
                <button
                  onClick={() => goTo(cur + 1)}
                  disabled={cur >= maxIdx}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 disabled:opacity-0 shadow-md hover:border-primary-300"
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
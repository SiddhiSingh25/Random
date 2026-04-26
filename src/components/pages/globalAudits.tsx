// import { useState, useEffect, useRef, useCallback } from "react";
// import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";

// interface Slide {
//   id: number;
//   title: string;
//   subtitle: string;
//   price: number;
//   originalPrice: number;
//   discount: number;
//   image: string;
// }

// const slides = [
//   {
//     id: 1,
//     country: "South Korea",
//     clientName: "Global Tech Corp",
//     headline: "Foreign Manufacturer FMCS License Secured",
//     standard: "IS 13252 (PART 1) : 2010",
//     description: "Successfully facilitated end-to-end BIS FMCS certification for high-end server motherboards, including factory audit and sample testing coordination.",
//     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&auto=format", // Factory Inspection
//     date: "MARCH 2026",
//   },
//   {
//     id: 2,
//     country: "Germany",
//     clientName: "Precision Automotive Ltd",
//     headline: "Successful BIS ISI Mark Audit Completed",
//     standard: "IS 15298 : PART 2",
//     description: "Managed the complete certification process for safety footwear. Verified compliance through rigorous on-site audit and laboratory validation.",
//     image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&auto=format", // Corporate Handshake
//     date: "FEBRUARY 2026",
//   },
//   {
//     id: 3,
//     country: "Taiwan",
//     clientName: "Alpha Semiconductor",
//     headline: "CRS Registration for Electronics Secured",
//     standard: "IS 13252 : 2010",
//     description: "Streamlined the Compulsory Registration Scheme (CRS) for advanced computing peripherals, ensuring rapid market entry for the Indian territory.",
//     image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&auto=format", // Electronics Lab
//     date: "JANUARY 2026",
//   },
//   {
//     id: 4,
//     country: "China",
//     clientName: "Zhong Lighting Systems",
//     headline: "ISI Certification Milestone Achieved",
//     standard: "IS 10322 : PART 5",
//     description: "Directed the BIS licensing process for LED self-ballasted lamps, covering factory quality control evaluation and technical documentation.",
//     image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&auto=format", // Professional Meeting
//     date: "DECEMBER 2025",
//   },
//   {
//     id: 5,
//     country: "United Arab Emirates",
//     clientName: "Emirates Steel Ind.",
//     headline: "Product Compliance & BIS License Renewal",
//     standard: "IS 1786 : 2008",
//     description: "Successfully renewed the BIS certification for structural steel products through a comprehensive remote audit and testing protocol.",
//     image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1000&auto=format", // Industrial Site
//     date: "NOVEMBER 2025",
//   },
//   {
//     id: 6,
//     country: "Vietnam",
//     clientName: "South Asia Footwear",
//     headline: "BIS Certification for Global Export",
//     standard: "IS 6721 : 2023",
//     description: "Supported the implementation of BIS quality control orders for the footwear industry, ensuring compliance with newly updated standards.",
//     image: "https://images.unsplash.com/photo-1513135557534-682d53fd7046?w=1000&auto=format", // Manufacturing floor
//     date: "OCTOBER 2025",
//   },
// ];

// const useVisible = () => {
//   const [v, setV] = useState(3);
//   useEffect(() => {
//     const check = () =>
//       setV(window.innerWidth < 480 ? 1 : window.innerWidth < 768 ? 2 : 3);
//     check();
//     window.addEventListener("resize", check);
//     return () => window.removeEventListener("resize", check);
//   }, []);
//   return v;
// };

// // ── Single Card — exactly like reference image ──
// import { FaGlobe, FaCheckCircle, FaAward, FaBuilding, FaPhoneAlt, FaGlobeAmericas } from "react-icons/fa";

// interface AchievementSlide {
//   id: number;
//   country: string;
//   clientName: string;
//   headline: string;
//   standard: string; // e.g., IS 13252
//   description: string;
//   image: string;
//   date: string;
// }

// const SlideCard = ({ slide }: { slide: AchievementSlide }) => (
//   <div className="bg-white rounded-xl overflow-hidden border border-primary-100 shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col h-full">
    
//     {/* 1. TOP STRIP: Country & Achievement Status */}
//     <div className="px-5 py-3 bg-primary-950 flex justify-between items-center">
//       <div className="flex items-center gap-2">
//         <FaGlobeAmericas className="text-secondary-400 text-xs" />
//         <span className="text-white text-[10px] tracking-[0.2em] family-semibold uppercase">
//           {slide.country}
//         </span>
//       </div>
//       <div className="flex items-center gap-1.5">
//         <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
//         <span className="text-[10px] text-primary-200 family-medium uppercase">Audit Verified</span>
//       </div>
//     </div>

//     {/* 2. CENTER: Featured Audit Image with Watermark */}
//     <div className="relative h-60 overflow-hidden bg-primary-900">
//       <img
//         src={slide.image}
//         alt={slide.headline}
//         className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
//       />
      
//       {/* 3. Logo/Client Watermark Overlay */}
//       <div className="absolute top-4 left-4">
//         <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded flex items-center gap-2">
//           <FaBuilding className="text-white/70 text-xs" />
//           <span className="text-white/80 text-[10px] family-medium tracking-wider uppercase">
//             {slide.clientName}
//           </span>
//         </div>
//       </div>

//       {/* Elegant Gradient Scrim */}
//       <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-transparent opacity-60" />
      
//       {/* Bottom badge on Image */}
//       <div className="absolute bottom-4 left-5">
//         <div className="bg-secondary-600 text-white text-[9px] family-bold px-2 py-1 rounded shadow-lg uppercase tracking-widest">
//           {slide.standard}
//         </div>
//       </div>
//     </div>

//     {/* 4 & 5. CONTENT SECTION */}
//     <div className="p-6 flex-grow flex flex-col">
//       <div className="mb-3">
//         <h3 className="text-primary-900 family-mainheading text-lg md:text-xl leading-snug group-hover:text-primary-600 transition-colors">
//           {slide.headline}
//         </h3>
//       </div>

//       <p className="text-gray-600 family-regular text-sm leading-relaxed mb-6">
//         Successfully facilitated the <span className="family-semibold text-primary-800">BIS Certification</span> for {slide.clientName} in {slide.country}. 
//         Complete factory audit, documentation, and sample testing were managed under {slide.standard}, ensuring 100% regulatory compliance for the Indian market.
//       </p>

//       {/* Decorative Compliance Seal Motif */}
//       <div className="mt-auto pt-6 border-t border-primary-50 flex items-center justify-between">
//         <div className="flex flex-col">
//           <span className="text-[10px] text-primary-400 uppercase tracking-widest family-bold">Completion Date</span>
//           <span className="text-primary-800 family-semibold text-xs">{slide.date}</span>
//         </div>
        
//         {/* Certification Icon Group */}
//         <div className="flex gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
//           <FaCheckCircle className="text-primary-600 text-xl" />
//           <FaAward className="text-secondary-600 text-xl" />
//         </div>
//       </div>
//     </div>

//     {/* 6. BOTTOM INFO STRIP */}
//     <div className="bg-primary-50 px-5 py-3 flex items-center justify-between border-t border-primary-100">
//       <div className="flex items-center gap-4">
//         <div className="flex items-center gap-1.5">
//           <FaGlobe className="text-primary-400 text-[10px]" />
//           <span className="text-[10px] text-primary-700 family-medium">www.yourconsultancy.com</span>
//         </div>
//       </div>
//       <div className="flex items-center gap-1.5">
//         <FaPhoneAlt className="text-secondary-600 text-[10px]" />
//         <span className="text-[10px] text-primary-900 family-bold tracking-tighter">+91 000-000-0000</span>
//       </div>
//     </div>
//   </div>
// );

// /** * PLACEHOLDER CONTENT SUGGESTION:
//  * slide: {
//  * country: "South Korea",
//  * clientName: "Samsung Electronics",
//  * headline: "Foreign Manufacturer FMCS License Secured",
//  * standard: "IS 13252 (PART 1): 2010",
//  * description: "End-to-end audit support...",
//  * image: "/images/factory-audit.jpg",
//  * date: "MARCH 2024"
//  * }
//  */

// // ── Main Component ──
// const GlobalAudit = () => {
//   const [cur, setCur] = useState(0);
//   const [secs, setSecs] = useState(23 * 3600 + 59 * 59);
//   const visible = useVisible();
//   const maxIdx = Math.max(0, slides.length - visible);
//   const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const goTo = useCallback(
//     (n: number) => setCur(Math.max(0, Math.min(n, maxIdx))),
//     [maxIdx]
//   );

//   const startAuto = useCallback(() => {
//     if (autoRef.current) clearInterval(autoRef.current);
//     autoRef.current = setInterval(
//       () => setCur((p) => (p >= maxIdx ? 0 : p + 1)),
//       5000
//     );
//   }, [maxIdx]);

//   useEffect(() => {
//     startAuto();
//     return () => { if (autoRef.current) clearInterval(autoRef.current); };
//   }, [startAuto]);

//   useEffect(() => { goTo(cur); }, [visible, goTo]);

//   useEffect(() => {
//     const t = setInterval(
//       () => setSecs((s) => (s > 0 ? s - 1 : 0)),
//       1000
//     );
//     return () => clearInterval(t);
//   }, []);

//   const h = String(Math.floor(secs / 3600)).padStart(2, "0");
//   const m = String(Math.floor((secs % 3600) / 60)).padStart(2, "0");
//   const s = String(secs % 60).padStart(2, "0");
//   const offset = cur * (100 / visible);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
//       `}</style>

//       <div className="py-8 md:py-10 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 md:px-6">

//           {/* ── Section Header ── */}
//          <div className="flex items-center justify-between mb-8">
//   <div className="flex items-center gap-4">
//     <div
//       className="w-[3px] h-10 rounded-full"
//       style={{ background: "linear-gradient(180deg,#1d4ed8,#0f172a)" }}
//     />
//     <div>
//       <h2 className="text-2xl md:text-4xl font-light text-primary-950 family-mainheading leading-tight">
//         Our Signature{" "}
//         <span className="text-primary-600 family-bold">
//           Compliance Services
//         </span>
//       </h2>
//       <p className="text-[12px] md:text-sm text-gray-500 family-medium tracking-wide mt-1">
//         BIS Certifications · Global Market Approvals · Regulatory Documentation
//       </p>
//     </div>
//   </div>
// </div>

//           {/* ── Slider ── */}
//           <div
//             className="relative group"
//             onMouseEnter={() => { if (autoRef.current) clearInterval(autoRef.current); }}
//             onMouseLeave={startAuto}
//           >
//             <div className="overflow-hidden">
//               <div
//                 className="flex gap-4 transition-transform duration-500 ease-out"
//                 style={{ transform: `translateX(-${offset}%)` }}
//               >
//                 {slides.map((slide) => (
//                   <div
//                     key={slide.id}
//                     className="flex-shrink-0"
//                     style={{
//                       width: `calc(${100 / visible}% - ${(4 * (visible - 1)) / visible}px)`,
//                     }}
//                   >
//                     <SlideCard slide={slide} />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Arrows */}
//             {maxIdx > 0 && (
//               <>
//                 <button
//                   onClick={() => goTo(cur - 1)}
//                   disabled={cur === 0}
//                   className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 disabled:opacity-0 shadow-md hover:border-primary-300"
//                 >
//                   <FaChevronLeft size={12} className="text-gray-600" />
//                 </button>
//                 <button
//                   onClick={() => goTo(cur + 1)}
//                   disabled={cur >= maxIdx}
//                   className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 disabled:opacity-0 shadow-md hover:border-primary-300"
//                 >
//                   <FaChevronRight size={12} className="text-gray-600" />
//                 </button>
//               </>
//             )}
//           </div>

//           {/* Dots */}
//           {maxIdx > 0 && (
//             <div className="flex justify-center gap-1.5 mt-5">
//               {Array.from({ length: maxIdx + 1 }).map((_, i) => (
//                 <button
//                   key={i}
//                   onClick={() => goTo(i)}
//                   className="h-1 rounded-full transition-all duration-300"
//                   style={{
//                     width: i === cur ? "20px" : "6px",
//                     background:
//                       i === cur
//                         ? "linear-gradient(90deg,#db2777,#9333ea)"
//                         : "#d1d5db",
//                   }}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default GlobalAudit;




import { useState, useEffect, useRef, useCallback } from "react";

const slides = [
  {
    id: 1,
    country: "Vietnam",
    flagCode: "vn",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop",
    cert: "BIS Audit",
    standard: "IS 18573",
    company: "VinaOne Steel",
    desc: "Successful BIS audit for VinaOne Steel, one of Vietnam's leading steel manufacturers — compliance with IS 18573, a newly introduced Indian Standard developed as a subsidiary to IS 4923.",
  },
  {
    id: 2,
    country: "Thailand",
    flagCode: "th",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1000&auto=format&fit=crop",
    cert: "BIS Audit",
    standard: "IS 16192",
    company: "VOSSEN MANUFACTURE",
    desc: "BIS audit completed for VOSSEN MANUFACTURE Thailand — Automotive Vehicle Wheel Rims for Two and Three Wheeled Vehicles complying with IS 16192 Part 1:2014.",
  },
  {
    id: 3,
    country: "Taiwan",
    flagCode: "tw",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1000&auto=format&fit=crop",
    cert: "BIS Audit",
    standard: "IS 17954",
    company: "GSLIDE CORPORATION",
    desc: "BIS audit for GSLIDE CORPORATION Taiwan — Telescopic Ball Bearing Drawer Slide adhering to Indian Standard IS 17954:2023.",
  },
  {
    id: 4,
    country: "South Korea",
    flagCode: "kr",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000&auto=format&fit=crop",
    cert: "BIS Audit",
    standard: "IS 10951",
    company: "Hyundai Chemical Co.",
    desc: "Aleph INDIA Group's client M/S. Hyundai Chemical Co. Ltd. (Korea) aces the BIS audit for Polypropylene (PP) Materials, adhering to Indian Standard IS 10951:2020.",
  },
  {
    id: 5,
    country: "Japan",
    flagCode: "jp",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1000&auto=format&fit=crop",
    cert: "BIS Audit",
    standard: "IS 191",
    company: "JX Metals Smelting Co.",
    desc: "Successful BIS audit for M/S JX Metals Smelting Co., Ltd (Japan) — achieves compliance for their copper product under Indian Standard IS 191:2007.",
  },
  {
    id: 6,
    country: "Vietnam",
    flagCode: "vn",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&auto=format&fit=crop",
    cert: "BIS Audit",
    standard: "IS 14740",
    company: "HH Dream Printing",
    desc: "The Bureau of Indian Standards recently conducted a thorough BIS Audit for M/S HH Dream Printing Company Limited in Vietnam.",
  },
];

// 3 on desktop (≥768px), 1 on mobile
const useVisible = () => {
  const [v, setV] = useState(3);
  useEffect(() => {
    const check = () => setV(window.innerWidth < 768 ? 1 : 3);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return v;
};

const EmailIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <rect x="1" y="2.5" width="10" height="7" rx="1.5" stroke="#1d3461" strokeWidth="1.2" />
    <path d="M1 4l5 3.5L11 4" stroke="#1d3461" strokeWidth="1.2" />
  </svg>
);
const WebIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="4.5" stroke="#1d3461" strokeWidth="1.2" />
    <path d="M1.5 6h9M6 1.5S4 4 4 6s2 4.5 2 4.5M6 1.5S8 4 8 6s-2 4.5-2 4.5" stroke="#1d3461" strokeWidth="1.1" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
    <path d="M2 2.5c0 4.7 3.8 8.5 8.5 8.5V9.5l-2-1-.5 1c-1-.4-2.5-1.9-2.9-2.9l1-.5L5 4.5 3.5 2 2 2.5z" stroke="#1d3461" strokeWidth="1.1" />
  </svg>
);

const SlideCard = ({ slide }) => (
  <div className="ias-card">
    <div className="ias-img">
      <img src={slide.image} alt={slide.country} />
      <div className="ias-overlay" />
      <div className="ias-country">
        <div className="ias-flag">
          <img src={`https://flagcdn.com/w40/${slide.flagCode}.png`} alt={slide.country} />
        </div>
        <div className="ias-cname">{slide.country}</div>
      </div>
      <div className="ias-logo">Aleph INDIA</div>
    </div>
    <div className="ias-body">
      <div className="ias-cert-col">
        <div className="ias-cert-badge">{slide.cert}</div>
        <div className="ias-std">{slide.standard}</div>
        <div className="ias-done">
          <span className="ias-dot-g" />
          <span className="ias-done-txt">Done</span>
        </div>
      </div>
      <div className="ias-info">
        <p className="ias-desc">
          {slide.desc.split(slide.company).map((part, i, arr) =>
            i < arr.length - 1 ? [part, <b key={i}>{slide.company}</b>] : part
          )}
        </p>
        <div className="ias-divider" />
        <div className="ias-contacts">
          <div className="ias-ci"><EmailIcon /><a href="mailto:info@alephindia.in">info@alephindia.in</a></div>
          <div className="ias-ci"><WebIcon /><a href="https://www.alephindia.in" target="_blank" rel="noreferrer">www.alephindia.in</a></div>
          <div className="ias-ci"><PhoneIcon /><span>+91 98185 71192</span></div>
        </div>
      </div>
    </div>
  </div>
);

export default function InternationalAuditsSlider() {
  const [cur, setCur] = useState(0);
  const autoRef = useRef(null);
  const visible = useVisible();
  const GAP = 16;
  const maxIdx = Math.max(0, slides.length - visible);

  const goTo = useCallback(
    (n) => setCur(Math.max(0, Math.min(n, maxIdx))),
    [maxIdx]
  );

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(
      () => setCur((p) => (p >= maxIdx ? 0 : p + 1)),
      4000
    );
  }, [maxIdx]);

  useEffect(() => {
    startAuto();
    return () => clearInterval(autoRef.current);
  }, [startAuto]);

  useEffect(() => { goTo(cur); }, [visible, goTo]);

  // offset: move by one card width + gap per step
  // card width = (100% - gaps) / visible
  // translateX by cur * (cardWidth + gap) but in % of track
  // Simpler: use pixel-based offset via ref
  const windowRef = useRef(null);
  const [offsetPx, setOffsetPx] = useState(0);

  useEffect(() => {
    const recalc = () => {
      if (!windowRef.current) return;
      const totalW = windowRef.current.offsetWidth;
      const cardW = (totalW - GAP * (visible - 1)) / visible;
      setOffsetPx(cur * (cardW + GAP));
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [cur, visible]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;600&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ias-wrap {
          font-family: 'DM Sans', sans-serif;
          background: #f2f5fb;
          padding: 32px 24px 24px;
        }

        .ias-hdr { text-align: center; margin-bottom: 24px; }
        .ias-eyebrow {
          font-size: 9px; font-weight: 700; letter-spacing: .22em;
          text-transform: uppercase; color: #3a6bc4; margin-bottom: 7px;
        }
        .ias-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px; font-weight: 600; color: #0a1628; line-height: 1.2;
        }
        .ias-title span { font-weight: 300; }
        .ias-rule {
          width: 44px; height: 2.5px;
          background: linear-gradient(90deg, #1d3461, #3a6bc4);
          border-radius: 3px; margin: 10px auto 0;
        }

        .ias-slider-outer { position: relative; }
        .ias-window { overflow: hidden; border-radius: 12px; }
        .ias-track {
          display: flex;
          gap: 16px;
          transition: transform .5s cubic-bezier(.4,0,.2,1);
        }

        .ias-card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #dde6f4;
          box-shadow: 0 4px 20px rgba(15,27,55,.07);
          transition: transform .25s, box-shadow .25s;
          flex-shrink: 0;
        }
        .ias-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 32px rgba(15,27,55,.11);
        }

        .ias-img { position: relative; height: 185px; overflow: hidden; }
        .ias-img img {
          width: 100%; height: 100%; object-fit: cover;
          object-position: center top; transition: transform .5s;
        }
        .ias-card:hover .ias-img img { transform: scale(1.04); }

        .ias-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(6,12,35,.72) 0%, rgba(6,12,35,.1) 55%, transparent 100%);
        }

        .ias-country {
          position: absolute; bottom: 13px; left: 13px;
          display: flex; align-items: center;
        }
        .ias-flag {
          width: 30px; height: 30px; border-radius: 50%;
          overflow: hidden; border: 2.5px solid #fff;
          box-shadow: 0 0 0 2px rgba(29,52,97,.45), 0 3px 10px rgba(0,0,0,.3);
          flex-shrink: 0; z-index: 2; position: relative;
        }
        .ias-flag img { width: 100%; height: 100%; object-fit: cover; }
        .ias-cname {
          background: #1d3461; color: #fff;
          font-size: 12px; font-weight: 700; letter-spacing: .05em;
          padding: 5px 13px 5px 11px;
          border-radius: 0 20px 20px 0;
          border: 1.5px solid rgba(99,157,255,.4); border-left: none;
          margin-left: -6px;
          box-shadow: 0 2px 10px rgba(0,0,0,.28); line-height: 1;
        }
        .ias-logo {
          position: absolute; top: 11px; right: 11px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.28);
          color: #fff; font-size: 8px; font-weight: 700;
          letter-spacing: .1em; padding: 4px 9px;
          border-radius: 5px; backdrop-filter: blur(5px);
        }

        .ias-body { padding: 12px 14px 14px; display: flex; gap: 12px; align-items: flex-start; }

        .ias-cert-col {
          flex-shrink: 0; display: flex; flex-direction: column;
          align-items: center; gap: 5px;
          padding-right: 12px; border-right: 1px solid #edf1f9;
          min-width: 64px;
        }
        .ias-cert-badge {
          background: #1d3461; color: #a8c8ff;
          font-size: 7.5px; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; padding: 3px 8px;
          border-radius: 4px; border: 1px solid rgba(99,157,255,.3);
          white-space: nowrap; text-align: center;
        }
        .ias-std { font-size: 9px; font-weight: 600; color: #5a7090; letter-spacing: .04em; text-align: center; }
        .ias-done {
          display: flex; align-items: center; gap: 4px;
          background: #eaf4ef; border: 1px solid #9fd8b8;
          border-radius: 10px; padding: 3px 7px; white-space: nowrap;
        }
        .ias-dot-g { width: 5px; height: 5px; border-radius: 50%; background: #27a85a; flex-shrink: 0; }
        .ias-done-txt { font-size: 7.5px; font-weight: 700; color: #1a7a45; }

        .ias-info { flex: 1; min-width: 0; }
        .ias-desc {
          font-size: 11px; line-height: 1.65; color: #4a5e7a; margin-bottom: 9px;
          display: -webkit-box; -webkit-line-clamp: 3;
          -webkit-box-orient: vertical; overflow: hidden;
        }
        .ias-desc b { color: #0a1628; font-weight: 600; }
        .ias-divider { height: 1px; background: #edf1f9; margin-bottom: 9px; }
        .ias-contacts { display: flex; flex-wrap: wrap; gap: 4px 8px; }
        .ias-ci { display: flex; align-items: center; gap: 4px; font-size: 9px; color: #5a6e90; }
        .ias-ci a { color: #1d3461; font-weight: 600; text-decoration: none; }
        .ias-ci a:hover { text-decoration: underline; }

        .ias-nav {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; margin-top: 16px;
        }
        .ias-nav-btn {
          width: 32px; height: 32px; border-radius: 50%;
          background: #fff; border: 1px solid #c8d8f0;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #1d3461; transition: all .2s; flex-shrink: 0;
        }
        .ias-nav-btn:hover:not(:disabled) { background: #1d3461; border-color: #1d3461; color: #fff; }
        .ias-nav-btn:disabled { opacity: .3; cursor: not-allowed; }

        .ias-dots { display: flex; align-items: center; gap: 6px; }
        .ias-dot {
          height: 4px; border-radius: 4px; background: #c4d0e8;
          border: none; cursor: pointer; padding: 0; transition: all .3s;
        }
        .ias-dot.active { width: 22px; background: #1d3461; }
        .ias-dot:not(.active) { width: 5px; }

        .ias-counter { font-size: 10px; font-weight: 600; color: #8a9ec0; letter-spacing: .08em; min-width: 36px; text-align: center; }
        .ias-counter b { color: #1d3461; }
      `}</style>

      <div
        className="ias-wrap"
        onMouseEnter={() => clearInterval(autoRef.current)}
        onMouseLeave={startAuto}
      >
        <div className="ias-hdr">
          <p className="ias-eyebrow">Global Presence</p>
          <h2 className="ias-title"><span>International </span>Audits &amp; Participation</h2>
          <div className="ias-rule" />
        </div>

        <div className="ias-slider-outer">
          <div className="ias-window" ref={windowRef}>
            <div
              className="ias-track"
              style={{ transform: `translateX(-${offsetPx}px)` }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  style={{
                    width: windowRef.current
                      ? `${(windowRef.current.offsetWidth - GAP * (visible - 1)) / visible}px`
                      : `calc(${100 / visible}% - ${(GAP * (visible - 1)) / visible}px)`,
                    flexShrink: 0,
                  }}
                >
                  <SlideCard slide={slide} />
                </div>
              ))}
            </div>
          </div>

          {maxIdx > 0 && (
            <div className="ias-nav">
              <button className="ias-nav-btn" onClick={() => goTo(cur - 1)} disabled={cur === 0} aria-label="Previous">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9 11L5 7l4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>

              <div className="ias-dots">
                {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                  <button key={i} className={`ias-dot${i === cur ? " active" : ""}`} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>

              <div className="ias-counter">
                <b>{String(cur + 1).padStart(2, "0")}</b>{" / "}{String(maxIdx + 1).padStart(2, "0")}
              </div>

              <button className="ias-nav-btn" onClick={() => goTo(cur + 1)} disabled={cur >= maxIdx} aria-label="Next">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}


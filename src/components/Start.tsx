


// import { useState, useEffect, } from "react";
// import { FaArrowRight, FaCompass, FaTruck, FaShieldAlt, FaUndo, FaHeadset, FaCheckCircle } from "react-icons/fa";
// import { FaBolt } from "react-icons/fa6";

// // ── Data ──
// const heroImages = [
//   { url: "images/slider/slider1.png", alt: "Slider Image" },
//   { url: "images/slider/slider1.png", alt: "Slider Image" },
//   { url: "images/slider/slider1.png", alt: "Slider Image" },
//   { url: "images/slider/slider1.png", alt: "Slider Image" },
//   { url: "images/slider/slider1.png", alt: "Slider Image" },
//   { url: "images/slider/slider1.png", alt: "Slider Image" },
// ];

// const stats = [
//   { num: "1200+", label: "Projects Delivered" },
//   { num: "98%", label: "Approval Success Rate" },
//   { num: "10+", label: "Years Experience" },
// ];

// const trustBadges = [
//   {
//     icon: FaShieldAlt,
//     label: "100% Compliance Assistance",
//     sub: "Accurate regulatory guidance",
//     color: "bg-blue-50",
//     iconColor: "text-blue-700",
//   },
//   {
//     icon: FaCheckCircle,
//     label: "Govt. Approved Process",
//     sub: "Trusted documentation support",
//     color: "bg-green-50",
//     iconColor: "text-green-700",
//   },
//   {
//     icon: FaBolt,
//     label: "Fast Approval Support",
//     sub: "Quick & hassle-free execution",
//     color: "bg-orange-50",
//     iconColor: "text-orange-600",
//   },
//   {
//     icon: FaHeadset,
//     label: "Dedicated Expert Team",
//     sub: "End-to-end consultation",
//     color: "bg-purple-50",
//     iconColor: "text-purple-700",
//   },
// ];

// const HeroSection = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto-slide every 5s
//   useEffect(() => {
//     const t = setInterval(() => setCurrent((p) => (p + 1) % heroImages.length), 4000);
//     return () => clearInterval(t);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

//         /* Staggered fade-up */
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(22px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .h1 { animation: fadeUp 0.7s ease 0.1s both; }
//         .h2 { animation: fadeUp 0.7s ease 0.22s both; }
//         .h3 { animation: fadeUp 0.7s ease 0.34s both; }
//         .h4 { animation: fadeUp 0.7s ease 0.46s both; }
//         .h5 { animation: fadeUp 0.7s ease 0.58s both; }
//         .h6 { animation: fadeUp 0.7s ease 0.70s both; }

//         /* Animated gradient heading */
//         @keyframes gradShift {
//           0%,100% { background-position: 0% 50%; }
//           50%      { background-position: 100% 50%; }
//         }
//         .grad-text {
//         background: linear-gradient(
 
//   #fff,
//   #fefefe

// );
//   background-size: 300%;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
//   animation: gradShift 10s ease-in-out infinite;
//         }

//         /* Scroll dot */
//         @keyframes scrollDot {
//           0%,100% { transform: translateY(0); opacity: 1; }
//           60%      { transform: translateY(12px); opacity: 0; }
//         }
//         .scroll-dot { animation: scrollDot 1.8s ease infinite; }

//         /* Slide counter line */
//         @keyframes lineGrow {
//           from { transform: scaleX(0); }
//           to   { transform: scaleX(1); }
//         }
//         .counter-line {
//           transform-origin: left;
//           animation: lineGrow 5s linear infinite;
//         }

//         /* Ping dot */
//         @keyframes ping {
//           75%,100% { transform: scale(2); opacity: 0; }
//         }
//         .ping { animation: ping 1.2s cubic-bezier(0,0,0.2,1) infinite; }

//         /* Primary button shimmer */
//         .primary-btn { position: relative; overflow: hidden; }
//         .primary-btn::after {
//           content: '';
//           position: absolute; inset: 0;
//           background: linear-gradient(135deg, #20385c, #0f1b37);
//           opacity: 0; transition: opacity 0.3s;
//         }
//         .primary-btn:hover::after { opacity: 1; }
//         .primary-btn:hover { transform: translateY(-1px); }
//         .primary-btn > * { position: relative; z-index: 1; }
//       `}</style>

//       <section className="relative h-[88vh] md:h-[88vh] overflow-hidden bg-black">

//         {/* ── Background images with crossfade ── */}
//         {heroImages.map((img, i) => (
//           <div
//             key={i}
//             className="absolute inset-0 transition-opacity duration-1000"
//             style={{ opacity: current === i ? 1 : 0 }}
//           >
//             <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
//           </div>
//         ))}

//         {/* Overlays */}
//        {/* Overlays */}
// <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-black/10" />
// <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

//         {/* ── Content ── */}
//         <div className="relative z-10 h-full flex items-center">
//           <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
//             <div className="max-w-3xl">

//               {/* Eyebrow badge */}
//               <div className="h1 inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
//                 <span className="relative flex h-2 w-2">
//                   <span className="ping absolute inline-flex h-full w-full rounded-full bg-primary-800 opacity-75" />
//                   <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-700" />
//                 </span>
//                 <span
//                   className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white cursor-pointer"
//                   style={{ fontFamily: "'DM Sans', sans-serif" }}
//                 //   onClick={() => navigate("/products")}
//                 >
//                   Trusted Compliance Partner 2026
//                 </span>
//               </div>

//               {/* Heading */}
//               <h1
//                 className="h2 font-light text-white leading-tight mb-1  "
//                 style={{
//                   // fontFamily: "'Poppins', sans-serif",
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: "clamp(2rem, 5vw, 3.8rem)",
//                 }}
//               >
//                 Simplifying Your
//               </h1>

//               <h1
//                 className="h3 font-semibold grad-text leading-tight mb-5 "
//                 style={{
//                   // fontFamily: "'Poppins', sans-serif",
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: "clamp(2.1rem, 5vw, 3.9rem)",
//                 }}
//               >
//                 Compliance Journey.
//               </h1>

//               {/* Description */}
//               <p
//                 className="h4 text-gray-300 text-[0.5rem] md:text-base leading-relaxed max-w-md mb-8 font-semibold"
//                 // style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
//               >
//                 Get expert assistance for BIS, WPC, BEE, EPR, TEC, LMPC and other mandatory certifications with accurate documentation and faster approvals.
//               </p>

//               {/* CTA Buttons */}
//               <div className="h5 flex flex-wrap gap-3 mb-10">
//                 <button
//                   //   onClick={() => navigate("/products")}
//                   className="primary-btn flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white transition-all duration-200"
//                   style={{
//                     fontFamily: "'DM Sans', sans-serif",
//                     background: "linear-gradient(135deg, #20385c, #0f1b37)",
//                     letterSpacing: "0.04em",
//                   }}
//                 >
//                   Get Free Consultation
//                   <FaArrowRight size={11} />
//                 </button>

//                 <button
//                   //   onClick={() => navigate("/category/women")}
//                   className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white/80 border border-white/25 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-200 backdrop-blur-sm"
//                   style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em" }}
//                 >
//                   <FaCompass size={12} />
//                   Explore Services
//                 </button>
//               </div>

//               {/* Stats */}
//               <div className="h6 flex gap-8 pt-5 border-t border-white/15">
//                 {stats.map((s) => (
//                   <div key={s.label}>
//                     <p
//                       className="text-xl md:text-2xl  text-white leading-none mb-1 family-semibold"
//                     >
//                       {s.num}
//                     </p>
//                     <p
//                       className="text-[10px] text-gray-400 tracking-[0.12em] uppercase family-semibold"
//                     >
//                       {s.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Slide counter — bottom right ── */}


//         {/* ── Dot indicators — bottom center ── */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
//           {heroImages.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className="transition-all duration-300 rounded-full"
//               style={{
//                 width: current === i ? "24px" : "6px",
//                 height: "6px",
//                 background: current === i
//                   ? "linear-gradient(90deg, #20385c, #0f1b37)"
//                   : "rgba(255,255,255,0.3)",
//               }}
//             />
//           ))}
//         </div>


//       </section>


//       <div className="bg-white border-y border-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
//             {trustBadges.map((badge, idx) => (
//               <div
//                 key={idx}
//                 className="group flex flex-col items-center text-center gap-3 px-6 py-8 cursor-pointer hover:bg-primary-50/30 transition-all duration-300 relative"
//               >
//                 {/* Top accent on hover */}
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-gradient-to-r from-primary-700 to-primary-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//                 {/* Icon circle — theme colored by default */}
//                 <div
//                   className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
//                   style={{
//                     background: "linear-gradient(135deg, #f2f5fa, #fdf7ef)",
//                     border: "1px solid #dbe4f0",
//                   }}
//                 >
//                   {/* SVG gradient for icon color */}
//                   <svg width="0" height="0" className="absolute">
//                     <defs>
//                       <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                         <stop offset="0%" stopColor="#2b3f6c" />
//                         <stop offset="100%" stopColor="#0f1b37" />
//                       </linearGradient>
//                     </defs>
//                   </svg>
//                   <badge.icon
//                     size={19}
//                     style={{ fill: "url(#iconGrad)", color: "#20385c" }}
//                     className="group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>

//                 {/* Text */}
//                 <div>
//                   <h4
//                     className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-700 group-hover:text-primary-800 transition-colors duration-200"
//                     style={{ fontFamily: "'DM Sans', sans-serif" }}
//                   >
//                     {badge.label}
//                   </h4>
//                   <p
//                     className="text-[10px] text-gray-400 mt-1 leading-relaxed"
//                     style={{ fontFamily: "'DM Sans', sans-serif" }}
//                   >
//                     {badge.sub}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;












import { useState, useEffect, useRef } from "react";
import { FaArrowRight, FaCompass } from "react-icons/fa";

// ── Slide Data — Direct Unsplash CDN URLs ──
const slides = [
  {
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=85&auto=format&fit=crop",
    alt: "Modern Corporate Office Building",
  },
  {
    url: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1600&q=85&auto=format&fit=crop",
    alt: "Professional Business Meeting",
  },
  {
    url: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1600&q=85&auto=format&fit=crop",
    alt: "Corporate Office Interior",
  },
  {
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=85&auto=format&fit=crop",
    alt: "Business Team Collaboration",
  },
  {
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85&auto=format&fit=crop",
    alt: "Professional Office Space",
  },
];

// ── Trust Badges ──
const trustBadges = [
  {
    label: "100% Compliance Assistance",
    sub: "Accurate regulatory guidance",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L3 6v6c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V6L12 2z"
          stroke="#1d3461" strokeWidth="1.6" strokeLinejoin="round"
          fill="rgba(29,52,97,0.07)"
        />
        <path d="M8.5 12l2.5 2.5 4.5-4.5" stroke="#1d3461" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Govt. Approved Process",
    sub: "Trusted documentation support",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 21h18M4 21V10M20 21V10M2 10l10-7 10 7"
          stroke="#1d3461" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" rx="0.5"
          stroke="#1d3461" strokeWidth="1.4" fill="rgba(29,52,97,0.07)" />
      </svg>
    ),
  },
  {
    label: "Fast Approval Support",
    sub: "Quick & hassle-free execution",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#1d3461" strokeWidth="1.6"
          fill="rgba(29,52,97,0.07)" />
        <path d="M12 7v5l3 3" stroke="#1d3461" strokeWidth="1.6"
          strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Dedicated Expert Team",
    sub: "End-to-end consultation",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3" stroke="#1d3461" strokeWidth="1.6"
          fill="rgba(29,52,97,0.07)" />
        <path d="M3 20c0-3.31 2.69-6 6-6s6 2.69 6 6"
          stroke="#1d3461" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="18" cy="8" r="2.2" stroke="#1d3461" strokeWidth="1.4"
          fill="rgba(29,52,97,0.07)" />
        <path d="M21 19c0-2.21-1.34-4-3-4"
          stroke="#1d3461" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

const stats = [
  { num: "1200+", label: "Projects Delivered" },
  { num: "98%",   label: "Approval Success Rate" },
  { num: "10+",   label: "Years Experience" },
];

const certTags = ["BIS", "WPC", "BEE", "EPR", "TEC", "LMPC", "FSSAI"];

// ── Component ──
const HeroSection = () => {
  const [current, setCurrent]         = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
      setProgressKey((k) => k + 1);
    }, 4000);
  };

  const goTo = (n) => {
    setCurrent(n);
    setProgressKey((k) => k + 1);
    startInterval();
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%,100% { box-shadow: 0 0 0 3px rgba(99,157,255,0.3); }
          50%      { box-shadow: 0 0 0 7px rgba(99,157,255,0.08); }
        }
        @keyframes progressAnim {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .hero-anim-1 { animation: fadeUp 0.75s ease 0.10s both; }
        .hero-anim-2 { animation: fadeUp 0.75s ease 0.25s both; }
        .hero-anim-3 { animation: fadeUp 0.75s ease 0.38s both; }
        .hero-anim-4 { animation: fadeUp 0.75s ease 0.50s both; }
        .hero-anim-5 { animation: fadeUp 0.75s ease 0.62s both; }
        .hero-anim-6 { animation: fadeUp 0.75s ease 0.74s both; }

        .eyebrow-dot       { animation: blink 2.2s infinite; }
        .hero-progress-bar { animation: progressAnim 4s linear; }
        .hero-slide        { transition: opacity 1.3s ease; }

        /* ── Heading shimmer text ── */
        .hero-heading-shimmer {
          background: linear-gradient(
            120deg,
            #ffffff 0%,
            #a8c4ff 30%,
            #ffffff 50%,
            #7eaaff 70%,
            #ffffff 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 6s linear infinite;
        }

        /* ── Primary button ── */
        .hero-btn-primary {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 30px; border-radius: 100px;
          font-size: 13px; font-weight: 600; letter-spacing: 0.06em;
          color: #fff;
          background: linear-gradient(135deg, #2a4a8a 0%, #0f1b37 100%);
          border: 1.5px solid rgba(99,157,255,0.5);
          cursor: pointer; font-family: 'DM Sans', sans-serif;
          transition: all 0.25s; position: relative; overflow: hidden;
          text-transform: uppercase;
        }
        .hero-btn-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(99,157,255,0.18) 0%, transparent 60%);
          opacity: 0; transition: opacity 0.25s;
        }
        .hero-btn-primary:hover { transform: translateY(-2px); border-color: rgba(99,157,255,0.85); }
        .hero-btn-primary:hover::before { opacity: 1; }

        /* ── Secondary button ── */
        .hero-btn-secondary {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 30px; border-radius: 100px;
          font-size: 13px; font-weight: 500; letter-spacing: 0.05em;
          color: rgba(255,255,255,0.78);
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(12px);
          cursor: pointer; font-family: 'DM Sans', sans-serif;
          transition: all 0.25s;
          text-transform: uppercase;
        }
        .hero-btn-secondary:hover {
          background: rgba(99,157,255,0.1);
          border-color: rgba(99,157,255,0.45);
          color: #fff;
          transform: translateY(-2px);
        }

        /* ── Cert tag ── */
        .cert-tag {
          font-size: 9px; font-weight: 800; letter-spacing: 0.14em;
          padding: 5px 13px; border-radius: 100px;
          background: rgba(30,52,100,0.55);
          border: 1px solid rgba(99,157,255,0.35);
          color: #a8c8ff;
          text-transform: uppercase;
          backdrop-filter: blur(10px);
          transition: all 0.2s;
        }
        .cert-tag:hover {
          background: rgba(99,157,255,0.2);
          border-color: rgba(99,157,255,0.6);
          color: #d6e8ff;
        }

        /* ── Slide dot ── */
        .slide-dot {
          transition: all 0.35s; border: none; padding: 0;
          cursor: pointer; border-radius: 100px; height: 4px;
          background: rgba(255,255,255,0.22);
        }
        .slide-dot.active {
          width: 28px !important;
          background: linear-gradient(90deg, #639dff, #1d3461) !important;
        }
        .slide-dot:not(.active) { width: 5px; }

        /* ── Trust bar ── */
        .trust-item { transition: background 0.2s; cursor: default; }
        .trust-item:hover { background: #f5f8ff; }
        .trust-item:hover .trust-accent  { transform: translateX(-50%) scaleX(1) !important; }
        .trust-item:hover .trust-icon-wrap { transform: scale(1.08); }
        .trust-item:hover .trust-title { color: #0f1b37; }
        .trust-icon-wrap { transition: transform 0.25s; }

        /* ── Stat divider ── */
        .stat-item + .stat-item {
          padding-left: 28px;
          border-left: 1px solid rgba(255,255,255,0.12);
        }

        /* ── Responsive ── */

        /* Tablet */
        @media (max-width: 1024px) {
          .hero-content-inner { padding: 0 48px !important; }
          .hero-vline { display: none !important; }
          .trust-title { font-size: 9px !important; }
        }

        /* Mobile landscape / large phone */
        @media (max-width: 768px) {
          .hero-section { height: 100svh !important; min-height: 580px; }
          .hero-content-inner {
            padding: 0 24px !important;
            justify-content: flex-end !important;
            padding-bottom: 80px !important;
          }
          .hero-content-box { max-width: 100% !important; }
          .hero-eyebrow-text { font-size: 9px !important; letter-spacing: 0.14em !important; }
          .hero-h-thin  { font-size: clamp(1.7rem, 7vw, 2.4rem) !important; }
          .hero-h-bold  { font-size: clamp(1.8rem, 7.5vw, 2.6rem) !important; }
          .hero-desc    { font-size: 13px !important; max-width: 100% !important; }
          .hero-btn-row { flex-direction: column !important; }
          .hero-btn-primary, .hero-btn-secondary {
            width: 100% !important; justify-content: center !important;
          }
          .hero-stats-row { gap: 20px !important; }
          .stat-item + .stat-item { padding-left: 16px !important; }
          .slide-dots  { left: 24px !important; }
          .slide-counter { right: 24px !important; }

          /* Trust bar 2x2 grid on tablet/mobile */
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .trust-grid > div:nth-child(2) { border-right: 1px solid #e8ecf2 !important; }
          .trust-grid > div:nth-child(3) { border-top: 1px solid #e8ecf2; }
          .trust-grid > div:nth-child(4) { border-top: 1px solid #e8ecf2; }
        }

        /* Small phones */
        @media (max-width: 480px) {
          .hero-content-inner { padding: 0 18px !important; padding-bottom: 72px !important; }
          .hero-eyebrow { padding: 6px 14px !important; }
          .hero-cert-row { gap: 5px !important; }
          .hero-stats-row { gap: 14px !important; }
          .stat-num { font-size: 20px !important; }

          /* Trust bar single column on very small */
          .trust-grid {
            grid-template-columns: repeat(1, 1fr) !important;
            border-left: none !important;
          }
          .trust-grid > div {
            border-right: none !important;
            border-bottom: 1px solid #e8ecf2;
          }
        }
      `}</style>

      {/* ══════════════════════════════
          HERO SECTION
      ══════════════════════════════ */}
      <section
        className="hero-section"
        style={{
          position: "relative",
          height: "88vh",
          minHeight: 560,
          overflow: "hidden",
          background: "#060d1e",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* ── Background slides ── */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="hero-slide"
            style={{
              position: "absolute", inset: 0,
              opacity: current === i ? 1 : 0,
              backgroundImage: `url(${slide.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* ── Layered overlays ── */}
        {/* Main directional overlay — strong navy left, clears right */}
        <div style={{
          position: "absolute", inset: 0,
          background: `
            linear-gradient(108deg,
              rgba(4,9,22,0.92)  0%,
              rgba(8,18,44,0.82) 35%,
              rgba(10,22,52,0.52) 60%,
              rgba(10,22,52,0.12) 100%)
          `,
        }} />
        {/* Bottom vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(0deg, rgba(4,9,22,0.75) 0%, transparent 42%)",
        }} />
        {/* Subtle blue tint at top-left */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 55% 60% at 0% 0%, rgba(29,52,97,0.30) 0%, transparent 70%)",
        }} />
        {/* Grid texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `
            repeating-linear-gradient(0deg,  transparent, transparent 55px, rgba(255,255,255,0.015) 55px, rgba(255,255,255,0.015) 56px),
            repeating-linear-gradient(90deg, transparent, transparent 55px, rgba(255,255,255,0.015) 55px, rgba(255,255,255,0.015) 56px)
          `,
        }} />

        {/* ── Vertical accent line (hidden on mobile via CSS) ── */}
        <div
          className="hero-vline"
          style={{
            position: "absolute", left: 52, top: 80, bottom: 80, width: 1, zIndex: 5,
            background: "linear-gradient(to bottom, transparent, rgba(99,157,255,0.4) 30%, rgba(255,255,255,0.18) 55%, rgba(99,157,255,0.4) 80%, transparent)",
          }}
        />

        {/* ── CONTENT ── */}
        <div
          className="hero-content-inner"
          style={{
            position: "relative", zIndex: 10,
            height: "100%",
            display: "flex", alignItems: "center",
            padding: "0 80px",
          }}
        >
          <div className="hero-content-box" style={{ maxWidth: 620 }}>

            {/* Eyebrow badge */}
            <div
              className="hero-anim-1 hero-eyebrow"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "rgba(99,157,255,0.08)",
                border: "1px solid rgba(99,157,255,0.22)",
                backdropFilter: "blur(18px)",
                padding: "7px 18px", borderRadius: 100, marginBottom: 24,
              }}
            >
              <span
                className="eyebrow-dot"
                style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#639dff", display: "inline-block", flexShrink: 0,
                }}
              />
              <span
                className="hero-eyebrow-text"
                style={{
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: "#8ebdff",
                }}
              >
                Trusted Compliance Partner 2026
              </span>
            </div>

            {/* Heading — light line */}
            <h1
              className="hero-anim-2 hero-h-thin"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2rem, 4.5vw, 3.3rem)",
                lineHeight: 1.1, color: "rgba(255,255,255,0.88)",
                textShadow: "0 2px 28px rgba(0,0,0,0.6)",
                marginBottom: 0, letterSpacing: "0.01em",
              }}
            >
              Simplifying Your
            </h1>

            {/* Heading — bold shimmer */}
            <h1
              className="hero-anim-2 hero-h-bold hero-heading-shimmer"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                lineHeight: 1.1,
                letterSpacing: "0.01em",
                marginBottom: 6,
              }}
            >
              Compliance Journey.
            </h1>

            {/* Underline accent */}
            <div
              className="hero-anim-2"
              style={{
                width: 60, height: 3, borderRadius: 3,
                background: "linear-gradient(90deg, #639dff 0%, rgba(99,157,255,0.15) 100%)",
                marginBottom: 20,
              }}
            />

            {/* Description */}
            <p
              className="hero-anim-3 hero-desc "
              style={{
                fontSize: 14.5, lineHeight: 1.85, fontWeight: 400,
                color: "rgba(200,218,255,0.72)",
                maxWidth: 440, marginBottom: 22,
                textShadow: "0 1px 16px rgba(0,0,0,0.55)",
                letterSpacing: "0.01em",
              }}
            >
              Expert assistance for mandatory certifications — accurate
              documemwnt.
            </p>

            {/* Cert tags */}
            <div
              className="hero-anim-4 hero-cert-row"
              style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 28 }}
            >
              {certTags.map((tag) => (
                <span key={tag} className="cert-tag">{tag}</span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="hero-anim-5 hero-btn-row"
              style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}
            >
              <button className="hero-btn-primary">
                Get Free Consultation <FaArrowRight size={11} />
              </button>
              <button className="hero-btn-secondary">
                <FaCompass size={12} /> Explore Services
              </button>
            </div>

            {/* Stats */}
            <div
              className="hero-anim-6 hero-stats-row hidden md:flex"
              style={{
                 gap: 28,
                paddingTop: 22,
                borderTop: "1px solid rgba(99,157,255,0.15)",
              }}
            >
              {stats.map((s) => (
                <div key={s.label} className="stat-item">
                  <p
                    className="stat-num"
                    style={{
                      fontSize: 26, fontWeight: 700, lineHeight: 1,
                      marginBottom: 5, letterSpacing: "-0.02em",
                      background: "linear-gradient(135deg, #ffffff 40%, #8ebdff 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.num}
                  </p>
                  <p
                    style={{
                      fontSize: 9, fontWeight: 600,
                      color: "rgba(160,190,255,0.55)",
                      textTransform: "uppercase", letterSpacing: "0.16em",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Dot indicators ── */}
        <div
          className="slide-dots"
          style={{
            position: "absolute", bottom: 28, left: 80, zIndex: 20,
            display: "flex", alignItems: "center", gap: 8,
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slide-dot${current === i ? " active" : ""}`}
              onClick={() => goTo(i)}
              style={{ width: current === i ? 28 : 5 }}
            />
          ))}
        </div>

        {/* ── Slide counter ── */}
        <div
          className="slide-counter"
          style={{
            position: "absolute", bottom: 22, right: 80, zIndex: 20,
            fontSize: 11, fontWeight: 600, letterSpacing: "0.12em",
            color: "rgba(160,190,255,0.4)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span style={{ color: "rgba(160,190,255,0.85)" }}>
            {String(current + 1).padStart(2, "0")}
          </span>
          {" / "}
          {String(slides.length).padStart(2, "0")}
        </div>

        {/* ── Progress bar ── */}
        <div
          key={progressKey}
          className="hero-progress-bar"
          style={{
            position: "absolute", bottom: 0, left: 0, height: 2.5, zIndex: 25,
            background: "linear-gradient(90deg, #639dff, #1d3461)",
          }}
        />
      </section>

      {/* ══════════════════════════════
          TRUST BAR
      ══════════════════════════════ */}
      <div
        style={{
          background: "#ffffff",
          borderTop: "1px solid #e4ecf8",
          borderBottom: "1px solid #e4ecf8",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div
          className="trust-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            maxWidth: 1000,
            margin: "0 auto",
            borderLeft: "1px solid #e4ecf8",
          }}
        >
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="trust-item"
              style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", textAlign: "center",
                gap: 11, padding: "28px 20px",
                borderRight: "1px solid #e4ecf8", position: "relative",
              }}
            >
              {/* Hover top accent */}
              <div
                className="trust-accent"
                style={{
                  position: "absolute", top: 0, left: "50%",
                  transform: "translateX(-50%) scaleX(0)",
                  width: 44, height: 2.5,
                  background: "linear-gradient(90deg, #1d3461, #0f1b37)",
                  borderRadius: "0 0 3px 3px",
                  transition: "transform 0.3s",
                }}
              />

              {/* Icon circle */}
              <div
                className="trust-icon-wrap"
                style={{
                  width: 52, height: 52, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid #d4e0f5",
                  background: "linear-gradient(135deg, #eef3fc, #f8f9ff)",
                }}
              >
                {badge.icon}
              </div>

              {/* Text */}
              <div>
                <p
                  className="trust-title"
                  style={{
                    fontSize: 10, fontWeight: 800,
                    letterSpacing: "0.13em", textTransform: "uppercase",
                    color: "#1a2d55", transition: "color 0.2s",
                  }}
                >
                  {badge.label}
                </p>
                <p style={{ fontSize: 10, color: "#8a9ec0", lineHeight: 1.6, marginTop: 3 }}>
                  {badge.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HeroSection;







import { useState, useEffect, } from "react";
import { FaArrowRight, FaCompass, FaTruck, FaShieldAlt, FaUndo, FaHeadset, FaCheckCircle } from "react-icons/fa";
import { FaBolt } from "react-icons/fa6";

// ── Data ──
const heroImages = [
  { url: "images/slider/image1.jpeg", alt: "Slider Image" },
  { url: "images/slider/image2.jpeg", alt: "Slider Image" },
  { url: "images/slider/image3.png", alt: "Slider Image" },
  { url: "images/slider/image4.png", alt: "Slider Image" },
  { url: "images/slider/image5.png", alt: "Slider Image" },
  { url: "images/slider/slider2.jpg", alt: "Slider Image" },
];

const stats = [
  { num: "1200+", label: "Projects Delivered" },
  { num: "98%", label: "Approval Success Rate" },
  { num: "10+", label: "Years Experience" },
];

const trustBadges = [
  {
    icon: FaShieldAlt,
    label: "100% Compliance Assistance",
    sub: "Accurate regulatory guidance",
    color: "bg-blue-50",
    iconColor: "text-blue-700",
  },
  {
    icon: FaCheckCircle,
    label: "Govt. Approved Process",
    sub: "Trusted documentation support",
    color: "bg-green-50",
    iconColor: "text-green-700",
  },
  {
    icon: FaBolt,
    label: "Fast Approval Support",
    sub: "Quick & hassle-free execution",
    color: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: FaHeadset,
    label: "Dedicated Expert Team",
    sub: "End-to-end consultation",
    color: "bg-purple-50",
    iconColor: "text-purple-700",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % heroImages.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        /* Staggered fade-up */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .h1 { animation: fadeUp 0.7s ease 0.1s both; }
        .h2 { animation: fadeUp 0.7s ease 0.22s both; }
        .h3 { animation: fadeUp 0.7s ease 0.34s both; }
        .h4 { animation: fadeUp 0.7s ease 0.46s both; }
        .h5 { animation: fadeUp 0.7s ease 0.58s both; }
        .h6 { animation: fadeUp 0.7s ease 0.70s both; }

        /* Animated gradient heading */
        @keyframes gradShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        .grad-text {
          background: linear-gradient(110deg, #20385c, #bc8737, #2f4b75, #a78bfa);
          background-size: 250%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradShift 5s ease infinite;
        }

        /* Scroll dot */
        @keyframes scrollDot {
          0%,100% { transform: translateY(0); opacity: 1; }
          60%      { transform: translateY(12px); opacity: 0; }
        }
        .scroll-dot { animation: scrollDot 1.8s ease infinite; }

        /* Slide counter line */
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .counter-line {
          transform-origin: left;
          animation: lineGrow 5s linear infinite;
        }

        /* Ping dot */
        @keyframes ping {
          75%,100% { transform: scale(2); opacity: 0; }
        }
        .ping { animation: ping 1.2s cubic-bezier(0,0,0.2,1) infinite; }

        /* Primary button shimmer */
        .primary-btn { position: relative; overflow: hidden; }
        .primary-btn::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #20385c, #bc8737);
          opacity: 0; transition: opacity 0.3s;
        }
        .primary-btn:hover::after { opacity: 1; }
        .primary-btn:hover { transform: translateY(-1px); }
        .primary-btn > * { position: relative; z-index: 1; }
      `}</style>

      <section className="relative h-[75vh] md:h-[88vh] overflow-hidden bg-black">

        {/* ── Background images with crossfade ── */}
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: current === i ? 1 : 0 }}
          >
            <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* ── Content ── */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
            <div className="max-w-3xl">

              {/* Eyebrow badge */}
              <div className="h1 inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
                </span>
                <span
                  className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                //   onClick={() => navigate("/products")}
                >
                  Trusted Compliance Partner 2026
                </span>
              </div>

              {/* Heading */}
              <h1
                className="h2 font-light text-white leading-tight mb-1  family-bold"
                style={{
                  // fontFamily: "'Poppins', sans-serif",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 5vw, 3.8rem)",
                }}
              >
                Simplifying Your
              </h1>

              <h1
                className="h3 font-semibold grad-text leading-tight mb-5 family-bold"
                style={{
                  // fontFamily: "'Poppins', sans-serif",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2.1rem, 5vw, 3.9rem)",
                }}
              >
                Compliance Journey.
              </h1>

              {/* Description */}
              <p
                className="h4 text-gray-300 text-[0.5rem] md:text-base leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
              >
                Get expert assistance for BIS, WPC, BEE, EPR, TEC, LMPC and other mandatory certifications with accurate documentation and faster approvals.
              </p>

              {/* CTA Buttons */}
              <div className="h5 flex flex-wrap gap-3 mb-10">
                <button
                  //   onClick={() => navigate("/products")}
                  className="primary-btn flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white transition-all duration-200"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    background: "linear-gradient(135deg, #20385c, #bc8737)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Get Free Consultation
                  <FaArrowRight size={11} />
                </button>

                <button
                  //   onClick={() => navigate("/category/women")}
                  className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium text-white/80 border border-white/25 hover:bg-white/10 hover:border-white/40 hover:text-white transition-all duration-200 backdrop-blur-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em" }}
                >
                  <FaCompass size={12} />
                  Explore Services
                </button>
              </div>

              {/* Stats */}
              <div className="h6 flex gap-8 pt-5 border-t border-white/15">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p
                      className="text-xl md:text-2xl  text-white leading-none mb-1 family-semibold"
                    >
                      {s.num}
                    </p>
                    <p
                      className="text-[10px] text-gray-400 tracking-[0.12em] uppercase family-semibold"
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Slide counter — bottom right ── */}


        {/* ── Dot indicators — bottom center ── */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: current === i ? "24px" : "6px",
                height: "6px",
                background: current === i
                  ? "linear-gradient(90deg, #20385c, #bc8737)"
                  : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>


      </section>


      <div className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center gap-3 px-6 py-8 cursor-pointer hover:bg-primary-50/30 transition-all duration-300 relative"
              >
                {/* Top accent on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full bg-gradient-to-r from-primary-700 to-primary-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon circle — theme colored by default */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #f2f5fa, #fdf7ef)",
                    border: "1px solid #dbe4f0",
                  }}
                >
                  {/* SVG gradient for icon color */}
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#20385c" />
                        <stop offset="100%" stopColor="#bc8737" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <badge.icon
                    size={19}
                    style={{ fill: "url(#iconGrad)", color: "#20385c" }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Text */}
                <div>
                  <h4
                    className="text-[11px] font-bold tracking-[0.14em] uppercase text-gray-700 group-hover:text-primary-800 transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {badge.label}
                  </h4>
                  <p
                    className="text-[10px] text-gray-400 mt-1 leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {badge.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
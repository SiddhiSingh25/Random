"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

// type ServiceCardProps = {
//   id: string;
//   icon: React.ElementType;
//   title: string;
//   description: string;
// };

// ─── Color tokens
// primary-800  → #20385c   (navy)
// secondary-600 → #bc8737  (gold)

// ─── Animation Variants ───────────────────────────────────────────────────────

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Decorative SVG elements ──────────────────────────────────────────────────

function CardRings({ active }: { active: boolean }) {
  return (
    <svg
      className="pointer-events-none absolute -bottom-8 -right-8 h-44 w-44 transition-opacity duration-500"
      style={{ opacity: active ? 0.1 : 0.04 }}
      viewBox="0 0 180 180"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="150" cy="150" r="120" stroke="#20385c" strokeWidth="0.7" />
      <circle cx="150" cy="150" r="85"  stroke="#bc8737" strokeWidth="0.7" />
      <circle cx="150" cy="150" r="52"  stroke="#20385c" strokeWidth="0.7" />
      <circle cx="150" cy="150" r="26"  stroke="#bc8737" strokeWidth="0.7" />
    </svg>
  );
}

function TopDash({ active }: { active: boolean }) {
  return (
    <svg
      className="pointer-events-none absolute left-6 top-6 h-8 w-14 transition-opacity duration-500"
      style={{ opacity: active ? 0.2 : 0.08 }}
      viewBox="0 0 56 32"
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="4"  x2="56" y2="4"  stroke="#bc8737" strokeWidth="1" strokeLinecap="round" />
      <line x1="0" y1="16" x2="36" y2="16" stroke="#20385c" strokeWidth="1" strokeLinecap="round" />
      <line x1="0" y1="28" x2="20" y2="28" stroke="#bc8737" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────

const ServiceCard = ({ id, icon: Icon, title, description }: any ) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3-D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useTransform(my, [-60, 60], [4, -4]);
  const rotY = useTransform(mx, [-60, 60], [-4, 4]);
  const springX = useSpring(rotX, { stiffness: 200, damping: 24 });
  const springY = useSpring(rotY, { stiffness: 200, damping: 24 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div variants={cardVariants} style={{ perspective: "1100px" }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        className="group relative h-full cursor-default"
      >
        {/* ── Card Shell ── */}
        <article
          className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border transition-all duration-500"
          style={{
            background: isHovered
              ? "linear-gradient(158deg, #ffffff 0%, #f2f6fb 55%, #eaf0f8 100%)"
              : "linear-gradient(158deg, #ffffff 0%, #f8fafd 100%)",
            borderColor: isHovered
              ? "rgba(32,56,92,0.22)"
              : "rgba(32,56,92,0.08)",
            boxShadow: isHovered
              ? "0 28px 60px rgba(32,56,92,0.13), 0 6px 18px rgba(32,56,92,0.07), 0 0 0 1px rgba(32,56,92,0.07)"
              : "0 2px 16px rgba(32,56,92,0.06), 0 1px 4px rgba(32,56,92,0.04)",
          }}
        >
          {/* ── Top accent bar ── */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(32,56,92,0.45), rgba(188,135,55,0.4), transparent)",
              opacity: isHovered ? 1 : 0.22,
            }}
          />

          {/* ── Primary navy fill on hover (slides up from bottom) ── */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[1.6rem]"
            style={{
              background:
                "linear-gradient(160deg, #20385c 0%, #1a2e4a 60%, #162544 100%)",
            }}
            initial={{ opacity: 0, y: "100%" }}
            animate={
              isHovered
                ? { opacity: 1, y: "0%" }
                : { opacity: 0, y: "100%" }
            }
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* ── Gold glow – top center (active on hover) ── */}
          <div
            className="pointer-events-none absolute -top-16 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full transition-all duration-700"
            style={{
              background:
                "radial-gradient(circle, rgba(188,135,55,0.2) 0%, transparent 70%)",
              opacity: isHovered ? 1 : 0,
              filter: "blur(28px)",
            }}
          />

          {/* ── Blue glow – bottom right ── */}
          <div
            className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full transition-all duration-700"
            style={{
              background:
                "radial-gradient(circle, rgba(188,135,55,0.15) 0%, transparent 70%)",
              opacity: isHovered ? 1 : 0,
              filter: "blur(20px)",
            }}
          />

          <CardRings active={isHovered} />
          <TopDash active={isHovered} />

          {/* ── Inner Content ── */}
          <div className="relative z-10 flex flex-col p-7 pb-8 md:p-8">

            {/* ── Icon Box ── */}
            <div className="mb-7">
              <div className="relative inline-flex">
                {/* Spinning ring on hover */}
                <motion.div
                  className="absolute -inset-[3px] rounded-2xl"
                  style={{
                    background:
                      "conic-gradient(from 0deg, rgba(188,135,55,0.8), transparent 35%, rgba(255,255,255,0.4) 55%, transparent 75%, rgba(188,135,55,0.8))",
                    borderRadius: "1.1rem",
                    opacity: isHovered ? 1 : 0,
                  }}
                  animate={{ rotate: isHovered ? 360 : 0 }}
                  transition={{
                    duration: 3.5,
                    repeat: isHovered ? Infinity : 0,
                    ease: "linear",
                  }}
                />

                {/* Icon container */}
                <motion.div
                  className="relative flex h-14 w-14 items-center justify-center rounded-[1rem] border transition-all duration-400"
                  style={{
                    background: isHovered
                      ? "rgba(255,255,255,0.14)"
                      : "linear-gradient(135deg, rgba(32,56,92,0.07) 0%, rgba(32,56,92,0.03) 100%)",
                    borderColor: isHovered
                      ? "rgba(255,255,255,0.25)"
                      : "rgba(32,56,92,0.1)",
                    backdropFilter: isHovered ? "blur(8px)" : "none",
                  }}
                  animate={
                    isHovered ? { scale: 1.06, y: -3 } : { scale: 1, y: 0 }
                  }
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Icon
                    className="text-2xl transition-colors duration-400"
                    style={{
                      color: isHovered ? "#bc8737" : "#20385c",
                    }}
                  />
                </motion.div>
              </div>
            </div>

            {/* ── Title ── */}
            <h3
              className="mb-1.5 text-[1.08rem] font-bold leading-snug tracking-tight transition-colors duration-400"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                color: isHovered ? "#ffffff" : "#1e2d42",
                letterSpacing: "-0.018em",
              }}
            >
              {title}
            </h3>

            {/* ── Animated accent bar ── */}
            <div className="mb-4 h-px w-10 overflow-hidden rounded-full">
              <motion.div
                className="h-full w-full rounded-full"
                style={{
                  background: isHovered
                    ? "linear-gradient(90deg, #bc8737, rgba(255,255,255,0.6))"
                    : "linear-gradient(90deg, #20385c, #bc8737)",
                  transformOrigin: "left",
                }}
                animate={isHovered ? { scaleX: 1.5, opacity: 1 } : { scaleX: 1, opacity: 0.45 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* ── Description ── */}
            <p
              className="mb-8 text-[0.84rem] leading-relaxed transition-colors duration-400"
              style={{
                color: isHovered
                  ? "rgba(255,255,255,0.72)"
                  : "rgba(32,56,92,0.5)",
              }}
            >
              {description}
            </p>

            {/* ── Divider ── */}
            <div
              className="mb-5 mt-auto h-px w-full transition-all duration-500"
              style={{
                background: isHovered
                  ? "linear-gradient(90deg, transparent, rgba(188,135,55,0.45), transparent)"
                  : "linear-gradient(90deg, transparent, rgba(32,56,92,0.08), transparent)",
              }}
            />

            {/* ── CTA ── */}
            <Link
             href={`/services/${id}`}
              className="group/cta inline-flex items-center gap-2.5 text-[0.76rem] font-bold uppercase tracking-[0.12em] transition-colors duration-400"
              style={{
                color: isHovered ? "#bc8737" : "rgba(32,56,92,0.45)",
              }}
              tabIndex={0}
            >
              <span>Learn More</span>

              {/* Arrow pill */}
              <span
                className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border transition-all duration-400"
                style={{
                  borderColor: isHovered
                    ? "rgba(188,135,55,0.55)"
                    : "rgba(32,56,92,0.14)",
                  background: isHovered
                    ? "rgba(188,135,55,0.12)"
                    : "transparent",
                }}
              >
                <motion.svg
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-2.5 w-2.5"
                  animate={isHovered ? { x: [0, 3, 0] } : { x: 0 }}
                  transition={{ duration: 0.42, ease: "easeInOut" }}
                >
                  <path d="M2 5h6M5 2l3 3-3 3" />
                </motion.svg>
              </span>
            </Link>
          </div>
        </article>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;


// "use client";

// import Link from "next/link";
// import { useRef, useState } from "react";
// import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

// // Remove the external variants and handle entrance in Page.tsx for better control
// const ServiceCard = ({ id, icon: Icon, title, description }: any) => {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   // 3-D tilt logic
//   const mx = useMotionValue(0);
//   const my = useMotionValue(0);
//   const rotX = useTransform(my, [-100, 100], [7, -7]);
//   const rotY = useTransform(mx, [-100, 100], [-7, 7]);
//   const springX = useSpring(rotX, { stiffness: 150, damping: 20 });
//   const springY = useSpring(rotY, { stiffness: 150, damping: 20 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const r = cardRef.current?.getBoundingClientRect();
//     if (!r) return;
//     mx.set(e.clientX - r.left - r.width / 2);
//     my.set(e.clientY - r.top - r.height / 2);
//   };

//   const handleMouseLeave = () => {
//     mx.set(0);
//     my.set(0);
//     setIsHovered(false);
//   };

//   return (
//     <motion.div 
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         rotateX: springX,
//         rotateY: springY,
//         perspective: "1000px",
//         transformStyle: "preserve-3d",
//       }}
//       className="group relative h-full transition-all duration-500"
//     >
//       <article
//         className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border p-8"
//         style={{
//           background: isHovered
//             ? "linear-gradient(158deg, #ffffff 0%, #f2f6fb 55%, #eaf0f8 100%)"
//             : "linear-gradient(158deg, #ffffff 0%, #f8fafd 100%)",
//           borderColor: isHovered ? "rgba(32,56,92,0.2)" : "rgba(32,56,92,0.08)",
//           boxShadow: isHovered 
//             ? "0 25px 50px -12px rgba(32,56,92,0.15)" 
//             : "0 10px 15px -3px rgba(0,0,0,0.05)",
//         }}
//       >
//         {/* Hover Navy Background Overlay */}
//         <motion.div
//           className="pointer-events-none absolute inset-0 z-0"
//           initial={{ opacity: 0, y: "100%" }}
//           animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: "100%" }}
//           style={{ background: "linear-gradient(160deg, #20385c 0%, #1a2e4a 100%)" }}
//           transition={{ duration: 0.4, ease: "circOut" }}
//         />

//         <div className="relative z-10 flex flex-col h-full">
//           {/* Icon */}
//           <div className="mb-6">
//             <motion.div
//               className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-colors ${
//                 isHovered ? "bg-white/10 border-white/20" : "bg-slate-50 border-slate-200"
//               }`}
//               animate={isHovered ? { scale: 1.1, rotateY: 180 } : { scale: 1, rotateY: 0 }}
//             >
//               <Icon className={`text-2xl ${isHovered ? "text-[#bc8737]" : "text-[#20385c]"}`} />
//             </motion.div>
//           </div>

//           <h3 className={`text-xl font-bold mb-3 transition-colors ${isHovered ? "text-white" : "text-[#1e2d42]"}`}>
//             {title}
//           </h3>

//           <p className={`text-sm leading-relaxed mb-6 transition-colors ${isHovered ? "text-white/70" : "text-slate-500"}`}>
//             {description}
//           </p>

//           <div className="mt-auto pt-4 border-t border-slate-100/10">
//             <Link href={`/services/${id}`} className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${isHovered ? "text-[#bc8737]" : "text-slate-400"}`}>
//               Learn More <span>→</span>
//             </Link>
//           </div>
//         </div>
//       </article>
//     </motion.div>
//   );
// };

// export default ServiceCard;
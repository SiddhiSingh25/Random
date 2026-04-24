"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  type Variants,
} from "framer-motion";
import { MdEmail } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { teamData } from "../data/teams-data.js";
import { useRef, useState } from "react";

// ─── Types ─────────────────────────────────────────────────────────────────────

type TeamProps = {
  limit?: number;
};

// ─── Color tokens (matching your CSS vars) ────────────────────────────────────
// primary-800  → #20385c
// secondary-600 → #bc8737

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Decorative Background Elements ──────────────────────────────────────────

function SectionBackground() {
  return (
    <>
      {/* Base gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(175deg, #faf8f4 0%, #fdf9ef 30%, #fffdf8 60%, #f8f6f2 100%)",
        }}
      />

      {/* Large warm orb — top left */}
      <div
        className="pointer-events-none absolute -left-60 -top-40 h-[700px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(188,135,55,0.09) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Deep blue orb — bottom right */}
      <div
        className="pointer-events-none absolute -bottom-40 -right-60 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(32,56,92,0.07) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Faint warm center wash */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(188,135,55,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Top hairline */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(188,135,55,0.35), rgba(32,56,92,0.2), transparent)",
        }}
      />

      {/* Bottom hairline */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(188,135,55,0.2), transparent)",
        }}
      />

      {/* Fine dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(188,135,55,0.14) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.5,
        }}
      />

      {/* Large decorative arc — top right */}
      <svg
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] opacity-[0.025]"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="380" cy="20" r="280" stroke="#20385c" strokeWidth="0.6" />
        <circle cx="380" cy="20" r="200" stroke="#20385c" strokeWidth="0.6" />
        <circle cx="380" cy="20" r="130" stroke="#bc8737" strokeWidth="0.6" />
        <circle cx="380" cy="20" r="70"  stroke="#bc8737" strokeWidth="0.6" />
      </svg>

      {/* Small decorative arc — bottom left */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-[280px] w-[280px] opacity-[0.025]"
        viewBox="0 0 300 300"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="0" cy="300" r="200" stroke="#bc8737" strokeWidth="0.6" />
        <circle cx="0" cy="300" r="130" stroke="#20385c" strokeWidth="0.6" />
        <circle cx="0" cy="300" r="70"  stroke="#20385c" strokeWidth="0.6" />
      </svg>
    </>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader() {
  return (
    <motion.div
      className="mb-20 text-center"
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Eyebrow badge */}
      <div className="mb-6 inline-flex items-center gap-3">
        <div
          className="h-px w-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(188,135,55,0.65))",
          }}
        />
        <span
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.28em]"
          style={{
            borderColor: "rgba(188,135,55,0.22)",
            background: "rgba(188,135,55,0.06)",
            color: "rgba(188,135,55,0.85)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full animate-pulse"
            style={{ background: "#bc8737" }}
          />
          Our Team
        </span>
        <div
          className="h-px w-12"
          style={{
            background:
              "linear-gradient(90deg, rgba(188,135,55,0.65), transparent)",
          }}
        />
      </div>

      {/* Main title */}
      <h2
        className="mb-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]"
        style={{
          background:
            "linear-gradient(135deg, #1a2c46 0%, #20385c 35%, #bc8737 70%, #8a5e18 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.03em",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        Meet The Experts
      </h2>

      {/* Decorative divider */}
      <div className="mb-6 flex items-center justify-center gap-4">
        <div
          className="h-px w-14"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(32,56,92,0.22))",
          }}
        />
        <svg
          viewBox="0 0 20 20"
          className="h-3 w-3"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="5"
            y="5"
            width="10"
            height="10"
            rx="1"
            transform="rotate(45 10 10)"
            fill="rgba(188,135,55,0.5)"
          />
        </svg>
        <div
          className="h-px w-14"
          style={{
            background:
              "linear-gradient(90deg, rgba(32,56,92,0.22), transparent)",
          }}
        />
      </div>

      {/* Subtitle */}
      <p
        className="mx-auto max-w-lg text-base leading-relaxed sm:text-[1.05rem]"
        style={{ color: "rgba(32,56,92,0.45)" }}
      >
        A talented team delivering innovative solutions with unmatched
        expertise and dedication.
      </p>
    </motion.div>
  );
}

// ─── Social Button ────────────────────────────────────────────────────────────

function SocialBtn({
  href,
  icon,
  label,
  isHovered: cardHovered,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  isHovered: boolean;
}) {
  const [hov, setHov] = useState(false);

  return (
    <Link href={href} target="_blank" aria-label={label}>
      <motion.div
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300"
        style={{
          background: hov
            ? "rgba(188,135,55,0.14)"
            : cardHovered
            ? "rgba(188,135,55,0.07)"
            : "rgba(188,135,55,0.04)",
          borderColor: hov
            ? "rgba(188,135,55,0.45)"
            : "rgba(188,135,55,0.16)",
          color: hov ? "#8a6010" : "rgba(140,100,30,0.5)",
          boxShadow: hov ? "0 4px 14px rgba(188,135,55,0.18)" : "none",
        }}
      >
        {icon}
      </motion.div>
    </Link>
  );
}

// ─── Team Card ────────────────────────────────────────────────────────────────

function TeamCard({
  member,
  index,
}: {
  member: (typeof teamData)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // 3-D tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useTransform(my, [-70, 70], [5, -5]);
  const rotY = useTransform(mx, [-70, 70], [-5, 5]);
  const springX = useSpring(rotX, { stiffness: 180, damping: 22 });
  const springY = useSpring(rotY, { stiffness: 180, damping: 22 });

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

  const num = String(index + 1).padStart(2, "0");

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
        <div
          className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border transition-all duration-500"
          style={{
            background: isHovered
              ? "linear-gradient(170deg, #ffffff 0%, #fdf9f1 55%, #faf4e6 100%)"
              : "linear-gradient(170deg, #ffffff 0%, #fdfbf7 100%)",
            borderColor: isHovered
              ? "rgba(188,135,55,0.3)"
              : "rgba(188,135,55,0.09)",
            boxShadow: isHovered
              ? "0 30px 70px rgba(188,135,55,0.12), 0 6px 20px rgba(32,56,92,0.06), 0 0 0 1px rgba(188,135,55,0.12)"
              : "0 2px 20px rgba(32,56,92,0.06), 0 1px 4px rgba(0,0,0,0.04)",
          }}
        >
          {/* Top gradient hairline */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(188,135,55,0.65), rgba(32,56,92,0.3), transparent)",
              opacity: isHovered ? 1 : 0.28,
            }}
          />

          {/* Warm top glow */}
          <div
            className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full transition-all duration-700"
            style={{
              background:
                "radial-gradient(circle, rgba(212,165,70,0.15) 0%, transparent 70%)",
              opacity: isHovered ? 1 : 0,
              filter: "blur(28px)",
            }}
          />

          {/* Blue corner glow — bottom right */}
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full transition-all duration-700"
            style={{
              background:
                "radial-gradient(circle, rgba(32,56,92,0.08) 0%, transparent 70%)",
              opacity: isHovered ? 1 : 0,
              filter: "blur(24px)",
              transform: "translate(30%, 30%)",
            }}
          />

          {/* Decorative rings — top right */}
          <svg
            className="pointer-events-none absolute right-0 top-0 h-40 w-40 transition-opacity duration-500"
            style={{ opacity: isHovered ? 0.07 : 0.03 }}
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="170" cy="30" r="130" stroke="rgba(32,56,92,1)"   strokeWidth="0.7" />
            <circle cx="170" cy="30" r="90"  stroke="rgba(188,135,55,1)" strokeWidth="0.7" />
            <circle cx="170" cy="30" r="55"  stroke="rgba(32,56,92,1)"   strokeWidth="0.7" />
            <circle cx="170" cy="30" r="26"  stroke="rgba(188,135,55,1)" strokeWidth="0.7" />
          </svg>

          {/* L-corner mark — bottom left */}
          <svg
            className="pointer-events-none absolute bottom-6 left-6 h-8 w-8 transition-opacity duration-500"
            style={{ opacity: isHovered ? 0.18 : 0.07 }}
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 30 L2 2 L30 2"
              stroke="rgba(188,135,55,1)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Card index */}
          <div
            className="absolute left-6 top-6 font-mono text-[0.6rem] font-bold tracking-[0.25em] uppercase transition-colors duration-400"
            style={{
              color: isHovered
                ? "rgba(188,135,55,0.65)"
                : "rgba(32,56,92,0.12)",
            }}
          >
            {num}
          </div>

          {/* ── Inner Content ── */}
          <div className="relative z-10 flex flex-col items-center p-8 pt-12 text-center">

            {/* ── Avatar ── */}
            <div className="relative mb-8">
              {/* Rotating conic ring */}
              <motion.div
                className="absolute -inset-[3px] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, rgba(188,135,55,0.9), transparent 35%, rgba(32,56,92,0.5) 55%, transparent 75%, rgba(188,135,55,0.9))",
                }}
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{
                  duration: 4,
                  repeat: isHovered ? Infinity : 0,
                  ease: "linear",
                }}
              />

              {/* Static gradient ring */}
              <div
                className="absolute -inset-[2px] rounded-full transition-opacity duration-400"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(188,135,55,0.45) 0%, rgba(32,56,92,0.2) 60%, rgba(188,135,55,0.1) 100%)",
                  opacity: isHovered ? 1 : 0.45,
                }}
              />

              {/* Avatar image */}
              <motion.div
                className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-white shadow-md"
                animate={isHovered ? { scale: 1.04 } : { scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  alt={`Photo of ${member.name}`}
                  src={member.image}
                  fill
                  sizes="112px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={index < 4}
                />
                {/* Inner overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 45%, rgba(188,135,55,0.1))",
                    opacity: isHovered ? 1 : 0,
                  }}
                />
              </motion.div>

              {/* Status dot */}
              <div
                className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white transition-all duration-300"
                style={{
                  background: isHovered ? "#22c55e" : "rgba(34,197,94,0.5)",
                  boxShadow: isHovered
                    ? "0 0 6px rgba(34,197,94,0.6)"
                    : "none",
                }}
              />
            </div>

            {/* ── Name ── */}
            <h3
              className="mb-1 text-[1.08rem] font-bold leading-snug tracking-tight transition-colors duration-300"
              style={{
                fontFamily: "'Georgia', 'Times New Roman', serif",
                color: isHovered ? "#7a5010" : "#1e2d42",
                letterSpacing: "-0.018em",
              }}
            >
              {member.name}
            </h3>

            {/* ── Role pill ── */}
            <div
              className="mb-5 mt-2 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] transition-all duration-300"
              style={{
                background: isHovered
                  ? "rgba(188,135,55,0.13)"
                  : "rgba(188,135,55,0.07)",
                color: isHovered ? "#8a600e" : "#a07020",
                border: "1px solid",
                borderColor: isHovered
                  ? "rgba(188,135,55,0.32)"
                  : "rgba(188,135,55,0.15)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full transition-colors duration-300"
                style={{
                  background: isHovered
                    ? "#bc8737"
                    : "rgba(188,135,55,0.4)",
                }}
              />
              {member.role}
            </div>

            {/* ── Animated underline accent ── */}
            <div className="mb-4 h-px w-12 overflow-hidden rounded-full">
              <motion.div
                className="h-full rounded-full"
                // style={{
                //   background:
                //     "linear-gradient(90deg, #20385c, #bc8737)",
                // }}
                animate={
                  isHovered
                    ? { scaleX: 1, opacity: 1 }
                    : { scaleX: 0.3, opacity: 0.4 }
                }
                style={{
                  background: "linear-gradient(90deg, #20385c, #bc8737)",
                  transformOrigin: "left",
                  width: "100%",
                  height: "100%",
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* ── Bio ── */}
            <p
              className="mb-7 text-[0.82rem] leading-relaxed transition-colors duration-300"
              style={{
                color: isHovered
                  ? "rgba(32,56,92,0.62)"
                  : "rgba(40,55,80,0.42)",
              }}
            >
              {member.bio}
            </p>

            {/* ── Divider ── */}
            <div
              className="mb-5 mt-auto h-px w-full transition-all duration-500"
              style={{
                background: isHovered
                  ? "linear-gradient(90deg, transparent, rgba(188,135,55,0.3), rgba(32,56,92,0.15), transparent)"
                  : "linear-gradient(90deg, transparent, rgba(32,56,92,0.07), transparent)",
              }}
            />

            {/* ── Social Links ── */}
            <div className="flex gap-3">
              <SocialBtn
                href="https://www.linkedin.com/company/unmatchedconsultancy/"
                icon={<LiaLinkedinIn size={15} />}
                label="LinkedIn"
                isHovered={isHovered}
              />
              <SocialBtn
                href="mailto:unmatchedconsultancy@gmail.com"
                icon={<MdEmail size={15} />}
                label="Email"
                isHovered={isHovered}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Bottom CTA ───────────────────────────────────────────────────────────────

function BottomCTA() {
  const [hov, setHov] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
      className="mt-20 flex flex-col items-center gap-5 text-center"
    >
      {/* Subtle divider */}
      <div className="flex items-center gap-4">
        <div
          className="h-px w-16"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(188,135,55,0.3))",
          }}
        />
        <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
          <rect
            x="3" y="3" width="10" height="10" rx="1"
            transform="rotate(45 8 8)"
            fill="rgba(188,135,55,0.4)"
          />
        </svg>
        <div
          className="h-px w-16"
          style={{
            background:
              "linear-gradient(90deg, rgba(188,135,55,0.3), transparent)",
          }}
        />
      </div>

      <p
        className="text-sm"
        style={{ color: "rgba(32,56,92,0.35)" }}
      >
        Interested in joining our growing team?
      </p>

      {/* CTA Link */}
      <motion.div
        onHoverStart={() => setHov(true)}
        onHoverEnd={() => setHov(false)}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <Link
          href="/careers"
          className="group inline-flex items-center gap-2.5 rounded-full border px-6 py-2.5 text-[0.8rem] font-semibold uppercase tracking-[0.12em] transition-all duration-300"
          style={{
            borderColor: hov
              ? "rgba(188,135,55,0.5)"
              : "rgba(188,135,55,0.18)",
            background: hov
              ? "rgba(188,135,55,0.08)"
              : "rgba(188,135,55,0.03)",
            color: hov ? "#8a5e10" : "rgba(140,95,25,0.65)",
            boxShadow: hov
              ? "0 6px 20px rgba(188,135,55,0.14)"
              : "none",
          }}
        >
          View open positions
          <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-full border"
            style={{ borderColor: hov ? "rgba(188,135,55,0.4)" : "rgba(188,135,55,0.2)" }}
          >
            <motion.svg
              viewBox="0 0 10 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-2.5 w-2.5"
              animate={hov ? { x: [0, 3, 0] } : { x: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <path d="M2 5h6M5 2l3 3-3 3" />
            </motion.svg>
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}

// ─── Team Section ─────────────────────────────────────────────────────────────

export default function Team({ limit }: TeamProps) {
  const visibleTeam = limit ? teamData.slice(0, limit) : teamData;

  return (
    <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8">
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader />

        {/* ── Team Grid ── */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          {visibleTeam.map((member, idx) => (
            <TeamCard key={idx} member={member} index={idx} />
          ))}
        </motion.div>

        <BottomCTA />
      </div>
    </section>
  );
}
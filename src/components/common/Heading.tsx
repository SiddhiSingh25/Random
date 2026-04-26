"use client";

import { motion, type Variants } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────

type HeadingProps = {
  label: string;
  title: string;
  description: string;
};

// ─── Color tokens
// primary  → #20385c  (navy blue)
// secondary → #bc8737 (gold)

// ─── Animation Variants ───────────────────────────────────────────────────────

const wrapperVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ─── Sparkle / Diamond icon ───────────────────────────────────────────────────

const DiamondStar = ({ size = 14 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M8 16C8 11.7645 4.23553 8 0 8C4.23553 8 8 4.23553 8 0C8 4.23553 11.7645 8 16 8C11.7645 8 8 11.7645 8 16Z"
      fill="#bc8737"
    />
  </svg>
);

// ─── Decorative hairline ──────────────────────────────────────────────────────

const HairlineLeft = () => (
  <div
    className="hidden sm:block h-px flex-1 max-w-[60px]"
    style={{
      background: "linear-gradient(90deg, transparent, rgba(188,135,55,0.55))",
    }}
  />
);

const HairlineRight = () => (
  <div
    className="hidden sm:block h-px flex-1 max-w-[60px]"
    style={{
      background: "linear-gradient(90deg, rgba(188,135,55,0.55), transparent)",
    }}
  />
);

// ─── Heading Component ────────────────────────────────────────────────────────

const Heading = ({ label, title, description }: HeadingProps) => {
  return (
    <motion.div
      className="relative text-center px-4 sm:px-8 md:px-16 lg:px-24   py-10"
      variants={wrapperVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
    >
      {/* ── Eyebrow label ── */}
      <motion.div
        variants={itemVariants}
        className="mb-5 inline-flex items-center justify-center gap-3"
      >
        <HairlineLeft />

        {/* Pill badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
          style={{
            borderColor: "rgba(188,135,55,0.24)",
            background:
              "linear-gradient(135deg, rgba(188,135,55,0.08) 0%, rgba(188,135,55,0.04) 100%)",
          }}
        >
          <DiamondStar size={10} />
          <span
            className="text-[0.63rem] font-bold tracking-[0.24em] uppercase family-semibold"
            style={{ color: "rgba(188,135,55,0.9)" }}
          >
            {label}
          </span>
          <DiamondStar size={10} />
        </div>

        <HairlineRight />
      </motion.div>

      {/* ── Main Title ── */}
      <motion.h2
        variants={itemVariants}
        className="mb-4 text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[3.2rem] family-bold"
        style={{
          background:
            "linear-gradient(135deg, #1a2c46 0%, #20385c 40%, #bc8737 78%, #8a5e18 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.025em",
          lineHeight: 1.12,
        }}
      >
        {title}
      </motion.h2>

      {/* ── Decorative divider ── */}
      <motion.div
        variants={itemVariants}
        className="mb-5 flex items-center justify-center gap-3"
      >
        <div
          className="h-px w-12"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(32,56,92,0.22))",
          }}
        />
        {/* Centre diamond */}
        <svg
          viewBox="0 0 16 16"
          className="h-2.5 w-2.5"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="10"
            height="10"
            rx="1"
            transform="rotate(45 8 8)"
            fill="rgba(188,135,55,0.55)"
          />
        </svg>
        <div
          className="h-px w-12"
          style={{
            background:
              "linear-gradient(90deg, rgba(32,56,92,0.22), transparent)",
          }}
        />
      </motion.div>

      {/* ── Description ── */}
      <motion.p
        variants={itemVariants}
        className="mx-auto max-w-2xl text-sm leading-relaxed sm:text-base family-regular"
        style={{ color: "rgb(32,56,92)" }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default Heading;
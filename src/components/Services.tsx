
"use client";

import { motion, type Variants } from "framer-motion";

import { servicesData } from "@/data/services-data";
import ServiceCard from "./layout/services/ServiceCard";
import { containerVariants } from "./common/ServiceCard";
// ─── Types ────────────────────────────────────────────────────────────────────

type Service = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
};

type ServicesProps = {
  heading?: string;
  subheading?: string;
  description?: string;
};

// ─── Header variants ──────────────────────────────────────────────────────────

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Section Background ───────────────────────────────────────────────────────

function Background() {
  return (
    <>
      {/* Base wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(175deg, #f6f9fd 0%, #eef4fb 35%, #f9fbfe 65%, #f4f7fb 100%)",
        }}
      />

      {/* Navy orb — top right */}
      <div
        className="pointer-events-none absolute -right-56 -top-36 h-[640px] w-[640px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(32,56,92,0.08) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Gold orb — bottom left */}
      <div
        className="pointer-events-none absolute -bottom-36 -left-52 h-[560px] w-[560px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(188,135,55,0.09) 0%, transparent 65%)",
          filter: "blur(80px)",
        }}
      />

      {/* Center wash */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(32,56,92,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Top hairline */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(32,56,92,0.2), rgba(188,135,55,0.2), transparent)",
        }}
      />

      {/* Bottom hairline */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(32,56,92,0.1), transparent)",
        }}
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(32,56,92,0.1) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          opacity: 0.45,
        }}
      />

      {/* Decorative SVG arcs — top right */}
      <svg
        className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] opacity-[0.025]"
        viewBox="0 0 400 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="380" cy="20" r="260" stroke="#20385c" strokeWidth="0.65" />
        <circle cx="380" cy="20" r="185" stroke="#bc8737" strokeWidth="0.65" />
        <circle cx="380" cy="20" r="115" stroke="#20385c" strokeWidth="0.65" />
        <circle cx="380" cy="20" r="60"  stroke="#bc8737" strokeWidth="0.65" />
      </svg>

      {/* Decorative SVG arcs — bottom left */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 h-[260px] w-[260px] opacity-[0.025]"
        viewBox="0 0 280 280"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="0" cy="280" r="190" stroke="#bc8737" strokeWidth="0.65" />
        <circle cx="0" cy="280" r="120" stroke="#20385c" strokeWidth="0.65" />
        <circle cx="0" cy="280" r="62"  stroke="#bc8737" strokeWidth="0.65" />
      </svg>
    </>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  heading,
  subheading,
  description,
}: {
  heading: string;
  subheading: string;
  description: string;
}) {
  return (
    <motion.div
      className="mb-20 text-center"
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* Eyebrow */}
      <div className="mb-6 inline-flex items-center gap-3">
        <div
          className="h-px w-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(188,135,55,0.65))",
          }}
        />
        <span
          className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.28em]"
          style={{
            borderColor: "rgba(188,135,55,0.22)",
            background: "rgba(188,135,55,0.06)",
            color: "rgba(188,135,55,0.88)",
          }}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "#bc8737", animation: "pulse 2s infinite" }}
          />
          {subheading}
        </span>
        <div
          className="h-px w-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(188,135,55,0.65), transparent)",
          }}
        />
      </div>

      {/* Heading */}
      <h2
        className="mb-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]"
        style={{
          background:
            "linear-gradient(135deg, #1a2c46 0%, #20385c 38%, #bc8737 72%, #8a5e18 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.028em",
          fontFamily: "'Georgia', 'Times New Roman', serif",
        }}
      >
        {heading}
      </h2>

      {/* Diamond divider */}
      <div className="mb-5 flex items-center justify-center gap-4">
        <div
          className="h-px w-14"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(32,56,92,0.2))",
          }}
        />
        <svg viewBox="0 0 16 16" className="h-2.5 w-2.5" fill="none" aria-hidden="true">
          <rect
            x="3" y="3" width="10" height="10" rx="1"
            transform="rotate(45 8 8)"
            fill="rgba(188,135,55,0.5)"
          />
        </svg>
        <div
          className="h-px w-14"
          style={{
            background:
              "linear-gradient(90deg, rgba(32,56,92,0.2), transparent)",
          }}
        />
      </div>

      {/* Description */}
      <p
        className="mx-auto max-w-2xl text-base leading-relaxed sm:text-[1.05rem]"
        style={{ color: "rgba(32,56,92,0.46)" }}
      >
        {description}
      </p>
    </motion.div>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────

export default function Services({
  heading = "What We Offer",
  subheading = "Our Services",
  description = "We deliver end-to-end solutions that drive measurable results — from strategy and operations to digital transformation.",
}: ServicesProps) {
  return (
    <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8">
      <Background />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeader
          heading={heading}
          subheading={subheading}
          description={description}
        />

        {/* ── Grid ── */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              
              description={service.description}
            />
          ))}
        </motion.div>

        {/* ── Footer CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="/services"
            className="group inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] transition-all duration-300"
            style={{
              borderColor: "rgba(32,56,92,0.15)",
              background: "rgba(32,56,92,0.03)",
              color: "rgba(32,56,92,0.6)",
            }}
            whileHover={{
              borderColor: "rgba(188,135,55,0.45)",
              background: "rgba(188,135,55,0.07)",
              color: "rgb(32,56,92)",
              y: -2,
              boxShadow: "0 8px 24px rgba(32,56,92,0.1)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            View All Services
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
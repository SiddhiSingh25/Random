
"use client";

import { motion, type Variants } from "framer-motion";

import { servicesData } from "@/data/services-data";
import ServiceCard from "./layout/services/ServiceCard";
import { containerVariants } from "./common/ServiceCard";
import Heading from "./common/Heading";


type ServicesProps = {
  heading?: string;
  subheading?: string;
  description?: string;
  limit?: number;
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



// ─── Services Section ─────────────────────────────────────────────────────────

export default function Services({
  heading = "What We Offer",
  subheading = "Our Services",
  description = "We deliver end-to-end solutions that drive measurable results — from strategy and operations to digital transformation.",
    limit,
}: ServicesProps) {
  const visibleServices = limit ? servicesData.slice(0, limit) : servicesData;
  return (
    <section className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8">

      <div className="relative z-10 mx-auto max-w-7xl">
        <Heading
          label={heading}
          title={subheading}
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
          {visibleServices.map((service) => (
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
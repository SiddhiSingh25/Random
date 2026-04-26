"use client";
import { motion } from "framer-motion";

interface SimpleHeadingProps {
  badgeText?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

const SimpleHeading = ({
  badgeText,
  title,
  align = "center",
  className = "",
}: SimpleHeadingProps) => {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 md:mb-16   px-4 md:px-16 lg:px-32 ${
        isCenter ? "text-center" : "text-left"
      } ${className}`}
    >
      {badgeText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 text-primary-600 font-semibold uppercase text-xs tracking-[0.2em] mb-4 ${
            isCenter ? "justify-center" : "justify-start"
          }`}
        >
          <div className="w-6 h-[1px] bg-primary-600"></div>
          <span>{badgeText}</span>
          <div className="w-6 h-[1px] bg-primary-600"></div>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-4"
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SimpleHeading;
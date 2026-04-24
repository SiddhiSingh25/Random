"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

// --- Types ---
type HeadingProps = {
  label?: string;
  title?: string;
  description?: string;
};

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  },
};

const Header = ({ 
  label = "Company Insights", 
  title = "Our Latest", 
  description = "Stay updated with our latest news, industry trends, and strategic perspectives." 
}: HeadingProps) => {
  return (
    <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-[#F8FAFC] px-6 py-12 md:py-20 border-b border-[#20385c]/5">
      
      {/* 1. Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute -top-[20%] -right-[5%] w-[400px] h-[400px] rounded-full opacity-[0.15] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #20385c 0%, transparent 70%)' }}
        />
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(#20385c 1px, transparent 1px)`, 
            backgroundSize: '32px 32px' 
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto"
        >
          {/* 2. Compact Eyebrow Label */}
          <motion.div variants={fadeUp} className="mb-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#20385c]/5 shadow-sm">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#bc8737]">
                {label}
              </span>
            </span>
          </motion.div>
          
          {/* 3. Scaled-Down Heading */}
          <motion.h1 
            variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-5xl font-bold text-[#20385c] mb-5 leading-tight tracking-tight"
          >
            {title}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#bc8737] via-[#d4a050] to-[#bc8737] bg-[length:200%_auto]">
              Articles & News
            </span>
          </motion.h1>
          
          {/* 4. Tighter Description */}
          <motion.p 
            variants={fadeUp}
            className="text-sm md:text-base text-[#20385c]/50 max-w-xl mx-auto leading-relaxed font-medium"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* 5. Minimal Bottom Accent */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-20 hidden md:block">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#bc8737] to-transparent" />
      </div>
    </section>
  );
};

export default Header;
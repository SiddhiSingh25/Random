"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // 1. Import Framer Motion
import {
  HiOutlineShieldCheck,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineDocumentText
} from "react-icons/hi2";
import { BsArrowRight, BsPatchCheckFill } from "react-icons/bs";
import Heading from "@/components/common/Heading";

const AboutUsSection = () => {
  // 2. Define Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays each child's entrance
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom cubic-bezier for "silky" feel
    },
  } as const;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, x: -30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    },
  } as const;

  return (
    <section className="relative py-12 bg-gray-50 overflow-hidden">


      <Heading
        label="Compliance Services"
        title="Expert BIS & Regulatory Solutions"
        description="Navigate Indian regulatory requirements with ease."
      />


      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary-50 via-white to-secondary-50" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto mt-16 grid max-w-8xl grid-cols-1 lg:grid-cols-12 gap-10 px-4 md:px-16 lg:px-24 items-center"
      >
        {/* ---------------- LEFT : IMAGE ---------------- */}
        <motion.div 
          variants={imageVariants}
          className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[540px]">
            <div className="relative z-10 rounded-xl overflow-hidden  shadow-lg shadow-primary-900/5 transition-transform duration-700 hover:scale-[1.02]">
              <Image
                src="/images/slider/image1.jpeg"
                alt="Compliance Experts"
                width={420}
                height={520}
                className="w-full h-[380px] lg:h-[480px] object-cover"
              />
            </div>

            {/* Floating Metric */}
            <motion.div
              animate={{ y: [0, -10, 0] }} // Gentle floating animation
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 z-20 bg-white/80 backdrop-blur-md px-4 py-3 rounded-lg shadow-sm border border-primary-100 flex items-center gap-3"
            >
              <div className="w-1 h-8 bg-secondary-500 rounded-full" />
              <div>
                <div className="text-xl family-bold text-primary-800 leading-none">15k+</div>
                <div className="text-[9px] family-semibold uppercase tracking-wider text-primary-400">Approvals</div>
              </div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -left-6 -bottom-4 z-20 bg-primary-900/95 backdrop-blur-sm p-5 rounded-lg shadow-xl text-white max-w-[220px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <HiOutlineShieldCheck className="text-xl text-secondary-300" />
                <span className="text-xs family-bold uppercase tracking-widest text-secondary-200">Liaison Expert</span>
              </div>
              <p className="text-[12px] leading-relaxed family-light opacity-90">
                Accelerated pathways for BIS, CDSCO & WPC through tier-1 regulatory channels.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* ---------------- RIGHT : CONTENT ---------------- */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="flex flex-col space-y-5 lg:space-y-6">
            
            <motion.div variants={itemVariants} className="flex items-center gap-2">
              <span className="px-3 py-1 bg-primary-50 text-primary-700 family-bold tracking-wider text-[10px] uppercase rounded-md border border-primary-100">
                Regulatory Intelligence
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl family-mainheading text-primary-950 leading-tight"
            >
              Strategic Guidance for <br className="hidden lg:block" />
              <span className="text-primary-500">Indian Market Entry</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4 max-w-xl">
              <p className="text-base sm:text-lg text-primary-700 family-medium leading-snug">
                Beyond paperwork: We deliver the technical roadmap for mandatory certifications and statutory compliance.
              </p>
              <p className="text-primary-400 text-sm leading-relaxed family-regular">
                Specializing in BIS, ISI, WPC, and CDSCO registrations, we bridge the gap between global standards and Indian regulatory mandates.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { icon: <HiOutlineGlobeAsiaAustralia />, title: "Pan-India Reach", desc: "Local liaison in all industrial hubs." },
                { icon: <HiOutlineDocumentText />, title: "Technical Audit", desc: "Meticulous document preparation." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start p-3 rounded-lg border border-primary-50 bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                  <div className="text-secondary-600 text-lg mt-0.5">{item.icon}</div>
                  <div>
                    <h5 className="family-bold text-[13px] text-primary-900 leading-none">{item.title}</h5>
                    <p className="text-[11px] text-primary-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <button className="group relative flex items-center gap-3 px-7 py-3.5 bg-primary-800 text-white rounded-lg family-bold text-xs tracking-widest overflow-hidden transition-all active:scale-95 shadow-md">
                <span className="relative z-10">BOOK CONSULTATION</span>
                <BsArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>

              <div className="flex items-center gap-3 py-2 border-l border-primary-100 pl-6 hidden sm:flex">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-primary-50 flex items-center justify-center text-[10px] text-primary-300 family-bold">
                      {i}
                    </div>
                  ))}
                </div>
                <div className="text-[10px] family-bold text-primary-800 uppercase tracking-tighter">
                  <div className="flex items-center gap-1 text-secondary-600">
                    <BsPatchCheckFill />
                    Industry Leader
                  </div>
                  <span className="text-primary-300 font-normal">500+ Retained Clients</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUsSection;
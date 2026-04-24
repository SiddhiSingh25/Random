"use client";

import { motion, useInView } from "framer-motion";
import { useRef, FC } from "react";
import Image from "next/image";
import { FaClock, FaTrophy, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const WhoWeAre: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  const descriptionTexts: string[] = [
    "Founded in 1998, Aleph Industries (India) Pvt. Ltd. began with a vision to revolutionize the business consulting landscape. What started as a small team has grown into a global provider trusted by industry leaders.",
    "Our journey is marked by continuous innovation and a deep understanding of market dynamics. We help businesses navigate complex challenges, optimize operations, and achieve sustainable growth.",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden bg-white"
    >
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-72 h-72 bg-secondary-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="inline-block">
              <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-600 bg-primary-50 rounded-full border border-primary-100">
                Established 1998
              </span>
            </motion.div>

            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              A Legacy of <br />
              <span className="text-primary-600">Trust & Innovation</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4">
              {descriptionTexts.map((text, idx) => (
                <p key={idx} className="text-lg text-gray-600 leading-relaxed">
                  {text}
                </p>
              ))}
            </motion.div>

            {/* Feature Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: <MdVerified />, text: "ISO 9001:2015 Certified" },
                { icon: <FaTrophy />, text: "Award Winning Agency" },
                { icon: <FaShieldAlt />, text: "Compliance Experts" },
                { icon: <FaCheckCircle />, text: "100% Client Satisfaction" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="text-primary-500">{item.icon}</span>
                  <span className="font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="pt-6">
              <button className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300 shadow-lg hover:shadow-primary-200">
                Learn More About Us
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 border border-gray-100">
              <Image
                src="/images/about/about.png"
                alt="Aleph Industries Team"
                width={800}
                height={600}
                className="object-cover w-full h-auto hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Floating Experience Card - Positioned for Mobile/Desktop */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-4 md:-left-10 bg-white p-6 rounded-xl shadow-xl z-20 border border-gray-50 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                <FaClock className="text-2xl" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-tighter">Years Experience</div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-100 rounded-full -z-0 opacity-50" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
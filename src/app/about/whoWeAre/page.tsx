"use client";

import { motion, useInView, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef, useEffect, useState, FC } from "react";
import Image from "next/image";
import { FaClock, FaTrophy, FaChartLine, FaUsers, FaGlobe, FaShieldAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

interface MousePosition {
  x: number;
  y: number;
}

interface StatItem {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const WhoWeAre: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity: MotionValue<number> = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale: MotionValue<number> = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };



  const descriptionTexts: string[] = [
    "Founded in 1998, Aleph Industries (India) Pvt. Ltd. began with a vision to revolutionize the business consulting landscape. What started as a small team of passionate experts has grown into a comprehensive business solutions provider trusted by industry leaders worldwide.",
    "Our journey has been marked by continuous innovation, unwavering commitment to quality, and a deep understanding of evolving market dynamics. We've helped hundreds of businesses navigate complex challenges, optimize operations, and achieve sustainable growth.",
    "Today, with Aleph Accreditation & Testing Centre Pvt. Ltd., we've expanded our capabilities to offer end-to-end solutions including accreditation services, testing, certification, and compliance management."
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50/30"
    >
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ opacity }}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-500/5 rounded-full blur-3xl animate-spin-slow" />
          
          {/* Decorative circles */}
          <div className="absolute top-40 right-20 w-32 h-32 border border-primary-200/20 rounded-full animate-pulse" />
          <div className="absolute bottom-40 left-20 w-48 h-48 border border-secondary-200/20 rounded-full animate-pulse delay-1000" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="group relative px-5 py-2 text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-primary-500/10 to-secondary-500/10 text-primary-700 rounded-full border border-primary-200/30 backdrop-blur-sm hover:scale-105 transition-transform duration-300 family-semibold">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                ✨ Our Journey
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight family-mainheading">
                <span className="bg-gradient-to-r from-primary-800 to-primary-900 bg-clip-text text-transparent">
                  A Legacy of
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-700 bg-clip-text text-transparent animate-gradient">
                  Trust & Innovation
                </span>
              </h2>
            </motion.div>

            {/* Description paragraphs */}
            <motion.div variants={itemVariants} className="space-y-5">
              {descriptionTexts.map((text, idx) => (
                <motion.p 
                  key={idx}
                  variants={itemVariants}
                  className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300 family-regular"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3 text-sm group cursor-pointer">
                <div className="p-1.5 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <MdVerified className="w-4 h-4 text-primary-600" />
                </div>
                <span className="text-gray-600 family-medium">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-3 text-sm group cursor-pointer">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-secondary-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 family-medium">5.0 Rating</span>
              </div>
              <div className="flex items-center gap-3 text-sm group cursor-pointer">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-300 to-primary-400 border-2 border-white group-hover:scale-110 transition-transform duration-300"
                    />
                  ))}
                </div>
                <span className="text-gray-600 family-medium">Trusted by 100+ clients</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <button className="group relative px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 family-semibold">
                <span className="absolute inset-0 bg-gradient-to-r from-secondary-500 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Learn More About Us
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Floating Cards */}
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
            style={{
              transform: `perspective(1000px) rotateY(${mousePosition.x * 5}deg) rotateX(${-mousePosition.y * 5}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Main Image Container */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/20 via-transparent to-secondary-600/20 z-10 rounded-3xl" />
                <div className="relative p-2 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <Image
                      src="/images/about/about.png"
                      alt="Our Story - Aleph Industries team collaborating"
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/api/placeholder/800/600';
                      }}
                    />
                    
                    {/* Overlay Pattern */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay" />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary-600 border-b-8 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 max-w-[260px] z-20 border border-gray-200 hover:shadow-3xl transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full blur-lg opacity-50 animate-pulse" />
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-lg">
                    <FaClock className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent family-bold">25+</p>
                  <p className="text-xs text-gray-500 font-medium family-medium">Years of</p>
                  <p className="text-sm font-semibold text-gray-800 -mt-1 family-semibold">Industry Excellence</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: -30 }}
              animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="absolute -top-6 -right-6 md:-top-10 md:-right-10 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 z-20 border border-gray-200 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-300 to-primary-400 border-2 border-white ring-2 ring-gray-100"
                    />
                  ))}
                </div>
                <div className="border-l border-gray-200 pl-3">
                  <p className="text-lg font-bold text-gray-800 family-bold">100+</p>
                  <p className="text-xs text-gray-500 family-medium">Happy Clients</p>
                </div>
              </div>
            </motion.div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-20 -right-4 md:bottom-32 md:-right-8 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-xl shadow-xl p-3 z-20 hidden lg:block"
            >
              <div className="flex items-center gap-2 text-white">
                <FaTrophy className="w-4 h-4" />
                <span className="text-xs font-bold family-semibold">Award Winning</span>
              </div>
            </motion.div>

            {/* Quality Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2, type: "spring", stiffness: 200 }}
              className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-xl shadow-xl p-2 z-20 hidden xl:block"
            >
              <div className="flex flex-col items-center gap-1">
                <FaShieldAlt className="w-5 h-5 text-primary-600" />
                <div className="h-8 w-px bg-gray-200" />
                <span className="text-[10px] font-bold text-gray-700 family-bold">ISO</span>
                <span className="text-[8px] text-gray-500 family-medium">Certified</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s linear infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        /* Custom styles for the play button triangle */
        .border-l-12 {
          border-left-width: 12px;
        }
      `}</style>
    </section>
  );
};

export default WhoWeAre;




"use client";

// import { useRef } from 'react';
// import { useInView } from 'framer-motion';
// import { motion } from 'framer-motion';
// import { FaTrophy, FaChartLine, FaUsers, FaGlobe } from 'react-icons/fa';

// import { useRef } from 'react';
// import { useInView, motion } from 'framer-motion';
// import { FaShieldAlt, FaTrophy, FaClock, FaMedal, FaHandshake, FaRocket } from 'react-icons/fa';


import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  FaChartLine, 
  FaHandshake, 
  FaLightbulb, 
  FaShieldAlt,
  FaUsers,
  FaTrophy,
  FaGlobe,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaStar
} from "react-icons/fa";

// ==================== ANIMATION VARIANTS ====================
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

// ==================== TYPE DEFINITIONS ====================
interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ValueItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  socialLinks?: { platform: string; url: string }[];
}

// ==================== COMPONENT 1: HERO SECTION ====================
const AboutHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      </div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold tracking-wide">
              About Us
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Pioneering Excellence in
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Business Solutions
            </span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            With over two decades of industry leadership, we've been transforming businesses through innovative strategies, 
            uncompromising quality, and unwavering commitment to excellence.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2 text-white/80">
              <FaCheckCircle className="text-yellow-400" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <FaCheckCircle className="text-yellow-400" />
              <span>25+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <FaCheckCircle className="text-yellow-400" />
              <span>500+ Projects Completed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="white">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

// ==================== COMPONENT 2: STATS SECTION ====================


interface StatItem {
  id: number;
  value: string;
  label: string;
  icon: JSX.Element;
}

const StatsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  
  const stats: StatItem[] = [
    { id: 1, value: "25+", label: "Years of Excellence", icon: <FaTrophy /> },
    { id: 2, value: "500+", label: "Projects Completed", icon: <FaChartLine /> },
    { id: 3, value: "100+", label: "Expert Team Members", icon: <FaUsers /> },
    { id: 4, value: "50+", label: "Global Partners", icon: <FaGlobe /> },
  ];

  // Smooth counter animation
  const countVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50/50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Subtle heading for context (optional, adds trust) */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-wider text-primary-600 font-semibold"
          >
            Our Impact in Numbers
          </motion.span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              <div className="relative bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100/80 backdrop-blur-sm">
                {/* Decorative gradient orb */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                
                {/* Icon container */}
                <div className="relative inline-flex items-center justify-center w-14 h-14 mb-5 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 text-white shadow-md shadow-primary-500/20 group-hover:shadow-lg group-hover:shadow-primary-500/30 transition-all duration-300">
                  <span className="text-2xl">{stat.icon}</span>
                </div>

                {/* Animated number */}
                <motion.div
                  custom={index}
                  variants={countVariants}
                  className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent mb-2 tracking-tight"
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <p className="text-gray-500 font-medium text-sm lg:text-base tracking-wide">
                  {stat.label}
                </p>

                {/* Subtle bottom line on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-12 transition-all duration-300 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// export default StatsSection;

// ==================== COMPONENT 3: OUR STORY SECTION ====================


const OurStory = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, rotateY: 5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, y: 30, x: -20 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.5, delay: 0.6, ease: "backOut" },
    },
  };

  return (
    <section ref={sectionRef} className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-gray-50/40 to-white">
      {/* Abstract background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-primary-500/3 to-secondary-500/3 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <span className="px-4 py-1.5 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 rounded-full border border-primary-100/50 shadow-sm backdrop-blur-sm">
                Our Journey
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">
                A Legacy of
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Trust & Innovation
              </span>
            </motion.h2>

            {/* Description paragraphs */}
            <motion.div variants={itemVariants} className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-base">
                Founded in <span className="font-semibold text-gray-800">1998</span>, Aleph Industries (India) Pvt. Ltd. began with a vision to revolutionize 
                the business consulting landscape. What started as a small team of passionate experts 
                has grown into a comprehensive business solutions provider trusted by industry leaders worldwide.
              </p>
              <p className="text-base">
                Our journey has been marked by continuous innovation, unwavering commitment to quality, 
                and a deep understanding of evolving market dynamics. We've helped hundreds of businesses 
                navigate complex challenges, optimize operations, and achieve sustainable growth.
              </p>
              <p className="text-base">
                Today, with <span className="font-medium text-primary-600">Aleph Accreditation & Testing Centre Pvt. Ltd.</span>, we've expanded our capabilities 
                to offer end-to-end solutions including accreditation services, testing, certification, 
                and compliance management.
              </p>
            </motion.div>

            {/* Trust indicators */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-5 pt-4">
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  <FaShieldAlt className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">ISO 9001:2015</p>
                  <p className="text-xs text-gray-500">Certified Company</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                  <FaTrophy className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Award Winning</p>
                  <p className="text-xs text-gray-500">Industry Recognition</p>
                </div>
              </div>
            </motion.div>

            {/* Additional trust row */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                <span>25+ Years Excellence</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
                <span>500+ Projects</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                <span>Global Presence</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Floating Card */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/10">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/15 via-transparent to-secondary-500/15 z-10 rounded-2xl" />
              
              {/* Image container with decorative border */}
              <div className="relative p-1.5 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl">
                <div className="relative rounded-xl overflow-hidden bg-gray-100">
                  <img 
                    src="/images/about/story-image.jpg" 
                    alt="Our Story - Aleph Industries team collaborating"
                    className="w-full h-auto object-cover aspect-[4/3] md:aspect-auto"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/1e3a8a/ffffff?text=Aleph+Industries';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <motion.div
              variants={floatingCardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-white rounded-2xl shadow-xl p-4 max-w-[220px] z-20 border border-gray-100/80 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-lg">
                  <FaClock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">25+</p>
                  <p className="text-xs text-gray-500 font-medium">Years of</p>
                  <p className="text-sm font-semibold text-gray-700 -mt-1">Excellence</p>
                </div>
              </div>
            </motion.div>

            {/* Second floating card (optional) */}
            <motion.div
              variants={floatingCardVariants}
              custom={1}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-2.5 px-4 z-20 border border-gray-100 hidden sm:flex items-center gap-2"
            >
              <div className="flex -space-x-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white" />
                ))}
              </div>
              <span className="text-xs font-medium text-gray-600">Trusted by 100+ clients</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== COMPONENT 4: CORE VALUES SECTION ====================
const CoreValues = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const values: ValueItem[] = [
    {
      id: 1,
      title: "Integrity First",
      description: "We conduct business with unwavering ethical standards, transparency, and honesty in all our dealings.",
      icon: <FaShieldAlt />
    },
    {
      id: 2,
      title: "Innovation Driven",
      description: "We constantly evolve and adapt, leveraging cutting-edge solutions to solve complex business challenges.",
      icon: <FaLightbulb />
    },
    {
      id: 3,
      title: "Client Centric",
      description: "Your success is our success. We're committed to delivering exceptional value and building lasting partnerships.",
      icon: <FaHandshake />
    },
    {
      id: 4,
      title: "Excellence Focused",
      description: "We pursue perfection in everything we do, maintaining the highest standards of quality and professionalism.",
      icon: <FaChartLine />
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            What Drives Us
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Our Core Values
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600">
            These principles guide every decision we make and every action we take
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              custom={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== COMPONENT 5: TEAM SECTION ====================
const TeamSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const team: TeamMember[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      image: "/images/team/team1.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Director of Operations",
      image: "/images/team/team2.jpg",
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Head of Consulting",
      image: "/images/team/team3.jpg",
    },
    {
      id: 4,
      name: "Neha Gupta",
      position: "Quality Assurance Director",
      image: "/images/team/team4.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span variants={fadeInUp} className="text-primary-500 font-semibold text-sm uppercase tracking-wider">
            Leadership
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Meet Our Experts
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600">
            Dedicated professionals committed to your success
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              custom={index}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <button className="bg-white text-primary-500 px-4 py-2 rounded-full text-sm font-semibold">
                    View Profile
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-500 font-medium">{member.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
// ==================== COMPONENT 6: WHY CHOOSE US SECTION ====================
const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const features = [
    "25+ Years of Industry Experience",
    "ISO 9001:2015 Certified",
    "500+ Successful Projects",
    "Expert Team of 100+ Professionals",
    "State-of-the-art Testing Facilities",
    "Global Reach with Local Expertise",
    "100% Client Satisfaction Rate",
    "24/7 Customer Support"
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-primary-500 to-secondary-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <span className="text-yellow-300 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              The Aleph Advantage
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              We combine deep industry expertise with innovative approaches to deliver 
              measurable results that drive your business forward.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 text-white"
                >
                  <FaCheckCircle className="text-yellow-300 flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <FaQuoteLeft className="text-primary-500 text-3xl" />
              <h3 className="text-2xl font-bold text-gray-900">Client Testimonial</h3>
            </div>
            <div className="mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="inline-block text-yellow-400 mr-1" />
              ))}
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
              "Aleph has been an invaluable partner in our growth journey. Their expertise, 
              professionalism, and commitment to excellence have helped us achieve remarkable results."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              <div>
                <p className="font-semibold text-gray-900">Vikram Mehta</p>
                <p className="text-sm text-gray-500">CEO, TechCorp Industries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ==================== COMPONENT 7: CTA SECTION ====================
const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to achieve excellence. Contact us today for a free consultation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-primary-500 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-500 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ==================== MAIN PAGE COMPONENT ====================
export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <AboutHero />
      <StatsSection />
      <OurStory />
      <CoreValues />
      <WhyChooseUs />
      <TeamSection />
      <CTASection />
    </main>
  );
}
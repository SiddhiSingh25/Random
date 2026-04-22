
"use client"

import { motion, useInView } from "framer-motion";
import { useRef} from "react";







interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  socials?: any;
  bio : string
}

const TeamSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  const team: TeamMember[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      image: "/images/teams/abhishek_dubey.png",
      bio: "20+ years of experience in business transformation",
      socials: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Director of Operations",
      image: "/images/teams/abhishek_dubey.png",
      bio: "Operations expert with global perspective",
      socials: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Head of Consulting",
      image: "/images/teams/abhishek_dubey.png",
      bio: "Strategic advisor to Fortune 500 companies",
      socials: { linkedin: "#", twitter: "#", email: "#" }
    },
    {
      id: 4,
      name: "Neha Gupta",
      position: "Quality Assurance Director",
      image: "/images/teams/abhishek_dubey.png",
      bio: "Certified quality management professional",
      socials: { linkedin: "#", twitter: "#", email: "#" }
    },
  ];

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.3,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const imageScale = {
    rest: { scale: 1 },
    hover: {
      scale: 1.08,
      transition: {
        duration: 0.4,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const overlayReveal = {
    rest: { opacity: 0, y: 20 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  const socialIconHover = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-100/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div 
            variants={fadeInUp} 
            className="inline-flex items-center gap-2 bg-indigo-100/80 backdrop-blur-sm px-4 py-1.5 rounded-full mb-4"
          >
            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
            <span className="text-indigo-700 font-semibold text-sm uppercase tracking-wider">
              Leadership Team
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp} 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-slate-800 to-indigo-600 bg-clip-text text-transparent mt-2 mb-4"
          >
            Meet Our Experts
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp} 
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Dedicated professionals committed to your success, bringing decades of combined expertise
          </motion.p>
        </motion.div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              custom={index}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative"
            >
              <motion.div 
                variants={cardHover}
                className="relative bg-white rounded-2xl shadow-lg shadow-indigo-100/50 overflow-hidden backdrop-blur-sm"
              >
                {/* Card border gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl -z-10 blur-xl" />
                
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                  <motion.div
                    variants={imageScale}
                    className="relative overflow-hidden aspect-square"
                  >
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Links Overlay */}
                  <motion.div 
                    variants={overlayReveal}
                    className="absolute bottom-0 left-0 right-0 p-4 flex justify-center gap-3 z-10"
                  >
                    {member.socials?.linkedin && (
                      <motion.a
                        variants={socialIconHover}
                        whileHover="hover"
                        href={member.socials.linkedin}
                        className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200 shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </motion.a>
                    )}
                    {member.socials?.twitter && (
                      <motion.a
                        variants={socialIconHover}
                        whileHover="hover"
                        href={member.socials.twitter}
                        className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200 shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.682-12.056c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </motion.a>
                    )}
                    {member.socials?.email && (
                      <motion.a
                        variants={socialIconHover}
                        whileHover="hover"
                        href={`mailto:${member.socials.email}`}
                        className="w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-200 shadow-lg"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </motion.a>
                    )}
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-5 text-center">
                  <motion.h3 
                    className="text-xl font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors duration-200"
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-indigo-600 font-medium text-sm mb-2">{member.position}</p>
                  <p className="text-slate-500 text-sm">{member.bio}</p>
                  
                  {/* View Profile Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 px-4 py-1.5 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-200 w-full"
                  >
                    View Profile →
                  </motion.button>
                </div>
                
                {/* Trust Badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur rounded-full px-2 py-1 text-[10px] font-semibold text-indigo-600 shadow-lg">
                    ★ Expert
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-16"
        >
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-indigo-200 rounded-full text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-300 shadow-md hover:shadow-xl">
            View Full Team
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection
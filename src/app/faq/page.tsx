// import FaqSection from '@/components/FAQ'
// import React from 'react'

// const page = () => {
//   return (
//     <FaqSection/>
//   )
// }

// export default page
"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// --- Types ---
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  index: number;
}

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardHover = {
  rest: { scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  hover: { scale: 1.02, y: -8, transition: { duration: 0.3, ease: "easeOut" } }
};

// --- Icons (Simple SVG components) ---
const IconBEE = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconBIS = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12L20 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12L4 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconEPR = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H6L8 8L10 16L12 4L14 14L16 10L18 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const IconWPC = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="7" cy="17" r="1.5" fill="currentColor"/>
  </svg>
);

const IconTEC = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 5H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 19H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const IconLM = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// --- Helper to get icon by title ---
const getIconForService = (title: string) => {
  if (title.includes("BEE")) return <IconBEE />;
  if (title.includes("BIS")) return <IconBIS />;
  if (title.includes("EPR")) return <IconEPR />;
  if (title.includes("WPC")) return <IconWPC />;
  if (title.includes("TEC")) return <IconTEC />;
  if (title.includes("Legal") || title.includes("LMPC")) return <IconLM />;
  return <IconBIS />;
};

// --- Service Data ---
const servicesData = [
  // Registrations
  { title: "BEE Registration", description: "Certification for energy efficiency and star labeling of electrical appliances under Bureau of Energy Efficiency (BEE).", category: "Registration", icon: getIconForService("BEE Registration") },
  { title: "BIS (CRS) Registration for Electronic Products", description: "Mandatory CRS registration for electronics to ensure safety, quality, and compliance with BIS standards.", category: "Registration", icon: getIconForService("BIS (CRS) Registration") },
  { title: "EPR Registration for E-Waste Management", description: "Authorization for producers & importers to manage electronic waste under India’s E-Waste Management Rules.", category: "Registration", icon: getIconForService("EPR Registration") },
  { title: "EPR Registration for Plastic Waste Management", description: "Mandatory EPR authorization for plastic waste producers to ensure eco-friendly collection & recycling.", category: "Registration", icon: getIconForService("EPR Registration") },
  { title: "EPR Registration for Battery Waste Management", description: "Compliance for battery manufacturers & importers under Battery Waste Management Rules, 2022.", category: "Registration", icon: getIconForService("EPR Registration") },
  { title: "EPR Registration for Tire Waste Management", description: "Mandatory compliance for tire manufacturers to recycle, reuse, and dispose waste tires responsibly.", category: "Registration", icon: getIconForService("EPR Registration") },
  { title: "WPC & ETA Approval", description: "Wireless Planning & Coordination (WPC) ETA approval for wireless devices operating on de-licensed bands.", category: "Registration", icon: getIconForService("WPC & ETA Approval") },
  { title: "TEC/MTTCE Approval", description: "Approval for telecom equipment under Mandatory Testing & Certification of Telecom Equipment (MTTCE) scheme.", category: "Registration", icon: getIconForService("TEC/MTTCE Approval") },
  { title: "TAC & IMEI Registration", description: "Mandatory Type Approval Code (TAC) and IMEI registration for mobile devices before market entry.", category: "Registration", icon: getIconForService("TAC & IMEI Registration") },
  // License & Certification
  { title: "BIS Certification (ISI Mark) for Domestic Manufacturers", description: "ISI mark certification ensuring product quality, safety, and compliance for Indian manufacturers.", category: "License & Certification", icon: getIconForService("BIS Certification") },
  { title: "BIS Certification (ISI Mark) for Foreign Manufacturers (FMCS)", description: "ISI certification under FMCS scheme for foreign manufacturers exporting to India.", category: "License & Certification", icon: getIconForService("BIS Certification") },
  { title: "BIS Scheme-X Certification", description: "Special BIS certification scheme (Scheme-X) for bulk consignments, project imports & specific needs.", category: "License & Certification", icon: getIconForService("BIS Scheme-X") },
  // Auxiliary
  { title: "Legal Metrology (LMPC) Registration", description: "Mandatory registration for importers and manufacturers under Legal Metrology Act for packaged commodities.", category: "Auxiliary", icon: getIconForService("Legal Metrology") },
  { title: "CDSCO Registration", description: "Central Drugs Standard Control Organization registration for medical devices and pharmaceuticals.", category: "Auxiliary", icon: getIconForService("CDSCO") },
  { title: "FSSAI Registration", description: "Food Safety and Standards Authority of India license for food businesses.", category: "Auxiliary", icon: getIconForService("FSSAI") },
];

// --- Tab Button Component ---
const TabButton: React.FC<TabButtonProps> = ({ label, active, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
      active
        ? "bg-primary-800 text-white shadow-lg shadow-primary-800/20"
        : "bg-white/80 text-primary-700 hover:bg-primary-50 backdrop-blur-sm"
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    {label}
  </motion.button>
);

// --- Service Card Component ---
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-primary-100"
    >
      <div className="p-6 md:p-8">
        {/* Icon with gradient background */}
        <div className="mb-5 w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-800 group-hover:from-primary-800 group-hover:to-primary-700 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl family-bold text-primary-900 mb-3">{title}</h3>
        <p className="text-primary-600 family-regular text-sm md:text-base leading-relaxed">{description}</p>
        <div className="mt-5 flex items-center text-secondary-600 group-hover:text-secondary-700 transition-colors">
          <span className="text-sm font-medium">Learn more</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-primary-800 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

// --- How It Works Section ---
const steps = [
  { number: "01", title: "Consultation & Requirement Gathering", description: "In-depth consultation to understand your product and compliance needs." },
  { number: "02", title: "Documentation & Application Preparation", description: "We handle all paperwork and application filing with precision." },
  { number: "03", title: "Testing & Compliance Verification", description: "Coordinate with labs and ensure all tests meet regulatory standards." },
  { number: "04", title: "Final Certification & Approval", description: "Get your certificate delivered with ongoing compliance support." }
];

const HowItWorks: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold family-semibold mb-4">Our Process</span>
          <h2 className="text-3xl md:text-5xl family-bold text-primary-900 mb-4">How We Work</h2>
          <p className="text-primary-600 max-w-2xl mx-auto family-regular">Streamlined approach to ensure hassle-free compliance and faster market access</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <motion.div key={idx} variants={fadeInUp} custom={idx} className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100 h-full">
                <div className="text-5xl family-bold text-primary-200 mb-4">{step.number}</div>
                <h3 className="text-xl family-bold text-primary-800 mb-2">{step.title}</h3>
                <p className="text-primary-500 family-regular text-sm">{step.description}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// --- Contact Form Section (Simplified) ---
const ContactSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 px-4 md:px-8 bg-primary-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-800 text-secondary-300 text-sm font-semibold mb-4">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl family-bold text-white mb-4">Ready to get certified?</h2>
            <p className="text-primary-200 family-regular mb-8">Fill out the form and our expert team will connect with you within 24 hours.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary-100">
                <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+91 9999992065</span>
              </div>
              <div className="flex items-center gap-3 text-primary-100">
                <svg className="w-5 h-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info@ssglobalservices.in</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
            <form className="space-y-5">
              <div>
                <label className="block text-primary-700 family-medium text-sm mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-primary-700 family-medium text-sm mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-primary-700 family-medium text-sm mb-1">Service Interested In</label>
                <select className="w-full px-4 py-3 border border-primary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
                  <option>BIS Registration</option>
                  <option>EPR Registration</option>
                  <option>WPC Approval</option>
                  <option>Other</option>
                </select>
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-secondary-600 hover:bg-secondary-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md">
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// --- Main Page Component ---
export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>("ALL");
  const [filteredServices, setFilteredServices] = useState(servicesData);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    if (activeTab === "ALL") {
      setFilteredServices(servicesData);
    } else {
      setFilteredServices(servicesData.filter(service => service.category === activeTab));
    }
  }, [activeTab]);

  const tabs = ["ALL", "Registration", "License & Certification", "Auxiliary"];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-grid-primary-900/[0.02] bg-[size:40px_40px]" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-100/80 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary-600 animate-pulse" />
              <span className="text-primary-700 text-sm font-medium family-medium">12+ Years of Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl family-bold text-primary-900 mb-6 leading-tight">
              Our <span className="text-secondary-600">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto family-regular">
              Complete compliance solutions including registrations, licenses, certifications, and product testing services for Indian market entry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Filter */}
      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-primary-100 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <TabButton key={tab} label={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)} />
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredServices.map((service, idx) => (
                <ServiceCard key={`${service.title}-${idx}`} title={service.title} description={service.description} icon={service.icon} category={service.category} index={idx} />
              ))}
            </motion.div>
          </AnimatePresence>
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <p className="text-primary-500 text-lg">No services found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Industry Level Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl family-bold text-primary-900 mb-4">Industry Level Compliance</h2>
            <p className="text-primary-600 max-w-2xl mx-auto">Tailored solutions for diverse sectors including Electronics, Automotive, Pharmaceuticals, and FMCG.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Electronics", "Automotive", "Pharmaceuticals", "FMCG", "Textiles", "Chemicals", "IT & Telecom", "Renewable Energy"].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-primary-50 rounded-xl p-4 text-center border border-primary-100 hover:border-primary-300 transition-all cursor-default"
              >
                <span className="text-primary-800 font-semibold family-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
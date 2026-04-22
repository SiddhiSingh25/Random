"use client";

import Header from "@/components/common/header";
import ServiceCard from "@/components/layout/services/ServiceCard";
import { servicesData } from "@/data/services-data";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TabButtonProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

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

const Page = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const [activeTab, setActiveTab] = useState<string>("ALL");

  // const [filteredServices, setFilteredServices] = useState(servicesData);

  const tabs = ["ALL", "Registration", "License & Certification", "Auxiliary"];

  const filteredServices =
    activeTab === "ALL"
      ? servicesData
      : servicesData.filter((service) => service.category === activeTab);

  return (
    <>
      <div className="bg-white min-h-screen">
        <Header label="Services" />
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-24 pb-16 md:pt-32 md:pb-24"
        >
          <div className="absolute inset-0 bg-grid-primary-900/[0.02] bg-[size:40px_40px]" />
          <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl family-bold text-primary-900 mb-6 leading-tight">
                Our <span className="text-secondary-600">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-600 max-w-3xl mx-auto family-regular">
                Complete compliance solutions including registrations, licenses,
                certifications, and product testing services for Indian market
                entry.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-primary-100 py-4 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <TabButton
                key={tab}
                label={tab}
                active={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              />
            ))}
          </div>
        </div>

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
                  <ServiceCard
                    key={`${service.title}-${idx}`}
                    // id={service.title}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    category={service.category}
                    index={idx}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
            {filteredServices.length === 0 && (
              <div className="text-center py-20">
                <p className="text-primary-500 text-lg">
                  No services found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;

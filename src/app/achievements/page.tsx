"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import SimpleHeading from "@/components/common/SimpleHeading";

// --- DATA ---

const ACCOMPLISHMENTS = [
  {
    id: 1,
    title: "Best Newcomer 2024",
    img: "/images/slider/image1.jpeg",
    organization: "Global BIS Leadership Summit",
  },
  {
    id: 2,
    title: "Compliance Technology Innovation Award",
    img: "/images/slider/image1.jpeg",
    organization: "Industry Awards India",
  },
  {
    id: 3,
    title: "Certified BIS Compliance Expert - Level 1",
    img: "/images/slider/image1.jpeg",
    organization: "Eminence Internal Academy",
  },
  {
    id: 4,
    title: "Top Government Liaison Partner",
    img: "/images/slider/image1.jpeg",
    organization: "National SME Forum",
  },
  {
    id: 5,
    title: "Leadership in International Standards",
    img: "/images/slider/image1.jpeg",
    organization: "Eminence Foundation",
  },
  {
    id: 6,
    title: "Excellence in Client Relations",
    img: "/images/slider/image1.jpeg",
    organization: "Client Choice Awards",
  },
];

// --- COMPONENTS ---

export default function AchievementsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Constants for item width and spacing to calculate pagination
  const itemWidth = 240; // Approx width of an image item
  const gapWidth = 16; // md:gap-4
  const visibleItems = 3; // Approx number of fully visible items on medium+ screens

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // Prevent scrolling beyond the total number of items
      const nextIdx = prevIndex + visibleItems;
      return nextIdx < ACCOMPLISHMENTS.length ? nextIdx : prevIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // Prevent scrolling before the start
      const prevIdx = prevIndex - visibleItems;
      return prevIdx >= 0 ? prevIdx : 0;
    });
  };

  // Calculate the amount to scroll the container
  const scrollOffset = -(currentIndex * (itemWidth + gapWidth));

  return (
    <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      {/* Absolute Decorative Element for visual depth */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <SimpleHeading
          badgeText="Our Accomplishments"
          title="Milestones of Excellence"
          description="A testament to our dedication, expertise, and commitment to delivering premium compliance solutions across the globe."
          className="mb-12"
        />

        {/* --- CAROUSEL --- */}
        <div className="w-full flex items-center justify-center gap-10">
          
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md transition-all ${
              currentIndex === 0
                ? "opacity-40 cursor-not-allowed"
                : "text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg"
            }`}
            aria-label="Previous accomplishments"
          >
            <HiOutlineChevronLeft className="w-6 h-6" />
          </button>

          {/* Carousel Viewport */}
          <div className="w-full relative h-[400px] overflow-hidden flex items-center justify-start group">
            <motion.div
              className="flex gap-4 cursor-grab active:cursor-grabbing w-[2000px]" // Static width for simplicity in movement calculation
              animate={{ x: scrollOffset }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              drag="x"
              dragConstraints={{ right: 0, left: scrollOffset }}
              dragElastic={0.05}
            >
              <AnimatePresence initial={false}>
                {ACCOMPLISHMENTS.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className="w-[240px] flex-shrink-0 flex flex-col items-center gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-100/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    layout
                  >
                    {/* Image Placeholder */}
                    <div className="relative w-full aspect-[4/3] rounded-lg border border-slate-100 overflow-hidden shadow-inner">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content */}
                    <div className="text-center w-full px-2">
                      <h4 className="font-bold text-slate-900 leading-tight mb-1 text-base">
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-sm font-medium">
                        {item.organization}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={currentIndex + visibleItems >= ACCOMPLISHMENTS.length}
            className={`flex items-center justify-center w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md transition-all ${
              currentIndex + visibleItems >= ACCOMPLISHMENTS.length
                ? "opacity-40 cursor-not-allowed"
                : "text-slate-700 hover:border-blue-500 hover:text-blue-600 hover:shadow-lg"
            }`}
            aria-label="Next accomplishments"
          >
            <HiOutlineChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
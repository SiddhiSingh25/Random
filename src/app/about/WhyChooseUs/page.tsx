"use client"

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaQuoteLeft, FaStar } from "react-icons/fa";

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

  const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

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
              Aleph has been an invaluable partner in our growth journey. Their expertise, 
              professionalism, and commitment to excellence have helped us achieve remarkable results.
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

export default WhyChooseUs
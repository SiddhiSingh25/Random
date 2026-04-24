"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: "01",
    question: "What services does Unmatched Consultancy provide?",
    answer: "We offer expert services in Taxation, Accounting & Bookkeeping, Audit & Assurance, Business Advisory, and Regulatory Compliance tailored for businesses and individuals.",
  },
  {
    id: "02",
    question: "How can I get started with your consultancy?",
    answer: "Simply contact us via our website or call our office. We provide personalized consultations to understand your needs and suggest the best financial solutions.",
  },
  {
    id: "03",
    question: "Are your services suitable for small businesses?",
    answer: "Absolutely! We specialize in helping startups, SMEs, and growing enterprises optimize their financial processes and ensure compliance.",
  },
  {
    id: "04",
    question: "Do you offer remote or online consultations?",
    answer: "Yes, we provide both in-person and remote consultations to accommodate clients locally and globally.",
  },
  {
    id: "05",
    question: "Can I customize your services for my business?",
    answer: "Definitely! We tailor our services to your business requirements and goals.",
  },
];

const FaqSection = () => {
  const [activeId, setActiveId] = useState<string | null>("01");

  return (
    <section className="relative bg-[#0F172A] py-24 px-6 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-600/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-16 text-center lg:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-secondary-600 font-bold tracking-[0.2em] uppercase text-xs"
          >
            Common Inquiries
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mt-4"
          >
            Knowledge <span className="text-slate-500 font-light italic">Base.</span>
          </motion.h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* FAQ List */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq) => (
              <motion.div
                key={faq.id}
                layout
                onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 ${
                  activeId === faq.id 
                    ? "bg-white/[0.08] border-white/10 shadow-2xl" 
                    : "bg-transparent border-white/5 hover:bg-white/[0.03]"
                } border`}
              >
                {/* Active Indicator Bar */}
                <AnimatePresence>
                  {activeId === faq.id && (
                    <motion.div 
                      layoutId="activeBar"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-600 shadow-[0_0_15px_#bc8737]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <span className={`text-sm font-mono transition-colors duration-500 ${
                        activeId === faq.id ? "text-secondary-600" : "text-slate-600"
                      }`}>
                        {faq.id}
                      </span>
                      <h3 className={`text-lg md:text-xl font-medium transition-colors duration-500 ${
                        activeId === faq.id ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    
                    <motion.div 
                      animate={{ rotate: activeId === faq.id ? 45 : 0 }}
                      className={`shrink-0 h-6 w-6 flex items-center justify-center rounded-full border transition-colors ${
                        activeId === faq.id ? "border-secondary-600 text-secondary-600" : "border-slate-700 text-slate-500"
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 1v10M1 6h10"/></svg>
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {activeId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                        animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                        exit={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="mt-6 text-slate-400 leading-relaxed text-base pl-[52px]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Support Card (Right Side) */}
          <div className="lg:col-span-5">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="sticky top-24 rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent"
            >
              <div className="bg-[#1e293b]/50 backdrop-blur-2xl rounded-[calc(1.5rem-1px)] p-8 border border-white/5">
                <div className="h-12 w-12 bg-secondary-600/20 rounded-xl flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#bc8737" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Still need help?</h4>
                <p className="text-slate-400 mb-8">Our expert consultants are ready to assist you with your specific business needs.</p>
                
                <div className="space-y-4">
                  <button className="w-full py-4 rounded-xl bg-secondary-600 hover:bg-secondary-500 text-white font-bold transition-all transform hover:-translate-y-1">
                    Book a Free Consultation
                  </button>
                  <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold transition-all">
                    Email Support
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-[#1e293b] bg-slate-700" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500">Joined by 500+ businesses</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
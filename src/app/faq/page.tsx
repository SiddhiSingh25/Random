"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaCertificate,
  FaFileAlt,
  FaGlobe,
  FaIndustry,
  FaChevronDown,
  FaArrowRight,
  FaHeadset,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdVerified, MdAssignment } from "react-icons/md";
import SimpleHeading from "@/components/common/SimpleHeading";


/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface FAQ {
  id: string;
  question: string;
  answer: string;
}
interface Tab {
  id: string;
  label: string;
  icon: React.ElementType;
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const tabs: Tab[] = [
  { id: "bis", label: "BIS Certification", icon: FaCertificate },
  { id: "crs", label: "CRS Registration", icon: MdAssignment },
  { id: "isi", label: "ISI Mark", icon: MdVerified },
  { id: "fmcs", label: "FMCS Approval", icon: FaGlobe },
  { id: "documentation", label: "Documentation", icon: FaFileAlt },
  { id: "process", label: "Process & Timeline", icon: FaIndustry },
  { id: "last", label: "Process & Timeline", icon: FaIndustry },
];

const faqData: Record<string, FAQ[]> = {
  bis: [
    { id: "b1", question: "What is BIS Certification and why is it mandatory?", answer: "BIS (Bureau of Indian Standards) Certification ensures that products conform to Indian national standards. It is mandatory for a wide range of products sold in India under the BIS Act 2016, protecting consumers and regulating market quality." },
    { id: "b2", question: "Which products require compulsory BIS Certification?", answer: "Products under the Compulsory Registration Scheme (CRS), ISI Mark Scheme, and other BIS-notified categories require mandatory certification. This includes electronics, electrical appliances, cement, steel, chemicals, and more." },
    { id: "b3", question: "How long does the BIS Certification process take?", answer: "Typically 3–6 months depending on the product category, testing requirements, and completeness of documentation. Our team expedites the process through proactive follow-ups with BIS authorities." },
    { id: "b4", question: "Can foreign manufacturers apply for BIS Certification?", answer: "Yes. Foreign manufacturers can obtain BIS certification through the Foreign Manufacturers Certification Scheme (FMCS). Eminence Global Compliance Group provides end-to-end FMCS support." },
    { id: "b5", question: "What happens if a product is sold without BIS Certification?", answer: "Selling notified products without BIS certification is a legal offence under the BIS Act 2016, attracting penalties, product seizure, and prosecution. Compliance is essential before market entry." },
  ],
  crs: [
    { id: "c1", question: "What is CRS Registration under BIS?", answer: "CRS (Compulsory Registration Scheme) is a self-declaration-based BIS scheme for electronics and IT goods. Manufacturers must register their products with BIS before selling in India." },
    { id: "c2", question: "Which products fall under the CRS scheme?", answer: "CRS covers products like mobile phones, laptops, tablets, LED lights, power banks, smart watches, set-top boxes, and other notified electronic items listed under IS standards." },
    { id: "c3", question: "What documents are required for CRS Registration?", answer: "Key documents include product test reports from a BIS-recognised laboratory, a factory declaration, product specifications, manufacturing details, and authorised signatory documents." },
    { id: "c4", question: "How long is CRS Registration valid?", answer: "CRS Registration is valid for 2 years and must be renewed before expiry. Our team provides timely renewal reminders and handles the renewal process on your behalf." },
    { id: "c5", question: "Can I use an existing test report for CRS Registration?", answer: "Yes, if the test report is from a BIS-recognised lab, is within the validity period, and covers the relevant IS standard. Our experts verify report eligibility before submission." },
  ],
  isi: [
    { id: "i1", question: "What is the ISI Mark and who grants it?", answer: "The ISI Mark is a certification mark issued by BIS confirming that a product meets the relevant Indian Standard. It is one of the most recognised quality marks in India." },
    { id: "i2", question: "Is ISI Mark mandatory for all products?", answer: "ISI Mark is compulsory for products listed under Schedule II of the BIS Act — including cement, steel, LPG cylinders, packaged drinking water, electrical goods, and more." },
    { id: "i3", question: "What is the ISI Mark licence validity?", answer: "An ISI Mark licence is typically granted for 1–2 years and is subject to periodic surveillance audits by BIS. Our team manages surveillance scheduling and compliance." },
    { id: "i4", question: "What are the key steps to obtain an ISI Mark licence?", answer: "Steps include: application submission, factory inspection by BIS officials, product sample testing in BIS-recognised labs, grant of licence, and ongoing compliance with BIS standards." },
    { id: "i5", question: "Can an ISI Mark licence be suspended or cancelled?", answer: "Yes. BIS can suspend or cancel a licence if the manufacturer fails to comply with standards, refuses inspections, or provides false information. Maintaining compliance is critical." },
  ],
  fmcs: [
    { id: "f1", question: "What is the FMCS scheme?", answer: "FMCS (Foreign Manufacturers Certification Scheme) allows overseas manufacturers to obtain BIS certification for products exported to India. It is an extension of the ISI Mark scheme for foreign entities." },
    { id: "f2", question: "Which countries' manufacturers can apply under FMCS?", answer: "Any foreign manufacturer regardless of country can apply. We regularly assist manufacturers from China, Taiwan, South Korea, Germany, UAE, Vietnam, and other countries." },
    { id: "f3", question: "Is a local Indian representative mandatory for FMCS?", answer: "Yes. An Authorised Indian Representative (AIR) is mandatory for FMCS applications. Eminence Global Compliance Group can serve as your AIR, managing all BIS correspondence on your behalf." },
    { id: "f4", question: "What is the role of the Authorised Indian Representative?", answer: "The AIR acts as the legal liaison between the foreign manufacturer and BIS. They submit applications, coordinate inspections, respond to BIS queries, and manage licence compliance." },
    { id: "f5", question: "How long does FMCS approval take?", answer: "FMCS typically takes 6–12 months, involving document review, factory audit abroad by BIS officers, lab testing, and final grant. Our team tracks every milestone proactively." },
  ],
  documentation: [
    { id: "d1", question: "What technical documentation is required for BIS applications?", answer: "Typical documents include product specifications, circuit diagrams, test reports from BIS-recognised labs, quality manuals, factory layout, production process details, and authorised signatory credentials." },
    { id: "d2", question: "Do you assist with documentation preparation?", answer: "Yes. Our technical team provides comprehensive documentation support — from drafting quality manuals to coordinating with testing laboratories and preparing application dossiers." },
    { id: "d3", question: "What if my test reports are from a non-BIS lab?", answer: "BIS only accepts test reports from its recognised and empanelled laboratories. We help identify the correct lab for your product category and coordinate sample submission." },
    { id: "d4", question: "Can documentation be submitted in languages other than English?", answer: "All BIS applications must be submitted in English. Documents in other languages require certified translation. Our team manages this for international clients." },
    { id: "d5", question: "How do you ensure document accuracy before submission?", answer: "Our compliance experts conduct a thorough pre-submission audit of all documents, cross-checking against BIS guidelines to eliminate errors that could delay certification." },
  ],
  process: [
    { id: "pr1", question: "What is the overall certification process followed by Eminence?", answer: "Our process: (1) Initial consultation & product assessment, (2) Scheme identification, (3) Documentation preparation, (4) Lab coordination & testing, (5) Application filing, (6) BIS liaison & follow-up, (7) Certification grant & post-compliance support." },
    { id: "pr2", question: "How do I get started with Eminence Global Compliance Group?", answer: "Contact us via email or phone for a free initial consultation. Our experts will assess your product, identify the applicable BIS scheme, and provide a clear roadmap and timeline." },
    { id: "pr3", question: "Do you provide post-certification compliance support?", answer: "Yes. We provide ongoing compliance support including renewal management, surveillance audit coordination, amendment filings, and regulatory update monitoring." },
    { id: "pr4", question: "What are your consultation fees?", answer: "Fees vary based on product category, scheme type, and scope of work. Contact us for a detailed, transparent quotation. Initial consultation is complimentary." },
    { id: "pr5", question: "Do you handle multiple product certifications simultaneously?", answer: "Yes. We manage multi-product and multi-scheme certification projects for large manufacturers, with dedicated compliance managers assigned to each client." },
  ],

  last: [
    { id: "pr1", question: "What is the overall certification process followed by Eminence?", answer: "Our process: (1) Initial consultation & product assessment, (2) Scheme identification, (3) Documentation preparation, (4) Lab coordination & testing, (5) Application filing, (6) BIS liaison & follow-up, (7) Certification grant & post-compliance support." },
    { id: "pr2", question: "How do I get started with Eminence Global Compliance Group?", answer: "Contact us via email or phone for a free initial consultation. Our experts will assess your product, identify the applicable BIS scheme, and provide a clear roadmap and timeline." },
    { id: "pr3", question: "Do you provide post-certification compliance support?", answer: "Yes. We provide ongoing compliance support including renewal management, surveillance audit coordination, amendment filings, and regulatory update monitoring." },
    { id: "pr4", question: "What are your consultation fees?", answer: "Fees vary based on product category, scheme type, and scope of work. Contact us for a detailed, transparent quotation. Initial consultation is complimentary." },
    { id: "pr5", question: "Do you handle multiple product certifications simultaneously?", answer: "Yes. We manage multi-product and multi-scheme certification projects for large manufacturers, with dedicated compliance managers assigned to each client." },
  ],
};

/* ─────────────────────────────────────────────
   Accordion Item
───────────────────────────────────────────── */
const AccordionItem = ({ q, idx }: { q: FAQ; idx: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: open ? "#f0f4f9" : "#ffffff",
        border: open ? "1px solid rgba(32,56,92,0.2)" : "1px solid rgba(32,56,92,0.08)",
        boxShadow: open ? "0 4px 20px rgba(32,56,92,0.08)" : "0 1px 4px rgba(32,56,92,0.04)",
      }}
    >
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full px-5 py-4 flex items-center justify-between text-left gap-4"
      >
        <div className="flex items-center gap-3">
          {/* Index badge */}
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 transition-all duration-200 family-bold"
            style={{
              background: open ? "#20385c" : "rgba(32,56,92,0.08)",
              color: open ? "#ffffff" : "#20385c",
            }}
          >
            {idx + 1}
          </span>
          <span className="text-sm family-regular" style={{ color: "#20385c" }}>
            {q.question}
          </span>
        </div>
        <FaChevronDown
          size={11}
          className="flex-shrink-0 transition-transform duration-300"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            color: open ? "#bc8737" : "#20385c",
            opacity: open ? 1 : 0.4,
          }}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "240px" : "0px", opacity: open ? 1 : 0 }}
      >
        <div
          className="mx-5 mb-5 ml-14 pl-4 py-3 rounded-lg"
          style={{
            borderLeft: "2px solid #bc8737",
            background: "rgba(188,135,55,0.04)",
          }}
        >
          <p className="text-sm leading-relaxed family-regular" style={{ color: "#4a5568" }}>
            {q.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("bis");
  const currentTab = tabs.find((t) => t.id === activeTab)!;
  const ActiveIcon = currentTab.icon;

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .faq-item { animation: fadeUp 0.3s ease both; }
        .tab-scroll::-webkit-scrollbar { display: none; }
        .tab-scroll { scrollbar-width: none; }
      `}</style>

      <div className="min-h-screen pt-10" style={{ background: "#f4f6f9" }}>

        {/* ══════════════════════
            PAGE HERO HEADER
        ══════════════════════ */}
        {/* <Heading
  label="FAQs"
  title="Frequently Asked Questions"
  description="Find clear answers to the most common queries related to BIS certification, regulatory approvals, documentation, and global compliance procedures."
/> */}

        <SimpleHeading badgeText="FAQs"
          title="Frequently Asked Questions" />

        {/* ══════════════════════
            MAIN CONTENT
        ══════════════════════ */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

          {/* ── MOBILE: horizontal tab pills ── */}
          <div className="lg:hidden overflow-x-auto pb-2 mb-6 -mx-4 px-4 tab-scroll">
            <div className="flex gap-2 min-w-max">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] family-semibold tracking-wide transition-all duration-200 whitespace-nowrap"
                  style={
                    activeTab === tab.id
                      ? { background: "#20385c", color: "#ffffff" }
                      : { background: "#e8edf4", color: "#4a5568" }
                  }
                >
                  <tab.icon size={10} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── MOBILE: active section label ── */}
          <div className="lg:hidden flex items-center gap-2 mb-5">
            <div className="w-[3px] h-5 rounded-full flex-shrink-0" style={{ background: "#20385c" }} />
            <div className="flex items-center gap-2">
              <ActiveIcon size={13} style={{ color: "#20385c" }} />
              <p className="text-[11px] family-bold tracking-[0.18em] uppercase" style={{ color: "#20385c", opacity: 0.6 }}>
                {currentTab.label}
              </p>
            </div>
          </div>

          {/* ── Layout ── */}
          <div className="flex flex-col lg:flex-row gap-8">

            {/* ── Sidebar (desktop) ── */}
            <aside className="hidden lg:block w-60 flex-shrink-0">
              <div className="sticky top-6">

                {/* Sidebar card */}
                <div
                  className="rounded-2xl overflow-hidden mb-5"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(32,56,92,0.1)",
                    boxShadow: "0 2px 16px rgba(32,56,92,0.06)",
                  }}
                >
                  {/* Card header */}
                  <div
                    className="px-4 py-3"
                    style={{
                      background: "linear-gradient(135deg, #1a2f4e, #20385c)",
                      borderBottom: "1px solid rgba(188,135,55,0.2)",
                    }}
                  >
                    <p className="text-[10px] family-bold tracking-[0.2em] uppercase" style={{ color: "rgba(188,135,55,0.9)" }}>
                      Service Categories
                    </p>
                  </div>

                  {/* Nav items */}
                  <div className="p-2">
                    {tabs.map((tab) => {
                      const isActive = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl mb-0.5 text-left transition-all duration-200"
                          style={
                            isActive
                              ? { background: "rgba(32,56,92,0.07)", border: "1px solid rgba(32,56,92,0.15)" }
                              : { background: "transparent", border: "1px solid transparent" }
                          }
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200"
                              style={{
                                background: isActive ? "#20385c" : "rgba(32,56,92,0.06)",
                              }}
                            >
                              <tab.icon size={11} style={{ color: isActive ? "#ffffff" : "#20385c", opacity: isActive ? 1 : 0.5 }} />
                            </div>
                            <span
                              className="text-[12.5px] family-regular"
                              style={{ color: isActive ? "#20385c" : "#6b7280" }}
                            >
                              {tab.label}
                            </span>
                          </div>
                          <FaArrowRight
                            size={9}
                            style={{ color: isActive ? "#bc8737" : "rgba(32,56,92,0.2)" }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>



              </div>
            </aside>

            {/* ── FAQ List ── */}
            <div className="flex-1 min-w-0">

              {/* Section title */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#20385c" }}
                >
                  <ActiveIcon size={14} style={{ color: "#ffffff" }} />
                </div>
                <div>
                  <h2 className="family-semibold text-base" style={{ color: "#20385c" }}>
                    {currentTab.label}
                  </h2>
                  <p className="family-regular text-xs" style={{ color: "#6b7280" }}>
                    {faqData[activeTab].length} questions answered
                  </p>
                </div>
                <div
                  className="ml-auto h-[1px] flex-1 max-w-xs"
                  style={{ background: "linear-gradient(90deg, rgba(32,56,92,0.15), transparent)" }}
                />
              </div>

              {/* Accordion list */}
              <div className="space-y-2.5">
                {faqData[activeTab].map((q, idx) => (
                  <div
                    key={q.id}
                    className="faq-item"
                    style={{ animationDelay: `${idx * 0.04}s` }}
                  >
                    <AccordionItem q={q} idx={idx} />
                  </div>
                ))}
              </div>

              {/* Mobile contact support */}
              <div
                className="lg:hidden mt-8 pt-6 text-center rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, #1a2f4e, #20385c)",
                  border: "1px solid rgba(188,135,55,0.2)",
                }}
              >
                <FaHeadset size={22} className="mx-auto mb-3" style={{ color: "#bc8737" }} />
                <p className="family-semibold text-sm mb-1" style={{ color: "#f5f0e8" }}>
                  Still have questions?
                </p>
                <p className="family-regular text-xs mb-4" style={{ color: "rgba(210,205,195,0.65)" }}>
                  Speak directly with a compliance consultant.
                </p>
                <Link href="/contact">
                  <span
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs family-semibold cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #bc8737, #f0c060)",
                      color: "#1a2f4e",
                    }}
                  >
                    <FaPhoneAlt size={10} />
                    Contact Our Team
                  </span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
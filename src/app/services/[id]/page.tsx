// // app/services/[id]/page.tsx
// "use client";
// import { useParams } from "next/navigation";

// import { motion } from "framer-motion";
// import { ServiceContent } from "@/data/services-data";

// export default function ServiceDetailScreen() {
//   const { id } = useParams();
  
//   // Find data in ServiceContent, fallback to a default or 404 if not found

//   const content = ServiceContent[id as keyof typeof ServiceContent];


//   if (!content) {
//     return <div className="py-20 text-center">Service details coming soon...</div>;
//   }

//   return (
//     <main className="min-h-screen bg-white">
//       {/* Dynamic Hero Screen */}
//       <section className="bg-primary-900 text-white py-24 px-6 relative overflow-hidden">
//         <div className="max-w-6xl mx-auto relative z-10">
//           <motion.span initial={{opacity:0}} animate={{opacity:1}} className="text-secondary-500 font-bold tracking-widest uppercase text-sm">
//             {content.subtitle}
//           </motion.span>
//           <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} className="text-4xl md:text-6xl font-bold mt-4">
//             {content.title}
//           </motion.h1>
//         </div>
//         <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-500/10 skew-x-12 transform translate-x-20" />
//       </section>

//       <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
//         {/* Left: Detailed Info */}
//         <div className="lg:col-span-2 space-y-10">
//           <div>
//             <h2 className="text-2xl font-bold text-primary-900 mb-4">Overview</h2>
//             <p className="text-gray-600 text-lg leading-relaxed">{content.description}</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="bg-gray-50 p-6 rounded-xl">
//               <h3 className="font-bold text-primary-800 mb-4 uppercase text-xs tracking-widest">Key Features</h3>
//               <ul className="space-y-3">
//                 {content.features.map(f => (
//                   <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
//                     <span className="text-secondary-600 mt-1">✔</span> {f}
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
//               <h3 className="font-bold text-primary-800 mb-4 uppercase text-xs tracking-widest">Quick Stats</h3>
//               {content.stats.map(s=> (
//                 <div key={s.label} className="flex justify-between py-2 border-b border-primary-100 last:border-0">
//                   <span className="text-gray-500 text-sm">{s.label}</span>
//                   <span className="font-bold text-primary-900 text-sm">{s.value}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right: Steps Sidebar */}
//         <aside>
//           <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
//             <h3 className="text-xl font-bold text-primary-900 mb-6">Registration Process</h3>
//             <div className="space-y-6">
//               {content.process.map((step , idx) => (
//                 <div key={idx} className="flex gap-4 relative">
//                   {idx !== content.process.length - 1 && (
//                     <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-100" />
//                   )}
//                   <div className="w-8 h-8 rounded-full bg-secondary-500 text-primary-900 flex items-center justify-center font-bold text-sm z-10 shrink-0">
//                     {idx + 1}
//                   </div>
//                   <p className="text-sm text-gray-600 font-semibold pt-1">{step}</p>
//                 </div>
//               ))}
//             </div>
//             <button className="w-full mt-10 bg-primary-900 text-white font-bold py-4 rounded-xl hover:bg-secondary-600 transition-colors">
//               Apply Now
//             </button>
//           </div>
//         </aside>
//       </section>
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import { BiCheckCircle, BiChevronDown, BiCross, BiHome, BiMailSend } from "react-icons/bi";
import { BsArrowRight, BsChevronBarRight, BsMailbox } from "react-icons/bs";
import {
  FaHome,
  FaPhone,
  FaEnvelope,
  FaChevronRight,
  FaChevronDown,
  FaRegCheckCircle,
  FaClock,
  FaBuilding,
  FaRedo,
  FaTachometerAlt,
  FaExclamationCircle,
  FaFileAlt,
  FaBars,
  FaTimes,
  FaCommentDots,
} from "react-icons/fa";
import { FiAlertCircle, FiFileText, FiMessageCircle } from "react-icons/fi";

// ─────────────────────────────────────────────────────────────
// TYPES  —  matches your future API shape exactly
// ─────────────────────────────────────────────────────────────
interface GlanceItem {
  label: string;
  value: string;
  badge?: "amber" | "green";
}

interface MetaRow {
  label: string;
  value: string;
  badge?: "green" | "amber";
}

interface ProcessStep {
  step: number;
  icon: string;
  title: string;
  description: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface DocGroup {
  groupLabel: string;
  items: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceDetail {
  id: string;
  category: string;
  title: string;
  shortDescription: string;
  glance: GlanceItem[];
  overview: {
    paragraphs: string[];
    whyItMatters: string[];
    industries: string[];
  };
  certMeta: MetaRow[];
  stats: { value: string; label: string }[];
  processSteps: ProcessStep[];
  benefits: Benefit[];
  documents: DocGroup[];
  documentsNote: string;
  faqs: FAQ[];
  cta: {
    title: string;
    description: string;
    email: string;
    phone: string;
    whatsapp: string;
  };
}

// ─────────────────────────────────────────────────────────────
// MOCK DATA  —  swap with: const service = await fetch(`/api/services/${id}`)
// ─────────────────────────────────────────────────────────────
const SERVICE_DATA: ServiceDetail = {
  id: "bis-certification",
  category: "BIS / ISI Mark",
  title: "BIS Certification for\nForeign Manufacturers",
  shortDescription:
    "Enable your products to legally enter the Indian market. Our experts manage the entire Bureau of Indian Standards approval — document preparation, lab testing, factory audit, and licence grant.",

  glance: [
    { label: "Authority", value: "Bureau of Indian Standards" },
    { label: "Timeline", value: "6–12 Weeks", badge: "amber" },
    { label: "Validity", value: "1–2 Years (Renewable)" },
    { label: "Scheme", value: "Scheme I / FMCS" },
    { label: "Mandatory?", value: "Yes — Most product types", badge: "green" },
    { label: "Complexity", value: "Moderate–High", badge: "amber" },
  ],

  overview: {
    paragraphs: [
      "The Bureau of Indian Standards (BIS) is India's national standards body under the Ministry of Consumer Affairs. BIS Certification — commonly known as the ISI Mark — is a mandatory product quality and safety mark required for hundreds of product categories before they can be manufactured, imported, or sold in India.",
      "For foreign manufacturers, obtaining BIS certification means your products are verified against Indian Standards (IS), your manufacturing facility has passed a BIS audit, and you are authorized to affix the ISI Mark. Without this, Indian customs authorities can legally block your shipments.",
    ],
    whyItMatters: [
      "Legally required for 100+ product categories under IS standards",
      "Builds immediate trust with Indian B2B buyers and retail chains",
      "Prevents costly shipment seizures at Indian ports of entry",
      "Demonstrates product quality compliance to Indian consumers",
      "Prerequisite for listing on government procurement portals",
    ],
    industries: [
      "Electronics & IT",
      "Electrical Equipment",
      "Steel & Metals",
      "Cement & Construction",
      "Chemicals & Fertilizers",
      "Food & Packaging",
      "Automotive Parts",
      "Textiles",
    ],
  },

  certMeta: [
    { label: "Applicable Law", value: "BIS Act, 2016" },
    { label: "Issuing Body", value: "Bureau of Indian Standards" },
    { label: "License Type", value: "Product Certification" },
    { label: "Validity Period", value: "1–2 Years" },
    { label: "Renewal", value: "Annual Renewal" },
    { label: "Typical Timeline", value: "6–12 Weeks", badge: "amber" },
    { label: "Factory Audit", value: "Required", badge: "green" },
    { label: "Testing Required", value: "Yes — BIS Lab", badge: "green" },
  ],

  stats: [
    { value: "500+", label: "Certs Obtained" },
    { value: "98%", label: "Success Rate" },
    { value: "12+", label: "Years Experience" },
    { value: "40+", label: "Countries Served" },
  ],

  processSteps: [
    {
      step: 1,
      icon: "📋",
      title: "Initial Consultation & Product Assessment",
      description:
        "We review your product category, applicable IS standard, and determine the exact BIS scheme. A complete gap analysis is provided before any fees are committed.",
    },
    {
      step: 2,
      icon: "📄",
      title: "Document Preparation & Application Filing",
      description:
        "Our compliance team prepares the complete application package — company documents, product technical files, test reports — and files formally with BIS.",
    },
    {
      step: 3,
      icon: "🔬",
      title: "Product Testing at BIS-Approved Lab",
      description:
        "Product samples are submitted to a BIS-recognized laboratory. We coordinate sample dispatch, track testing progress, and handle queries raised by the lab.",
    },
    {
      step: 4,
      icon: "🏭",
      title: "Factory Audit Preparation & Coordination",
      description:
        "BIS-appointed auditors inspect your manufacturing facility. We prepare a detailed factory readiness report and guide your team through every audit checkpoint in advance.",
    },
    {
      step: 5,
      icon: "✅",
      title: "License Grant & ISI Mark Authorization",
      description:
        "Upon successful audit and test clearance, BIS issues your license. You are now legally authorized to affix the ISI Mark and export to or manufacture in India.",
    },
    {
      step: 6,
      icon: "🔄",
      title: "Post-Certification Compliance & Renewal",
      description:
        "We manage your annual renewal, surveillance audits, and any product change notifications — ensuring continuous compliance without disruption to your supply chain.",
    },
  ],

  benefits: [
    {
      icon: "🇮🇳",
      title: "Legal Market Access",
      description:
        "Mandatory requirement for importing or selling products in India. Avoid rejection at customs and government penalties.",
    },
    {
      icon: "🛡️",
      title: "Brand Trust & Credibility",
      description:
        "The ISI Mark is India's most recognized quality symbol, instantly signaling reliability to distributors and end consumers.",
    },
    {
      icon: "📈",
      title: "Competitive Edge",
      description:
        "Stand out in a crowded market. Many Indian buyers and B2B procurement teams mandate BIS-certified suppliers.",
    },
    {
      icon: "🏛️",
      title: "Government Tender Eligibility",
      description:
        "Access to large-scale public procurement where BIS certification is a minimum eligibility requirement for listed categories.",
    },
    {
      icon: "⚡",
      title: "Faster Port Clearance",
      description:
        "Pre-certified products pass through Indian customs significantly faster, reducing warehousing delays and demurrage costs.",
    },
    {
      icon: "🌏",
      title: "Long-Term Market Presence",
      description:
        "Renewable license ensures sustained operations and builds a foundation for long-term expansion in one of the world's largest consumer markets.",
    },
  ],

  documents: [
    {
      groupLabel: "Company & Entity Documents",
      items: [
        "Certificate of Incorporation / Registration",
        "Memorandum & Articles of Association",
        "Authorized Signatory Details & POA",
        "Company Profile & Factory Layout Plan",
        "ISO 9001 Certificate (if available)",
      ],
    },
    {
      groupLabel: "Technical & Product Documents",
      items: [
        "Product Technical Specifications / Datasheet",
        "Product Test Reports (from NABL / BIS labs)",
        "Manufacturing Process Flow Chart",
        "Quality Control Plan & Inspection Records",
        "Sample Products (for BIS lab testing)",
      ],
    },
  ],

  documentsNote:
    "Document requirements may vary based on your specific product category and applicable Indian Standard. Our consultants will provide a tailored checklist after the initial assessment call.",

  faqs: [
    {
      question: "Is BIS certification mandatory for all products imported into India?",
      answer:
        "No — BIS certification is mandatory for specific product categories notified by BIS and the Indian government. These include electronics, electrical equipment, steel, cement, automotive components, and many more. We assess your specific product against the mandatory list during the initial consultation.",
    },
    {
      question: "How long does the BIS certification process take for foreign manufacturers?",
      answer:
        "Typically 6–12 weeks from complete document submission to license receipt. The timeline depends on the product category, lab testing turnaround, factory audit scheduling, and BIS office processing time. Complex or multi-variant products may take longer.",
    },
    {
      question: "Do I need to physically be present in India for the process?",
      answer:
        "No. Eminence Global acts as your authorized Indian representative. We handle all in-country activities including BIS liaison, lab coordination, and audit preparation. You only need to ensure factory readiness at your end and provide sample products.",
    },
    {
      question: "What happens during the BIS factory audit?",
      answer:
        "BIS-appointed auditors visit your manufacturing facility to verify that your production process, quality control systems, and raw materials meet Indian Standard requirements. We prepare a detailed pre-audit readiness guide and conduct mock checks to ensure your team is prepared.",
    },
    {
      question: "Can a single BIS license cover multiple product models or variants?",
      answer:
        "In many cases yes — if the variants fall under the same IS standard and product category. However, significant differences in electrical ratings, material composition, or design may require separate applications. We advise on the most cost-effective approach during assessment.",
    },
    {
      question: "What are the consequences of selling products in India without BIS certification?",
      answer:
        "Selling BIS-notified products without certification in India can result in customs seizure of your shipment, product recall mandates, fines up to ₹2 lakh or 2x product value (whichever is higher), and potential criminal liability under the BIS Act, 2016.",
    },
  ],

  cta: {
    title: "Ready to Enter the Indian Market?",
    description:
      "Talk to a BIS specialist today. We'll assess your product, outline the exact pathway, and give you a clear timeline — at zero commitment.",
    email: "info@eminencecompliance.com",
    phone: "+91 74285 55852",
    whatsapp: "917428555852",
  },
};

// ─────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────

function Badge({ type }: { type: "amber" | "green" }) {
  if (type === "green")
    return (
      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
        Required
      </span>
    );
  return (
    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
      Moderate
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[11px] font-bold tracking-[0.15em] uppercase text-[#c9a94e] mb-2">
      {children}
    </span>
  );
}

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────
function Hero({ service }: { service: ServiceDetail }) {
  return (
    <section className="relative bg-[#0d1f3c] overflow-hidden pt-16 pb-20">
      {/* decorative rings */}
      <div className="pointer-events-none absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full border border-[#c9a94e]/10" />
      <div className="pointer-events-none absolute -top-12 right-12 w-[240px] h-[240px] rounded-full border border-[#c9a94e]/7" />
      {/* dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #c9a94e 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          maskImage: "radial-gradient(ellipse 60% 100% at 80% 50%, black 10%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 100% at 80% 50%, black 10%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11.5px] text-white/40 mb-7">
          <BiHome size={11} />
          <a href="#" className="hover:text-[#c9a94e] transition-colors">Home</a>
          <FaChevronRight size={11} className="text-white/20" />
          <a href="#" className="hover:text-[#c9a94e] transition-colors">Services</a>
          <BsChevronBarRight size={11} className="text-white/20" />
          <span className="text-white/60">BIS Certification</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-10 items-start">
          {/* Left */}
          <div>
            <span className="inline-block text-[10.5px] font-bold tracking-[0.15em] uppercase text-[#c9a94e] border border-[#c9a94e]/30 bg-[#c9a94e]/12 px-3.5 py-1.5 rounded-full mb-5">
              {service.category}
            </span>
            <h1 className="font-serif text-white font-bold text-4xl md:text-[46px] leading-[1.15] mb-3 whitespace-pre-line">
              {service.title}
            </h1>
            <div className="w-10 h-[3px] bg-gradient-to-r from-[#c9a94e] to-transparent rounded mb-5" />
            <p className="text-white/60 text-[15.5px] leading-[1.8] max-w-[520px] mb-8">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 bg-[#c9a94e] hover:bg-[#d4b660] text-[#0d1f3c] font-bold text-[13px] px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 shadow-lg shadow-[#c9a94e]/25"
              >
                <BsArrowRight size={14} />
                Get Free Consultation
              </a>
              <a
                href="#process"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white border border-white/20 hover:border-white/40 text-[13px] font-semibold px-6 py-3.5 rounded-full transition-all"
              >
                View Process
              </a>
            </div>
            {/* live badge */}
            <div className="flex items-center gap-2 mt-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/35 text-[12px]">Experts available now</span>
            </div>
          </div>

          {/* Right: glance card */}
          <div className="bg-white/6 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#c9a94e] pb-3 mb-2 border-b border-white/8">
              At a Glance
            </p>
            {service.glance.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0 last:pb-0 gap-3"
              >
                <span className="text-white/40 text-[12px]">{row.label}</span>
                {row.badge ? (
                  <span
                    className={`text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full ${
                      row.badge === "green"
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25"
                        : "bg-[#c9a94e]/15 text-[#c9a94e] border border-[#c9a94e]/25"
                    }`}
                  >
                    {row.value}
                  </span>
                ) : (
                  <span className="text-white text-[12.5px] font-semibold text-right">{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// TRUST BAR
// ─────────────────────────────────────────────────────────────
function TrustBar() {
  const items = [
    { icon: "✅", text: "500+ Certifications Completed" },
    { icon: "🏆", text: "98% First-Time Success Rate" },
    { icon: "🌍", text: "Clients Across 40+ Countries" },
    { icon: "⏱️", text: "12+ Years of Expertise" },
  ];
  return (
    <div className="bg-[#f8f9fb] border-b border-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-center flex-wrap gap-x-8 gap-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-[12.5px] font-semibold text-gray-500">
            <span>{item.icon}</span>
            {item.text}
            {i < items.length - 1 && <span className="hidden sm:block ml-8 w-px h-4 bg-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// OVERVIEW
// ─────────────────────────────────────────────────────────────
function Overview({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">

          {/* Left */}
          <div>
            <SectionLabel>Service Overview</SectionLabel>
            <h2 className="font-serif text-[#0d1f3c] text-3xl md:text-4xl font-semibold mb-6">
              What is BIS Certification?
            </h2>
            {service.overview.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-500 text-[15px] leading-[1.85] mb-4">{p}</p>
            ))}

            <p className="text-[12px] font-bold tracking-[0.12em] uppercase text-[#0d1f3c] mt-7 mb-4">
              Why this certification matters
            </p>
            <ul className="space-y-3">
              {service.overview.whyItMatters.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-gray-500 leading-relaxed">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-[#faf5e8] border border-[#e8d49a] flex items-center justify-center flex-shrink-0">
                    <BiCheckCircle size={11} className="text-[#c9a94e]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 mt-8 mb-3">
              Applicable Industries
            </p>
            <div className="flex flex-wrap gap-2">
              {service.overview.industries.map((ind) => (
                <span
                  key={ind}
                  className="text-[12px] font-semibold text-gray-500 bg-[#f8f9fb] border border-gray-200 px-3.5 py-1.5 rounded-full hover:border-[#e8d49a] hover:text-[#0d1f3c] hover:bg-[#faf5e8] transition-all cursor-default"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Right: sticky cert card */}
          <div className="lg:sticky lg:top-24 space-y-4">
            {/* Cert detail card */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <div className="bg-[#0d1f3c] px-6 py-4">
                <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#c9a94e]">
                  Certification Details
                </p>
              </div>
              <div className="divide-y divide-gray-100 bg-white">
                {service.certMeta.map((row) => (
                  <div key={row.label} className="flex items-center justify-between px-6 py-3 gap-3">
                    <span className="text-[12px] text-gray-400">{row.label}</span>
                    {row.badge ? (
                      <span
                        className={`text-[10.5px] font-semibold px-2.5 py-0.5 rounded-full ${
                          row.badge === "green"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-[#faf5e8] text-[#7a5c10] border border-[#e8d49a]"
                        }`}
                      >
                        {row.value}
                      </span>
                    ) : (
                      <span className="text-[13px] font-semibold text-[#0d1f3c]">{row.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-[#faf5e8] border border-[#e8d49a] rounded-2xl p-5">
              <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#c9a94e] mb-4">
                Our Track Record
              </p>
              <div className="grid grid-cols-2 gap-3">
                {service.stats.map((s) => (
                  <div key={s.label} className="text-center py-2">
                    <p className="font-serif text-[28px] font-bold text-[#0d1f3c] leading-none">{s.value}</p>
                    <p className="text-[11px] text-gray-400 mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// PROCESS
// ─────────────────────────────────────────────────────────────
function Process({ service }: { service: ServiceDetail }) {
  return (
    <section id="process" className="relative py-20 bg-[#0d1f3c] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(201,169,78,0.07)_0%,transparent_70%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <SectionLabel>How It Works</SectionLabel>
          <h2 className="font-serif text-white text-3xl md:text-4xl font-semibold mb-3">
            Our Step-by-Step Process
          </h2>
          <p className="text-white/50 text-[15px] max-w-[440px] mx-auto">
            A structured, transparent journey from your first enquiry to receiving your BIS license.
          </p>
        </div>

        {/* Steps — two-column on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-0">
          {service.processSteps.map((step, i) => {
            const isLast = i === service.processSteps.length - 1;
            const isLastInCol = i % 2 === 1;
            return (
              <div key={step.step} className="flex gap-0 items-stretch">
                {/* spine */}
                <div className="flex flex-col items-center mr-5">
                  <div className="w-11 h-11 rounded-full border-2 border-[#c9a94e] bg-[#c9a94e]/12 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="font-serif text-[#c9a94e] text-[16px] font-bold">
                      {String(step.step).padStart(2, "0")}
                    </span>
                  </div>
                  {!isLast && !isLastInCol && (
                    <div className="w-px flex-1 bg-gradient-to-b from-[#c9a94e]/25 to-[#c9a94e]/05 mt-1 mb-1 min-h-[20px]" />
                  )}
                </div>

                {/* content */}
                <div className={`pb-10 flex-1 ${isLast ? "pb-0" : ""}`}>
                  <div className="w-8 h-8 rounded-lg bg-[#c9a94e]/10 border border-[#c9a94e]/20 flex items-center justify-center text-sm mb-2.5">
                    {step.icon}
                  </div>
                  <p className="text-white font-semibold text-[15.5px] mb-1.5">{step.title}</p>
                  <p className="text-white/45 text-[13.5px] leading-[1.75]">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// BENEFITS
// ─────────────────────────────────────────────────────────────
function Benefits({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12">
          <SectionLabel>Why It Matters</SectionLabel>
          <h2 className="font-serif text-[#0d1f3c] text-3xl md:text-4xl font-semibold mb-3">
            Key Benefits of BIS Certification
          </h2>
          <p className="text-gray-400 text-[15px] max-w-[440px] mx-auto">
            More than a legal requirement — it&apos;s your commercial passport to the Indian market.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.benefits.map((b) => (
            <div
              key={b.title}
              className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:border-[#e8d49a] hover:shadow-lg hover:shadow-[#0d1f3c]/8 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c9a94e] to-[#e8d49a] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              {/* corner accent */}
              <div className="absolute top-0 right-0 w-14 h-14 bg-gradient-to-bl from-[#c9a94e]/6 to-transparent rounded-bl-3xl group-hover:from-[#c9a94e]/12 transition-all duration-300" />

              <div className="w-11 h-11 rounded-xl bg-[#faf5e8] border border-[#e8d49a] flex items-center justify-center text-xl mb-5">
                {b.icon}
              </div>
              <h3 className="text-[15px] font-semibold text-[#0d1f3c] mb-2">{b.title}</h3>
              <p className="text-[13px] text-gray-400 leading-[1.7]">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// DOCUMENTS
// ─────────────────────────────────────────────────────────────
function Documents({ service }: { service: ServiceDetail }) {
  return (
    <section className="py-16 bg-[#f8f9fb] border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-11">
          <SectionLabel>Preparation Checklist</SectionLabel>
          <h2 className="font-serif text-[#0d1f3c] text-3xl md:text-4xl font-semibold mb-3">
            Documents Required
          </h2>
          <p className="text-gray-400 text-[14px] max-w-[400px] mx-auto">
            Gather these before your application. Our team will review and complete any gaps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {service.documents.map((group) => (
            <div key={group.groupLabel}>
              <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-3">
                {group.groupLabel}
              </p>
              <div className="space-y-2.5">
                {group.items.map((doc) => (
                  <div
                    key={doc}
                    className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-semibold text-[#0d1f3c] hover:border-[#e8d49a] hover:bg-[#faf5e8] transition-all group"
                  >
                    <FiFileText size={14} className="text-gray-300 group-hover:text-[#c9a94e] transition-colors flex-shrink-0" />
                    <span className="flex-1">{doc}</span>
                    <span className="w-4 h-4 rounded-full bg-[#faf5e8] border border-[#e8d49a] flex items-center justify-center flex-shrink-0">
                      <BiCheckCircle size={9} className="text-[#c9a94e]" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#e8d49a] border-l-[3px] rounded-r-xl px-5 py-4 text-[13px] text-gray-500 flex gap-3 items-start">
          <FiAlertCircle size={15} className="text-[#c9a94e] flex-shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#0d1f3c] font-semibold">Note: </strong>
            {service.documentsNote}
          </p>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────
function FAQ({ service }: { service: ServiceDetail }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-24">
            <SectionLabel>Common Questions</SectionLabel>
            <h2 className="font-serif text-[#0d1f3c] text-3xl md:text-4xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 text-[14.5px] leading-relaxed mb-7">
              Can&apos;t find what you&apos;re looking for? Our experts are happy to answer.
            </p>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-[#0d1f3c] text-white text-[13px] font-semibold px-5 py-3 rounded-full hover:bg-[#162d52] transition-colors"
            >
              <FiMessageCircle size={14} />
              Ask Our Experts
            </a>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-3">
            {service.faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                    isOpen ? "border-[#e8d49a] shadow-md shadow-[#c9a94e]/8" : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-[#f8f9fb] transition-colors"
                  >
                    <span className={`font-semibold text-[14.5px] leading-snug ${isOpen ? "text-[#c9a94e]" : "text-[#0d1f3c]"}`}>
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isOpen ? "bg-[#faf5e8] text-[#c9a94e] rotate-180" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <BiChevronDown size={14} />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-5">
                      <div className="h-px bg-gray-100 mb-3.5" />
                      <p className="text-[13.5px] text-gray-500 leading-[1.8]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// CTA
// ─────────────────────────────────────────────────────────────
function CTA({ service }: { service: ServiceDetail }) {
  return (
    <section id="cta" className="relative py-20 bg-[#0d1f3c] overflow-hidden text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(201,169,78,0.08)_0%,transparent_70%)]" />
      <div className="relative z-10 max-w-2xl mx-auto px-5">
        <SectionLabel>Start Today</SectionLabel>
        <h2 className="font-serif text-white text-3xl md:text-[40px] font-bold mb-4 leading-tight">
          {service.cta.title}
        </h2>
        <p className="text-white/55 text-[15.5px] mb-10 leading-relaxed">{service.cta.description}</p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { icon: <BiMailSend size={18} />, label: "Email Us", value: service.cta.email, href: `mailto:${service.cta.email}` },
            { icon: <FaPhone size={18} />, label: "Call Us", value: service.cta.phone, href: `tel:${service.cta.phone}` },
            {
              icon: <FiMessageCircle size={18} />,
              label: "WhatsApp",
              value: "Chat Now",
              href: `https://wa.me/${service.cta.whatsapp}`,
              highlight: true,
            },
          ].map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={`flex flex-col items-center py-5 px-4 rounded-2xl border transition-all hover:-translate-y-1 group ${
                c.highlight
                  ? "border-[#c9a94e]/30 bg-[#c9a94e]/8 hover:bg-[#c9a94e]/14 hover:border-[#c9a94e]/50"
                  : "border-white/8 bg-white/5 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              <div className={`mb-3 ${c.highlight ? "text-[#c9a94e]" : "text-white/50 group-hover:text-white/80"} transition-colors`}>
                {c.icon}
              </div>
              <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-white/35 mb-1">{c.label}</p>
              <p className={`text-[13px] font-semibold break-all ${c.highlight ? "text-[#c9a94e]" : "text-white"}`}>
                {c.value}
              </p>
            </a>
          ))}
        </div>

        {/* Primary button */}
        <a
          href={`mailto:${service.cta.email}`}
          className="inline-flex items-center gap-2.5 bg-[#c9a94e] hover:bg-[#d4b660] text-[#0d1f3c] font-bold text-[14.5px] px-10 py-4 rounded-full shadow-xl shadow-[#c9a94e]/20 hover:shadow-[#c9a94e]/35 transition-all hover:-translate-y-0.5 group"
        >
          Schedule Free Consultation
          <BsArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <p className="text-white/25 text-[12px] mt-4">No commitment required · Free initial assessment</p>

        {/* Trust row */}
        <div className="flex justify-center gap-7 flex-wrap mt-9 pt-8 border-t border-white/8">
          {["Free Initial Consultation", "500+ Certifications Completed", "Ganga Vihar, New Delhi"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-[12px] text-white/35">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c9a94e]" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────
function Footer() {
  const services = ["BIS Certification", "ISO Certification", "WPC Approval", "TEC Certification", "EPR Registration", "FSSAI Registration", "Legal Metrology"];
  const links = ["About Us", "Our Team", "Blog", "Careers", "Privacy Policy", "Terms of Service"];

  return (
    <footer className="bg-[#060e1a] text-white/50">
      <div className="max-w-6xl mx-auto px-5 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#c9a94e]/15 flex items-center justify-center">
                <span className="font-serif text-[#c9a94e] font-bold text-base">E</span>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-white leading-tight">Eminence</p>
                <p className="text-[9px] tracking-[0.12em] uppercase text-white/30">Global Compliance Group</p>
              </div>
            </div>
            <p className="text-[13px] leading-[1.8] max-w-[220px]">
              India&apos;s trusted regulatory certification and compliance consultancy since 2010.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#c9a94e]/65 mb-4">Services</p>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#" className="text-[13px] text-white/40 hover:text-[#c9a94e] transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#c9a94e]/65 mb-4">Company</p>
            <ul className="space-y-2.5">
              {links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-[13px] text-white/40 hover:text-[#c9a94e] transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#c9a94e]/65 mb-4">Contact</p>
            <div className="space-y-3.5">
              {[
                { icon: <FaPhone size={13} />, val: "+91 74285 55852" },
                { icon: <BsMailbox size={13} />, val: "info@eminencecompliance.com" },
                { icon: <FaBuilding size={13} />, val: "Ganga Vihar, New Delhi" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded bg-white/5 flex items-center justify-center flex-shrink-0 text-[#c9a94e]/60 mt-0.5">
                    {c.icon}
                  </span>
                  <span className="text-[12.5px] leading-snug">{c.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-white/25">
            © {new Date().getFullYear()} Eminence Global Compliance Group. All rights reserved.
          </p>
          <p className="text-[11px] text-white/20">CIN: U74999DL2024PTC000001</p>
        </div>
      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE ROOT  —  assemble everything
// ─────────────────────────────────────────────────────────────
export default function ServiceDetailPage() {
  // 🔌 API INTEGRATION POINT:
  // Replace SERVICE_DATA with:
  //   const service = await fetchService(params.id)   ← in a server component
  //   const { data: service } = useSWR(`/api/services/${id}`, fetcher)  ← client
  const service = SERVICE_DATA;

  return (
    <div className="min-h-screen bg-white antialiased">
      <main>
        <Hero service={service} />
        <TrustBar />
        <Overview service={service} />
        <Process service={service} />
        <Benefits service={service} />
        <Documents service={service} />
        <FAQ service={service} />
        <CTA service={service} />
      </main>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${service.cta.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 w-13 h-13 bg-[#22c55e] hover:bg-[#16a34a] rounded-full flex items-center justify-center text-white shadow-xl shadow-green-500/30 hover:scale-110 transition-all"
        aria-label="WhatsApp"
      >
        <FiMessageCircle size={24} fill="white" />
      </a>
    </div>
  );
}
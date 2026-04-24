"use client";

// --- SVG Icons (No changes to your icons) ---
const IconBEE = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconBIS = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12L20 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12L4 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 12V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconEPR = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H6L8 8L10 16L12 4L14 14L16 10L18 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
const IconWPC = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="7" cy="17" r="1.5" fill="currentColor" />
  </svg>
);

const getIconForService = (title) => {
  if (title.includes("BEE")) return IconBEE;
  if (title.includes("BIS")) return IconBIS;
  if (title.includes("EPR")) return IconEPR;
  if (title.includes("WPC")) return IconWPC;
  return IconBIS;
};

// --- DATASET A: For Cards and Navbar ---
// We added the 'id' field here.
export const servicesData = [
  {
    id: "bee-registration",
    title: "BEE Registration",
    description: "Certification for energy efficiency and star labeling of electrical appliances.",
    category: "Registration",
    icon: getIconForService("BEE Registration"),
  },
  {
    id: "bis-crs-registration",
    title: "BIS (CRS) Registration",
    description: "Mandatory CRS registration for electronics to ensure safety and quality.",
    category: "Registration",
    icon: getIconForService("BIS (CRS) Registration"),
  },
  {
    id: "wpc-eta-approval",
    title: "WPC & ETA Approval",
    description: "Approval for wireless devices operating on de-licensed bands.",
    category: "Registration",
    icon: getIconForService("WPC & ETA Approval"),
  },
  {
    id: "bis-isi-mark",
    title: "BIS Certification (ISI Mark)",
    description: "ISI mark certification ensuring product quality and safety.",
    category: "License & Certification",
    icon: getIconForService("BIS Certification"),
  },
  {
    id: "fssai-certification",
    title: "FSSAI Registration",
    description: "Food Safety and Standards Authority of India license for food businesses.",
    category: "Auxiliary",
    icon: getIconForService("FSSAI"),
  },
];

// --- DATASET B: For the Detailed Page ---
// The keys here must match the 'id' from Dataset A exactly.
export const ServiceContent= {
  "bee-registration": {
    title: "BIS (ISI Mark) Certification",
    subtitle: "Product Quality & Safety Assurance",
    description: "The ISI mark is a standards-compliance mark for industrial products in India since 1955...",
    features: ["Ensures Product Safety", "Consumer Trust", "Legal Compliance"],
    process: ["Standard Selection", "Application Submission", "Testing", "Inspection", "Grant"],
    stats: [{ label: "Time", value: "4-6 Months" }, { label: "Validity", value: "2 Years" }]
  },
  "bis-crs-registration": {
    title: "BIS (CRS) Registration",
    subtitle: "Compulsory Registration Scheme for IT & Electronics",
    description: "MeitY has notified Electronics and IT Goods for Compulsory Registration...",
    features: ["Mandatory for IT", "Prevents Substandard Goods"],
    process: ["Lab Testing", "Portal Submission", "Review", "ID Generation"],
    stats: [{ label: "Turnaround", value: "15-20 Days" }]
  },
  "wpc-eta-approval": {
    title: "WPC-ETA Approval",
    subtitle: "Wireless & Bluetooth Device Licensing",
    description: "Equipment Type Approval (ETA) is required for any wireless device...",
    features: ["WiFi & Bluetooth Focus", "Lifetime Validity"],
    process: ["RF Testing", "WPC Filing", "Document Review"],
    stats: [{ label: "Valid for", value: "Lifetime" }]
  },
  "fssai-certification": {
    title: "FSSAI Certification",
    subtitle: "Food Safety License",
    description: "FSSAI registration is mandatory for all food business operators...",
    features: ["Food Safety", "Consumer Awareness"],
    process: ["Eligibility Check", "Application", "License Grant"],
    stats: [{ label: "Authority", value: "FSSAI" }]
  }
};
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



export const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: "blur(4px)" // Adds a premium soft entrance
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for a "smooth-stop" effect
    },
  },
};

// --- DATASET A: For Cards and Navbar ---
// We added the 'id' field here.
export const servicesData = [
  {
    id: "bis-isi-certification",
    title: "BIS ISI Certification",
    description: "Certification for industrial products to ensure quality, safety, and reliability with the ISI mark.",
    category: "BIS Services",
    icon: getIconForService("BIS ISI"),
  },
  {
    id: "bis-fmcs-certification",
    title: "BIS FMCS Certification",
    description: "Foreign Manufacturer Certification Scheme for overseas applicants to sell products in India.",
    category: "BIS Services",
    icon: getIconForService("FMCS"),
  },
  {
    id: "bis-hallmark-certification",
    title: "BIS Hallmark Certification",
    description: "Purity certification for Gold and Silver jewelry to protect consumers from adulteration.",
    category: "BIS Services",
    icon: getIconForService("Hallmark"),
  },
  {
    id: "bis-assaying-centre",
    title: "Assaying & Hallmarking Centre",
    description: "Recognition for centers involved in testing and marking precious metal purity.",
    category: "BIS Services",
    icon: getIconForService("BIS"),
  },
  {
    id: "bis-crs-registration",
    title: "Compulsory Registration (CRS)",
    description: "Mandatory registration for electronics and IT goods to ensure safety standards.",
    category: "BIS Services",
    icon: getIconForService("BIS CRS"),
  },
  {
    id: "bis-eco-mark",
    title: "BIS Eco Mark Certification",
    description: "Certification for environment-friendly products that meet specific ecological criteria.",
    category: "BIS Services",
    icon: getIconForService("Eco Mark"),
  },
  {
    id: "wpc-eta-approval",
    title: "WPC ETA Approval",
    description: "Mandatory approval for wireless and Bluetooth equipment imported or sold in India.",
    category: "Wireless",
    icon: getIconForService("WPC"),
  },
  {
    id: "bee-registration",
    title: "BEE Registration",
    description: "Energy efficiency labeling for appliances to help consumers save on energy costs.",
    category: "Energy",
    icon: getIconForService("BEE"),
  },
  {
    id: "epr-authorization",
    title: "EPR Authorization",
    description: "Extended Producer Responsibility for managing waste from electronics, plastic, and batteries.",
    category: "Environment",
    icon: getIconForService("EPR"),
  },
  {
    id: "legal-metrology-registration",
    title: "Legal Metrology (LMPCR)",
    description: "Packaged commodity registration for compliance with weight and measurement laws.",
    category: "Legal",
    icon: getIconForService("Legal"),
  },
  {
    id: "wmi-code-registration",
    title: "WMI Code Registration",
    description: "World Manufacturer Identifier registration for vehicle manufacturers to assign VINs.",
    category: "Automotive",
    icon: getIconForService("WMI"),
  }
];

// --- DATASET B: For the Detailed Page ---
export const ServiceContent = {
  "bis-isi-certification": {
    title: "BIS ISI Certification",
    subtitle: "Indian Standards Institute Mark",
    description: "The ISI mark is the most recognized certification mark in India, confirming that a product conforms to an Indian Standard (IS) developed by the Bureau of Indian Standards.",
    features: ["Boosts Brand Reputation", "Mandatory for 400+ Products", "Standard Quality Assurance"],
    process: ["Product Testing", "Factory Inspection", "Documentation", "Grant of License"],
    stats: [{ label: "Validity", value: "1-2 Years" }, { label: "Scope", value: "Industrial/Consumer" }]
  },
  "bis-fmcs-certification": {
    title: "BIS FMCS Certification",
    subtitle: "Foreign Manufacturer Certification Scheme",
    description: "FMCS is specifically designed for foreign manufacturers to ensure their products meet Indian quality standards before reaching the Indian market.",
    features: ["Direct Entry to Indian Market", "Global Compliance", "On-site Audit Support"],
    process: ["Application Filing", "Nomination of AIR", "Factory Audit", "Sample Testing"],
    stats: [{ label: "AIR Requirement", value: "Mandatory" }, { label: "Applicability", value: "Non-Indian Units" }]
  },
  "bis-hallmark-certification": {
    title: "BIS Hallmark Certification",
    subtitle: "Purity Marking for Gold & Silver",
    description: "Hallmarking provides an official guarantee of the purity and fineness of precious metal articles like jewelry.",
    features: ["Ensures Metal Purity", "Increases Resale Value", "Protects Against Fraud"],
    process: ["Centre Audit", "Sampling", "Laser Marking", "Certification"],
    stats: [{ label: "Components", value: "BIS Logo, Purity, ID" }, { label: "Metal", value: "Gold & Silver" }]
  },
  "bis-assaying-centre": {
    title: "Assaying & Hallmarking Centre",
    subtitle: "Recognition of Purity Testing Hubs",
    description: "Recognition for private or public centers to test and hallmark jewelry on behalf of the BIS.",
    features: ["Third-party Verification", "Laboratory Standards", "Technical Competence"],
    process: ["Infrastructure Setup", "NABL Accreditation", "BIS Recognition Audit"],
    stats: [{ label: "Infrastructure", value: "Mandatory" }]
  },
  "bis-crs-registration": {
    title: "Compulsory Registration (BIS CRS)",
    subtitle: "Safety for Electronics & IT Goods",
    description: "Registration for electronics products under the Compulsory Registration Order to prevent substandard goods from entering the market.",
    features: ["Safety Compliance", "Required for Custom Clearance", "Market Acceptance"],
    process: ["Sample Testing in BIS Lab", "Portal Registration", "Submission", "Approval"],
    stats: [{ label: "Timeline", value: "20-30 Days" }, { label: "Products", value: "70+ Categories" }]
  },
  "bis-eco-mark": {
    title: "BIS Eco Mark Certification",
    subtitle: "Environmentally Friendly Product Label",
    description: "A voluntary certification scheme for products that have a reduced environmental impact during their lifecycle.",
    features: ["Green Marketing Advantage", "Ecological Sustainability", "Lifecycle Assessment"],
    process: ["Raw Material Check", "Manufacturing Audit", "Eco-testing"],
    stats: [{ label: "Focus", value: "Environmental Impact" }]
  },
  "wpc-eta-approval": {
    title: "WPC ETA Approval",
    subtitle: "Wireless & RF Compliance",
    description: "Equipment Type Approval (ETA) is required for any wireless device operating in de-licensed frequency bands.",
    features: ["Bluetooth/WiFi Compliance", "Import Clearance", "One-time Approval"],
    process: ["RF Test Report Analysis", "Online Filing", "Scrutiny", "Certificate Issuance"],
    stats: [{ label: "Validity", value: "Lifetime" }, { label: "Testing", value: "RF Report Required" }]
  },
  "bee-registration": {
    title: "BEE Registration",
    subtitle: "Star Labeling for Energy Efficiency",
    description: "Managed by the Bureau of Energy Efficiency, this involves labeling products based on their energy consumption.",
    features: ["Energy Savings", "Star Ratings (1-5)", "Consumer Choice Guidance"],
    process: ["Model Registration", "Sample Testing", "Label Security Fee", "Approval"],
    stats: [{ label: "Renewal", value: "Every 2-3 Years" }, { label: "Authority", value: "BEE India" }]
  },
  "epr-authorization": {
    title: "EPR Authorization",
    subtitle: "Waste Management Compliance",
    description: "Authorization for producers and importers to manage the end-of-life of their products (E-waste, Plastic, Battery).",
    features: ["Environmental Responsibility", "CPCB/SPCB Compliance", "Waste Collection Targets"],
    process: ["Portal Registration", "Waste Management Plan", "Quarterly Filing"],
    stats: [{ label: "Target", value: "Recycling %" }, { label: "Authority", value: "CPCB" }]
  },
  "legal-metrology-registration": {
    title: "Legal Metrology (LMPCR)",
    subtitle: "Packaged Commodity Registration",
    description: "Registration under the Legal Metrology (Packaged Commodities) Rules for labeling and weight accuracy.",
    features: ["Consumer Protection", "Standardized Packaging", "Mandatory Declarations"],
    process: ["Application Filing", "Label Verification", "Grant of Registration"],
    stats: [{ label: "Validity", value: "Lifetime (usually)" }]
  },
  "wmi-code-registration": {
    title: "WMI Code Registration",
    subtitle: "Vehicle Manufacturer Identification",
    description: "Assignment of a World Manufacturer Identifier code to identify a vehicle manufacturer uniquely on a global scale.",
    features: ["VIN Generation", "Global Identification", "ISO Compliance"],
    process: ["SAE/BIS Coordination", "Technical Documentation", "Registration"],
    stats: [{ label: "Utility", value: "Vehicle Identification" }]
  }
};
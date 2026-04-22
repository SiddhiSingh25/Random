
const IconBEE = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconBIS = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12L20 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12L4 7.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12V21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconEPR = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12H6L8 8L10 16L12 4L14 14L16 10L18 12H21"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconWPC = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 7L4 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 12H10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M20 17H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="7" cy="17" r="1.5" fill="currentColor" />
  </svg>
);

const IconTEC = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 5H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 19H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconLM = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const getIconForService = (title) => {
  if (title.includes("BEE")) return <IconBEE />;
  if (title.includes("BIS")) return <IconBIS />;
  if (title.includes("EPR")) return <IconEPR />;
  if (title.includes("WPC")) return <IconWPC />;
  if (title.includes("TEC")) return <IconTEC />;
  if (title.includes("Legal") || title.includes("LMPC")) return <IconLM />;
  return <IconBIS />;
};

export const servicesData = [
  {
    title: "BEE Registration",
    description:
      "Certification for energy efficiency and star labeling of electrical appliances under Bureau of Energy Efficiency (BEE).",
    category: "Registration",
    icon: getIconForService("BEE Registration"),
  },
  {
    title: "BIS (CRS) Registration for Electronic Products",
    description:
      "Mandatory CRS registration for electronics to ensure safety, quality, and compliance with BIS standards.",
    category: "Registration",
    icon: getIconForService("BIS (CRS) Registration"),
  },
  {
    title: "EPR Registration for E-Waste Management",
    description:
      "Authorization for producers & importers to manage electronic waste under India’s E-Waste Management Rules.",
    category: "Registration",
    icon: getIconForService("EPR Registration"),
  },
  {
    title: "EPR Registration for Plastic Waste Management",
    description:
      "Mandatory EPR authorization for plastic waste producers to ensure eco-friendly collection & recycling.",
    category: "Registration",
    icon: getIconForService("EPR Registration"),
  },
  {
    title: "EPR Registration for Battery Waste Management",
    description:
      "Compliance for battery manufacturers & importers under Battery Waste Management Rules, 2022.",
    category: "Registration",
    icon: getIconForService("EPR Registration"),
  },
  {
    title: "EPR Registration for Tire Waste Management",
    description:
      "Mandatory compliance for tire manufacturers to recycle, reuse, and dispose waste tires responsibly.",
    category: "Registration",
    icon: getIconForService("EPR Registration"),
  },
  {
    title: "WPC & ETA Approval",
    description:
      "Wireless Planning & Coordination (WPC) ETA approval for wireless devices operating on de-licensed bands.",
    category: "Registration",
    icon: getIconForService("WPC & ETA Approval"),
  },
  {
    title: "TEC/MTTCE Approval",
    description:
      "Approval for telecom equipment under Mandatory Testing & Certification of Telecom Equipment (MTTCE) scheme.",
    category: "Registration",
    icon: getIconForService("TEC/MTTCE Approval"),
  },
  {
    title: "TAC & IMEI Registration",
    description:
      "Mandatory Type Approval Code (TAC) and IMEI registration for mobile devices before market entry.",
    category: "Registration",
    icon: getIconForService("TAC & IMEI Registration"),
  },
  // License & Certification
  {
    title: "BIS Certification (ISI Mark) for Domestic Manufacturers",
    description:
      "ISI mark certification ensuring product quality, safety, and compliance for Indian manufacturers.",
    category: "License & Certification",
    icon: getIconForService("BIS Certification"),
  },
  {
    title: "BIS Certification (ISI Mark) for Foreign Manufacturers (FMCS)",
    description:
      "ISI certification under FMCS scheme for foreign manufacturers exporting to India.",
    category: "License & Certification",
    icon: getIconForService("BIS Certification"),
  },
  {
    title: "BIS Scheme-X Certification",
    description:
      "Special BIS certification scheme (Scheme-X) for bulk consignments, project imports & specific needs.",
    category: "License & Certification",
    icon: getIconForService("BIS Scheme-X"),
  },
  // Auxiliary
  {
    title: "Legal Metrology (LMPC) Registration",
    description:
      "Mandatory registration for importers and manufacturers under Legal Metrology Act for packaged commodities.",
    category: "Auxiliary",
    icon: getIconForService("Legal Metrology"),
  },
  {
    title: "CDSCO Registration",
    description:
      "Central Drugs Standard Control Organization registration for medical devices and pharmaceuticals.",
    category: "Auxiliary",
    icon: getIconForService("CDSCO"),
  },
  {
    title: "FSSAI Registration",
    description:
      "Food Safety and Standards Authority of India license for food businesses.",
    category: "Auxiliary",
    icon: getIconForService("FSSAI"),
  },
];





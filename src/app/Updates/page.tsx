// "use client";




// import Header from "@/components/common/header";
// import Heading from "@/components/common/Heading";
// import { motion } from "framer-motion";
// import { 
//   FaCalendarAlt, 
//   FaFileAlt, 
//   FaExclamationTriangle, 
//   FaCheckCircle, 
//   FaClock, 
//   FaChartLine, 
//   FaShieldAlt, 
//   FaBolt, 
//   FaSyncAlt, 
//   FaTrophy 
// } from "react-icons/fa";
// import { MdOutlineUpdate } from "react-icons/md";

// // Mock news data based on the screenshot
// const newsData = [
//   {
//     id: 1,
//     title: "BIS Temporary Exemption on Steel Imports till 30 June 2026",
//     category: "BIS Update",
//     date: "April 20, 2026",
//     description: "BIS certification for steel products is temporarily exempted till 30 June 2026 under Steel QCO update. Check applicability, conditions, IS standards and official notification details.",
//     icon: "shield",
//     badge: "Exemption",
//     color: "primary"
//   },
//   {
//     id: 2,
//     title: "DoT Extends NCCS Exemption for Cloud Routers & Wi-Fi CPEs",
//     category: "TEC/MTCTE",
//     date: "April 18, 2026",
//     description: "DoT extends NCCS exemption for cloud-based IP routers and Wi-Fi CPEs till 31 August 2026. Check notification details, covered products and compliance impact in India.",
//     icon: "bolt",
//     badge: "Extended",
//     color: "secondary"
//   },
//   {
//     id: 3,
//     title: "BIS Quality Control Order 2026 for Cookware, Utensils & Food Cans",
//     category: "BIS Certification",
//     date: "April 15, 2026",
//     description: "BIS certification is mandatory for Stainless Steel cookware, utensils, sinks and food cans under QCO 2026. Check IS 14756:2024, IS 18427:2024, IS 13983:1994 and compliance timeline.",
//     icon: "file",
//     badge: "Mandatory",
//     color: "primary"
//   },
//   {
//     id: 4,
//     title: "BIS ISI Certification Now Mandatory for Hand Tools Under QCO 2025",
//     category: "Hand Tools",
//     date: "April 12, 2026",
//     description: "BIS certification for hand tools is mandatory under QCO 2025 in India. Check covered products, ISI Mark requirements, deadlines, and compliance.",
//     icon: "check",
//     badge: "New Rule",
//     color: "primary"
//   },
//   {
//     id: 5,
//     title: "BIS Implementation Guidelines for XR Devices Under CRS",
//     category: "BIS CRS Update",
//     date: "April 10, 2026",
//     description: "BIS has issued implementation guidelines for revised IS 10322 series standards for LED luminaires under CRS. Businesses must comply by 02 August 2026 to maintain certification.",
//     icon: "chart",
//     badge: "Guidelines",
//     color: "primary"
//   },
//   {
//     id: 6,
//     title: "Aluminium and Aluminium Alloy QCO 2026: BIS Certification Mandatory",
//     category: "Quality Control Order",
//     date: "April 8, 2026",
//     description: "The Government of India has notified the Aluminium and Aluminium Alloy Products (Quality Control) Order, 2026, making BIS certification for aluminium products mandatory for specified categories.",
//     icon: "trophy",
//     badge: "Compliance",
//     color: "primary"
//   },
//   {
//     id: 7,
//     title: "BIS Extends IS 2046 Implementation Deadline to March 2027",
//     category: "Deadline Extension",
//     date: "April 5, 2026",
//     description: "BIS extends the implementation deadline for the revised IS 2046 standard covering Decorative Thermosetting Synthetic Resin Bonded Laminated Sheets until 24 March 2027.",
//     icon: "clock",
//     badge: "Extended",
//     color: "secondary"
//   },
//   {
//     id: 8,
//     title: "TEC Extends ILAC Test Report Acceptance under MTCTE till 30-06-2026",
//     category: "TEC Update",
//     date: "April 3, 2026",
//     description: "TEC extends acceptance of ILAC-accredited test reports for selected telecom equipment under MTCTE, valid till 30 June 2026 subject to defined conditions.",
//     icon: "sync",
//     badge: "Extension",
//     color: "secondary"
//   },
//   {
//     id: 9,
//     title: "NCCS Extends Pro Tem Certificate Validity to 2 Years",
//     category: "NCCS/TEC",
//     date: "April 1, 2026",
//     description: "NCCS extends Pro Tem Certificate validity to 2 years under TEC/MTCTE, helping manufacturers, importers, and OEMs ensure smoother compliance and faster approvals.",
//     icon: "shield",
//     badge: "Validity",
//     color: "primary"
//   },
//   {
//     id: 10,
//     title: "BIS Reduces Annual Marking Fee by Up to 80% for MSMEs",
//     category: "Fee Update",
//     date: "March 28, 2026",
//     description: "The Government of India has announced a major update reducing the annual marking fee by up to 80% for MSMEs, startups, and women entrepreneurs.",
//     icon: "trophy",
//     badge: "Benefit",
//     color: "secondary"
//   },
//   {
//     id: 11,
//     title: "BIS Makes AR, VR & MR Devices Mandatory Under CRS",
//     category: "Extended Reality",
//     date: "March 25, 2026",
//     description: "AR, VR & MR (Extended Reality) devices are now covered under BIS CRS. Learn about IS 62960:2023, transition deadlines, and compliance requirements.",
//     icon: "bolt",
//     badge: "New Mandate",
//     color: "primary"
//   },
//   {
//     id: 12,
//     title: "DoT Introduces IoT Devices Under CSR Testing Framework as Group VI",
//     category: "TEC/MTCTE",
//     date: "March 22, 2026",
//     description: "DoT introduces Group VI under CSR testing for IoT devices. Check covered devices, ITSAR standards, compliance rules and testing requirements in India.",
//     icon: "chart",
//     badge: "IoT Update",
//     color: "secondary"
//   }
// ];

// // React Icon mapping
// const iconMap: Record<string, React.ElementType> = {
//   calendar: FaCalendarAlt,
//   file: FaFileAlt,
//   alert: FaExclamationTriangle,
//   check: FaCheckCircle,
//   clock: FaClock,
//   chart: FaChartLine,
//   shield: FaShieldAlt,
//   bolt: FaBolt,
//   sync: FaSyncAlt,
//   trophy: FaTrophy,
//   update: MdOutlineUpdate,
// };

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08,
//       delayChildren: 0.1,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { 
//     opacity: 0, 
//     y: 50,
//     scale: 0.95,
//   },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       damping: 25,
//       stiffness: 350,
//       duration: 0.5,
//     },
//   },
//   hover: {
//     y: -10,
//     scale: 1.02,
//     transition: {
//       type: "spring",
//       damping: 15,
//       stiffness: 400,
//     },
//   },
// };

// const badgeColors = {
//   primary: "bg-[#20385c]/10 text-[#20385c] border-[#20385c]/20",
//   secondary: "bg-[#bc8737]/10 text-[#bc8737] border-[#bc8737]/20",
// };

// const iconBgColors = {
//   primary: "bg-gradient-to-br from-[#20385c] to-[#162744]",
//   secondary: "bg-gradient-to-br from-[#bc8737] to-[#a66e2b]",
// };

// const categoryColors = {
//   primary: "text-[#20385c]",
//   secondary: "text-[#bc8737]",
// };

// const hoverTitleColors = {
//   primary: "group-hover:text-[#20385c]",
//   secondary: "group-hover:text-[#bc8737]",
// };

// export default function NewsUpdatesPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        

//         <Heading
//   label="Notifications"
//   title="Government Circulars & New Rules"
//   description="Stay updated with the latest government circulars, regulatory changes, and newly introduced rules across various sectors."
// />
    

//       {/* News Cards Grid */}
//       <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8"
//         >
//           {newsData.map((news, index) => {
//             const IconComponent = iconMap[news.icon] || FaFileAlt;
//             const isPrimary = news.color === "primary";
            
//             return (
//               <motion.div
//                 key={news.id}
//                 variants={cardVariants}
//                 whileHover="hover"
//                 custom={index}
//                 className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100 cursor-pointer"
//               >
//                 {/* Animated gradient overlay on hover */}
//                 <motion.div 
//                   className="absolute inset-0 bg-gradient-to-r from-[#20385c]/0 via-[#20385c]/3 to-[#bc8737]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                   initial={false}
//                   animate={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                 />
                
//                 {/* Card Content */}
//                 <div className="p-6 pb-5 relative z-10">
//                   {/* Header with Icon and Badge */}
//                   <div className="flex justify-between items-start mb-5">
//                     <motion.div 
//                       whileHover={{ rotate: 8, scale: 1.08 }}
//                       transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                       className={`p-3.5 rounded-xl ${iconBgColors[news.color]} text-white shadow-md`}
//                     >
//                       <IconComponent className="w-5 h-5" />
//                     </motion.div>
                    
//                     <motion.span 
//                       initial={{ opacity: 0, x: 15 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.02, duration: 0.3 }}
//                       className={`text-xs font-bold px-3 py-1.5 rounded-full border ${badgeColors[news.color]} backdrop-blur-sm family-semibold tracking-wide`}
//                     >
//                       {news.badge}
//                     </motion.span>
//                   </div>
                  
//                   {/* Category and Date */}
//                   <div className="flex items-center gap-3 text-xs text-gray-500 mb-3 family-medium">
//                     <span className={`${categoryColors[news.color]} font-bold tracking-wide`}>
//                       {news.category}
//                     </span>
//                     <span className="flex items-center gap-1.5">
//                       <FaCalendarAlt className="w-3 h-3 text-gray-400" />
//                       <span className="text-gray-500">{news.date}</span>
//                     </span>
//                   </div>
                  
//                   {/* Title */}
//                   <h3 className={`text-xl font-bold text-gray-800 mb-3 family-bold leading-tight ${hoverTitleColors[news.color]} transition-colors duration-300 line-clamp-2`}>
//                     {news.title}
//                   </h3>
                  
//                   {/* Description */}
//                   <p className="text-gray-600 text-sm leading-relaxed family-regular line-clamp-3">
//                     {news.description}
//                   </p>
//                 </div>
                
//                 {/* Card Footer */}
//                 <motion.div 
//                   className="px-6 pb-6 pt-3 border-t border-gray-100 bg-gray-50/30"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.1 }}
//                 >
//                   <motion.button
//                     whileHover={{ x: 6 }}
//                     whileTap={{ scale: 0.97 }}
//                     className={`text-sm font-bold flex items-center gap-2 ${categoryColors[news.color]} hover:opacity-80 transition-all family-semibold`}
//                   >
//                     Read Full Update 
//                     <motion.span
//                       animate={{ x: [0, 4, 0] }}
//                       transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
//                       className="text-base"
//                     >
//                       →
//                     </motion.span>
//                   </motion.button>
//                 </motion.div>
                
//                 {/* Decorative corner accent */}
//                 <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[${isPrimary ? '#20385c' : '#bc8737'}]/5 to-transparent rounded-bl-2xl pointer-events-none`} />
//               </motion.div>
//             );
//           })}
//         </motion.div>
        
//         {/* Load More Button */}
//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.9, duration: 0.5 }}
//           className="flex justify-center mt-16"
//         >
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.97 }}
//             className="px-9 py-3.5 bg-gradient-to-r from-[#20385c] to-[#162744] text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 family-semibold flex items-center gap-2.5 group"
//           >
//             <FaSyncAlt className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
//             Load More Updates
//           </motion.button>
//         </motion.div>
//       </div>
      
//       {/* Floating Stats Bar */}
//       <motion.div 
//         initial={{ opacity: 0, y: 60 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.1, duration: 0.5, type: "spring", stiffness: 200 }}
//         className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40"
//       >
//         <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl px-6 py-3.5 flex items-center gap-6 border border-gray-200/80">
//           <div className="flex items-center gap-2.5">
//             <motion.div 
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//               className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-md"
//             />
//             <span className="text-sm text-gray-700 font-semibold family-medium">{newsData.length} Active Updates</span>
//           </div>
//           <div className="w-px h-7 bg-gray-300" />
//           <div className="flex items-center gap-2.5">
//             <FaChartLine className="w-4 h-4 text-[#bc8737]" />
//             <span className="text-sm text-gray-700 font-semibold family-medium">Last updated today</span>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
"use client";

import Header from "@/components/common/header";
import Heading from "@/components/common/Heading";
import { motion } from "framer-motion";
import { 
  FaCalendarAlt, FaFileAlt, FaExclamationTriangle, 
  FaCheckCircle, FaClock, FaChartLine, FaShieldAlt, 
  FaBolt, FaSyncAlt, FaTrophy, FaArrowRight 
} from "react-icons/fa";
import { MdOutlineUpdate } from "react-icons/md";

// Mock news data
const newsData = [
  { id: 1, title: "BIS Temporary Exemption on Steel Imports till 30 June 2026", category: "BIS Update", date: "April 20, 2026", description: "BIS certification for steel products is temporarily exempted till 30 June 2026 under Steel QCO update.", icon: "shield", badge: "Exemption", color: "primary" },
  { id: 2, title: "DoT Extends NCCS Exemption for Cloud Routers & Wi-Fi CPEs", category: "TEC/MTCTE", date: "April 18, 2026", description: "DoT extends NCCS exemption for cloud-based IP routers and Wi-Fi CPEs till 31 August 2026.", icon: "bolt", badge: "Extended", color: "secondary" },
  { id: 3, title: "BIS Quality Control Order 2026 for Cookware & Food Cans", category: "BIS Certification", date: "April 15, 2026", description: "BIS certification is mandatory for Stainless Steel cookware, utensils, sinks and food cans under QCO 2026.", icon: "file", badge: "Mandatory", color: "primary" },
  // ... rest of your data
];

const iconMap = {
  calendar: FaCalendarAlt,
  file: FaFileAlt,
  alert: FaExclamationTriangle,
  check: FaCheckCircle,
  clock: FaClock,
  chart: FaChartLine,
  shield: FaShieldAlt,
  bolt: FaBolt,
  sync: FaSyncAlt,
  trophy: FaTrophy,
  update: MdOutlineUpdate,
};

// --- Silky Animation Configs ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 60, damping: 20 } 
  },
  hover: { 
    y: -8, 
    transition: { type: "spring", stiffness: 300, damping: 20 } 
  }
} as const;

export default function NewsUpdatesPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-[#20385c]/10">
      <div className="pt-16">
        <Heading
          label="Notifications"
          title="Government Circulars & New Rules"
          description="Stay updated with the latest government circulars, regulatory changes, and newly introduced rules across various sectors."
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newsData.map((news) => {
            const IconComponent = iconMap[news.icon] || FaFileAlt;
            const isPrimary = news.color === "primary";
            
            return (
              <motion.div
                key={news.id}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-shadow duration-500 cursor-pointer flex flex-col h-full"
              >
                {/* Accent Top Line */}
                <div className={`absolute top-0 left-10 right-10 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${isPrimary ? 'bg-[#20385c]' : 'bg-[#bc8737]'}`} />

                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm ${isPrimary ? 'bg-[#20385c] text-white' : 'bg-[#bc8737] text-white'}`}>
                    <IconComponent size={22} />
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border ${isPrimary ? 'bg-blue-50 border-blue-100 text-[#20385c]' : 'bg-orange-50 border-orange-100 text-[#bc8737]'}`}>
                    {news.badge}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4 text-xs font-semibold tracking-tight uppercase">
                  <span className={isPrimary ? 'text-[#20385c]' : 'text-[#bc8737]'}>{news.category}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="text-gray-400 font-medium normal-case">{news.date}</span>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-black transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {news.description}
                </p>

                {/* Footer Link - Pushed to bottom */}
                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between overflow-hidden">
                  <span className={`text-sm font-bold ${isPrimary ? 'text-[#20385c]' : 'text-[#bc8737]'}`}>
                    Read Full Update
                  </span>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className={isPrimary ? 'text-[#20385c]' : 'text-[#bc8737]'}
                  >
                    <FaArrowRight />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Load More Button */}
        <div className="flex justify-center mt-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-gray-900 text-white rounded-full font-bold shadow-xl flex items-center gap-3 group transition-all"
          >
            <FaSyncAlt className="group-hover:rotate-180 transition-transform duration-700" />
            <span>Load More Updates</span>
          </motion.button>
        </div>
      </div>

      {/* Soft Floating Bar */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 50 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm px-6"
      >
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.1)] rounded-3xl px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-25"></span>
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm font-bold text-gray-700">{newsData.length} Active</span>
          </div>
          <div className="h-4 w-px bg-gray-200" />
          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
            <FaChartLine />
            <span>Updated 2m ago</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
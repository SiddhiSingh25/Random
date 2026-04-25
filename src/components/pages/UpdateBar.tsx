// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   IoLocationOutline,
//   IoChevronDown,
//   IoCalendarOutline,
//   IoFlash
// } from "react-icons/io5";

// const UpdateBar = () => {
//   const events = [
//     "ECAMEX 2026 – Electrical Safety & Renewable Energy (04 Apr 2026)",
//     "Smart Home & Office Expo 2026 (06 Apr 2026)",
//     "China Refrigeration Expo 2026 (08 Apr 2026)",
//     "Metal Forming Expo (India) (09 Apr 2026)",
//     "Tube 2026 (13 Apr 2026)",
//     "Paper India Expo 2026 (13 Apr 2026)",
//     "India Stainless Steel Expo 2026 (22 Apr 2026)",
//     "ALUMINIUM Arabia (27 Apr 2026)",
//     "Smart Home Expo 2026 (28 Apr 2026)",
//     "Duplex World Conference & Expo 2026 (06 May 2026)",
//     "China International Paper Expo (13 May 2026)",
//     "Guangzhou Tube & Pipe Exhibition (16 May 2026)",
//     "Stainless Steel Industry Expo (16 May 2026)",
//   ];

//   return (
//     <div className="relative group overflow-hidden bg-[#020617] py-2 border-b border-white/5">
      
//       {/* Background Silky Glow */}
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-indigo-600/5 pointer-events-none" />

//       <div className="flex items-center">
        
//         {/* Left Side: Static Label / Location */}
//         <div className="relative z-20 flex items-center gap-3 pl-4 pr-6 bg-[#020617] shadow-[20px_0_30px_rgba(2,6,23,1)]">
//           <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group/loc">
//             <IoLocationOutline size={14} className="text-blue-400 group-hover/loc:scale-110 transition-transform" />
//             <span className="text-white text-[0.7rem] font-bold uppercase tracking-widest">
//               India
//             </span>
//             <IoChevronDown size={10} className="text-white/40" />
//           </div>
          
//           <div className="h-4 w-[1px] bg-white/10 ml-2" />
          
//           <div className="flex items-center gap-2">
//             <motion.div 
//                animate={{ opacity: [1, 0.5, 1] }} 
//                transition={{ duration: 2, repeat: Infinity }}
//                className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
//             />
//             <span className="text-blue-200/50 text-[0.65rem] font-black uppercase tracking-tighter">Live Updates</span>
//           </div>
//         </div>

//         {/* Marquee Content using Framer Motion */}
//         <div className="relative flex flex-1 overflow-hidden">
//           <motion.div
//             className="flex whitespace-nowrap"
//             animate={{ x: ["0%", "-50%"] }}
//             transition={{
//               ease: "linear",
//               duration: 35, // Slower is silkier
//               repeat: Infinity,
//             }}
//             style={{ display: "flex" }}
//           >
//             {/* Double the array for seamless loop */}
//             {[...events, ...events].map((event, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-center gap-4 px-10 group/item cursor-default"
//               >
//                 <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover/item:bg-blue-500/20 transition-colors">
//                     <IoCalendarOutline size={12} className="text-blue-400" />
//                 </div>

//                 <span className="text-[0.8rem] font-medium tracking-tight text-slate-300 group-hover/item:text-white transition-colors">
//                   {event}
//                 </span>

//                 <span className="flex items-center justify-center opacity-20 group-hover/item:opacity-100 transition-opacity">
//                     <IoFlash size={10} className="text-blue-400" />
//                 </span>
//               </div>
//             ))}
//           </motion.div>

//           {/* Right Edge Fade Out */}
//           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpdateBar;

"use client";

import { motion } from "framer-motion";
import {
  IoLocationOutline,
  IoChevronDown,
  IoCalendarOutline,
  IoFlash
} from "react-icons/io5";

const UpdateBar = () => {
  const events = [
    "ECAMEX 2026 – Electrical Safety & Renewable Energy (04 Apr 2026)",
    "Smart Home & Office Expo 2026 (06 Apr 2026)",
    "China Refrigeration Expo 2026 (08 Apr 2026)",
    "Metal Forming Expo (India) (09 Apr 2026)",
    "Tube 2026 (13 Apr 2026)",
    "Paper India Expo 2026 (13 Apr 2026)",
    "India Stainless Steel Expo 2026 (22 Apr 2026)",
    "ALUMINIUM Arabia (27 Apr 2026)",
    "Smart Home Expo 2026 (28 Apr 2026)",
    "Duplex World Conference & Expo 2026 (06 May 2026)",
    "China International Paper Expo (13 May 2026)",
    "Guangzhou Tube & Pipe Exhibition (16 May 2026)",
    "Stainless Steel Industry Expo (16 May 2026)",
  ];

  return (
    <div className="relative group overflow-hidden bg-primary-950 py-2 border-b border-white/5">
      
      {/* Background Silky Glow - Using Primary/Secondary Tones */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800/20 via-transparent to-secondary-500/5 pointer-events-none" />

      <div className="flex items-center">
        
        {/* Left Side: Static Label / Location */}
        <div className="relative z-20 flex items-center gap-3 pl-4 pr-8 bg-primary-950 shadow-[25px_0_35px_#0f1b37]">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-secondary-400/30 transition-all cursor-pointer group/loc">
            <IoLocationOutline size={14} className="text-secondary-400 group-hover/loc:scale-110 transition-transform" />
            <span className="text-white text-[0.7rem] family-bold uppercase tracking-widest">
              India
            </span>
            <IoChevronDown size={10} className="text-white/40" />
          </div>
          
          <div className="h-4 w-[1px] bg-white/10 ml-1" />
          
          <div className="flex items-center gap-2">
            <motion.div 
               animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }} 
               transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
               className="w-1.5 h-1.5 rounded-full bg-secondary-500 shadow-[0_0_10px_#d8922f]" 
            />
            <span className="text-primary-200/60 text-[0.65rem] family-mainheading uppercase tracking-tighter">Live Updates</span>
          </div>
        </div>

        {/* Marquee Content using Framer Motion */}
        <div className="relative flex flex-1 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 80, // Increased duration for a "silkier" feel
              repeat: Infinity,
            }}
          >
            {[...events, ...events].map((event, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 px-10 group/item cursor-default border-r border-white/5"
              >
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-primary-800/40 border border-white/5 group-hover/item:border-secondary-500/50 transition-all duration-500">
                    <IoCalendarOutline size={13} className="text-secondary-300" />
                </div>

                <span className="text-[0.8rem] family-medium tracking-tight text-primary-100 group-hover/item:text-secondary-200 transition-colors duration-300">
                  {event}
                </span>

                <IoFlash size={10} className="text-secondary-500/40 group-hover/item:text-secondary-400 group-hover/item:animate-pulse transition-all" />
              </div>
            ))}
          </motion.div>

          {/* Right Edge Fade Out - Using Primary-950 */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary-950 via-primary-950/80 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default UpdateBar;
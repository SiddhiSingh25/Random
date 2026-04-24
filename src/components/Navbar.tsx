// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence, type Variants } from "framer-motion";
// import { MdEmail, MdChevronRight } from "react-icons/md";
// import { IoIosCall } from "react-icons/io";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { FaInstagram } from "react-icons/fa";
// import { FaXTwitter, FaChevronDown } from "react-icons/fa6";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { usePathname } from "next/navigation";

// // --- Data for all Dropdowns ---
// const dropdownData: Record<string, { title: string; items: string[] }[]> = {
//   "Our Services": [
//     { title: "LICENCE", items: ["BIS (ISI MARK)", "DOMESTIC PRODUCT", "BIS SCHEME X"] },
//     { title: "REGISTRATION", items: ["BIS (CRS)", "WPC-ETA", "BEE CERTIFICATION"] },
//     { title: "AUXILIARY", items: ["TRAINING", "IMPORT/EXPORT", "ISO REG"] },
//   ],
//   "Blogs": [
//     { title: "LATEST", items: ["Industry News", "Tech Updates"] },
//     { title: "GUIDES", items: ["Compliance Guide", "How to Apply"] },
//   ],
//   "Updates": [
//     { title: "NOTIFICATIONS", items: ["Government Circulars", "New Rules"] },
//   ],
// };

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const pathname = usePathname();

//   const fadeDown: Variants = {
//     hidden: { opacity: 0, y: -16 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
//   };

//   const dropdownVariants: Variants = {
//     hidden: { opacity: 0, y: 10, scale: 0.98 },
//     show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
//     exit: { opacity: 0, y: 10, transition: { duration: 0.15 } }
//   };

//   const links: [string, string][] = [
//     ["Home", "/"],
//     ["About Us", "/about"],
//     ["Our Services", "/services"],
//     ["Team", "/team"],
//     // ["Blogs", "/blogs"],

//     ["Updates", "/Updates"],
//      ["FAQ's", "/faq"],
//   ];

//   return (
//     <>
//       {/* Top Banner */}
//       <motion.div variants={fadeDown} initial="hidden" animate="show" className="w-full bg-primary-800 text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-2">
//         <p className="text-sm flex gap-4">
//           <a href="mailto:unmatchedconsultancy@gmail.com" className="inline-flex items-center gap-1 hover:text-secondary-500 transition">
//             <MdEmail className="text-secondary-500 text-xl" /> unmatchedconsultancy@gmail.com
//           </a>
//           <a href="tel:+919910678889" className="inline-flex items-center gap-1 hover:text-secondary-500 transition">
//             <IoIosCall className="text-secondary-500 text-xl" /> +91 9910678889
//           </a>
//         </p>
//         <div className="hidden md:flex items-center gap-2">
//           {[{ icon: IoLogoLinkedin, href: "#" }, { icon: MdOutlineMailOutline, href: "#" }, { icon: FaXTwitter, href: "#" }, { icon: FaInstagram, href: "#" }].map(({ icon: Icon, href }, i) => (
//             <Link key={i} href={href}><Icon className="text-secondary-500 text-lg hover:text-secondary-600 transition" /></Link>
//           ))}
//         </div>
//       </motion.div>

//       {/* Navbar */}
//       <motion.nav variants={fadeDown} initial="hidden" animate="show" className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 md:px-16 lg:px-24 xl:px-32">
//         <div className="flex items-center justify-between h-[72px]">
//          <Link
//   href="/"
//   className="relative h-32 w-32 border-2 border-amber-700 flex items-center justify-center overflow-hidden"
// >
//   <Image
//     src="/images/hello.png"
//     alt="Logo"
//     fill
//     priority
//     className="object-cover"
//   />
// </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-6 font-semibold text-[13px] lg:text-sm">
//             {links.map(([label, href]) => {
//               const isActive = pathname === href;
//               const hasDropdown = label !== "Home" && dropdownData[label];

//               return (
//                 <li 
//                   key={label} 
//                   className="relative group py-6"
//                   onMouseEnter={() => hasDropdown && setActiveDropdown(label)}
//                   onMouseLeave={() => setActiveDropdown(null)}
//                 >
//                   <Link
//                     href={href}
//                     className={`flex items-center gap-1 transition ${isActive || activeDropdown === label ? "text-secondary-600" : "text-gray-700 hover:text-secondary-600"}`}
//                   >
//                     {label}
//                     {hasDropdown && <FaChevronDown className={`text-[10px] transition-transform ${activeDropdown === label ? 'rotate-180' : ''}`} />}
//                   </Link>
//                   <span className={`absolute left-0 bottom-4 h-[2px] w-0 transition-all duration-300 group-hover:w-full bg-secondary-600 ${isActive ? 'w-full' : ''}`} />

//                   {/* Dynamic Mega Dropdown */}
//                   <AnimatePresence>
//                     {activeDropdown === label && hasDropdown && (
//                       <motion.div
//                         variants={dropdownVariants}
//                         initial="hidden"
//                         animate="show"
//                         exit="exit"
//                         className="absolute top-full left-1/2 -translate-x-1/2 min-w-[500px] max-w-[90vw] bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden"
//                       >
//                         <div className={`grid grid-cols-${Math.min(dropdownData[label].length, 3)}`}>
//                           {dropdownData[label].map((group, idx) => (
//                             <div key={idx} className="border-r border-gray-50 last:border-none">
//                               <h3 className={`px-5 py-3 text-[11px] font-bold tracking-widest text-white ${idx % 2 === 0 ? 'bg-primary-800' : 'bg-secondary-600'}`}>
//                                 {group.title}
//                               </h3>
//                               <ul className="p-3 space-y-0.5">
//                                 {group.items.map((item) => (
//                                   <li key={item}>
//                                     <Link href={href} className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-secondary-600 hover:bg-gray-50 rounded-md transition-all text-[12px] group/item">
//                                       <MdChevronRight className="text-secondary-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
//                                       {item}
//                                     </Link>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </div>
//                           ))}
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </li>
//               );
//             })}

//             <li>
//               <Link href="/contact" className="inline-flex items-center rounded-full bg-primary-900 px-5 py-2 text-white text-sm font-semibold hover:bg-secondary-600 transition shadow-lg shadow-primary-900/20">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>

//           <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//             <svg width="26" height="26" viewBox="0 0 30 30"><path d="M3 7h24M3 15h24M3 23h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
//           </button>
//         </div>
//       </motion.nav>
//     </>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MdEmail, MdChevronRight, MdClose, MdMenu } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram, FaXTwitter, FaChevronDown } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";

// --- Types & Data ---
interface DropdownItem {
  title: string;
  items: string[];
}

const dropdownData: Record<string, DropdownItem[]> = {
  "Our Services": [
    { title: "LICENCE", items: ["BIS (ISI MARK)", "DOMESTIC PRODUCT", "BIS SCHEME X"] },
    { title: "REGISTRATION", items: ["BIS (CRS)", "WPC-ETA", "BEE CERTIFICATION"] },
    { title: "AUXILIARY", items: ["TRAINING", "IMPORT/EXPORT", "ISO REG"] },
  ],
  "Updates": [
    { title: "NOTIFICATIONS", items: ["Government Circulars", "New Rules"] },
  ],
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Updates", href: "/updates" },
  { label: "FAQ's", href: "/faq" },
];

// --- Animation Variants ---
const menuVariants: Variants = {
  closed: { opacity: 0, scale: 0.95, y: -20 },
  open: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => setIsMobileMenuOpen(false), [pathname]);


  const socialLinks = [
    { icon: IoLogoLinkedin, href: "https://linkedin.com" },
    { icon: FaXTwitter, href: "https://twitter.com" },
    { icon: FaInstagram, href: "https://instagram.com" },
  ];

  return (
    <header className="relative w-full">
      {/* Top Banner - Hidden on very small screens for better vertical space */}
      <div className="hidden sm:flex w-full bg-[#162744] text-slate-200 py-3 px-6 lg:px-20 justify-between items-center text-[11px] uppercase tracking-widest border-b border-white/10 family-medium">
        <div className="flex gap-8 items-center">
          <a href="mailto:info@eminenceglobal.com" className="flex items-center gap-2 hover:text-[#bc8737] transition-colors">
            <MdEmail className="text-[#bc8737] text-sm" /> info@eminenceglobal.com
          </a>
          <a href="tel:+919910678889" className="flex items-center gap-2 hover:text-[#bc8737] transition-colors">
            <IoIosCall className="text-[#bc8737] text-sm" /> +91 9910678889
          </a>
          <div className="hidden lg:flex items-center gap-2 text-slate-400">
            <BsClock className="text-[#bc8737] text-sm" /> Mon - Sat: 10:00 AM - 6:30 PM
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden xl:inline-block text-[#bc8737] border-r border-white/20 pr-6 mr-2">
            Global Regulatory & Certification Experts
          </span>
          <div className="flex items-center gap-4">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="hover:text-[#bc8737] transition-all hover:-translate-y-0.5"
                >
                  <Icon size={14} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="relative flex items-center group">
            <div className="relative h-12 w-32 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/hello.png"
                alt="Unmatched Consultancy Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              const hasDropdown = !!dropdownData[label];

              return (
                <li
                  key={label}
                  className="relative px-3 py-7"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={href}
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-all rounded-lg px-3 py-2 
                      ${isActive ? "text-amber-600 bg-amber-50" : "text-slate-600 hover:text-amber-600 hover:bg-slate-50"}`}
                  >
                    {label}
                    {hasDropdown && (
                      <FaChevronDown
                        className={`text-[10px] transition-transform duration-300 ${activeDropdown === label ? 'rotate-180' : ''}`}
                      />
                    )}
                  </Link>

                  {/* Desktop Mega Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === label && hasDropdown && (
                      <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                      >
                        <div className="bg-white shadow-2xl rounded-2xl border border-slate-100 overflow-hidden flex min-w-[500px]">
                          {dropdownData[label].map((group, idx) => (
                            <div key={idx} className={`flex-1 min-w-[200px] ${idx !== 0 ? 'border-l border-slate-50' : ''}`}>
                              <div className="bg-slate-50/50 px-6 py-4 border-b border-slate-50">
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                                  {group.title}
                                </span>
                              </div>
                              <ul className="p-4 space-y-1">
                                {group.items.map((item) => (
                                  <li key={item}>
                                    <Link href={href} className="group/item flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-amber-50 transition-all">
                                      <span className="text-sm text-slate-600 group-hover/item:text-amber-700 font-medium">{item}</span>
                                      <MdChevronRight className="text-amber-500 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden sm:inline-flex items-center px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-amber-600 transition-all shadow-md active:scale-95">
              Get Started
            </Link>

            <button
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
                {navLinks.map(({ label, href }) => (
                  <div key={label} className="space-y-2">
                    <Link
                      href={href}
                      className="block text-lg font-bold text-slate-800"
                    >
                      {label}
                    </Link>
                    {dropdownData[label] && (
                      <div className="pl-4 border-l-2 border-amber-100 space-y-3 pt-2 pb-4">
                        {dropdownData[label].flatMap(g => g.items).map(item => (
                          <Link key={item} href={href} className="block text-sm text-slate-500 hover:text-amber-600">
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link href="/contact" className="block w-full py-4 bg-amber-500 text-white text-center font-bold rounded-xl">
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
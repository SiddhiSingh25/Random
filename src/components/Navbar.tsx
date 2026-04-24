"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MdEmail, MdChevronRight } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaChevronDown } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { usePathname } from "next/navigation";

// --- Data for all Dropdowns ---
const dropdownData: Record<string, { title: string; items: string[] }[]> = {
  "About Us": [
    { title: "COMPANY", items: ["Our Mission", "History", "Infrastructure"] },
    { title: "LEGAL", items: ["Certifications", "Privacy Policy", "Terms"] },
  ],
  "Our Services": [
    { title: "LICENCE", items: ["BIS (ISI MARK)", "DOMESTIC PRODUCT", "BIS SCHEME X"] },
    { title: "REGISTRATION", items: ["BIS (CRS)", "WPC-ETA", "BEE CERTIFICATION"] },
    { title: "AUXILIARY", items: ["TRAINING", "IMPORT/EXPORT", "ISO REG"] },
  ],
  "Team": [
    { title: "LEADERSHIP", items: ["Directors", "Advisory Board"] },
    { title: "DEPARTMENTS", items: ["Technical Team", "Sales Team"] },
  ],
  "Blogs": [
    { title: "LATEST", items: ["Industry News", "Tech Updates"] },
    { title: "GUIDES", items: ["Compliance Guide", "How to Apply"] },
  ],
  "FAQ's": [
    { title: "GENERAL", items: ["Pricing", "Process Time"] },
    { title: "SUPPORT", items: ["Documentation", "Contact Support"] },
  ],
  "Updates": [
    { title: "NOTIFICATIONS", items: ["Government Circulars", "New Rules"] },
  ],
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const fadeDown: Variants = {
    hidden: { opacity: 0, y: -16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: "easeOut" } },
    exit: { opacity: 0, y: 10, transition: { duration: 0.15 } }
  };

  const links: [string, string][] = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Our Services", "/services"],
    ["Team", "/team"],
    ["Blogs", "/blogs"],
    ["FAQ's", "/faq"],
    ["Updates", "/Updates"],
  ];

  return (
    <>
      {/* Top Banner */}
      <motion.div variants={fadeDown} initial="hidden" animate="show" className="w-full bg-primary-800 text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-2">
        <p className="text-sm flex gap-4">
          <a href="mailto:unmatchedconsultancy@gmail.com" className="inline-flex items-center gap-1 hover:text-secondary-500 transition">
            <MdEmail className="text-secondary-500 text-xl" /> unmatchedconsultancy@gmail.com
          </a>
          <a href="tel:+919910678889" className="inline-flex items-center gap-1 hover:text-secondary-500 transition">
            <IoIosCall className="text-secondary-500 text-xl" /> +91 9910678889
          </a>
        </p>
        <div className="hidden md:flex items-center gap-2">
          {[{ icon: IoLogoLinkedin, href: "#" }, { icon: MdOutlineMailOutline, href: "#" }, { icon: FaXTwitter, href: "#" }, { icon: FaInstagram, href: "#" }].map(({ icon: Icon, href }, i) => (
            <Link key={i} href={href}><Icon className="text-secondary-500 text-lg hover:text-secondary-600 transition" /></Link>
          ))}
        </div>
      </motion.div>

      {/* Navbar */}
      <motion.nav variants={fadeDown} initial="hidden" animate="show" className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="relative h-12 w-32">
            <Image src="/images/logo.png" alt="Logo" fill priority className="object-contain" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 font-semibold text-[13px] lg:text-sm">
            {links.map(([label, href]) => {
              const isActive = pathname === href;
              const hasDropdown = label !== "Home" && dropdownData[label];

              return (
                <li 
                  key={label} 
                  className="relative group py-6"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={href}
                    className={`flex items-center gap-1 transition ${isActive || activeDropdown === label ? "text-secondary-600" : "text-gray-700 hover:text-secondary-600"}`}
                  >
                    {label}
                    {hasDropdown && <FaChevronDown className={`text-[10px] transition-transform ${activeDropdown === label ? 'rotate-180' : ''}`} />}
                  </Link>
                  <span className={`absolute left-0 bottom-4 h-[2px] w-0 transition-all duration-300 group-hover:w-full bg-secondary-600 ${isActive ? 'w-full' : ''}`} />

                  {/* Dynamic Mega Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === label && hasDropdown && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className="absolute top-full left-1/2 -translate-x-1/2 min-w-[500px] max-w-[90vw] bg-white shadow-2xl rounded-xl border border-gray-100 overflow-hidden"
                      >
                        <div className={`grid grid-cols-${Math.min(dropdownData[label].length, 3)}`}>
                          {dropdownData[label].map((group, idx) => (
                            <div key={idx} className="border-r border-gray-50 last:border-none">
                              <h3 className={`px-5 py-3 text-[11px] font-bold tracking-widest text-white ${idx % 2 === 0 ? 'bg-primary-800' : 'bg-secondary-600'}`}>
                                {group.title}
                              </h3>
                              <ul className="p-3 space-y-0.5">
                                {group.items.map((item) => (
                                  <li key={item}>
                                    <Link href={href} className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-secondary-600 hover:bg-gray-50 rounded-md transition-all text-[12px] group/item">
                                      <MdChevronRight className="text-secondary-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                      {item}
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

            <li>
              <Link href="/contact" className="inline-flex items-center rounded-full bg-primary-900 px-5 py-2 text-white text-sm font-semibold hover:bg-secondary-600 transition shadow-lg shadow-primary-900/20">
                Contact Us
              </Link>
            </li>
          </ul>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg width="26" height="26" viewBox="0 0 30 30"><path d="M3 7h24M3 15h24M3 23h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </motion.nav>
    </>
  );
}
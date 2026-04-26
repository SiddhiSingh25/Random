"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdEmail,
  MdChevronRight,
  MdClose,
  MdMenu,
  MdExpandMore,
} from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { BsClock, BsShieldCheck } from "react-icons/bs";
import { HiOutlineDocumentCheck, HiOutlineGlobeAlt } from "react-icons/hi2";
import {
  TbCertificate,
  TbShieldStar,
  TbAtom,
  TbRecycle,
  TbWeight,
  TbFlame,
  TbDiamond,
} from "react-icons/tb";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceItem {
  label: string;
  icon: React.ElementType;
  href: string;
  tag?: string;
}

interface ServiceGroup {
  category: string;
  items: ServiceItem[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const serviceGroups: ServiceGroup[] = [
  {
    category: "BIS Certifications",
    items: [
      {
        label: "BIS Certification (Foreign Manufacturer)",
        icon: HiOutlineGlobeAlt,
        href: "/services/bis-foreign",
        tag: "Popular",
      },
      {
        label: "ISI Mark Certification",
        icon: TbShieldStar,
        href: "/services/isi-mark",
      },
      {
        label: "BIS CRS Registration",
        icon: TbCertificate,
        href: "/services/bis-crs",
      },
    ],
  },
  {
    category: "Regulatory Approvals",
    items: [
      {
        label: "WPC Approval",
        icon: TbAtom,
        href: "/services/wpc",
      },
      {
        label: "TEC Certification",
        icon: BsShieldCheck,
        href: "/services/tec",
      },
      {
        label: "PESO Approval",
        icon: TbFlame,
        href: "/services/peso",
      },
    ],
  },
  {
    category: "Registrations",
    items: [
      {
        label: "EPR Registration",
        icon: TbRecycle,
        href: "/services/epr",
        tag: "New",
      },
      {
        label: "LMPC Registration",
        icon: TbWeight,
        href: "/services/lmpc",
      },
      {
        label: "Hallmark Registration",
        icon: TbDiamond,
        href: "/services/hallmark",
      },
    ],
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  // { label: "Certification Process", href: "/process" },
  { label: "Achievements", href: "/achievements" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { icon: IoLogoLinkedin, href: "https://linkedin.com" },
  { icon: FaXTwitter, href: "https://twitter.com" },
  { icon: FaInstagram, href: "https://instagram.com" },
];

// ─── Framer variants ───────────────────────────────────────────────────────────

const megaMenuVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 380, damping: 32 },
  },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: { duration: 0.15 } },
} as const;

const drawerVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 320, damping: 38 },
  },
  exit: { x: "-100%", transition: { duration: 0.22, ease: "easeInOut" } },
} as const;

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.28, ease: "easeOut" },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
} as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function SheenNavbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const desktopServicesRef = useRef<HTMLLIElement>(null);
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleServiceMouseEnter = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setServicesOpen(true);
  };
  const handleServiceMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header className="relative w-full font-sans">

      {/* ── Top Banner ──────────────────────────────────────────────────────── */}
      <div className="hidden sm:flex w-full bg-[#0d1f3c] text-slate-300 py-2.5 px-4 md:px-16 lg:px-28 justify-between items-center text-[10.5px] uppercase tracking-widest border-b border-white/5">
        <div className="flex gap-7 items-center">
          <a
            href="mailto:info@eminencecompliance.com"
            className="flex items-center gap-2 hover:text-[#c9a94e] transition-colors duration-200"
          >
            <MdEmail className="text-[#c9a94e] text-sm" />
            info@eminencecompliance.com
          </a>
          <a
            href="tel:+917428555852"
            className="flex items-center gap-2 hover:text-[#c9a94e] transition-colors duration-200"
          >
            <IoIosCall className="text-[#c9a94e] text-sm" />
            +91 74285 55852
          </a>
          <span className="hidden lg:flex items-center gap-2 text-slate-500">
            <BsClock className="text-[#c9a94e] text-sm" />
            Mon–Sat: 10:00 AM – 6:30 PM
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden xl:inline text-[#c9a94e]/80 border-r border-white/10 pr-5 mr-1 font-medium tracking-wider">
            India's Trusted Regulatory &amp; BIS Experts
          </span>
          {socialLinks.map(({ icon: Icon, href }, i) => (
            <Link
              key={i}
              href={href}
              target="_blank"
              className="text-slate-400 hover:text-[#c9a94e] transition-all hover:-translate-y-0.5 duration-200"
            >
              <Icon size={13} />
            </Link>
          ))}
        </div>
      </div>

      {/* ── Main Nav ────────────────────────────────────────────────────────── */}
      <nav
        className={`sticky top-0 z-50 w-full   transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(13,31,60,0.09)]"
          : "bg-white border-b border-slate-100"
          }`}
      >
        <div className=" mx-auto px-4 md:px-16 lg:px-28  w-full  h-[70px] flex items-center justify-between gap-6">

          {/* ── Logo ── */}
          {/*
           * Responsive sizing via Tailwind:
           *   mobile  → 130 × 38 px
           *   sm/md   → 150 × 44 px
           *   lg+     → 170 × 50 px
           * The `object-contain object-left` keeps the image sharp and left-anchored
           * at every size without any cropping.
           * Replace the src below with your actual logo path, e.g. "/images/logoNew.png"
           */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 group"
            aria-label="Eminence Global Compliance Group — Home"
          >
            <div
              className="
    relative
    w-[150px] h-[48px]
    sm:w-[190px] sm:h-[56px]
    md:w-[220px] md:h-[62px]
    lg:w-[320px] lg:h-[78px]
    xl:w-[350px] xl:h-[82px]
  "
            >
              <Image
                src="/images/logoNew.png"
                alt="Eminence Global Compliance Group"
                fill
                priority
                sizes="(max-width: 640px) 150px, (max-width: 768px) 170px, (max-width: 1024px) 200px, 350px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* ── Desktop Nav Links ── */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(({ label, href, hasDropdown }) => {
              const isActive =
                pathname === href ||
                (hasDropdown && pathname.startsWith("/services"));

              if (hasDropdown) {
                return (
                  <li
                    key={label}
                    ref={desktopServicesRef}
                    className="relative"
                    onMouseEnter={handleServiceMouseEnter}
                    onMouseLeave={handleServiceMouseLeave}
                  >
                    <Link
                      href={href}
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-200 ${isActive
                        ? "text-[#0d1f3c] bg-slate-100"
                        : "text-slate-600 hover:text-[#0d1f3c] hover:bg-slate-50"
                        }`}
                    >
                      {label}
                      <MdExpandMore
                        className={`text-base transition-transform duration-300 ${servicesOpen ? "rotate-180 text-[#c9a94e]" : ""
                          }`}
                      />
                    </Link>

                    {/* Mega Menu */}
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          variants={megaMenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[700px]"
                          onMouseEnter={handleServiceMouseEnter}
                          onMouseLeave={handleServiceMouseLeave}
                        >
                          {/* Pointer */}
                          <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-slate-100 rotate-45 z-10" />

                          <div className="relative z-20 bg-white rounded-2xl shadow-[0_20px_60px_rgba(13,31,60,0.15)] border border-slate-100 overflow-hidden">
                            {/* Header strip */}
                            <div className="bg-[#0d1f3c] px-7 py-4 flex items-center justify-between">
                              <div>
                                <p className="text-white text-sm font-bold tracking-wide">
                                  Our Services
                                </p>
                                <p className="text-slate-400 text-[11px] tracking-wider mt-0.5">
                                  End-to-end regulatory compliance solutions
                                </p>
                              </div>
                              <Link
                                href="/services"
                                className="text-[#c9a94e] text-xs font-semibold tracking-widest uppercase flex items-center gap-1 hover:gap-2 transition-all duration-200"
                              >
                                View All <MdChevronRight />
                              </Link>
                            </div>

                            {/* Service groups */}
                            <div className="grid grid-cols-3 divide-x divide-slate-50 p-1">
                              {serviceGroups.map((group) => (
                                <div key={group.category} className="px-3 py-4">
                                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 px-3 mb-3">
                                    {group.category}
                                  </p>
                                  <ul className="space-y-0.5">
                                    {group.items.map((item) => {
                                      const Icon = item.icon;
                                      return (
                                        <li key={item.label}>
                                          <Link
                                            href={item.href}
                                            className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all duration-150"
                                          >
                                            <span className="w-7 h-7 rounded-lg bg-slate-100 group-hover/item:bg-[#0d1f3c] flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                                              <Icon className="text-slate-500 group-hover/item:text-[#c9a94e] text-sm transition-colors duration-200" />
                                            </span>
                                            <span className="flex-1 text-[12.5px] text-slate-600 group-hover/item:text-[#0d1f3c] font-medium leading-snug">
                                              {item.label}
                                            </span>
                                            {item.tag && (
                                              <span
                                                className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${item.tag === "New"
                                                  ? "bg-emerald-50 text-emerald-600"
                                                  : "bg-amber-50 text-amber-600"
                                                  }`}
                                              >
                                                {item.tag}
                                              </span>
                                            )}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            {/* Footer CTA */}
                            <div className="bg-slate-50/70 border-t border-slate-100 px-7 py-3.5 flex items-center justify-between">
                              <p className="text-slate-500 text-[11.5px]">
                                Need guidance choosing the right certification?
                              </p>
                              <Link
                                href="/contact"
                                className="text-[11.5px] font-bold text-[#0d1f3c] hover:text-[#c9a94e] transition-colors flex items-center gap-1"
                              >
                                Talk to an expert <MdChevronRight />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={label}>
                  <Link
                    href={href}
                    className={`flex items-center px-3.5 py-2 rounded-lg text-[13px] font-semibold tracking-wide transition-all duration-200 ${isActive
                      ? "text-[#0d1f3c] bg-slate-100"
                      : "text-slate-600 hover:text-[#0d1f3c] hover:bg-slate-50"
                      }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── CTA + Mobile Toggle ── */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[12.5px] font-bold tracking-wide text-white bg-[#0d1f3c] hover:bg-[#c9a94e] transition-all duration-250 shadow-md hover:shadow-[0_6px_20px_rgba(201,169,78,0.35)] active:scale-95"
            >
              <HiOutlineDocumentCheck size={15} />
              Get Consultation
            </Link>
            <button
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open menu"
            >
              <MdMenu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 bg-[#0d1f3c]/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 left-0 bottom-0 w-[300px] bg-white z-50 shadow-2xl flex flex-col lg:hidden overflow-hidden"
            >
              {/* ── Drawer Header ── */}
              {/*
               * The logo here is rendered white-on-navy.
               * If your logo already has a light/white version, swap the src.
               * Otherwise, `brightness-0 invert` CSS filter turns any dark logo white —
               * remove those two classes if your logo is already suitable for a dark bg.
               */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-[#0d1f3c] border-b border-white/5">
                <Link
                  href="/"
                  onClick={() => setIsMobileOpen(false)}
                  aria-label="Home"
                >
                  <div
                    className="
    relative
    w-[150px] h-[48px]
    sm:w-[190px] sm:h-[56px]
    md:w-[220px] md:h-[62px]
    lg:w-[320px] lg:h-[78px]
    xl:w-[350px] xl:h-[82px]
  "
                  >
                    <Image
                      src="/images/logoNew.png"
                      alt="Eminence Global Compliance Group"
                      fill
                      priority
                      sizes="(max-width: 640px) 170px, (max-width: 768px) 200px, (max-width: 1024px) 240px, 350px"
                      className="object-contain object-left"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <MdClose size={22} className="text-white" />
                </button>
              </div>

              {/* CTA */}
              <div className="px-5 pt-5 pb-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#0d1f3c] text-white text-sm font-bold tracking-wide shadow-md active:scale-95 transition-transform"
                >
                  <HiOutlineDocumentCheck size={16} />
                  Get Free Consultation
                </Link>
              </div>

              {/* Divider */}
              <div className="mx-5 h-px bg-slate-100" />

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto px-3 py-3">
                {navLinks.map(({ label, href, hasDropdown }) => {
                  const isActive = pathname === href;

                  if (hasDropdown) {
                    return (
                      <div key={label}>
                        <button
                          className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${mobileServicesOpen
                            ? "bg-slate-50 text-[#0d1f3c]"
                            : "text-slate-700 hover:bg-slate-50"
                            }`}
                          onClick={() =>
                            setMobileServicesOpen(!mobileServicesOpen)
                          }
                        >
                          <span>{label}</span>
                          <MdExpandMore
                            className={`text-lg text-slate-400 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                              }`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              variants={accordionVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <div className="px-2 pb-2 space-y-3 pt-1">
                                {serviceGroups.map((group) => (
                                  <div key={group.category}>
                                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 px-3 mb-1.5">
                                      {group.category}
                                    </p>
                                    {group.items.map((item) => {
                                      const Icon = item.icon;
                                      return (
                                        <Link
                                          key={item.label}
                                          href={item.href}
                                          onClick={() => setIsMobileOpen(false)}
                                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 active:bg-slate-100 transition-all"
                                        >
                                          <span className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                                            <Icon className="text-slate-500 text-sm" />
                                          </span>
                                          <span className="text-[12.5px] text-slate-600 font-medium flex-1 leading-snug">
                                            {item.label}
                                          </span>
                                          {item.tag && (
                                            <span
                                              className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full ${item.tag === "New"
                                                ? "bg-emerald-50 text-emerald-600"
                                                : "bg-amber-50 text-amber-600"
                                                }`}
                                            >
                                              {item.tag}
                                            </span>
                                          )}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setIsMobileOpen(false)}
                      className={`flex items-center w-full px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                        ? "bg-slate-100 text-[#0d1f3c]"
                        : "text-slate-700 hover:bg-slate-50 active:bg-slate-100"
                        }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>

              {/* ── Drawer Footer — real contact details ── */}
              <div className="border-t border-slate-100 px-5 py-4 bg-slate-50/50">
                <div className="flex flex-col gap-2.5 text-[11px] text-slate-500">
                  <a
                    href="tel:+917428555852"
                    className="flex items-center gap-2 hover:text-[#0d1f3c] transition-colors"
                  >
                    <IoIosCall className="text-[#c9a94e] text-[13px] flex-shrink-0" />
                    +91 74285 55852
                  </a>
                  <a
                    href="mailto:info@eminencecompliance.com"
                    className="flex items-center gap-2 hover:text-[#0d1f3c] transition-colors"
                  >
                    <MdEmail className="text-[#c9a94e] text-[13px] flex-shrink-0" />
                    info@eminencecompliance.com
                  </a>
                  <span className="flex items-start gap-2 text-slate-400 leading-relaxed">
                    {/* inline map-pin svg — no extra dep needed */}
                    <svg
                      className="flex-shrink-0 mt-[1px]"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c9a94e"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    Ganga Vihar, New Delhi – 110094
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
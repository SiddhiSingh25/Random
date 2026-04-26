"use client";

import type { ReactNode, MouseEvent } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaCheckCircle,
  FaArrowRight,
  FaCertificate,
  FaShieldAlt,
  FaFileAlt,
  FaIndustry,
} from "react-icons/fa";
import { MdVerified, MdOutlineLanguage } from "react-icons/md";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */
interface TrustBadge {
  icon: ReactNode;
  stat: string;
  label: string;
}

interface QuickLink {
  label: string;
  href: string;
}

interface ContactItem {
  icon: ReactNode;
  value: string;
  href: string;
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const trustBadges: TrustBadge[] = [
  { icon: <FaCertificate size={22} />, stat: "1500+",     label: "Certifications Guided" },
  { icon: <MdOutlineLanguage size={22} />, stat: "25+",   label: "Countries Assisted" },
  { icon: <FaShieldAlt size={22} />, stat: "Dedicated",   label: "BIS Experts" },
  { icon: <FaFileAlt size={22} />, stat: "End-to-End",    label: "Approval Support" },
];

const services: string[] = [
  "BIS Certification",
  "CRS Registration",
  "ISI Mark License",
  "FMCS Approval",
  "Hallmark Registration",
  "Technical Documentation",
  "Product Testing",
];

const quickLinks: QuickLink[] = [
  { label: "Home",                   href: "/" },
  { label: "About Us",               href: "/about" },
  { label: "Services",               href: "/services" },
  { label: "Global Audits",          href: "/audits" },
  { label: "Recent Certifications",  href: "/certifications" },
  { label: "Contact Us",             href: "/contact" },
];

const contacts: ContactItem[] = [
  { icon: <FaEnvelope size={13} />, value: "info@eminencecompliance.com",          href: "mailto:info@eminencecompliance.com" },
  { icon: <FaEnvelope size={13} />, value: "Inbox@eminencecompliance.com",         href: "mailto:Inbox@eminencecompliance.com" },
  { icon: <FaEnvelope size={13} />, value: "certification@eminencecompliance.com", href: "mailto:certification@eminencecompliance.com" },
  { icon: <FaPhone   size={13} />, value: "+91 7428555852",                        href: "tel:+917428555852" },
  { icon: <FaGlobe   size={13} />, value: "www.eminencecompliance.com",            href: "https://www.eminencecompliance.com" },
];

const countries: string[] = [
  "India", "China", "Taiwan", "South Korea",
  "Germany", "UAE", "Vietnam",
];

const legalLinks: string[] = [
  "Privacy Policy",
  "Terms & Conditions",
  "Business Compliance Notice",
];

/* ─────────────────────────────────────────────
   Helpers for inline hover without CSS modules
───────────────────────────────────────────── */
function hoverGold(e: MouseEvent<HTMLElement>): void {
  (e.currentTarget as HTMLElement).style.color = "#f0c060";
}
function unhoverMuted(e: MouseEvent<HTMLElement>): void {
  (e.currentTarget as HTMLElement).style.color = "rgba(200,195,185,0.7)";
}
function hoverGoldAccent(e: MouseEvent<HTMLElement>): void {
  (e.currentTarget as HTMLElement).style.color = "#bc8737";
}
function unhoverLegal(e: MouseEvent<HTMLElement>): void {
  (e.currentTarget as HTMLElement).style.color = "rgba(160,155,145,0.65)";
}

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(175deg, #0f1b37 0%, #0f1b37 40%, #0f1b37 100%)",
      }}
      className="relative overflow-hidden"

    
    >
      {/* ── World-map SVG watermark ── */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none select-none">
        <svg
          viewBox="0 0 1440 600"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          <circle cx="200" cy="200" r="180" fill="none" stroke="#bc8737" strokeWidth="0.8" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#bc8737" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="60"  fill="none" stroke="#bc8737" strokeWidth="0.4" />
          <circle cx="900" cy="300" r="240" fill="none" stroke="#bc8737" strokeWidth="0.8" />
          <circle cx="900" cy="300" r="160" fill="none" stroke="#bc8737" strokeWidth="0.5" />
          <circle cx="900" cy="300" r="80"  fill="none" stroke="#bc8737" strokeWidth="0.4" />
          <circle cx="1300" cy="150" r="140" fill="none" stroke="#bc8737" strokeWidth="0.6" />
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={i}
              x1="900"
              y1="300"
              x2={200 + Math.cos((i * 20 * Math.PI) / 180) * 700}
              y2={300 + Math.sin((i * 20 * Math.PI) / 180) * 700}
              stroke="#bc8737"
              strokeWidth="0.3"
            />
          ))}
          {(
            [
              [200, 200], [450, 130], [680, 250], [950, 80],
              [1150, 320], [1350, 190], [400, 400], [750, 420], [1050, 450],
            ] as [number, number][]
          ).map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="4" fill="#bc8737" />
          ))}
          {(
            [
              [200, 200], [450, 130], [680, 250], [950, 80],
              [1150, 320], [1350, 190], [400, 400], [750, 420], [1050, 450],
            ] as [number, number][]
          ).map(([cx, cy], i, arr) =>
            i < arr.length - 1 ? (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={arr[i + 1][0]}
                y2={arr[i + 1][1]}
                stroke="#bc8737"
                strokeWidth="0.4"
              />
            ) : null
          )}
        </svg>
      </div>

    
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* COL 1 — Brand Overview */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-5">
            <div className="flex items-center gap-3">
               <div
                            className="
                              relative
                              w-[130px] h-[38px]
                              sm:w-[150px] sm:h-[44px]
                              lg:w-[300px] lg:h-[50px]
                              transition-transform duration-300 group-hover:scale-[1.03]
                            "
                          >
                            <Image
                              src="/images/logo.png"
                              alt="Eminence Global Compliance Group"
                              fill
                              priority
                              sizes="(max-width: 640px) 130px, (max-width: 1024px) 150px, 170px"
                              className="object-contain object-left"
                            />
                          </div>
              <div>
                <div
                  className="family-mainheading text-xs tracking-[0.15em]"
                  style={{ color: "#bc8737" }}
                >
                  EMINENCE
                </div>
                <div
                  className="family-mainheading text-[10px] tracking-[0.12em]"
                  style={{ color: "rgba(220,215,205,0.6)" }}
                >
                  GLOBAL COMPLIANCE GROUP
                </div>
              </div>
            </div>

            <div
              style={{
                width: "40px",
                height: "2px",
                background: "linear-gradient(90deg,#bc8737,transparent)",
              }}
            />

            <p
              className="family-regular text-sm leading-relaxed"
              style={{ color: "rgba(200,195,185,0.75)" }}
            >
              A premier regulatory consultancy specialising in BIS certifications,
              government approvals, and international compliance for manufacturers
              across India and global markets.
            </p>

            <div className="flex gap-3 pt-1">
              {([FaLinkedin, FaTwitter, FaFacebook, FaInstagram] as const).map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social media link"
                    className="w-8 h-8 rounded flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(188,135,55,0.2)",
                      color: "rgba(188,135,55,0.8)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(188,135,55,0.15)";
                      e.currentTarget.style.borderColor = "rgba(188,135,55,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.borderColor = "rgba(188,135,55,0.2)";
                    }}
                  >
                    <Icon size={14} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* COL 2 — Regulatory Services */}
          <div className="lg:col-span-2 space-y-4">
            <h4
              className="family-semibold text-[11px] tracking-[0.2em] uppercase"
              style={{ color: "#bc8737" }}
            >
              Regulatory Services
            </h4>
            <div style={{ width: "24px", height: "1px", background: "#bc8737" }} />
            <ul className="space-y-2">
              {services.map((s, i) => (
                <li key={i}>
                  <Link
                    href="/services"
                    className="family-regular text-sm flex items-center gap-2 transition-all duration-200"
                    style={{ color: "rgba(200,195,185,0.7)" }}
                    onMouseEnter={hoverGold}
                    onMouseLeave={unhoverMuted}
                  >
                    <span style={{ color: "#bc8737", opacity: 0.6 }}>›</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3 — Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4
              className="family-semibold text-[11px] tracking-[0.2em] uppercase"
              style={{ color: "#bc8737" }}
            >
              Quick Links
            </h4>
            <div style={{ width: "24px", height: "1px", background: "#bc8737" }} />
            <ul className="space-y-2">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <Link
                    href={l.href}
                    className="family-regular text-sm flex items-center gap-2 transition-all duration-200"
                    style={{ color: "rgba(200,195,185,0.7)" }}
                    onMouseEnter={hoverGold}
                    onMouseLeave={unhoverMuted}
                  >
                    <span style={{ color: "#bc8737", opacity: 0.6 }}>›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 — Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4
              className="family-semibold text-[11px] tracking-[0.2em] uppercase"
              style={{ color: "#bc8737" }}
            >
              Contact Information
            </h4>
            <div style={{ width: "24px", height: "1px", background: "#bc8737" }} />

            <p
              className="family-light text-xs leading-relaxed"
              style={{ color: "rgba(200,195,185,0.6)" }}
            >
              For inquiries related to regulatory certifications, trade compliance, BIS
              approvals, and global government licensing assistance, please contact our
              expert team.
            </p>

            <ul className="space-y-3">
              {contacts.map((c, i) => (
                <li key={i}>
                  <a
                    href={c.href}
                    className="flex items-start gap-2.5 text-xs break-all transition-all duration-200"
                    style={{ color: "rgba(200,195,185,0.75)" }}
                    onMouseEnter={hoverGold}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(200,195,185,0.75)";
                    }}
                  >
                    <span className="mt-0.5 shrink-0" style={{ color: "#bc8737" }}>
                      {c.icon}
                    </span>
                    <span className="family-regular">{c.value}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-xs">
                <FaMapMarkerAlt
                  size={13}
                  className="mt-0.5 shrink-0"
                  style={{ color: "#bc8737" }}
                />
                <span
                  className="family-regular leading-relaxed"
                  style={{ color: "rgba(200,195,185,0.75)" }}
                >
                  G/F Kh No-230, F-348 OLD-34-A/1, Gali No-7,
                  <br />
                  Ganga Vihar, New Delhi – 110094, India
                </span>
              </li>
            </ul>
          </div>

          
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(188,135,55,0.15)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p
              className="family-light text-xs text-center sm:text-left"
              style={{ color: "rgba(160,155,145,0.7)" }}
            >
              © {new Date().getFullYear()} Eminence Global Compliance Group. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1">
              {legalLinks.map((item, i) => (
                <Link
                  key={i}
                  href="#"
                  className="family-regular text-xs transition-colors duration-200"
                  style={{ color: "rgba(160,155,145,0.65)" }}
                  onMouseEnter={hoverGoldAccent}
                  onMouseLeave={unhoverLegal}
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <FaIndustry size={11} style={{ color: "rgba(188,135,55,0.5)" }} />
              <span
                className="family-light text-xs"
                style={{ color: "rgba(160,155,145,0.5)" }}
              >
                BIS Certified Consultancy Practice
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div
        style={{
          background:
            "linear-gradient(90deg, transparent, #bc8737, transparent)",
          height: "1px",
        }}
      />
    </footer>
  );
}

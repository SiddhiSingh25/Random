"use client";

import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { motion, Variants, easeInOut, easeOut } from "framer-motion";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaCertificate,
  FaHandshake,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import SimpleHeading from "./common/SimpleHeading";

/* ─────────────────────────────────────────────
   Schema
───────────────────────────────────────────── */
const schema = yup.object({
  fullName:        yup.string().required("Full name is required"),
  companyName:     yup.string().required("Company name is required"),
  email:           yup.string().email("Enter a valid email").required("Email is required"),
  phoneNo:         yup.string().required("Phone number is required").matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  serviceRequired: yup.string().required("Please select a service"),
  message:         yup.string().required("Message is required"),
});

type ContactFormData = yup.InferType<typeof schema>;

/* ─────────────────────────────────────────────
   Animations
───────────────────────────────────────────── */
const container: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeInOut } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0, x: -16 },
  show:   { opacity: 1, x: 0,  transition: { duration: 0.5, ease: easeOut } },
};

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const contactCards = [
  {
    icon: <FaPhoneAlt size={16} />,
    label: "Direct Consultation Line",
    primary: "+91 7428555852",
    sub: "Mon – Sat, 10:00 AM – 7:00 PM IST",
    href: "tel:+917428555852",
  },
  {
    icon: <FaEnvelope size={16} />,
    label: "Regulatory Enquiries",
    primary: "info@eminencecompliance.com",
    sub: "certification@eminencecompliance.com",
    href: "mailto:info@eminencecompliance.com",
  },
  {
    icon: <FaMapMarkerAlt size={16} />,
    label: "Registered Office",
    primary: "Ganga Vihar, New Delhi – 110094",
    sub: "G/F Kh No-230, F-348 OLD-34-A/1, Gali No-7, North East Delhi, India",
    href: "#",
  },
  {
    icon: <FaGlobe size={16} />,
    label: "Online Portal",
    primary: "www.eminencecompliance.com",
    sub: "Global BIS & Regulatory Services",
    href: "https://www.eminencecompliance.com",
  },
];

const services = [
  "BIS Certification",
  "CRS Registration",
  "ISI Mark License",
  "FMCS Approval (Foreign Manufacturers)",
  "Hallmark Registration",
  "Product Testing Coordination",
  "Technical Documentation",
  "Factory Audit Support",
  "International Compliance Assistance",
];

const trustItems = [
  { icon: <FaCheckCircle size={12} />, text: "Fast Response Team" },
  { icon: <FaCertificate size={12} />, text: "BIS Liaison Experts" },
  { icon: <FaHandshake size={12}  />, text: "Global Manufacturer Assistance" },
  { icon: <FaShieldAlt size={12}  />, text: "End-to-End Compliance Support" },
];

/* ─────────────────────────────────────────────
   Input component
───────────────────────────────────────────── */
type InputProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};

const Field = ({ label, error, children }: InputProps) => (
  <div className="space-y-1.5">
    <label className="block text-xs family-semibold tracking-wide uppercase" style={{ color: "#20385c", opacity: 0.7 }}>
      {label}
    </label>
    {children}
    {error && <p className="text-xs family-medium" style={{ color: "#c0392b" }}>{error}</p>}
  </div>
);

const inputCls =
  "w-full px-4 py-3 text-sm rounded-xl transition-all duration-200 family-medium outline-none";
const inputStyle = {
  background: "#f7f9fc",
  border: "1px solid rgba(32,56,92,0.14)",
  color: "#20385c",
};

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({ resolver: yupResolver(schema) });

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleContact = async (data: ContactFormData) => {
    try {
      await axios.post("/api/contact", data);
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <>
      <style>{`
        .contact-input:focus {
          border-color: rgba(32,56,92,0.45) !important;
          box-shadow: 0 0 0 3px rgba(32,56,92,0.07);
          background: #ffffff !important;
        }
        .contact-card:hover .card-icon-wrap {
          background: #20385c !important;
          border-color: #20385c !important;
        }
        .contact-card:hover .card-icon-wrap svg {
          color: #ffffff !important;
        }
        .contact-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(32,56,92,0.1) !important;
          border-color: rgba(32,56,92,0.2) !important;
        }
        .submit-btn:hover {
          box-shadow: 0 8px 28px rgba(32,56,92,0.35) !important;
          transform: translateY(-1px);
        }
        .submit-btn:active { transform: translateY(0); }
      `}</style>

      <section
        className="relative overflow-hidden py-16 md:py-20"
        style={{ background: "linear-gradient(160deg, #f4f6f9 0%, #edf1f6 50%, #f0f3f8 100%)" }}
      >
        {/* ── Background geometry ── */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.06]"
            style={{ background: "radial-gradient(circle, #20385c, transparent 70%)" }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-[0.05]"
            style={{ background: "radial-gradient(circle, #bc8737, transparent 70%)" }}
          />
          {/* Fine grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.025]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#20385c" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative w-full mx-auto px-4 md:px-16 lg:px-28">

          {/* ══════════════════════════════
              SECTION HEADING
          ══════════════════════════════ */}
         <SimpleHeading
  badgeText="Contact"
  title="Connect With Our Compliance Experts"
/>

          {/* ══════════════════════════════
              MAIN GRID
          ══════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

            {/* ── LEFT: Contact Cards ── */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-4"
            >
              {/* Intro card */}
              <motion.div
                variants={fadeIn}
                className="rounded-2xl p-6 mb-1"
                style={{
                  background: "linear-gradient(140deg, #1a2f4e 0%, #20385c 100%)",
                  boxShadow: "0 8px 32px rgba(32,56,92,0.18)",
                }}
              >
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] family-semibold tracking-widest uppercase mb-4"
                  style={{ background: "rgba(188,135,55,0.15)", border: "1px solid rgba(188,135,55,0.25)", color: "#bc8737" }}
                >
                  <FaShieldAlt size={9} />
                  Eminence Global Compliance Group
                </div>
                <p className="family-medium text-sm leading-relaxed" style={{ color: "rgba(210,205,195,0.8)" }}>
                  Specialising in BIS certification, CRS registration, ISI Mark licensing,
                  FMCS for foreign manufacturers, and end-to-end regulatory compliance across India and global markets.
                </p>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-5 h-px" style={{ background: "#bc8737" }} />
                  <span className="text-xs family-medium" style={{ color: "rgba(188,135,55,0.8)" }}>
                    New Delhi, India · Since 2020
                  </span>
                </div>
              </motion.div>

              {/* Contact Cards */}
              {contactCards.map((card, i) => (
                <motion.a
                  key={i}
                  variants={fadeIn}
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="contact-card flex items-start gap-4 rounded-2xl p-4 transition-all duration-250 cursor-pointer"
                  style={{
                    background: "#ffffff",
                    border: "1px solid rgba(32,56,92,0.09)",
                    boxShadow: "0 2px 12px rgba(32,56,92,0.05)",
                    textDecoration: "none",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="card-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-250"
                    style={{
                      background: "rgba(32,56,92,0.06)",
                      border: "1px solid rgba(32,56,92,0.1)",
                      color: "#20385c",
                    }}
                  >
                    {card.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] family-semibold tracking-widest uppercase mb-0.5" style={{ color: "#bc8737" }}>
                      {card.label}
                    </p>
                    <p className="text-sm family-medium truncate" style={{ color: "#20385c" }}>
                      {card.primary}
                    </p>
                    <p className="text-xs family-medium mt-0.5 leading-relaxed" style={{ color: "rgb(32,56,92)" }}>
                      {card.sub}
                    </p>
                  </div>

                  <FaArrowRight size={10} className="flex-shrink-0 mt-1.5 opacity-30" style={{ color: "#20385c" }} />
                </motion.a>
              ))}
            </motion.div>

            {/* ── RIGHT: Form ── */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="lg:col-span-7"
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(32,56,92,0.1)",
                  boxShadow: "0 4px 40px rgba(32,56,92,0.09), 0 1px 0 rgba(188,135,55,0.15) inset",
                }}
              >
                {/* Form header bar */}
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{
                    borderBottom: "1px solid rgba(32,56,92,0.08)",
                    background: "linear-gradient(90deg, rgba(32,56,92,0.03), rgba(188,135,55,0.03))",
                  }}
                >
                  <div>
                    <h3 className="family-semibold text-base" style={{ color: "#20385c" }}>
                      Request a Consultation
                    </h3>
                    <p className="family-medium text-xs mt-0.5" style={{ color: "rgb(32,56,92)" }}>
                      Our team responds within 24 business hours
                    </p>
                  </div>
                  <div
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] family-semibold"
                    style={{ background: "rgba(32,56,92,0.06)", border: "1px solid rgba(32,56,92,0.1)", color: "#20385c" }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#2ecc71" }} />
                    Experts Online
                  </div>
                </div>

                {/* Success / Error banners */}
                {status === "success" && (
                  <div
                    className="mx-6 mt-5 px-4 py-3 rounded-xl flex items-center gap-3 text-sm family-medium"
                    style={{ background: "rgba(46,204,113,0.08)", border: "1px solid rgba(46,204,113,0.25)", color: "#1e8449" }}
                  >
                    <FaCheckCircle size={14} />
                    Your inquiry has been submitted. We'll contact you shortly.
                  </div>
                )}
                {status === "error" && (
                  <div
                    className="mx-6 mt-5 px-4 py-3 rounded-xl flex items-center gap-3 text-sm family-medium"
                    style={{ background: "rgba(192,57,43,0.07)", border: "1px solid rgba(192,57,43,0.2)", color: "#c0392b" }}
                  >
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}

                {/* Form body */}
                <form
                  onSubmit={handleSubmit(handleContact)}
                  className="p-6 space-y-5"
                  suppressHydrationWarning
                >
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Full Name" error={errors.fullName?.message}>
                      <input
                        {...register("fullName")}
                        placeholder="Rajesh Kumar"
                        className={`${inputCls} contact-input`}
                        style={inputStyle}
                      />
                    </Field>
                    <Field label="Company Name" error={errors.companyName?.message}>
                      <input
                        {...register("companyName")}
                        placeholder="Acme Manufacturing Ltd."
                        className={`${inputCls} contact-input`}
                        style={inputStyle}
                      />
                    </Field>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Email Address" error={errors.email?.message}>
                      <input
                        {...register("email")}
                        placeholder="rajesh@company.com"
                        className={`${inputCls} contact-input`}
                        style={inputStyle}
                      />
                    </Field>
                    <Field label="Phone Number" error={errors.phoneNo?.message}>
                      <input
                        {...register("phoneNo")}
                        placeholder="9876XXXXXX"
                        className={`${inputCls} contact-input`}
                        style={inputStyle}
                      />
                    </Field>
                  </div>

                  {/* Service */}
                  <Field label="Service Required" error={errors.serviceRequired?.message}>
                    <select
                      {...register("serviceRequired")}
                      className={`${inputCls} contact-input appearance-none`}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      defaultValue=""
                    >
                      <option value="" disabled>Select a service…</option>
                      {services.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>

                  {/* Message */}
                  <Field label="Message" error={errors.message?.message}>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Briefly describe your product, country of manufacture, and regulatory requirement…"
                      className={`${inputCls} contact-input resize-none`}
                      style={inputStyle}
                    />
                  </Field>

                  {/* Footer row */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                    <p className="text-xs family-medium leading-relaxed max-w-xs" style={{ color: "rgba(32,56,92,0.45)" }}>
                      By submitting, you agree to our{" "}
                      <span className="family-medium" style={{ color: "#20385c" }}>Privacy Policy</span>{" "}
                      &amp;{" "}
                      <span className="family-medium" style={{ color: "#20385c" }}>Terms of Service</span>.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="submit-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl family-semibold text-sm tracking-wide transition-all duration-250 whitespace-nowrap"
                      style={{
                        background: isSubmitting
                          ? "rgb(32,56,92)"
                          : "linear-gradient(135deg, #20385c, #2d4f80)",
                        color: "#ffffff",
                        boxShadow: "0 4px 16px rgba(32,56,92,0.25)",
                        minWidth: "180px",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Submitting…
                        </>
                      ) : (
                        <>
                          Request Consultation
                          <FaArrowRight size={11} />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>

          {/* ══════════════════════════════
              BOTTOM TRUST STRIP
          ══════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: easeInOut }}
            className="mt-10"
          >
            <div
              className="rounded-2xl px-6 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(32,56,92,0.08)",
                boxShadow: "0 2px 12px rgba(32,56,92,0.05)",
              }}
            >
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  {/* Divider between items */}
                  {i > 0 && (
                    <div
                      className="hidden sm:block w-px h-3.5 mx-2"
                      style={{ background: "rgba(32,56,92,0.12)" }}
                    />
                  )}
                  <span style={{ color: "#bc8737" }}>{item.icon}</span>
                  <span className="family-medium text-xs" style={{ color: "#20385c", opacity: 0.75 }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
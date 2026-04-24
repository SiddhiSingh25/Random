"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaBuilding, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-gray-50 border-t border-gray-700">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-16 lg:px-24">
        
        {/* Main Grid Structure */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* 1. Brand & Description (5 Columns) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block transition-transform hover:scale-[1.02]">
              <div className="relative h-20 w-48">
                <Image
                  src="/images/logo-light.png"
                  alt="Company Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-gray-300">
              Unmatched Consultancy is your trusted partner for accounting, taxation, 
              audit, and financial advisory services. We help businesses navigate 
              complex regulations for sustainable growth.
            </p>
            
            {/* Social Placeholder or Trust Badges can go here */}
            <div className="mt-8 flex gap-4">
               <div className="h-1 w-20 bg-secondary-500 rounded-full" />
            </div>
          </div>

          {/* 2. Navigation Links (3 Columns) */}
          <div className="lg:col-span-3 lg:pl-8">
            <h2 className="text-lg font-bold uppercase tracking-wider text-white">
              Company
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Team", href: "/team" },
                { name: "Blogs", href: "/blog" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-300 transition-all hover:text-secondary-500"
                  >
                    <FaArrowRight className="text-[10px] opacity-0 -ml-4 transition-all group-hover:opacity-100 group-hover:ml-0 text-secondary-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Global Locations (4 Columns) */}
          <div className="lg:col-span-4">
            <h2 className="text-lg font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h2>
            <div className="mt-8 space-y-6">
              {/* Contact Actions */}
              <div className="flex flex-wrap gap-4">
                 <a href="tel:+919910678889" className="flex items-center gap-3 rounded-lg bg-primary-700/50 p-3 text-sm transition-colors hover:bg-primary-600">
                    <FaPhoneAlt className="text-secondary-500" /> +91 9910678889
                 </a>
                 <a href="mailto:unmatchedconsultancy@gmail.com" className="flex items-center gap-3 rounded-lg bg-primary-700/50 p-3 text-sm transition-colors hover:bg-primary-600">
                    <MdEmail className="text-secondary-500" /> Email Us
                 </a>
              </div>

              {/* Office List */}
              <div className="space-y-4 border-t border-gray-700 pt-6 text-sm text-gray-300">
                {[
                  { city: "Delhi", addr: "144 St.no 05 Johripur, Delhi - 110094" },
                  { city: "Noida", addr: "B2-403, Ivy County, Sector 75, Noida - 201301" },
                  { city: "Gurugram", addr: "B-45, Sector 56, Gurugram, Haryana - 122011" },
                ].map((office) => (
                  <div key={office.city} className="flex items-start gap-3">
                    <FaBuilding className="mt-1 flex-shrink-0 text-secondary-500" />
                    <p><span className="font-bold text-white">{office.city}:</span> {office.addr}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-400 md:text-sm">
              © {currentYear} <span className="text-white font-medium">Unmatched Consultancy</span>. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-xs text-gray-400">
               <Link href="#" className="hover:text-secondary-500 transition-colors">Privacy Policy</Link>
               <Link href="#" className="hover:text-secondary-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
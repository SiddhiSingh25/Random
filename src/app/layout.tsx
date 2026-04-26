import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";
import LenisScroll from "@/components/lenisScroll";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title:
    "Eminence Global Compliance Group | BIS Certification, Regulatory Approvals & Global Compliance Consultants",
  description:
    "Eminence Global Compliance Group provides expert BIS Certification, ISI Mark, CRS Registration, FMCS, BEE, WPC ETA, CDSCO, Ministry NOCs, Customs Clearance, Product Testing, and Global Regulatory Compliance consulting services for manufacturers, importers, exporters, and international brands.",
  keywords: [
    "Eminence Global Compliance Group",
    "BIS Certification Consultant",
    "ISI Mark Certification",
    "BIS CRS Registration",
    "Foreign Manufacturer Certification Scheme",
    "FMCS Consultant India",
    "BEE Certification",
    "WPC ETA Approval",
    "CDSCO Registration",
    "DPIIT NOC Consultant",
    "Ministry of Steel NOC",
    "Product Testing Consultant",
    "Customs Clearance Support",
    "Trade Compliance Consultant",
    "Regulatory Compliance Consultant",
    "Global Product Certification",
    "Import Export Compliance India",
    "International Regulatory Consultant",
  ],
  metadataBase: new URL("https://eminencecompliance.com"),

  openGraph: {
    title:
      "Eminence Global Compliance Group | BIS Certification & Global Regulatory Compliance Experts",
    description:
      "Professional consulting firm offering BIS approvals, product certification, customs clearance, ministry NOCs, testing support, and international compliance services for Indian and global markets.",
    url: "https://eminencecompliance.com",
    siteName: "Eminence Global Compliance Group",
    images: [
      {
        url: "https://eminencecompliance.com/images/logoNew.png",
        width: 1200,
        height: 630,
        alt: "Eminence Global Compliance Group Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Eminence Global Compliance Group | BIS & Global Compliance Consultants",
    description:
      "Trusted consultants for BIS Certification, ISI, CRS, WPC ETA, BEE, Ministry NOCs, Product Testing, Customs Clearance, and International Regulatory Approvals.",
    images: ["https://eminencecompliance.com/images/logoNew.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Eminence Global Compliance Group",
              url: "https://eminencecompliance.com",
              logo: "https://eminencecompliance.com/images/logoNew.png",
              email: [
                "info@eminencecompliance.com",
                "inbox@eminencecompliance.com",
                "certification@eminencecompliance.com",
                "support@eminencecompliance.com",
              ],
              sameAs: [
                "https://www.linkedin.com/company/eminence-global-compliance-group/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-7428555852",
                  contactType: "customer service",
                  areaServed: ["IN", "US", "AE", "CN", "KR", "TW", "VN", "DE", "GLOBAL"],
                  availableLanguage: ["English", "Hindi"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
            }),
          }}
        />
      </head>

      <LenisScroll />

      <body className={`${outfit.variable} family-semibold antialiased`}>
        <Navbar />
        {children}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop
          closeOnClick
          pauseOnHover
        />

        <Footer />
      </body>
    </html>
  );
}
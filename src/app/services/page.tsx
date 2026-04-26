// // // "use client";

// // // import Heading from "@/components/common/Heading";
// // // import ServiceCard from "@/components/layout/services/ServiceCard";
// // // import { servicesData } from "@/data/services-data";
// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { useState } from "react";

// // // // --- Animation Variants ---
// // // const containerVariants = {
// // //   hidden: { opacity: 0 },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: {
// // //       staggerChildren: 0.1,
// // //     },
// // //   },
// // //   exit: { opacity: 0, transition: { duration: 0.2 } }
// // // };

// // // const itemVariants = {
// // //   hidden: { y: 20, opacity: 0 },
// // //   visible: { y: 0, opacity: 1 },
// // //   exit: { scale: 0.9, opacity: 0 }
// // // };

// // // const TabButton = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
// // //   <motion.button
// // //     onClick={onClick}
// // //     className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
// // //       active
// // //         ? "bg-primary-800 text-white shadow-lg shadow-primary-800/20"
// // //         : "bg-gray-100 text-gray-600 hover:bg-primary-50"
// // //     }`}
// // //     whileHover={{ y: -2 }}
// // //     whileTap={{ scale: 0.95 }}
// // //   >
// // //     {label}
// // //   </motion.button>
// // // );

// // // const Page = () => {
// // //   const [activeTab, setActiveTab] = useState("ALL");

// // //   const categories = ["ALL", ...Array.from(new Set(servicesData.map((s) => s.category)))];

// // //   const filteredServices =
// // //     activeTab === "ALL"
// // //       ? servicesData
// // //       : servicesData.filter((service) => service.category === activeTab);

// // //   return (
// // //     <div className="bg-slate-50 min-h-screen pb-20">
// // //       <Heading
// // //         label="Compliance Services"
// // //         title="Expert BIS & Regulatory Solutions"
// // //         description="Navigate Indian regulatory requirements with ease. From ISI marks to BEE registration, we handle the complexity for you."
// // //       />

// // //       {/* Tabs Navigation */}
// // //       <div className="sticky top-0 z-20 bg-white/60 backdrop-blur-xl border-b border-gray-200 mb-12">
// // //         <div className="max-w-7xl mx-auto py-4 px-4 flex flex-wrap justify-center gap-3">
// // //           {categories.map((tab) => (
// // //             <TabButton
// // //               key={tab}
// // //               label={tab}
// // //               active={activeTab === tab}
// // //               onClick={() => setActiveTab(tab)}
// // //             />
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <section className="px-4 md:px-8">
// // //         <div className="max-w-7xl mx-auto">
// // //           <AnimatePresence mode="popLayout"> 
// // //             <motion.div
// // //               key={activeTab}
// // //               variants={containerVariants}
// // //               initial="hidden"
// // //               animate="visible"
// // //               exit="exit"
// // //               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// // //             >
// // //               {filteredServices.map((service) => (
// // //                 <motion.div 
// // //                   key={service.id} 
// // //                   variants={itemVariants}
// // //                   layout // This makes the grid re-order smoothly
// // //                 >
// // //                   <ServiceCard
// // //                     id={service.id}
// // //                     icon={service.icon}
// // //                     title={service.title}
// // //                     description={service.description}
// // //                   />
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </AnimatePresence>

// // //           {filteredServices.length === 0 && (
// // //             <motion.div 
// // //               initial={{ opacity: 0 }} 
// // //               animate={{ opacity: 1 }} 
// // //               className="text-center py-20"
// // //             >
// // //               <p className="text-gray-400 text-lg">No services found in this category.</p>
// // //             </motion.div>
// // //           )}
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // };

// // // export default Page;


// // "use client";

// // import Heading from "@/components/common/Heading";
// // import ServiceCard from "@/components/layout/services/ServiceCard";
// // import { servicesData } from "@/data/services-data";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { useState } from "react";

// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: { staggerChildren: 0.1 },
// //   },
// // };

// // const Page = () => {
// //   const [activeTab, setActiveTab] = useState("ALL");
// //   const categories = ["ALL", ...Array.from(new Set(servicesData.map((s) => s.category)))];

// //   const filteredServices = activeTab === "ALL" 
// //     ? servicesData 
// //     : servicesData.filter((s) => s.category === activeTab);

// //   return (
// //     <div className="bg-slate-50 min-h-screen pb-20">
// //       <Heading
// //         label="Compliance Services"
// //         title="Expert BIS & Regulatory Solutions"
// //         description="Navigate Indian regulatory requirements with ease."
// //       />

// //       <div className="sticky top-0 z-20 bg-white/60 backdrop-blur-xl border-b border-gray-200 mb-12">
// //         <div className="max-w-7xl mx-auto py-4 px-4 flex flex-wrap justify-center gap-3">
// //           {categories.map((tab) => (
// //             <motion.button
// //               key={tab}
// //               onClick={() => setActiveTab(tab)}
// //               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
// //                 activeTab === tab ? "bg-[#20385c] text-white" : "bg-gray-100 text-gray-600"
// //               }`}
// //               whileHover={{ y: -2 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               {tab}
// //             </motion.button>
// //           ))}
// //         </div>
// //       </div>

// //       <section className="px-4 md:px-8">
// //         <div className="max-w-7xl mx-auto">
// //           {/* popLayout prevents the layout from collapsing during exit */}
// //           <AnimatePresence mode="popLayout">
// //             <div
// //               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
// //             >
// //               {filteredServices.map((service) => (
// //                 <motion.div
// //                   key={service.id}
// //                   layout // Enables smooth position swapping
// //                   initial={{ opacity: 0, scale: 0.9 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   exit={{ opacity: 0, scale: 0.9 }}
// //                   transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
// //                 >
// //                   <ServiceCard
// //                     id={service.id}
// //                     icon={service.icon}
// //                     title={service.title}
// //                     description={service.description}
// //                   />
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </AnimatePresence>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Page;



// "use client";

// import { motion, type Variants } from "framer-motion";

// import { servicesData } from "@/data/services-data";
// import ServiceCard from "@/components/layout/services/ServiceCard";
// import Heading from "@/components/common/Heading";


// type ServicesProps = {
//   heading?: string;
//   subheading?: string;
//   description?: string;
//   limit?: number;
// };
// // ─── Header variants ──────────────────────────────────────────────────────────

// const headerVariants: Variants = {
//   hidden: { opacity: 0, y: 28 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// export const containerVariants = {
//   hidden: { 
//     opacity: 0 
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       // delayChildren: The time to wait before the first child starts
//       delayChildren: 0.1, 
//       // staggerChildren: The gap between each child's entrance (e.g., 0.1s)
//       staggerChildren: 0.15, 
//     },
//   },
//   exit: {
//     opacity: 0,
//     scale: 0.95,
//     transition: { 
//       duration: 0.2,
//       ease: "easeIn" 
//     }
//   }
// } as const;
// export default function Services({
//   heading = "What We Offer",
//   subheading = "Our Services",
//   description = "We deliver end-to-end solutions that drive measurable results — from strategy and operations to digital transformation.",
//     limit,
// }: ServicesProps) {
//   const visibleServices = limit ? servicesData.slice(0, limit) : servicesData;
//   return (
//     <>

//       <Heading
//           label={heading}
//           title={subheading}
//           description={description}
//         />
//     <section className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">

//       <div className="relative z-10 mx-auto max-w-7xl">
      

//         {/* ── Grid ── */}
//         <motion.div
//           className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "0px 0px -80px 0px" }}
//         >
//           {visibleServices.map((service) => (
//             <ServiceCard
//               key={service.id}
//               id={service.id}
//               icon={service.icon}
//               title={service.title}
              
//               description={service.description}
//             />
//           ))}
//         </motion.div>

//         {/* ── Footer CTA ── */}
//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
//           className="mt-16 flex justify-center"
//         >
//           <motion.a
//             href="/services"
//             className="group inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] transition-all duration-300"
//             style={{
//               borderColor: "rgba(32,56,92,0.15)",
//               background: "rgba(32,56,92,0.03)",
//               color: "rgba(32,56,92,0.6)",
//             }}
//             whileHover={{
//               borderColor: "rgba(188,135,55,0.45)",
//               background: "rgba(188,135,55,0.07)",
//               color: "rgb(32,56,92)",
//               y: -2,
//               boxShadow: "0 8px 24px rgba(32,56,92,0.1)",
//             }}
//             whileTap={{ scale: 0.97 }}
//             transition={{ duration: 0.25 }}
//           >
//             View All Services
//             <svg
//               viewBox="0 0 16 16"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.6"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//             >
//               <path d="M3 8h10M9 4l4 4-4 4" />
//             </svg>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//     </>
//   );
// }


"use client";

import { motion, type Variants } from "framer-motion";

import { servicesData } from "@/data/services-data";
import Heading from "@/components/common/Heading";
import { containerVariants } from "@/components/common/ServiceCard";
import ServiceCard from "@/components/layout/services/ServiceCard";



type ServicesProps = {
  heading?: string;
  subheading?: string;
  description?: string;
  limit?: number;
};
// ─── Header variants ──────────────────────────────────────────────────────────

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Section Background ───────────────────────────────────────────────────────



// ─── Services Section ─────────────────────────────────────────────────────────

export default function Services({
  heading = "What We Offer",
  subheading = "Our Services",
  description = "We deliver end-to-end solutions that drive measurable results — from strategy and operations to digital transformation.",
    limit,
}: ServicesProps) {
  const visibleServices = limit ? servicesData.slice(0, limit) : servicesData;
  return (
<>
      <Heading
          label={heading}
          title={subheading}
          description={description}
        />
    <section className="relative overflow-hidden py-10 ">

      <div className="relative z-10 mx-auto max-w-8xl     px-4 md:px-16 lg:px-28">
      

        {/* ── Grid ── */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          {visibleServices.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              icon={service.icon}
              title={service.title}
              
              description={service.description}
            />
          ))}
        </motion.div>

        {/* ── Footer CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-16 flex justify-center"
        >
          <motion.a
            href="/services"
            className="group inline-flex items-center gap-3 rounded-full border px-7 py-3.5 text-[0.78rem] font-bold uppercase tracking-[0.12em] transition-all duration-300"
            style={{
              borderColor: "rgba(32,56,92,0.15)",
              background: "rgba(32,56,92,0.03)",
              color: "rgba(32,56,92,0.6)",
            }}
            whileHover={{
              borderColor: "rgba(188,135,55,0.45)",
              background: "rgba(188,135,55,0.07)",
              color: "rgb(32,56,92)",
              y: -2,
              boxShadow: "0 8px 24px rgba(32,56,92,0.1)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            View All Services
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
    </>
  );
}
// "use client";

// import Heading from "@/components/common/Heading";
// import ServiceCard from "@/components/layout/services/ServiceCard";
// import { servicesData } from "@/data/services-data";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";

// // --- Animation Variants ---
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   exit: { opacity: 0, transition: { duration: 0.2 } }
// };

// const itemVariants = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1 },
//   exit: { scale: 0.9, opacity: 0 }
// };

// const TabButton = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
//   <motion.button
//     onClick={onClick}
//     className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//       active
//         ? "bg-primary-800 text-white shadow-lg shadow-primary-800/20"
//         : "bg-gray-100 text-gray-600 hover:bg-primary-50"
//     }`}
//     whileHover={{ y: -2 }}
//     whileTap={{ scale: 0.95 }}
//   >
//     {label}
//   </motion.button>
// );

// const Page = () => {
//   const [activeTab, setActiveTab] = useState("ALL");

//   const categories = ["ALL", ...Array.from(new Set(servicesData.map((s) => s.category)))];

//   const filteredServices =
//     activeTab === "ALL"
//       ? servicesData
//       : servicesData.filter((service) => service.category === activeTab);

//   return (
//     <div className="bg-slate-50 min-h-screen pb-20">
//       <Heading
//         label="Compliance Services"
//         title="Expert BIS & Regulatory Solutions"
//         description="Navigate Indian regulatory requirements with ease. From ISI marks to BEE registration, we handle the complexity for you."
//       />

//       {/* Tabs Navigation */}
//       <div className="sticky top-0 z-20 bg-white/60 backdrop-blur-xl border-b border-gray-200 mb-12">
//         <div className="max-w-7xl mx-auto py-4 px-4 flex flex-wrap justify-center gap-3">
//           {categories.map((tab) => (
//             <TabButton
//               key={tab}
//               label={tab}
//               active={activeTab === tab}
//               onClick={() => setActiveTab(tab)}
//             />
//           ))}
//         </div>
//       </div>

//       <section className="px-4 md:px-8">
//         <div className="max-w-7xl mx-auto">
//           <AnimatePresence mode="popLayout"> 
//             <motion.div
//               key={activeTab}
//               variants={containerVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//               {filteredServices.map((service) => (
//                 <motion.div 
//                   key={service.id} 
//                   variants={itemVariants}
//                   layout // This makes the grid re-order smoothly
//                 >
//                   <ServiceCard
//                     id={service.id}
//                     icon={service.icon}
//                     title={service.title}
//                     description={service.description}
//                   />
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>

//           {filteredServices.length === 0 && (
//             <motion.div 
//               initial={{ opacity: 0 }} 
//               animate={{ opacity: 1 }} 
//               className="text-center py-20"
//             >
//               <p className="text-gray-400 text-lg">No services found in this category.</p>
//             </motion.div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Page;


"use client";

import Heading from "@/components/common/Heading";
import ServiceCard from "@/components/layout/services/ServiceCard";
import { servicesData } from "@/data/services-data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Page = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const categories = ["ALL", ...Array.from(new Set(servicesData.map((s) => s.category)))];

  const filteredServices = activeTab === "ALL" 
    ? servicesData 
    : servicesData.filter((s) => s.category === activeTab);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Heading
        label="Compliance Services"
        title="Expert BIS & Regulatory Solutions"
        description="Navigate Indian regulatory requirements with ease."
      />

      <div className="sticky top-0 z-20 bg-white/60 backdrop-blur-xl border-b border-gray-200 mb-12">
        <div className="max-w-7xl mx-auto py-4 px-4 flex flex-wrap justify-center gap-3">
          {categories.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab ? "bg-[#20385c] text-white" : "bg-gray-100 text-gray-600"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab}
            </motion.button>
          ))}
        </div>
      </div>

      <section className="px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* popLayout prevents the layout from collapsing during exit */}
          <AnimatePresence mode="popLayout">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout // Enables smooth position swapping
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <ServiceCard
                    id={service.id}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Page;
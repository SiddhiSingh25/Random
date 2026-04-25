import React from 'react';
import { motion } from 'framer-motion';
import { BiAward, BiBadgeCheck, BiBuilding, BiFile } from 'react-icons/bi';
import SimpleHeading from '@/components/common/SimpleHeading';

// Mock Data for the section
const counters = [
  { id: 1, value: "1,500+", title: "Certifications Secured", icon: <BiFile size={24} /> },
  { id: 2, value: "350+", title: "Global Manufacturers", icon: <BiBuilding size={24} /> },
  { id: 3, value: "12+", title: "Govt. Approvals Secured", icon: <BiBadgeCheck size={24} /> },
  { id: 4, value: "98.8%", title: "First-Time Success Rate", icon: <BiAward size={24} /> },
];

const documents = [
  { id: 1, type: "BIS Certificate", year: "2024", img: '/images/slider/image1.jpeg' },
  { id: 2, type: "ISO 9001", year: "2024", img: '/images/slider/image1.jpeg' },
  { id: 3, type: "TE & MT Approval", year: "2023", img: '/images/slider/image1.jpeg' },
];

const Counter = ({ value }: { value: string }) => {
  return (
    <motion.span
      className="text-4xl md:text-5xl font-bold text-slate-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {value}
    </motion.span>
  );
};

const AchievementSection = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <SimpleHeading
   badgeText="Regulatory Excellence"
   title="Trusted Compliance Solutions"
   description="Delivering BIS, CRS, WPC and regulatory certification services with proven expertise and government-backed documentation support."
/>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Achievement Counters */}
          <div className="grid grid-cols-2 gap-8">
            {counters.map((item, idx) => (
              <motion.div
                key={item.id}
                className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-primary-200 hover:shadow-sm transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-3 text-primary-600">
                  {item.icon}
                  <span className="text-sm font-medium">{item.title}</span>
                </div>
                <Counter value={item.value} />
              </motion.div>
            ))}
          </div>

          {/* Certification Documents */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <BiBadgeCheck className="text-primary-600" size={20} />
                Our Certifications
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {documents.map((doc) => (
                  <motion.div
                    key={doc.id}
                    className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                    whileHover={{ y: -4 }}
                  >
                    <div className="aspect-[3/4] bg-slate-100 flex items-center justify-center">
                      <img 
                        src={doc.img} 
                        alt={doc.type} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 border-t border-slate-100">
                      <h4 className="text-sm font-medium text-slate-900">{doc.type}</h4>
                      <p className="text-xs text-slate-500 mt-1">Issued {doc.year}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600">
                  All certifications are verified and issued by the respective government authorities.
                </p>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -z-10 -top-4 -right-4 w-24 h-24 bg-primary-100/30 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
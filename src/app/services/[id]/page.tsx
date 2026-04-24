// app/services/[id]/page.tsx
"use client";
import { useParams } from "next/navigation";

import { motion } from "framer-motion";
import { ServiceContent } from "@/data/services-data";

export default function ServiceDetailScreen() {
  const { id } = useParams();
  
  // Find data in ServiceContent, fallback to a default or 404 if not found

  const content = ServiceContent[id as keyof typeof ServiceContent];

  console.log(id,  content,  "&7777777777777777")

  if (!content) {
    return <div className="py-20 text-center">Service details coming soon...</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Dynamic Hero Screen */}
      <section className="bg-primary-900 text-white py-24 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.span initial={{opacity:0}} animate={{opacity:1}} className="text-secondary-500 font-bold tracking-widest uppercase text-sm">
            {content.subtitle}
          </motion.span>
          <motion.h1 initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} className="text-4xl md:text-6xl font-bold mt-4">
            {content.title}
          </motion.h1>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary-500/10 skew-x-12 transform translate-x-20" />
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Detailed Info */}
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{content.description}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-primary-800 mb-4 uppercase text-xs tracking-widest">Key Features</h3>
              <ul className="space-y-3">
                {content.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-secondary-600 mt-1">✔</span> {f}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-xl border border-primary-100">
              <h3 className="font-bold text-primary-800 mb-4 uppercase text-xs tracking-widest">Quick Stats</h3>
              {content.stats.map(s=> (
                <div key={s.label} className="flex justify-between py-2 border-b border-primary-100 last:border-0">
                  <span className="text-gray-500 text-sm">{s.label}</span>
                  <span className="font-bold text-primary-900 text-sm">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Steps Sidebar */}
        <aside>
          <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-primary-900 mb-6">Registration Process</h3>
            <div className="space-y-6">
              {content.process.map((step , idx) => (
                <div key={idx} className="flex gap-4 relative">
                  {idx !== content.process.length - 1 && (
                    <div className="absolute left-4 top-8 w-0.5 h-full bg-gray-100" />
                  )}
                  <div className="w-8 h-8 rounded-full bg-secondary-500 text-primary-900 flex items-center justify-center font-bold text-sm z-10 shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-gray-600 font-medium pt-1">{step}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 bg-primary-900 text-white font-bold py-4 rounded-xl hover:bg-secondary-600 transition-colors">
              Apply Now
            </button>
          </div>
        </aside>
      </section>
    </main>
  );
}
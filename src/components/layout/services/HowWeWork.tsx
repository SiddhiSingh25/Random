import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const steps = [
  {
    number: "01",
    title: "Consultation & Requirement Gathering",
    description:
      "In-depth consultation to understand your product and compliance needs.",
  },
  {
    number: "02",
    title: "Documentation & Application Preparation",
    description:
      "We handle all paperwork and application filing with precision.",
  },
  {
    number: "03",
    title: "Testing & Compliance Verification",
    description:
      "Coordinate with labs and ensure all tests meet regulatory standards.",
  },
  {
    number: "04",
    title: "Final Certification & Approval",
    description:
      "Get your certificate delivered with ongoing compliance support.",
  },
];

const HowItWorks: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className="py-20 px-4 md:px-8 bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold family-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl family-bold text-primary-900 mb-4">
            How We Work
          </h2>
          <p className="text-primary-600 max-w-2xl mx-auto family-regular">
            Streamlined approach to ensure hassle-free compliance and faster
            market access
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              custom={idx}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-primary-100 h-full">
                <div className="text-5xl family-bold text-primary-200 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl family-bold text-primary-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-500 family-regular text-sm">
                  {step.description}
                </p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};


export default HowItWorks
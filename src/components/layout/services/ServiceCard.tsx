import { motion, useInView, AnimatePresence } from "framer-motion";



interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  index: number;
}

const cardHover = {
  rest: { scale: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  hover: { scale: 1.02, y: -8, transition: { duration: 0.3, ease: "easeOut" } },
};


const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  index,
}) => {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-primary-100"
    >
      <div className="p-6 md:p-8">
        {/* Icon with gradient background */}
        <div className="mb-5 w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-primary-800 group-hover:from-primary-800 group-hover:to-primary-700 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl family-bold text-primary-900 mb-3">
          {title}
        </h3>
        <p className="text-primary-600 family-regular text-sm md:text-base leading-relaxed">
          {description}
        </p>
        <div className="mt-5 flex items-center text-secondary-600 group-hover:text-secondary-700 transition-colors">
          <span className="text-sm font-medium">Learn more</span>
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 border-2 border-primary-800 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};

export default ServiceCard
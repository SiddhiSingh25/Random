const OurClients = () => {
  const companyLogos = ["slack", "framer", "netflix", "google", "linkedin", "instagram", "facebook"];

  return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="w-full bg-primary-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary-900 family-mainheading">
              Trusted by Leading Companies
            </h2>
            <p className="text-primary-600 mt-2 family-regular">
              We partner with the best to deliver exceptional results.
            </p>
          </div>

          {/* Marquee Section */}
          <div className="overflow-hidden relative">
            {/* Left Gradient */}
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-primary-50 to-transparent" />
            {/* Marquee Inner */}
            <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "20s" }}>
              <div className="flex items-center">
                {[...companyLogos, ...companyLogos].map((company, index) => (
                  <img
                    key={index}
                    src={`https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/companyLogo/${company}.svg`}
                    alt={company}
                    className="w-24 h-24 md:w-32 md:h-32 mx-4 md:mx-6 opacity-80 hover:opacity-100 transition-opacity duration-300"
                    draggable={false}
                  />
                ))}
              </div>
            </div>
            {/* Right Gradient */}
            <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-primary-50 to-transparent" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClients;
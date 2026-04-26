export default function NewsLetter() {
  return (
    <section className="w-full bg-primary-950 px-6 py-16 md:py-24 overflow-hidden relative">
      {/* Decorative background element for premium feel */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-500/5 rounded-full blur-3xl -mr-32 -mt-32" />
      
      <div className="w-full px-4 md:px-16 lg:px-28 mx-auto text-center flex flex-col items-center justify-center relative z-10">
        
        {/* Label with a small accent line */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-[1px] bg-secondary-500" />
          <p className="text-secondary-500 text-xs md:text-sm tracking-widest uppercase family-semibold">
            Stay Compliant
          </p>
          <div className="w-8 h-[1px] bg-secondary-500" />
        </div>

        <h2 className="max-w-2xl text-white family-mainheading text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-[1.2]">
          Subscribe to our Newsletter for <span className="text-secondary-500">Regulatory Updates</span>
        </h2>

        <p className="mt-4 text-primary-200 text-sm md:text-base max-w-lg family-regular opacity-80">
          Get the latest BIS notifications, FMCS news, and compliance insights delivered to your inbox.
        </p>

        {/* Responsive Form Container */}
        <div className="mt-10 w-full max-w-lg">
          <form 
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 p-1 sm:p-1.5 sm:bg-primary-900 sm:border sm:border-primary-800 sm:rounded-full focus-within:ring-2 focus-within:ring-secondary-500/50 transition-all duration-300"
          >
            <input
              type="email"
              required
              className="w-full bg-primary-900 sm:bg-transparent border border-primary-800 sm:border-none outline-none rounded-full sm:rounded-none px-6 py-4 sm:py-2 text-sm text-white placeholder-primary-400 family-regular flex-1"
              placeholder="Enter corporate email address"
            />
            <button 
              type="submit"
              className="bg-secondary-600 hover:bg-secondary-500 text-white family-semibold text-sm rounded-full py-4 sm:py-0 sm:h-12 px-8 transition-all duration-300 shadow-lg active:scale-95 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
          
          {/* Trust badges for Corporate UI */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 opacity-60">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[11px] md:text-xs text-primary-200 uppercase tracking-wider family-regular">BIS Insights</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-secondary-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[11px] md:text-xs text-primary-200 uppercase tracking-wider family-regular">Zero Spam</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
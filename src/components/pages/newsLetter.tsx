export default function NewsLetter() {
  return (
    <>
      <div className="w-full bg-primary-950 px-4 py-16 md:py-24 text-center text-white flex flex-col items-center justify-center">
        {/* Heading Section */}
        <p className="text-secondary-500 font-medium text-sm md:text-base family-semibold">
          Get Updated
        </p>
        <h1 className="max-w-2xl font-semibold text-3xl md:text-4xl/[48px] mt-3 family-mainheading">
          Subscribe to Our Newsletter & Get the Latest News
        </h1>

        {/* Input and Button Section */}
        <div className="flex items-center justify-center mt-8 md:mt-12 border border-primary-700 focus-within:border-secondary-500 focus-within:shadow-lg transition-all duration-300 text-sm rounded-full h-14 md:h-16 max-w-md w-full bg-primary-900">
          <input
            type="text"
            className="bg-transparent outline-none rounded-full px-5 md:px-6 h-full flex-1 placeholder-primary-300 text-primary-100 family-regular"
            placeholder="Enter your email address"
          />
          <button className="bg-secondary-600 hover:bg-secondary-700 text-white rounded-full h-11 md:h-12 mr-1 px-6 md:px-8 flex items-center justify-center transition-colors duration-300 family-medium">
            Subscribe Now
          </button>
        </div>

        {/* Additional Text */}
        <p className="mt-6 text-sm text-primary-300 family-regular">
          No spam, just valuable updates and insights.
        </p>
      </div>
    </>
  );
}
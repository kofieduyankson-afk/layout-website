import ServicesGrid from "./components/Service/ServiceGrid";
import IndustriesGrid from "./components/Industry/IndustryGrid";
import HeroLottie from "./components/ui/HeroLottie";
import RightLottie from "./components/ui/RightLottie";
import AnimatedBackground from "./components/ui/AnimatedBackground";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-8">

      {/* Hero Section with Vanta */}
      <section className="relative bg-[#17a28f] w-full h-[60vh] sm:h-screen shadow-md overflow-hidden">
        <AnimatedBackground />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl font-medium text-gray-200 mb-2">
            Layout Laurate LLC
          </h1>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-200">
            Building Digital Solutions
          </h1>

          <p className="text-gray-200 text-base sm:text-lg max-w-xs sm:max-w-2xl">
            Modern IT services for modern businesses
          </p>
        </div>
      </section>

      {/* Services Intro Section */}
      <section className="py-16 px-4 sm:px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">

          {/* Left Column: Text */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#262e31]">
              Located in Accra, Providing Services Worldwide
            </h2>
            <p className="text-[#262e31] leading-relaxed text-lg max-w-3xl lg:max-w-full">
              Our commitment to providing high-quality consulting services means that
              we are always up-to-date on the latest industry trends and best practices,
              so you can trust that our solutions are effective and innovative.
            </p>
          </div>

          {/* Right Column: Lottie */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-6 lg:mt-0">
            {/* <RightLottie /> */}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 shadow-md">
        <ServicesGrid />
      </section>

      {/* Industries Intro Section */}
      <section className="py-16 px-4 sm:px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">

          {/* Left Column: Text */}
          <div className="w-full lg:w-2/3 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#262e31]">
              Serving Diverse Industries Across Ghana
            </h2>
            <p className="text-[#262e31] leading-relaxed text-lg max-w-3xl lg:max-w-full">
              By combining industry insights with cutting-edge technology, we deliver products
              and services that drive operational excellence, enhance customer engagement,
              and unlock new growth opportunities for businesses of all sizes.
            </p>
          </div>

          {/* Right Column: Image / Illustration */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <img
              src="/black.png"
              alt="Industries Illustration"
              className="w-full max-w-sm lg:max-w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 shadow-md">
        <IndustriesGrid />
      </section>

      {/* About / CTA Section */}
      <section
        className="relative w-full px-6 py-16 text-white text-center rounded-t-3xl overflow-hidden"
      >
        {/* Hero Lottie as background, fits section and upside down */}
        <HeroLottie />


        {/* Optional overlay for better contrast */}
        <div className="absolute inset-0 bg-[#17a28f]/50 rounded-t-3xl"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            We understand that every business is unique, which is why we offer a personalized approach to consulting.
          </h2>
          <a
            href="/about"
            className="inline-block px-6 py-3 bg-white text-[#262e31] font-medium rounded-lg shadow-md hover:shadow-lg transition"
          >
            Learn More
          </a>
        </div>
      </section>


    </main>
  );
}

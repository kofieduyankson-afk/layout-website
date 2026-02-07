import ServicesGrid from "./components/Service/ServiceGrid";
import IndustriesGrid from "./components/Industry/IndustryGrid";
import HeroLottie from "./components/ui/animation/WaveLottie";
import RightLottie from "./components/ui/animation/TechLottie";
import AnimatedBackground from "./components/ui/animation/AnimatedBackground";
import ServicesBackground, { IndustryAnimation } from "./components/ui/animation/ContentBackground";
import ContentBackground from "./components/ui/animation/ContentBackground";
import IntroBackground from "./components/ui/animation/IntroBackground";
import TechLottie from "./components/ui/animation/TechLottie";
import AnimatedText from "./components/ui/animation/AnimatedText";
import AnimatedTypingText from "./components/ui/animation/AnimatedText";
import OnlineBusinessLottie from "./components/ui/animation/OnlineBusinessLottie";
// colors
// teal [#17a28f] 17a28f
// gray-white text  gray-200
// dark-gray [#262e31] #262e31
export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-8">


      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] sm:min-h-screen overflow-hidden">
        <IntroBackground />
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-8">

            {/* LEFT: Typing Text */}
            <div className="relative z-10 flex justify-center lg:justify-start">
              <AnimatedText />
            </div>

            {/* RIGHT: Lottie Animation */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
              <TechLottie />
            </div>

          </div>
        </div>
      </section>


      <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-[#f8fafc] border-y border-gray-100">

        {/* Optional: Background animation */}
        <IntroBackground />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* Left Column: Text */}
          <div className="w-full lg:w-2/3 text-center lg:text-left space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#262e31]">
              Located in Accra, Providing Services Worldwide
            </h2>

            <p className="text-xl sm:text-2xl text-[#262e31]/80 leading-relaxed max-w-3xl">
              Our commitment to providing high-quality consulting services means that
              we stay aligned with industry trends and best practices—so you get
              innovative, effective, and reliable digital solutions.
            </p>
          </div>

          {/* Right Column: Lottie Animation */}
          <div className="relative w-full lg:w-1/3 h-[300px] sm:h-[400px] lg:h-[500px]">
            <OnlineBusinessLottie />
          </div>

        </div>
      </section>


      {/* Services Grid */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-white border-y border-gray-100">
        {/* Background animation */}
        <ContentBackground />

        <ServicesGrid />
      </section>

      {/* Industries Intro Section */}
      <section className="relative py-16 px-4 sm:px-6 overflow-hidden bg-[#f8fafc] shadow-md">
        {/* Optional: Background animation */}
        <IntroBackground />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column: Text */}
          <div className="w-full lg:w-2/3 text-center lg:text-left space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#262e31]">
              Serving Diverse Industries Across Ghana
            </h2>
            <p className="text-xl sm:text-2xl text-[#262e31] leading-relaxed max-w-3xl">
              By combining industry insights with cutting-edge technology, we deliver products
              and services that drive operational excellence, enhance customer engagement,
              and unlock new growth opportunities for businesses of all sizes.
            </p>
          </div>

          {/* Right Column: Image / Lottie Animation */}
          <div className="relative w-full lg:w-1/3 h-[300px] sm:h-[400px] lg:h-[500px]">
            <IndustryAnimation />
          </div>
        </div>
      </section>


      {/* Industries Grid */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden bg-[#f8fafc] border-y border-gray-100">
        {/* Background animation */}
        <ContentBackground />

        <IndustriesGrid />
      </section>

      {/* About / CTA Section */}
      <section
        className="relative w-full px-6 py-16 text-white text-center rounded-t-3xl overflow-hidden"
      >
        {/* Hero Lottie as background, fits section and upside down */}
        {/* <HeroLottie /> */}


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

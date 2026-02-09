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
import AboutCTA from "./components/ui/AboutCTA";
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
        <div className="max-w-7xl mx-auto h-full sm:px-6">
          <div className=" grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-50">

            {/* LEFT: Typing Text */}
            <div className="relative z-10 flex flex-col gap-6 max-w-2xl text-center lg:text-left">
              {/* Animated title */}
              <AnimatedText />

              {/* Static supporting paragraph */}
              <p className="text-xl sm:text-2xl text-[#262e31]/80 leading-relaxed max-w-3xl">
                We are an IT consulting and digital solutions company helping businesses
                design, build, and scale reliable technology.
              </p>
            </div>


            {/* RIGHT: Lottie Animation */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] flex ">
              <TechLottie />
            </div>

          </div>
        </div>
      </section>


      <section className="relative py-10 px-4 sm:px-6 overflow-hidden bg-[#f8fafc] border-y border-gray-100">

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
      <section className="relative py-10 px-4 sm:px-6 overflow-hidden bg-white border-y border-gray-100">
        {/* Background animation */}
        <ContentBackground />

        <ServicesGrid />
      </section>

      {/* Industries Intro Section */}
      <section className="relative py-10 px-4 sm:px-6 overflow-hidden bg-[#f8fafc] shadow-md">
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
      <section className="relative py-10 px-4 sm:px-6 overflow-hidden bg-[#f8fafc] border-y border-gray-100">
        {/* Background animation */}
        <ContentBackground />

        <IndustriesGrid />
      </section>

      {/* About / CTA Section */}
      <section
      >
        <AboutCTA />
      </section>


    </main>
  );
}

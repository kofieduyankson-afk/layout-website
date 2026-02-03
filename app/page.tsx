import ServicesGrid from "./components/Service/ServiceGrid";
import IndustriesGrid from "./components/Industry/IndustryGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat shadow-md"
        style={{ backgroundImage: "url('/bg-image.png')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-3xl font-medium text-white mb-2 sm:text-4xl">
            Layout Laurate LLC
          </h1>
          <h1 className="text-5xl font-bold mb-4 text-white sm:text-6xl">
            Building Digital Solutions
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-2xl">
            Modern IT services for modern businesses
          </p>
        </div>
      </section>

      {/* Services Intro Section */}
      <section className="py-16 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">

          {/* Left Column: Text */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left text-[#262e31]">
              Located in Accra, Providing Services Worldwide
            </h2>
            <p className="text-[#262e31] leading-relaxed text-lg max-w-3xl lg:max-w-full">
              Our commitment to providing high-quality consulting services means that
              we're always up-to-date on the latest industry trends and best practices,
              so you can trust that our solutions are effective and innovative.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="lg:w-1/3 flex justify-end">
            <img
              src="/km.png"
              alt="Services Illustration"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

        </div>
      </section>

      <section className="py-16 px-4 shadow-md">

        <ServicesGrid />
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">

          {/* Left Column: Text */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left text-[#262e31]">
              Serving Diverse Industries Across Ghana
            </h2>
            <p className="text-[#262e31] leading-relaxed text-lg max-w-3xl lg:max-w-full">
              By combining industry insights with cutting-edge technology, we deliver products
              and services that drive operational excellence, enhance customer engagement,
              and unlock new growth opportunities for businesses of all sizes.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="lg:w-1/3 flex justify-end">
            <img
              src="/black.png"
              alt="Industries Illustration"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

        </div>
      </section>

      <section className="py-16 px-4 shadow-md">

        <IndustriesGrid />
      </section>
      <section
        className="relative w-full px-6 py-16 text-white text-center rounded-t-3xl relative bg-cover bg-center"
        style={{ backgroundImage: "url('/about3.png')" }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-[#17a28f]/70 rounded-t-3xl"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">
            We understand that every business is unique, which is why we offer a personalized approach to consulting.
          </h2>
          <p className="mb-6 text-lg">
            {/* Optional additional paragraph can go here */}
          </p>
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

import ServicesGrid from "./components/Service/ServiceGrid";
import IndustriesGrid from "./components/Industry/IndustryGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero      #17a28f     #262e31*/}
      <section
        className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
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

      <section>

        <ServicesGrid />




      </section>
      <section>



        <IndustriesGrid />

      </section>



    </main>
  );
}

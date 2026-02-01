import ServicesGrid from "./components/Service/ServiceGrid";
import IndustriesGrid from "./components/Industry/IndustryGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="py-20 text-center">
        <h1>Layout Laurate LLC</h1>
        <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Building Digital Solutions
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          Modern IT services for modern businesses
        </p>
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

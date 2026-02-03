import DetailedItemCard from "@/app/components/Card/DetailedItemCard";

import { industries } from "@/app/data/detailedIndustries";


export default function SharedMobilityIndustryPage() {
    const data = industries.find(
        (industry) => industry.title === "Shared Mobility"
    );

    if (!data) return null;

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <section className="bg-[#17a28f] text-white py-24 px-6 text-center">
                <h1 className="text-5xl font-bold mb-4">
                    {data.title}
                </h1>
                <p className="max-w-3xl mx-auto text-lg opacity-90">
                    {data.description}
                </p>
            </section>
            <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-6 text-black">
                    Smart Mobility Solutions
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                    We build intelligent mobility platforms for ride-sharing, bike-sharing,
                    and vehicle pooling services.
                </p>
                <p className="text-gray-700 text-lg">
                    Real-time tracking, driver and rider apps, and analytics dashboards
                    ensure your mobility services operate efficiently and safely.
                </p>
            </section>


            {/* Items */}
            <section className="max-w-7xl mx-auto px-6 py-20 relative bg-cover bg-center " style={{
                backgroundImage: "url('/shared.jpg')"
            }}>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {data.items.map((item) => (
                        <DetailedItemCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                        />
                    ))}

                </div>
            </section>
        </main>
    );
}

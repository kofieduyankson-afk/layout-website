import DetailedItemCard from "@/app/components/Card/DetailedItemCard";

import { industries } from "@/app/data/detailedIndustries";


export default function LogisticsIndustryPage() {
    const data = industries.find(
        (industry) => industry.title === "Logistics"
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
                    Optimizing Logistics & Supply Chains
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                    Our end-to-end logistics software enhances tracking, coordination,
                    and delivery efficiency for businesses of all sizes.
                </p>
                <p className="text-gray-700 text-lg">
                    From shipment tracking to warehouse management, we deliver digital solutions
                    that streamline operations and increase visibility across your supply chain.
                </p>
            </section>


            {/* Items */}
            <section className="max-w-7xl mx-auto px-6 py-20 relative bg-cover bg-center " style={{
                backgroundImage: "url('/logistics.jpg')"
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

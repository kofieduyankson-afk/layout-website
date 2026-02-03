import DetailedItemCard from "@/app/components/Card/DetailedItemCard";

import { industries } from "@/app/data/detailedIndustries";


export default function AutomotiveIndustryPage() {
    const automotive = industries.find(
        (industry) => industry.title === "Automotive"
    );

    if (!automotive) return null;

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <section className="bg-[#17a28f] text-white py-24 px-6 text-center">
                <h1 className="text-5xl font-bold mb-4">
                    {automotive.title}
                </h1>
                <p className="max-w-3xl mx-auto text-lg opacity-90">
                    {automotive.description}
                </p>
            </section>
            {/* Middle Section */}
            <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-6 text-black">
                    Transforming the Automotive Industry
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                    Our automotive solutions are designed to streamline operations, enhance
                    customer experiences, and leverage the latest digital technologies.
                    From fleet management to customer engagement, we help businesses stay
                    ahead in a rapidly evolving industry.
                </p>
                <p className="text-gray-700 text-lg">
                    Explore our specialized tools and platforms below to see how we can
                    drive your automotive business forward.
                </p>
            </section>

            {/* Items */}
            <section className="max-w-7xl mx-auto px-6 py-20 relative bg-cover bg-center " style={{
                backgroundImage: "url('/auto.jpg')"
            }}>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {automotive.items.map((item) => (
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

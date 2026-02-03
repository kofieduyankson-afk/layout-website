import DetailedItemCard from "@/app/components/Card/DetailedItemCard";


import { services } from "@/app/data/detailedService";


export default function GraphicDesignPage() {
    const data = services.find(
        (service) => service.title === "Graphic Design"
    );

    if (!data) return null;

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <section
                className="bg-[#17a28f] text-white py-24 px-6 text-center relative bg-cover bg-center shadow-md"

            >
                <h1 className="text-5xl font-bold mb-4">
                    {data.title}
                </h1>
                <p className="max-w-3xl mx-auto text-lg opacity-90">
                    {data.description}
                </p>
            </section>
            <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl font-semibold mb-6  text-[#262e31]">
                    Creative Graphic Design
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                    Visually communicate your brand across digital and print media.
                </p>
                <p className="text-gray-700 text-lg">
                    From brand identity to marketing materials and social graphics,
                    we design impactful visuals that resonate with your audience.
                </p>
            </section>


            {/* Items */}
            <section className="max-w-7xl mx-auto px-6 py-20 relative bg-cover bg-center " style={{
                backgroundImage: "url('/graphicc.jpg')"
            }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

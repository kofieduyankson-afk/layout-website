import DetailedItemCard from "@/app/components/Card/DetailedItemCard";


import { services } from "@/app/data/detailedService";


export default function WebDevelopmentPage() {
    const data = services.find(
        (service) => service.title === "Web Development"
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
                <h2 className="text-3xl font-semibold mb-6 text-[#262e31]">
                    Custom Web Development
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                    Build fast, SEO-friendly, and visually engaging websites tailored to your brand.
                </p>
                <p className="text-gray-700 text-lg">
                    We create websites that convert visitors into customers, combining performance,
                    responsiveness, and intuitive design.
                </p>
            </section>


            {/* Items */}
            <section className="max-w-7xl mx-auto px-6 py-20 relative bg-cover bg-center " style={{
                backgroundImage: "url('/web dev.jpg')"
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

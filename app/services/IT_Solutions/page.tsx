import DetailedItemCard from "@/app/components/Card/DetailedItemCard";


import { services } from "@/app/data/detailedService";


export default function ITSolutionsPage() {
    const data = services.find(
        (service) => service.title === "IT Solutions"
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
                    Comprehensive IT Solutions
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                    Streamline your operations and improve efficiency with end-to-end IT solutions.
                </p>
                <p className="text-gray-700 text-lg">
                    From system integration to infrastructure support, we provide the technology
                    your business needs to grow and thrive in the digital age.
                </p>
                <section className="py-16 px-4 sm:px-6 shadow-md">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

                        {/* Left: Description */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-3xl font-bold mb-4 text-[#262e31]">
                                What We Do
                            </h2>
                            <p className="text-[#262e31] text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                                We design, build, and maintain digital products that help businesses
                                operate better and grow faster. Our focus is on scalable, reliable,
                                and modern solutions tailored to real business needs.
                            </p>
                        </div>

                        {/* Right: GIF */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <img
                                src="/gifs/ladder-computer.gif"
                                alt="Digital solutions illustration"
                                className="w-full max-w-sm lg:max-w-md rounded-xl shadow-lg"
                            />
                        </div>

                    </div>
                </section>

            </section>


            {/* Items */}
            <section className="max-w-7xl mx-auto px-6 py-20 relative bg-cover bg-center " style={{
                backgroundImage: "url('/ITS.jpg')"
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

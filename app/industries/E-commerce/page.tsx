import React from 'react';
import DetailedItemCard from "@/app/components/Card/DetailedItemCard";
import IntroBackground from "@/app/components/ui/animation/IntroBackground";
import ContentBackground from "@/app/components/ui/animation/ContentBackground";
import OnlineBusinessLottie from "@/app/components/ui/animation/OnlineBusinessLottie";
import { industries } from "@/app/data/detailedIndustries";

export default function EcommerceIndustryPage() {
    // 1. Dynamic Data Lookup
    const data = industries.find(
        (industry) => industry.title === "E-commerce"
    );

    if (!data) return null;

    return (
        <main className="min-h-screen bg-white font-sans">

            {/* =========================================
                SECTION 1: HERO
                Focus: Revenue & Growth
            ========================================= */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 overflow-hidden">
                <IntroBackground />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">

                    {/* Left Column: Headline */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17a28f]/10 text-[#17a28f] font-bold text-xs uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-[#17a28f]"></span>
                            E-Commerce
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#262e31] leading-tight">
                            Scale Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17a28f] to-[#262e31]">
                                Online Business
                            </span>
                        </h1>

                        <p className="text-xl text-[#262e31]/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            {/* Dynamically using data + expanding it */}
                            {data.description} In a crowded digital marketplace, we build platforms
                            that don't just display products—they create seamless shopping experiences
                            that turn visitors into loyal customers.
                        </p>

                        <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">

                        </div>
                    </div>

                    {/* Right Column: Animation */}
                    <div className="w-full lg:w-2/5 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#17a28f]/20 to-transparent rounded-full blur-3xl -z-10" />
                        <div className="h-[350px] sm:h-[450px]">
                            <OnlineBusinessLottie />
                        </div>
                    </div>
                </div>
            </section>


            {/* =========================================
                SECTION 2: STRATEGY & "WHY US"
                Focus: The Technical Edge (Speed, Security)
            ========================================= */}
            <section className="py-20 px-6 bg-[#f8fafc] border-y border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: The Visual */}
                    <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white group">
                            {/* Overlay effect */}
                            <div className="absolute inset-0 bg-[#17a28f]/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <img
                                src="/gifs/ladder-computer.gif"
                                alt="E-commerce dashboard analytics"
                                className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                    </div>

                    {/* Right: The Content */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#262e31]">
                            More Than Just a Cart. <br />
                            <span className="text-[#17a28f]">A Revenue Engine.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Today's shoppers expect speed, security, and simplicity. A delay of just
                                one second can cost you 7% in conversions. We engineer platforms optimized
                                for performance and reliability.
                            </p>
                            <p>
                                Whether you are a B2B wholesaler or a direct-to-consumer brand, our
                                architecture ensures you are ready for Black Friday spikes and global expansion.
                            </p>

                            {/* Features List */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                {[
                                    "Mobile-First Design",
                                    "Secure Gateways",
                                    "Real-time Inventory",
                                    "SEO Optimized"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#17a28f]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span className="font-medium text-[#262e31]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>


            {/* =========================================
                SECTION 3: ITEM GRID
                Focus: The Technical Modules
            ========================================= */}
            <section className="relative py-24 px-6 bg-white overflow-hidden">
                <ContentBackground />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#262e31]">
                            E-commerce Infrastructure
                        </h2>
                        <div className="w-20 h-1.5 bg-[#17a28f] mx-auto mt-4 rounded-full"></div>
                        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                            The building blocks of a successful modern online store.
                        </p>
                    </div>

                    {/* Responsive Grid: 1 col mobile, 2 col tablet, 4 col desktop (as requested in original file) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.items.map((item) => (
                            <div key={item.title} className="group h-full">
                                <div className="h-full hover:-translate-y-2 transition-transform duration-300">
                                    <DetailedItemCard
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================
                SECTION 4: CTA
                Focus: Launching
            ========================================= */}
            <section className="py-20 bg-[#262e31] relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#17a28f] to-transparent"></div>

                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Ready to Open Shop?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        From initial setup to scaling your first million in sales, our experts
                        are here to guide your digital journey.
                    </p>
                    <button className="px-10 py-4 bg-[#17a28f] hover:bg-[#14917f] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        Book a Free Strategy Session
                    </button>
                </div>
            </section>

        </main>
    );
}
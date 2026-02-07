import React from 'react';
import Image from 'next/image';
import DetailedItemCard from "@/app/components/Card/DetailedItemCard";
import IntroBackground from "@/app/components/ui/animation/IntroBackground";
import ContentBackground from "@/app/components/ui/animation/ContentBackground";
import OnlineBusinessLottie from "@/app/components/ui/animation/OnlineBusinessLottie";

import ContactCTA from '@/app/components/ui/ContactCTA';



import { services } from "@/app/data/detailedService";
import { Design } from '@/app/components/ui/animation/ContentAnimation';


export default function GraphicDesignPage() {
    const data = services.find(
        (service) => service.title === "Graphic Design"
    );

    if (!data) return null;

    return (
        <main className="min-h-screen bg-white font-sans">

            {/*
                    SECTION 1: HERO
                 */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 overflow-hidden">
                <IntroBackground />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">

                    {/* Left Column: Headline & Intro */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17a28f]/10 text-[#17a28f] font-bold text-lg uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-[#17a28f]"></span>
                            {/* DYNAMIC: Category Badge */}
                            {data.title}
                        </div>

                        <h1 className="text-5xl sm:text-6xl font-extrabold text-[#262e31] leading-tight">
                            {/* DYNAMIC: Headline Start */}
                            {data.heroHeadlineStart} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17a28f] to-[#262e31]">
                                {/* DYNAMIC: Headline Gradient */}
                                {data.heroHeadlineGradient}
                            </span>
                        </h1>

                        <p className="text-xl text-[#262e31]/70 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            {/* DYNAMIC: Description + Content Intro */}
                            {data.description}
                        </p>


                    </div>

                    {/* Right Column: Lottie Animation */}
                    <div className="w-full lg:w-2/5 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#17a28f]/20 to-transparent rounded-full blur-3xl -z-10" />
                        <div className="h-[350px] sm:h-[450px]">
                            <Design />
                        </div>
                    </div>
                </div>
            </section>


            {/* 
                    SECTION 2: STRATEGY & "WHY US"
               */}
            <section className="py-20 px-6 bg-[#f8fafc] border-y border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: The Visual (GIF) */}
                    <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white">
                            <div className="absolute inset-0 bg-[#262e31]/10 z-10 pointer-events-none mix-blend-multiply"></div>
                            <img
                                src="/gifs/webDesign.gif"
                                alt="Service workflow"
                                className="w-full object-cover transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                    </div>

                    {/* Right: The Explanation */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#262e31]">
                            {/* DYNAMIC: Strategy Title Start */}
                            {data.strategyTitleStart} <br />
                            <span className="text-[#17a28f]">
                                {/* DYNAMIC: Strategy Title Highlight */}
                                {data.strategyTitleHighlight}
                            </span>
                        </h2>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                {/* DYNAMIC: Main Content Paragraph */}
                                {data.content}
                            </p>
                            <p>Our approach is rooted in three core principles:</p>

                            {/* DYNAMIC: Feature List */}
                            <ul className="space-y-4 mt-4">
                                {data.strategyList.map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#17a28f]/10 flex items-center justify-center text-[#17a28f]">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <span className="font-medium text-[#262e31]">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </section>


            {/* =========================================
                    SECTION 3: SERVICE GRID
                ========================================= */}
            <section className="relative py-24 px-6 bg-white overflow-hidden">
                <ContentBackground />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#262e31]">
                            Our Core Capabilities
                        </h2>
                        <div className="w-20 h-1.5 bg-[#17a28f] mx-auto mt-4 rounded-full"></div>
                        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                            Comprehensive modules designed to cover every aspect of your technological landscape.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.items.map((item) => (
                            <div key={item.title} className="group">
                                <DetailedItemCard
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*
                    SECTION 4: CTA
                */}
            <ContactCTA />

        </main>
    );
}

//  <h2 className="text-3xl font-semibold mb-6  text-[#262e31]">
//                     Creative Graphic Design
//                 </h2>
//                 <p className="text-gray-700 text-lg mb-6">
//                     Visually communicate your brand across digital and print media.
//                 </p>
//                 <p className="text-gray-700 text-lg">
//                     From brand identity to marketing materials and social graphics,
//                     we design impactful visuals that resonate with your audience.
//                 </p>
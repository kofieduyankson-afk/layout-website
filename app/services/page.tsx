

"use client";

import ServicesGrid from "../components/Service/ServiceGrid";
import AboutCTA from "../components/ui/AboutCTA";
import IntroBackground from "../components/ui/animation/IntroBackground";
import ContactCTA from "../components/ui/ContactCTA";
import ServicesCard from "../components/ui/ExpandCard";
import { services } from "../data/detailedService";

export default function Services() {
    return (
        <main className="min-h-screen bg-white">
            {/*Title and Description */}
            <section className="px-6 pt-24 pb-16 text-center">
                <IntroBackground />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-black">
                    Our Services
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl sm:text-2xl text-[#262e31]">
                    We design, build, and maintain digital solutions that help businesses
                    scale efficiently and compete in a modern world.
                </p>
            </section>

            {/* Detailed Service Cards*/}
            <section className="py-16 px-4 shadow-md">

                <ServicesGrid />
            </section>
            {/*
                            CTA
                         */}
            {/* About / CTA Section */}
            <section
            >
                <AboutCTA />
            </section>



        </main>
    );
}



"use client";

import IndustriesCard from "../components/Card/ExpandIndustryCard";
import IndustriesGrid from "../components/Industry/IndustryGrid";
import AboutCTA from "../components/ui/AboutCTA";
import IntroBackground from "../components/ui/animation/IntroBackground";
import ContactCTA from "../components/ui/ContactCTA";
import { industries } from "../data/detailedIndustries";

export default function Industries() {
    return (
        <main className="min-h-screen bg-white">
            {/*Title and Description */}
            <section className="px-6 pt-24 pb-16 text-center">
                <IntroBackground />
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-#d5d6d7">
                    Industries We Serve
                </h1>
                <p className="mt-4 max-w-2xl  text-2xl mx-auto text-xl sm:text-2xl text-[#262e31]">
                    We build tailored digital solutions across multiple industries,
                    helping organizations innovate, scale, and operate efficiently.
                </p>
            </section>

            {/* Detqailed Industry Cards */}
            <section className="py-16 px-4 shadow-md">

                <IndustriesGrid />
            </section>
            {/* About / CTA Section */}
            <section
            >
                <AboutCTA />
            </section>


        </main>
    );
}

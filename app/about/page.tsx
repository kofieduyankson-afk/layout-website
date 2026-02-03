"use client";

import PartnersSlider from "../components/ui/partnersSlide";
import TeamCard from "../components/ui/TeamCard";
import { team } from "../data/teamData";

export default function About() {
    return (
        <main className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative px-6 pt-32 pb-16 text-center relative bg-cover bg-center bg-gradient-to-br from-[#17a28f]/70 to-[#262e31]/70"
                style={{ backgroundImage: "url('/about.jpg')" }}>
                <div className="max-w-3xl mx-auto text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        About Us
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed">
                        We design, build, and maintain digital products that help businesses
                        operate better and grow faster.
                    </p>
                </div>
            </section>

            {/* What We Do */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-[#262e31] mb-4">
                        What We Do
                    </h2>
                    <p className="text-gray-700 dark:text-gray-800 leading-relaxed text-lg">
                        We provide end-to-end technology solutions — from web and mobile
                        development to SaaS platforms, automation systems, and business
                        operations tools. Our focus is on building reliable, scalable, and
                        user-friendly systems that solve real-world problems.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900 shadow-md">
                <div className="mx-auto max-w-4xl rounded-2xl bg-white dark:bg-gray-800 p-12 text-center shadow-lg">
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                        Our Mission
                    </h2>
                    <p className="mt-2 text-xl font-medium text-[#17a28f]">
                        To make daily life easier
                    </p>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        We believe technology should simplify everyday tasks, reduce
                        friction, and create better experiences for people and businesses
                        alike.
                    </p>
                </div>
            </section>
            {/*Parteners*/}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-[#262e31] mb-10">Our Clients</h2>
                    <PartnersSlider />
                </div>
            </section>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16"></div>


            {/* Team */}
            <section className="px-6 py-20">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-[#262e31] mb-10">
                        Our Team
                    </h2>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {team.map((member) => (
                            <TeamCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </section>
            {/* Optional CTA */}
            <section
                className="relative w-full px-6 py-16 text-white text-center rounded-t-3xl relative bg-cover bg-center"
                style={{ backgroundImage: "url('/team.jpg')" }}
            >
                {/* Optional overlay for readability */}
                <div className="absolute inset-0 bg-[#17a28f]/70 rounded-t-3xl"></div>

                {/* Content */}
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-4">
                        Ready to Work With Us?
                    </h2>
                    <p className="mb-6 text-lg">
                        Reach out to us, tell us about your idea and we’ll help bring it to life.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-6 py-3 bg-white text-[#262e31] font-medium rounded-lg shadow-md hover:shadow-lg transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>



        </main>
    );
}

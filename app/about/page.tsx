"use client";


import { Business } from "../components/ui/animation/ContentAnimation";
import ContentBackground from "../components/ui/animation/ContentBackground";
import IntroBackground, { CTABackground } from "../components/ui/animation/IntroBackground";
import ThreeBackground from "../components/ui/animation/ThreeBackground";

import PartnersSlider from "../components/ui/partnersSlide";
import TeamCard from "../components/ui/TeamCard";
import { team } from "../data/teamData";

export default function About() {
    return (
        <main className="min-h-screen bg-white font-sans">

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 overflow-hidden">
                <IntroBackground />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10">

                    {/* Left Column */}
                    <div className="w-full lg:w-3/5 text-center lg:text-left space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17a28f]/10 text-[#17a28f] font-bold text-sm uppercase tracking-widest">
                            <span className="w-2 h-2 rounded-full bg-[#17a28f] animate-pulse"></span>
                            Our Story
                        </div>

                        <h1 className="text-5xl sm:text-7xl font-extrabold text-[#262e31] leading-[1.1]">
                            Architecting the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17a28f] to-[#262e31]">
                                Digital Future
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            We are a team of thinkers, builders, and problem-solvers dedicated to
                            transforming complex business challenges into elegant digital realities.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-2/5 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#17a28f]/20 to-transparent rounded-full blur-3xl -z-10" />
                        <div className="h-[350px] sm:h-[450px]">
                            <Business />
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="px-6 py-24 relative overflow-hidden">
                <IntroBackground />
                <div className="mx-auto max-w-5xl text-center relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#262e31] mb-8">
                        What We Do
                    </h2>
                    <div className="w-20 h-1.5 bg-[#17a28f] mx-auto mb-8 rounded-full"></div>
                    <p className="text-gray-600 leading-relaxed text-xl max-w-4xl mx-auto">
                        We provide end-to-end technology solutions — from web and mobile
                        development to SaaS platforms, automation systems, and business
                        operations tools. Our focus is on building reliable, scalable, and
                        user-friendly systems that solve real-world problems.
                    </p>
                </div>
                {/* Decorative background element */}
                <div className="absolute -right-20 top-0 text-gray-50 font-bold text-[200px] select-none -z-10">
                    BUILD
                </div>
            </section>

            {/* Mission Section with Refined Card Design */}
            <section className="px-6 py-24 bg-[#f8fafc] border-y border-gray-100">
                <IntroBackground />
                <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-10 lg:p-16 text-center shadow-xl border border-gray-100 relative overflow-hidden">
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#17a28f]/5 rounded-bl-full"></div>

                    <h2 className="text-3xl font-bold text-[#262e31] mb-4">
                        Our Mission
                    </h2>
                    <p className="mt-2 text-2xl font-bold text-[#17a28f] italic">
                        "To make daily life easier"
                    </p>
                    <p className="mt-8 text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
                        We believe technology should simplify everyday tasks, reduce
                        friction, and create better experiences for people and businesses
                        alike. Our code is the bridge between complexity and simplicity.
                    </p>
                </div>
            </section>

            {/* Partners */}
            <section className="px-6 py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-3xl font-bold text-[#262e31]">Our Clients</h2>
                        <div className="w-12 h-1 bg-[#17a28f] mt-4"></div>
                    </div>
                    <PartnersSlider />
                </div>
            </section>

            <div className="h-px w-full max-w-5xl mx-auto bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            {/* Team Section */}
            <section className="px-6 py-24 bg-white">
                {/* <ContentBackground /> */}
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-[#262e31] mb-4">
                            Meet Our Team
                        </h2>
                        <p className="text-gray-500 text-lg">The brilliant minds behind your digital transformation.</p>
                    </div>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {team.map((member) => (
                            <TeamCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative w-full px-6 py-28 text-white text-center overflow-hidden rounded-t-[3.5rem]">

                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#17a28f] via-[#14907d] to-[#0f6f62]" />

                {/* Soft glass overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-t-[3.5rem]" />

                {/* Ambient glow */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/20 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                        Let’s Build Something <br className="hidden sm:block" />
                        Meaningful Together
                    </h2>

                    <p className="mb-12 text-xl text-white/90 leading-relaxed">
                        Whether it’s a new idea or a growing business, we’re ready to help
                        you turn vision into scalable, reliable digital systems.
                    </p>

                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-12 py-5
                 bg-white text-[#262e31] font-bold text-lg
                 rounded-full shadow-xl
                 hover:shadow-2xl hover:-translate-y-1
                 transition-all duration-300"
                    >
                        Start Your Project
                        <span className="text-xl">→</span>
                    </a>
                </div>
            </section>

        </main>
    );
}
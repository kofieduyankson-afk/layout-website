"use client";

import TeamCard from "../components/ui/TeamCard";
import { team } from "../data/teamData";


export default function About() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-gray-900">
            {/* Hero */}
            <section className="px-6 pt-24 pb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    About Us
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    We design, build, and maintain digital products that help businesses
                    operate better and grow faster.
                </p>
            </section>

            {/* What We Do */}
            <section className="px-6 pb-20">
                <div className="mx-auto max-w-5xl text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        What We Do
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                        We provide end-to-end technology solutions — from web and mobile
                        development to SaaS platforms, automation systems, and business
                        operations tools. Our focus is on building reliable, scalable, and
                        user-friendly systems that solve real-world problems.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-4xl rounded-2xl bg-white dark:bg-gray-900 p-10 text-center shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Our Mission
                    </h2>
                    <p className="mt-4 text-xl font-medium text-blue-600">
                        To make daily life easier.
                    </p>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                        We believe technology should simplify everyday tasks, reduce
                        friction, and create better experiences for people and businesses
                        alike.
                    </p>
                </div>
            </section>

            {/* Team */}
            <section className="px-6 pb-24">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
                        Our Team
                    </h2>

                    <div
                        className="
              mt-10 grid gap-6
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
            "
                    >
                        {team.map((member) => (
                            <TeamCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

"use client";

import IndustriesCard from "./IndustriesCards";
import { industries } from "../../data/industriesData";

export default function IndustriesGrid() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8 text-center text-[#262e31]">
                    Industries We Serve
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {industries.map((industry) => (
                        <IndustriesCard
                            key={industry.title}
                            industry={industry}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

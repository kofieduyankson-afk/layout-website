"use client";

import IndustriesCard from "./IndustriesCards";
import { industries } from "../../data/industriesData";

export default function IndustriesGrid() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">


                <h2 className="text-3xl sm:text-4xl font-bold text-[#262e31] mb-8">
                    Industries We Serve
                </h2>
                <div className="w-20 h-1.5 bg-[#17a28f] mx-auto mb-8 rounded-full"></div>

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

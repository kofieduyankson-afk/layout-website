"use client";

import IndustriesCard from "./IndustriesCards";
import { industries } from "../../data/industriesData";

export default function IndustriesGrid() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text:center">
                    Industries We Serve
                </h2>

                <div className="grid gap-6 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            justify-items-center">
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

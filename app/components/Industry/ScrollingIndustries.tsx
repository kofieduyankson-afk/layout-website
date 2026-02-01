// app/components/ui/ScrollingServices.tsx
"use client";

import IndustriesCard from "./IndustriesCards";
import { industries } from "../../data/industriesData";

export default function ScrollingIndustries() {
    return (
        <section className="my-16 px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>

            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                {industries.map((industry) => (
                    <IndustriesCard key={industry.id} industry={industry} />
                ))}
            </div>
        </section>
    );
}

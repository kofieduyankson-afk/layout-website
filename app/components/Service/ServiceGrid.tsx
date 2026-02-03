"use client";

import ServiceCard from "./ServiceCards";
import { services } from "../../data/servicesData";

export default function ServicesGrid() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-3xl font-bold mb-8 text-center text-[#262e31]">
                    Services We Provide
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map(service => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>

            </div>
        </section>
    );
}

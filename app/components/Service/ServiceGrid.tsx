"use client";

import ServiceCard from "./ServiceCards";
import { services } from "../../data/servicesData";

export default function ServicesGrid() {
    return (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Centered Heading */}
                <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
                    Our Services
                </h2>

                {/* Grid of cards */}
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
                    {services.map((service) => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}

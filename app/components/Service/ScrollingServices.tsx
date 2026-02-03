// app/components/ui/ScrollingServices.tsx
"use client";

import ServiceCard from "./ServiceCards";
import { services } from "../../data/servicesData";

export default function ScrollingServices() {
    return (
        <section className="my-16 px-6">
            <h2 className="text-3xl font-bold mb-6 text-center">Industries we serve</h2>

            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                {services.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                ))}
            </div>
        </section>
    );
}

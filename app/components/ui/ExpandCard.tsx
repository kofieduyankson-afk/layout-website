"use client";

import { Service } from "../../data/detailedService";

interface Props {
    service: Service;
}

export default function ExpandCard({ service }: Props) {
    return (
        <div className="rounded-xl border bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {service.title}
            </h3>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {service.description}
            </p>

            <ul className="mt-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                {/* {service.items.map((item) => (
                    <li key={item}>• {item}</li>
                ))} */}
            </ul>
        </div>
    );
}

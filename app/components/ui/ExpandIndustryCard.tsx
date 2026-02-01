"use client";

import { Industry } from "../../data/detailedIndustries";

interface Props {
    industry: Industry;
}

export default function ExpandIndustryCard({ industry }: Props) {
    return (
        <div className="rounded-xl border bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {industry.title}
            </h3>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {industry.description}
            </p>

            <ul className="mt-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
                {industry.items.map((item) => (
                    <li key={item}>• {item}</li>
                ))}
            </ul>
        </div>
    );
}

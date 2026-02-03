"use client";

import { motion } from "framer-motion";
import { Service } from "../../data/servicesData";

interface Props {
    service: Service;
}

export default function ServiceCard({ service }: Props) {
    return (
        <motion.div
            className="
        group relative bg-white rounded-2xl p-6 shadow-lg 
        hover:shadow-2xl transition-all duration-300 cursor-pointer 
        border border-gray-100 overflow-hidden
      "
        >
            {/* Optional hover background overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                style={{ backgroundImage: `url(${service.image})` }}
            ></div>

            {/* Card content */}
            <div className="relative z-10 flex flex-col items-center text-center">
                {/* Emoji / icon */}
                <div
                    className={`w-16 h-16 mb-4 flex items-center justify-center text-3xl rounded-2xl shadow-lg ${service.iconGradient}`}
                >
                    {service.emoji}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                    {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>

                {/* Features / items */}
                <div className="space-y-1 w-full">
                    {service.items?.map(item => (
                        <div className="flex items-center text-xs text-gray-500" key={item}>
                            <svg
                                className="w-3 h-3 text-teal-500 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            {/* subtle gradient overlay on hover */}
            <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl ${service.iconGradient}`}
            ></div>
        </motion.div>
    );
}

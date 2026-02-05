"use client";

import { motion } from "framer-motion";
import { Industry } from "../../data/industriesData";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
    industry: Industry;
}

export default function IndustriesCard({ industry }: Props) {
    const [hover, setHover] = useState(false);

    return (
        <Link href={industry.link || "#"}>
            <motion.div
                className="group relative w-full p-6 bg-white rounded-2xl shadow-lg cursor-pointer overflow-hidden border border-gray-100"
                onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {/* Hover background image (desktop only) */}
                {industry.image && (
                    <div
                        className="
                          absolute inset-0 bg-cover bg-center
                          opacity-0 md:group-hover:opacity-10
                          transition-opacity duration-300
                        "
                        style={{ backgroundImage: `url(${industry.image})` }}
                    />
                )}

                <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Icon */}
                    {industry.icon ? (
                        <div
                            className={`w-16 h-16 ${industry.iconGradient} rounded-2xl mb-4 shadow-lg flex items-center justify-center`}
                        >
                            <Image
                                src={industry.icon}
                                alt={industry.title}
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                    ) : industry.emoji ? (
                        <div
                            className={`w-16 h-16 ${industry.iconGradient} rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-lg`}
                        >
                            {industry.emoji}
                        </div>
                    ) : null}

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 md:group-hover:text-teal-600 transition-colors">
                        {industry.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4"> {industry.description}</p>


                </div>

                {/* Gradient overlay (desktop hover only) */}
                {industry.iconGradient && (
                    <div
                        className={`
                          absolute inset-0 ${industry.iconGradient}
                          opacity-0 md:group-hover:opacity-5
                          transition-opacity duration-300 rounded-2xl
                        `}
                    />
                )}
            </motion.div>
        </Link>
    );
}

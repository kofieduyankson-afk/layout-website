"use client";

import { motion } from "framer-motion";
import { Industry } from "../../data/industriesData";
import { useState } from "react";

interface Props {
    industry: Industry;
}

export default function IndustriesCard({ industry }: Props) {
    const [hover, setHover] = useState(false);

    return (
        <motion.div
            className="relative w-full p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md cursor-pointer overflow-hidden"
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            whileHover={{ y: -6 }} // subtle lift
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <h3 className="text-lg font-semibold mb-2">
                {industry.title}
            </h3>

            <motion.p
                className="text-sm text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: hover ? 1 : 0 }}
                transition={{ duration: 0.25 }}
            >
                {industry.description}
            </motion.p>
        </motion.div>
    );
}

"use client";

import { motion } from "framer-motion";

interface Props {
    title: string;
    description?: string;
    image?: string;
}

export default function DetailedItemCard({
    title,
    description,
    image,
}: Props) {
    return (
        <motion.div
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
            whileHover={{ y: -6 }}
        >
            {/* Image placeholder */}
            {/* <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400 text-sm">
                Image placeholder
            </div> */}

            <h3 className="text-lg font-semibold text-[#262e31] mb-2 text-center">
                {title}
            </h3>

            <p className="text-sm text-gray-600 text-center">
                {description ?? "Description coming soon"}
            </p>
        </motion.div>
    );
}

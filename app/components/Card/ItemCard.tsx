"use client";

import { motion } from "framer-motion";

interface Props {
    title: string;
    description: string;
    image?: string;
}

export default function ItemCard({ title, description }: Props) {
    return (
        <motion.div
            className="relative w-full p-6 bg-[#9da3a8] rounded-xl shadow-md cursor-pointer overflow-hidden"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <h3 className="text-lg font-semibold mb-2 text-[#262e31]">
                {title}
            </h3>

            <p className="text-sm text-[#262e31]/80">
                {description}
            </p>
        </motion.div>
    );
}

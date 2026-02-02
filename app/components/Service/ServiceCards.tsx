
"use client";

import { motion } from "framer-motion";
import { Service } from "../../data/servicesData";
import { useState } from "react";

interface Props {
    service: Service;
}

export default function ServiceCard({ service }: Props) {
    const [hover, setHover] = useState(false);

    return (
        <motion.div
            className="flex-shrink-0 w-64 h-50 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md cursor-pointer relative overflow-hidden"
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h3 className="text-lg font-semibold mb-2">
                {service.title}{" "}
                <span className="text-2xl">
                    {service.emoji}
                </span>
            </h3>

            <motion.p
                className="text-sm text-gray-600 dark:text-gray-300 absolute bottom-6 left-6 right-6 opacity-0"
                animate={{ opacity: hover ? 1 : 0, y: hover ? 0 : 10 }}
                transition={{ duration: 0.3 }}
            >
                {service.description}
            </motion.p>
        </motion.div>
    );
}

// import { services } from "./serviceData";

// export default function ServicesCard() {
//     return (
//         <div className="relative">
//             <h4 className="text-sm font-semibold text-gray-900">Services</h4>

//             <ul className="mt-4 space-y-3">
//                 {services.map((service) => (
//                     <li key={service.title} className="group relative">
//                         {/* Service title */}
//                         <span className="cursor-pointer text-sm text-gray-600 hover:text-blue-600 group-hover:underline">
//                             {service.title}
//                         </span>

//                         {/* Hover panel */}
//                         <div
//                             className="
//      absolute left-full top-0 z-20 ml-6 w-72
//     rounded-xl border bg-white p-5 shadow-xl
//     opacity-0 -translate-x-8
//     transition-all duration-700 ease-out
//     group-hover:opacity-100
//     group-hover:translate-x-0
//   "
//                         >

//                             <h5 className="font-semibold text-gray-900">
//                                 {service.title}
//                             </h5>

//                             <p className="mt-2 text-sm text-gray-600">
//                                 {service.description}
//                             </p>

//                             <ul className="mt-3 space-y-1 text-sm text-gray-500">
//                                 {service.items.map((item) => (
//                                     <li key={item}>• {item}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

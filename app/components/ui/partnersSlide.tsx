"use client";

import { partnersData } from "@/app/data/partnersData";
import { useState, useEffect } from "react";

export default function PartnersSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Split partners into 2 slides of 3 each
    const slides = [
        partnersData.slice(0, 3),
        partnersData.slice(3, 6),
    ];

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-700"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, idx) => (
                    <div key={idx} className="flex w-full flex-shrink-0">
                        {slide.map((partner) => (
                            <div
                                key={partner.title}
                                className="w-1/3 p-4 flex justify-center"
                            >
                                <div className="bg-white rounded-xl shadow-lg overflow-hidden flex items-center justify-center h-32">
                                    <img
                                        src={partner.image}
                                        alt={partner.title}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

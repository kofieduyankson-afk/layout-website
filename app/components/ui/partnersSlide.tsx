"use client";

import { partnersData } from "@/app/data/partnersData";
import { useState, useEffect, useMemo } from "react";

const ITEMS_PER_SLIDE = 3;

export default function PartnersSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // 🔹 Create slides dynamically
    const slides = useMemo(() => {
        const result = [];
        for (let i = 0; i < partnersData.length; i += ITEMS_PER_SLIDE) {
            result.push(partnersData.slice(i, i + ITEMS_PER_SLIDE));
        }
        return result;
    }, []);

    // 🔹 Auto-slide through ALL slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-700 ease-in-out"
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

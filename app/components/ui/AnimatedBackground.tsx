"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function AnimatedBackground() {
    const vantaRef = useRef<HTMLDivElement | null>(null);
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            window.VANTA &&
            window.VANTA.NET &&
            window.THREE &&
            vantaRef.current &&
            !vantaEffect.current
        ) {
            vantaEffect.current = window.VANTA.NET({
                el: vantaRef.current,
                THREE: window.THREE,

                mouseControls: true,
                touchControls: true,
                gyroControls: false,

                minHeight: 200,
                minWidth: 200,
                scale: 1,
                scaleMobile: 1,

                color: 0x1a1214,
                backgroundColor: 0x17a28f,
            });
        }

        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };
    }, []);

    return (
        <>
            {/* Load local scripts */}
            <Script src="/bg/three.min.js" strategy="beforeInteractive" />
            <Script src="/bg/vanta.net.min.js" strategy="afterInteractive" />

            {/* Hero Section */}
            <section
                ref={vantaRef}
                className="relative w-full h-screen overflow-hidden"
            >
                {/* Optional overlay for contrast */}
                <div className="absolute inset-0 bg-black/30"></div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-3xl font-medium text-white mb-2 sm:text-4xl">
                        Layout Laurate LLC
                    </h1>
                    <h1 className="text-5xl font-bold mb-4 text-white sm:text-6xl">
                        Building Digital Solutions
                    </h1>
                    <p className="text-gray-100 text-lg sm:text-xl max-w-2xl">
                        Modern IT services for modern businesses
                    </p>
                </div>
            </section>
        </>
    );
}

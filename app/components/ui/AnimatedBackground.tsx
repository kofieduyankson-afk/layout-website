"use client";

import { useEffect, useRef } from "react";

declare global {
    interface Window {
        VANTA: any;
    }
}

export default function AnimatedBackground() {
    const vantaRef = useRef<HTMLDivElement>(null);
    let vantaEffect: { destroy: () => void } | null = null;

    useEffect(() => {
        if (!vantaRef.current || typeof window === "undefined") return;

        // Load three.min.js dynamically
        const threeScript = document.createElement("script");
        threeScript.src = "/bg/three.min.js";
        threeScript.async = true;
        document.body.appendChild(threeScript);

        // Load vanta.net.min.js after three.js
        threeScript.onload = () => {
            const vantaScript = document.createElement("script");
            vantaScript.src = "/bg/vanta.net.min.js";
            vantaScript.async = true;
            document.body.appendChild(vantaScript);

            vantaScript.onload = () => {
                if (window.VANTA && vantaRef.current) {
                    vantaEffect = window.VANTA.NET({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.0,
                        minWidth: 200.0,
                        scale: 1.0,
                        scaleMobile: 1.0,
                        color: 0x262e31,
                        backgroundColor: 0x17a28f,
                    });
                }
            };
        };

        return () => {
            if (vantaEffect) vantaEffect.destroy();
            document.body.removeChild(threeScript);
        };
    }, []);

    return <div ref={vantaRef} className="absolute inset-0 w-full h-full" />;
}

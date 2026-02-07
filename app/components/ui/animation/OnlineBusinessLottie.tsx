"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function TechLottie() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <DotLottieReact
                src="/bg/Isometric internet shop.lottie"
                autoplay
                loop
                className="w-full h-full "
            />
        </div>
    );
}


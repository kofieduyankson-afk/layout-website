"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroLottie() {
    return (
        <div className="absolute inset-0 w-screen h-screen overflow-hidden">
            <DotLottieReact
                src="/bg/Background Grey Wave.lottie"
                autoplay
                loop
                className="w-screen h-screen pointer-events-none"
            />
        </div>
    );
}

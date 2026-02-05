"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function BackgroundLottie() {
    return (
        <div className="absolute inset-0 w-screen h-screen overflow-hidden">
            <DotLottieReact
                src="/bg/background lines wave.lottie"
                autoplay
                loop
                className="w-screen h-screen pointer-events-none"
            />
        </div>
    );
}

"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function IntroBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <DotLottieReact
                src="/bg/Wave Lines Animation.lottie"
                autoplay
                loop
                className="
                  w-[120%] h-full
                  -translate-x-[10%]
                  opacity-20
                "
            />
        </div>
    );
}

export function CTABackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <DotLottieReact
                src="/bg/Water waves.lottie"
                autoplay
                loop
                className="
                  w-[120%] h-full
                  -translate-x-[10%]
                  opacity-20
                "
            />
        </div>
    );
}

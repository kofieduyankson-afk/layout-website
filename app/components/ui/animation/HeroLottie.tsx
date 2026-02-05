"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HeroLottie() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <DotLottieReact


                src="/bg/Background Grey Wave.lottie"
                autoplay
                loop
                className="w-full h-full pointer-events-none opacity-30 rotate-180"
            />
        </div>


    );
}

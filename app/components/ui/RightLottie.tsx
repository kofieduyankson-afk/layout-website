"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function RightLottie() {
    return (
        <div className="absolute inset-0 w-screen h-screen overflow-hidden">
            <DotLottieReact
                src="/bg/TEchnology.lottie"
                autoplay
                loop
                className="w-full h-auto rounded-lg object-cover"
            />
        </div>
    );
}

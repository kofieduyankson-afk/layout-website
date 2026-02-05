"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useInView } from "react-intersection-observer";

export default function ContentBackground() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        rootMargin: "100px",
    });

    return (
        <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
            {inView && (
                <DotLottieReact
                    src="/bg/background lines wave.lottie"
                    autoplay
                    loop
                    className="w-[120%] h-full -translate-x-[10%] opacity-15"
                />
            )}
        </div>
    );
}

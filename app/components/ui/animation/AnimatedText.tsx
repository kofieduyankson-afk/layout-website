"use client"
import React, { useState, useEffect } from 'react';

interface AnimationPhase {
    l1Suffix: string; // The part after "We "
    l2: string;
}

const SEQUENCE: AnimationPhase[] = [
    { l1Suffix: "Design", l2: "Scalable Digital Systems" },
    { l1Suffix: "Build", l2: "Secure Modern Platforms" },
    { l1Suffix: "Optimise", l2: "Business Technology Operations" },
    { l1Suffix: "Consult", l2: "Across Diverse Industries" },
    { l1Suffix: "Deliver", l2: "Reliable IT Solutions" }
];

const AnimatedText: React.FC = () => {
    const [phaseIndex, setPhaseIndex] = useState(0);
    const [line1, setLine1] = useState("We");
    const [line2, setLine2] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const currentPhase = SEQUENCE[phaseIndex];
        const fullLine1 = `We ${currentPhase.l1Suffix}`;

        const tick = () => {
            if (isDeleting) {
                // Deleting logic: Stop at "We "
                if (line1.length > 3) {
                    setLine1(prev => prev.substring(0, prev.length - 1));
                    timeout = setTimeout(tick, 50);
                } else {
                    // Finished deleting, move to next phase
                    setIsDeleting(false);
                    setPhaseIndex((prev) => (prev + 1) % SEQUENCE.length);
                    setLine2(""); // Clear line 2 to trigger fly-out/in
                }
            } else {
                // Typing logic
                if (line1.length < fullLine1.length) {
                    setLine1(fullLine1.substring(0, line1.length + 1));
                    timeout = setTimeout(tick, 50);
                } else {
                    // Finished typing Line 1, show Line 2
                    setLine2(currentPhase.l2);
                    // Wait before starting to delete
                    timeout = setTimeout(() => setIsDeleting(true), 1500);
                }
            }
        };

        timeout = setTimeout(tick, 100);
        return () => clearTimeout(timeout);
    }, [line1, isDeleting, phaseIndex]);

    return (
        <div className="flex flex-col justify-center min-h-[260px] px-6 text-center lg:text-left space-y-6">



            {/* Main Typing Headline */}
            <h1 className="text-5xl sm:text-6xl font-extrabold text-[#262e31] leading-tight">
                {line1}
                <span className="inline-block w-[4px] h-[48px] bg-[#17a28f] ml-2 animate-pulse align-middle" />
            </h1>

            {/* Sub headline (animated line 2) */}
            <div className="relative h-14 overflow-hidden">
                <p
                    className={`text-xl sm:text-2xl text-[#262e31]/70 leading-relaxed max-w-2xl transition-all duration-700 ease-out transform
        ${line2 ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
      `}
                >
                    {line2}
                </p>
            </div>

        </div>

    );
};

export default AnimatedText;
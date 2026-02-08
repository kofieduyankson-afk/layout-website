import Link from "next/link";

export default function ContactCTA() {
    return (
        <section className="relative w-full px-6 py-28 text-white text-center overflow-hidden rounded-t-[3.5rem]">

            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#17a28f] via-[#14907d] to-[#0f6f62]" />

            {/* Glass overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-t-[3.5rem]" />

            {/* Ambient glow accents */}
            <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-black/20 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 tracking-tight">
                    Ready to Transform <br className="hidden sm:block" />
                    Your Business?
                </h2>

                <p className="mb-12 text-xl text-white/90 leading-relaxed">
                    Tell us about your idea or challenge — we’ll help you design,
                    build, and scale a digital solution that actually works.
                </p>

                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-12 py-5
                     bg-white text-[#262e31] font-bold text-lg
                     rounded-full shadow-xl
                     hover:shadow-2xl hover:-translate-y-1
                     hover:bg-gray-100
                     transition-all duration-300"
                >
                    Start a Conversation
                    <span className="text-xl">→</span>
                </Link>
            </div>
        </section>
    );
}

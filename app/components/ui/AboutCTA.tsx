import Link from "next/link";

export default function AboutCTA() {
    return (
        <section className="relative w-full px-6 py-28 text-white text-center overflow-hidden rounded-t-[3.5rem]">

            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#17a28f] via-[#14907d] to-[#0f6f62]" />

            {/* Soft glass overlay */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-t-[3.5rem]" />

            {/* Ambient glow accents */}
            <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-black/20 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto">

                <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
                    Get to Know the Team <br className="hidden sm:block" />
                    Behind the Work
                </h2>

                <p className="text-xl text-white/90 leading-relaxed mb-12 max-w-2xl mx-auto">
                    Learn more about our mission, values, and the people building
                    digital solutions that make everyday life easier.
                </p>

                {/* CTA */}
                <Link
                    href="/about"
                    className="inline-flex items-center justify-center gap-3
                     px-12 py-4 bg-white text-[#262e31]
                     font-bold text-lg
                     rounded-full shadow-xl
                     hover:shadow-2xl hover:-translate-y-1
                     transition-all duration-300"
                >
                    Explore Our Story
                    <span className="text-xl">→</span>
                </Link>

                {/* Social proof */}
                <div className="mt-14 flex flex-col items-center gap-4">
                    <div className="flex -space-x-4">
                        {[
                            "/pib.png",
                            "/alisa.png",
                            "/swift.png",
                            "/krontivia.png",
                            "/csd.png",
                            "/tictok.png",
                            "/brosa.png",
                        ].map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt="Partner Logo"
                                className="w-12 h-12 rounded-full
                           border-4 border-white/30
                           bg-white object-contain p-1
                           shadow-xl backdrop-blur-sm"
                            />
                        ))}
                    </div>

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                        Trusted by Growing Businesses
                    </p>
                </div>

            </div>
        </section>
    );
}

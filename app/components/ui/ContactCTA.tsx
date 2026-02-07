import Link from "next/link";
import Image from "next/image";
export default function ContactCTA() {
    return (
        <section
            className="relative w-full px-6 py-20 text-white text-center relative bg-cover bg-center"
            style={{ backgroundImage: "url('/team.jpg')" }}
        >
            <div className="absolute inset-0 bg-[#262e31]/80"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">
                    Ready to Transform Your Business?
                </h2>
                <p className="mb-8 text-lg text-gray-200">
                    Reach out to us, tell us about your vision, and we’ll help bring it to life.
                </p>
                <a
                    href="/contact"
                    className="inline-block px-8 py-4 bg-[#17a28f] text-white font-bold rounded-lg shadow-lg hover:bg-[#14907d] hover:-translate-y-1 transition-all"
                >
                    Contact Us Today
                </a>
            </div>
        </section>
    );
}
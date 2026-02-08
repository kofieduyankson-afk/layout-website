"use client";

import IntroBackground from "../components/ui/animation/IntroBackground";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white font-sans">

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden">
                <IntroBackground />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17a28f]/10 text-[#17a28f] font-bold text-sm uppercase tracking-widest mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#17a28f]"></span>
                        Connect With Us
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#262e31] leading-tight mb-6">
                        Let’s Start a <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#17a28f] to-[#262e31]">
                            Conversation
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Have a project in mind or need expert technical advice? Our team is ready to help you scale.
                    </p>
                </div>
            </section>

            {/* Main Contact Area */}
            <section className="px-6 py-20 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                        {/* Left: Contact Details */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-[#262e31] mb-6 tracking-tight">Contact Information</h2>
                                <p className="text-gray-600 text-lg">
                                    Fill out the form and our team will get back to you within 24 hours.
                                </p>
                            </div>

                            <div className="space-y-10">
                                {[
                                    {
                                        label: "Email Us",
                                        value: "hello@layoutlaurate.com",
                                        desc: "Available for general inquiries and support."
                                    },
                                    {
                                        label: "Call Us",
                                        value: "+233 55 000 0000",
                                        desc: "Mon-Fri from 8am to 5pm GMT."
                                    },
                                    {
                                        label: "Location",
                                        value: "Accra, Ghana",
                                        desc: "Operating globally with a local presence."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="group border-l-4 border-gray-100 pl-6 hover:border-[#17a28f] transition-all duration-300">
                                        <p className="text-xs font-black text-[#17a28f] uppercase tracking-[0.2em] mb-1">{item.label}</p>
                                        <p className="text-2xl font-bold text-[#262e31] mb-1 group-hover:text-[#17a28f] transition-colors">{item.value}</p>
                                        <p className="text-gray-500">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: The Form Card */}
                        <div className="lg:col-span-7">
                            <div className="bg-[#f8fafc] rounded-[2.5rem] p-8 md:p-12 border border-gray-100 relative shadow-sm">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full rounded-2xl border-none bg-white px-5 py-4 text-[#262e31] shadow-sm focus:ring-2 focus:ring-[#17a28f] transition-all placeholder:text-gray-300"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Email Address</label>
                                            <input
                                                type="email"
                                                placeholder="john@example.com"
                                                className="w-full rounded-2xl border-none bg-white px-5 py-4 text-[#262e31] shadow-sm focus:ring-2 focus:ring-[#17a28f] transition-all placeholder:text-gray-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Subject</label>
                                        <select className="w-full rounded-2xl border-none bg-white px-5 py-4 text-[#262e31] shadow-sm focus:ring-2 focus:ring-[#17a28f] transition-all appearance-none cursor-pointer">
                                            <option>General Inquiry</option>
                                            <option>Project Proposal</option>
                                            <option>Technical Support</option>
                                            <option>Careers</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Tell us about your project..."
                                            className="w-full rounded-2xl border-none bg-white px-5 py-4 text-[#262e31] shadow-sm focus:ring-2 focus:ring-[#17a28f] transition-all placeholder:text-gray-300"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-5 rounded-2xl bg-[#262e31] text-white font-bold text-lg hover:bg-[#17a28f] shadow-lg hover:shadow-[#17a28f]/20 transition-all duration-300 flex items-center justify-center gap-2"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Section */}
            {/* Bottom Section */}
            <section
                className="relative px-6 py-28 text-white text-center rounded-t-[3.5rem] overflow-hidden"
            >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#17a28f] via-[#14907d] to-[#0f6f62]" />

                {/* Glass overlay */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-t-[3.5rem]" />

                {/* Ambient glow accents */}
                <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-black/20 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
                        Ready to Build Your Future?
                    </h2>

                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Join the growing list of businesses that have redefined their digital
                        presence with us.
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <div className="flex -space-x-4 mb-2">
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
                       shadow-xl
                       backdrop-blur-sm"
                                />
                            ))}
                        </div>

                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                            Trusted by Industry Leaders
                        </p>
                    </div>
                </div>
            </section>


        </main>
    );
}
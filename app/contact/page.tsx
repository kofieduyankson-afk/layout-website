"use client";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white">

            {/* Hero */}
            <section
                className="relative px-6 pt-32 pb-16 text-center bg-[#17a28f]"
                style={{ backgroundImage: "url('/contact-hero.jpg')" }}
            >
                <div className="max-w-3xl mx-auto text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed">
                        Have a project in mind or need support? Let’s talk.
                    </p>
                </div>
            </section>

            {/* Contact Info */}
            <section className="px-6 py-20 ">
                <div className="mx-auto max-w-6xl grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Email    text-[#262e31]*/}
                    <div className="rounded-2xl bg-white p-6 shadow-lg">
                        <h3 className="text-lg font-semibold text-[#262e31]">
                            Email
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Reach us anytime via email.
                        </p>
                        <p className="mt-4 font-medium text-[#17a28f]">
                            hello@layoutlaurate.com
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="rounded-2xl bg-white p-6 shadow-lg">
                        <h3 className="text-lg font-semibold text-[#262e31]">
                            Phone
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Call us during business hours.
                        </p>
                        <p className="mt-4 font-medium text-[#17a28f]">
                            +233 55 000 0000
                        </p>
                    </div>

                    {/* Location */}
                    <div className="rounded-2xl bg-white  p-6 shadow-lg">
                        <h3 className="text-lg font-semibold text-[#262e31]">
                            Location
                        </h3>
                        <p className="mt-2 text-gray-600">
                            We operate remotely and on-site.
                        </p>
                        <p className="mt-4 font-medium text-[#17a28f]">
                            Accra, Ghana
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            {/* Contact Form */}
            <section className="px-6 py-20 bg-gray-50">
                <div className="mx-auto max-w-3xl rounded-2xl bg-white p-10 shadow-lg">
                    <h2 className="text-3xl font-semibold text-[#262e31] mb-2">
                        Send us a message
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Fill out the form and we’ll get back to you shortly.
                    </p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-[#262e31]/80">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                placeholder="Your name"
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-[#17a28f]/5 px-4 py-3 text-[#262e31] 
                    focus:outline-none focus:ring-2 focus:ring-[#17a28f] focus:border-[#17a28f]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#262e31]/80">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-[#17a28f]/5 px-4 py-3 text-[#262e31] 
                    focus:outline-none focus:ring-2 focus:ring-[#17a28f] focus:border-[#17a28f]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#262e31]/80">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                required
                                placeholder="Tell us about your project..."
                                className="mt-2 w-full rounded-lg border border-gray-300 bg-[#17a28f]/5 px-4 py-3 text-[#262e31] 
                    focus:outline-none focus:ring-2 focus:ring-[#17a28f] focus:border-[#17a28f]"
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-lg 
                bg-gradient-to-r from-[#17a28f] to-[#138c7a]
                px-8 py-3 font-medium text-white shadow-md 
                hover:shadow-lg transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>


            {/* CTA */}
            <section className="px-6 py-16 bg-[#17a28f] text-white text-center rounded-t-3xl">
                <h2 className="text-3xl font-semibold mb-4">
                    Let’s Build Something Great
                </h2>
                <p className="mb-6 text-lg">
                    Tell us about your idea and we’ll help bring it to life.
                </p>
            </section>

        </main>
    );
}

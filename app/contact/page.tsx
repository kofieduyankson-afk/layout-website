"use client";

export default function Contact() {
    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-gray-900">
            {/* Hero */}
            <section className="px-6 pt-24 pb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                    Contact Us
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    Have a project in mind or need support? Let’s talk.
                </p>
            </section>

            {/* Contact Info */}
            <section className="px-6 pb-20">
                <div className="mx-auto max-w-5xl grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Email */}
                    <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Email
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Reach us anytime via email.
                        </p>
                        <p className="mt-3 font-medium text-blue-600">
                            hello@layoutlaurate.com
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Phone
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Call us during business hours.
                        </p>
                        <p className="mt-3 font-medium text-blue-600">
                            +233 55 000 0000
                        </p>
                    </div>

                    {/* Location */}
                    <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Location
                        </h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            We operate remotely and on-site.
                        </p>
                        <p className="mt-3 font-medium text-blue-600">
                            Accra, Ghana
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="px-6 pb-32">
                <div className="mx-auto max-w-3xl rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-sm">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                        Send us a message
                    </h2>

                    <form className="mt-6 space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="mt-1 w-full rounded-lg border bg-transparent px-4 py-2 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="mt-1 w-full rounded-lg border bg-transparent px-4 py-2 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Tell us about your project..."
                                className="mt-1 w-full rounded-lg border bg-transparent px-4 py-2 text-gray-900 dark:text-white border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}

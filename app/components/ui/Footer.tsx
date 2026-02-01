import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t bg-white">
            <div className="mx-auto max-w-7xl px-6 py-10">
                <div className="grid gap-8 md:grid-cols-3">

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                            Layout Laurate LLC
                        </h3>
                        <p className="mt-2 text-sm text-gray-600">
                            We provide reliable and professional services tailored to your
                            business needs.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900">

                        </h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/industries"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    Industries
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-600 hover:text-blue-600"
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900">
                            Contact
                        </h4>
                        <ul className="mt-3 space-y-2 text-sm text-gray-600">
                            <li>Email: info@company.com</li>
                            <li>Phone: +233 000 000 000</li>
                            <li>Accra, Ghana</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Layout Laurate LLc All rights reserved.
                </div>
            </div>
        </footer>
    );
}

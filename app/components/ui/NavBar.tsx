"use client";

import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">

            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo / Company Name */}
                <Link
                    href="/"
                    className="text-xl font-bold text-gray-900"
                >
                    Layout Laurate LLC
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-8">
                    <Link
                        href="/about"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        About Us
                    </Link>

                    <Link
                        href="/services"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        Services
                    </Link>
                    <Link
                        href="/industries"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        Industries
                    </Link>

                    <Link
                        href="/contact"
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}

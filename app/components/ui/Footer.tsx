"use client";

import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (
        // bg - [#17a28f]
        <footer className="border-t border-gray-700  dark:bg-gray-800  text-white">
            <div className="mx-auto max-w-7xl px-6 py-10">
                <div className="grid gap-8 md:grid-cols-3">

                    <div>
                        <Image
                            src="/layoutircon.png"
                            alt="Layout Laureate LLC Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <h3 className="text-lg font-semibold text-white">
                            Layout Laureate LLC
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            We provide reliable and professional services tailored to your business needs.
                        </p>
                    </div>


                    <div>
                        <h4 className="text-sm font-semibold text-white"></h4>
                        <ul className="mt-3 space-y-2 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-blue-500 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/services" className="hover:text-blue-500 transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/industries" className="hover:text-blue-500 transition-colors">
                                    Industries
                                </Link>
                            </li> */}
                            <li>
                                <Link href="/contact" className="hover:text-blue-500 transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white">Contact</h4>
                        <ul className="mt-3 space-y-2 text-sm text-gray-400">
                            <li>Email: info@layoutllc.com</li>
                            <li>Phone: +233 507 056 286</li>
                            <li>Accra, Ghana</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Layout Laureate LLC. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

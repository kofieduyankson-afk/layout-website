"use client";

import { navIndustries } from "@/app/data/navIndustries";
import { navServices } from "@/app/data/navServices";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


type MenuType = "services" | "industries" | null;

export default function NavBar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileSubMenu, setMobileSubMenu] = useState<MenuType>(null);

    const [openMenu, setOpenMenu] = useState<MenuType>(null);

    return (
        <nav
            className="fixed top-0 left-0 z-50 w-full bg-[#17a28f] "
            onMouseLeave={() => setOpenMenu(null)}
        >
            <div className="relative mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between py-4">
                    {/* Logo + Company Name */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/layoutircon.png"
                            alt="Layout Laurate LLC Logo"
                            width={70}
                            height={60}
                            className="object-contain"
                        />
                        <span className="text-xl font-bold text-white">Layout Laurate LLC</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {/* SERVICES */}
                        <span
                            onMouseEnter={() => setOpenMenu("services")}
                            className="cursor-pointer text-white/90 hover:text-[#262e31]"
                        >
                            Services
                        </span>

                        {/* INDUSTRIES */}
                        <span
                            onMouseEnter={() => setOpenMenu("industries")}
                            className="cursor-pointer text-white/90 hover:text-[#262e31]"
                        >
                            Industries
                        </span>

                        <Link href="/about" className="text-white/90 hover:text-[#262e31]">
                            About Us
                        </Link>

                        <Link href="/contact" className="text-white/90 hover:text-[#262e31]">
                            Contact Us
                        </Link>
                    </div>
                    {/* MOBILE MENU BUTTON (shows below md) */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden text-white text-3xl"
                        aria-label="Open menu"
                    >
                        Image
                    </button>
                </div>

                {/* SERVICES MEGA MENU */}
                {openMenu === "services" && (
                    <MegaMenu items={navServices} />
                )}

                {/* INDUSTRIES MEGA MENU */}
                {openMenu === "industries" && (
                    <MegaMenu items={navIndustries} />
                )}
            </div>
        </nav>
    );
}

function MegaMenu({
    items,
}: {
    items: {
        title: string;
        icon: string;
        animated_icon?: string;
        href: string;
    }[];
}) {
    const cols = 3;
    const remainder = items.length % cols;

    return (
        <div className="absolute left-0 right-0 top-full bg-[#17a28f]">
            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 justify-items-center">
                    {items.map((item, index) => {
                        const isLastRow =
                            remainder !== 0 && index >= items.length - remainder;

                        let mobileColClass = "";

                        if (isLastRow) {
                            if (remainder === 1) {
                                mobileColClass = "col-start-2";
                            }

                            if (remainder === 2) {
                                mobileColClass =
                                    index === items.length - 2
                                        ? "col-start-2"
                                        : "col-start-3";
                            }
                        }

                        return (
                            <Link
                                key={item.title}
                                href={item.href}
                                className={`group flex flex-col items-center justify-center text-center gap-2
                  rounded-lg p-3 w-full sm:w-auto sm:max-w-[160px]
                  transition hover:bg-gray-100
                  ${mobileColClass} md:col-auto
                `}
                            >
                                {item.animated_icon ? (
                                    <div className="w-8 h-8 flex items-center justify-center">
                                        <Image
                                            src={item.animated_icon}
                                            alt={item.title}
                                            width={32}
                                            height={32}
                                            className="object-contain mix-blend-multiply"
                                        />
                                    </div>
                                ) : (
                                    <span className="text-2xl">{item.icon}</span>
                                )}

                                <span className="font-medium text-white transition-colors group-hover:text-[#262e31]">
                                    {item.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


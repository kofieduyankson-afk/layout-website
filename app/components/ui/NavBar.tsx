"use client";

import { navIndustries } from "@/app/data/navIndustries";
import { navServices } from "@/app/data/navServices";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
// colors
// teal [#17a28f] 17a28f
// gray-white text  gray-200
// dark-gray [#262e31] #262e31
type MenuType = "services" | "industries" | null;

export default function NavBar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState<MenuType>(null);
    const navRef = useRef<HTMLElement>(null);

    // Click outside handler for desktop menu
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setOpenMenu(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 z-50 w-full bg-white shadow-md"
            onMouseLeave={() => setOpenMenu(null)} // desktop hover
        >
            <div className="relative mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/layoutircon.png"
                            alt="Layout Laurate LLC Logo"
                            width={60}
                            height={50}
                            className="object-contain"
                        />
                        <span className="text-xl font-bold text-[#262e31]">Layout Laurate LLC</span>
                    </Link>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-8">
                        <span
                            onMouseEnter={() => setOpenMenu("services")}
                            className="cursor-pointer text-[#262e31] hover:text-[#262e31]"
                        >
                            Services
                        </span>
                        <span
                            onMouseEnter={() => setOpenMenu("industries")}
                            className="cursor-pointer text-[#262e31] hover:text-[#262e31]"
                        >
                            Industries
                        </span>
                        <Link href="/about" className="text-[#262e31] hover:text-[#262e31]">
                            About Us
                        </Link>
                        <Link href="/contact" className="text-[#262e31] hover:text-[#262e31]">
                            Contact Us
                        </Link>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden"
                        aria-label="Toggle menu"
                    >
                        <Image
                            src="/icons/icons8-menu-50.png"
                            alt="Menu"
                            width={32}
                            height={32}
                        />
                    </button>
                </div>

                {/* DESKTOP MEGA MENUS */}
                {openMenu === "services" && <MegaMenuServices items={navServices} />}
                {openMenu === "industries" && <MegaMenuIndustries items={navIndustries} />}
            </div>

            {/* MOBILE MENU PANEL */}
            {mobileOpen && (
                <div className="md:hidden bg-[#17a28f] border-t border-white/20">
                    <div className="flex flex-col px-6 py-4 gap-4">
                        <Link href="/services" onClick={() => setMobileOpen(false)}>
                            Services
                        </Link>
                        <Link href="/industries" onClick={() => setMobileOpen(false)}>
                            Industries
                        </Link>
                        <Link href="/about" onClick={() => setMobileOpen(false)}>
                            About Us
                        </Link>
                        <Link href="/contact" onClick={() => setMobileOpen(false)}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}


function MegaMenuServices({
    items,
}: {
    items: { title: string; icon: string; animated_icon?: string; href: string }[];
}) {
    return (
        <div className="absolute left-0 right-0 top-full bg-[#17a28f]">
            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 justify-items-center">
                    {items.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="group flex flex-col items-center justify-center text-center gap-2
                         rounded-lg p-3 w-full sm:w-auto sm:max-w-[160px]
                         transition hover:bg-gray-100"
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
                            <span className="font-medium text-white group-hover:text-[#262e31]">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}


function MegaMenuIndustries({
    items,
}: {
    items: { title: string; icon: string; animated_icon?: string; href: string }[];
}) {
    return (
        <div className="absolute left-0 right-0 top-full bg-[#17a28f]">
            <div className="mx-auto max-w-7xl px-6 py-8">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 justify-items-center">
                    {items.map((item, index) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={`group flex flex-col items-center justify-center text-center gap-2
                  rounded-lg p-3 w-full sm:w-auto sm:max-w-[160px]
                  transition hover:bg-gray-100
                  ${index === items.length - 1 ? "col-start-2 md:col-start-3" : ""}`}
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
                            <span className="font-medium text-white group-hover:text-[#262e31]">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

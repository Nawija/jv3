"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import MenuBurger from "@/components/Header/MenuBurger";
import { NAVLINKS } from "@/constants/Links";
import { rajdhani } from "@/fonts";
import { TiSocialFacebook } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const [hasShadow, setHasShadow] = useState(false);
    const pathname = usePathname();

    // Dodaj cień do nagłówka przy scrollowaniu
    useEffect(() => {
        const handleScroll = () => setHasShadow(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Zamykaj menu po zmianie strony
    useEffect(() => {
        setShowMenu(false);
    }, [pathname]);

    // Blokuj scrollowanie strony gdy menu jest otwarte
    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [showMenu]);

    // Obsługa kliknięcia poza menu (dodaj event listener do body)
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Jeśli menu jest otwarte i kliknięcie nie jest na menu ani na przycisku menu
            if (
                showMenu &&
                !target.closest(".mobile-menu") &&
                !target.closest(".menu-burger-button")
            ) {
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [showMenu]);

    return (
        <>
            {/* Overlay do zamykania menu */}
            {showMenu && (
                <div
                    className="fixed inset-0 anim-opacity bg-black/30 backdrop-blur-md z-[40] lg:hidden"
                    onClick={() => setShowMenu(false)}
                    aria-hidden="true"
                />
            )}
            <header
                className={`fixed top-0 z-50 w-screen bg-white/90  backdrop-blur-md transition-all duration-300 ${
                    rajdhani.className
                } ${hasShadow ? "shadow-md " : ""}`}
            >
                <div className="mx-auto flex items-center justify-between p-4 max-w-screen-2xl">
                    {/* Logo */}
                    <div className="font-light lg:mr-8 uppercase tracking-widest text-xl lg:text-2xl">
                        <Link href="/" aria-label="Strona główna">
                            Jarek Olszewski
                        </Link>
                    </div>

                    {/* Przycisk hamburger */}

                    <MenuBurger
                        handleShowMenu={() => setShowMenu(!showMenu)}
                        showMenu={showMenu}
                    />

                    {/* Menu mobilne */}
                    <div
                        className={`mobile-menu fixed left-0 top-0 z-[50] h-screen w-[280px] bg-[#6e2a23] text-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
                            showMenu ? "translate-x-0" : "-translate-x-full"
                        }`}
                    >
                        <div className="flex flex-col h-full pt-20 px-6">
                            <nav aria-label="Menu mobilne">
                                <ul className="flex flex-col space-y-6">
                                    {NAVLINKS.map((link, index) => (
                                        <li
                                            key={link.label}
                                            className={`transition-all duration-300 ${
                                                showMenu
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            }`}
                                            style={{
                                                transitionDelay: `${
                                                    index * 50
                                                }ms`,
                                            }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() =>
                                                    setShowMenu(false)
                                                }
                                                className={`block py-1 text-lg uppercase font-medium transition-all hover:text-[#ffcbc4] ${
                                                    pathname === link.href
                                                        ? "text-white font-bold"
                                                        : "text-gray-200"
                                                }`}
                                                aria-current={
                                                    pathname === link.href
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Social media w menu mobilnym */}
                            <div className="flex gap-5 mt-auto mb-10 pt-10">
                                <Link
                                    href="https://www.facebook.com/JarekOlszewskiFotografia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="text-white hover:text-[#ffcbc4] transition-all text-2xl"
                                >
                                    <TiSocialFacebook />
                                </Link>
                                <Link
                                    href="https://www.instagram.com/jarek.olszewski.fotografia/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="text-white hover:text-[#ffcbc4] transition-all text-xl"
                                >
                                    <FiInstagram />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Menu desktopowe */}
                    <nav className="hidden lg:block">
                        <ul className="flex items-center justify-center xl:space-x-4 space-x-2 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                            {NAVLINKS.map((link) => (
                                <li key={link.label} className="relative">
                                    <Link
                                        href={link.href}
                                        className={`block w-max py-4 px-1 uppercase lg:text-sm xl:text-base transition-all hover:text-[#6e2a23] ${
                                            pathname === link.href
                                                ? "text-[#6e2a23] font-medium"
                                                : "text-gray-800"
                                        }`}
                                        aria-current={
                                            pathname === link.href
                                                ? "page"
                                                : undefined
                                        }
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social media desktop */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="https://www.facebook.com/JarekOlszewskiFotografia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-gray-600 hover:text-[#6e2a23] transition-all text-2xl"
                        >
                            <TiSocialFacebook />
                        </Link>
                        <Link
                            href="https://www.instagram.com/jarek.olszewski.fotografia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-gray-600 hover:text-[#6e2a23] transition-all text-xl"
                        >
                            <FiInstagram />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

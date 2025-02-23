"use client";

import Link from "next/link";
import { useState } from "react";
import MenuBurger from "@/components/Header/MenuBurger";
import { NAVLINKS } from "@/constants/Links";
import { robotoFlex } from "@/fonts";
import { TiSocialFacebook } from "react-icons/ti";
import { FiInstagram } from "react-icons/fi";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu() {
        setShowMenu(!showMenu);
    }

    function handleCloseMenu() {
        setShowMenu(false);
    }
    return (
        <header
            className={`sticky top-0 z-50 w-full p-2 lg:p-0 bg-white ${robotoFlex.className}`}
        >
            <div className="mx-auto flex items-center justify-between p-2 max-w-screen-xl">
                <div className="font-light absolute left-1/2 -translate-x-1/2 lg:static uppercase tracking-widest text-2xl w-max whitespace-nowrap">
                    <Link href="/">Jarek Olszewki</Link>
                </div>
                <MenuBurger
                    handleShowMenu={handleShowMenu}
                    showMenu={showMenu}
                />
                <nav
                    className={`fixed left-0 top-0 z-10 h-screen w-full transition-transform lg:sticky lg:top-0 lg:h-auto lg:w-auto lg:translate-x-0 ${
                        showMenu
                            ? "translate-x-0 bg-[#6e2a23] text-white"
                            : "-translate-x-full text-black"
                    }`}
                >
                    <ul className="mx-auto flex h-full w-[60%] max-w-screen-2xl flex-col items-start justify-start mt-24 lg:mt-0 space-y-4 px-2 py-4 text-lg font-semibold lg:w-auto lg:flex-none lg:flex-row lg:justify-start lg:space-x-4 lg:space-y-0 lg:text-sm lg:tracking-tighter lg:font-light">
                        {NAVLINKS.map((link) => (
                            <li
                                key={link.label}
                                onClick={handleCloseMenu}
                                className={`cursor-pointer uppercase transition-all hover:text-[#6e2a23] ${
                                    showMenu
                                        ? "opacity-100"
                                        : "opacity-0 lg:opacity-100"
                                }`}
                            >
                                <Link href={link.href} className="p-1">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="gap-4 hidden lg:flex items-center justify-center">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-[#6e2a23] text-2xl"
                    >
                        <TiSocialFacebook />
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-[#6e2a23] text-xl"
                    >
                        <FiInstagram />
                    </Link>
                </div>
            </div>
        </header>
    );
}

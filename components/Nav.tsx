"use client";

import Link from "next/link";
import { useState } from "react";
import MenuBurger from "@/components/Header/MenuBurger";
import { NAVLINKS } from "@/constants/Links";

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu() {
        setShowMenu(!showMenu);
    }

    function handleCloseMenu() {
        setShowMenu(false);
    }
    return (
        <header className="sticky top-0 z-50 w-full p-2 lg:p-0 bg-white">
            <div className="mx-auto flex items-center justify-between p-2 max-w-screen-xl">
                <div className="font-light absolute left-1/2 -translate-x-1/2 lg:static uppercase tracking-widest text-xl w-max whitespace-nowrap">
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
                    <ul className="mx-auto flex h-full w-1/2 max-w-screen-2xl flex-col items-start justify-center space-y-4 px-2 py-4 text-lg font-semibold lg:w-auto lg:flex-none lg:flex-row lg:justify-start lg:space-x-4 lg:space-y-0 lg:text-sm lg:tracking-tighter lg:font-light">
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
                <div className="gap-4 hidden lg:flex">
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" />
                        </svg>
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-600 hover:text-gray-900"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path d="M16.5 7.5v.01" />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}

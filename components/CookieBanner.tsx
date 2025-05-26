"use client";

import { useState, useEffect } from "react";
// import { acceptCookies } from "@/lib/acceptCookies";

export default function CookieBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const cookiesAccepted = document.cookie.includes(
            "cookies-accepted=true"
        );
        if (!cookiesAccepted) setVisible(true);
    }, []);

    // const handleAccept = async () => {
    //     await acceptCookies();
    //     document.cookie = "cookies-accepted=true; path=/";
    //     setVisible(false);
    //     // window.location.reload(); // przeładuj, aby załadować np. Pixel
    // };

    const handleAccept = () => {
        document.cookie =
            "cookies-accepted=true; path=/; max-age=31536000; samesite=lax";
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 max-w-6xl mx-auto z-50 animate-slide-up delay-1000">
            <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 text-white rounded-2xl shadow-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border border-zinc-700">
                <p className="text-sm leading-relaxed">
                    Ta strona korzysta z ciasteczek aby świadczyć usługi na
                    najwyższym poziomie. Dalsze korzystanie ze strony oznacza,
                    że zgadzasz się na ich użycie.
                </p>
                <button
                    onClick={handleAccept}
                    className="bg-white text-black sm:text-sm font-medium ml-auto text-sm px-4 py-2 rounded-xl hover:bg-zinc-200 transition"
                >
                    OK
                </button>
            </div>
        </div>
    );
}

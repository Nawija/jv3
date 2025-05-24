"use client";
import { useEffect, useState } from "react";

export default function IntroOverlay() {
    const [text, setText] = useState("");
    const [shouldRender, setShouldRender] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    const fullText = "Witaj";

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(interval);
        }, 320 / fullText.length);

        const fadeOutTimer = setTimeout(() => {
            setFadeOut(true); // trigger fade out
        }, 900); // start fading after fullText shown

        const removeTimer = setTimeout(() => {
            setShouldRender(false); // remove after fade
        }, 2500); // after fade-out duration (e.g. 700ms)

        return () => {
            clearInterval(interval);
            clearTimeout(fadeOutTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed z-[9999] top-0 left-0 w-full h-full bg-black flex items-center justify-center px-4 transition-opacity duration-700 ${
                fadeOut ? "opacity-0" : "opacity-100"
            }`}
        >
            <h1 className="text-gray-200 animate-pulse text-4xl font-bold md:text-5xl lg:text-7xl tracking-wide">
                {text}
            </h1>
        </div>
    );
}

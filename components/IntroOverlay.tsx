// components/IntroOverlay.tsx
"use client";
import { useEffect, useState } from "react";

export default function IntroOverlay() {
    const [isVisible, setIsVisible] = useState(true);
    const [text, setText] = useState("");
    const fullText = "Jarek Olszewski – Prawdziwa fotografia";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;
            if (index === fullText.length) clearInterval(interval);
        }, 1800 / fullText.length); // full duration

        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2700); // wait then hide

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed z-[9999] top-0 left-0 w-full h-full bg-black flex items-center text-start justify-center px-4">
            <h1 className="text-gray-200 text-4xl font-bold md:text-5xl lg:text-7xl tracking-wide text-wrap">
                {text}
            </h1>
        </div>
    );
}

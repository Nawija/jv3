"use client";

import { useEffect, useRef, useState } from "react";
import { SlArrowDown } from "react-icons/sl";

interface HeroSectionProps {
    backgroundImages: string[];
    paragraphs: string[];
    title?: string;
}

export default function HeroSection({
    backgroundImages,
    paragraphs,
    title = "Tytuł sekcji",
}: HeroSectionProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [offsetY, setOffsetY] = useState(0);
    const rafId = useRef<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 0);

            if (rafId.current === null) {
                rafId.current = requestAnimationFrame(() => {
                    setOffsetY(scrollY * 0.25);
                    rafId.current = null;
                });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (rafId.current !== null) cancelAnimationFrame(rafId.current);
        };
    }, []);

    return (
        <div className="relative -z-50 overflow-hidden anim-opacity">
            {/* Tła z paralaksą */}
            {backgroundImages.map((img, idx) => (
                <div
                    key={idx}
                    className="fixed top-0 left-0 w-full h-[95vh] bg-cover bg-no-repeat bg-center -z-50 will-change-transform"
                    style={{
                        backgroundImage: `url('${img}')`,
                        transform: `translateY(-${offsetY}px)`,
                    }}
                />
            ))}

            {/* Nakładka przyciemniająca */}
            <div className="absolute inset-0 bg-black/40 -z-30" />

            {/* Tekst */}
            <div className="relative z-10 pt-[30vh] lg:pt-[40vh] pb-[10vh] lg:pb-[20vh] text-white text-center">
                <p className="text-3xl font-semibold">{title}</p>
                <div className="mt-4 px-6 max-w-screen-sm mx-auto space-y-4">
                    <p>{paragraphs}</p>
                </div>
            </div>

            {/* Strzałka */}
            <SlArrowDown
                className={`text-4xl text-white/80 mx-auto mb-2 transition-all duration-200 ${
                    isScrolled ? "translate-y-4 opacity-0" : "opacity-100"
                }`}
            />
        </div>
    );
}

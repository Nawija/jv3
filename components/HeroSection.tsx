"use client";

import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";

interface HeroSectionProps {
    backgroundImages: string[]; // np. ['/Images/sesja.jpg', '/Images/inna.jpg']
    paragraphs: string[];       // np. ['Pierwszy akapit...', 'Drugi akapit...']
    title?: string;             // np. 'Ślub'
}

export default function HeroSection({
    backgroundImages,
    paragraphs,
    title = "Tytuł sekcji",
}: HeroSectionProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative -z-50 anim-opacity">
            <div className="pt-[30vh] lg:pt-[40vh] pb-[20vh] text-white text-center">
                <p className="text-3xl font-semibold">{title}</p>
                <div className="px-6 max-w-screen-sm mx-auto space-y-4">
                    {paragraphs.map((text, idx) => (
                        <p key={idx}>{text}</p>
                    ))}
                </div>
            </div>

            <SlArrowDown
                className={`text-4xl text-white/80 mx-auto mb-2 transition-all duration-150 ${
                    isScrolled ? "translate-y-4 opacity-0" : "opacity-100"
                }`}
            />

            {backgroundImages.map((img, idx) => (
                <div
                    key={idx}
                    className="fixed h-[95vh] top-0 left-0 w-full bg-cover bg-center bg-no-repeat -z-50"
                    style={{ backgroundImage: `url('${img}')` }}
                />
            ))}

            <div className="bg-black/40 absolute top-0 left-0 w-full h-screen -z-30" />
        </div>
    );
}

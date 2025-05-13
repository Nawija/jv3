"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const fullName = "Olszewski";
const altName = "Fotograf";

export function AnimatedLogo() {
    const [text, setText] = useState("Olszewski");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loop, setLoop] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const full = loop % 2 === 0 ? altName : fullName;
            const updatedText = isDeleting
                ? full.substring(0, text.length - 1)
                : full.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === full) {
                // Gotowe pisanie – odczekaj chwilę
                setTimeout(() => setIsDeleting(true), 2000);
                setTypingSpeed(100);
            } else if (isDeleting && updatedText === "") {
                // Gotowe kasowanie – zamień nazwę
                setIsDeleting(false);
                setLoop(loop + 1);
                setTypingSpeed(150);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loop, typingSpeed]);

    return (
        <Link
            href="/"
            aria-label="Strona główna"
            className="font-light lg:mr-8 uppercase text-xl lg:text-2xl"
        >
            Jarek <span className="border-r pr-1 border-brand">{text}</span>
        </Link>
    );
}

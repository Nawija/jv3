"use client";

import { useEffect, useState } from "react";
import { LiaShareSolid } from "react-icons/lia";

function ShareBtn({ name, heroTitle }: { name: string; heroTitle: string }) {
    const [canShare, setCanShare] = useState(false);

    useEffect(() => {
        setCanShare(typeof window !== "undefined" && !!navigator.share);
    }, []);

    const handleShare = async () => {
        try {
            const cleanUrl = window.location.origin + window.location.pathname;
            await navigator.share({
                title: `${name} - Fotografia Jarek Olszewski`,
                text: `Zobacz ${heroTitle} ${name}`,
                url: cleanUrl,
            });
        } catch (error) {
            console.error("Błąd podczas udostępniania:", error);
        }
    };

    if (!canShare) return null;

    return (
        <button onClick={handleShare}>
            <LiaShareSolid className="ml-2" />
        </button>
    );
}

export default ShareBtn;

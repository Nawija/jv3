"use client";
import { useEffect, useState } from "react";

export default function StepsWithLazyBackground() {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const section = document.getElementById("collaboration-section");
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect(); // tylko raz
                }
            },
            { threshold: 0, rootMargin: "650px" }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="collaboration-section"
            className="relative text-black py-16 px-6 overflow-hidden"
        >
            {/* Tło ładowane dopiero po wejściu w widok */}
            {isInView && (
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed -z-10 brightness-50"
                    style={{
                        backgroundImage: "url('/Images/carousel/sesja.avif')",
                    }}
                />
            )}

            <h3 className="text-3xl text-center font-bold mb-10 relative z-10 text-white">
                Jak wygląda współpraca?
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto relative z-10 text-white">
                {[
                    ["1", "Kontakt i rozmowa"],
                    ["2", "Rezerwacja terminu"],
                    ["3", "Zdjęcia w dniu sesji"],
                    ["4", "Obróbka i przekazanie galerii"],
                ].map(([step, label]) => (
                    <div key={step}>
                        <div className="text-6xl font-bold mb-4 text-brand-nav ">
                            {step}
                        </div>
                        <p className="font-bold">{label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

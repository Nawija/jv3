"use client";
import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
export default function FotografiaSlubna() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
            <div className="text-center anim-opacity">
                <div className="pt-[40vh] pb-[20vh] text-white">
                    <p className=" text-3xl font-semibold">Slub</p>
                    <p className="px-6 max-w-screen-sm mx-auto">
                        Dzień, który zapamiętacie na zawsze, ten wymarzony,
                        najpiękniejszy, idealny. Czemu chcę być z Wami? Żeby
                        łapać te wszystkie piękne, ale jednocześnie ulotne
                        chwile i zachowywać je na zdjęciach.
                    </p>
                </div>
                <SlArrowDown
                    className={`text-4xl text-white/80 mx-auto mb-2 transition-all duration-150 ${
                        isScrolled ? "translate-y-4 opacity-0" : "opacity-100"
                    }`}
                />
                <div
                    className="h-screen fixed top-0 left-0 w-full bg-cover bg-center bg-no-repeat -z-40"
                    style={{
                        backgroundImage: "url('/Images/sesja.jpg')",
                    }}
                />
                <div className="bg-black/40 absolute top-0 left-0 w-full h-screen -z-30" />
                <div className="bg-white w-full py-48">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio illo magni magnam?
                    </p>
                </div>
                <div className="bg-white w-full py-48">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio illo magni magnam?
                    </p>
                </div>
                <div className="bg-white w-full py-48">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio illo magni magnam?
                    </p>
                </div>
                <div className="bg-white w-full py-48">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Distinctio illo magni magnam?
                    </p>
                </div>
            </div>
        </>
    );
}

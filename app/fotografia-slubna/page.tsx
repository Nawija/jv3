"use client";

import { useEffect, useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import foto from "@/public/Images/sesja2.jpg";
import ImageComponent from "@/components/ImageComponent";
import TitleH2 from "@/components/TitleH2";
import Carousel from "@/components/Carousel";

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
                <div className=" pt-[30vh] lg:pt-[40vh] pb-[20vh] text-white">
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
                    className="h-[88vh] fixed top-0 left-0 w-full bg-cover bg-center bg-no-repeat -z-40"
                    style={{
                        backgroundImage: "url('/Images/sesja.jpg')",
                    }}
                />
                <div className="bg-black/40 absolute top-0 left-0 w-full h-screen -z-30" />
                <div className="bg-white w-full py-10">
                    <div className="max-w-screen-md mx-auto">
                        <h1 className="text-xl lg:text-2xl">
                            Fotografia ślubna, co skrywa?
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 h-80 relative gap-12 md:gap-0 w-full md:h-[600px]">
                            <ImageComponent
                                img={foto}
                                title="Reportaż ślubny"
                                desc="rozpoczynający się od przygotowań, kończący na ostatnich uroczystościach ślubnych. wszystko co najważniejsze z Waszego dnia pozostanie na fotografiach"
                            />
                            <div className="md:grid md:grid-cols-1 gap-24">
                                <ImageComponent
                                    img={foto}
                                    title="Sesja Ślubna"
                                    desc="zwieńczenie reportażu ślubnego. czas dla Was i tylko o Was, w wyjątkowym miejscu. "
                                />
                                <ImageComponent
                                    img={foto}
                                    title="Sesja narzeczeńska"
                                    desc="pamiątka z okresu przed ślubnego, również dodatkowym plusem jest fakt pozwalający oswoić się z obiektywem, bądź wykorzystać fotografie podczas dnia ślubnego"
                                />
                            </div>
                        </div>
                        <section className="pb-12 pt-48">
                            <h2>jak fotografuje?</h2>
                            <p>
                                Interesująco i spójnie. poprzez fotografie
                                staram się opowiedzieć Wasz najważniejszy dzień
                                w życiu. Fotografując śluby, łapie to co przez
                                wielu niedostrzeżone "chwile i momenty" Tworząc
                                pamiątkę na całe życie. Przygotowując dla Was
                                zdjęcia ślubne, kieruję się dbałością o to by
                                pozostały prawdziwe i naturalne a przez to
                                ponadczasowe
                            </p>
                        </section>
                        <TitleH2
                            title="-kilkanaście fotografii ślubnych-"
                            desc=" #przygotowania #slub #wesele #sesje"
                        />
                        <div className="max-w-screen-sm mx-auto">
                            <Carousel />
                        </div>

                        <TitleH2
                            title="jak pracuje?"
                            desc="niedostrzeżony i często z boku, jestem z Wami przez cały czas, z pomocną radą i wsparciem. podpowiadam, nie ustawiam. najpiękniejsze zdjęcia wychodzą gdy jesteście sobą, cieszycie się wyjątkowością przeżywanej chwili. Fotografie które wykonuje są naturalnie i prawdziwe przez co staja się wyjątkowe i ponadczasowe. "
                        />
                        <TitleH2
                            title="-kilka historii-"
                            desc="#reportaż_ślubny #sesja_slubna #sesja_narzeczenska"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

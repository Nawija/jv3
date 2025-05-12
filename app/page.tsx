import "slick-carousel/slick/slick.css";

import Carousel from "@/components/Carousel";
import Image from "next/image";
import Jarek from "@/public/Images/fotograf-siedlce-jarek-olszewski.jpg";
import Slub from "@/public/Images/slub.jpg";
import Link from "next/link";
import SesjaComponent from "@/components/SesjaComponent";
import CTASendMail from "@/components/CTASendMail";

export default function Home() {
    return (
        <div className="anim-opacity">
            <Carousel />
            <div className="p-2 text-center relative  max-w-screen-xl mx-auto">
                <h1 className="text-2xl py-4">Cześć! Miło mi że tu jesteś</h1>
                <div className="relative text-start flex flex-col lg:flex-row items-center justify-center mt-8">
                    <Image
                        src={Jarek}
                        height={300}
                        alt="fotograf siedlce jarek-olszewski"
                    />
                    <h2 className="w-[340px] lg:w-[400px] bg-black/60 lg:-ml-20 lg:mt-0 -mt-12 px-12 py-6 text-white text-xs tracking-tight backdrop-blur-sm">
                        <strong className="text-2xl font-semibold">
                            Nazywam się Jarek i jestem fotografem
                        </strong>{" "}
                        <br /> Uśmiech na mojej twarzy to Wasza zasługa. Jestem
                        szczęśliwym człowiekiem, który zamienił swoją pasje w
                        sposób na życie. Obserwowanie i fotografowanie całej
                        masy emocji, to jest to co najbardziej uwielbiam w
                        swojej pracy. Fakt stworzenia unikalnych zdjęć które
                        będą towarzyszyć Wam przez całe życie to coś pięknego.
                        …czytaj więcej
                    </h2>
                </div>
                <h2 className="text-xl py-4">Komu i jakie zdjęcia robię?</h2>
                <p className="px-3 max-w-screen-lg mx-auto">
                    najczęściej fotografuję uśmiechniętych ludzi, podczas
                    najważniejszych chwil w życiu. specjalizuje się w reportażu
                    ślubnym, lecz inne dziedziny fotografii nie są mi obce. chęć
                    ciągłego poznawania i rozwoju pozwoliła uzbierać spory bagaż
                    doświadczenia i wyjątkowych zdjęć. moje fotografie staram
                    się by były naturalne i prawdziwe, a przez to ponadczasowe…
                </p>
                <div className="relative w-[80%] lg:mr-24 md:w-1/2 md:h-80 lg:h-96 md:ml-auto ml-12 h-48 mb-24 px-3 -space-x-10 lg:space-x-0 mt-12">
                    <Image
                        src={Slub}
                        alt="slub"
                        fill
                        className="object-cover"
                        quality={75}
                    />

                    <div className="absolute -bottom-12 md:bottom-1/2 md:translate-y-1/2 md:-left-1/3 md:-translate-x-1/2 left-0 bg-black/60 text-start px-8 py-6 backdrop-blur-sm lg:p-12 z-10 h-max w-full">
                        <p className="capitalize text-white text-2xl lg:text-5xl mb-2">
                            reportaż ślubny
                        </p>
                        <Link
                            href="/"
                            className="text-white text-sm py-1 px-4 border border-white"
                        >
                            Zobacz
                        </Link>
                    </div>
                </div>

                <section className="relative w-full h-full grid grid-cols-1 lg:grid-cols-3">
                    <SesjaComponent img={Slub} title="Ślub" href="/" />
                    <SesjaComponent img={Slub} title="Sesja" href="/" />
                    <SesjaComponent img={Slub} title="Fotografia" href="/" />
                    <Link
                        href="/"
                        className="lg:absolute w-max mx-auto hover:bg-black hover:text-white transition-colors -right-[14%] top-12 px-12 py-8 border-black border-2 font-semibold "
                    >
                        <p className="uppercase text-center">
                            {["i", "wiele", "więcej"].map((word, index) => (
                                <span key={index} className="block">
                                    {word}
                                </span>
                            ))}
                        </p>
                    </Link>
                </section>

                <section>
                    <h3 className="py-12 px-4 text-xl">Klienci o zdjęciach</h3>
                </section>

                <div className="space-y-4 p-12">
                    <h3 className="text-2xl">
                        Porozmawiajmy o Twoim pomyśle na zdjęcia{" "}
                    </h3>
                    <CTASendMail title="Napisz Do Mnie" />
                </div>
            </div>
        </div>
    );
}

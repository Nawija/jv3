import "slick-carousel/slick/slick.css";

import Carousel from "@/components/Carousel";
import Image from "next/image";
import Jarek from "@/public/Images/fotograf-siedlce-jarek-olszewski.jpg";
import Slub from "@/public/Images/slub.jpg";
import Link from "next/link";
import CTA from "@/components/CTA";

export default function Home() {
    return (
        <div className="anim-opacity">
            <Carousel />
            <div className="p-2 text-center relative w-full overflow-x-hidden max-w-screen-xl mx-auto">
                <h1 className="text-2xl py-4">Cześć! Miło mi że tu jesteś</h1>
                <div className="relative text-start flex flex-col lg:flex-row items-center justify-center mt-8">
                    <Image
                        src={Jarek}
                        height={300}
                        alt="fotograf siedlce jarek-olszewski"
                    />
                    <h2 className="w-[340px] lg:w-[400px] bg-black/80 lg:-ml-20 lg:mt-0 -mt-12 px-12 py-6 text-white text-xs tracking-tight backdrop-blur-md">
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
                <div className="grid grid-cols-1 py-12 lg:grid-cols-4 max-w-screen-md mx-auto h-full w-full">
                    <Image
                        src={Slub}
                        height={500}
                        width={600}
                        alt="slub"
                        className="object-cover lg:order-1 col-span-3"
                    />
                    <div className="bg-black/80 text-start p-12 lg:p-12 -mt-12 mx-12 lg:mt-12 lg:-ml-12 lg:order-2 z-10 h-max w-max">
                        <p className="capitalize text-white text-5xl mb-8">
                            reportaż slubny
                        </p>
                        <Link
                            href="/"
                            className="text-white py-4 px-8 border border-white"
                        >
                            Zobacz
                        </Link>
                    </div>
                </div>
                <div className="space-y-4 p-12">
                    <h3 className="text-2xl">
                        Porozmawiajmy o Twoim pomyśle na zdjęcia{" "}
                    </h3>
                    <CTA />
                </div>
            </div>
        </div>
    );
}

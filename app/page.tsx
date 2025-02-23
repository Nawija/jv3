import "slick-carousel/slick/slick.css";

import Carousel from "@/components/Carousel";
import Image from "next/image";
import Jarek from "@/public/Images/fotograf-siedlce-jarek-olszewski.jpg";

export default function Home() {
    return (
        <div>
            <Carousel />
            <div className="p-2 text-center relative w-full overflow-x-hidden">
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
            </div>
        </div>
    );
}

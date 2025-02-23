import "slick-carousel/slick/slick.css";

import Carousel from "@/components/Carousel";
import Image from "next/image";
import Jarek from "@/public/Images/fotograf-siedlce-jarek-olszewski.jpg";

export default function Home() {
    return (
        <div>
            <Carousel />
            <div className="p-2 text-center relative">
                <h1 className="text-2xl">Cześć! Miło mi że tu jesteś</h1>
                <div className="relative text-start flex flex-col lg:flex-row items-center justify-center mt-8">
                    <Image
                        src={Jarek}
                        height={300}
                        alt="fotograf siedlce jarek-olszewski"
                    />
                    <h2 className="w-[400px] bg-black/70 lg:-ml-12 px-12 py-6 text-white text-sm tracking-tight backdrop-blur-md">
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
            </div>
        </div>
    );
}

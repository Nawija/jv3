import "slick-carousel/slick/slick.css";

import Carousel from "@/components/Carousel";
import Image from "next/image";
import Jarek from "@/public/Images/fotograf-siedlce-jarek-olszewski.jpg";
import Slub from "@/public/Images/slub.jpg";
import Link from "next/link";
import SesjaComponent from "@/components/SesjaComponent";
import CTASendMail from "@/components/CTASendMail";
import { OFERTAIMAGES, OPINIONS } from "@/constants/Links";
import LinkShare from "@/components/ui/LinkShare";
import { FaStar } from "react-icons/fa";

export default function Home() {
    return (
        <div className="anim-opacity">
            <Carousel />
            <div className="p-2 text-center relative  max-w-screen-xl mx-auto">
                <span className="text-2xl py-4">
                    Cześć! Miło mi że tu jesteś
                </span>
                <div className="relative text-start flex flex-col lg:flex-row items-center justify-center mt-8">
                    <Image
                        src={Jarek}
                        height={300}
                        alt="fotograf siedlce jarek-olszewski"
                    />
                    <div className="w-[330px] lg:w-[400px] bg-black/60 lg:-ml-20 lg:mt-0 -mt-12 px-12 py-6 text-white text-xs tracking-tight backdrop-blur-sm">
                        <h1 className="text-2xl font-semibold mb-2">
                            Fotograf Siedlce – Jarek Olszewski | Fotografia
                            Ślubna
                        </h1>
                        <p>
                            Uśmiech na mojej twarzy to Wasza zasługa. Jestem
                            szczęśliwym człowiekiem, który zamienił swoją pasje
                            w sposób na życie. Obserwowanie i fotografowanie
                            całej masy emocji, to jest to co najbardziej
                            uwielbiam w swojej pracy. Fakt stworzenia unikalnych
                            zdjęć które będą towarzyszyć Wam przez całe życie to
                            coś pięknego. …czytaj więcej
                        </p>
                    </div>
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
                    {OFERTAIMAGES.map((img, index) => (
                        <SesjaComponent
                            key={index}
                            img={img.src}
                            title={img.title}
                            href={img.title}
                        />
                    ))}

                    <Link
                        href="/oferta"
                        className="lg:absolute w-max mx-auto hover:bg-black hover:text-white transition-color-colors -right-[14%] top-12 px-12 py-8 border-black border-2 font-semibold "
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
            </div>
            <div className="bg-neutral-100 my-12 py-12 px-4">
                <section className="max-w-3xl mx-auto space-y-12">
                    <div className="border-b border-neutral-300 pb-8">
                        <h2 className="text-3xl font-semibold text-neutral-800 mb-4">
                            Cześć! Nazywam się Jarek Olszewski
                        </h2>
                        <p className="text-neutral-700 leading-relaxed">
                            Jestem <strong>fotografem ślubnym z Siedlec</strong>{" "}
                            i z radością uwieczniam najważniejsze momenty
                            Waszego życia. Fotografia to moja pasja, którą
                            zamieniłem w zawód. Jako <strong>fotograf</strong>{" "}
                            cenię sobie emocje, autentyczność i ponadczasowość.
                            W moim <strong>portfolio</strong> znajdziesz pełne
                            emocji <strong>reportaże ślubne</strong>,
                            <strong> sesje narzeczeńskie</strong>,{" "}
                            <strong>sesje plenerowe</strong>, a także zdjęcia z{" "}
                            <strong>chrzcin</strong> czy{" "}
                            <strong>komunii</strong>.
                        </p>
                    </div>

                    <div className="border-b border-neutral-300 pb-8">
                        <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
                            Dlaczego warto wybrać mnie jako fotografa?
                        </h2>
                        <p className="text-neutral-700 leading-relaxed">
                            Szukasz kogoś, kto w sposób dyskretny i
                            profesjonalny <strong>uwieczni</strong> Twój{" "}
                            <strong>dzień ślubu</strong>? Jako{" "}
                            <strong>fotograf ślubny z Siedlec</strong> oferuję{" "}
                            <strong>pakiety fotograficzne</strong> dopasowane do
                            Waszych potrzeb. Oferuję również{" "}
                            <strong>fotografię noworodkową</strong>,{" "}
                            <strong>sesje rodzinne</strong> i{" "}
                            <strong>plenerowe</strong>. Klienci cenią mnie za{" "}
                            <strong>profesjonalizm</strong>, podejście do pracy
                            i naturalny styl. Wielu mówi, że jestem
                            <strong> najlepszym fotografem z Siedlec</strong> –
                            to dla mnie ogromne wyróżnienie.
                        </p>
                    </div>

                    <div className="border-b border-neutral-300 pb-8">
                        <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
                            Fotografia Ślubna – moje podejście
                        </h2>
                        <p className="text-neutral-700 leading-relaxed">
                            Moja <strong>fotografia ślubna</strong> to coś
                            więcej niż tylko zdjęcia. To historia Waszej
                            miłości, którą chcę opowiedzieć kadrami. Każdy{" "}
                            <strong>reportaż ślubny</strong> tworzę
                            indywidualnie, z dbałością o każdy szczegół – od
                            przygotowań, przez ceremonię, aż po zabawę weselną.
                            <strong> Sesja narzeczeńska</strong>,{" "}
                            <strong>plener ślubny</strong>, czy{" "}
                            <strong>zdjęcia z chrzcin</strong> – każdy moment
                            zasługuje na piękne ujęcia.
                        </p>
                    </div>

                    <div className="border-b border-neutral-300 pb-8">
                        <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
                            Najlepsi fotografowie z Siedlec? Sprawdź moje
                            portfolio
                        </h2>
                        <p className="text-neutral-700 leading-relaxed">
                            Jeśli szukasz <strong>polecanego fotografa</strong>,
                            który ma bogate <strong>portfolio</strong>,
                            zapraszam Cię do sekcji{" "}
                            <LinkShare href="/portfolio" title="Portfolio" />.
                            Znajdziesz tam przykłady moich prac z różnych{" "}
                            <strong>sesji plenerowych</strong>, ślubów i
                            wydarzeń rodzinnych. To właśnie zdjęcia najlepiej
                            pokazują, co mogę dla Ciebie stworzyć.
                        </p>
                    </div>

                    <div className="border-b border-neutral-300 pb-8">
                        <h2 className="text-2xl font-semibold text-neutral-800 mb-3">
                            Oferta fotograficzna
                        </h2>
                        <p className="text-neutral-700 leading-relaxed">
                            W mojej{" "}
                            <LinkShare
                                href="/oferta"
                                title="ofercie fotograficznej"
                            />
                            znajdziesz różnorodne <strong>pakiety</strong> – od
                            krótkich sesji, po pełny{" "}
                            <strong>reportaż ślubny</strong>. Oferuję też{" "}
                            <strong>fotografię reklamową</strong>,{" "}
                            <strong>portrety</strong> oraz sesje
                            okolicznościowe. Każdy <strong>pakiet</strong>{" "}
                            zawiera szczegółowy opis, czas trwania, ilość zdjęć
                            i orientacyjny <strong>cennik</strong>.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                            Zapraszam do kontaktu
                        </h3>
                        <p className="text-neutral-700 leading-relaxed">
                            Jako <strong>fotograf z Siedlec</strong>, jestem
                            dostępny w całym regionie, ale dojadę również dalej
                            – bo pasja do
                            <strong> fotografii</strong> nie zna granic. Jeśli
                            chcesz omówić pomysł na swoją <strong>sesję</strong>{" "}
                            lub <strong>dopytać o wolne terminy</strong> –{" "}
                            <LinkShare
                                href="/kontakt"
                                title="zapraszam do kontaktu"
                            />
                            .
                        </p>
                    </div>
                </section>
            </div>

            <div className="space-y-4 p-12 flex items-center justify-center flex-col">
                <h3 className="text-2xl">
                    Porozmawiajmy o Twoim pomyśle na zdjęcia{" "}
                </h3>
                <CTASendMail title="Napisz Do Mnie" />
            </div>

            <section className="bg-white py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h4 className="text-3xl font-semibold text-neutral-900 mb-12 tracking-tight">
                        Opinie klientów
                    </h4>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {OPINIONS.map((opinia, i) => {
                            const fullStars = Math.floor(opinia.rating);
                            const hasHalf = opinia.rating % 1 !== 0;

                            return (
                                <div
                                    key={i}
                                    className="bg-neutral-100 border border-neutral-300 p-6 h-full shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <p className="text-neutral-700 mb-4 leading-relaxed">
                                        “{opinia.text}”
                                    </p>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, idx) => (
                                                <FaStar
                                                    key={idx}
                                                    className={`w-5 h-5 ${
                                                        idx < fullStars
                                                            ? "text-yellow-400"
                                                            : idx <
                                                              opinia.rating
                                                            ? "text-yellow-400 opacity-70"
                                                            : "text-gray-300"
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-sm font-medium text-neutral-700">
                                            {opinia.rating.toFixed(1)} / 5
                                        </span>
                                    </div>
                                    <span className="block text-sm font-semibold text-neutral-700">
                                        – {opinia.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-12">
                        <Link
                            href="/portfolio"
                            className="inline-block border-2 border-black px-8 py-3 uppercase tracking-wide hover:bg-black hover:text-white transition-colors"
                        >
                            Zobacz efekty mojej pracy
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

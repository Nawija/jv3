import Carousel from "@/components/Carousel";
import Image from "next/image";
import Jarek from "@/public/Images/fotograf-siedlce-jarek-olszewski.jpg";
import Slub from "@/public/Images/slub.jpg";
import Link from "next/link";
import SesjaComponent from "@/components/SesjaComponent";
import CTASendMail from "@/components/CTASendMail";
import { OFERTAIMAGES } from "@/constants/Links";
import LinkShare from "@/components/ui/LinkShare";
import { MainBtn } from "@/components/Buttons/MainBtn";
import { FaqAccordion } from "@/components/FaqAccordion";
import FadeInOnScroll from "@/components/FadeInOnScroll";
import Opinions from "@/components/Opinions";

// ---------- Sekcje tekstowe jako dane ----------
const TEXT_SECTIONS = [
    {
        title: "Cześć! Nazywam się Jarek Olszewski",
        content: (
            <>
                Jestem <strong>fotografem ślubnym z Siedlec</strong>, a moją
                największą pasją jest opowiadanie historii za pomocą zdjęć.
                Uwieczniam emocje, wzruszenia i najpiękniejsze chwile w Waszym
                życiu. W moim <strong>portfolio</strong> znajdziesz{" "}
                <strong>reportaże ślubne</strong>,{" "}
                <strong>sesje narzeczeńskie</strong>,{" "}
                <strong>zdjęcia z chrztu</strong>, <strong>komunii</strong>, a
                także <strong>plenerowe sesje rodzinne</strong>.
            </>
        ),
    },
    {
        title: "Dlaczego warto mi zaufać jako fotografowi?",
        content: (
            <>
                Szukasz kogoś, kto <strong>z dyskrecją i wyczuciem</strong>{" "}
                uchwyci ulotne momenty Twojego <strong>ślubu</strong>? Jako{" "}
                <strong>fotograf ślubny z Siedlec</strong> tworzę zdjęcia z
                sercem i pasją, oferując <strong>pakiety dopasowane</strong> do
                różnych potrzeb. Realizuję też{" "}
                <strong>sesje noworodkowe</strong>, <strong>rodzinne</strong>{" "}
                oraz <strong>plenerowe</strong>. Klienci doceniają mnie za{" "}
                <strong>naturalny styl</strong>, <strong>profesjonalizm</strong>{" "}
                i zaangażowanie – często słyszę, że jestem{" "}
                <strong>najlepszym fotografem w Siedlcach</strong>. To ogromna
                motywacja!
            </>
        ),
    },
    {
        title: "Fotografia ślubna – moja filozofia",
        content: (
            <>
                Dla mnie <strong>fotografia ślubna</strong> to nie tylko zdjęcia
                – to sposób opowiedzenia Waszej historii. Każdy{" "}
                <strong>reportaż</strong> tworzę indywidualnie – z uwagą,
                empatią i wyczuciem detali. Od porannych przygotowań, przez
                wzruszającą ceremonię, aż po szaloną zabawę – jestem tam, by
                złapać wszystko, co najpiękniejsze. Realizuję także{" "}
                <strong>sesje narzeczeńskie</strong>,{" "}
                <strong>plenery ślubne</strong> i{" "}
                <strong>reportaże rodzinne</strong>.
            </>
        ),
    },
    {
        title: "Portfolio – zobacz moje zdjęcia",
        content: (
            <>
                Chcesz zobaczyć, jak pracuję? Odwiedź moje{" "}
                <LinkShare href="/portfolio" title="portfolio" /> i przekonaj
                się, jak wyglądają moje realizacje. Znajdziesz tam fotografie z{" "}
                <strong>plenerów</strong>, <strong>ślubów</strong> i rodzinnych
                uroczystości. To najlepszy sposób, by poznać mój styl i
                podejście do fotografii.
            </>
        ),
    },
    {
        title: "Oferta fotograficzna dopasowana do Ciebie",
        content: (
            <>
                Sprawdź moją{" "}
                <LinkShare href="/oferta" title="ofertę fotograficzną" /> –
                znajdziesz tam różnorodne <strong>pakiety</strong>: od krótkich
                sesji po pełne <strong>reportaże ślubne</strong>. Oferuję
                również <strong>portrety</strong>,{" "}
                <strong>zdjęcia reklamowe</strong> oraz{" "}
                <strong>sesje okolicznościowe</strong>. Każdy{" "}
                <strong>pakiet</strong> zawiera szczegóły dotyczące liczby
                zdjęć, czasu realizacji i orientacyjnego{" "}
                <strong>cennika</strong>.
            </>
        ),
    },
];

export default function Home() {
    return (
        <div className="anim-opacity">
            <Carousel />
            <div className="p-2 text-center relative  max-w-screen-xl mx-auto">
                <span className="text-2xl py-4 animate-fade-in">
                    Cześć! Miło mi że tu jesteś
                </span>

                <FadeInOnScroll delay={0.3}>
                    <div className="relative text-start flex flex-col lg:flex-row items-center justify-center mt-8">
                        <Image
                            src={Jarek}
                            alt="fotograf siedlce jarek-olszewski"
                            width={370}
                            height={300}
                            priority
                            placeholder="blur"
                        />
                        <div className="w-[330px] lg:w-[400px] bg-black/60 lg:-ml-20 lg:mt-0 -mt-12 px-12 py-6 text-white text-xs tracking-tight backdrop-blur-sm">
                            <h1 className="text-2xl font-semibold mb-2">
                                Fotograf Siedlce – Jarek Olszewski | Fotografia
                                Ślubna
                            </h1>
                            <p>
                                Uśmiech na mojej twarzy to Wasza zasługa. Jestem
                                szczęśliwym człowiekiem, który zamienił swoją
                                pasje w sposób na życie. Obserwowanie i
                                fotografowanie całej masy emocji, to jest to co
                                najbardziej uwielbiam w swojej pracy. Fakt
                                stworzenia unikalnych zdjęć które będą
                                towarzyszyć Wam przez całe życie to coś
                                pięknego. …czytaj więcej
                            </p>
                        </div>
                    </div>
                </FadeInOnScroll>

                <div className="my-10">
                    <FadeInOnScroll delay={0.1}>
                        <h2 className="text-xl py-4">
                            Komu i jakie zdjęcia robię?
                        </h2>
                    </FadeInOnScroll>
                    <FadeInOnScroll delay={0.3}>
                        <p className="px-3 max-w-screen-lg mx-auto">
                            najczęściej fotografuję uśmiechniętych ludzi,
                            podczas najważniejszych chwil w życiu. specjalizuje
                            się w reportażu ślubnym, lecz inne dziedziny
                            fotografii nie są mi obce. chęć ciągłego poznawania
                            i rozwoju pozwoliła uzbierać spory bagaż
                            doświadczenia i wyjątkowych zdjęć. moje fotografie
                            staram się by były naturalne i prawdziwe, a przez to
                            ponadczasowe…
                        </p>
                    </FadeInOnScroll>
                </div>

                <section className="relative w-full h-full grid grid-cols-1 lg:grid-cols-4 my-8">
                    <div className="relative w-[80%] max-w-[600px] lg:mr-24 md:w-1/2 md:h-80 lg:h-96 lg:col-span-4 md:ml-auto ml-12 h-48 mb-24 px-3 -space-x-10 lg:space-x-0 mt-12">
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
                                href="/fotografia-slubna"
                                className="text-white text-sm py-1 px-4 border border-white"
                            >
                                Zobacz
                            </Link>
                        </div>
                    </div>
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
                        className="w-max mx-auto h-max hover:bg-black hover:text-white transition-color-colors -right-[14%] top-12 px-12 py-8 border-black border-2 font-semibold "
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

            <div className="space-y-4 p-24 bg-gray-100 flex items-center justify-center flex-col">
                <FadeInOnScroll delay={0.1}>
                    <h3 className="text-2xl text-center">
                        Porozmawiajmy o Twoim pomyśle na zdjęcia{" "}
                    </h3>
                </FadeInOnScroll>
                <FadeInOnScroll delay={0.3}>
                    <CTASendMail title="Napisz Do Mnie" />
                </FadeInOnScroll>
            </div>

            <section className="bg-white py-20 px-4">
                <div className="max-w-5xl mx-auto text-center">
                    <h4 className="text-3xl font-semibold text-neutral-900 mb-12 tracking-tight">
                        Opinie klientów
                    </h4>

                    <Opinions />

                    <div className="mt-12">
                        <MainBtn>
                            <Link href="/portfolio">
                                Zobacz efekty mojej pracy
                            </Link>
                        </MainBtn>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100 text-black py-16 px-6">
                <h3 className="text-3xl text-center font-bold mb-10">
                    Jak wygląda współpraca?
                </h3>
                <div className="grid md:grid-cols-4 gap-8 text-center max-w-6xl mx-auto">
                    {[
                        ["1", "Kontakt i rozmowa"],
                        ["2", "Rezerwacja terminu"],
                        ["3", "Zdjęcia w dniu sesji"],
                        ["4", "Obróbka i przekazanie galerii"],
                    ].map(([step, label]) => (
                        <div key={step}>
                            <div className="text-5xl font-bold mb-4 text-brand-nav">
                                {step}
                            </div>
                            <p>{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <FaqAccordion />
            <section className="bg-white py-12">
                <h2 className="text-center text-2xl font-semibold mb-4">
                    Zobacz więcej na Instagramie
                </h2>
                <p className="text-center text-sm mb-6">
                    Świeże zdjęcia, kulisy sesji i więcej
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <div
                            key={i}
                            className="bg-gray-100 aspect-square animate-pulse"
                        />
                    ))}
                </div>
            </section>

            <div className="bg-gray-100 py-12 mt-12 px-4">
                <section className="max-w-3xl mx-auto space-y-12">
                    {TEXT_SECTIONS.map(({ title, content }, index) => (
                        <div key={index} className="border-b border-white pb-8">
                            <h2 className="text-2xl lg:text-3xl font-semibold text-black mb-3">
                                {title}
                            </h2>
                            <p className="text-neutral-700 leading-relaxed">
                                {content}
                            </p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

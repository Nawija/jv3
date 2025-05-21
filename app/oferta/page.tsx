import Link from "next/link";
import Gallery from "./_components/Gallery";
import path from "path";
import fs from "fs";
import CTASendMail from "@/components/CTASendMail";
import { FaCheckCircle } from "react-icons/fa";
import { Metadata } from "next";

const benefits = [
    [
        "Indywidualne podejście",
        "każda sesja i oferta jest szyta na miarę Twoich oczekiwań.",
    ],
    [
        "Fotografuję osobiście",
        "z użyciem profesjonalnego sprzętu i pasją do detali.",
    ],
    ["Naturalna obróbka zdjęć", "podkreślam kolory i emocje, bez sztuczności."],
    [
        "Zdjęcia w wersji cyfrowej",
        "pliki w wysokiej rozdzielczości, na USB lub online.",
    ],
    [
        "Foto produkty premium",
        "fotoalbumy, odbitki, fotoksiążki, obrazy na płótnie.",
    ],
    ["Spersonalizowane opakowania", "stylowe pudełka na zdjęcia i nośniki."],
    [
        "Prywatna galeria online",
        "łatwe i bezpieczne udostępnianie zdjęć bliskim.",
    ],
    ["Szybka realizacja", "sprawna i terminowa dostawa gotowych materiałów."],
];

const pageTitle =
    "Cennik fotograf oferta sesji zdjęciowych śluby, portrety, reportaże"
const pageDescription =
    "Sprawdź aktualny cennik fotografa - oferta sesji ślubnych, portretowych, rodzinnych i reportaży. Przejrzyste pakiety, indywidualne podejście, bez ukrytych kosztów";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        images: [
            {
                url: "Images/sesja.jpg",
                width: 400,
                height: 260,
                alt: "Cennik fotograf oferta sesji zdjęciowych - Jarek Olszewski",
            },
        ],
    },
};

export default async function OffertsPage() {
    const dirPath = path.join(process.cwd(), "public/Images/PodglądoweZdjecia");
    const files = fs.readdirSync(dirPath);

    const allImages = files
        .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
        .map((file) => ({
            responsiveImage: {
                src: `/Images/PodglądoweZdjecia/${file}`,
                width: 1000,
                height: 667,
            },
        }));

    return (
        <div className="h-full">
            <div className="bg-gray-100 py-8 px-6 sm:px-6 lg:px-8">
                <section className="max-w-7xl mx-auto space-y-12 anim-opacity text-stone-800">
                    <h1 className="text-4xl text-center leading-tight">
                        Profesjonalny Fotograf Siedlce
                    </h1>
                    <p className="text-lg text-center max-w-2xl mx-auto">
                        Szukasz fotografa w Siedlcach, który uwieczni Twoje
                        chwile w sposób naturalny i ponadczasowy? Oferuję
                        kompleksową obsługę fotograficzną dostosowaną do Twoich
                        potrzeb - z pasją, precyzją i doświadczeniem.
                    </p>

                    <div className="space-y-8">
                        <h2 className="text-2xl font-light text-center">
                            Dlaczego warto wybrać mnie?
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                            {benefits.map(([title, desc], i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm"
                                >
                                    <FaCheckCircle className="text-brand-nav mt-1 text-xl flex-shrink-0" />
                                    <div>
                                        <h3 className="font-semibold">
                                            {title}
                                        </h3>
                                        <p className="text-sm text-stone-600">
                                            {desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="text-center space-y-2 mb-8">
                            <h3 className="text-2xl font-light">
                                Pakiety fotografii:
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {[
                                    { href: "/", label: "Oferta ślubna" },
                                    { href: "/", label: "Oferta chrztu" },
                                ].map(({ href, label }, i) => (
                                    <Link
                                        key={i}
                                        href={href}
                                        className="px-4 py-2 bg-brand font-semibold text-white text-sm hover:bg-brand-nav transition"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="text-center pt-4">
                            <p className="text-lg max-w-2xl mx-auto">
                                Jako <strong>Fotograf</strong> pomagam
                                uwieczniać najważniejsze chwile życia w formie
                                fotografii, która ma wartość nie tylko dziś, ale
                                i po latach. Zajrzyj do galerii i przekonaj się
                                sam!
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="max-w-screen-lg mx-auto">
                <Gallery allImages={allImages} />
            </div>

            <div className="text-center my-12">
                <CTASendMail title="Zapytaj o Ofertę" />
            </div>
        </div>
    );
}

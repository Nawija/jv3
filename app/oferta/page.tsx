import Gallery from "./_components/Gallery";
import CTASendMail from "@/components/CTASendMail";
import { FaCheckCircle } from "react-icons/fa";
import { Metadata } from "next";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";
import ParagraphWithBullets from "@/components/ParagraphWithBullets";
import OfertaSection from "@/components/OfertaSection";
import TitleH1 from "@/components/TitleH1";

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
    "Cennik fotograf oferta sesji zdjęciowych śluby, portrety, reportaże";
const pageDescription =
    "Sprawdź aktualny cennik fotografa - oferta sesji ślubnych, portretowych, rodzinnych i reportaży. Przejrzyste pakiety, indywidualne podejście, bez ukrytych kosztów";
const heroImage = "/Images/home/fotograf-siedlce-jarek-olszewski.webp";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        images: [
            {
                url: heroImage,
                width: 600,
                height: 600,
                alt: pageTitle,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: [heroImage],
    },
};

export default async function OffertsPage() {
    const allImages = getImagesFromFolder("PodglądoweZdjecia", 6);

    return (
        <div className="h-full">
            <div className="bg-gray-100 py-8 px-6 sm:px-6 lg:px-8">
                <section className="max-w-7xl mx-auto space-y-12 anim-opacity text-stone-800">
                    <TitleH1
                        title="Profesjonalny Fotograf"
                        desc="Szukasz fotografa, który uwieczni Twoje
                        chwile w sposób naturalny i ponadczasowy? Oferuję
                        kompleksową obsługę fotograficzną dostosowaną do Twoich
                        potrzeb - z pasją, precyzją i doświadczeniem."
                    />

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
            <OfertaSection />

            <div className="max-w-screen-lg mt-5 mx-auto">
                <Gallery allImages={allImages} />
            </div>

            <div className="max-w-2xl mx-auto mt-8 text-center">
                <ParagraphWithBullets
                    title="Co oferuję"
                    paragraph="Fotografuję od początku przygotowań ślubnych do ostatnich uroczystości weselnych."
                    bullets={[
                        "Fotografuje od początku przygotowań ślubnych do ostatnich uroczystości weselnych",
                        "Minimum 700 fotografii z reportażu (zdjęcia poddane autorskiej obróbce - naturalne i prawdziwe fotografie",
                        "Sesję ślubną w dniu ślubu, krótka sesja w okolicach przyjęcia weselnego (by nie tracić cennego czasu)",
                        "Sesje ślubną innego dnia, w wybranym przez Was miejscu",
                        "Sesję narzeczeńska",
                        "Foto-albumy, wydruki cyfrowe, fotoobrazy, zdjęcia na płótnie. portrety w ramkach (można dać odnośnik do oferty gdzie są zdjęcia fotoproduktów)",
                        "Wydruki w dniu ślubu (pocztówki, portrety dla rodziców) ",
                        "Nośnik danych (pendrive)",
                        "Zapis na chmurze - link do pobrania, bez ograniczeń i na dowolne urządzenie",
                        "Galerię internetową chronioną hasłem",
                        "Szybki termin realizacji - zdjęcia już w 21 dni do waszej dyspozycji",
                    ]}
                />
            </div>

            <div className="text-center my-12">
                <CTASendMail title="Zapytaj o Ofertę" />
            </div>
        </div>
    );
}

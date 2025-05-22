import { MainBtn } from "@/components/Buttons/MainBtn";
import InstagramGrid from "@/components/instagram/InstagramGrid";
import Opinions from "@/components/Opinions";
import PhotoSwipe from "@/components/PhotoSwipe";
import LinkShare from "@/components/ui/LinkShare";
import { Metadata } from "next";
import Link from "next/link";

const pageTitle =
    "Jarek Olszewski - Fotograf ślubny Siedlce | Sesje, reportaże, emocje";
const pageDescription =
    "Profesjonalna fotografia ślubna i sesje zdjęciowe w Siedlcach. Jarek Olszewski - fotograf z pasją, który uchwyci najważniejsze chwile Twojego życia. Naturalne zdjęcia pełne emocji.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        images: [
            {
                url: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
                width: 400,
                height: 260,
                alt: "Fotografia ślubna - Jarek Olszewski",
            },
        ],
    },
};

export default function AboutMePage() {
    const images = [
        {
            src: `/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf037.jpeg`,
            width: 1000,
            height: 667,
        },
        {
            src: `/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf042.jpeg`,
            width: 1000,
            height: 667,
        },
        {
            src: `/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf042.jpeg`,
            width: 1000,
            height: 667,
        },
        {
            src: `/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf042.jpeg`,
            width: 1000,
            height: 667,
        },
        {
            src: `/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf042.jpeg`,
            width: 1000,
            height: 667,
        },
        {
            src: `/Images/Blog/sesja.jpg`,
            width: 1000,
            height: 667,
        },
    ];

    return (
        <>
            <div className="bg-white text-gray-800">
                {/* Sekcja O mnie */}
                <section className="max-w-4xl mx-auto px-4 py-16 space-y-12 bg-white">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4">
                            Kim jestem - fotograf i człowiek z pasją
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                            Poznaj moją historię i sposób, w jaki patrzę na
                            świat przez obiektyw aparatu.
                        </p>
                    </div>

                    <div className="space-y-8 text-base md:text-lg leading-relaxed text-gray-700">
                        <p className="border-l-4 border-brand pl-4">
                            Cześć! Nazywam się Jarek Olszewski i jestem
                            fotografem z Siedlec. Pełen energii, uśmiechu i
                            pasji do chwytania wyjątkowych chwil.
                        </p>

                        <p>
                            Moja przygoda z fotografią zaczęła się w 2008 roku,
                            zupełnie przypadkiem. Wtedy jeszcze nie wiedziałem,
                            że jedno zdjęcie z lokalnego meczu zmieni moje życie
                            na zawsze.
                        </p>

                        <p>
                            Specjalizuję się w fotografii ślubnej, rodzinnej i
                            reportażowej. Uchwycenie emocji i autentyczności to
                            dla mnie największy priorytet. Pracuję dyskretnie,
                            pozwalając ludziom być sobą.
                        </p>

                        <p>
                            Choć pracuję głównie w woj. mazowieckim, dojadę
                            wszędzie tam, gdzie jest historia do opowiedzenia.
                            Każde zlecenie to dla mnie nowe wyzwanie i
                            inspiracja.
                        </p>
                    </div>
                </section>

                {/* Galeria */}
                <section className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold text-center mb-8 text-black">
                        Zobacz moje kadry
                    </h3>
                    <PhotoSwipe images={images} columns={3} className="p-4" />
                </section>
                <InstagramGrid />

                <section className="bg-white px-4 py-12">
                    <div className="mx-auto max-w-5xl text-center">
                        <p className="mb-12 font-semibold text-neutral-900 text-2xl tracking-tight">
                            Opinie klientów
                        </p>
                        <Opinions />
                        <div className="flex justify-center items-center">
                            <p className="mr-2">Opinie z </p>
                            <LinkShare
                                title="Google"
                                target="_blank"
                                href="https://www.google.com/search?sca_esv=36354fdb691823cb&rlz=1C5CHFA_enPL994PL994&sxsrf=AHTn8zocdBNdDop6JxFkDh7ZvwmBGz-yQA:1747759200679&q=jarekolszewski&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzSHL3h72FHJno5lAMGESINrEPckvvMSP28qIzP1NmX36Zu8MiyMs01d8X2DaqEuEVDJ_aYs%3D&uds=ABqPDvzh2Ji1Kqt-7EMvWRUQDfyq32fE0uGbr4uJQc4sQZqDb8FkSTC7VC6zBtw9Ms1apU7KPJzGzztDOCAB1tHAo1cvIm1_8fG54_w7B1HbpkvD_2-_u34&sa=X&ved=2ahUKEwjoxryyvrKNAxWlR_EDHTPOImYQ3PALegQIHhAE&biw=1680&bih=963&dpr=2"
                            />
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
}

import CTASendMail from "@/components/CTASendMail";
import InstagramGrid from "@/components/instagram/InstagramGrid";
import Opinions from "@/components/Opinions";
import PhotoSwipe from "@/components/PhotoSwipe";
import LinkShare from "@/components/ui/LinkShare";
import { OFERTALINKS } from "@/constants/Links";
import { Metadata } from "next";
import Link from "next/link";

const pageTitle =
    "Jarek Olszewski - Fotograf ślubny Warszawa | Siedlce | Łuków";
const pageDescription =
    "Profesjonalna fotografia ślubna i sesje zdjęciowe w warszawie, siedlach , łukowie i okolicach. Fotograf z pasją, który uchwyci najważniejsze chwile Twojego życia. Naturalne zdjęcia pełne emocji.";
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
                width: 400,
                height: 260,
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

export default function Portfolio() {
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
                <section className="max-w-4xl mx-auto px-4 py-10 space-y-12 bg-white">
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4">
                            Bogate portfolio, to moja ogromna ciekawość
                            fotografii.
                        </h1>
                    </div>

                    <div className="space-y-8 text-base md:text-lg leading-relaxed text-gray-700">
                        <p className="border-l-4 border-brand pl-4">
                            Na przestrzeni lat współpracowałem z wieloma osobami
                            w różnych zakątkach polski, realizując ich
                            fotograficzne potrzeby z różnych dziedzin
                            fotografii. Co fotografuje i jak to robię, można
                            sprawdzić poniżej zaglądając do konkretnego
                            portfolio. Największą jednak frajdę sprawia mi
                            prezentowanie zdjęć na papierze, gdzie zyskują na
                            swojej wartości i odkrywają prawdziwą siłę.
                        </p>

                        <div className="text-center space-y-2">
                            <h3 className="text-2xl font-light">
                                Pakiety fotografii:
                            </h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {OFERTALINKS.map(({ href, label }, i) => (
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

                        <p className="py-2">
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
                <div className="py-24 px-4 flex items-center justify-center flex-col space-y-4">
                    <p className="text-2xl font-medium">Napisz do mnie</p>
                    <CTASendMail title="Wyslij wiadomość" />
                </div>
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

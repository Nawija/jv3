import InstagramGrid from "@/components/instagram/InstagramGrid";
import Opinions from "@/components/Opinions";
import PhotoSwipe from "@/components/PhotoSwipe";
import TitleH1 from "@/components/TitleH1";
import LinkShare from "@/components/ui/LinkShare";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";
import { Metadata } from "next";

const pageTitle =
    "Jarek Olszewski - Fotograf ślubny Siedlce | Sesje, reportaże, emocje";
const pageDescription =
    "Profesjonalna fotografia ślubna i sesje zdjęciowe w Siedlcach. Jarek Olszewski - fotograf z pasją, który uchwyci najważniejsze chwile Twojego życia. Naturalne zdjęcia pełne emocji.";
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

export default function AboutMePage() {
    const imagesFromFolder = getImagesFromFolder(
        "/blogs/fotografia-slubna/top-fotografia-slubna",
        6
    );
    const formattedImages = imagesFromFolder.map((item) => ({
        src: item.responsiveImage.src.replace("//", "/"), // napraw podwójny slash
        width: item.responsiveImage.width,
        height: item.responsiveImage.height,
    }));
    return (
        <>
            <div className="bg-white text-gray-800">
                <div className="text-center bg-gray-100">
                    <div className="py-12 px-6 sm:px-12">
                        <TitleH1
                            title="Kim jestem - fotograf i człowiek z pasją"
                            desc="Poznaj moją historię i sposób, w jaki patrzę na świat przez obiektyw aparatu."
                        />
                    </div>
                </div>
                <section className="max-w-4xl mx-auto px-4 py-10 space-y-12 bg-white">
                    <div className="space-y-8 text-base md:text-lg leading-relaxed text-gray-700">
                        <p className="border-l-4 border-brand pl-4">
                            Cześć! Nazywam się Jarek Olszewski i jestem
                            fotografem. Pełen energii, uśmiechu i pasji do
                            chwytania wyjątkowych chwil.
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
                    <PhotoSwipe
                        images={formattedImages}
                        columns={3}
                        className="p-4"
                    />
                </section>

                <section className="bg-white px-4 py-12">
                    <div className="mx-auto max-w-4xl text-center">
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

                <InstagramGrid />
            </div>
        </>
    );
}

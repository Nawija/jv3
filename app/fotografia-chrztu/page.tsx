import TitleH2 from "@/components/TitleH2";
import HeroSection from "../../components/HeroSection";
import ContactForm from "@/components/ContactForm";
import ParagraphWithBullets from "@/components/ParagraphWithBullets";
import { Metadata } from "next";
import Gallery from "../oferta/_components/Gallery";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";

const pageTitle =
    "Fotografia chrztu - naturalne i wzruszające zdjęcia z chrztu świętego | Fotograf";
const pageDescription =
    "Uchwyć magię Chrztu Świętego - profesjonalna fotografia chrztu pełna ciepła, emocji i duchowego znaczenia. Subtelne kadry w kościele i podczas rodzinnego spotkania.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        images: [
            {
                url: "Images/chrzest1.jpg",
                width: 400,
                height: 260,
                alt: "Fotografia chrztu - Jarek Olszewski",
            },
        ],
    },
};

export default async function FotografiaChrztu() {
    const allImages = getImagesFromFolder("fotografia-chrztu", 6);

    return (
        <>
            <HeroSection
                title="Fotografia Chrztu Świętego"
                backgroundImages={[
                    "/Images/fotografia-chrztu/fotografia-chrztu.jpeg",
                ]}
                paragraphs={[
                    "Chrzest Święty to wyjątkowe wydarzenie w życiu dziecka i całej rodziny. Moją rolą jako fotografa jest zatrzymać te duchowe i rodzinne chwile w pięknych, naturalnych kadrach - byście mogli wracać do nich przez lata.",
                ]}
            />
            <div className="text-center bg-white w-full">
                <div className="w-full py-10">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-10">
                            Profesjonalna fotografia chrztu - subtelność,
                            emocje, pamiątka na lata
                        </h1>

                        <TitleH2
                            title="Dlaczego warto uwiecznić Chrzest Święty?"
                            desc="To nie tylko ceremonia religijna - to pierwszy, duchowy krok Waszego dziecka. Profesjonalna fotografia chrztu pozwoli Wam zachować wszystkie wzruszające momenty - od przygotowań, przez uroczystość, aż po rodzinne spotkanie."
                        />

                        <TitleH2
                            title="Jak wygląda sesja z okazji chrztu?"
                            desc="Zawsze staram się być dyskretny, nie ingerując w przebieg uroczystości. Dzięki temu zdjęcia są naturalne i pełne emocji. Dokumentuję przygotowania w domu, ceremonię w kościele oraz przyjęcie - zgodnie z Waszymi życzeniami i planem dnia."
                        />

                        <div className="max-w-screen-lg mx-auto">
                            <Gallery allImages={allImages} />
                        </div>

                        <div className="max-w-2xl mx-auto my-12">
                            <ParagraphWithBullets
                                title="Fotografia Chrztu - co zawiera oferta?"
                                paragraph="Pakiet fotograficzny z okazji chrztu obejmuje wszystko, co potrzebne do stworzenia pięknej, rodzinnej pamiątki:"
                                bullets={[
                                    "Reportaż z ceremonii Chrztu Świętego w kościele",
                                    "Opcjonalnie: przygotowania w domu oraz przyjęcie rodzinne",
                                    "Indywidualne podejście - elastyczność względem harmonogramu",
                                    "Minimum 50 profesjonalnie obrobionych zdjęć",
                                    "Zdjęcia w formie cyfrowej w pełnej rozdzielczości",
                                    "Galeria online zabezpieczona hasłem",
                                    "Dostępne dodatki: odbitki, albumy, fotoksiążki",
                                    "Gotowe zdjęcia w 7 dni roboczych",
                                ]}
                            />
                        </div>

                        <div className="mt-12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

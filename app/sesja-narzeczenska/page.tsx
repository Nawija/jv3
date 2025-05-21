import TitleH2 from "@/components/TitleH2";
import HeroSection from "../../components/HeroSection";
import ContactForm from "@/components/ContactForm";
import ParagraphWithBullets from "@/components/ParagraphWithBullets";
import { Metadata } from "next";
import Gallery from "../oferta/_components/Gallery";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";

const pageTitle =
    "Sesja narzeczeńska - naturalne, pełne emocji zdjęcia | Fotograf";
const pageDescription =
    "Zatrzymaj Wasze emocje na zawsze - sesja narzeczeńska w wyjątkowym stylu. Profesjonalne zdjęcia w plenerze, pełne uczuć, światła i autentyczności.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        images: [
            {
                url: "Images/sesja2.jpg",
                width: 400,
                height: 260,
                alt: "Sesja Narzeczeńska - Jarek Olszewski",
            },
        ],
    },
};

export default async function SesjaNarzeczenska() {
    const allImages = getImagesFromFolder("sesja-narzeczenska", 6);

    return (
        <>
            <HeroSection
                title="Sesja Narzeczeńska"
                backgroundImages={["/Images/sesja2.jpg"]}
                paragraphs={[
                    "Dzień, który zapamiętacie na zawsze, ten wymarzony, najpiękniejszy, idealny Czemu chcę być z Wami? Żeby łapać te wszystkie piękne, ale jednocześnie ulotne chwile i zachowywać je na zdjęciach.",
                ]}
            />
            <div className="text-center bg-white w-full">
                <div className="w-full py-10">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-10">
                            Sesja narzeczeńska, która opowiada Waszą historię
                        </h1>

                        <TitleH2
                            title="Sesja narzeczeńska wasza historia opowiedziana obrazem"
                            desc="Wasza miłość zasługuje na coś więcej niż zwykłe zdjęcia. Sesja narzeczeńska to wyjątkowy moment, by zatrzymać na zawsze to, co dziś jest tylko spojrzeniem i uśmiechem. Wspólnie stworzymy kadry pełne emocji, które będą Wam towarzyszyć przez całe życie - od zaproszeń po albumy rodzinne."
                        />

                        <TitleH2
                            title="Dlaczego warto zdecydować się na sesję narzeczeńską?"
                            desc="Sesja narzeczeńska to nie tylko świetna pamiątka przed ślubem - to również idealna okazja, by oswoić się z aparatem i lepiej poznać fotografa, który będzie z Wami w dniu ślubu. Zdjęcia z tej sesji doskonale sprawdzą się na zaproszenia, prezentację na weselu czy dekoracje w domu."
                        />
                        <div className="max-w-screen-lg mx-auto">
                            <Gallery allImages={allImages} />
                        </div>

                        <div className="max-w-2xl mx-auto my-12">
                            <ParagraphWithBullets
                                title="Sesja narzeczeńska - co zawiera oferta?"
                                paragraph="Sesja narzeczeńska to nie tylko zdjęcia, to piękne wspomnienie czasu przed ślubem. Oto, co otrzymujecie:"
                                bullets={[
                                    "Indywidualne podejście - dopasowanie stylu i miejsca sesji do Waszej historii",
                                    "Pomoc w wyborze lokalizacji - natura, miasto, ulubione miejsce spotkań",
                                    "Do 2 godzin sesji zdjęciowej w plenerze lub innym wybranym miejscu",
                                    "Minimum 40 profesjonalnie obrobionych zdjęć w pełnej rozdzielczości",
                                    "Możliwość zamówienia odbitek, albumu lub portretów w ramkach",
                                    "Dostęp do prywatnej, hasłem zabezpieczonej galerii online",
                                    "Zdjęcia gotowe do 7 dni od sesji",
                                    "Możliwość wykorzystania zdjęć w zaproszeniach, prezentacjach i dekoracjach ślubnych",
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

import TitleH2 from "@/components/TitleH2";
import HeroSection from "../../components/HeroSection";
import ContactForm from "@/components/ContactForm";
import ParagraphWithBullets from "@/components/ParagraphWithBullets";
import { Metadata } from "next";
import Gallery from "../oferta/_components/Gallery";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";

const pageTitle =
    "Sesja ślubna - naturalne zdjęcia pełne emocji | Fotograf ślubny";
const pageDescription =
    "Profesjonalna sesja ślubna pełna autentycznych emocji i światła. Zdjęcia w plenerze, mieście lub miejscu dla Was ważnym - naturalne i ponadczasowe wspomnienia.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        images: [
            {
                url: "Images/wyjscie.jpg",
                width: 400,
                height: 260,
                alt: "Sesja ślubna - Jarek Olszewski",
            },
        ],
    },
};

export default async function SesjaSlubna() {
    const allImages = getImagesFromFolder("sesja-slubna", 6);

    return (
        <>
            <HeroSection
                title="Sesja Ślubna"
                backgroundImages={["/Images/wyjscie.jpg"]}
                paragraphs={[
                    "Wasz ślub to wyjątkowy dzień - pełen emocji, wzruszeń i miłości. Moim celem jest zatrzymać te chwile na zawsze, tworząc zdjęcia, które poruszą serca i będą pamiątką na całe życie.",
                ]}
            />
            <div className="text-center bg-white w-full">
                <div className="w-full py-10">
                    <div className="max-w-4xl mx-auto px-4">
                        <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-10">
                            Sesja ślubna - zdjęcia pełne emocji i światła
                        </h1>

                        <TitleH2
                            title="Sesja ślubna - uchwyćcie Wasz dzień w najpiękniejszy sposób"
                            desc="Wasz ślub to niepowtarzalna historia. Sesja ślubna to szansa, by ją opowiedzieć obrazem - subtelnym, prawdziwym i pełnym emocji. Tworzę zdjęcia, które oddają klimat dnia, Wasze spojrzenia, gesty i bliskość."
                        />

                        <TitleH2
                            title="Dlaczego warto zdecydować się na profesjonalną sesję ślubną?"
                            desc="Sesja ślubna to więcej niż fotografia - to emocjonalna opowieść o Was. Wspólnie wybierzemy miejsce, styl i porę dnia, by zdjęcia idealnie oddały atmosferę tego wyjątkowego momentu. Dzięki profesjonalnej sesji otrzymacie nie tylko pamiątkę, ale także piękną historię do pokazania bliskim."
                        />
                        <div className="max-w-screen-lg mx-auto">
                            <Gallery allImages={allImages} />
                        </div>

                        <div className="max-w-2xl mx-auto my-12">
                            <ParagraphWithBullets
                                title="Sesja ślubna - co otrzymujecie w ramach usługi?"
                                paragraph="Każda sesja ślubna jest dopasowana do Was - do Waszego stylu, emocji i wspomnień. Oto, co wchodzi w skład mojej oferty:"
                                bullets={[
                                    "Indywidualne podejście do każdej Pary Młodej - wspólnie wybierzemy klimat i lokalizację",
                                    "Sesja ślubna w plenerze, miejskim klimacie lub innym ważnym dla Was miejscu",
                                    "Do 3 godzin fotografowania w dogodnym terminie (również po ślubie)",
                                    "Minimum 60 starannie obrobionych zdjęć w pełnej jakości",
                                    "Pomoc w pozowaniu i budowaniu naturalnych kadrów - zero sztywności",
                                    "Prywatna galeria online z dostępem dla rodziny i przyjaciół",
                                    "Gotowe zdjęcia w ciągu 14 dni",
                                    "Opcjonalnie: wydruki, albumy, fotoobrazy lub portrety w ramkach",
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

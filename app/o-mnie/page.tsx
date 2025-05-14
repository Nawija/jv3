import Image from "next/image";
import Slub from "@/public/Images/slub.jpg";
import HeroSection from "@/components/HeroSection";

// Galeria
function GalleryGrid({ images }: { images: string[] }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`Zdjęcie ${index + 1}`}
                    width={300}
                    height={200}
                    className="object-cover"
                />
            ))}
        </div>
    );
}

export default function AboutMePage() {
    const images = [Slub.src, Slub.src, Slub.src, Slub.src];

    return (
        <>
            <HeroSection
                title="Jarek Olszewski – Fotograf z Siedlec"
                backgroundImages={["/Images/slub.jpg"]}
                paragraphs={[
                    "Poznaj moją historię i sposób, w jaki patrzę na świat przez obiektyw aparatu.",
                ]}
            />
            <main className="bg-white text-gray-800">
                {/* Sekcja O mnie */}
                <section className="max-w-4xl mx-auto px-4 py-16 space-y-12 bg-white">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-brand mb-4">
                            Kim jestem – fotograf i człowiek z pasją
                        </h2>
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
                <section className="max-w-6xl mx-auto px-4 pb-20">
                    <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-brand">
                        Zobacz moje kadry
                    </h3>
                    <GalleryGrid images={images} />
                </section>
            </main>
        </>
    );
}

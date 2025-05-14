import ImageComponent from "@/components/ImageComponent";
import TitleH2 from "@/components/TitleH2";
import HeroSection from "../../components/HeroSection";
import path from "path";
import fs from "fs";
import CarouselProps from "@/components/CarouselProps";
import { OFERTAIMAGES } from "@/constants/Links";

export default function FotografiaSlubna() {
    const dirPath = path.join(process.cwd(), "public/Images/PodglądoweZdjecia");
    const files = fs.readdirSync(dirPath);

    const allImages = files
        .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
        .map((file) => {
            const imagePath = `/Images/PodglądoweZdjecia/${file}`;
            return {
                responsiveImage: {
                    src: imagePath,
                    width: 1000,
                    height: 667,
                },
            };
        });

    const formattedImages = allImages.map((img) => ({
        src: img.responsiveImage.src,
    }));

    return (
        <>
            <HeroSection
                title="Ślub"
                backgroundImages={["/Images/sesja.jpg"]}
                paragraphs={[
                    "Dzień, który zapamiętacie na zawsze, ten wymarzony, najpiękniejszy, idealny Czemu chcę być z Wami? Żeby łapać te wszystkie piękne, ale jednocześnie ulotne chwile i zachowywać je na zdjęciach.",
                ]}
            />
            <div className="text-center bg-white w-full">
                <div className="w-full py-10">
                    <div className="max-w-screen-lg mx-auto px-4">
                        <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-10">
                            Fotografia ślubna, co skrywa?
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {OFERTAIMAGES.map((img, index) => (
                                <ImageComponent
                                    key={index}
                                    img={img.src}
                                    title={img.title}
                                    desc={img.desc}
                                />
                            ))}
                        </div>

                        <section className="pb-12 pt-24 text-center">
                            <h2 className="text-2xl font-semibold mb-4">
                                Jak fotografuję?
                            </h2>
                            <p className="max-w-screen-md mx-auto text-lg">
                                Interesująco i spójnie. Poprzez fotografie
                                staram się opowiedzieć Wasz najważniejszy dzień
                                w życiu. Fotografując śluby, łapię to, co przez
                                wielu niedostrzeżone chwile i momenty, tworząc
                                pamiątkę na całe życie.
                            </p>
                        </section>

                        <TitleH2
                            title="-Kilka fotografii ślubnych-"
                            desc="#przygotowania #ślub #wesele #sesje"
                        />
                        <div className="max-w-screen-sm mx-auto">
                            <CarouselProps images={formattedImages} />
                        </div>

                        <TitleH2
                            title="Jak pracuję?"
                            desc="Niedostrzeżony i często z boku, jestem z Wami przez cały czas, z pomocną radą i wsparciem. Podpowiadam, nie ustawiam. Najpiękniejsze zdjęcia wychodzą, gdy jesteście sobą, cieszycie się chwilą."
                        />

                        <TitleH2
                            title="-Kilka historii-"
                            desc="#reportaż_ślubny #sesja_ślubna #sesja_narzeczeńska"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

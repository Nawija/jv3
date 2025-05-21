import ImageComponent from "@/components/ImageComponent";
import TitleH2 from "@/components/TitleH2";
import { getBlogs } from "@/lib/getBlogs";
import HeroSection from "../../components/HeroSection";
import CarouselProps from "@/components/CarouselProps";
import { OFERTAIMAGES } from "@/constants/Links";
import BlogList from "@/components/BlogList";
import ContactForm from "@/components/ContactForm";
import ParagraphWithBullets from "@/components/ParagraphWithBullets";
import { Metadata } from "next";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";

const pageTitle = "Fotografia ślubna - uchwyć magię najważniejszego dnia";
const pageDescription =
    "Twój ślub to wyjątkowe wydarzenie, pełne wzruszeń, radości i niezapomnianych chwil. Profesjonalna fotografia ślubna to sposób, by zatrzymać te momenty na zawsze. Jako doświadczeni fotografowie ślubni wiemy, jak ważne jest dla Was, aby każdy uśmiech, każdy gest i każda emocja zostały pięknie uwiecznione.";

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

export default async function FotografiaSlubna() {
    const blogs = await getBlogs();
    const allImages = getImagesFromFolder("PodglądoweZdjecia", 6);

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
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
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
                        <div className="max-w-3xl mx-auto">
                            <BlogList blogs={blogs} limit={6} columns={3} />
                        </div>

                        <div className="max-w-2xl mx-auto my-12">
                            <ParagraphWithBullets
                                title="Co oferuję"
                                paragraph="Fotografuję od początku przygotowań ślubnych do ostatnich uroczystości weselnych."
                                bullets={[
                                    "Minimum 700 fotografii z reportażu (zdjęcia poddane autorskiej obróbce - naturalne i prawdziwe fotografie)",
                                    "Sesję ślubną w dniu ślubu, krótka sesja w okolicach przyjęcia weselnego (by nie tracić cennego czasu)",
                                    "Sesję ślubną innego dnia, w wybranym przez Was miejscu",
                                    "Sesję narzeczeńska",
                                    "Foto-albumy, wydruki cyfrowe, fotoobrazy, zdjęcia na płótnie. portrety w ramkach",
                                    "Wydruki w dniu ślubu (pocztówki, portrety dla rodziców)",
                                    "Nośnik danych (pendrive)",
                                    "Zapis na chmurze - link do pobrania, bez ograniczeń i na dowolne urządzenie",
                                    "Galerię internetową chronioną hasłem",
                                    "Szybki termin realizacji - zdjęcia już w 14 dni do Waszej dyspozycji",
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

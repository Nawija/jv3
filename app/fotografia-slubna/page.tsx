import ImageComponent from "@/components/ImageComponent";
import TitleH2 from "@/components/TitleH2";
import { getBlogs } from "@/lib/getBlogs";
import HeroSection from "../../components/HeroSection";
import CarouselProps from "@/components/CarouselProps";
import BlogList from "@/components/BlogList";
import ContactForm from "@/components/ContactForm";
import ParagraphWithBullets from "@/components/ParagraphWithBullets";
import { Metadata } from "next";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";
import Gallery from "../oferta/_components/Gallery";
import Opinions from "@/components/Opinions";
import LinkShare from "@/components/ui/LinkShare";
import InstagramGrid from "@/components/instagram/InstagramGrid";
import Link from "next/link";
import { getBlogsByCategory } from "@/lib/getBlogsByCategory";

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

const OFERTAIMAGES = [
    {
        src: "/Images/oferta/sesja-ślubna.avif",
        position: "66% 0%",
        href: "/sesja-slubna",
        title: "Sesja Ślubna",
        desc: "Od przygotowań po wesele - wszystkie wydarzenie z tego dnia",
    },
    {
        src: "/Images/oferta/SESJA NARZECZEŃSKA.avif",
        position: "55% 0%",
        href: "/sesja-narzeczenska",
        title: "Sesja Narzeczeńska",
        desc: "pozwala oswoić się z aparatem, wyjątkowa pamiątka z czasu przed ślubnego",
    },
    {
        src: "/Images/oferta/CHRZEST.avif",
        position: "53% 50%",
        href: "/fotografia-chrztu",
        title: "Reportaż chrztu",
        desc: "Spokojna chwila po ślubie w ulubionym miejscu.",
    },
];

export default async function FotografiaSlubna() {
    const x = await getBlogsByCategory("fotografia-slubna");
    const y = await getBlogsByCategory("sesja-narzeczenska");
    const z = await getBlogsByCategory("sesja-slubna");
    const blogs = [...x, ...y, ...z];
    const allImages = getImagesFromFolder("PodglądoweZdjecia", 6);
    const allImagesWeding = getImagesFromFolder(
        "blogs/fotografia-slubna/fotografia-slubna-w-siedlcach-panderoza",
        6
    );

    const formattedImages = allImagesWeding.map((img) => ({
        src: img.responsiveImage.src,
    }));

    return (
        <>
            <HeroSection
                title="Ślub"
                backgroundImages={[
                    "/Images/carousel/02_sesja_slubna_plener_siedlce.avif",
                ]}
                paragraphs={[
                    "Dzień, który zapamiętacie na zawsze - ten wymarzony, najpiękniejszym idealny. Czemu chce być z Wami? Żeby łapać te wszystkie piękne, ale jednocześnie ulotne chwile i zachować je na zdjęciach.",
                ]}
            />
            <div className="text-center bg-white w-full">
                <div className="w-full py-10">
                    <div className="max-w-screen-lg mx-auto px-4">
                        <h1 className="text-2xl lg:text-3xl font-light text-center mb-10">
                            Fotografia ślubna, co skrywa?
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                            {OFERTAIMAGES.map((img, index) => (
                                <Link href={img.href}>
                                    <ImageComponent
                                        key={index}
                                        index={index}
                                        img={img.src}
                                        title={img.title}
                                        desc={img.desc}
                                    />
                                </Link>
                            ))}
                        </div>

                        <section className="pb-12 pt-24 text-center">
                            <h2 className="text-2xl font-light mb-4">
                                Jak fotografuję?
                            </h2>
                            <p className="max-w-screen-md mx-auto text-lg">
                                Interesująco i spójnie. Poprzez fotografie
                                staram się opowiedzieć Wasz najważniejszy dzień
                                w życiu. Fotografując śluby, łapie to co przez
                                wielu niedostrzeżone (chwile i momenty)
                                Przygotowując dla Was zdjęcia ślubne, kieruję
                                się dbałością o to by pozostały prawdziwe i
                                naturalne a przez to ponadczasowe
                            </p>
                        </section>

                        <TitleH2
                            title="- Kilka fotografii ślubnych -"
                            desc="#przygotowania #ślub #wesele #sesje"
                        />
                        <div className="max-w-screen-sm mx-auto">
                            <CarouselProps images={formattedImages} />
                        </div>

                        <TitleH2
                            title="Jak pracuję?"
                            desc="Niedostrzeżony i często z boku, jestem z Wami przez cały czas, z pomocną radą i wsparciem. podpowiadam, nie ustawiam. najpiękniejsze zdjęcia wychodzą gdy jesteście sobą, cieszycie się wyjątkowością przeżywanej chwili. Fotografie które wykonuje są naturalnie i prawdziwe przez co staja się wyjątkowe i ponadczasowe."
                        />

                        <TitleH2
                            title="- Kilka historii -"
                            desc="#reportaż_ślubny #sesja_ślubna #sesja_narzeczeńska"
                        />
                        <div className="max-w-3xl mx-auto">
                            <BlogList blogs={blogs} limit={6} columns={2} />
                        </div>

                        <div className="max-w-2xl mx-auto my-12">
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
                        <div className="max-w-3xl mx-auto">
                            <Gallery allImages={allImages} />
                        </div>
                        <section className="bg-white px-4 py-12">
                            <div className="mx-auto max-w-4xl text-center">
                                <p className=" font-light text-neutral-900 text-xl tracking-tight">
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
                        <div className="mt-12">
                            <ContactForm />
                        </div>
                        <div className="mt-12">
                            <InstagramGrid />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

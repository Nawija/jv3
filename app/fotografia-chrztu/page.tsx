import UniversalPage from "@/components/UniversalPage";
import { getBlogsByCategory } from "@/lib/getBlogsByCategory";
import { getImagesFromFolder } from "@/lib/getImagesFromFolder";
import { Metadata } from "next";

const pageTitle = "Fotografia Chrztu - uchwyć magię chwili";
const pageDescription =
    "Profesjonalne zdjęcia z chrztu dziecka — emocje, rodzina i piękna oprawa uroczystości.";
const heroImage = "/Images/fotografia-chrztu/fotografia-chrztu.jpeg";

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
};

export default async function Page() {
    const blogs = await getBlogsByCategory("fotografia-chrztu");
    const images = getImagesFromFolder(
        "blogs/fotografia-chrztu/chrzest-ujecia-pelne-milosci",
        6
    );
    const gallery = getImagesFromFolder("PodglądoweZdjecia", 6);

    const content = {
        hero: {
            title: "Fotografia Chrztu",
            backgroundImages: [heroImage],
            paragraphs: [
                "Dzień, który zapamiętacie na zawsze — idealny, pełen emocji. Uwiecznijmy go razem.",
            ],
        },
        introTitle: "Fotografia chrztu, co skrywa?",
        gridImages: [
            {
                src: images[1].responsiveImage.src,
                position: "66% 0%",
                href: "/sesja-slubna",
                title: "Sesja Ślubna",
                desc: "Wszystkie wydarzenia z tego dnia — od przygotowań po wesele.",
            },
            {
                src: images[2].responsiveImage.src,
                position: "66% 0%",
                href: "/sesja-slubna",
                title: "Sesja Ślubna",
                desc: "Wszystkie wydarzenia z tego dnia — od przygotowań po wesele.",
            },
            {
                src: images[3].responsiveImage.src,
                position: "66% 0%",
                href: "/sesja-slubna",
                title: "Sesja Ślubna",
                desc: "Wszystkie wydarzenia z tego dnia — od przygotowań po wesele.",
            },
            // Dodaj więcej jak potrzeba
        ],
        sections: [
            {
                title: "Jak pracuję podczas chrztu?",
                content:
                    "Fotografuję dyskretnie i z wyczuciem, by uchwycić naturalne emocje i wyjątkową atmosferę.",
            },
        ],
        carousel: {
            title: "- Przykładowe zdjęcia z chrztu -",
            desc: "#chrzest #fotografia-chrztu #emocje",
            images: images.map((img) => ({ src: img.responsiveImage.src })),
        },
        blogs: {
            title: "- Kilka historii -",
            desc: "#reportaż #chrzest #rodzina",
            data: blogs,
        },
        bullets: {
            title: "Co oferuję",
            paragraph:
                "Od przygotowań do rodzinnych uścisków — jestem z Wami cały czas.",
            items: [
                "Minimum 700 zdjęć z reportażu",
                "Sesja w dniu chrztu i innego dnia",
                "Albumy, odbitki, galerie online",
                "Dostawa zdjęć w 21 dni",
            ],
        },
        gallery,
    };

    return <UniversalPage content={content} />;
}

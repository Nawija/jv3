import HeroSection from "@/components/HeroSection";
import TitleH2 from "@/components/TitleH2";
import ImageComponent from "@/components/ImageComponent";
import CarouselProps from "@/components/CarouselProps";
import BlogList from "@/components/BlogList";
import ParagraphWithBullets from "@/components/ParagraphWithBullets";

import Opinions from "@/components/Opinions";
import ContactForm from "@/components/ContactForm";
import InstagramGrid from "@/components/instagram/InstagramGrid";
import LinkShare from "@/components/ui/LinkShare";
import Link from "next/link";
import Gallery from "@/app/oferta/_components/Gallery";
import ContactBtns from "./contactBtns";
import { FaStar } from "react-icons/fa";

type UniversalPageContent = {
    hero: {
        title: string;
        backgroundImages: string[];
        paragraphs: string[];
    };
    introTitle: string;
    gridImages: {
        href: string;
        src: string;
        title: string;
        desc: string;
    }[];
    sections: {
        title: string;
        content: string;
    }[];
    carousel?: {
        title: string;
        desc: string;
        images: {
            src: string;
            alt?: string;
        }[];
    };
    blogs?: {
        title: string;
        desc: string;
        data: {
            title: string;
            slug: string;
            image: string;
            date?: string;
            excerpt?: string;
            content: string;
            category: string;
        }[];
    };
    bullets?: {
        title: string;
        paragraph: string;
        items: string[];
    };
    gallery?: {
        responsiveImage: {
            width: number;
            height: number;
            src: string;
        };
    }[];
};

export default function UniversalPage({
    content,
}: {
    content: UniversalPageContent;
}) {
    return (
        <>
            <HeroSection
                title={content.hero.title}
                backgroundImages={content.hero.backgroundImages}
                paragraphs={content.hero.paragraphs}
            />
            <div className="text-center bg-white w-full">
                <div className="w-full py-10">
                    <div className="max-w-screen-lg mx-auto px-4">
                        <h1 className="text-2xl lg:text-3xl font-light text-center mb-10">
                            {content.introTitle}
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                            {content.gridImages.map(
                                (
                                    img: {
                                        href: string;
                                        src: string;
                                        title: string;
                                        desc: string;
                                    },
                                    index: number
                                ) => (
                                    <ImageComponent
                                        key={index}
                                        index={index}
                                        img={img.src}
                                        title={img.title}
                                        desc={img.desc}
                                    />
                                )
                            )}
                        </div>

                        {content.sections.map(
                            (
                                section: { title: string; content: string },
                                i: number
                            ) => (
                                <section key={i} className="py-12 text-center">
                                    <h2 className="text-2xl font-light mb-4">
                                        {section.title}
                                    </h2>
                                    <p className="max-w-screen-md mx-auto text-lg">
                                        {section.content}
                                    </p>
                                </section>
                            )
                        )}

                        {content.carousel && (
                            <>
                                <TitleH2
                                    title={content.carousel.title}
                                    desc={content.carousel.desc}
                                />
                                <div className="max-w-screen-sm mx-auto">
                                    <CarouselProps
                                        images={content.carousel.images}
                                    />
                                </div>
                            </>
                        )}

                        {content.blogs && (
                            <>
                                <TitleH2
                                    title={content.blogs.title}
                                    desc={content.blogs.desc}
                                />
                                <div className="max-w-3xl mx-auto">
                                    <BlogList
                                        blogs={content.blogs.data}
                                        limit={6}
                                        columns={2}
                                    />
                                </div>
                            </>
                        )}

                        {content.bullets && (
                            <div className="max-w-2xl mx-auto my-12">
                                <ParagraphWithBullets
                                    title={content.bullets.title}
                                    paragraph={content.bullets.paragraph}
                                    bullets={content.bullets.items}
                                />
                            </div>
                        )}

                        <div className="max-2-xl w-full flex items-center justify-center">
                            <ContactBtns />
                        </div>

                        {content.gallery && (
                            <div className="max-w-3xl mx-auto">
                                <Gallery allImages={content.gallery} />
                            </div>
                        )}

                        <section className="bg-white px-4 py-12">
                            <div className="mx-auto max-w-4xl text-center">
                                <p className="font-light text-neutral-900 text-xl tracking-tight">
                                    Opinie klientów
                                </p>
                                <Opinions />
                                <div className="flex justify-center items-center">
                                    <p className="mr-2">Opinie z</p>
                                    <LinkShare
                                        title="Google"
                                        target="_blank"
                                        href="https://www.google.com/search?q=jarekolszewski"
                                    />
                                </div>
                                <div className="flex items-center justify-center space-x-0.5 mt-2">
                                    <span className="text-sm">5,0</span>
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <FaStar className="text-yellow-400" />
                                    <span className="text-sm">(44)</span>
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

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
import { FaStar } from "react-icons/fa";
import ContactBtns from "./ContactBtns";
import CTASendMail from "./CTASendMail";

type UniversalPageContent = {
    hero: {
        title: string;
        backgroundImages: string[];
        paragraphs: string[];
    };
    introTitle: string;
    introDesc?: string;
    gridImages: {
        src: string;
        title: string;
        desc: string;
    }[];
    sections: {
        h2?: string;
        subSections?: {
            h3?: string;
            content: string;
        }[];
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
    h2Sections?: {
        title: string;
        desc?: string;
        componentType?: "default" | "gallery" | "contact";
    }[];
};

function SectionWithSubSections({
    section,
    sectionKeyPrefix,
}: {
    section: {
        h2?: string;
        subSections?: {
            h3?: string;
            content: string;
        }[];
    };
    sectionKeyPrefix: string;
}) {
    function slugify(text: string) {
        return text
            .toLowerCase()
            .trim()
            .replace(/[\s]+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-");
    }

    return (
        <section
            className="pt-8 px-1 max-w-4xl mx-auto text-center"
            aria-labelledby={`section-h2-${slugify(section.h2 ?? "")}`}
            key={`${sectionKeyPrefix}`}
        >
            {section.h2 && (
                <h2
                    id={`section-h2-${slugify(section.h2)}`}
                    className="text-2xl font-medium mb-6"
                >
                    {section.h2}
                </h2>
            )}
            {section.subSections?.map((sub, j) => (
                <div
                    key={`${sectionKeyPrefix}-subsection-${j}`}
                    className="mb-12"
                >
                    {sub.h3 && (
                        <h3
                            id={`subsection-h3-${slugify(sub.h3)}`}
                            className="text-xl max-w-2xl mx-auto font-light mb-8"
                        >
                            {sub.h3}
                        </h3>
                    )}
                    <p className="max-w-screen-md mx-auto text-base text-start">
                        <span className="relative inline-block pl-2">
                            <span className="absolute left-0 top-0 h-full w-[5px] rounded bg-brand-nav"></span>
                            {sub.content.charAt(0)}
                        </span>
                        {sub.content.slice(1)}
                    </p>
                </div>
            ))}
        </section>
    );
}

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
                    <div className="max-w-5xl mx-auto px-4">
                        <h1 className="text-2xl lg:text-3xl max-w-4xl mx-auto font-light text-center mb-10">
                            {content.introTitle}
                        </h1>
                        <p className="text- font-light text-center mb-10">
                            {content.introDesc}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                            {content.gridImages.map((img, index) => (
                                <ImageComponent
                                    key={index}
                                    index={index}
                                    img={img.src}
                                    title={img.title}
                                    desc={img.desc}
                                />
                            ))}
                        </div>

                        {/* Pierwsze dwie sekcje */}
                        {content.sections.slice(0, 1).map((section, i) => (
                            <SectionWithSubSections
                                key={`section-0-2-${i}`}
                                section={section}
                                sectionKeyPrefix={`section-0-2-${i}`}
                            />
                        ))}

                        <div className="border p-12 max-w-2xl mx-auto bg-gray-100">
                            <p className="text-2xl font-medium pb-2">Napisz do mnie</p>
                            <CTASendMail title="Wyślij wiadomość" />
                        </div>

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

                        {/* Pierwsze dwie sekcje */}
                        {content.sections.slice(1, 2).map((section, i) => (
                            <SectionWithSubSections
                                key={`section-2-4-${i}`}
                                section={section}
                                sectionKeyPrefix={`section-2-4-${i}`}
                            />
                        ))}
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

                        <div className="mt-12 mb-6 flex items-center justify-center">
                            <ContactBtns />
                        </div>

                        {content.sections.slice(2, 3).map((section, i) => (
                            <SectionWithSubSections
                                key={`section-3-x-${i}`}
                                section={section}
                                sectionKeyPrefix={`section-2-4-${i}`}
                            />
                        ))}

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

                        {content.sections.slice(3).map((section, i) => (
                            <SectionWithSubSections
                                key={`section-4-end-${i}`}
                                section={section}
                                sectionKeyPrefix={`section-4-end-${i}`}
                            />
                        ))}
                        <div className="mt-12">
                            <InstagramGrid />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

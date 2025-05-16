"use client";

import { useEffect, useRef, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Fotograf Siedlce: Fotografia Ślubna i Artystyczna, Foto",
    description:
        "Fotograf Siedlce: Jarek Olszewski fotografia ślubna i reportaże. Najlepszy fotograf ślubny w Siedlcach. Zobacz portfolio i zamów sesję!",
    openGraph: {
        title: "Fotograf Siedlce: Fotografia Ślubna i Artystyczna, Foto",
        description:
            "Fotograf Siedlce: Jarek Olszewski fotografia ślubna i reportaże. Najlepszy fotograf ślubny w Siedlcach. Zobacz portfolio i zamów sesję!",
        url: "https://jv3.vercel.app/",
        siteName: "Jarek Olszewski - Fotograf",
        images: [
            {
                url: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
                width: 1200,
                height: 630,
                alt: "Fotografia ślubna - Jarek Olszewski",
            },
        ],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fotograf Siedlce: Fotografia Ślubna i Artystyczna, Foto",
        description:
            "Fotograf Siedlce: Jarek Olszewski fotografia ślubna i reportaże. Najlepszy fotograf ślubny w Siedlcach. Zobacz portfolio i zamów sesję!",
        images: ["/Images/fotograf-siedlce-jarek-olszewski.jpg"],
    },
};

const images = [
    {
        src: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
        width: 1200,
        height: 1200,
        alt: "Zdjęcie 1",
    },
    {
        src: "/Images/sesja2.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/Blog/slub.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf038.jpeg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/wyjscie.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 3",
    },
    {
        src: "/Images/Blog/sesja.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 3",
    },
    {
        src: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
        width: 1200,
        height: 1200,
        alt: "Zdjęcie 1",
    },
    {
        src: "/Images/sesja2.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/Blog/slub.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf038.jpeg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/wyjscie.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 3",
    },
    {
        src: "/Images/Blog/sesja.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 3",
    },
    {
        src: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
        width: 1200,
        height: 1200,
        alt: "Zdjęcie 1",
    },
    {
        src: "/Images/sesja2.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/Blog/slub.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf038.jpeg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/wyjscie.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 3",
    },
    {
        src: "/Images/Blog/sesja.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 3",
    },
    {
        src: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
        width: 1200,
        height: 1200,
        alt: "Zdjęcie 1",
    },
    {
        src: "/Images/sesja2.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/Blog/slub.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf038.jpeg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/wyjscie.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 3",
    },
    {
        src: "/Images/Blog/sesja.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 3",
    },
    {
        src: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
        width: 1200,
        height: 1200,
        alt: "Zdjęcie 1",
    },
    {
        src: "/Images/sesja2.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/Blog/slub.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf038.jpeg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/wyjscie.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 3",
    },
    {
        src: "/Images/Blog/sesja.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 3",
    },
    {
        src: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
        width: 1200,
        height: 1200,
        alt: "Zdjęcie 1",
    },
    {
        src: "/Images/sesja2.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/Blog/slub.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf038.jpeg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 2",
    },
    {
        src: "/Images/wyjscie.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 3",
    },
    {
        src: "/Images/Blog/sesja.jpg",
        width: 1200,
        height: 800,
        alt: "Zdjęcie 3",
    },
];

export default function PortfolioPage() {
    const galleryRef = useRef<HTMLDivElement | null>(null);
    const imageRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [loadedImages, setLoadedImages] = useState<boolean[]>([]);
    const lastViewedIndex = useRef<number | null>(null);

    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: "#gallery",
            children: "a",
            pswpModule: () => import("photoswipe"),
        });

        lightbox.on("change", () => {
            const pswp = lightbox.pswp;
            if (pswp) {
                lastViewedIndex.current = pswp.currIndex;
            }
        });

        lightbox.on("close", () => {
            // Scrollujemy do zdjęcia po zamknięciu
            if (
                lastViewedIndex.current !== null &&
                imageRefs.current[lastViewedIndex.current]
            ) {
                const el = imageRefs.current[lastViewedIndex.current];
                el?.scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });

        // Miniaturki w lightboxie
        lightbox.on("afterInit", () => {
            const pswp = lightbox.pswp;
            if (!pswp) return;

            const pswpElement = document.querySelector(".pswp") as HTMLElement;
            const thumbnailContainer = document.createElement("div");
            thumbnailContainer.className =
                "pswp-thumbnails fixed bottom-0 left-1/2 -translate-x-1/2 z-50 bg-black/80 p-2 rounded-t-lg flex overflow-x-auto max-w-full";
            thumbnailContainer.style.scrollbarWidth = "none";
            thumbnailContainer.style.overflowY = "hidden";
            thumbnailContainer.style.setProperty(
                "::-webkit-scrollbar",
                "display: none"
            );

            images.forEach((img, idx) => {
                const thumb = document.createElement("img");
                thumb.src = img.src;
                thumb.className =
                    "thumb w-16 h-16 object-cover mr-2 rounded border-2 border-transparent cursor-pointer transition-all";
                thumb.dataset.index = idx.toString();
                thumb.addEventListener("click", () => {
                    pswp.goTo(idx);
                });
                thumbnailContainer.appendChild(thumb);
            });

            pswpElement.appendChild(thumbnailContainer);

            const updateActiveThumb = (index: number) => {
                const thumbs = thumbnailContainer.querySelectorAll("img.thumb");
                thumbs.forEach((thumb, i) => {
                    if (i === index) {
                        thumb.classList.add("border-white", "scale-110");
                        thumb.scrollIntoView({
                            behavior: "smooth",
                            inline: "center",
                            block: "nearest",
                        });
                    } else {
                        thumb.classList.remove("border-white", "scale-110");
                    }
                });
            };

            pswp.on("change", () => {
                updateActiveThumb(pswp.currIndex);
            });

            updateActiveThumb(pswp.currIndex);
        });

        lightbox.init();
        return () => lightbox.destroy();
    }, []);

    useEffect(() => {
        setLoadedImages(new Array(images.length).fill(false));
    }, []);

    const handleImageLoad = (index: number) => {
        setLoadedImages((prev) => {
            const newLoaded = [...prev];
            newLoaded[index] = true;
            return newLoaded;
        });
    };

    return (
        <div className="anim-opacity px-2 bg-neutral-900 min-h-screen pb-24 ">
            <div
                id="gallery"
                ref={galleryRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2"
            >
                <div className="bg-stone-900/80 border p-8 border-zinc-800 flex items-center row-span-2 justify-center flex-col text-zinc-400">
                    <h1 className="text-xl text-white mb-3">
                        Portfolio Jarek Olszewski
                    </h1>
                    <div className="max-w-96 text-white/80">
                        <p className="text-sm mb-2">
                            Profesjonalna fotografia w Siedlcach – sesje,
                            reportaże, wydarzenia.
                        </p>
                        <p className="text-sm mb-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Distinctio neque molestias officia!
                        </p>
                        <p className="text-sm mb-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Modi eligendi, fuga asperiores animi deserunt
                            digni
                        </p>
                    </div>
                </div>
                {images.map((image, index) => (
                    <a
                        key={index}
                        href={image.src}
                        data-pswp-width={image.width}
                        data-pswp-height={image.height}
                        target="_blank"
                        rel="noreferrer"
                        className="block brightness-75 hover:brightness-100 transition"
                        ref={(el) => {
                            imageRefs.current[index] = el;
                        }}
                    >
                        <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
                            {!loadedImages[index] && (
                                <div className="absolute inset-0 animate-pulse bg-gray-300"></div>
                            )}
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                priority={index < 5}
                                className={`object-cover transition-opacity duration-500 ${
                                    loadedImages[index]
                                        ? "opacity-100"
                                        : "opacity-0"
                                }`}
                                onLoad={() => handleImageLoad(index)}
                            />
                        </div>
                    </a>
                ))}
            </div>
            <div className="text-lg text-white flex items-center justify-center pt-20 gap-2">
                <p className="font-medium">Więcej znajdziesz na </p>
                <div className="flex gap-2">
                    <a
                        href="https://www.facebook.com/twojprofil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition"
                        aria-label="Facebook"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 3h-2.4v7A10 10 0 0 0 22 12Z" />
                        </svg>
                    </a>
                    <a
                        href="https://www.instagram.com/twojprofil"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition"
                        aria-label="Instagram"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.5-2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

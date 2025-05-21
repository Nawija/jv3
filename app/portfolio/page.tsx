"use client";

import { useEffect, useRef, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";
import InviteSocialMedia from "@/components/InviteSocialMedia";

const images = [
    {
        src: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
        width: 1200,
        height: 1200,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/sesja2.jpg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf038.jpeg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/wyjscie.jpg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
        width: 1200,
        height: 1200,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/sesja2.jpg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },

    {
        src: "/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf038.jpeg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/wyjscie.jpg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },

    {
        src: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
        width: 1200,
        height: 1200,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/sesja2.jpg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },

    {
        src: "/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf038.jpeg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/wyjscie.jpg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },

    {
        src: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
        width: 1200,
        height: 1200,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/sesja2.jpg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },

    {
        src: "/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf038.jpeg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/wyjscie.jpg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },

    {
        src: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
        width: 1200,
        height: 1200,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/sesja2.jpg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },

    {
        src: "/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf038.jpeg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/wyjscie.jpg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },

    {
        src: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
        width: 1200,
        height: 1200,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/sesja2.jpg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },

    {
        src: "/Images/PodglądoweZdjecia/fotografia-siedlce-albumy-dobitki-jarek-olszewski-fotograf038.jpeg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
    },
    {
        src: "/Images/wyjscie.jpg",
        width: 1200,
        height: 800,
        alt: "Jarek Olszewski Fotografia",
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
                        Fotografia - Portfolio Jarek Olszewski
                    </h1>
                    <div className="max-w-96 text-white/80">
                        <p className="text-sm mb-2">
                            Profesjonalna fotografia w Siedlcach - sesje,
                            reportaże, wydarzenia
                        </p>
                        <p className="text-sm mb-2">
                            Fotografia to moja pasja i sposób na opowiadanie
                            historii pełnych emocji. Uchwycam naturalne momenty,
                            które zostają na zawsze. Pracuję z zaangażowaniem,
                            tworząc zdjęcia pełne autentyczności i ciepła.
                            Zapraszam do obejrzenia mojego portfolio
                        </p>
                        <p className="text-sm mb-2">
                            każde Jarek Olszewski Fotografiao dla mnie wyjątkowa
                            chwila.
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
                                alt={image.alt + index}
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
            <InviteSocialMedia
                text="Więcej znajdziesz na"
                textColor="text-white"
            />
        </div>
    );
}

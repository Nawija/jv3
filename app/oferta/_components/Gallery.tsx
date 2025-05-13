"use client";

import { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";
import Skeleton from "@/components/ui/Skeleton";

type ResponsiveImage = {
    width: number;
    height: number;
    base64?: string;
    src: string;
};

type GalleryImage = {
    responsiveImage: ResponsiveImage;
};

type GalleryProps = {
    allImages: GalleryImage[];
};

export default function Gallery({ allImages }: GalleryProps) {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: ".pswp-gallery",
            children: "a",
            pswpModule: () => import("photoswipe"),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
        };
    }, [allImages]);

    return (
        <div className="py-2">
            <div className="pswp-gallery grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 m-2 p-3">
                {allImages.map((image, index) => (
                    <ImgGallery key={index} image={image} />
                ))}
            </div>
        </div>
    );
}

type ImgGalleryProps = {
    image: GalleryImage;
};

function ImgGallery({ image }: ImgGalleryProps) {
    const [loaded, setLoaded] = useState(false);

    const widthHeightRatio =
        image.responsiveImage.height / image.responsiveImage.width;
    const galleryHeight = Math.ceil(200 * widthHeightRatio);
    const imageSpans = Math.ceil(galleryHeight / 10) + 1;

    return (
        <div style={{ gridRow: `span ${imageSpans}` }}>
            <a
                href={image.responsiveImage.src}
                data-pswp-width={image.responsiveImage.width}
                data-pswp-height={image.responsiveImage.height}
                target="_blank"
                rel="noreferrer"
                className="group relative block w-full h-full"
            >
                {!loaded && (
                    <Skeleton className="absolute inset-0 w-full h-full z-0" />
                )}
                <Image
                    className={`object-cover w-full h-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
                    src={image.responsiveImage.src}
                    alt="Zdjęcie z galerii"
                    height={image.responsiveImage.height}
                    width={image.responsiveImage.width}
                    onLoadingComplete={() => setLoaded(true)}
                />
            </a>
        </div>
    );
}

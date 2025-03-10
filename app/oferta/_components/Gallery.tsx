"use client";

import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";

type ResponsiveImage = {
    width: number;
    height: number;
    base64: string;
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
    const widthHeightRatio =
        image.responsiveImage.height / image.responsiveImage.width;
    const galleryHeight = Math.ceil(330 * widthHeightRatio);
    const imageSapns = Math.ceil(galleryHeight / 10) + 1;
    return (
        <div style={{ gridRow: `span ${imageSapns}` }}>
            <a
                href={image.responsiveImage.src}
                data-pswp-width={image.responsiveImage.width}
                data-pswp-height={image.responsiveImage.height}
                target="_blank"
                rel="noreferrer"
                className="group relative"
            >
                <Image
                    className="object-cover w-full h-full -z-10"
                    src={image.responsiveImage.src}
                    alt="xx"
                    height={image.responsiveImage.height}
                    width={image.responsiveImage.width}
                    blurDataURL={image.responsiveImage.base64}
                    placeholder="blur"
                    quality={50}
                />
            </a>
        </div>
    );
}

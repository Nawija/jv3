"use client";

import { useEffect, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Image from "next/image";
import Skeleton from "@/components/ui/Skeleton";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

type GalleryProps = {
  images: GalleryImage[];
  columns?: number; // default: 3
  className?: string;
};

export default function PhotoSwipe({
  images,
  columns = 3,
  className = "",
}: GalleryProps) {
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
  }, [images]);

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  }[columns] || "grid-cols-3";

  return (
    <div className={`pswp-gallery grid gap-3 ${gridCols} ${className}`}>
      {images.map((img, index) => (
        <GalleryItem key={index} image={img} />
      ))}
    </div>
  );
}

function GalleryItem({ image }: { image: GalleryImage }) {
  const [loaded, setLoaded] = useState(false);
  const ratio = image.height / image.width;
  const displayHeight = Math.ceil(300 * ratio);
  const spans = Math.ceil(displayHeight / 10) + 1;

  return (
    <div style={{ gridRow: `span ${spans}` }}>
      <a
        href={image.src}
        data-pswp-width={image.width}
        data-pswp-height={image.height}
        target="_blank"
        rel="noreferrer"
        className="group relative block w-full h-full"
      >
        {!loaded && <Skeleton className="absolute inset-0 w-full h-full z-0" />}
        <Image
          src={image.src}
          alt={image.alt || "Zdjęcie z galerii"}
          width={image.width}
          height={image.height}
          onLoadingComplete={() => setLoaded(true)}
          className={`object-cover w-full h-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      </a>
    </div>
  );
}

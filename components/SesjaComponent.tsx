import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface SesjaComponentProps {
    img: StaticImageData;
    href: string;
    title: string;
}

export default function SesjaComponent({
    img,
    href,
    title,
}: SesjaComponentProps) {
    return (
        <div className="relative w-[80%] ml-12 h-48 mb-24 px-3 -space-x-10 mt-12">
            <Image
                src={img}
                alt={title}
                fill
                className="object-cover"
                quality={75}
            />
            <div className="absolute -bottom-12 left-0 bg-black/60 text-start px-8 py-6 backdrop-blur-sm  z-10 h-max w-full">
                <p className="capitalize text-white text-2xl mb-2">{title}</p>
                <Link
                    href={href}
                    className="text-white text-sm py-1 px-4 border border-white"
                >
                    Zobacz
                </Link>
            </div>
        </div>
    );
}

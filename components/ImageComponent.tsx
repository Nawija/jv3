import Image, { StaticImageData } from "next/image";
import React from "react";

interface ImageComponentProps {
    img: StaticImageData;
    title: string;
    desc: string;
}

export default function ImageComponent({
    img,
    title,
    desc,
}: ImageComponentProps) {
    return (
        <div className="relative w-[80%] h-full px-3 space-x-10 mt-12">
            <Image
                src={img}
                alt={title}
                fill
                className="object-cover"
                quality={75}
            />
            <div className="absolute -bottom-12 left-0 bg-black/60 text-start px-4 py-3 backdrop-blur-sm z-10 h-max w-full">
                <p className="capitalize text-white text-xl font-medium">{title}</p>
                {desc && (
                    <p className="text-white text-sm py-1">
                        {desc}
                    </p>
                )}
            </div>
        </div>
    );
}

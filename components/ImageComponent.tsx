import Image, { StaticImageData } from "next/image";
import React from "react";

interface ImageComponentProps {
    img: string | StaticImageData;
    title: string;
    desc: string;
}

export default function ImageComponent({
    img,
    title,
    desc,
}: ImageComponentProps) {
    return (
        <div className="relative w-full h-[200px] sm:h-[350px] md:h-[300px] lg:h-[400px] px-3 space-x-10">
            <Image
                src={img}
                alt={title}
                fill
                className="object-cover w-full h-full"
                quality={100}
            />
            <div className="absolute bottom-4 left-0 bg-black/60 text-start px-4 py-3 backdrop-blur-sm z-10 h-max lg:w-[95%] w-[99%]">
                <p className="capitalize text-white text-xl font-medium">
                    {title}
                </p>
                {desc && <p className="text-white text-sm py-1">{desc}</p>}
            </div>
        </div>
    );
}

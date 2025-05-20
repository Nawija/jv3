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
        <div className="relative flex flex-wrap items-center justify-center">
            <Image
                src={img}
                alt={title}
                height={300}
                width={300}
                className="object-cover w-full h-full aspect-square"
                quality={90}
            />

            <div className="absolute bottom-0 right-0 lg:left-0 bg-gradient-to-t from-black to-transparent text-start p-3 z-10 h-[60%] w-full flex items-start justify-end flex-col">
                <p className="capitalize text-white text-xl mr-auto font-semibold">
                    {title}
                </p>
                {desc && <p className="text-white text-base py-1">{desc}</p>}
            </div>

            {/* <div className="absolute -bottom-2 right-0 lg:left-0 bg-black/60 text-start px-4 py-3 backdrop-blur-sm z-10 h-max lg:w-[95%] w-[90%]">
                <p className="capitalize text-white text-xl font-medium">
                    {title}
                </p>
                {desc && <p className="text-white text-sm py-1">{desc}</p>}
            </div> */}
        </div>
    );
}

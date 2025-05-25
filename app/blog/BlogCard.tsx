"use client";

import { LucideExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
    title: string;
    image: string;
    category: string;
    desc: string;
    slug: string;
};

const InfoBlock: FC<Props> = ({ title, image, category, slug, desc }) => {
    return (
        <Link
            href={`/blog/${category}/${slug}`}
            className="text-center border-gray-300 block relative overflow-hidden "
        >
            <div className="relative aspect-[16/12]">
                <Image
                    src={image}
                    alt={`${title
                        .split(" ")
                        .slice(0, 5)
                        .join(" ")} " - Jarek Olszewski" `}
                    title={`${title
                        .split(" ")
                        .slice(0, 3)
                        .join(" ")} - Fotograf`}
                    fill
                    className="object-cover"
                    sizes="37vw"
                />
                <div className="absolute bottom-1 right-1 p-2 bg-black/30 text-white rounded-full from-black to-transparent">
                    <LucideExternalLink size={14} />
                </div>
            </div>

            <h3 className="font-light my-1 text-base lg:text-xl md:text-base relative z-10 line-clamp-1 px-2 py-2 ">
                {title}
            </h3>
            <p className="line-clamp-2 px-3 text-sm lg:text-base font-extralight">
                {desc}
            </p>
        </Link>
    );
};

export default InfoBlock;

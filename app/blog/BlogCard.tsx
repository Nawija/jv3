"use client";

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
            className="text-center border-gray-300 block relative overflow-hidden"
        >
            <Image
                src={image}
                alt={title}
                title={`${title} - Jarek Olszewski`}
                width={650}
                height={650}
                className={`w-full h-max object-cover aspect-[16/12] transition-opacity duration-500 `}
            />

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

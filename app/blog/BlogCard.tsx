"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaEye } from "react-icons/fa";

type Props = {
    title: string;
    image: string;
    slug: string;
};

const InfoBlock: FC<Props> = ({ title, image, slug }) => {
    return (
        <Link
            href={`/blog/${slug}`}
            className="relative h-80 overflow-hidden group"
        >
            <Image
                src={image}
                alt={title}
                fill
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80 text-white flex items-center flex-col justify-center translate-y-full group-hover:translate-y-0 transition-all opacity-0 group-hover:opacity-100 duration-300">
                <h2 className="font-medium mb-2">{title}</h2>

                <FaEye size={50}/>
            </div>
        </Link>
    );
};

export default InfoBlock;

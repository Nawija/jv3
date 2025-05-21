"use client";

import ShimmerLoader from "@/components/ShimmerLoader";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

type Props = {
    title: string;
    image: string;
    slug: string;
};

const InfoBlock: FC<Props> = ({ title, image, slug }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <Link
            href={`/blog/${slug}`}
            className="text-center border-gray-300 block relative overflow-hidden"
        >
            {!loaded && <ShimmerLoader />}

            <Image
                src={image}
                alt={title}
                width={350}
                height={350}
                onLoadingComplete={() => setLoaded(true)}
                className={`w-full h-max object-cover transition-opacity duration-500 ${
                    loaded ? "opacity-100" : "opacity-0"
                }`}
            />

            <h3 className="font-extralight my-1 text-sm md:text-base relative z-10 line-clamp-1 px-2 ">{title}</h3>
        </Link>
    );
};

export default InfoBlock;

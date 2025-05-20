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
                width={240}
                height={240}
                onLoadingComplete={() => setLoaded(true)}
                className={`w-full h-auto object-cover transition-opacity duration-500 ${
                    loaded ? "opacity-100" : "opacity-0"
                }`}
            />

            <h2 className="font-light my-2 text-lg relative z-10">{title}</h2>
        </Link>
    );
};

export default InfoBlock;

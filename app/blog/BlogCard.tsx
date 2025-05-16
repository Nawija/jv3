"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
    title: string;
    image: string;
    slug: string;
};

const InfoBlock: FC<Props> = ({ title, image, slug }) => {
    // const [loaded, setLoaded] = useState(false);

    return (
        <Link
            href={`/blog/${slug}`}
            className="text-center border p-2 border-gray-300 block relative overflow-hidden"
        >
            {/* {!loaded && (
                <div className="absolute inset-0 animate-pulse bg-gray-300 z-0" />
            )} */}

            <Image
                src={image}
                alt={title}
                width={300}
                height={300}
                // onLoad={() => setLoaded(true)}
                className={`w-full h-auto object-cover transition-opacity duration-500 `}
            />

            <h2 className="font-medium my-2 text-xl relative z-10">{title}</h2>
        </Link>
    );
};

export default InfoBlock;

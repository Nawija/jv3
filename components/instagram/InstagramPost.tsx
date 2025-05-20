"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ShimmerLoader from "../ShimmerLoader";

type InstagramPostProps = {
    media_url: string | null;
    permalink: string | null;
    alt: string;
};

export default function InstagramPost({
    media_url,
    permalink,
    alt,
}: InstagramPostProps) {
    const [loading, setLoading] = useState(true);

    if (!media_url || !permalink) {
        return (
            <div className="aspect-square">
                <ShimmerLoader />
            </div>
        );
    }

    return (
        <Link href={permalink} target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-square">
                {loading && (
                    <div className="absolute inset-0 z-10">
                        <ShimmerLoader />
                    </div>
                )}
                <img
                    src={media_url}
                    alt={alt}
                    sizes="20vw"
                    className={`object-cover h-full w-full`}

                />
            </div>
        </Link>
    );
}

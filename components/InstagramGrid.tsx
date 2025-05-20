"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ShimmerLoader from "./ShimmerLoader";

type InstaPost = {
    media_url: string;
    permalink: string;
    thumbnail_url?: string;
    media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
};

export default function InstagramGrid() {
    const [posts, setPosts] = useState<InstaPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/instagram")
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setPosts(data);
                }
            })
            .catch((err) => {
                console.error("Błąd ładowania Instagrama:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const isEmpty = !loading && posts.length === 0;
    const fallbackCount = 6;

    return (
        <section className="bg-white py-12">
            <h2 className="text-center text-2xl font-semibold mb-4">
                Zobacz więcej na Instagramie
            </h2>
            <p className="text-center text-sm mb-6">
                Świeże zdjęcia, kulisy sesji i więcej
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
                {(loading || isEmpty
                    ? Array.from({ length: fallbackCount })
                    : posts
                ).map((post: any, i) =>
                    post?.media_url ? (
                        <Link
                            key={i}
                            href={post.permalink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="relative aspect-square">
                                <Image
                                    src={post.media_url}
                                    alt={`Instagram image ${i + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                    ) : (
                        <div key={i} className="aspect-square">
                            <ShimmerLoader />
                        </div>
                    )
                )}
            </div>
        </section>
    );
}

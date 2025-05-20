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

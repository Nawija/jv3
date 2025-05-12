import Link from "next/link";
import { CiShare1 } from "react-icons/ci";

export default function LinkShare({
    href,
    title,
}: {
    href: string;
    title: string;
}) {
    return (
        <Link
            href={href}
            className="text-[#9f6012] underline hover:text-[#9f3a12] font-medium transition-color relative flex"
        >
            {title}
            <span>
                <CiShare1 />
            </span>
        </Link>
    );
}

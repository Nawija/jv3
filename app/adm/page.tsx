import { MainBtn } from "@/components/Buttons/MainBtn";
import Link from "next/link";

export default function AdminPage() {
    return (
        <div className="h-[80vh] flex items-center justify-center text-center space-x-2">
            <MainBtn>
                <Link
                    target="_blank"
                    href="https://jv3.admin.datocms.com/editor"
                >
                    Dato CMS
                </Link>
            </MainBtn>
            <MainBtn>
                <Link href="/adm/blog/dodaj">Dodaj Blog</Link>
            </MainBtn>
        </div>
    );
}

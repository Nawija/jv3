import { getBlogs } from "@/lib/getBlogs";
import BlogList from "@/components/BlogList";
import InviteSocialMedia from "@/components/InviteSocialMedia";
import { Metadata } from "next";

const pageTitle = "Blog - Jarek Olszewski | Fotograf Siedlce";
const pageDescription =
    "Inspiracje do sesji i kulisy pracy fotografa. Blog Jarka Olszewskiego - wszystko o fotografii ślubnej i nie tylko - prawdziwa fotografia";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        images: [
            {
                url: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
                width: 400,
                height: 260,
                alt: "Fotografia ślubna - Jarek Olszewski",
            },
        ],
    },
};

export default async function BlogPage() {
    const blogs = await getBlogs();

    return (
        <div className="max-w-4xl mx-auto px-4 anim-opacity mb-8">
            <h1 className="text-2xl md:text-3xl font-extralight tracking-widest my-8 text-center">Prawdziwa Fotografia</h1>
            <BlogList blogs={blogs} columns={2} />
            <InviteSocialMedia
                text="Zapraszam do odwiedzenia"
                textColor="text-black"
            />
        </div>
    );
}

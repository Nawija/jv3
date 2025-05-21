import { getBlogs } from "@/lib/getBlogs";
import BlogList from "@/components/BlogList";
import InviteSocialMedia from "@/components/InviteSocialMedia";

export default async function BlogPage() {
    const blogs = await getBlogs();

    return (
        <div className="max-w-4xl mx-auto px-4 anim-opacity mb-8">
            <h1 className="text-3xl font-semibold my-8 text-center">Sejse</h1>
            <BlogList blogs={blogs} columns={3} />
            <InviteSocialMedia
                text="Zapraszam do odwiedzenia"
                textColor="text-black"
            />
        </div>
    );
}

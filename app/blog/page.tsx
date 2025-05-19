import { getBlogs } from "@/lib/getBlogs";
import BlogList from "@/components/BlogList";

export default async function BlogPage() {
    const blogs = await getBlogs();

    return (
        <div className="max-w-4xl mx-auto px-4 anim-opacity">
            <h1 className="text-3xl font-semibold my-8 text-center">Wszystkie wpisy</h1>
            <BlogList blogs={blogs} columns={2} />
        </div>
    );
}

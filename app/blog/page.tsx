import { getBlogs, type Blog } from "@/lib/getBlogs";
import BlogCard from "./BlogCard";

export default async function Page() {
    const blogs: Blog[] = await getBlogs();

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 anim-opacity max-w-7xl mx-auto">
            {blogs.map((blog, i) =>
                blog.type === "info" ? (
                    <BlogCard
                        key={i}
                        title={blog.title}
                        image={blog.image}
                        slug={blog.slug}
                    />
                ) : null
            )}
        </section>
    );
}

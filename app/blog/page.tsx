import { getBlogs, type Blog } from "@/lib/getBlogs";
import BlogCard from "./BlogCard";

export default async function Page() {
    const blogs: Blog[] = await getBlogs();

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 anim-opacity max-w-4xl mx-auto px-2">
            {blogs.map((blog, i) =>
                blog ? (
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

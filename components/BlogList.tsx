import { type Blog } from "@/lib/getBlogs";
import BlogCard from "@/app/blog/BlogCard";

type Props = {
    blogs: Blog[];
    limit?: number;
    className?: string;
    columns?: number;
};

export default function BlogList({
    blogs,
    limit,
    className = "",
    columns = 2,
}: Props) {
    const visibleBlogs = limit ? blogs.slice(0, limit) : blogs;
    const gridCols = `grid-cols-1 md:grid-cols-${columns}`;

    return (
        <section className={`grid gap-2 ${gridCols} ${className}`}>
            {visibleBlogs.map((blog, i) =>
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

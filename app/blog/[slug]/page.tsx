import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { marked } from "marked";
import Image from "next/image";

type BlogData = {
    title: string;
    slug: string;
    date: string;
    images: { src: string; width: number; height: number }[];
    content: string;
};

export async function generateStaticParams() {
    const dir = path.join(process.cwd(), "content/blogs");
    const files = fs.readdirSync(dir);
    return files.map((filename) => ({
        slug: filename.replace(/\.md$/, ""),
    }));
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}): Promise<Metadata> {
    const blog = await getBlog(params.slug);
    if (!blog) return {};
    return {
        title: `${blog.title} | Blog`,
        description: blog.content.slice(0, 160),
        openGraph: {
            images: blog.images?.length
                ? blog.images.map(({ src, width, height }) => ({
                      url: src,
                      width,
                      height,
                  }))
                : [],
        },
    };
}

async function getBlog(slug: string): Promise<BlogData | null> {
    const filePath = path.join(process.cwd(), "content/blogs", `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
        title: data.title || "Bez tytułu",
        slug: data.slug || slug,
        date: data.date || "",
        images: data.images || [],
        content,
    };
}

export default async function BlogPage({
    params,
}: {
    params: { slug: string };
}) {
    const blog = await getBlog(params.slug);
    if (!blog) return notFound();

    const htmlContent = marked.parse(blog.content);

    return (
        <article className="max-w-4xl mx-auto px-4 py-12 w-full">
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-medium mb-4">{blog.title}</h1>
                <p className="text-gray-500 text-sm mb-8">
                    {new Date(blog.date).toLocaleDateString("pl-PL")}
                </p>

                <div
                    className="text-lg mb-12"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </div>

            {/* Obrazy z frontmattera */}
            {blog.images.length > 0 && (
                <div className="flex flex-wrap gap-4 justify-center mb-8 max-w-4xl mx-auto">
                    {blog.images.length > 0 && (
                        <div className="columns-1 md:columns-2 gap-2 max-w-4xl mx-auto mb-8 space-y-2">
                            {blog.images.map(({ src, width, height }, idx) => (
                                <div
                                    key={idx}
                                    className="break-inside-avoid overflow-hidden rounded shadow"
                                >
                                    <Image
                                        src={src}
                                        alt={`obrazek-${idx}`}
                                        width={width}
                                        height={height}
                                        className="w-full h-auto object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </article>
    );
}

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
    images: string[];
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
            images: blog.images?.[0] ? [blog.images[0]] : [],
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
        <article className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <p className="text-gray-500 text-sm mb-8">
                {new Date(blog.date).toLocaleDateString("pl-PL")}
            </p>

            <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Obrazy z frontmattera */}
            {blog.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    {blog.images.map((src, idx) => (
                        <div key={idx} className="relative w-full h-80">
                            <Image
                                src={src}
                                alt={`obrazek-${idx}`}
                                fill
                                className="object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            )}
        </article>
    );
}

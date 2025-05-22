import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { marked } from "marked";
import dynamic from "next/dynamic";
import PhotoSwipeProvider from "@/components/PhotoSwipeProvider";
import InviteSocialMedia from "@/components/InviteSocialMedia";

const BlogGallery = dynamic(() => import("./BlogGallery"), {
    ssr: true,
});

function capitalizeWithSpaces(str: string): string {
    const withSpaces = str.replace(/-/g, " ");
    return (
        withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase()
    );
}

export async function generateMetadata({
    params,
}: {
    params: { category: string; slug: string };
}): Promise<Metadata> {
    const { category, slug } = params;

    const blog = await getBlogBySlugAndCategory(category, slug);
    if (!blog) return {};

    return {
        title: `${blog.title} | Jarek Olszewski | ${capitalizeWithSpaces(
            category
        )}`,
        description: blog.content.slice(0, 160),
        openGraph: {
            title: blog.title,
            description: blog.content.slice(0, 160),
            images: blog.images?.map(({ src, width, height }) => ({
                url: src,
                width,
                height,
            })),
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.content.slice(0, 160),
            images: blog.images?.map(({ src }) => src),
        },
    };
}

import { getBlogBySlugAndCategory } from "@/lib/getBlogBySlugAndCategory";
import { getRelatedBlogsByCategory } from "@/lib/getRelatedBlogsByCategory";
import BlogList from "@/components/BlogList";
import CTASendMail from "@/components/CTASendMail";

function formatCategoryName(category: string) {
    return category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ category: string; slug: string }>;
}) {
    const awaitedParams = await Promise.resolve(params);
    const { category, slug } = awaitedParams;
    const blog = await getBlogBySlugAndCategory(category, slug);
    if (!blog) return notFound();

    const relatedBlogs = await getRelatedBlogsByCategory(category, slug);
    const htmlContent = marked.parse(blog.content);

    return (
        <>
            <article className="max-w-4xl mx-auto px-1.5 pt-12 w-full anim-opacity">
                <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
                    <p className="text-4xl font-medium mb-4">{blog.title}</p>
                    <p className="text-gray-500 text-sm mb-1">
                        {new Date(blog.date).toLocaleDateString("pl-PL")}
                    </p>
                    <h1 className="text-gray-500 text-sm mb-8">
                        {capitalizeWithSpaces(blog.category)}
                    </h1>

                    <div
                        className="text-lg mb-12 space-y-6 px-3"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                </div>

                {/* Obrazy z frontmattera */}
                {blog.images.length > 0 && (
                    <PhotoSwipeProvider galleryId="#gallery">
                        <BlogGallery images={blog.images} />
                    </PhotoSwipeProvider>
                )}
            </article>

            <div className="flex items-center justify-center text-center flex-col space-y-4 bg-gray-100 py-24 px-6">
                <h2 className="text-2xl animate-pulse">
                    Zrób pierwszy krok do wyjątkowej sesji zdjęciowej!
                </h2>
                <CTASendMail title="Napisz do mnie" />
            </div>

            {relatedBlogs.length > 0 && (
                <section className="max-w-4xl mx-auto px-4 mt-4">
                    <h2 className="text-base lg:text-lg font-light border-y py-2 mb-4 text-center">
                        Więcej z kategorii: {formatCategoryName(blog.category)}
                    </h2>
                    <BlogList blogs={relatedBlogs} columns={2} />
                </section>
            )}
            <div className="pb-20">
                <InviteSocialMedia
                    text="Podziel sie swoja Opinią na"
                    textColor="text-black"
                />
            </div>
        </>
    );
}

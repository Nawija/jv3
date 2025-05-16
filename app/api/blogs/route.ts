import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const paragraphs = JSON.parse(formData.get("paragraphs") as string) as string[];
    const images = formData.getAll("images") as File[];

    const blogDir = path.join(process.cwd(), "content/blogs");
    const imageDir = path.join(process.cwd(), "public/images/blogs");

    await fs.mkdir(blogDir, { recursive: true });
    await fs.mkdir(imageDir, { recursive: true });

    const imageMetadataList: { src: string; width: number; height: number }[] = [];

    for (const image of images) {
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const webpFileName = path.parse(image.name).name + ".webp";
        const webpPath = path.join(imageDir, webpFileName);

        // Konwertuj do WebP ze zmianą rozmiaru
        const resized = sharp(buffer).resize({ width: 1600, withoutEnlargement: true });
        await resized.webp({ quality: 80 }).toFile(webpPath);

        // Pobierz metadane z WebP
        const { width, height } = await resized.metadata();

        imageMetadataList.push({
            src: `/images/blogs/${webpFileName}`,
            width: width || 800,
            height: height || 600,
        });
    }

    const markdown =
        `---\n` +
        `title: "${title}"\n` +
        `slug: "${slug}"\n` +
        `date: "${new Date().toISOString()}"\n` +
        `images:\n` +
        imageMetadataList
            .map(
                ({ src, width, height }) =>
                    `  - src: ${src}\n    width: ${width}\n    height: ${height}`
            )
            .join("\n") +
        `\n---\n\n` +
        paragraphs.map((p) => `${p}\n`).join("\n");

    const mdPath = path.join(blogDir, `${slug}.md`);
    await fs.writeFile(mdPath, markdown, "utf-8");

    return NextResponse.json({ success: true });
}

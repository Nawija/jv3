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
    const blogImageDir = path.join(process.cwd(), "public/Images/blogs", slug); // ✅ slug jako folder

    await fs.mkdir(blogDir, { recursive: true });
    await fs.mkdir(blogImageDir, { recursive: true }); // ✅ osobny folder bloga

    const imageMetadataList: { src: string; width: number; height: number }[] = [];

    for (const image of images) {
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const baseName = path.parse(image.name).name;
        const webpFileName = `${baseName}.webp`;
        const webpPath = path.join(blogImageDir, webpFileName);

        // Konwertuj do WebP
        const resized = sharp(buffer).resize({ width: 1600, withoutEnlargement: true });
        await resized.webp({ quality: 80 }).toFile(webpPath);

        const { width, height } = await resized.metadata();

        imageMetadataList.push({
            src: `/Images/blogs/${slug}/${webpFileName}`, // ✅ z uwzględnieniem folderu
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

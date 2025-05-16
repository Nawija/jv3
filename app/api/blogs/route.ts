import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const title = formData.get("title") as string;
    const slug = formData.get("slug") as string;
    const paragraphs = JSON.parse(
        formData.get("paragraphs") as string
    ) as string[];
    const images = formData.getAll("images") as File[];

    const blogDir = path.join(process.cwd(), "content/blogs");
    const imageDir = path.join(process.cwd(), "public/images/blogs");

    await fs.mkdir(blogDir, { recursive: true });
    await fs.mkdir(imageDir, { recursive: true });

    // Zapisz obrazy

    const savedImagePaths: string[] = [];
    for (const image of images) {
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
    
        // Zmień rozszerzenie pliku na .webp
        const webpFileName = path.parse(image.name).name + ".webp";
        const webpPath = path.join(imageDir, webpFileName);
    
        // Konwertuj do WebP i zapisz
        await sharp(buffer)
            .webp({ quality: 80 }) // możesz ustawić jakość np. 80
            .toFile(webpPath);
    
        savedImagePaths.push(`/images/blogs/${webpFileName}`);
    }

    // Zbuduj markdown
    const markdown =
        `---\n` +
        `title: "${title}"\n` +
        `slug: "${slug}"\n` +
        `date: "${new Date().toISOString()}"\n` +
        `images:\n` +
        savedImagePaths.map((p) => `  - ${p}`).join("\n") +
        `\n---\n\n` +
        paragraphs.map((p) => `${p}\n`).join("\n") +
        `\n`;
    // Zapisz markdown
    const mdPath = path.join(blogDir, `${slug}.md`);
    await fs.writeFile(mdPath, markdown, "utf-8");

    return NextResponse.json({ success: true });
}

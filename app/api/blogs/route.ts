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

        const sharpImage = sharp(buffer);
        const metadata = await sharpImage.metadata();

        // Ustal oryginalne rozszerzenie
        const ext = metadata.format === "jpeg" ? "jpg" : metadata.format;
        const fileName = path.parse(image.name).name + "." + ext;
        const filePath = path.join(imageDir, fileName);

        // Resize tylko jeśli szerokość > 1600
        const resizedImage = metadata.width && metadata.width > 1600
            ? sharpImage.resize({ width: 1600, withoutEnlargement: true })
            : sharpImage;

        // Pobierz metadane po resize
        const { width = 800, height = 600 } = await resizedImage.metadata();

        // Zapisz w oryginalnym formacie
        if (ext === "jpg") {
            await resizedImage.jpeg({ quality: 80 }).toFile(filePath);
        } else if (ext === "png") {
            await resizedImage.png({ compressionLevel: 8 }).toFile(filePath);
        } else {
            // inne formaty zapisz bez zmian
            await fs.writeFile(filePath, buffer);
        }

        imageMetadataList.push({
            src: `/images/blogs/${fileName}`,
            width,
            height,
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

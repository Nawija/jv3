import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

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

        const fileName = image.name;
        const imagePath = path.join(imageDir, fileName);

        // Zapisz obrazek bez zmian
        await fs.writeFile(imagePath, buffer);

        // Jeśli potrzebujesz metadanych, musisz użyć np. sharp tylko do odczytu
        // Ale skoro nie chcesz żadnych przekształceń, możemy to pominąć lub pobrać w inny sposób
        imageMetadataList.push({
            src: `/images/blogs/${fileName}`,
            width: 0, // możesz później uzupełnić lub dodać logikę do pobrania wymiarów
            height: 0,
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

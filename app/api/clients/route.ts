import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    const clientName = formData.get("clientName") as string;
    const slug = formData.get("slug") as string;
    const images = formData.getAll("images") as File[];

    const basePath = path.join(
        process.cwd(),
        "public/Images/strefa-klienta",
        slug
    );
    const metaPath = path.join(process.cwd(), "content/clients", slug);

    await fs.mkdir(basePath, { recursive: true });
    await fs.mkdir(metaPath, { recursive: true });

    const imageList: { src: string; width: number; height: number }[] = [];

    for (const image of images) {
        const arrayBuffer = await image.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const baseName = path.parse(image.name).name;
        const webpFileName = `${baseName}.webp`;
        const webpPath = path.join(basePath, webpFileName);

        const resized = sharp(buffer).resize({
            width: 1600,
            withoutEnlargement: true,
        });

        await resized
            .webp({ quality: 85, effort: 4, smartSubsample: true })
            .toFile(webpPath);

        const { width, height } = await resized.metadata();

        imageList.push({
            src: `/Images/strefa-klienta/${slug}/${webpFileName}`,
            width: width || 800,
            height: height || 600,
        });
    }

    const json = {
        clientName,
        slug,
        date: new Date().toISOString(),
        images: imageList,
    };

    await fs.writeFile(
        path.join(metaPath, "client.json"),
        JSON.stringify(json, null, 2),
        "utf-8"
    );

    return NextResponse.json({ success: true });
}

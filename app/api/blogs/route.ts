import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import slugify from "slugify";

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const title = formData.get("title") as string;
        const slug = formData.get("slug") as string;
        const category = formData.get("category") as string;
        const paragraphs = JSON.parse(
            formData.get("paragraphs") as string
        ) as string[];
        const images = formData.getAll("images") as File[];
        const heroIndexRaw = formData.get("heroIndex") as string;
        const heroIndex = heroIndexRaw ? parseInt(heroIndexRaw, 10) : null;

        if (!title || !slug || !category) {
            return NextResponse.json(
                { error: "Brak wymaganych pól" },
                { status: 400 }
            );
        }

        const normalizedCategory = slugify(category, {
            lower: true,
            strict: true,
            locale: "pl",
        });
        const blogDir = path.join(
            process.cwd(),
            "content/blogs",
            normalizedCategory
        );
        const blogImageDir = path.join(
            process.cwd(),
            "public/Images/blogs",
            normalizedCategory,
            slug
        );

        await fs.mkdir(blogDir, { recursive: true });
        await fs.mkdir(blogImageDir, { recursive: true });

        const imageMetadataList: {
            src: string;
            width: number;
            height: number;
        }[] = [];

        // for (const image of images) {
        //     const arrayBuffer = await image.arrayBuffer();
        //     const buffer = Buffer.from(arrayBuffer);

        //     const baseName = path.parse(image.name).name;
        //     const webpFileName = `${baseName}.webp`;
        //     const webpPath = path.join(blogImageDir, webpFileName);

        //     const resized = sharp(buffer).resize({
        //         width: 1550,
        //         withoutEnlargement: true,
        //     });
        //     // .withMetadata() // zachowuje profil ICC
        //     // .toColorspace("srgb"); // konwersja do sRGB

        //     await resized
        //         .webp({
        //             quality: 75, // dobra równowaga jakość/rozmiar
        //             effort: 4, // dokładniejsza kompresja (czasochłonna)
        //             smartSubsample: false,
        //             nearLossless: false, // lepsze zachowanie szczegółów
        //         })
        //         .toFile(webpPath);

        //     const { width, height } = await resized.metadata();

        //     imageMetadataList.push({
        //         src: `/Images/blogs/${normalizedCategory}/${slug}/${webpFileName}`,
        //         width: width || 1000,
        //         height: height || 800,
        //     });
        // }

        let heroSrc = "";

        for (let i = 0; i < images.length; i++) {
            const image = images[i];
            const arrayBuffer = await image.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const baseName = path.parse(image.name).name;
            const webpFileName = `${baseName}.webp`;
            const webpPath = path.join(blogImageDir, webpFileName);

            const resized = sharp(buffer).resize({
                width: 1200,
                withoutEnlargement: true,
            });

            const outputBuffer = await resized
                .webp({
                    quality: 95,
                    effort: 5,
                    smartSubsample: true,
                    nearLossless: true,
                })
                .toBuffer();

            await sharp(outputBuffer).toFile(webpPath);

            const { width, height } = await sharp(outputBuffer).metadata();

            const src = `/Images/blogs/${normalizedCategory}/${slug}/${webpFileName}`;
            imageMetadataList.push({
                src,
                width: width || 1300,
                height: height || 1000,
            });

            if (heroIndex === i) {
                heroSrc = src;
            }
        }

        // Fallback jeśli nie wybrano hero
        if (!heroSrc && imageMetadataList.length > 0) {
            heroSrc = imageMetadataList[0].src;
        }

        const markdown =
            `---\n` +
            `title: "${title}"\n` +
            `slug: "${slug}"\n` +
            `category: "${normalizedCategory}"\n` +
            `date: "${new Date().toISOString()}"\n` +
            `image: "${heroSrc}"\n` +
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
    } catch (error) {
        console.error("Błąd zapisu bloga:", error);
        return NextResponse.json(
            { error: "Wewnętrzny błąd serwera" },
            { status: 500 }
        );
    }
}

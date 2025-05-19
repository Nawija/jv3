import fs from "fs/promises";
import path from "path";
import Image from "next/image";

export default async function ClientGalleryPage({
    params,
}: {
    params: { slug: string };
}) {
    const slug = params.slug;
    const folderPath = path.join(
        process.cwd(),
        "public/Images/strefa-klienta",
        slug
    );

    let files: string[] = [];

    try {
        files = await fs.readdir(folderPath);
    } catch {
        return <p className="text-center p-10">Brak zdjęć dla tego klienta.</p>;
    }

    if (files.length === 0) {
        return <p className="text-center p-10">Brak zdjęć dla tego klienta.</p>;
    }

    const [heroImage, ...restImages] = files;

    return (
        <>
            <div className="w-full h-[100vh] relative">
                <Image
                    src={`/Images/strefa-klienta/${slug}/${heroImage}`}
                    alt={heroImage}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                />
                <div className="bg-black/70 absolute inset-0 z-10" />
            </div>

            <div className="p-4"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 px-2">
                {restImages.map((file) => (
                    <Image
                        key={file}
                        src={`/Images/strefa-klienta/${slug}/${file}`}
                        alt={file}
                        width={500}
                        height={500}
                        className="object-cover"
                    />
                ))}
            </div>
        </>
    );
}

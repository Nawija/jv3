// app/klienci/[slug]/page.tsx
import { CLIENTS } from "@/constants/clients";
import Galeria from "./Galeria";
import PasswordForm from "./PasswordForm";
import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ password?: string }>;
}

interface ImageItem {
    publicId: string;
    url: string;
    width: number;
    height: number;
}

interface CloudinaryResource {
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
}

interface CloudinaryResponse {
    resources: CloudinaryResource[];
}

export default async function GaleriaKlienta({ params, searchParams }: Props) {
    const awaitedParams = await Promise.resolve(params);
    const { slug } = awaitedParams;

    const client = CLIENTS.find((c) => c.slug === slug);
    if (!client) return notFound();

    const awaitedSearchParams = await Promise.resolve(searchParams);
    const isAuth = awaitedSearchParams.password === client.password;

    if (!isAuth) {
        return <PasswordForm name={client.name} />;
    }

    // Pobieranie zdjęć z Cloudinary
    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search`,
        {
            method: "POST",
            headers: {
                Authorization:
                    "Basic " +
                    Buffer.from(
                        `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
                    ).toString("base64"),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                expression: `folder="${client.cloudinaryFolder}"`,
                max_results: 100,
            }),
        }
    );

    if (!res.ok) {
        return <div>Błąd podczas pobierania zdjęć.</div>;
    }

    const data: CloudinaryResponse = await res.json();
    const images: ImageItem[] =
        data.resources?.map(
            (img): ImageItem => ({
                publicId: img.public_id,
                url: img.secure_url,
                width: img.width,
                height: img.height,
            })
        ) || [];

    // console.log(data.resources);

    return (
        <Galeria
            name={client.name}
            heroTitle={client.heroTitle}
            heroImage={client.hero}
            images={images}
        />
    );
}

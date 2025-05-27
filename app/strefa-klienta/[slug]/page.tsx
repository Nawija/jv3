// app/klienci/[slug]/page.tsx
import { CLIENTS } from "@/constants/clients";
import Galeria from "./Galeria";
import PasswordForm from "./PasswordForm";
import { notFound } from "next/navigation";
import { Metadata } from "next";

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

const pageTitle = "Strefa Klienta | Jarek Olszewski";
const pageDescription =
    "Strefa Klienta to miejsce, w którym uzyskasz dostęp do swojej prywatnej galerii zdjęć. Wprowadź unikalne hasło, aby bezpiecznie przeglądać fotografie z Twojej sesji wykonanej przez Jarka Olszewskiego.";

const heroImage = "/Images/home/fotograf-siedlce-jarek-olszewski.webp";

export const metadata: Metadata = {
    alternates: {
        canonical:
            "https://www.jarekolszewski.pl/regulamin-i-polityka-prywatnoci",
    },
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        images: [
            {
                url: heroImage,
                width: 900,
                height: 900,
                alt: pageTitle,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: [heroImage],
    },
};

export default async function GaleriaKlienta({ params, searchParams }: Props) {
    const awaitedParams = await Promise.resolve(params);
    const { slug } = awaitedParams;

    const client = CLIENTS.find((c) => c.slug === slug);
    if (!client) return notFound();

    const awaitedSearchParams = await Promise.resolve(searchParams);
    const isAuth = awaitedSearchParams.password === client.password;

    if (!isAuth) {
        const isPasswordProvided = !!awaitedSearchParams.password;
        return (
            <PasswordForm
                name={client.name}
                wrongPassword={isPasswordProvided}
            />
        );
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

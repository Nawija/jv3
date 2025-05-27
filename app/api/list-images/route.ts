// app/api/list-images/route.ts
import { NextRequest, NextResponse } from "next/server";

interface CloudinaryResource {
    public_id: string;
    folder: string;
}

interface CloudinaryResponse {
    resources: CloudinaryResource[];
}

export async function GET(req: NextRequest) {
    const folder = req.nextUrl.searchParams.get("folder");

    if (!folder) {
        return NextResponse.json({ error: "Brak folderu" }, { status: 400 });
    }

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
        {
            method: "GET",
            headers: {
                Authorization:
                    "Basic " +
                    Buffer.from(
                        `${process.env.CLOUDINARY_API_KEY}:${process.env.CLOUDINARY_API_SECRET}`
                    ).toString("base64"),
            },
        }
    );

    const data: CloudinaryResponse = await res.json();

    const images = data.resources
        .filter((img) => img.folder === folder)
        .map((img) => img.public_id);

    return NextResponse.json({ images });
}

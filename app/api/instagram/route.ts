// app/api/instagram/route.ts
import { NextResponse } from "next/server";

const ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN!;
const IG_USER_ID = process.env.INSTAGRAM_USER_ID!;

export async function GET() {
    const limit = 6;

    const fields = "media_url,permalink,thumbnail_url,media_type";
    const url = `https://graph.instagram.com/${IG_USER_ID}/media?fields=${fields}&access_token=${ACCESS_TOKEN}&limit=${limit}`;

    try {
        const res = await fetch(url, { next: { revalidate: 3600 } }); // cache na 1h
        if (!res.ok) {
            return NextResponse.json(
                { error: "Failed to fetch Instagram data" },
                { status: 500 }
            );
        }

        const data = await res.json();
        const filtered = data.data
            .filter(
                (item: any) =>
                    item.media_type === "IMAGE" ||
                    item.media_type === "CAROUSEL_ALBUM"
            )
            .slice(0, limit);

        return NextResponse.json(filtered);
    } catch (error) {
        console.error("Instagram API error:", error);
        return NextResponse.json(
            { error: "Unexpected error" },
            { status: 500 }
        );
    }
}

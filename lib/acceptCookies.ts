"use server";

import { cookies } from "next/headers";

export async function acceptCookies() {
    const cookieStore = await cookies();
    cookieStore.set({
        name: "cookies-accepted",
        value: "true",
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 rok
        sameSite: "lax",
    });
}

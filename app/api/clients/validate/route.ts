import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
    const { password } = await req.json();

    const clientsDir = path.join(process.cwd(), "content/clients");
    const clientFolders = await fs.readdir(clientsDir);

    for (const folder of clientFolders) {
        const jsonPath = path.join(clientsDir, folder, "client.json");

        try {
            const jsonData = await fs.readFile(jsonPath, "utf-8");
            const client = JSON.parse(jsonData);

            if (client.password === password) {
                return NextResponse.json({ slug: client.slug });
            }
        } catch (err) {
            console.error("Błąd odczytu:", jsonPath, err);
        }
    }

    return new NextResponse("Unauthorized", { status: 401 });
}

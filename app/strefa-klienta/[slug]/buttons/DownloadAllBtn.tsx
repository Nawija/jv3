"use client";

import JSZip from "jszip";
import { saveAs } from "file-saver";
import { useState } from "react";
import { GoDownload } from "react-icons/go";

type ImageData = {
    url: string;
    publicId: string;
};

function SpinerLoading() {
    return (
        <div className="h-4 w-4 border-t rounded-full border-blue-500 animate-spin" />
    );
}

export default function DownloadAllBtn({
    images,
    asZip = true,
}: {
    images: ImageData[];
    asZip?: boolean;
}) {
    const [loading, setLoading] = useState(false);

    const handleDownload = async () => {
        if (!images || images.length === 0) return;

        if (asZip) {
            try {
                setLoading(true);
                const zip = new JSZip();

                for (const { url, publicId } of images) {
                    const response = await fetch(url);
                    const blob = await response.blob();
                    const fileExtension =
                        url.split(".").pop()?.split("?")[0] || "jpg";
                    zip.file(`${publicId}.${fileExtension}`, blob);
                }

                const content = await zip.generateAsync({ type: "blob" });
                saveAs(content, "galeria.zip");
            } catch (error) {
                console.error("Błąd podczas tworzenia ZIP:", error);
            } finally {
                setLoading(false);
            }
        } else {
            // otwórz każde zdjęcie w nowej karcie (uwaga na blokady popupów!)
            for (const { url } of images) {
                window.open(url, "_blank");
            }
        }
    };

    return (
        <button
            onClick={handleDownload}
            className="text-2xl text-gray-600 hover:text-black transition-colors duration-300"
            title={asZip ? "Pobierz jako ZIP" : "Otwórz wszystkie zdjęcia"}
        >
            {loading ? <SpinerLoading /> : <GoDownload />}
        </button>
    );
}

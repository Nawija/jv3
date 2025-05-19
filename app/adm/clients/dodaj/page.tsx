"use client";
import { useState } from "react";
import slugify from "slugify";

export default function AddClientGalleryPage() {
    const [clientName, setClientName] = useState("");
    const [password, setPassword] = useState("");
    const [images, setImages] = useState<File[]>([]);
    const [isSaving, setIsSaving] = useState(false);

    const normalizeSlug = (text: string) =>
        slugify(text, { lower: true, strict: true, locale: "pl" });

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImages([...images, ...Array.from(e.target.files)]);
        }
    };

    const handleSave = async () => {
        setIsSaving(true);
        const slug = normalizeSlug(clientName);
        const formData = new FormData();

        formData.append("clientName", clientName);
        formData.append("slug", slug);
        formData.append("password", password);
        images.forEach((img) => formData.append("images", img));

        const res = await fetch("/api/clients", {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            alert("Zapisano galerię klienta!");
            setClientName("");
            setPassword("");
            setImages([]);
        } else {
            alert("Błąd zapisu");
        }

        setIsSaving(false);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Dodaj galerię klienta</h1>

            <input
                type="text"
                placeholder="Imię lub para młoda (np. Ania i Tomek)"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full p-3 border mb-4 rounded"
            />

            <input
                type="text"
                placeholder="Hasło dostępu do galerii"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border mb-4 rounded"
            />

            <div className="mt-6">
                <label className="block mb-2 font-medium">Dodaj zdjęcia:</label>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                />

                {images.length > 0 && (
                    <ul className="mt-4 list-disc pl-5 text-sm text-gray-700">
                        {images.map((img, i) => (
                            <li key={i}>{img.name}</li>
                        ))}
                    </ul>
                )}
            </div>

            <button
                onClick={handleSave}
                disabled={isSaving}
                className="mt-8 px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
            >
                {isSaving ? "Zapisuję..." : "Zapisz"}
            </button>
        </div>
    );
}

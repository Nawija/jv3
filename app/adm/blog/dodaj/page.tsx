"use client";

import { useState } from "react";
import slugify from "slugify";
import { Trash2, Plus } from "lucide-react";

export default function AddBlogPage() {
  const [title, setTitle] = useState("");
  const [paragraphs, setParagraphs] = useState<string[]>([""]);
  const [images, setImages] = useState<File[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  const handleAddParagraph = () => setParagraphs([...paragraphs, ""]);

  const handleRemoveParagraph = (index: number) => {
    setParagraphs(paragraphs.filter((_, i) => i !== index));
  };

  const handleParagraphChange = (index: number, value: string) => {
    const updated = [...paragraphs];
    updated[index] = value;
    setParagraphs(updated);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const normalizeSlug = (text: string) =>
    slugify(text, { lower: true, strict: true, locale: "pl" });

  const handleSave = async () => {
    setIsSaving(true);
    const slug = normalizeSlug(title);
    const formData = new FormData();

    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("paragraphs", JSON.stringify(paragraphs));
    images.forEach((img) => formData.append("images", img));

    const res = await fetch("/api/blogs", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Zapisano wpis i obrazy!");
      setTitle("");
      setParagraphs([""]);
      setImages([]);
    } else {
      alert("Błąd zapisu");
    }

    setIsSaving(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dodaj nowy wpis na bloga</h1>

      <input
        type="text"
        placeholder="Tytuł wpisu (H1)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-3 border mb-4 rounded"
      />

      <div className="space-y-4">
        {paragraphs.map((para, index) => (
          <div key={index} className="flex gap-2">
            <textarea
              value={para}
              onChange={(e) => handleParagraphChange(index, e.target.value)}
              placeholder={`Paragraf ${index + 1}`}
              className="w-full p-2 border rounded"
              rows={3}
            />
            <button
              onClick={() => handleRemoveParagraph(index)}
              className="text-red-500 hover:text-red-700"
              title="Usuń paragraf"
            >
              <Trash2 />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={handleAddParagraph}
        className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-800"
      >
        <Plus /> Dodaj paragraf
      </button>

      <div className="mt-6">
        <label className="block mb-2 font-medium">Dodaj zdjęcia (możesz wiele na raz):</label>
        <input type="file" multiple accept="image/*" onChange={handleImageUpload} />

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

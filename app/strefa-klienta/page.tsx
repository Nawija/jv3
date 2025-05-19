"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ClientLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/clients/validate", {
      method: "POST",
      body: JSON.stringify({ password }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const { slug } = await res.json();
      router.push(`/strefa-klienta/${slug}`);
    } else {
      setError("Niepoprawne hasło");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Strefa klienta</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Wpisz hasło"
          className="w-full p-3 border rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded"
        >
          Zaloguj
        </button>
      </form>
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}

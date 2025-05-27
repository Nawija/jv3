"use client";

import { useState } from "react";

export default function PasswordForm({
    name,
    wrongPassword = false,
}: {
    name: string;
    wrongPassword?: boolean;
}) {
    const [password, setPassword] = useState("");

    return (
        <form
            method="GET"
            className="mx-auto mt-64 lg:mt-72 h-[100vh] space-y-4 px-6"
        >
            <div className="absolute inset-0 h-full w-full -z-10">
                <img
                    src="https://cdn.pixabay.com/photo/2020/06/08/15/06/nature-5274742_1280.jpg"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80 w-full h-full z-10" />
            </div>

            <div className="text-white space-y-6">
                <div>
                    <h1 className="text-xl font-normal text-center mb-1">
                        Galeria:
                    </h1>
                    <p className="text-4xl md:text-8xl font-semibold text-center">{name}</p>
                </div>

                <div className="max-w-80 mx-auto space-y-4">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Wpisz hasło"
                        className="w-full border px-3 py-2 text-lg text-black"
                    />

                    {wrongPassword && (
                        <p className="text-red-400 text-sm text-center">
                            ❌ Niepoprawne hasło. Spróbuj ponownie.
                        </p>
                    )}

                    <button
                        type="submit"
                        className="w-full border border-white font-medium uppercase hover:bg-white/80 hover:text-black transition-colors duration-300 text-white py-2"
                    >
                        Otwórz galerię
                    </button>
                </div>
            </div>
        </form>
    );
}

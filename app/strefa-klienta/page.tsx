"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CLIENTS } from "@/constants/clients";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function StrefaKlientaStart() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const clientsWithPasswords = CLIENTS.filter(c => !!c.password);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const client = clientsWithPasswords.find((c) => c.password === password);
        if (client) {
            router.push(`/strefa-klienta/${client.slug}?password=${password}`);
        } else {
            setError(true);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-start justify-center bg-gradient-to-b from-white to-violet-50 px-4"
        >
            <motion.form
                onSubmit={handleSubmit}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full max-w-md bg-white text-zinc-800 mt-20 rounded-sm border border-zinc-200 px-8 py-10 shadow-xl"
            >
                <div className="flex flex-col items-center text-center mb-8">
                    <Lock className="w-12 h-12 text-brand mb-4" />
                    <h1 className="text-3xl font-bold tracking-tight">
                        Strefa Klienta
                    </h1>
                    <p className="text-sm text-zinc-500 mt-2">
                        Wprowadź hasło, aby uzyskać dostęp do swojej galerii
                    </p>
                </div>

                <div className="flex flex-col space-y-2 mb-6">
                    <label
                        htmlFor="password"
                        className="text-sm text-zinc-600 tracking-wide"
                    >
                        Hasło
                    </label>

                    <input
                        id="password"
                        type="password"
                        placeholder="wpisz hasło"
                        value={password}
                        onChange={(e) => {
                            setError(false);
                            setPassword(e.target.value);
                        }}
                        className="w-full bg-zinc-100 border border-zinc-300 text-zinc-800 px-4 py-3 focus:outline-none focus:border-brand focus:ring-0 tracking-wide"
                    />
                </div>

                {error && (
                    <motion.p
                        className="text-sm text-red-500 mb-6 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        Nieprawidłowe hasło. Spróbuj ponownie.
                    </motion.p>
                )}

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Button
                        type="submit"
                        disabled={clientsWithPasswords.length === 0}
                        className="w-full bg-brand hover:bg-brand-nav shadow-lg text-white px-6 py-3 font-semibold tracking-wide transition uppercase"
                    >
                        {clientsWithPasswords.length === 0
                            ? "Brak dostępnych galerii"
                            : "Zaloguj się"}
                    </Button>
                </motion.div>
            </motion.form>
        </motion.div>
    );
}

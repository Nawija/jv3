import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                main: "#6e2a23",
                brand: {
                    DEFAULT: "#6e2a23", // główny kolor (np. przyciski, nagłówki)
                    hover: "#5c201a", // ciemniejszy odcień do hovera
                    light: "#874139", // jaśniejszy wariant np. do tła
                    soft: "#f7ebe9", // bardzo jasny do kart, sekcji
                },
            },
        },
    },
    plugins: [],
} satisfies Config;

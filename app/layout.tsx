import type { Metadata } from "next";
import { Geist, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Header/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const bebasNeue = Bebas_Neue({
    variable: "--font-bebas-neue",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Fotograf Siedlce: Fotografia Ślubna i Artystyczna, Foto",
    description:
        "Fotograf Siedlce: Jarek Olszewski fotografia ślubna i reportaże. Najlepszy fotograf ślubny w Siedlcach. Zobacz portfolio i zamów sesję!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <body
                className={`${geistSans.variable} ${bebasNeue.variable} flex flex-col min-h-screen w-full font-light antialiased`}
            >
                <Nav />
                <main className="flex-1 w-full overflow-x-hidden relative">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}

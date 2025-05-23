import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Header/Nav";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SeoHead from "@/components/SeoHead";
import Messenger from "@/components/Messenger";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    openGraph: {
        url: "https://jv3.vercel.app/",
        siteName: "Jarek Olszewski - Fotograf",
        locale: "pl_PL",
        type: "website",
    },
    
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pl">
            <head>
                <SeoHead />
            </head>
            <body
                className={`flex flex-col min-h-screen w-full font-light antialiased ${geistSans.className}`}
            >
                {/* <IntroOverlay /> */}
                <Nav />
                <main className="flex-1 w-full overflow-x-hidden relative min-h-[90vh]">
                    {children}
                </main>
                <Messenger />
                <ScrollToTopButton />
                <Footer />
            </body>
        </html>
    );
}

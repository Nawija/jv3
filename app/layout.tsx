import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Header/Nav";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Fotograf Siedlce: Fotografia Ślubna i Artystyczna, Foto",
    description:
        "Fotograf Siedlce: Jarek Olszewski fotografia ślubna i reportaże. Najlepszy fotograf ślubny w Siedlcach. Zobacz portfolio i zamów sesję!",
    openGraph: {
        title: "Fotograf Siedlce: Fotografia Ślubna i Artystyczna, Foto",
        description:
            "Fotograf Siedlce: Jarek Olszewski fotografia ślubna i reportaże. Najlepszy fotograf ślubny w Siedlcach. Zobacz portfolio i zamów sesję!",
        url: "https://jv3.vercel.app/",
        siteName: "Jarek Olszewski - Fotograf",
        images: [
            {
                url: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
                width: 1200,
                height: 630,
                alt: "Fotografia ślubna - Jarek Olszewski",
            },
        ],
        locale: "pl_PL",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fotograf Siedlce: Fotografia Ślubna i Artystyczna, Foto",
        description:
            "Fotograf Siedlce: Jarek Olszewski fotografia ślubna i reportaże. Najlepszy fotograf ślubny w Siedlcach. Zobacz portfolio i zamów sesję!",
        images: ["/Images/fotograf-siedlce-jarek-olszewski.jpg"],
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
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="canonical" href="https://jv3.vercel.app/" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="Jarek Olszewski" />
                <meta name="copyright" content="© 2025 Jarek Olszewski" />

                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="icon" type="image/svg+xml" href="/icon.svg" />
                <link
                    rel="apple-touch-icon"
                    href="/icons/apple-touch-icon.png"
                />

                <script type="application/ld+json">
                    {`
    {
      "@context": "https://schema.org",
      "@type": "Photograph",
      "name": "Jarek Olszewski - Fotograf Siedlce",
      "image": "https://jv3.vercel.app/Images/fotograf-siedlce-jarek-olszewski.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Siedlce",
        "addressCountry": "PL"
      },
      "url": "https://jv3.vercel.app/"
    }
    `}
                </script>
            </head>
            <body className="flex flex-col min-h-screen w-full font-light antialiased">
                {/* <IntroOverlay /> */}
                <Nav />
                <main
                    className={`${geistSans.className} flex-1 w-full overflow-x-hidden relative min-h-[90vh]`}
                >
                    {children}
                </main>
                <ScrollToTopButton />
                <Footer />
            </body>
        </html>
    );
}

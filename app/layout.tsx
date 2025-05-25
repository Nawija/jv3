import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Header/Nav";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SeoHead from "@/components/SeoHead";
import Messenger from "@/components/Messenger";
// import { cookies } from "next/headers";
// import FacebookPixel from "@/lib/FacebookPixel";
import CookieBanner from "@/components/CookieBanner";
import IntroOverlay from "@/components/IntroOverlay";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://jv3.vercel.app"),
    keywords: [
        "fotograf Siedlce",
        "fotografia ślubna",
        "fotograf ślubny",
        "sesja narzeczeńska",
        "reportaż ślubny",
        "Jarek Olszewski",
        "fotograf artystyczny",
        "fotograf warszawa",
    ],
    openGraph: {
        url: "https://jv3.vercel.app/",
        siteName: "Jarek Olszewski - Fotograf",
        locale: "pl_PL",
        type: "website",
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // const cookieStore = await cookies();
    // const cookiesAccepted =
    //     cookieStore.get("cookies-accepted")?.value === "true";
    return (
        <html lang="pl">
            <head>
                <SeoHead />
                <link
                    rel="preload"
                    href="/_next/static/media/569ce4b8f30dc480-s.p.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
            </head>
            <body
                className={`flex flex-col min-h-screen w-full font-light antialiased ${geistSans.className}`}
            >
                <NextTopLoader
                    color="#be3d29ee"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={false}
                    easing="ease"
                    speed={200}
                    shadow="0 0 25px #be3d29ee,0 0 15px #e4440a"
                    zIndex={1600}
                    showAtBottom={false}
                />
                <IntroOverlay />
                <Nav />
                <main className="flex-1 w-full overflow-x-hidden relative min-h-[90vh]">
                    {children}
                </main>
                {/* {cookiesAccepted && <FacebookPixel />} */}
                {/* {cookiesAccepted && <CookieBanner />} */}
                <CookieBanner />
                <Messenger />
                <ScrollToTopButton />
                <Footer />
            </body>
        </html>
    );
}

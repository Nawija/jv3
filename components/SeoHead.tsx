import Head from "next/head";

export default function SeoHead() {
    return (
        <Head>
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
            <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Photograph",
                        name: "Jarek Olszewski - Fotograf Siedlce",
                        image: "https://jv3.vercel.app/Images/fotograf-siedlce-jarek-olszewski.jpg",
                        address: {
                            "@type": "PostalAddress",
                            addressLocality: "Siedlce",
                            addressCountry: "PL",
                        },
                        url: "https://jv3.vercel.app/",
                    }),
                }}
            />
        </Head>
    );
}

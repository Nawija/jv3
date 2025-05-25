import Script from "next/script";

export default function SeoHead() {
    return (
        <>
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Jarek Olszewski" />
            <meta name="copyright" content="© 2025 Jarek Olszewski" />
            <meta
                name="google-site-verification"
                content="RL-Vh9Gly9vqZ4gHuFh10_tKCUU3J7DGBBOsvMxZKG0"
            />
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Photographer",
                    name: "Jarek Olszewski",
                    url: "https://jv3.vercel.app",
                    image: "https://jv3.vercel.app/Images/fotograf-siedlce-jarek-olszewski.jpg",
                    description:
                        "Fotograf ślubny w Siedlcach - Jarek Olszewski.",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Siedlce",
                        addressCountry: "PL",
                    },
                })}
            </script>
            <Script id="facebook-pixel" strategy="afterInteractive">
                {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'TWOJE_PIXEL_ID'); 
            fbq('track', 'PageView');
          `}
            </Script>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=TWOJE_PIXEL_ID&ev=PageView&noscript=1"
                />
            </noscript>
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: "none" }}
                    src="https://www.facebook.com/tr?id=TWÓJ_PIXEL_ID&ev=PageView&noscript=1"
                />
            </noscript>
        </>
    );
}

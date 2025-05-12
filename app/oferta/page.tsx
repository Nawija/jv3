import Link from "next/link";
import Gallery from "./_components/Gallery";
import path from "path";
import fs from "fs";
import CTASendMail from "@/components/CTASendMail";

export default async function OffertsPage() {
    const dirPath = path.join(process.cwd(), "public/Images/Oferta");
    const files = fs.readdirSync(dirPath);

    const allImages = files
        .filter((file) => /\.(jpe?g|png|webp)$/i.test(file))
        .map((file) => {
            const imagePath = `/Images/Oferta/${file}`;
            return {
                responsiveImage: {
                    src: imagePath,
                    width: 1000,
                    height: 667,
                },
            };
        });

    return (
        <>
            <div className="bg-stone-100 py-12 px-4 sm:px-6 lg:px-8">
                <section className="max-w-screen-md mx-auto space-y-8 anim-opacity text-stone-800 px-4">
                    <h1 className="text-4xl font-bold text-center leading-tight">
                        Profesjonalny Fotograf Siedlce
                    </h1>

                    <p className="text-lg text-center max-w-2xl mx-auto">
                        Szukasz fotografa w Siedlcach, który uwieczni Twoje
                        chwile w sposób naturalny i ponadczasowy? Oferuję
                        kompleksową obsługę fotograficzną dostosowaną do Twoich
                        potrzeb – z pasją, precyzją i doświadczeniem.
                    </p>

                    <div className="grid gap-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-semibold text-center mb-4">
                                Dlaczego warto wybrać mnie?
                            </h2>
                            <ul className="space-y-3 pl-4">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 text-xl">
                                        •
                                    </span>
                                    <span>
                                        <strong>Indywidualne podejście</strong>{" "}
                                        – każda sesja i oferta jest szyta na
                                        miarę Twoich oczekiwań.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 text-xl">
                                        •
                                    </span>
                                    <span>
                                        <strong>Fotografuję osobiście</strong> –
                                        z użyciem profesjonalnego sprzętu i
                                        pasją do detali.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 text-xl">
                                        •
                                    </span>
                                    <span>
                                        <strong>Naturalna obróbka zdjęć</strong>{" "}
                                        – podkreślam kolory i emocje, bez
                                        sztuczności.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 text-xl">
                                        •
                                    </span>
                                    <span>
                                        <strong>
                                            Zdjęcia w wersji cyfrowej
                                        </strong>{" "}
                                        – pliki w wysokiej rozdzielczości, na
                                        USB lub online.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 text-xl">
                                        •
                                    </span>
                                    <span>
                                        <strong>Foto produkty premium</strong> –
                                        fotoalbumy, odbitki, fotoksiążki, obrazy
                                        na płótnie.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 text-xl">
                                        •
                                    </span>
                                    <span>
                                        <strong>
                                            Spersonalizowane opakowania
                                        </strong>{" "}
                                        – stylowe pudełka na zdjęcia i nośniki.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 text-xl">
                                        •
                                    </span>
                                    <span>
                                        <strong>Prywatna galeria online</strong>{" "}
                                        – łatwe i bezpieczne udostępnianie zdjęć
                                        bliskim.
                                    </span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 text-xl">
                                        •
                                    </span>
                                    <span>
                                        <strong>Szybka realizacja</strong> –
                                        sprawna i terminowa dostawa gotowych
                                        materiałów.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-2 mx-auto text-center">
                            <h3 className="text-xl font-semibold ">
                                Pakiety fotografii:
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/"
                                    className="px-4 py-2 bg-red-100 font-semibold border border-red-200 text-red-800 text-sm hover:bg-red-200 transition"
                                >
                                    Oferta ślubna
                                </Link>
                                <Link
                                    href="/"
                                    className="px-4 py-2 bg-red-100 font-semibold border border-red-200 text-red-800 text-sm hover:bg-red-200 transition"
                                >
                                    Oferta chrztu
                                </Link>
                            </div>
                        </div>

                        <div className="text-center pt-4">
                            <p className="text-lg max-w-2xl mx-auto">
                                Jako <strong>Fotograf</strong> pomagam
                                uwieczniać najważniejsze chwile życia w formie
                                fotografii, która ma wartość nie tylko dziś, ale
                                i po latach. Zajrzyj do galerii i przekonaj się
                                sam!
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="max-w-screen-lg mx-auto ">
                <Gallery allImages={allImages} />
            </div>
            <div className="text-center my-12">
                <CTASendMail title="Zapytaj o Ofertę" />
            </div>
        </>
    );
}

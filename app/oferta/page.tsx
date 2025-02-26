import Link from "next/link";
import { performRequest } from "@/lib/datoCms";
import Gallery from "./_components/Gallery";
import { SecondBtn } from "@/components/Buttons/SecondBtn";

const PAGE_CONTENT_QUERY = `
{
  allGalers {
    img {
      responsiveImage {
        webpSrcSet
        width
        height
        base64
        src
      }
    }
  }
}`;

type GalleryType = {
    img: {
        url: string;
        height: number;
        width: number;
    };
};

export default async function OffertsPage() {
    const {
        data: { allGalers },
    } = await performRequest({ query: PAGE_CONTENT_QUERY });

    const allImages = allGalers.flatMap((gallery: GalleryType) => gallery.img);

    return (
        <>
            <div className="bg-stone-100 py-12 px-4 sm:px-6 lg:px-8">
                <section className="max-w-screen-md mx-auto space-y-4 anim-opacity">
                    <h1 className="text-2xl text-center">
                        Co z czym i dlaczego
                    </h1>
                    <p className="text-center">
                        Oferując swoje usługi, moim celem jest obsłużenie Was
                        kompleksowo. Tworząc ofertę wychodzę z założenia że musi
                        być taka jaką sam chciałbym otrzymać. Konstruuję ją
                        indywidualnie, uwzględniając wszystkie Wasze potrzeby,
                        angażując Was w przygotowaniach materiałów
                    </p>
                    <h2>Co oferuję:</h2>
                    <ul className="list-disc space-y-4 pl-5">
                        {" "}
                        {/* Dodaj padding dla lepszego wyglądu */}
                        <li>
                            Fotografuję osobiście - wkładając całą zdobytą
                            wiedzę i doświadczenie, by zapewnić jak najlepsze
                            zdjęcia, używając przy tym wysokiej klasy sprzętu,
                            który sprosta największym wymaganiom.
                        </li>
                        <li>
                            Zdjęcia poddane autorskiej obróbce - naturalne i
                            prawdziwe kolory, a przez to ponadczasowe.
                        </li>
                        <li>
                            Fotografie w wersji elektronicznej - pliki zdjęciowe
                            w wysokiej rozdzielczości przekazane na nośnikach
                            danych (USB, CD) bądź udostępnione w sieci do
                            pobrania.
                        </li>
                        <li>
                            Fotografie w oprawie tradycyjnej - wysokiej jakości
                            foto produkty od sprawdzonych dostawców: fotoalbumy
                            | fotoksiążki | albumy tradycyjne | odbitki cyfrowe
                            | fotoobrazy | zdjęcia na płótnie | fotogadżety.
                        </li>
                        <li>
                            Spersonalizowane opakowania na zdjęcia i nośniki
                            danych.
                        </li>
                        <li>
                            Galeria internetowa - Wasze zdjęcia dla każdego,
                            komu zechcecie się nimi pochwalić.
                        </li>
                        <li>
                            Wszystkie materiały, które otrzymujecie, są
                            przygotowywane indywidualnie i konsultowane z Wami.
                        </li>
                        <li>Szybki termin realizacji.</li>
                    </ul>
                    <div className="flex md:flex-row flex-col items-start lg:items-center justify-center lg:justify-start lg:space-x-2 space-y-1 lg:space-y-0">
                        <h3>Przykładowe oferty:</h3>
                        <Link href="/" className="text-red-700">
                            Oferta ślubna
                        </Link>
                        <Link href="/" className="text-red-700">
                            Oferta chrztu
                        </Link>
                    </div>
                </section>
            </div>
            <div className="max-w-screen-lg mx-auto ">
                <Gallery allImages={allImages} />
            </div>
            <div className="text-center my-12">
                <SecondBtn className="uppercase">
                    Zapytaj o ofertę dla twojego pomysłu na zdjęcia
                </SecondBtn>
            </div>
        </>
    );
}

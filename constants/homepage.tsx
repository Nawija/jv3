import LinkShare from "@/components/ui/LinkShare";
import { ReactNode } from "react";

type Section = {
    title: string;
    content: ReactNode;
};

export const TEXT_SECTIONS: Section[] = [
    {
        title: "Cześć! Nazywam się Jarek Olszewski",
        content: (
            <>
                Jestem <strong>fotografem ślubnym z Siedlec</strong>, a moją
                największą pasją jest opowiadanie historii za pomocą zdjęć.
                Uwieczniam emocje, wzruszenia i najpiękniejsze chwile w Waszym
                życiu. W moim <strong>portfolio</strong> znajdziesz{" "}
                <strong>reportaże ślubne</strong>,{" "}
                <strong>sesje narzeczeńskie</strong>,{" "}
                <strong>zdjęcia z chrztu</strong>, <strong>komunii</strong>, a
                także <strong>plenerowe sesje rodzinne</strong>.
            </>
        ),
    },
    {
        title: "Dlaczego warto mi zaufać jako fotografowi?",
        content: (
            <>
                Szukasz kogoś, kto <strong>z dyskrecją i wyczuciem</strong>{" "}
                uchwyci ulotne momenty Twojego <strong>ślubu</strong>? Jako{" "}
                <strong>fotograf ślubny z Siedlec</strong> tworzę zdjęcia z
                sercem i pasją, oferując <strong>pakiety dopasowane</strong> do
                różnych potrzeb. Realizuję też{" "}
                <strong>sesje noworodkowe</strong>, <strong>rodzinne</strong>{" "}
                oraz <strong>plenerowe</strong>. Klienci doceniają mnie za{" "}
                <strong>naturalny styl</strong>, <strong>profesjonalizm</strong>{" "}
                i zaangażowanie – często słyszę, że jestem{" "}
                <strong>najlepszym fotografem w Siedlcach</strong>. To ogromna
                motywacja!
            </>
        ),
    },
    {
        title: "Fotografia ślubna – moja filozofia",
        content: (
            <>
                Dla mnie <strong>fotografia ślubna</strong> to nie tylko zdjęcia
                – to sposób opowiedzenia Waszej historii. Każdy{" "}
                <strong>reportaż</strong> tworzę indywidualnie – z uwagą,
                empatią i wyczuciem detali. Od porannych przygotowań, przez
                wzruszającą ceremonię, aż po szaloną zabawę – jestem tam, by
                złapać wszystko, co najpiękniejsze. Realizuję także{" "}
                <strong>sesje narzeczeńskie</strong>,{" "}
                <strong>plenery ślubne</strong> i{" "}
                <strong>reportaże rodzinne</strong>.
            </>
        ),
    },
    {
        title: "Portfolio – zobacz moje zdjęcia",
        content: (
            <>
                Chcesz zobaczyć, jak pracuję? Odwiedź moje{" "}
                <LinkShare href="/portfolio" title="portfolio" /> i przekonaj
                się, jak wyglądają moje realizacje. Znajdziesz tam fotografie z{" "}
                <strong>plenerów</strong>, <strong>ślubów</strong> i rodzinnych
                uroczystości. To najlepszy sposób, by poznać mój styl i
                podejście do fotografii.
            </>
        ),
    },
    {
        title: "Oferta fotograficzna dopasowana do Ciebie",
        content: (
            <>
                Sprawdź moją{" "}
                <LinkShare href="/oferta" title="ofertę fotograficzną" /> –
                znajdziesz tam różnorodne <strong>pakiety</strong>: od krótkich
                sesji po pełne <strong>reportaże ślubne</strong>. Oferuję
                również <strong>portrety</strong>,{" "}
                <strong>zdjęcia reklamowe</strong> oraz{" "}
                <strong>sesje okolicznościowe</strong>. Każdy{" "}
                <strong>pakiet</strong> zawiera szczegóły dotyczące liczby
                zdjęć, czasu realizacji i orientacyjnego{" "}
                <strong>cennika</strong>.
            </>
        ),
    },
];

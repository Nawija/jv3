import Image from "next/image";
import Slub from "@/public/Images/slub.jpg";

export default function AboutMePage() {
    return (
        <div className="py-12 max-w-screen-lg mx-auto text-center anim-opacity">
            <h1 className="py-12 text-xl lg:text-2xl">
                Jarek Olszewski fotograf z Siedlec
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                <Image
                    height={200}
                    width={300}
                    quality={75}
                    src={Slub}
                    alt=".."
                />
                <Image
                    height={200}
                    width={300}
                    quality={75}
                    src={Slub}
                    alt=".."
                />
                <Image
                    height={200}
                    width={300}
                    quality={75}
                    src={Slub}
                    alt=".."
                />
                <Image
                    height={200}
                    width={300}
                    quality={75}
                    src={Slub}
                    alt=".."
                />
            </div>
            <h2 className="py-12 text-xl lg:text-2xl max-w-72 mx-auto">
                Sam o sobie, prywatnie i zawodowo(pasji)
            </h2>
            <div className="space-y-5 max-w-screen-sm mx-auto">
                <p>
                    pokrótce? szczęśliwy człowiek! od urodzenia wszędzie było
                    mnie pełno i tak pozostało mi do dziś. pozytywnie zakręcony
                    facet. dla dobrego zdjęcia wcisnę się w miejsca pozornie
                    niedostępne, ba! jak potrzeba utaplam się w błocie.
                    uwielbiam gdy wokół wiele się dzieje.
                </p>
                <p>
                    moja przygoda z fotografią zaczęła się przez przypadek i to
                    najlepszy przypadek, jaki mógł mnie spotkać w życiu! gdy w
                    2008 roku podczas meczu lokalnej drużyny zrobiłem pierwsze
                    zdjęcia, nie spodziewałem się, że będzie to początek pięknej
                    pasji, która w kolejnych latach będzie tylko rosnąć na sile.
                    przez te wszystkie lata zdążyłem poznać wiele świetnych
                    osób, dzięki którym mogłem spróbować sprawdzić się w wielu
                    dziedzinach fotografii. najbardziej lubię fotografować to co
                    niedostrzeżone przez wielu “chwile i momenty” ustawiając się
                    z boku, nikomu nie przeszkadzając. fotografując śluby,
                    chrzty czy inne uroczystości rodzinne mogę właśnie to robić
                    - łapać momenty, które inni chcą zapamiętać na całe życie.
                    to daje ogromną satysfakcję, gdy widzę, że moja praca
                    wywołuje uśmiech, a czasami łzy szczęścia.{" "}
                </p>
                <p>
                    fotografuję głównie w województwie mazowieckim - okolice
                    siedlec. odległość nigdy nie była dla mnie problemem. z
                    moimi klientami zwiedziłem już prawie całą polskę, za co
                    jestem im ogromnie wdzięczny, lecz po cichu liczę na więcej…{" "}
                </p>
            </div>
        </div>
    );
}

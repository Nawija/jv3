import ContactBtns from "@/components/ContactBtns";
import ContactForm from "@/components/ContactForm";
import { Metadata } from "next";

const pageTitle = "Kontakt - Jarek Olszewski | Fotograf ślubny Siedlce";
const pageDescription =
    "Skontaktuj się z Jarkiem Olszewskim - fotografem ślubnym z Siedlec. Zarezerwuj termin sesji, zapytaj o ofertę i poznaj szczegóły współpracy.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        images: [
            {
                url: "/Images/fotograf-siedlce-jarek-olszewski.jpg",
                width: 400,
                height: 260,
                alt: "Fotografia ślubna - Jarek Olszewski",
            },
        ],
    },
};

export default function ContactPage() {
    return (
        <div className="max-w-screen-md mx-auto px-4 anim-opacity py-10 text-gray-800 text-center">
            <h1 className="text-4xl mb-6 font-light">
                Porozmawiajmy o{" "}
                <strong className="font-light">Fotografii</strong>
            </h1>

            <p className="text-lg md:text-xl mb-10">
                Masz pytania dotyczące oferty fotograficznej, chcesz sprawdzić
                dostępność terminu lub po prostu porozmawiać? Skontaktuj się ze
                mną - jako fotograf zawsze jestem otwarty na rozmowę i pomogę
                jak tylko potrafię.
            </p>

            <ContactBtns />

            <section className="text-left">
                <ContactForm />
            </section>
        </div>
    );
}

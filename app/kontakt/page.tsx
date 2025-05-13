import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const contactDetails = [
    {
        href: "tel:507946719",
        icon: FaPhoneAlt,
        text: "507 946 719",
        label: "Zadzwoń do fotografa",
    },
    {
        href: "mailto:kontakt@jarekolszewski.pl",
        icon: IoMdMail,
        text: "kontakt@jarekolszewski.pl",
        label: "Napisz do fotografa",
    },
];

export default function ContactPage() {
    return (
        <main className="max-w-screen-md mx-auto px-4 anim-opacity py-10 text-gray-800 text-center">
            <h1 className="text-4xl mb-6">Porozmawiajmy o fotografii</h1>

            <p className="text-lg md:text-xl mb-10">
                Masz pytania dotyczące oferty fotograficznej, chcesz sprawdzić
                dostępność terminu lub po prostu porozmawiać? Skontaktuj się ze
                mną – jako fotograf zawsze jestem otwarty na rozmowę i pomogę
                jak tylko potrafię.
            </p>

            <section className="flex flex-col sm:flex-row justify-center items-stretch lg:items-center gap-4 my-4">
                <div className="bg-brand w-full h-px " />
                {contactDetails.map(
                    ({ href, icon: Icon, text, label }, index) => (
                        <Link
                            key={index}
                            href={href}
                            aria-label={label}
                            className="flex lg:w-max w-full text-center lg:items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-red-50 hover:border-red-200 transition duration-200"
                        >
                            <Icon className="text-[#6e2a23]" />
                            <span className="font-medium w-max">{text}</span>
                        </Link>
                    )
                )}
                <div className="bg-brand w-full h-px " />
            </section>

            <section className="text-left">
                <ContactForm />
            </section>
        </main>
    );
}

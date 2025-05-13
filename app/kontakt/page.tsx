import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const contactDetails = [
    { href: "tel:507946719", icon: FaPhoneAlt, text: "507 946 719" },
    {
        href: "mailto:kontakt@jarekolszewski.pl",
        icon: IoMdMail,
        text: "kontakt@jarekolszewski.pl",
    },
];

export default function ContactPage() {
    return (
        <div className="py-4 px-4 sm:px-6 lg:px-8">
            <div className="p-6 text-center max-w-screen-lg mx-auto space-y-4 anim-opacity">
                <h1 className="text-2xl font-semibold mb-4">
                    Porozmawiajmy o zdjęciach
                </h1>
                <p className="mb-4">
                    Jeśli chcesz dowiedzieć się więcej o ofercie, sprawdzić
                    dostępność terminu bądź uzyskać jakiekolwiek informacje,
                    zachęcam do kontaktu poprzez formularz bądź bezpośrednio
                    telefonicznie.
                </p>

                <div className="flex items-center justify-center w-full flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2">
                    {contactDetails.map(({ href, icon: Icon, text }, index) => (
                        <Link
                            key={index}
                            href={href}
                            className="flex items-center justify-center border px-2 py-1 border-stone-200 hover:bg-red-50 transition-colors duration-100 rounded-lg"
                        >
                            <Icon className="mr-2 text-[#6e2a23] text-sm" />
                            <span className="text-sm font-semibold">
                                {text}
                            </span>
                        </Link>
                    ))}
                </div>

                <ContactForm />
            </div>
        </div>
    );
}

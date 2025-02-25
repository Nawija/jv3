import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa"; // Adjust the import based on your file structure

export default function ContactPage() {
    return (
        <div className="bg-stone-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="p-6 text-center max-w-screen-lg mx-auto space-y-4">
                <h1 className="text-2xl font-semibold mb-4">
                    Porozmawiajmy o zdjęciach
                </h1>
                <p className="mb-4">
                    Jeśli chcesz dowiedzieć się więcej o ofercie, sprawdzić
                    dostępność terminu bądź uzyskać jakiekolwiek informacje.
                    Zachęcam do kontaktu poprzez formularz bądź bezpośrednio
                    telefonicznie.
                </p>
                <Link href='tel:507946719' className="flex items-center justify-center border w-max mx-auto px-4 py-2 border-green-300 rounded-lg">
                    <FaPhoneAlt className="mr-2 text-green-600" /> <span className="text-lg font-bold">507 946 719</span>
                </Link>
                <p>
                    <strong>M:</strong> kontakt@jarekolszewski.pl
                </p>
                <ContactForm />
            </div>
        </div>
    );
}

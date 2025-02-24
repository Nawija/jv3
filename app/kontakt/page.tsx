import ContactForm from "@/components/ContactForm"; // Adjust the import based on your file structure

export default function ContactPage() {
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="p-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Kontakt</h1>
                <p className="text-lg text-center text-gray-600 mb-6">
                    Masz pytania? Skontaktuj się ze mną za pomocą formularza poniżej,
                    a ja jak najszybciej się z Tobą skontaktuję.
                </p>
                <ContactForm />
            </div>
        </div>
    );
}

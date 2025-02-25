import ContactForm from "@/components/ContactForm"; // Adjust the import based on your file structure

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
                <p>
                    <strong>T:</strong> 507 946 719
                </p>
                <p>
                    <strong>M:</strong> kontakt@jarekolszewski.pl
                </p>
                <ContactForm />
            </div>
        </div>
    );
}

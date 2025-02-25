"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MainBtn } from "@/components/Buttons/MainBtn";

const FormField = ({
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    required = false,
}: {
    name: string;
    type?: string;
    placeholder: string;
    value: string;
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    required?: boolean;
}) => (
    <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full p-2 border rounded text-black"
        value={value}
        onChange={onChange}
    />
);

const MessageStatus = ({
    status,
    loading,
    statusType,
}: {
    status: string | null;
    loading: boolean;
    statusType: "success" | "error" | null;
}) => (
    <div className="text-sm flex items-center space-x-2">
        {loading && (
            <div className="w-4 h-4 border-2 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
        )}
        <p
            className={`ml-2 ${
                statusType === "success"
                    ? "text-green-500"
                    : statusType === "error"
                    ? "text-red-500"
                    : "text-white"
            }`}
        >
            {status}
        </p>
    </div>
);

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
    });
    const [status, setStatus] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);
    const [statusType, setStatusType] = useState<"success" | "error" | null>(
        null
    );
    const router = useRouter();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Wysyłanie...");
        setLoading(true);
        setStatusType(null);

        try {
            const response = await fetch("/api/kontakt", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Wiadomość wysłana!");
                setStatusType("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    date: "",
                    message: "",
                });

                setTimeout(() => {
                    router.push("/success");
                }, 1000);
            } else {
                setStatus("Błąd podczas wysyłania.");
                setStatusType("error");
            }
        } catch (error) {
            console.error("Błąd podczas wysyłania formularza:", error);
            setStatus("Błąd podczas wysyłania.");
            setStatusType("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg text-black">
            <p className="text-start text-sm font-bold">Formularz kontaktowy</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <FormField
                    name="name"
                    placeholder="Imię i nazwisko"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <FormField
                    name="email"
                    type="email"
                    placeholder="Adres e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <FormField
                    name="phone"
                    placeholder="Nr telefonu"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <FormField
                    name="date"
                    type="date"
                    placeholder="Data"
                    value={formData.date}
                    onChange={handleChange}
                />
                <textarea
                    name="message"
                    placeholder="Kilka słów o tym jakie zdjęcia Cię interesują."
                    required
                    className="w-full p-2 border rounded"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                <MainBtn type="submit">
                    {status ? (
                        <MessageStatus
                            status={status}
                            loading={loading}
                            statusType={statusType}
                        />
                    ) : (
                        <span>Wyślij wiadomość</span>
                    )}
                </MainBtn>
            </form>
        </div>
    );
}

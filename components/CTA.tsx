"use client";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import { MainBtn } from "./Buttons/MainBtn";
import { IoMdClose } from "react-icons/io";

export default function CTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <MainBtn className="uppercase" onClick={() => setIsModalOpen(true)}>
                Napisz do mnie
            </MainBtn>
            {isModalOpen && (
                <div className="fixed anim-opacity-s inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
                    <div className="bg-white p-6 shadow-lg max-w-lg w-[90%] relative">
                        <button
                            className="absolute top-2 right-2"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <IoMdClose className="text-2xl" />
                        </button>
                        <ContactForm />
                    </div>
                </div>
            )}
        </>
    );
}

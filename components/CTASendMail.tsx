"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { MainBtn } from "./Buttons/MainBtn";
import { IoMdClose } from "react-icons/io";

export default function CTASendMail({ title }: { title: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <MainBtn className="uppercase" onClick={() => setIsModalOpen(true)}>
                {title}
            </MainBtn>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed -top-2 left-0 h-screen w-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 shadow-lg max-w-lg w-[90%] relative"
                        >
                            <button
                                className="absolute top-2 right-2"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <IoMdClose className="text-2xl" />
                            </button>
                            <ContactForm />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

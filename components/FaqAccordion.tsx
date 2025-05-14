// app/components/FaqAccordion.tsx

"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqAccordion() {
    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">
                Najczęstsze pytania (FAQ)
            </h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Czy korzystanie z tej strony jest darmowe?
                    </AccordionTrigger>
                    <AccordionContent>
                        Tak, większość funkcji strony jest całkowicie darmowa, w
                        tym kalkulatory, blog i darmowy plan treningowy.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>
                        Jak mogę otrzymać darmowy plan treningowy?
                    </AccordionTrigger>
                    <AccordionContent>
                        Wystarczy zapisać się do newslettera – natychmiast
                        otrzymasz link do pobrania planu PDF.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>
                        Czy mogę skontaktować się z trenerem?
                    </AccordionTrigger>
                    <AccordionContent>
                        Tak, możesz skorzystać z formularza kontaktowego lub
                        napisać bezpośrednio na podany adres e-mail.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

"use client";

import * as React from "react";
import { format } from "date-fns";
import { pl } from "date-fns/locale"; // 🇵🇱 import lokalizacji PL
import { CalendarIcon } from "lucide-react";

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

export function DatePickerField({
    date,
    onChange,
    label,
}: {
    date: Date | undefined;
    onChange: (date: Date | undefined) => void;
    label?: string;
}) {
    return (
        <div className="w-full">
           
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP", { locale: pl }) : <span>Wybierz datę</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={onChange}
                        initialFocus
                        locale={pl} // 👈 Dodaj lokalizację do kalendarza
                    />
                </PopoverContent>
            </Popover>
        </div>
    );
}

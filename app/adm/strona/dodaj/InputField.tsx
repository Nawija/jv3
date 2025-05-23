import React from "react";

interface InputFieldProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    className?: string;
}

export default function InputField({
    value,
    onChange,
    placeholder,
    className = "",
}: InputFieldProps) {
    return (
        <input
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`block mb-2 w-full p-2 border ${className}`}
        />
    );
}

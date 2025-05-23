import React from "react";
import InputField from "./InputField";

interface SubSection {
    h3: string;
    content: string;
}

interface Props {
    subSections: SubSection[];
    sectionIndex: number;
    onUpdate: (
        sectionIndex: number,
        subIndex: number,
        field: keyof SubSection,
        value: string
    ) => void;
    onRemove: (sectionIndex: number, subIndex: number) => void;
    onAdd: (sectionIndex: number) => void;
}

export default function SubSectionForm({
    subSections,
    sectionIndex,
    onUpdate,
    onRemove,
    onAdd,
}: Props) {
    return (
        <div>
            {subSections.map((ss, si) => (
                <div
                    key={si}
                    className="mb-3 pl-4 border-l-2 border-gray-300 relative"
                >
                    <InputField
                        placeholder="Nagłówek H3"
                        value={ss.h3}
                        onChange={(val) =>
                            onUpdate(sectionIndex, si, "h3", val)
                        }
                    />
                    <textarea
                        placeholder="Treść podsekcji"
                        value={ss.content}
                        onChange={(e) =>
                            onUpdate(
                                sectionIndex,
                                si,
                                "content",
                                e.target.value
                            )
                        }
                        rows={3}
                        className="block mb-2 w-full p-2 border"
                    />
                    <button
                        type="button"
                        onClick={() => onRemove(sectionIndex, si)}
                        className="absolute top-0 right-0 text-red-600"
                    >
                        Usuń
                    </button>
                </div>
            ))}
            <button
                type="button"
                onClick={() => onAdd(sectionIndex)}
                className="text-blue-600"
            >
                Dodaj podsekcję
            </button>
        </div>
    );
}

import React from "react";
import { UseFormRegister, FieldArrayWithId } from "react-hook-form";
import AddButton from "../common/AddButton";
import FormInput from "../common/FormInput";

interface DynamicListProps {
    title: string;
    fields: FieldArrayWithId<any, string, "id">[];
    register: UseFormRegister<any>;
    nameBase: string;
    onAdd: () => void;
    onRemove: (index: number) => void;
}

const DynamicList: React.FC<DynamicListProps> = ({
    title,
    fields,
    register,
    nameBase,
    onAdd,
    onRemove,
}) => (
    <div className="space-y-4">
        <label className="text-sm font-medium text-gray-700">{title}:</label>
        {fields.map((field, i) => (
            <div key={field.id} className="flex gap-2 items-center">
                <FormInput
                    label={`${title} ${i + 1}`}
                    {...register(`${nameBase}.${i}`)}
                />
                <button
                    type="button"
                    onClick={() => onRemove(i)}
                    className="text-red-600 hover:underline"
                >
                    Usuń
                </button>
            </div>
        ))}
        <AddButton onClick={onAdd} label={`Dodaj ${title.toLowerCase()}`} />
    </div>
);

export default DynamicList;

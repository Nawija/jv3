"use client";

import AddButton from "@/components/common/AddButton";
import FormInput from "@/components/common/FormInput";
import SectionCard from "@/components/common/SectionCard";
import CategorySelect from "@/components/form-fields/CategorySelect";
import DynamicList from "@/components/form-fields/DynamicList";
import SubSection from "@/components/form-fields/SubSection";
import { useForm, useFieldArray, SubmitHandler, Path } from "react-hook-form";
import slugify from "slugify";

interface GridImage {
    index: number;
    position: string;
    title: string;
    desc: string;
}

interface SubSection {
    h3: string;
    content: string;
}

interface Section {
    h2: string;
    subSections: SubSection[];
}

interface FormData {
    title: string;
    description: string;
    blogCategory: string;
    heroImage: string;
    imageFolder: string;
    galleryFolder: string;
    content: {
        hero: {
            title: string;
            backgroundImages: string[];
            paragraphs: string[];
        };
        introTitle: string;
        carousel: {
            title: string;
            desc: string;
        };
        gridImages: GridImage[];
    };
    sections: Section[];
}

const AddPage: React.FC = () => {
    const { register, handleSubmit, control, reset } = useForm<FormData>({
        defaultValues: getDefaultValues(),
    });

    const { fields: gridImageFields } = useFieldArray({
        control,
        name: "content.gridImages",
    });

    const { fields: sectionFields, append: appendSection } = useFieldArray({
        control,
        name: "sections",
    });

    const {
        fields: paragraphFields,
        append: appendParagraph,
        remove: removeParagraph,
    } = useFieldArray<FormData>({
        control,
        name: "content.hero.paragraphs",
    });

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        if (!data.title) {
            alert("Tytuł jest wymagany");
            return;
        }

        data.content.hero.backgroundImages = [data.heroImage || ""];
        const slug = slugify(data.title, { lower: true });
        const payload = { ...data, slug };

        const res = await fetch("/api/admin/add-page", {
            method: "POST",
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            alert("Strona dodana!");
            reset();
        } else {
            alert(
                res.status === 409
                    ? "Strona o takim tytule już istnieje."
                    : "Błąd podczas zapisu."
            );
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-5xl mx-auto p-8 space-y-8"
        >
            <h1 className="text-4xl font-bold text-center mb-6">
                📝 Dodaj stronę
            </h1>

            <SectionCard title="📄 Informacje główne">
                {renderInputs(
                    [
                        { label: "Title MetaTag", name: "title" },
                        { label: "Opis Meta Tag", name: "description" },
                        { label: "Hero Image URL", name: "heroImage" },
                        { label: "Folder zdjęć", name: "imageFolder" },
                        { label: "Folder galerii", name: "galleryFolder" },
                        { label: "Tytuł Hero", name: "content.hero.title" },
                        { label: "Intro Title", name: "content.introTitle" },
                    ],
                    register
                )}

                <CategorySelect register={register} />

                <DynamicList
                    title="Paragrafy Hero"
                    fields={paragraphFields}
                    register={register}
                    nameBase="content.hero.paragraphs"
                    onAdd={() => appendParagraph("")}
                    onRemove={removeParagraph}
                />
            </SectionCard>

            <SectionCard title="🧩 Wprowadzenie i Karuzela">
                {renderInputs(
                    [
                        {
                            label: "Tytuł karuzeli",
                            name: "content.carousel.title",
                        },
                        {
                            label: "Opis karuzeli",
                            name: "content.carousel.desc",
                        },
                    ],
                    register
                )}
            </SectionCard>

            <SectionCard title="🖼️ Obrazki Grid (max 3)">
                {gridImageFields.map((field, i) => (
                    <div
                        key={field.id}
                        className="grid grid-cols-2 gap-4 mb-4 bg-gray-50 p-4 rounded-md"
                    >
                        {renderInputs(
                            [
                                {
                                    label: "Index",
                                    name: `content.gridImages.${i}.index`,
                                    type: "number",
                                    defaultValue: field.index.toString(),
                                },
                                {
                                    label: "Pozycja",
                                    name: `content.gridImages.${i}.position`,
                                    defaultValue: field.position,
                                },
                                {
                                    label: "Tytuł",
                                    name: `content.gridImages.${i}.title`,
                                    defaultValue: field.title,
                                },
                                {
                                    label: "Opis",
                                    name: `content.gridImages.${i}.desc`,
                                    defaultValue: field.desc,
                                },
                            ],
                            register
                        )}
                    </div>
                ))}
            </SectionCard>

            <SectionCard title="📚 Sekcje z podtytułami">
                {sectionFields.map((section, i) => (
                    <div
                        key={section.id}
                        className="mb-6 p-4 border bg-white rounded-md shadow-sm"
                    >
                        <FormInput
                            label={`Sekcja ${i + 1} - H2`}
                            {...register(`sections.${i}.h2`)}
                        />
                        <SubSection
                            control={control}
                            nestIndex={i}
                            register={register}
                        />
                    </div>
                ))}
                <AddButton
                    onClick={() => appendSection({ h2: "", subSections: [] })}
                    label="Dodaj sekcję"
                />
            </SectionCard>

            <div className="text-center">
                <button
                    type="submit"
                    className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    💾 Zapisz stronę
                </button>
            </div>
        </form>
    );
};

export default AddPage;

// Funkcja domyślnych wartości
function getDefaultValues(): FormData {
    return {
        title: "",
        description: "",
        blogCategory: "",
        heroImage: "",
        imageFolder: "",
        galleryFolder: "",
        content: {
            hero: {
                title: "",
                backgroundImages: [""],
                paragraphs: [""],
            },
            introTitle: "",
            carousel: {
                title: "",
                desc: "",
            },
            gridImages: [1, 2, 3].map((i) => ({
                index: i,
                position: "66% 0%",
                title: "",
                desc: "",
            })),
        },
        sections: [],
    };
}

function renderInputs(
    fields: {
        label: string;
        name: Path<FormData>;
        type?: string;
        defaultValue?: string;
    }[],
    register: ReturnType<typeof useForm<FormData>>["register"]
): React.ReactNode {
    return fields.map(({ label, name, type = "text", defaultValue }) => (
        <FormInput
            key={name}
            label={label}
            type={type}
            defaultValue={defaultValue}
            {...register(name)}
        />
    ));
}

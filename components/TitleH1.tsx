interface ImageComponentProps {
    title: string;
    desc: string;
}

export default function TitleH1({ title, desc }: ImageComponentProps) {
    return (
        <div className="py-12 px-4 flex items-center justify-center mx-auto text-center flex-col">
            <h1 className="text-2xl md:text-4xl font-semibold mb-6 max-w-2xl mx-auto">
                {title}
            </h1>
            {desc && <p className="pb-6 text-base lg:text-lg max-w-3xl mx-auto">{desc}</p>}
        </div>
    );
}

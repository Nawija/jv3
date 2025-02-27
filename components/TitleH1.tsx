interface ImageComponentProps {
    title: string;
    desc: string;
}

export default function ImageComponent({ title, desc }: ImageComponentProps) {
    return (
        <div className="py-12 px-4">
            <h1 className="text-xl lg:text-2xl font-medium">{title}</h1>
            {desc && <p className="text-sm py-1">{desc}</p>}
        </div>
    );
}

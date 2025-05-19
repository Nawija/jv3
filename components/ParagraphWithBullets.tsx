type Props = {
    title?: string;
    paragraph?: string;
    bullets: string[];
    className?: string;
};

export default function ParagraphWithBullets({
    title,
    paragraph,
    bullets,
    className = "",
}: Props) {
    return (
        <div className={`space-y-4 ${className}`}>
            {title && <h2 className="text-2xl font-semibold">{title}</h2>}
            {paragraph && <p className="text-lg text-gray-700">{paragraph}</p>}
            <ul className="list-disc pl-5 space-y-2 text-gray-800 text-start">
                {bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                ))}
            </ul>
        </div>
    );
}

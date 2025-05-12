export default function Skeleton({ className = "" }: { className?: string }) {
    return (
        <div className={`animate-pulse bg-stone-300 ${className}`} />
    );
}

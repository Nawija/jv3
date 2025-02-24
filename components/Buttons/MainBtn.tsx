import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative tracking-wider bg-black px-4 py-2 text-base font-light transition-colors text-white",
                className
            )}
        >
            {children}
        </button>
    );
}

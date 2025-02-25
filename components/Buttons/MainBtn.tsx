import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative tracking-wider bg-black hover:bg-stone-600 transition-colors duration-100 px-4 py-2 text-base font-light text-white",
                className
            )}
        >
            {children}
        </button>
    );
}

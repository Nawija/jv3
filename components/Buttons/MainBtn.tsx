import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
    return (
        <button
            {...rest}
            className={clsx(
                "relative font-normal bg-neutral-900 hover:bg-stone-700 transition-colors px-4 py-2 text-sm lg:text-base text-white uppercase border",
                className
            )}
        >
            {children}
        </button>
    );
}

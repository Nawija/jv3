import Link from "next/link";
import clsx from "clsx";
import type {
    ButtonHTMLAttributes,
    AnchorHTMLAttributes,
    ReactNode,
} from "react";

// Wspólne propsy
type BaseProps = {
    children: ReactNode;
    className?: string;
    "aria-label": string; // wymagane
};

// Przyciski i linki
type ButtonVariant = BaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AnchorVariant = BaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type MainBtnProps = ButtonVariant | AnchorVariant;

export function MainBtn(props: MainBtnProps) {
    const { children, className, "aria-label": ariaLabel, ...rest } = props;

    const classes = clsx(
        "inline-flex items-center justify-center text-center font-normal bg-neutral-900 hover:bg-stone-700 transition-colors px-4 py-3 text-sm lg:text-base text-white uppercase rounded",
        className
    );

    if ("href" in props) {
        // Usuwamy aria-label z reszty, by nie było konfliktu
        const { href, ...restWithoutHref } = rest as AnchorVariant;
        const { ["aria-label"]: _removed, ...linkRest } = restWithoutHref;

        return (
            <Link
                href={href}
                className={classes}
                aria-label={ariaLabel}
                {...linkRest}
            >
                {children}
            </Link>
        );
    }

    // Button też bez powtórzenia aria-label
    const { ["aria-label"]: _removed, ...buttonRest } =
        rest as ButtonHTMLAttributes<HTMLButtonElement>;

    return (
        <button className={classes} aria-label={ariaLabel} {...buttonRest}>
            {children}
        </button>
    );
}

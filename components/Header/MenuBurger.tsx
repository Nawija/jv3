import { MenuBurgerProps } from "@/types/types";

export default function MenuBurger({
    handleShowMenu,
    showMenu,
}: MenuBurgerProps) {
    const burgerClass = "h-[1px] w-5 bg-color duration-300";

    return (
        <button
            onClick={handleShowMenu}
            aria-label="Menu"
            className="z-[999] flex ml-auto flex-col items-center justify-center space-y-1.5 p-1 lg:hidden"
        >
            <div
                className={`${burgerClass} transition-transform ${
                    showMenu
                        ? "bg-white translate-y-1.5 rotate-[405deg]"
                        : "bg-[#6e2a23]"
                }`}
            />
            <div
                className={`${burgerClass} transition-opacity ${
                    showMenu ? "bg-white opacity-0" : "bg-[#6e2a23]"
                }`}
            />
            <div
                className={`${burgerClass} transition-transform ${
                    showMenu
                        ? "bg-white -translate-y-2 -rotate-45"
                        : "bg-[#6e2a23]"
                }`}
            />
        </button>
    );
}

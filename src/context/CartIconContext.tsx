import { useRef, type ReactNode } from "react";
import { CartIconContext } from "./CartIconContextDef";

export const CartIconProvider = ({ children }: { children: ReactNode }) => {
    const cartIconRef = useRef<HTMLDivElement>(null);
    const favoritesIconRef = useRef<HTMLDivElement>(null);

    return (
        <CartIconContext.Provider value={{ cartIconRef, favoritesIconRef }}>
            {children}
        </CartIconContext.Provider>
    );
};
